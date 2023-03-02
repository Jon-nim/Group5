/* RestStorageService Class */
/* Use this template as a starter and complete the items that say 'TODO' */
import StorageService from './storage_service.js'

export default class RestStorageService extends StorageService {
    constructor(entity, entitySingle, options = {}, host) {
        super(null,null, entity, entitySingle, options);
        this.host = host;
        this.isLocal=false;
    }

    get apiName(){return this.entity;}
    get hostPrefix(){
        return `http://${this.host}`
    }
    get apiUrl(){
        return `${this.hostPrefix}/${this.apiName}`;
    }
    
    /* List function*/
    async list(options = this.model.options) {

        let url = `${this.apiUrl}/${this.utils.getQueryString(options)}`;

        try {
            const response = await fetch(url);
            this.model.data = await response.json();
           
            return this.model.data;
        }
        catch (msg) {
            console.log(msg);
            throw (msg);
        }
    }

    async read(id) {
        try{
            const response = await fetch(`${this.apiUrl}/${id}`);
            return await response.json();
            
        }
        catch(err){
            console.log(err);
            throw(err);
        }
        // return fetch(`${this.apiUrl}/${id}`).then(out => out.json()).catch(e => {
        //     console.error(e);
        //     return null;
        // });
    }

    async update(id, postData) {
        
        return fetch(`${this.apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(out => out.json()).catch(e => {
            console.error(e);
            return null;
        });
    }

    async create(postData) {
        
        return fetch(`${this.apiUrl}/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(out => out.json()).catch(e => {
            console.error(e);
            return null;
        });
    }

    async delete(id) {
        
        return fetch(`${this.apiUrl}/${id}`, {
            method: "DELETE"
        }).then(out => out.json()).catch(e => {
            console.error(e);
            return null;
        });
    }
    
    async getLookup(lookupName){
        let url = `${this.hostPrefix}/lookups/${lookupName}`;

        try {
            if (lookupName in super.lookups){
                return this.lookup(lookupName);
            }
            else
            {
                const response = await fetch(url);
                super.lookups[lookupName] = await response.json();
            
                return super.lookups[lookupName];
            }
        }
        catch (msg) {
            console.log(msg);
            throw (msg);
        }
        
    }
    async reset(){
        this.model.data=[];
    }

}