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
import ApplicationToInstall from './ApplicationToInstall';
import Limits from './Limits';
import Template from './Template';

/**
* The InlineResponse2001 model module.
* @module model/InlineResponse2001
* @version 1.0
*/
export default class InlineResponse2001 {
    /**
    * Constructs a new <code>InlineResponse2001</code>.
    * @alias module:model/InlineResponse2001
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2001} obj Optional instance to populate.
    * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();
                        
            
            if (data.hasOwnProperty('templateTypes')) {
                obj['templateTypes'] = ApiClient.convertToType(data['templateTypes'], [Template]);
            }
            if (data.hasOwnProperty('applicationsToInstall')) {
                obj['applicationsToInstall'] = ApiClient.convertToType(data['applicationsToInstall'], [ApplicationToInstall]);
            }
            if (data.hasOwnProperty('maxLimits')) {
                obj['maxLimits'] = Limits.constructFromObject(data['maxLimits']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Template>} templateTypes
    */
    'templateTypes' = undefined;
    /**
    * @member {Array.<module:model/ApplicationToInstall>} applicationsToInstall
    */
    'applicationsToInstall' = undefined;
    /**
    * @member {module:model/Limits} maxLimits
    */
    'maxLimits' = undefined;




}
