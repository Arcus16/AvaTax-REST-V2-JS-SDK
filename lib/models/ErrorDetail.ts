/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * 
 * @export
 * @interface ErrorDetail
 */
 export interface ErrorDetail {
    /**
     * @type {Enums.ErrorCodeId}
     * @memberof ErrorDetail
     */
   code?: Enums.ErrorCodeId;
    /**
     * @type {number}
     * @memberof ErrorDetail
     */
   number?: number;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   message: string;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   description: string;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   faultCode: string;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   faultSubCode: string;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   helpLink: string;
    /**
     * @type {string}
     * @memberof ErrorDetail
     */
   refersTo: string;
    /**
     * @type {Enums.SeverityLevel}
     * @memberof ErrorDetail
     */
   severity?: Enums.SeverityLevel;
 }