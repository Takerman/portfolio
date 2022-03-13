<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting;

class Cohort extends \Google\Site_Kit_Dependencies\Google\Model
{
    protected $dateRangeType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\DateRange::class;
    protected $dateRangeDataType = '';
    public $name;
    public $type;
    /**
     * @param DateRange
     */
    public function setDateRange(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\DateRange $dateRange)
    {
        $this->dateRange = $dateRange;
    }
    /**
     * @return DateRange
     */
    public function getDateRange()
    {
        return $this->dateRange;
    }
    public function setName($name)
    {
        $this->name = $name;
    }
    public function getName()
    {
        return $this->name;
    }
    public function setType($type)
    {
        $this->type = $type;
    }
    public function getType()
    {
        return $this->type;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\Cohort::class, 'Google\\Site_Kit_Dependencies\\Google_Service_AnalyticsReporting_Cohort');
