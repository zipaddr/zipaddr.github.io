function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver2.7 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    http://bank-auto.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[使い方：headタグ内に次の1行を定義して下さい]
 *	<script src="https://zipaddr.github.io/bankauto0.js" charset="UTF-8"></script>
 */
/*	<-↓ 以下は変更が可能な箇所です-> */
this.pm= new Array();
//            銀行コード、       支店コード
this.pm[1]= {"bkc":"bank_code", "bkn":"bank_name", "brc":"branch_code", "brn":"branch_name" };
this.pm[2]= {"bkc":"bank_code2","bkn":"bank_name2","brc":"branch_code2","brn":"branch_name2"};
this.pm[3]= {"bkc":"bank_code3","bkn":"bank_name3","brc":"branch_code3","brn":"branch_name3"};
this.bankmax=3;
this.bgc="#009999"; // guide_bgc
this.lnc="#ffffcc"; // link color
this.lgc="#333333"; // link guide
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "10";     // 拡張用(selectc)
this.left=22;       // offsetLeft、ガイダンス画面表示位置の補正
this.top= 18;       // offsetTop
this.pfon="12";     // font-size
this.phig="1.4";    // height
this.rtrv="0";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
/*	<-↑ 以上が変更可能です-> */

this.ver="2";
this.rev=".7";
this.com=".com";
this.sv= "svn/";
this.goo=".git";
this.pad= 0;
this.url;
this.ul= new Array();
this.uls=new Array();
this.b= new Array();// bank_code
this.n= new Array();// bank_name
this.r= new Array();// branch_code
this.m= new Array();// branch_name
this.at=new Array();// guide
this.xb="";         // code
this.xn="";         // name
this.xi="";         // number
this.xp="";         // sequence
this.xk="";
this.bc="";         // 銀行コード
this.apad="";       // module追加
this.xlisten= "";   // 1:ｷIE,2:IE
this.elid="bnkauto";// ガイダンスid
this.zc="bnk_close";// 閉じるid
this.cls="click";   // or mouseover
this.contract="ymGTGwr9NXCv"; // 契約コード(c)
this.Cache=[];      // キャッシュ
} var BK= new Bnk;
Bnk.a0=function(m,u,z){if(m.addEventListener){m.addEventListener(u,z,false);BK.xlisten="1"}else if(m.attachEvent){m.attachEvent('on'+u,z);BK.xlisten="2"}};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.aTd=function(){Bnk.rZe(2,1)};Bnk.ir2=function(){Bnk.rZe(2,3)};Bnk.rZe=function(r,u){BK.xi=r;BK.xp=u;var t="";if(u==1||u==2){BK.xb=BK.b[r];BK.xn=BK.n[r]}else{BK.xb=BK.r[r];BK.xn=BK.m[r];if(BK.bc=="")return}if(u==1||u==3){t=document.getElementById(BK.xb).value;t=Bnk.xPc(t);if(0<t.length&&BK.rtrv0==""){Bnk.pie(t,BK.xb)}}else{t=document.getElementById(BK.xn).value;t=Bnk.xPc(t);if(0<t.length&&BK.rtrv0==""){Bnk.pie(t,BK.xn)}}};Bnk.e0=function(v){if(document.getElementById(v)){var c=document.getElementById(v);var d=document.getElementsByTagName("body").item(0);d.removeChild(c)}};Bnk.hAb=function(e){Bnk.anp(BK.at[e])};Bnk.xPc=function(q){var c=Bnk.zKe(q);c=c.replace(/-/g,'');c=c.replace(/\s/g,'');return c};Bnk.nSd=function(){Bnk.rZe(3,2)};Bnk.im3=function(){Bnk.rZe(3,4)};Bnk.rQd=function(){var n="bankauto_param";if(document.getElementById(n)){var d=document.getElementById(n).value;var c=d.split(",");for(var g=0;g<c.length;g++){var r=c[g].replace(/(^\s+)|(\s+$)/g,"");var y=r.split("=");if(y.length==2){var h=y[0];var a=y[1];if(h=="bkc")BK.b[1]=a;else if(h=="bkn")BK.n[1]=a;else if(h=="brc")BK.r[1]=a;else if(h=="brn")BK.m[1]=a;else if(h=="bkc2")BK.b[2]=a;else if(h=="bkn2")BK.n[2]=a;else if(h=="brc2")BK.r[2]=a;else if(h=="brn2")BK.m[2]=a;else if(h=="bkc3")BK.b[3]=a;else if(h=="bkn3")BK.n[3]=a;else if(h=="brc3")BK.r[3]=a;else if(h=="brn3")BK.m[3]=a;else if(h=="sel")BK.sel=a;else if(h=="left")BK.left=a;else if(h=="top")BK.top=a;else if(h=="pfon")BK.pfon=a;else if(h=="phig")BK.phig=a;else if(h=="rtrv")BK.rtrv=a;else if(h=="rtrv0")BK.rtrv0=a;else if(h=="bankmax")BK.bankmax=a}}}};Bnk.e1=function(b,m){if(document.getElementById(b)){var f=document.getElementById(b)}else{var f=document.createElement('div');f.id=b;if(m=="")var m=document.getElementsByTagName("body").item(0);m.appendChild(f)}return f};Bnk.pGb=function(){Bnk.rZe(3,1)};Bnk.ir3=function(){Bnk.rZe(3,3)};Bnk.uWb=function(){Bnk.hAb(6)};Bnk.p1=function(c,w){if(!document.getElementById(c))return 0;var x=document.getElementById(c);if(x.currentStyle)var a=x.currentStyle[w];else if(getComputedStyle){var a=document.defaultView.getComputedStyle(x,'').getPropertyValue(w)}else var a="0";if(typeof a==="undefined")a="1";var n=a;n=n.replace(/rem/g,'');n=n.replace(/em/g,'');if(a!=n)a=(BK.sphone!="")?parseInt(n*24):parseInt(n*BK.pfon);return a};Bnk.mFe=function(){Bnk.hAb(1)};Bnk.tBa=function(){Bnk.rZe(1,1)};Bnk.ir1=function(){Bnk.rZe(1,3)};Bnk.sBe=function(){var c="0";var u=BK.sv;var x=location.protocol=="https:"?BK.uls[u]:BK.ul[u];x=Bnk.r2(unescape(x));var n=location.protocol+'/'+'/'+x+"/js/bankauto"+c+".php?v="+c;if(BK.apad!="")n+="&m="+BK.apad;Bnk.s4(n)};Bnk.kTe=function(){Bnk.hAb(3)};Bnk.hAe=function(x){var z=x;if(x==""||document.getElementById(x)){}else{var r=document.getElementsByName(x);if(r.length==1&&(r[0].id=="undefined"||r[0].id=="")){z=z.replace(/\[/g,"");z=z.replace(/\]/g,"");r[0].id=z}else if(r.length==1){z=r[0].id}}return z};Bnk.qYc=function(){Bnk.hAb(2)};Bnk.mFe0=function(){Bnk.hAb(10)};Bnk.tAd=function(){Bnk.hAb(4)};Bnk.hPa=function(){Bnk.rZe(2,2)};Bnk.im2=function(){Bnk.rZe(2,4)};Bnk.tGe=function(c){c.style.imeMode="disabled"};Bnk.o0=function(q){var u=0;while(q){u+=q.offsetLeft;q=q.offsetParent}return u};Bnk.bTa=function(){Bnk.hAb(7)};Bnk.bKa=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.fBb();if(BK.sphone==""){var q=navigator.userAgent;if((q.indexOf('iPhone')>0&&q.indexOf('iPad')==-1)||q.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var u=1;u<=BK.bankmax;u++){var x=BK.pm[u];BK.b[u]=BK.n[u]=BK.r[u]=BK.m[u]="";if(typeof x.bkc!="undefined")BK.b[u]=x.bkc;if(typeof x.bkn!="undefined")BK.n[u]=x.bkn;if(typeof x.brc!="undefined")BK.r[u]=x.brc;if(typeof x.brn!="undefined")BK.m[u]=x.brn}Bnk.rQd();for(var k=1;k<=BK.bankmax;k++){var v=BK.b[k];var e=BK.n[k];var r=BK.r[k];var t=BK.m[k];Bnk.hAe(v);Bnk.hAe(e);Bnk.hAe(r);Bnk.hAe(t);Bnk.bVe(v,e,r,t,k)}Bnk.sBe();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.fBb=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.l2=function(e,n){if(document.getElementById(e)){var u='click';var r=document.getElementById(e);if(n==1){Bnk.a0(r,u,Bnk.mFe)}else if(n==2){Bnk.a0(r,u,Bnk.qYc)}else if(n==3){Bnk.a0(r,u,Bnk.kTe)}else if(n==4){Bnk.a0(r,u,Bnk.tAd)}else if(n==5){Bnk.a0(r,u,Bnk.nKb)}else if(n==6){Bnk.a0(r,u,Bnk.uWb)}else if(n==7){Bnk.a0(r,u,Bnk.bTa)}else if(n==8){Bnk.a0(r,u,Bnk.hMe)}else if(n==9){Bnk.a0(r,u,Bnk.dNe)}else if(n==10){Bnk.a0(r,u,Bnk.mFe0)}}};Bnk.dNe=function(){Bnk.hAb(9)};Bnk.o1=function(g,e){var t=0;if(e=="")return t;if(typeof jQuery!="undefined"){var a=jQuery("#"+e).offset();t=a.top}else{while(g){t+=g.offsetTop;g=g.offsetParent}}if(document.getElementById(e)){var q=document.getElementById(e);var p=Math.floor((q.offsetHeight-18)/2)-3;if(p>=2){t+=p}}return t};Bnk.bVe=function(e,q,c,g,d){var x='keyup';var u="";if(e!=""&&document.getElementById(e)){u=document.getElementById(e);if(d==1){Bnk.a0(u,x,Bnk.tBa)}else if(d==2){Bnk.a0(u,x,Bnk.aTd)}else if(d==3){Bnk.a0(u,x,Bnk.pGb)}}if(q!=""&&document.getElementById(q)){u=document.getElementById(q);if(d==1){Bnk.a0(u,x,Bnk.rBb)}else if(d==2){Bnk.a0(u,x,Bnk.hPa)}else if(d==3){Bnk.a0(u,x,Bnk.nSd)}}if(c!=""&&document.getElementById(c)){u=document.getElementById(c);if(d==1){Bnk.a0(u,x,Bnk.ir1)}else if(d==2){Bnk.a0(u,x,Bnk.ir2)}else if(d==3){Bnk.a0(u,x,Bnk.ir3)}}if(g!=""&&document.getElementById(g)){u=document.getElementById(g);if(d==1){Bnk.a0(u,x,Bnk.im1)}else if(d==2){Bnk.a0(u,x,Bnk.im2)}else if(d==3){Bnk.a0(u,x,Bnk.im3)}}};Bnk.zKe=function(u){var f="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var p="0123456789-----";var z="";for(var s=0;s<u.length;s++){var m=u.charAt(s);var r=f.indexOf(m,0);if(r>=0)m=p.charAt(r);z+=m}return z};Bnk.r2=function(f){var v=f.replace(/う/g,'');v=v.replace(/あ/g,'');v=v.replace(/い/g,'');v=v.replace(/え/g,'');return v};Bnk.s4=function(e){Bnk.e0(BK.elid);var z=document.createElement("script");z.id=BK.elid;z.setAttribute("type","text/javascript");z.setAttribute("src",e);z.setAttribute("charset","UTF-8");document.body.appendChild(z)};Bnk.nKb=function(){Bnk.hAb(5)};Bnk.rBb=function(){Bnk.rZe(1,2)};Bnk.im1=function(){Bnk.rZe(1,4)};Bnk.hMe=function(){Bnk.hAb(8)};if(window.addEventListener){window.addEventListener('load',Bnk.bKa,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.bKa,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.bKa()})}catch(e){}