(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["local-seo-pro-LocalSeoCta-vue"],{"734c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-local-business"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-local-business","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("localSeo"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image,t.strings.showOpeningHours,t.strings.googleMaps]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.locationSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?i("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})},s=[],a=i("5530"),o=(i("7db0"),i("2f62")),r={data:function(){return{failed:!1,activationLoading:!1,strings:{locationSeoHeader:this.$t.__("Enable Local SEO on your Site",this.$tdPro),ctaDescription:this.$t.__("The Local SEO module is a premium feature that enables businesses to tell Google about their business, including their business name, address and phone number, opening hours and price range.  This information may be displayed as a Knowledge Graph card or business carousel in the search engine sidebar.",this.$tdPro),ctaButtonText:this.$t.__("Activate Local SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Local SEO",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),selectTimeZoneCTA:this.$t.__("Select your timezone",this.$td),googleMaps:this.$t.__("Google Maps",this.$td),businessType:this.$t.__("Type",this.$td),businessContact:this.$t.__("Contact Info",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),image:this.$t.__("Image",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},computed:Object(a["a"])({},Object(o["e"])(["addons"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["b"])(["installPlugins"])),Object(o["d"])(["updateAddon"])),{},{activateAddon:function(){var t=this;this.failed=!1,this.activationLoading=!0;var e=this.addons.find((function(t){return"aioseo-local-business"===t.sku}));this.installPlugins([{plugin:e.basename}]).then((function(e){t.activationLoading=!1,e.body.failed.length?t.failed=!0:window.location.reload()})).catch((function(){t.activationLoading=!1}))}})},c=r,l=i("2877"),d=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports}}]);