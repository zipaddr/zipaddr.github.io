/*
 *	■<input type="xxx"の置換処理( typeauto.js Ver1.1 )
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
Typ.bro="";              // browser
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
Typ.entry=function(){Typ.brows();if(typeof typeauto_ownb==="function" ) typeauto_ownb();var prm="disabled,number,tel,url,email";if(typeof typeauto_own ==="function" ) typeauto_own();var tp=prm.split(",");for( var i=0;i<tp.length;i++){Typ.gen(tp[i]);}};Typ.gen=function(tpn){if(Typ.bro=="Ipod"||Typ.bro=="Iphone"||Typ.bro=="Android"){;}else {if(tpn=="disabled")Typ.di(Typ.disabled);}if(tpn=="number" ) Typ.sets(Typ.number,tpn);else if(tpn=="tel" )  Typ.sets(Typ.tel,   tpn);else if(tpn=="url" )  Typ.sets(Typ.url,   tpn);else if(tpn =="email" ) Typ.sets(Typ.email, tpn);};Typ.di=function(tbl){for( var i=0;i<tbl.length;i++){var idn=tbl[i];if(idn!=""&&document.getElementById(idn)){var obj=document.getElementById(idn);Typ.setime(obj);}}};Typ.sets=function(tbl,tpn){for( var i=0;i<tbl.length;i++){var idn=tbl[i];if(idn!=""&&document.getElementById(idn)){var obj=document.getElementById(idn);Typ.settype(obj,tpn);}}};Typ.setime=function(obj){obj.style.imeMode="disabled";};Typ.settype=function(obj,type){obj.type=type;};Typ.brows=function(){var ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();if(ua.indexOf("msie") > -1){if(ver.indexOf("msie 6.") > -1){Typ.bro="IE6";}else if(ver.indexOf("msie 7.") > -1){Typ.bro="IE7";}else if(ver.indexOf("msie 8.") > -1){Typ.bro="IE8";}else if(ver.indexOf("msie 9.") > -1){Typ.bro="IE9";}else if(ver.indexOf("msie 10.")> -1){Typ.bro="IE10";}else {Typ.bro="IE";}}else if(ua.indexOf("trident/7")>-1){Typ.bro="IE11";}else if(ua.indexOf("firefox")> -1){Typ.bro="Firefox";}else if(ua.indexOf("opera")  > -1){Typ.bro="Opera";}else if(ua.indexOf("chrome") > -1){Typ.bro="Chrome";}else if(ua.indexOf("safari") > -1){Typ.bro="Safari";}else if(ua.indexOf("gecko")> -1)   {Typ.bro="Gecko";}else if(ua.indexOf("edge") > -1)   {Typ.bro="Edge";}else if(ua.indexOf("ipod") > -1)   {Typ.bro="Ipod";}else if(ua.indexOf("iphone") > -1){Typ.bro="Iphone";}else if(ua.indexOf("android")> -1){Typ.bro="Android";}else {Typ.bro="Unknown";}};if(window.addEventListener){window.addEventListener('load',Typ.entry,true);}else if(window.attachEvent){window.attachEvent('onload',Typ.entry,true);}try{$(document).on('pageinit',function(e){Typ.entry();});}catch(e){;}