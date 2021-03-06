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
import Project from './Project';

/**
* The UserProjects model module.
* @module model/UserProjects
* @version 1.0
*/
export default class UserProjects {
    /**
    * Constructs a new <code>UserProjects</code>.
    * object containing all the data about projects that this user participates in. This includes all of his projects and all project where user is only a participant.
    * @alias module:model/UserProjects
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserProjects</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserProjects} obj Optional instance to populate.
    * @return {module:model/UserProjects} The populated <code>UserProjects</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProjects();
                        
            
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = Limits.constructFromObject(data['limits']);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [Project]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Limits} limits
    */
    'limits' = undefined;
    /**
    * @member {Array.<module:model/Project>} projects
    */
    'projects' = undefined;




}
