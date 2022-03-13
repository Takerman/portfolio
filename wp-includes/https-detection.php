<?php
/**
 * HTTPS detection functions.
 *
 * @package WordPress
 * @since 5.7.0
 */

/**
 * Checks whether the website is using HTTPS.
 *
 * This is based on whether both the home and site URL are using HTTPS.
 *
 * @since 5.7.0
 * @see wp_is_home_url_using_https()
 * @see wp_is_site_url_using_https()
 *
 * @return bool True if using HTTPS, false otherwise.
 */
function wp_is_using_https() {
	if ( ! wp_is_home_url_using_https() ) {
		return false;
	}

	return wp_is_site_url_using_https();
}

/**
 * Checks whether the current site URL is using HTTPS.
 *
 * @since 5.7.0
 * @see home_url()
 *
 * @return bool True if using HTTPS, false otherwise.
 */
function wp_is_home_url_using_https() {
	return 'https' === wp_parse_url( home_url(), PHP_URL_SCHEME );
}

/**
 * Checks whether the current site's URL where WordPress is stored is using HTTPS.
 *
 * This checks the URL where WordPress application files (e.g. wp-blog-header.php or the wp-admin/ folder)
 * are accessible.
 *
 * @since 5.7.0
 * @see site_url()
 *
 * @return bool True if using HTTPS, false otherwise.
 */
function wp_is_site_url_using_https() {
	// Use direct option access for 'siteurl' and manually run the 'site_url'
	// filter because `site_url()` will adjust the scheme based on what the
	// current request is using.
	/** This filter is documented in wp-includes/link-template.php */
	$site_url = apply_filters( 'site_url', get_option( 'siteurl' ), '', null, null );

	return 'https' === wp_parse_url( $site_url, PHP_URL_SCHEME );
}

/**
 * Checks whether HTTPS is supported for the server and domain.
 *
 * @since 5.7.0
 *
 * @return bool True if HTTPS is supported, false otherwise.
 */
function wp_is_https_supported() {
	$https_detection_errors = get_option( 'https_detection_errors' );

	// If option has never been set by the Cron hook before, run it on-the-fly as fallback.
	if ( false === $https_detection_errors ) {
		wp_update_https_detection_errors();

		$https_detection_errors = get_option( 'https_detection_errors' );
	}

	// If there are no detection errors, HTTPS is supported.
	return empty( $https_detection_errors );
}

/**
 * Runs a remote HTTPS request to detect whether HTTPS supported, and stores potential errors.
 *
 * This internal function is called by a regular Cron hook to ensure HTTPS support is detected and maintained.
 *
 * @since 5.7.0
 * @access private
 */
function wp_update_https_detection_errors() {
	/**
	 * Short-circuits the process of detecting errors related to HTTPS support.
	 *
	 * Returning a `WP_Error` from the filter will effectively short-circuit the default logic of trying a remote
	 * request to the site over HTTPS, storing the errors array from the returned `WP_Error` instead.
	 *
	 * @since 5.7.0
	 *
	 * @param null|WP_Error $pre Error object to short-circuit detection,
	 *                           or null to continue with the default behavior.
	 */
	$support_errors = apply_filters( 'pre_wp_update_https_detection_errors', null );
	if ( is_wp_error( $support_errors ) ) {
		update_option( 'https_detection_errors', $support_errors->errors );
		return;
	}

	$support_errors = new WP_Error();

	$response = wp_remote_request(
		home_url( '/', 'https' ),
		array(
			'headers'   => array(
				'Cache-Control' => 'no-cache',
			),
			'sslverify' => true,
		)
	);

	if ( is_wp_error( $response ) ) {
		$unverified_response = wp_remote_request(
			home_url( '/', 'https' ),
			array(
				'headers'   => array(
					'Cache-Control' => 'no-cache',
				),
				'sslverify' => false,
			)
		);

		if ( is_wp_error( $unverified_response ) ) {
			$support_errors->add(
				'https_request_failed',
				__( 'HTTPS request failed.' )
			);
		} else {
			$support_errors->add(
				'ssl_verification_failed',
				__( 'SSL verification failed.' )
			);
		}

		$response = $unverified_response;
	}

	if ( ! is_wp_error( $response ) ) {
		if ( 200 !== wp_remote_retrieve_response_code( $response ) ) {
			$support_errors->add( 'bad_response_code', wp_remote_retrieve_response_message( $response ) );
		} elseif ( false === wp_is_local_html_output( wp_remote_retrieve_body( $response ) ) ) {
			$support_errors->add( 'bad_response_source', __( 'It looks like the response did not come from this site.' ) );
		}
	}

	update_option( 'https_detection_errors', $support_errors->errors );
}

/**
 * Schedules the Cron hook for detecting HTTPS support.
 *
 * @since 5.7.0
 * @access private
 */
function wp_schedule_https_detection() {
	if ( wp_installing() ) {
		return;
	}

	if ( ! wp_next_scheduled( 'wp_https_detection' ) ) {
		wp_schedule_event( time(), 'twicedaily', 'wp_https_detection' );
	}
}

/**
 * Disables SSL verification if the 'cron_request' arguments include an HTTPS URL.
 *
 * This prevents an issue if HTTPS breaks, where there would be a failed attempt to verify HTTPS.
 *
 * @since 5.7.0
 * @access private
 *
 * @param array $request The Cron request arguments.
<<<<<<< HEAD
 * @return array The filtered Cron request arguments.
=======
 * @return array $request The filtered Cron request arguments.
>>>>>>> e18f5ac9ad7aab8535f127152ee52f505e0cbc73
 */
function wp_cron_conditionally_prevent_sslverify( $request ) {
	if ( 'https' === wp_parse_url( $request['url'], PHP_URL_SCHEME ) ) {
		$request['args']['sslverify'] = false;
	}
	return $request;
}

/**
 * Checks whether a given HTML string is likely an output from this WordPress site.
 *
 * This function attempts to check for various common WordPress patterns whether they are included in the HTML string.
 * Since any of these actions may be disabled through third-party code, this function may also return null to indicate
 * that it was not possible to determine ownership.
 *
 * @since 5.7.0
 * @access private
 *
 * @param string $html Full HTML output string, e.g. from a HTTP response.
 * @return bool|null True/false for whether HTML was generated by this site, null if unable to determine.
 */
function wp_is_local_html_output( $html ) {
	// 1. Check if HTML includes the site's Really Simple Discovery link.
	if ( has_action( 'wp_head', 'rsd_link' ) ) {
		$pattern = preg_replace( '#^https?:(?=//)#', '', esc_url( site_url( 'xmlrpc.php?rsd', 'rpc' ) ) ); // See rsd_link().
		return false !== strpos( $html, $pattern );
	}

	// 2. Check if HTML includes the site's Windows Live Writer manifest link.
	if ( has_action( 'wp_head', 'wlwmanifest_link' ) ) {
		// Try both HTTPS and HTTP since the URL depends on context.
		$pattern = preg_replace( '#^https?:(?=//)#', '', includes_url( 'wlwmanifest.xml' ) ); // See wlwmanifest_link().
		return false !== strpos( $html, $pattern );
	}

	// 3. Check if HTML includes the site's REST API link.
	if ( has_action( 'wp_head', 'rest_output_link_wp_head' ) ) {
		// Try both HTTPS and HTTP since the URL depends on context.
		$pattern = preg_replace( '#^https?:(?=//)#', '', esc_url( get_rest_url() ) ); // See rest_output_link_wp_head().
		return false !== strpos( $html, $pattern );
	}

	// Otherwise the result cannot be determined.
	return null;
}
