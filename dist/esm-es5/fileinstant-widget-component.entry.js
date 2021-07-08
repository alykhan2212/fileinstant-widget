import { r as registerInstance, h } from './index-59463ecd.js';
var fileinstantWidgetComponentCss = "*{margin:0;padding:0}.widget_preview{max-height:30%;padding:20px;width:var(--widget-width, 40%)}.new{background-color:#ffd400;width:200px;position:relative;bottom:10px;text-align:center;padding:2px;border-radius:10px}.widget_preview h4{background:var(--title-background, #0d6efd);color:var(--tilte-color, #ffffff);padding:6px 10px;border-radius:5px 5px 0px 0px;-webkit-box-shadow:0px 0px 2px 0px #000;box-shadow:0px 0px 2px 0px #000;margin:0;font-size:1.3rem;font-weight:500}.latest_download_content{border:var(--list-border);border-radius:var(--list-border-radius, 2px);-webkit-box-shadow:0px 0px 2px 0px #000;box-shadow:0px 0px 2px 0px #000}.latest_download_content ul{background:#eeeeee;padding:10px 10px;line-height:var(--software-list-spacing)}.latest_download_content ul li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:10px}.latest_download_content ul li img{width:30px;height:30px;margin-right:10px;visibility:var(--show-icon)}.latest_download_content ul li a{color:var(--software-name-color, \"#000\");font-size:var(--software-name-size, 1rem)}.latest_download_content ul li a:hover{-webkit-text-decoration:var(--underline-onhover, none);text-decoration:var(--underline-onhover, none)}.latest_download_content ul li a:focus{-webkit-text-decoration:var(--underline-focus, none);text-decoration:var(--underline-focus, none)}.widget_code_area h4{color:var(--blue)}.widget_code{overflow-y:scroll;color:#fff;background:#2f2f2f;height:250px;padding:10px 20px}.widget_code::-webkit-scrollbar{width:10px}a{text-decoration:none}.widget_code::-webkit-scrollbar-track{background:#f1f1f1}.widget_code::-webkit-scrollbar-thumb{background:#888;width:10px}.widget_code::-webkit-scrollbar-thumb:hover{background:#555}.widget-add{width:80%;margin:20px auto}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.componentWillLoad = function () {
        var _this = this;
        return fetch("http://api-fileinstant.herokuapp.com/api/latest-software/5")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.softwares = data.data;
        });
    };
    MyComponent.prototype.render = function () {
        return (h("div", { class: "widget_preview" }, h("br", null), h("div", { class: "latest_download" }, h("h4", null, "Latest downloads"), h("div", { class: "latest_download_content" }, h("ul", null, this.softwares.map(function (software) { return h("li", null, h("img", { src: "https://fileinstant.herokuapp.com/uploads/" + software.softwareID.softwareIcon, alt: '', class: 'img-fluid' }), h("a", { href: "https://proxy-omega.vercel.app/download/" + software.softwareID.softwareName.trim().split(" ").join("-").toLowerCase() + "/" + software.softwareID._id.toString() }, software.softwareID.softwareName + " " + software.softwareID.softwareVersion)); }))), h("div", { class: "new" }, "Powered by Fieinstant"))));
    };
    return MyComponent;
}());
MyComponent.style = fileinstantWidgetComponentCss;
export { MyComponent as fileinstant_widget_component };
