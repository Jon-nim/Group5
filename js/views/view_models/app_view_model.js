/* app_view_model.js */
import homePageViewModel from './home_page_view_model.js'
import teamsPageViewModel from './teams_page_view_model.js'
import playersPageViewModel from './players_page_view_model.js'

let routes= [
    {
        name: "#home",
        title: "Home",
        defaultOptions:null,
        isDefaultView: true,
        viewType:"generic",
        viewModel: homePageViewModel
    },
    {
        name: "#teams",
        title: "Teams",
        defaultOptions: {sortCol:'name', sortDir:'asc'},
        viewType:"list",
        viewModel: teamsPageViewModel,
        isDefaultView: false
    },
    {
        name: "#players",
        title: "Players",
        defaultOptions: {sortCol:'full_name', sortDir:'asc'},
        viewType:"list",
        viewModel: playersPageViewModel,
        isDefaultView: false
    }

]

let appViewModel= {
    containerId: "app_container",     //container in which to render app html
    endPoint:"localhost:8080",
     //endPoint:"http://kenteamsapif22-env.eba-bk4rvsnp.us-west-1.elasticbeanstalk.com/",
    routes: routes,
    navContainerId: "navContainer",
    navTemplateUrl: "js/views/partials/nav.ejs"
    }

export default appViewModel;