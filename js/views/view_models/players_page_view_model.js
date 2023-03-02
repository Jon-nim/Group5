    import  { mockPlayerData, mockPlayerLookups } from '../../models/mock/mock_players_data.js'
var playerViewModel= {
    entity: "players",           //key used for LocalStorage
    entitySingle: "player",      //singular in case you need for alert message
  
    data: mockPlayerData,          //mock data we are going to use for now, global (included from js/models/mock_team_data.js)
    lookups: mockPlayerLookups,
    list: {
        
        deleteModalContainerId:"deleteModal", 
        editModalContainerId:"editModal",
        alertContainerId: "alertContainer",   //container to store dismissible alert
        wrapperContainerId: "app_container",
        wrapperTemplateUrl: "js/views/partials/list_view_wrapper.ejs",
        templateUrl: "js/views/partials/list_view.ejs",
        containerId:"tableContainer", 
        searchInputId: "searchInput",
        resetButtonId: "resetView",
        newButtonId: "newButton",
        clearSearchButtonId: "clearSearch",
        options: {                 //default options sent to LocalStorageService
            sortCol: "full_name",
            sortDir: "asc",
            limit: "",
            offset: "",
            filterCol: "",
            filterStr: ""
        },
        listTitle: "BBQ Chefs",
       
        id: "my-list",
        tableClasses: "table table-dark table-hover mt-2",   //classes for table tag
        thClasses:"bg-black bg-gradient",                    //classes for my th tags (you may not need)
        
        nameCol: "full_name",                                     //what data column do we use to display the item 'name'
        /*Columns to be displayed in your bootstrap table.  I used 'popover=true' to indicate I wanted to include that colum in my popover.
        This allowed me to keep my code 'generic'*/
        enablePopovers: true, 
        columns: [
            {
                label: "Player Name",
                name: "full_name",
                popover: "true"            //true if you want to show in popover
            },
            {
                label: "Team Name",
                name: "team_name",
                popover: "true"
            },
            {
                label: "Phone Number",
                name: "phone",
                popover: "true"
            },{
                label: "Email Address",
                name: "email",
                popover: "true"
            }
        ]
      },
    //The following can be used in rendering your form
    //dynamic rendering via lodash is recommended, but not required for the final
    form: {
        id: "player-form",
        wrapperContainerId: "",
        wrapperTemplateUrl: "",
        templateUrl: "js/views/partials/form_view.ejs",
        containerId:"formContainer", 
        addFormTitle: "Add Player",
        createFormTitle: "Create Player",
        editFormTitle: "Edit Player",
        actionUrl: "",
        method: "POST",
        lookupName:"players",
        suppressSubmit: true,
    
        //Meta data for fields.  You can use for rendering your list dynamically.
        //if 'list' is true, then you should render this field in your list
        fields: [
            {
                label: "id",
                tag: "input",
                defaultValue:"",
                attributes: {
                    id:"id",
                    name: "id",
                    type: "hidden",
                },
                validation: {
                    required: false,
                }
            },
            {
                label: "First Name",
                tag: "input",
                placeholder: "Enter your first name here",
                attributes: {
                    id: "first_name",
                    name: "first_name",
                    type: "text",
                    placeholder: "Enter your First name here",
                    class: "form-control"
                },
                //as you can see,this player meta data could easily be used to dynamically validate your form
                validation: {
                    required: true,
                    requiredMessage: "First name is required!"
                }
            },
            {
                label: "Last Name",
                tag: "input",
                placeholder: "Enter your last name here",
                attributes: {
                    id: "last_name",
                    name: "last_name",
                    type: "text",
                    placeholder: "Enter your Last name here",
                    class: "form-control"
                },
                //as you can see,this player meta data could easily be used to dynamically validate your form
                validation: {
                    required: true,
                    requiredMessage: "Last name is required!"
                }
            },
            {
                label: "Team",
                lookupName: "teams",
                tag: "select",
                defaultVal: "-1", //default value for dropdown, usually the value that matches 'Select a Coach'
                attributes: {
                    id: "team_id",
                    name: "team_id",
                    placeholder: "Select a Team"
                },
                validation: {
                    required: true,
                    requiredMessage: "Team is required"
                }
            },
            {
                label: "Username",
                tag: "input",
                attributes: {
                    id: "user_name",
                    name: "user_name",
                    type: "text",
                    placeholder: "Enter your Username here",
                    class: "form-control"
                },
                //as you can see,this player meta data could easily be used to dynamically validate your form
                validation: {
                    required: true,
                    requiredMessage: "Username is required!"
                }
            },
            
            {
                label: "Address",
                tag: "input",
                attributes: {
                    id: "address1",
                    name: "address1",
                    type: "text",
                    placeholder: "Enter your Address1 here",
                    class: "form-control"
                },
        
                validation: {
                    required: true,
                    requiredMessage: "Address is required!"
                }
            },
            {
                label: "Address 2",
                tag: "input",
                attributes: {
                    id: "address2",
                    name: "address2",
                    type: "text",
                    placeholder: "Enter your Address2 here",
                    class: "form-control"
                },
                validation: {
                    required: false
                }
            },
            {
                label: "City",
                tag: "input",
                attributes: {
                    id: "city",
                    name: "city",
                    type: "text",
                    placeholder: "Enter your City here",
                    class: "form-control"
                },
                validation: {
                    required: true,
                    requiredMessage: "City is required!"
                }
            },
            {
                label: "State",
                tag: "input",
                attributes: {
                    id: "state",
                    name: "state",
                    type: "text",
                    placeholder: "Enter your State here",
                    class: "form-control",
                    
                },
                validation: {
                    required: true,
                    requiredMessage: "State is required!"
                }
            },
            {
                label: "Zip",
                tag: "input",
                attributes: {
                    id: "zip",
                    name: "zip",
                    type: "zip",
                    placeholder: "Enter your Zip here",
                    class: "form-control",
                    title: "Zip code format, 99999, or 99999-4444",
                    pattern: "^[0-9]{5}(?:-[0-9]{4})?$"
                },
                validation: {
                    required: true,
                    requiredMessage: "Zip Code is required!"
                }
            },
            {
                label: "Email",
                tag: "input",
                attributes: {
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "Enter your Email here",
                    class: "form-control",
                    //pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                },
                validation: {
                    required: true,
                    requiredMessage: "Email Address is required!",
                    invalidMessage: "Invalid Email address",
                }
            },
            {
                label: "Phone Number",
                tag: "input",
                attributes: {
                    id: "phone",
                    name: "phone",
                    type: "text",
                    placeholder: "Enter your phone number here",
                    class: "form-control",
                    title: "(999) 999-9999",
                    pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                },
                validation: {
                    required: true,
                    requiredMessage: "Phone Number is required!",
                    invalidMessage: "Invalid Phone Number"
                }
            },
            {
                label: "Password",
                tag: "input",
                attributes: {
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Enter your password here",
                    class: "form-control",
                   // title: "Invalid Password-must have 1 upper case, 1 lower case, 1 number, and min 8 chars",
                   // pattern: "^?=.*\d?=.*[a-z]?=.*[A-Z]?=.*[a-zA-Z].{8,}$"
                },
                validation: {
                    required: true,
                    requiredMessage: "Password!",
                    invalidMessage: "Invalid Password-must have 1 upper case, 1 lower case, 1 number, and min 8 chars"
                }
            },{
                label: "Notes",
                name: "notes",
                inputType: "text",
                placeholder: "Enter your Notes",
                list: false,
                label: "Notes",
                tag: "input",
                attributes: {
                    id: "notes",
                    name: "notes",
                    type: "text",
                    placeholder: "Enter your notes here",
                    class: "form-control"
                },
                validation: {
                    required:false
                }
            }
        
        ]
    }
    
}

export default playerViewModel;