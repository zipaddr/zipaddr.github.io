/*
 *	■<input type="xxx"の設定処理( typeauto.js Ver1.2 )
 *
 *	The use is free of charge. // ご利用は無料です。
 *	@demo    http://zipaddr.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
[htmlの定義]
<script src="https://zipaddr.github.io/typeauto.js" charset="UTF-8"></script>

[追加設定例]
function typeauto_ownb() {
  Typ.tel[0]= "tel1";
  Typ.tel[1]= "tel2";
  Typ.tel[2]= "tel3";
}
*/
Typ=function(){};
Typ.focus="1";           // Top_focus_use(pc)
Typ.bro="";              // browser
Typ.ua="";               // s:sphone
Typ.Cache=[];            // cache
Typ.disabled=new Array();// disabled設定
Typ.number=new Array();  // number設定
Typ.tel=new Array();     // type="tel"設定
Typ.url=new Array();     // type="url"設定
Typ.email=new Array();   // type="email"設定
Typ.disabled[0]="";
Typ.number[0]="";
Typ.tel[0]= "";
Typ.url[0]= "";
Typ.email[0]= "";
Typ.entry=function(){Typ.brows();if(typeof typeauto_ownb==="function")typeauto_ownb();var prm="disabled,number,tel,url,email";if(typeof typeauto_own==="function")typeauto_own();var tp=prm.split(",");for(var i=0;i<tp.length;i++){Typ.gen(tp[i])}if(Typ.focus=="1"&&Typ.ua!="s")Typ.top_focus()};Typ.gen=function(tpn){if(Typ.ua=="s"){}else{if(tpn=="disabled")Typ.di(Typ.disabled)}if(tpn=="number")Typ.sets(Typ.number,tpn);else if(tpn=="tel")Typ.sets(Typ.tel,tpn);else if(tpn=="url")Typ.sets(Typ.url,tpn);else if(tpn=="email")Typ.sets(Typ.email,tpn)};Typ.di=function(tbl){for(var i=0;i<tbl.length;i++){var idn=tbl[i];if(idn!=""&&document.getElementById(idn)){var obj=document.getElementById(idn);Typ.setime(obj)}}};Typ.sets=function(tbl,tpn){for(var i=0;i<tbl.length;i++){var idn=tbl[i];if(idn!=""&&document.getElementById(idn)){var obj=document.getElementById(idn);Typ.settype(obj,tpn)}}};Typ.top_focus=function(){var elm=document.getElementsByTagName("*");for(var i=0;i<elm.length;i++){var e=elm[i];if(e.type=="text"||e.type=="textarea"||e.type=="email"||e.type=="url"||e.type=="tel"||e.type=="search"||e.type=="number"||e.type=="date"||e.type=="week"||e.type=="datetime"||e.type=="month"||e.type=="color"||e.type=="time"||e.type=="range"||e.type=="datetime-local"){e.focus();break}}};Typ.setime=function(obj){obj.style.imeMode="disabled"};Typ.settype=function(obj,type){var use=Typ.Cache[type];if(use=="1")obj.type=type;else if(use=="0")return;else{obj.type=type;if(obj.type==type)Typ.Cache[type]="1";else Typ.Cache[type]="0"}};Typ.brows=function(){var ver=window.navigator.appVersion.toLowerCase();var ua=window.navigator.userAgent.toLowerCase();if((ua.indexOf('iphone')>0&&ua.indexOf('ipad')==-1)||ua.indexOf('android')>0)Typ.ua="s";if(ua.indexOf("msie")>-1){if(ver.indexOf("msie 6.")>-1){Typ.bro="IE6"}else if(ver.indexOf("msie 7.")>-1){Typ.bro="IE7"}else if(ver.indexOf("msie 8.")>-1){Typ.bro="IE8"}else if(ver.indexOf("msie 9.")>-1){Typ.bro="IE9"}else if(ver.indexOf("msie 10.")>-1){Typ.bro="IE10"}else{Typ.bro="IE"}}else if(ua.indexOf("trident/7")>-1){Typ.bro="IE11"}else if(ua.indexOf("firefox")>-1){Typ.bro="Firefox"}else if(ua.indexOf("opera")>-1){Typ.bro="Opera"}else if(ua.indexOf("chrome")>-1){Typ.bro="Chrome"}else if(ua.indexOf("safari")>-1){Typ.bro="Safari"}else if(ua.indexOf("gecko")>-1){Typ.bro="Gecko"}else if(ua.indexOf("edge")>-1){Typ.bro="Edge"}else{Typ.bro="Unknown"}};if(window.addEventListener){window.addEventListener('load',Typ.entry,true)}else if(window.attachEvent){window.attachEvent('onload',Typ.entry,true)}try{$(document).on('pageinit',function(e){Typ.entry()})}catch(e){}