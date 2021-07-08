// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, State } from '@stencil/core';
export class MyComponent {
    componentWillLoad() {
        return fetch("http://api-fileinstant.herokuapp.com/api/latest-software/5")
            .then(response => response.json())
            .then(data => {
            this.softwares = data.data;
        });
    }
    render() {
        return (h("div", { class: "widget_preview" },
            h("br", null),
            h("div", { class: "latest_download" },
                h("h4", null, "Latest downloads"),
                h("div", { class: "latest_download_content" },
                    h("ul", null, this.softwares.map(software => h("li", null,
                        h("img", { src: `https://fileinstant.herokuapp.com/uploads/${software.softwareID.softwareIcon}`, alt: '', class: 'img-fluid' }),
                        h("a", { href: `https://proxy-omega.vercel.app/download/${software.softwareID.softwareName.trim().split(" ").join("-").toLowerCase()}/${software.softwareID._id.toString()}` }, software.softwareID.softwareName + " " + software.softwareID.softwareVersion))))),
                h("div", { class: "new" }, "Powered by Fieinstant"))));
    }
    static get is() { return "fileinstant-widget-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["fileinstant-widget-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["fileinstant-widget-component.css"]
    }; }
    static get states() { return {
        "softwares": {}
    }; }
}
