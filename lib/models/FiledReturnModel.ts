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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Filing Returns Model
 * @export
 * @interface FiledReturnModel
 */
 export interface FiledReturnModel {
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   endPeriodMonth?: number;
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   endPeriodYear?: number;
    /**
     * @type {string}
     * @memberof FiledReturnModel
     */
   taxformCode?: string;
 }