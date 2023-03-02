import LocalStorageService from '../models/local_storage_service.js'
import RestStorageService from '../models/rest_storage_service.js'
import ListView from '../views/list_view.js'
import GenericView from '../views/generic_view.js'
import Router from '../routers/router.js'

export default class AppController {
    constructor(appViewModel) {
        this.appViewModel = appViewModel;
        this.router = new Router(window, appViewModel.routes, appViewModel.navContainerId, appViewModel.navTemplateUrl)

        //event pattern, decouples the router and controller
        $("body").on("loadView", (event, route) => {
            this.loadView(route);
        })
    }
    
    get $containerId() {
        return $(`#${this.appViewModel.containerId}`)
    }

    loadView(route) {

        this.$containerId.empty(); //empty app container
        switch (route.viewType) {
            case "generic":
                this._view = new GenericView(null, route.viewModel)
                this._view.render();
                break;
            case "list":
                this.storageService = new RestStorageService(route.viewModel.entity, route.viewModel.entitySingle, route.viewModel.list.options, this.appViewModel.endPoint);
                //create a ListPageView class, passing in the storage service and view model
                this._view = new ListView(this.storageService, route.viewModel)
                this._view.render();
                break;
        }
    }
}