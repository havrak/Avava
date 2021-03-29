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

/**
* The NetworkStateAdresses model module.
* @module model/NetworkStateAdresses
* @version 1.0
*/
export default class NetworkStateAdresses {
    /**
    * Constructs a new <code>NetworkStateAdresses</code>.
    * @alias module:model/NetworkStateAdresses
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworkStateAdresses</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworkStateAdresses} obj Optional instance to populate.
    * @return {module:model/NetworkStateAdresses} The populated <code>NetworkStateAdresses</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkStateAdresses();
                        
            
            if (data.hasOwnProperty('family')) {
                obj['family'] = ApiClient.convertToType(data['family'], 'String');
            }
            if (data.hasOwnProperty('adress')) {
                obj['adress'] = ApiClient.convertToType(data['adress'], 'String');
            }
            if (data.hasOwnProperty('netmask')) {
                obj['netmask'] = ApiClient.convertToType(data['netmask'], 'Number');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} family
    */
    'family' = undefined;
    /**
    * @member {String} adress
    */
    'adress' = undefined;
    /**
    * @member {Number} netmask
    */
    'netmask' = undefined;
    /**
    * @member {String} scope
    */
    'scope' = undefined;




}
