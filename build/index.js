(window.webpackJsonp_recruit_register=window.webpackJsonp_recruit_register||[]).push([[1],{5:function(e,t,n){}}]),function(e){function t(t){for(var l,c,o=t[0],u=t[1],i=t[2],m=0,p=[];m<o.length;m++)c=o[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(b&&b(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(l=!1)}l&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var l={},r={0:0},a=[];function c(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=l,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(n,l,function(t){return e[t]}.bind(null,l));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp_recruit_register=window.webpackJsonp_recruit_register||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=u;a.push([6,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){"use strict";n.r(t);var l=n(4),r=(n(5),n(0)),a=(n(3),n(1)),c=n(2);Object(l.registerBlockType)("create-block/recruit-register",{edit:function(e){var t,n,l=e.attributes,o=e.setAttributes,u=l.name,i=l.description,b=l.date,m=l.pref,p=l.city,s=l.address,d=l.company,O=(l.companySite,l.companyLogo,l.salaryType),E=l.salaryMin,j=l.salaryMax,y=l.employmentType,f=Object(c.useBlockProps)(),g="".concat(new Date(b).getFullYear(),"年").concat(new Date(b).getMonth()+1,"月").concat(new Date(b).getDate(),"日");return"HOUR"===O?t="時給":"DAY"===O?t="日給":"WEEK"===O?t="週給":"MONTH"===O?t="月収":"YEAR"===O&&(t="年収"),"FULL_TIME"===y?n="フルタイム":"PART_TIME"===y?n="パートタイム":"CONTRACTOR"===y?n="契約社員":"TEMPORARY"===y?n="パートタイム（短期）":"PER_DIEM"===y?n="アルバイト":"OTHER"===y&&(n="その他"),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.InspectorControls,null,Object(r.createElement)(a.PanelBody,{title:"概要"},Object(r.createElement)(a.TextControl,{label:"タイトル",value:l.name,onChange:function(e){return o({name:e})}}),Object(r.createElement)(a.TextareaControl,{label:"募集内容",value:l.description,onChange:function(e){return o({description:e})}})),Object(r.createElement)(a.PanelBody,{title:"会社概要"},Object(r.createElement)(a.TextControl,{label:"会社名",value:l.company,onChange:function(e){return o({company:e})}}),Object(r.createElement)(a.TextControl,{label:"会社公式サイトURL（任意）",value:l.companySite,onChange:function(e){return o({companySite:e})}}),Object(r.createElement)(a.TextControl,{label:"会社ロゴURL（任意）",value:l.companyLogo,onChange:function(e){return o({companyLogo:e})}}),Object(r.createElement)(a.TextControl,{label:"都道府県",value:l.pref,onChange:function(e){return o({pref:e})}}),Object(r.createElement)(a.TextControl,{label:"市町村",value:l.city,onChange:function(e){return o({city:e})}}),Object(r.createElement)(a.TextControl,{label:"番地",value:l.address,onChange:function(e){return o({address:e})}})),Object(r.createElement)(a.PanelBody,{title:"待遇（給与）"},Object(r.createElement)(a.SelectControl,{label:"給与形態",value:l.salaryType,onChange:function(e){return o({salaryType:e})},options:[{value:null,label:"給与形態を選択"},{value:"HOUR",label:"時給"},{value:"DAY",label:"日給"},{value:"WEEK",label:"週給"},{value:"MONTH",label:"月給"},{value:"YEAR",label:"年収"}]}),Object(r.createElement)(a.TextControl,{label:"最少額（半角数字）",value:l.salaryMin,type:"number",onChange:function(e){return o({salaryMin:e})}}),Object(r.createElement)(a.TextControl,{label:"最大額（半角数字）",value:l.salaryMax,type:"number",onChange:function(e){return o({salaryMax:e})}})),Object(r.createElement)(a.PanelBody,{title:"雇用形態"},Object(r.createElement)(a.SelectControl,{value:l.employmentType,onChange:function(e){return o({employmentType:e})},options:[{value:null,label:"雇用形態を選択"},{value:"FULL_TIME",label:"フルタイム"},{value:"PART_TIME",label:"パートタイム"},{value:"CONTRACTOR",label:"契約社員"},{value:"TEMPORARY",label:"パートタイム（短期）"},{value:"PER_DIEM",label:"アルバイト"},{value:"OTHER",label:"その他"}]})),Object(r.createElement)(a.PanelBody,{title:"募集期限"},Object(r.createElement)(a.DateTimePicker,{currentDate:l.date,onChange:function(e){return o({date:e})}}))),Object(r.createElement)("div",f,Object(r.createElement)("table",null,Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"タイトル"),Object(r.createElement)("td",null,u)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"募集内容"),Object(r.createElement)("td",null,"".concat(i))),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"募集期限"),Object(r.createElement)("td",null,g)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"会社名"),Object(r.createElement)("td",null,d)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"会社所在地"),Object(r.createElement)("td",null,m,p,s)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"待遇"),Object(r.createElement)("td",null,t," : ",String(E).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),"円 ~ ",String(j).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),"円")),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"雇用形態"),Object(r.createElement)("td",null,n)))))},save:function(e){var t,n,l=e.attributes,a=l.name,o=l.description,u=l.date,i=l.pref,b=l.city,m=l.address,p=l.company,s=l.companySite,d=l.companyLogo,O=l.salaryType,E=l.salaryMin,j=l.salaryMax,y=l.employmentType,f="".concat((new Date).getFullYear(),"-").concat(("0"+((new Date).getMonth()+1)).slice(-2),"-").concat(("0"+(new Date).getDate()).slice(-2)),g="".concat(new Date(u).getFullYear(),"年").concat(new Date(u).getMonth()+1,"月").concat(new Date(u).getDate(),"日"),h={"@context":"https://schema.org/","@type":"JobPosting",title:a,description:"<p>"+o+"</p>",datePosted:f,validThrough:u,employmentType:y,hiringOrganization:{"@type":"Organization",name:p,sameAs:s,logo:d},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:m,addressLocality:i,addressRegion:b,addressCountry:"JP"}},baseSalary:{"@type":"MonetaryAmount",currency:"JPY",value:{"@type":"QuantitativeValue",minValue:Number(E),maxValue:Number(j),unitText:O}}};return"HOUR"===O?t="時給":"DAY"===O?t="日給":"WEEK"===O?t="週給":"MONTH"===O?t="月収":"YEAR"===O&&(t="年収"),"FULL_TIME"===y?n="フルタイム":"PART_TIME"===y?n="パートタイム":"CONTRACTOR"===y?n="契約社員":"TEMPORARY"===y?n="パートタイム（短期）":"PER_DIEM"===y?n="アルバイト":"OTHER"===y&&(n="その他"),Object(r.createElement)("div",c.useBlockProps.save(),Object(r.createElement)("script",{type:"application/ld+json"},JSON.stringify(h,null,"\t")),Object(r.createElement)("table",null,Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"タイトル"),Object(r.createElement)("td",null,a)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"募集内容"),Object(r.createElement)("td",null,"".concat(o))),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"募集期限"),Object(r.createElement)("td",null,g)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"会社名"),Object(r.createElement)("td",null,p)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"会社所在地"),Object(r.createElement)("td",null,i,b,m)),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"待遇"),Object(r.createElement)("td",null,t," : ",String(E).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),"円 ~ ",String(j).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),"円")),Object(r.createElement)("tr",null,Object(r.createElement)("th",null,"雇用形態"),Object(r.createElement)("td",null,n))))}})}]);