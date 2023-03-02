import Utils from '../util/utilities.js'
/* Class Router-handles hash routing and nav link state for application */
export default class Router {
    constructor(window, routes, containerId, templateUrl) {
        this.window = window;
        this._routes = routes;
        this.templateUrl=templateUrl;
        this.containerId=containerId;
        this.utils = new Utils();
        (async () => {
            await this.init();
        })();
        
    }
    get routes() {
        return this._routes;
    }
    get defaultRoute() {
        return this._routes.find(r => r.isDefaultView);
    }
    get curRoute(){
        return this.routes.find(element => element.name == window.location.hash);
    }
    get $container(){
        return $(`#${this.containerId}`);
    }
    async init() {
        await this.render();
        
        $('.nav-link').click(e => {
            $(".nav-link").removeClass("active");
            $(e.currentTarget).addClass("active");
        });
        $(window).on("hashchange", e => {
            this.loadHash();
        });
        this.setDefaultHash();
        //this.loadHash();
    }
    setDefaultHash() {
        let curRoute = this.defaultRoute;
        window.location.hash = curRoute.name;
    }
    loadHash() {
        if (this.curRoute) {
            $("body").trigger( "loadView", [ this.curRoute ] );
        }
    }
    async render() {
        //render the menu
       let templateHtml = await this.utils.getFileContents(this.templateUrl);
        let html = ejs.render(templateHtml, {routes: this.routes})
        this.$container.html(html);
      }
}