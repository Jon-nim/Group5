import View from "./view.js"

export default class GenericView extends View
{
    constructor(storageService, viewModel)
    {
        super(storageService, viewModel['generic']);
    }
   
    getViewData(){
        return this.viewModel.data;
    }
    bindItemEvents(){

    }
    
    
}