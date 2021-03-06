/**
 * User API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LimitsInternet from './LimitsInternet';

/**
* The Limits model module.
* @module model/Limits
* @version 1.0
*/
export default class Limits {
    /**
    * Constructs a new <code>Limits</code>.
    * Resources allocated to container/project/user.
    * @alias module:model/Limits
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Limits</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Limits} obj Optional instance to populate.
    * @return {module:model/Limits} The populated <code>Limits</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Limits();
                        
            
            if (data.hasOwnProperty('RAM')) {
                obj['RAM'] = ApiClient.convertToType(data['RAM'], 'Number');
            }
            if (data.hasOwnProperty('CPU')) {
                obj['CPU'] = ApiClient.convertToType(data['CPU'], 'Number');
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = ApiClient.convertToType(data['disk'], 'Number');
            }
            if (data.hasOwnProperty('internet')) {
                obj['internet'] = LimitsInternet.constructFromObject(data['internet']);
            }
        }
        return obj;
    }

    /**
    * in bytes
    * @member {Number} RAM
    */
    'RAM' = undefined;
    /**
    * in Hz
    * @member {Number} CPU
    */
    'CPU' = undefined;
    /**
    * in bytes
    * @member {Number} disk
    */
    'disk' = undefined;
    /**
    * @member {module:model/LimitsInternet} internet
    */
    'internet' = undefined;




}
