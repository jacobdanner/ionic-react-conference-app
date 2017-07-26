/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.defineComponents("q5xqin0fv8qe",function(t,i,e,n,o){function s(t,i,e){var n={};return e.split(" ").reduce(function(e,n){return e[n]=!0,t&&(e[n+"-"+t]=!0,i&&(e[n+"-"+i]=!0,e[n+"-"+t+"-"+i]=!0)),e},n)}function r(t,i,e){switch(void 0===e&&(e=!1),t){case"right":return!0;case"left":return!1;case"end":return!i;case"start":return i;default:return e?!i:i}}function h(t,i,e){return!i&&e||t&&i}var a=Object.assign||function(t){for(var i,e=1,n=arguments.length;e<n;e++){i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},p=function(){function t(){this.childStyles=Object.create(null)}return t.prototype.itemStyle=function(t){t.stopPropagation();var i=!1,e=t.detail;for(var n in e)e[n]!==this.childStyles["item-"+n]&&(this.childStyles["item-"+n]=e[n],i=!0);return i},t.prototype.componentDidLoad=function(){for(var t=this.el.querySelectorAll("ion-button"),i=0;i<t.length;i++)t[i].itemButton=!0},t.prototype.render=function(){var t=a({},this.childStyles,s(this.mode,this.color,"item"),{"item-block":!0}),e=this.href?"a":"div";return i(e,{c:t},i(0,{a:{name:"start"}}),i("div",{c:{"item-inner":!0}},i("div",{c:{"input-wrapper":!0}},i(0,0)),i(0,{a:{name:"end"}})))},t}(),u=function(){function t(){}return t.prototype.render=function(){return[i(0,{a:{name:"start"}}),i("div",{c:{"item-inner":!0}},i("div",{c:{"input-wrapper":!0}},i(0,0)),i(0,{a:{name:"end"}}))]},t}(),c=function(){function t(){this.disabled=!1}return t.prototype.notCaptured=function(){},t.prototype.clickedOptionButton=function(t){return!!t.target.closest("ion-item-option")},t.prototype.render=function(){var t=s(this.mode,this.color,"item-option-button"),e=this.href?"a":"button";return i(e,{c:t,o:{click:this.clickedOptionButton.bind(this)},a:{disabled:this.disabled}},i("span",{c:{"button-inner":!0}},i(0,0)),i("div",{c:{"button-effect":!0}}))},t}(),d=function(){function t(){this.side="right"}return t.prototype.isRightSide=function(){var t="rtl"===document.dir;return r(this.side,t,!0)},t.prototype.width=function(){return this.el.offsetWidth},t.prototype.render=function(){return i(0,0)},t}(),l=function(){function t(){this.openAmount=0,this.startX=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.tmr=null,this.optsDirty=!0,this.state=2,this.preSelectedContainer=null,this.selectedContainer=null,this.openContainer=null}return t.prototype.componentDidLoad=function(){var t=this.el.querySelectorAll("ion-item-options"),i=0;this.leftOptions=this.rightOptions=null;for(var e=0;e<t.length;e++){var n=t[e].$instance;n.isRightSide()?(this.rightOptions=n,i|=2):(this.leftOptions=n,i|=1)}this.optsDirty=!0,this.sides=i,this.item=this.el.querySelector("ion-item"),this.list=this.el.closest("ion-list")},t.prototype.canStart=function(t){if(this.selectedContainer)return!1;var i=this;return this.list&&i!==this.list.$instance.openContainer&&this.closeOpened(),this.preSelectedContainer=i,this.firstCoordX=t.currentX,this.firstTimestamp=Date.now(),!0},t.prototype.onDragStart=function(t){this.selectedContainer=this.list.$instance.openContainer=this.preSelectedContainer,this.selectedContainer.startSliding(t.currentX)},t.prototype.onDragMove=function(t){this.selectedContainer&&this.selectedContainer.moveSliding(t.currentX)},t.prototype.onDragEnd=function(t){var i=t.currentX-this.firstCoordX,e=Date.now()-this.firstTimestamp;this.selectedContainer.endSliding(i/e),this.selectedContainer=null,this.preSelectedContainer=null},t.prototype.closeOpened=function(){return this.selectedContainer=null,!!this.list.$instance.openContainer&&(this.list.$instance.closeSlidingItems(),!0)},t.prototype.getOpenAmount=function(){return this.openAmount},t.prototype.getSlidingPercent=function(){var t=this.openAmount;return t>0?t/this.optsWidthRightSide:t<0?t/this.optsWidthLeftSide:0},t.prototype.startSliding=function(t){this.tmr&&(clearTimeout(this.tmr),this.tmr=null),0===this.openAmount&&(this.optsDirty=!0,this.setState(4)),this.startX=t+this.openAmount,this.item.style.transition="none"},t.prototype.moveSliding=function(t){if(this.optsDirty)return this.calculateOptsWidth(),0;var i=this.startX-t;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return 0;default:console.warn("invalid ItemSideFlags value",this.sides)}if(i>this.optsWidthRightSide)i=(e=this.optsWidthRightSide)+.55*(i-e);else if(i<-this.optsWidthLeftSide){var e=-this.optsWidthLeftSide;i=e+.55*(i-e)}return this.setOpenAmount(i,!1),i},t.prototype.endSliding=function(t){var i=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;return h(this.openAmount>0==!(t<0),Math.abs(t)>.3,Math.abs(this.openAmount)<Math.abs(i/2))&&(i=0),this.setOpenAmount(i,!0),this.fireSwipeEvent(),i},t.prototype.fireSwipeEvent=function(){32&this.state?this.rightOptions.ionSwipe(this):64&this.state&&this.leftOptions.ionSwipe(this)},t.prototype.calculateOptsWidth=function(){this.optsDirty&&(this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.width(),0==this.optsWidthRightSide&&console.warn("optsWidthRightSide should not be zero")),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.width(),0==this.optsWidthLeftSide&&console.warn("optsWidthLeftSide should not be zero")),this.optsDirty=!1)},t.prototype.setOpenAmount=function(t,i){var e=this;if(this.tmr&&(clearTimeout(this.tmr),this.tmr=null),this.openAmount=t,i)this.item.style.transition="";else if(t>0){n=t>=this.optsWidthRightSide+30?40:8;this.setState(n)}else if(t<0){var n=t<=-this.optsWidthLeftSide-30?80:16;this.setState(n)}if(0===t)return this.tmr=setTimeout(function(){e.setState(2),e.tmr=null},600),void(this.item.style.transform="");this.item.style.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit()},t.prototype.setState=function(t){t!==this.state&&(this.state=t)},t.prototype.close=function(){this.setOpenAmount(0,!0)},t.prototype.hostData=function(){return{class:{"item-wrapper":!0,"active-slide":2!==this.state,"active-options-right":!!(8&this.state),"active-options-left":!!(16&this.state),"active-swipe-right":!!(32&this.state),"active-swipe-left":!!(64&this.state)}}},t.prototype.render=function(){return i("ion-gesture",{p:{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"item-swipe",gesturePriority:-10,type:"pan",direction:"x",maxAngle:20,threshold:5,attachTo:"parent"}},i(0,0))},t}(),f=function(){function t(){}return t.prototype.render=function(){return i(0,0)},t}(),m=function(){function t(){}return t.prototype.render=function(){return i(0,0)},t.prototype.closeSlidingItems=function(){this.openContainer.close(),this.openContainer=null},t}(),S=function(){function t(){}return t.prototype.render=function(){return i(0,0)},t}(),y=function(){function t(){this.width="100%"}return t.prototype.render=function(){return i("span",{s:{width:this.width}},e(" "))},t}();t["ION-ITEM"]=p,t["ION-ITEM-DIVIDER"]=u,t["ION-ITEM-OPTION"]=c,t["ION-ITEM-OPTIONS"]=d,t["ION-ITEM-SLIDING"]=l,t["ION-LABEL"]=f,t["ION-LIST"]=m,t["ION-LIST-HEADER"]=S,t["ION-SKELETON-TEXT"]=y},["ION-ITEM",{},[["itemStyle","ionStyle",0,0,1]],0,0,0,0,0,"el"],["ION-ITEM-DIVIDER",{theme:"item item-divider"}],["ION-ITEM-OPTION",{}],["ION-ITEM-OPTIONS",{},0,0,0,0,0,0,"el"],["ION-ITEM-SLIDING",{},0,["state"],0,0,[["ionDrag","ionDrag","1 /* true **/","1 /* true **/","1 /* true **/"]],["close"],"el"],["ION-LABEL",{theme:"label"}],["ION-LIST",{theme:"list"},0,["openContainer"],0,0,0,["closeSlidingItems"]],["ION-LIST-HEADER",{theme:"list-header"}],["ION-SKELETON-TEXT",{}]);