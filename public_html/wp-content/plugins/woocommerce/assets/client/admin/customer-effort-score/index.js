!function(){var e={31772:function(e,o,t){"use strict";var c=t(25148);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,o,t,n,r,a){if(a!==c){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function o(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:n};return t.PropTypes=t,t}},7862:function(e,o,t){e.exports=t(31772)()},25148:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function t(c){var n=o[c];if(void 0!==n)return n.exports;var r=o[c]={exports:{}};return e[c](r,r.exports,t),r.exports}t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var c in o)t.o(o,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:o[c]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};!function(){"use strict";t.r(c),t.d(c,{CustomerEffortScore:function(){return u},CustomerFeedbackModal:function(){return s},CustomerFeedbackSimple:function(){return d},FeedbackModal:function(){return p},ProductMVPFeedbackModal:function(){return b}});var e=window.wp.element,o=t(7862),n=t.n(o),r=window.wp.i18n,a=window.wp.data,l=window.wp.components,i=window.wc.experimental;function s(o){let{recordScoreCallback:t,title:c=(0,r.__)("Please share your feedback","woocommerce"),description:n,firstQuestion:a,secondQuestion:s,defaultScore:m=NaN,onCloseModal:u,customOptions:d,shouldShowComments:p=((e,o)=>[e,o].some((e=>1===e||2===e)))}=o;const b=d&&d.length>0?d:[{label:(0,r.__)("Strongly disagree","woocommerce"),value:"1"},{label:(0,r.__)("Disagree","woocommerce"),value:"2"},{label:(0,r.__)("Neutral","woocommerce"),value:"3"},{label:(0,r.__)("Agree","woocommerce"),value:"4"},{label:(0,r.__)("Strongly Agree","woocommerce"),value:"5"}],[f,_]=(0,e.useState)(m||NaN),[w,h]=(0,e.useState)(m||NaN),[g,k]=(0,e.useState)(""),[y,C]=(0,e.useState)(!1),[S,v]=(0,e.useState)(!0),E=()=>{v(!1),u&&u()},x=(e,o)=>{const t=parseInt(e,10);o(t),C(!Number.isInteger(t))};return S?(0,e.createElement)(l.Modal,{className:"woocommerce-customer-effort-score",title:c,onRequestClose:E,shouldCloseOnClickOutside:!1},(0,e.createElement)(i.Text,{variant:"body",as:"p",className:"woocommerce-customer-effort-score__intro",size:14,lineHeight:"20px",marginBottom:"1.5em"},n||(0,r.__)("Your feedback will help create a better experience for thousands of merchants like you. Please tell us to what extent you agree or disagree with the statements below.","woocommerce")),(0,e.createElement)(i.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},a),(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},(0,e.createElement)(l.RadioControl,{selected:f.toString(10),options:b,onChange:e=>x(e,_)})),s&&(0,e.createElement)(i.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},s),s&&(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},(0,e.createElement)(l.RadioControl,{selected:w.toString(10),options:b,onChange:e=>x(e,h)})),"function"==typeof p&&p(f,w)&&(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__comments"},(0,e.createElement)(l.TextareaControl,{label:(0,r.__)("How is that screen useful to you? What features would you add or change?","woocommerce"),help:(0,r.__)("Your feedback will go to the WooCommerce development team","woocommerce"),value:g,placeholder:(0,r.__)("Optional, but much apprecated. We love reading your feedback!","woocommerce"),onChange:e=>k(e),rows:5})),y&&(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__errors",role:"alert"},(0,e.createElement)(i.Text,{variant:"body",as:"p"},(0,r.__)("Please provide feedback by selecting an option above.","woocommerce"))),(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__buttons"},(0,e.createElement)(l.Button,{isTertiary:!0,onClick:E,name:"cancel"},(0,r.__)("Cancel","woocommerce")),(0,e.createElement)(l.Button,{isPrimary:!0,onClick:()=>{!Number.isInteger(f)||s&&!Number.isInteger(w)?C(!0):(v(!1),t(f,w,g))},name:"send"},(0,r.__)("Share","woocommerce")))):null}s.propTypes={recordScoreCallback:n().func.isRequired,title:n().string,firstQuestion:n().string.isRequired,secondQuestion:n().string,defaultScore:n().number,onCloseModal:n().func};const m=()=>{},u=o=>{let{recordScoreCallback:t,title:c,description:n,noticeLabel:l,firstQuestion:i,secondQuestion:u,onNoticeShownCallback:d=m,onNoticeDismissedCallback:p=m,onModalShownCallback:b=m,onModalDismissedCallback:f=m,icon:_,shouldShowComments:w=((e,o)=>[e,o].some((e=>1===e||2===e)))}=o;const[h,g]=(0,e.useState)(!0),[k,y]=(0,e.useState)(!1),{createNotice:C}=(0,a.useDispatch)("core/notices2");return(0,e.useEffect)((()=>{h&&(C("success",l||c,{actions:[{label:(0,r.__)("Give feedback","woocommerce"),onClick:()=>{y(!0),b()}}],icon:_,explicitDismiss:!0,onDismiss:p}),g(!1),d())}),[h]),h?null:k?(0,e.createElement)(s,{title:c,description:n,firstQuestion:i,secondQuestion:u,recordScoreCallback:t,onCloseModal:f,shouldShowComments:w}):null};u.propTypes={recordScoreCallback:n().func.isRequired,title:n().string,onNoticeShownCallback:n().func,onNoticeDismissedCallback:n().func,onModalShownCallback:n().func,icon:n().element,firstQuestion:n().string.isRequired,secondQuestion:n().string,shouldShowComments:n().func};const d=o=>{let{onSelect:t,label:c}=o;const n=[{tooltip:(0,r.__)("Very difficult","woocommerce"),value:1,emoji:"😞"},{tooltip:(0,r.__)("Difficult","woocommerce"),value:2,emoji:"🙁"},{tooltip:(0,r.__)("Neutral","woocommerce"),value:3,emoji:"😑"},{tooltip:(0,r.__)("Good","woocommerce"),value:4,emoji:"🙂"},{tooltip:(0,r.__)("Very good","woocommerce"),value:5,emoji:"😍"}];return(0,e.createElement)("div",{className:"customer-feedback-simple__container"},(0,e.createElement)(i.Text,{variant:"subtitle.small",as:"p",size:"13",lineHeight:"16px"},c),(0,e.createElement)("div",{className:"customer-feedback-simple__selection"},n.map((o=>(0,e.createElement)(l.Tooltip,{text:o.tooltip,key:o.value,position:"top center"},(0,e.createElement)(l.Button,{onClick:()=>{t(o.value)}},o.emoji))))))};function p(o){let{onSubmit:t,title:c,description:n,onModalClose:r,children:a,isSubmitButtonDisabled:s,submitButtonLabel:m,cancelButtonLabel:u}=o;const[d,p]=(0,e.useState)(!0),b=()=>{p(!1),r&&r()};return d?(0,e.createElement)(l.Modal,{className:"woocommerce-feedback-modal",title:c,onRequestClose:b,shouldCloseOnClickOutside:!1},(0,e.createElement)(i.Text,{variant:"body",as:"p",className:"woocommerce-feedback-modal__description",size:14,lineHeight:"20px",marginBottom:"1.5em"},n),a,(0,e.createElement)("div",{className:"woocommerce-feedback-modal__buttons"},(0,e.createElement)(l.Button,{isTertiary:!0,onClick:b,name:"cancel"},u),(0,e.createElement)(l.Button,{isPrimary:!s,isSecondary:s,onClick:()=>{t(),p(!1)},name:"send",disabled:s},m))):null}function b(o){let{recordScoreCallback:t,onCloseModal:c}=o;const[n,a]=(0,e.useState)(!1),[s,m]=(0,e.useState)(!1),[u,d]=(0,e.useState)(!1),[b,f]=(0,e.useState)(!1),[_,w]=(0,e.useState)(!1),h=[{key:"missing-features",label:(0,r.__)("Missing features","woocommerce"),checked:n,onChange:a},{key:"missing-plugins",label:(0,r.__)("Missing plugins","woocommerce"),checked:s,onChange:m},{key:"difficult-to-use",label:(0,r.__)("It is difficult to use","woocommerce"),checked:u,onChange:d},{key:"slow-buggy-or-broken",label:(0,r.__)("It is slow, buggy, or broken","woocommerce"),checked:b,onChange:f},{key:"other",label:(0,r.__)("Other (describe below)","woocommerce"),checked:_,onChange:w}],[g,k]=(0,e.useState)(""),y=!(g||n||s||u||b||_);return(0,e.createElement)(p,{title:(0,r.__)("Thanks for trying out the new product editor!","woocommerce"),description:(0,r.__)("We’re working on making it better, and your feedback will help improve the experience for thousands of merchants like you.","woocommerce"),onSubmit:()=>{const e=h.filter((e=>e.checked)).map((e=>e.key));t(e,g)},onModalClose:c,isSubmitButtonDisabled:y,submitButtonLabel:(0,r.__)("Send feedback","woocommerce"),cancelButtonLabel:(0,r.__)("Skip","woocommerce")},(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},(0,r.__)("What made you switch back to the classic product editor?","woocommerce")),(0,e.createElement)(i.Text,{weight:"400",size:"12",as:"p",lineHeight:"16px",color:"#757575",className:"woocommerce-product-mvp-feedback-modal__subtitle"},(0,r.__)("(Check all that apply)","woocommerce")),(0,e.createElement)("div",{className:"woocommerce-product-mvp-feedback-modal__checkboxes"},h.map(((o,t)=>(0,e.createElement)(l.CheckboxControl,{key:t,label:o.label,name:o.key,checked:o.checked,onChange:o.onChange})))),(0,e.createElement)("div",{className:"woocommerce-product-mvp-feedback-modal__comments"},(0,e.createElement)(l.TextareaControl,{label:(0,r.__)("Additional comments","woocommerce"),value:g,placeholder:(0,r.__)("Optional, but much apprecated. We love reading your feedback!","woocommerce"),onChange:e=>k(e),rows:5}))))}d.propTypes={onSelect:n().func.isRequired,label:n().string.isRequired},p.propTypes={onSubmit:n().func.isRequired,title:n().string,description:n().string,onModalClose:n().func,isSubmitButtonDisabled:n().bool,submitButtonLabel:n().string,cancelButtonLabel:n().string},b.propTypes={recordScoreCallback:n().func.isRequired,onCloseModal:n().func}}(),(window.wc=window.wc||{}).customerEffortScore=c}();