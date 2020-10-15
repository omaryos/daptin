(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{c582:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[a("q-icon",{attrs:{size:"1.2em",name:"arrow_forward",color:"black"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{attrs:{label:"Storage",icon:"fas fa-archive"}}),a("q-breadcrumbs-el",{attrs:{label:"Site",icon:"fas fa-list"}})],1)],1),a("q-separator"),a("div",{staticClass:"row q-pa-md q-gutter-sm"},e._l(e.sites,(function(t){return a("div",{staticClass:"col-4 col-xl-2 col-lg-3 col-xs-12 col-sm-6 q-pa-md"},[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",[a("span",{staticClass:"text-h6"},[e._v(e._s(t.name))])])],1)],1),a("q-card-section",[a("q-list",[a("q-item",[a("q-item-section",[a("span",[e._v("HTTPS")])]),e.showHttpEdit?a("q-item-section",{attrs:{avatar:""}},[a("q-checkbox",{staticClass:"float-right",attrs:{size:"sm"},on:{input:function(t){e.showHttpEdit=!1}},model:{value:t.enable_https,callback:function(a){e.$set(t,"enable_https",a)},expression:"site.enable_https"}})],1):e._e(),a("q-item-section",{attrs:{avatar:""}},[a("q-item-label",[a("q-icon",{attrs:{color:"primary",size:"xs",name:t.enable_https?"fas fa-check":"fas fa-times"}})],1)],1)],1),a("q-item",[a("q-item-section",[a("span",[e._v("FTP enabled")])]),e.showHttpEdit?a("q-item-section",{attrs:{avatar:""}},[a("q-checkbox",{staticClass:"float-right",attrs:{size:"sm"},on:{input:function(t){e.showHttpEdit=!1}},model:{value:t.enable_https,callback:function(a){e.$set(t,"enable_https",a)},expression:"site.enable_https"}})],1):e._e(),a("q-item-section",{attrs:{avatar:""}},[a("q-item-label",[a("q-icon",{attrs:{color:"primary",size:"xs",name:t.ftp_enabled?"fas fa-check":"fas fa-times"}})],1)],1)],1),a("q-item",[a("q-item-section",[a("span",[e._v("Site type")])]),a("q-item-section",{attrs:{avatar:""}},[a("q-item-label",[a("span",{staticClass:"text-bold"},[e._v(e._s(t.site_type))])])],1)],1)],1)],1),a("q-card-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"float-right",attrs:{size:"sm",label:"Browse files","text-color":"primary"},on:{click:function(a){return e.$router.push("/site/"+t.reference_id+"/browse")}}}),a("q-btn",{staticClass:"float-right",attrs:{size:"sm",label:"Edit site"},on:{click:function(a){return e.showEditSite(t)}}})],1)])])],1)],1)})),0),a("q-page-sticky",{staticStyle:{"z-index":"3000"},attrs:{position:"bottom-right",offset:[20,20]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.showCreateSiteDrawer=!0}}})],1),a("q-drawer",{attrs:{breakpoint:1400,overlay:"","content-class":"bg-grey-3",side:"right"},model:{value:e.showCreateSiteDrawer,callback:function(t){e.showCreateSiteDrawer=t},expression:"showCreateSiteDrawer"}},[a("q-scroll-area",{staticClass:"fit row"},[a("div",{staticClass:"q-pa-md"},[a("span",{staticClass:"text-h6"},[e._v("Create site")]),a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{label:"Hostname"},model:{value:e.newSite.hostname,callback:function(t){e.$set(e.newSite,"hostname",t)},expression:"newSite.hostname"}}),a("q-input",{attrs:{value:"/new-site",label:"Path"},model:{value:e.newSite.path,callback:function(t){e.$set(e.newSite,"path",t)},expression:"newSite.path"}}),a("q-select",{attrs:{options:[{label:"Hugo",value:"hugo"},{label:"Static",value:"static"}],value:"static",label:"Site type","emit-value":"","map-options":""},model:{value:e.newSite.site_type,callback:function(t){e.$set(e.newSite,"site_type",t)},expression:"newSite.site_type"}}),a("q-select",{attrs:{label:"Cloud store",options:e.stores,"option-label":"name","option-value":"id"},model:{value:e.newSite.cloud_store_id,callback:function(t){e.$set(e.newSite,"cloud_store_id",t)},expression:"newSite.cloud_store_id"}}),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createSite()}}},[e._v("Create")]),a("q-btn",{on:{click:function(t){e.showCreateSiteDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),a("q-drawer",{attrs:{overlay:"","content-class":"bg-grey-3",breakpoint:1400,side:"right"},model:{value:e.showEditSiteDrawer,callback:function(t){e.showEditSiteDrawer=t},expression:"showEditSiteDrawer"}},[a("q-scroll-area",{staticClass:"fit row"},[a("div",{staticClass:"q-pa-md"},[a("span",{staticClass:"text-h6"},[e._v("Edit site")]),a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{label:"Name"},model:{value:e.newSite.name,callback:function(t){e.$set(e.newSite,"name",t)},expression:"newSite.name"}}),a("q-input",{attrs:{label:"Hostname"},model:{value:e.newSite.hostname,callback:function(t){e.$set(e.newSite,"hostname",t)},expression:"newSite.hostname"}}),a("q-input",{attrs:{label:"Path"},model:{value:e.newSite.path,callback:function(t){e.$set(e.newSite,"path",t)},expression:"newSite.path"}}),a("q-input",{attrs:{label:"Site type"},model:{value:e.newSite.site_type,callback:function(t){e.$set(e.newSite,"site_type",t)},expression:"newSite.site_type"}}),a("q-select",{attrs:{options:e.stores,"option-label":"name","option-value":"id","emit-value":"","map-options":""},model:{value:e.newSite.cloud_store_id,callback:function(t){e.$set(e.newSite,"cloud_store_id",t)},expression:"newSite.cloud_store_id"}}),a("q-item",[a("q-item-section",[a("q-item-label",[e._v("HTTPS")])],1),a("q-item-section",[a("q-btn-toggle",{attrs:{size:"xs",options:[{label:e.newSite.enable_https?"Enabled":"Enable",value:!0},{label:e.newSite.enable_https?"Disable":"Disabled",value:!1}]},model:{value:e.newSite.enable_https,callback:function(t){e.$set(e.newSite,"enable_https",t)},expression:"newSite.enable_https"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[e._v("FTP")])],1),a("q-item-section",[a("q-btn-toggle",{attrs:{size:"xs",options:[{label:e.newSite.ftp_enabled?"Enabled":"Enable",value:!0},{label:e.newSite.ftp_enabled?"Disable":"Disabled",value:!1}]},model:{value:e.newSite.ftp_enabled,callback:function(t){e.$set(e.newSite,"ftp_enabled",t)},expression:"newSite.ftp_enabled"}})],1)],1),a("q-btn",{attrs:{size:"sm",color:"negative"},on:{click:function(t){return e.deleteSite()}}},[e._v("Delete")]),a("q-btn",{staticClass:"float-right",attrs:{size:"sm",color:"primary"},on:{click:function(t){return e.editSite()}}},[e._v("Save")]),a("q-btn",{staticClass:"float-right",attrs:{size:"sm"},on:{click:function(t){e.showEditSiteDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),a("q-drawer",{attrs:{breakpoint:1400,width:e.fileDrawerWidth>800?800:e.fileDrawerWidth,side:"right",overlay:""},model:{value:e.showFileBrowser,callback:function(t){e.showFileBrowser=t},expression:"showFileBrowser"}},[a("q-scroll-area",{staticClass:"fit"},[e.selectedSite&&e.showFileBrowser?a("file-browser",{attrs:{site:e.selectedSite},on:{close:function(t){e.showFileBrowser=!1}}}):e._e()],1)],1)],1)},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("9523")),o=a.n(n),l=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"SitePage",methods:c(c({syncSite:function(e){var t=this;t.executeAction({tableName:"site",actionName:"sync_site_storage",params:{site_id:e.id,path:""}})},showEditSite:function(e){this.selectedSite=e,this.showEditSiteDrawer=!0,this.showFileBrowser=!1,this.newSite.hostname=e.hostname,this.newSite.name=e.hostname,this.newSite.path=e.path,this.newSite.enable_https=1===e.enable_https||!!e.enable_https,this.newSite.ftp_enabled=e.ftp_enabled,this.newSite.site_type=e.site_type,this.newSite.cloud_store_id=e.cloud_store_id},deleteSite:function(){var e=this;console.log("Delete site",this.selectedSite),this.deleteRow({tableName:"site",reference_id:this.selectedSite.id}).then((function(t){e.showEditSiteDrawer=!1,e.selectedSite={},e.$q.notify({title:"Success",message:"Site deleted"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},editSite:function(){var e=this;console.log("Edit site",this.selectedSite,this.newSite),this.newSite.tableName="site",this.newSite.id=this.selectedSite.id,this.newSite.cloud_store_id={id:this.newSite.cloud_store_id,type:"cloud_store"},this.updateRow(this.newSite).then((function(t){e.showEditSiteDrawer=!1,e.selectedSite={},e.$q.notify({title:"Success",message:"Site updated"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},createSite:function(){var e=this;console.log("new site",this.newSite),this.newSite.tableName="site",e.executeAction({tableName:"cloud_store",actionName:"create_site",params:{cloud_store_id:this.newSite.cloud_store_id.id,hostname:this.newSite.hostname,path:this.newSite.path,site_type:this.newSite.site_type}}).then((function(t){e.user={},e.$q.notify({message:"Site created"}),e.refresh(),e.showCreateSiteDrawer=!1})).catch((function(t){console.log("Failed to create site",t),t instanceof Array?e.$q.notify({message:t[0].title}):e.$q.notify({message:"Failed to create site"})}))}},Object(l["b"])(["loadData","getTableSchema","createRow","deleteRow","updateRow","executeAction"])),{},{refresh:function(){var e="site",t=this;this.loadData({tableName:e,params:{included_relations:"cloud_store_id"}}).then((function(e){console.log("Loaded data",e),t.sites=e.data.map((function(e){return e.ftp_enabled=1===e.ftp_enabled||!0===e.ftp_enabled,e}))})),t.loadData({tableName:"cloud_store"}).then((function(e){t.stores=e.data}))}}),data:function(){return c({text:"",showHttpEdit:!1,fileList:[],currentSite:null,showFileBrowser:!1,stores:[],selectedSite:{},siteProviderOptions:[{icon:"fas fa-aws",label:"Amazon Drive",description:"OAuth token based"},{icon:"fas fa-aws",label:"Amazon S3",description:"OAuth token based"},{icon:"fas fa-aws",label:"Backblaze B2",description:"OAuth token based"},{icon:"fas fa-aws",label:"Dropbox",description:"OAuth token based"},{icon:"fas fa-aws",label:"FTP",description:"OAuth token based"},{icon:"fas fa-aws",label:"Google Drive",description:"OAuth token based"},{icon:"fas fa-aws",label:"local",description:"The local filesystem"}],showHelp:!1,newSite:{name:null,hostname:null,path:null,site_type:null,cloud_store_id:null,ftp_enabled:!1,enable_https:!1},showCreateSiteDrawer:!1,showEditSiteDrawer:!1,filter:null,sites:[],columns:[{name:"name",field:"name",label:"cloud name",align:"left",sortable:!0}]},Object(l["d"])([]))},mounted:function(){console.log("Site page scope",this,window.screen.availWidth),this.refresh()},computed:c(c({fileDrawerWidth:function(){return window.screen.availWidth}},Object(l["c"])(["selectedTable"])),Object(l["d"])([])),watch:{}},u=d,p=a("2877"),h=a("ead5"),b=a("0016"),w=a("079e"),f=a("eb85"),m=a("f09f"),S=a("a370"),_=a("66e5"),q=a("4074"),v=a("9c40"),g=a("1c1c"),y=a("8f8e"),k=a("0170"),x=a("de5e"),C=a("9404"),D=a("4983"),O=a("0378"),E=a("27f9"),$=a("ddd8"),Q=a("6a67"),P=a("eebe"),j=a.n(P),z=Object(p["a"])(u,i,s,!1,null,null,null);t["default"]=z.exports;j()(z,"components",{QBreadcrumbs:h["a"],QIcon:b["a"],QBreadcrumbsEl:w["a"],QSeparator:f["a"],QCard:m["a"],QCardSection:S["a"],QItem:_["a"],QItemSection:q["a"],QBtn:v["a"],QList:g["a"],QCheckbox:y["a"],QItemLabel:k["a"],QPageSticky:x["a"],QDrawer:C["a"],QScrollArea:D["a"],QForm:O["a"],QInput:E["a"],QSelect:$["a"],QBtnToggle:Q["a"]})}}]);