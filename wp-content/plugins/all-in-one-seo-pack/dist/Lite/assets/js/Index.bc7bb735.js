import{C as i}from"./Index.05d0e847.js";import{G as o,a as l}from"./Row.13b6f3f1.js";import{h as u}from"./index.4ee805df.js";import{n as c}from"./vueComponentNormalizer.87056a83.js";var _=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-cta",class:{floating:t.floating}},[t.type===1?e("div",{staticClass:"type-1"},[e("div",{staticClass:"header-text"},[t._t("header-text",function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]})],2),e("div",{staticClass:"description"},[t._t("description",function(){return[t._v(" "+t._s(t.strings.ctaDescription)+" ")]})],2),t.featureList?e("grid-row",{staticClass:"feature-list"},t._l(t.featureList,function(r,n){return e("grid-column",{key:n,attrs:{md:"6"}},[e("svg-circle-check"),t._v(" "+t._s(r)+" ")],1)}),1):t._e(),!t.ctaButtonVisible&&t.ctaButtonVisibleWarning?e("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:t._s(t.ctaButtonVisibleWarning)}}):t._e(),t.ctaButtonVisible?e("base-button",{attrs:{type:"green",tag:"a",href:t.ctaLink,target:t.target,loading:t.ctaButtonLoading},nativeOn:{click:function(r){return t.ctaButtonClick.apply(null,arguments)}}},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showLink?e("a",{staticClass:"learn-more",attrs:{href:t.learnMoreLink,target:"_blank"}},[t._t("learn-more-text",function(){return[t._v(" "+t._s(t.strings.learnMoreAllFeatures)+" ")]})],2):t._e()],1):t._e(),t.type===2?e("div",{staticClass:"type-2"},[e("div",[e("div",{staticClass:"header-text"},[t._t("header-text",function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]})],2),e("div",{staticClass:"description"},[t._t("description",function(){return[t._v(" "+t._s(t.strings.ctaDescription)+" ")]})],2),t.featureList&&t.featureList.length<=5?e("grid-row",{staticClass:"feature-list"},t._l(t.featureList,function(r,n){return e("grid-column",{key:n,attrs:{md:"12"}},[e("svg-circle-check"),t._v(" "+t._s(r)+" ")],1)}),1):t._e(),t.featureList&&t.featureList.length>5?e("grid-row",{staticClass:"feature-list"},t._l(t.featureList,function(r,n){return e("grid-column",{key:n,attrs:{md:"6"}},[e("svg-circle-check"),t._v(" "+t._s(r)+" ")],1)}),1):t._e(),!t.ctaButtonVisible&&t.ctaButtonVisibleWarning?e("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:t._s(t.ctaButtonVisibleWarning)}}):t._e(),t.ctaButtonVisible?e("base-button",{attrs:{type:"green",tag:"a",href:t.ctaLink,target:t.target,loading:t.ctaButtonLoading},nativeOn:{click:function(r){return t.ctaButtonClick.apply(null,arguments)}}},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),e("br"),e("br"),t.showLink?e("a",{staticClass:"learn-more",attrs:{href:t.learnMoreLink,target:"_blank"}},[t._t("learn-more-text",function(){return[t._v(" "+t._s(t.strings.learnMoreAllFeatures)+" ")]})],2):t._e()],1),e("div",{staticClass:"featured-image"},[t._t("featured-image")],2)]):t._e(),t.type===3?e("div",{staticClass:"type-3"},[e("div",{staticClass:"sub-header"},[t._v(" "+t._s(t.strings.upgradeToPro)+" ")]),e("div",{staticClass:"header-text"},[t._t("header-text",function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]})],2),t.featureList?e("grid-row",{staticClass:"feature-list"},t._l(t.featureList,function(r,n){return e("grid-column",{key:n,attrs:{md:"6"}},[e("svg-circle-check"),t._v(" "+t._s(r)+" ")],1)}),1):t._e(),!t.ctaButtonVisible&&t.ctaButtonVisibleWarning?e("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:t._s(t.ctaButtonVisibleWarning)}}):t._e(),t.ctaButtonVisible?e("base-button",{attrs:{type:"green",tag:"a",href:t.ctaLink,target:t.target,loading:t.ctaButtonLoading,size:"medium"},nativeOn:{click:function(r){return t.ctaButtonClick.apply(null,arguments)}}},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showLink?e("base-button",{attrs:{type:"gray",tag:"a",href:t.learnMoreLink,target:"_blank",size:"medium"}},[t._t("learn-more-text",function(){return[t._v(" "+t._s(t.strings.seeAllFeatures)+" ")]})],2):t._e()],1):t._e()])},d=[];const g={components:{CoreAlert:i,GridColumn:o,GridRow:l,SvgCircleCheck:u},props:{type:{type:Number,default(){return 1},validator(t){return[1,2,3,4].includes(t)}},featureList:Array,sameTab:Boolean,ctaButtonAction:Boolean,ctaButtonLoading:Boolean,ctaLink:{type:String,required:!1},learnMoreLink:{type:String,required:!1},buttonText:{type:String,required:!0},floating:{type:Boolean,default(){return!0}},showLink:{type:Boolean,default(){return!0}},ctaButtonVisible:{type:Boolean,default(){return!0}},ctaButtonVisibleWarning:String},data(){return{target:"_blank",strings:{upgradeToPro:this.$t.sprintf("Upgrade to %1$s","Pro"),ctaHeader:this.$t.sprintf("This feature is only available for licensed %1$s %2$s users.","AIOSEO","Pro"),ctaDescription:this.$t.sprintf("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!","AIOSEO","Pro"),learnMoreAllFeatures:"Learn more about all features",seeAllFeatures:"See all features"}}},methods:{ctaButtonClick(t){this.ctaButtonAction&&(t.preventDefault(),this.$emit("cta-button-click"))}},mounted(){this.sameTab&&(this.target="_self")}},s={};var f=c(g,_,d,!1,p,null,null,null);function p(t){for(let a in s)this[a]=s[a]}var b=function(){return f.exports}();export{b as C};
