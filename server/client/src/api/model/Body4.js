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
import Limits from './Limits';

/**
* The Body4 model module.
* @module model/Body4
* @version 1.0
*/
export default class Body4 {
    /**
    * Constructs a new <code>Body4</code>.
    * @alias module:model/Body4
    * @class
    * @param name {String} 
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Body4</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body4} obj Optional instance to populate.
    * @return {module:model/Body4} The populated <code>Body4</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body4();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = Limits.constructFromObject(data['limits']);
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {module:model/Limits} limits
    */
    'limits' = undefined;




}
