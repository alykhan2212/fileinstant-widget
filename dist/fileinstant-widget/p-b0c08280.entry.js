import{r as e,h as t}from"./p-84e4b0d9.js";const o=class{constructor(t){e(this,t)}componentWillLoad(){return fetch("http://api-fileinstant.herokuapp.com/api/latest-software/5").then(e=>e.json()).then(e=>{this.softwares=e.data})}render(){return t("div",{class:"widget_preview"},t("br",null),t("div",{class:"latest_download"},t("h4",null,"Latest downloads"),t("div",{class:"latest_download_content"},t("ul",null,this.softwares.map(e=>t("li",null,t("img",{src:"https://fileinstant.herokuapp.com/uploads/"+e.softwareID.softwareIcon,alt:"",class:"img-fluid"}),t("a",{href:`https://proxy-omega.vercel.app/download/${e.softwareID.softwareName.trim().split(" ").join("-").toLowerCase()}/${e.softwareID._id.toString()}`},e.softwareID.softwareName+" "+e.softwareID.softwareVersion))))),t("div",{class:"new"},"Powered by Fieinstant")))}};o.style='*{margin:0;padding:0}.widget_preview{max-height:30%;padding:20px;width:var(--widget-width, 40%)}.new{background-color:#ffd400;width:200px;position:relative;bottom:10px;text-align:center;padding:2px;border-radius:10px}.widget_preview h4{background:var(--title-background, #0d6efd);color:var(--tilte-color, #ffffff);padding:6px 10px;border-radius:5px 5px 0px 0px;-webkit-box-shadow:0px 0px 2px 0px #000;box-shadow:0px 0px 2px 0px #000;margin:0;font-size:1.3rem;font-weight:500}.latest_download_content{border:var(--list-border);border-radius:var(--list-border-radius, 2px);-webkit-box-shadow:0px 0px 2px 0px #000;box-shadow:0px 0px 2px 0px #000}.latest_download_content ul{background:#eeeeee;padding:10px 10px;line-height:var(--software-list-spacing)}.latest_download_content ul li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:10px}.latest_download_content ul li img{width:30px;height:30px;margin-right:10px;visibility:var(--show-icon)}.latest_download_content ul li a{color:var(--software-name-color, "#000");font-size:var(--software-name-size, 1rem)}.latest_download_content ul li a:hover{-webkit-text-decoration:var(--underline-onhover, none);text-decoration:var(--underline-onhover, none)}.latest_download_content ul li a:focus{-webkit-text-decoration:var(--underline-focus, none);text-decoration:var(--underline-focus, none)}.widget_code_area h4{color:var(--blue)}.widget_code{overflow-y:scroll;color:#fff;background:#2f2f2f;height:250px;padding:10px 20px}.widget_code::-webkit-scrollbar{width:10px}a{text-decoration:none}.widget_code::-webkit-scrollbar-track{background:#f1f1f1}.widget_code::-webkit-scrollbar-thumb{background:#888;width:10px}.widget_code::-webkit-scrollbar-thumb:hover{background:#555}.widget-add{width:80%;margin:20px auto}';export{o as fileinstant_widget_component}