import  { mockTeamData, mockTeamLookups } from '../../models/mock/mock_team_data.js'
/* view_model.js -Review this file and the notes I've added to understand how these are used.
As you integrate this pattern into your LMS1 code base, you may make some changes or add your own meta data.  This is just an example showing how I did it
*/
var teamViewModel = {
    entity: "teams",           //key used for LocalStorage
    entitySingle: "team",      //singular in case you need for alert message
    
    data: mockTeamData,          //mock data we are going to use for now, global (included from js/models/mock_team_data.js)
    lookups: mockTeamLookups,
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
            sortCol: "name",
            sortDir: "asc",
            limit: "",
            offset: "",
            filterCol: "",
            filterStr: ""
        },
        listTitle: "BBQ Teams",
       
        id: "my-list",
        tableClasses: "table table-dark table-hover mt-2",   //classes for table tag
        thClasses:"bg-black bg-gradient",                    //classes for my th tags (you may not need)
        
        logoCol: "teamPhoto",                                //what data column holds the path to the team logo (if used in your code)
        nameCol: "name",                                     //what data column do we use to display the item 'name'
        /*Columns to be displayed in your bootstrap table.  I used 'popover=true' to indicate I wanted to include that colum in my popover.
        This allowed me to keep my code 'generic'*/
        enablePopovers: true,
        columns: [
            {
                label: "Team Name",
                name: "name",
                popover: "true"            //true if you want to show in popover
            },
            {
                label: "Coach Name",
                name: "coachName",
                popover: "true"
            },
            {
                label: "Coach Email",
                name: "coachEmail",
                popover: "true"
            },{
                label: "Coach Phone",
                name: "coachPhone",
                popover: "true"
            },{
                label: "Motto",
                name: "motto",
                popover: "true"
            }

        ]
    },
    form: {
        id: "team-form",
        wrapperContainerId: "",
        wrapperTemplateUrl: "",
        templateUrl: "js/views/partials/form_view.ejs",
        containerId:"formContainer", 
        addFormTitle: "Add Team",
        createFormTitle: "Create Team",
        editFormTitle: "Edit Team",
        actionUrl: "",
        method: "POST",
        lookupName: "teams",
        suppressSubmit: true,
        fields: [
            {
                label: "id",
                tag: "input",
                defaultValue:"",
                attributes: {
                    type: "hidden",
                    name: "id",
                    id: "id",
                },
                validation: {
                    required: false,
                }
            },
            {
                label: "Team Name",
                tag: "input",
                defaultValue:"",
                attributes: {
                    id: "name",
                    name: "name",
                    type: "text",
                    placeholder: "Enter your Team name here",
                    class: "form-control"
                },
                
                validation: {
                    required: true,
                    requiredMessage: "Team Name is required"
                }
            },
            {
                label: "League Id",
                
                tag: "input",
                defaultValue:"1",
                attributes: {
                    id: "league_id",
                    name: "league_id",
                    type: "hidden",
                },
                validation: {
                    required: false,
                }
            },
            {
                label: "Coach",
                lookupName: "coaches",
                tag: "select",
                defaultVal: "", //default value for dropdown, usually the value that matches 'Select a Coach'
                attributes: {
                    id: "coach_id",
                    name: "coach_id",
                    placeholder: "Select a Coach",
                    class:"form-control"
                },
                validation: {
                    required: true,
                    requiredMessage: "Coach is required"
                }
            },

            {
                label: "Team Notes",
                tag: "input",
                defaultValue:"",
                attributes: {
                    id:"notes",
                    name:"notes",
                    type: "text",
                    placeholder: "Enter your Team notes here",
                    class: "form-control"
                },
                validation: {
                    required: false
                }  
            } ,
            {
                label: "Team Motto",
                tag: "input",
                defaultValue:"",
                attributes: {
                    id:"motto",
                    name:"motto",
                    type: "text",
                    placeholder: "Enter your Team motto here",
                    class: "form-control"
                },
                validation: {
                    required: false
                }  
            } 
           
        ]
        
    },
    
}
export default teamViewModel;