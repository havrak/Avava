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
import ContainerResourceStateDiskDevices from './ContainerResourceStateDiskDevices';

/**
* The ContainerResourceStateDisk model module.
* @module model/ContainerResourceStateDisk
* @version 1.0
*/
export default class ContainerResourceStateDisk {
    /**
    * Constructs a new <code>ContainerResourceStateDisk</code>.
    * @alias module:model/ContainerResourceStateDisk
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ContainerResourceStateDisk</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContainerResourceStateDisk} obj Optional instance to populate.
    * @return {module:model/ContainerResourceStateDisk} The populated <code>ContainerResourceStateDisk</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerResourceStateDisk();
                        
            
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [ContainerResourceStateDiskDevices]);
            }
        }
        return obj;
    }

    /**
    * disk limit for all devices of this container in bytes
    * @member {Number} limit
    */
    'limit' = undefined;
    /**
    * @member {Array.<module:model/ContainerResourceStateDiskDevices>} devices
    */
    'devices' = undefined;




}
