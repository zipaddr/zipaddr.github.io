function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver2.11 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    https://bank-auto.com/
 *	@link    https://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[使い方：headタグ内に次の1行を定義して下さい]
 *	<script src="https://zipaddr.github.io/bankautob.js" charset="UTF-8"></script>
 */
/*	<-↓ 以下は変更が可能な箇所です-> */
this.pm= new Array();
//            銀行コード、       支店コード
this.pm[1]= {"bkc":"bank_code", "bkn":"bank_name", "brc":"branch_code", "brn":"branch_name" };
this.pm[2]= {"bkc":"bank_code2","bkn":"bank_name2","brc":"branch_code2","brn":"branch_name2"};
this.pm[3]= {"bkc":"bank_code3","bkn":"bank_name3","brc":"branch_code3","brn":"branch_name3"};
this.bankmax=3;
this.bgc="#009999"; // guide_bgc
this.ovr="#00bbff"; // deepskyblue
this.lnc="#ffffcc"; // link color
this.lgc="#333333"; // link guide
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "10";     // 拡張用(selectc)
this.left=22;       // offsetLeft、ガイダンス画面表示位置の補正
this.top= 18;       // offsetTop
this.pfon="12";     // pc:font-size
this.phig="1.4";    // pc:height
this.sfon="16";     // sPhone
this.shig="1.6";
this.rtrv="1";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
this.clear="_clear";
this.debug="";      // 1:debug-mode
/*	<-↑ 以上が変更可能です-> */

this.ver="2";
this.rev=".11";
this.com=".com";
this.goo=".git";
this.sv= "";
this.pad= 0;
this.url;
this.ul= new Array();
this.uls=new Array();
this.b= new Array();// bank_code
this.n= new Array();// bank_name
this.r= new Array();// branch_code
this.m= new Array();// branch_name
this.tb=new Array();// table
this.at=new Array();// guide
this.bc=new Array();// 銀行コード
this.xb="";         // code
this.xn="";         // name
this.xi="";         // number
this.xp="";         // sequence
this.xk="";
this.apad="";       // module追加
this.xlisten= "";   // 1:ｷIE,2:IE
this.elid="bnkauto";// ガイダンスid
this.zc="bnk_close";// 閉じるid
this.cls="click";   // or mouseover
this.contract="ymGTGwr9NXCv"; // 契約コード(c)
this.Cache=[];      // キャッシュ
} var BK= new Bnk;
Bnk.eFe=function(){Bnk.dUb(7)};Bnk.m7=function(){Bnk.yWe(7)};Bnk.v7=function(){Bnk.aYa(7)};Bnk.dUb=function(r){Bnk.anp(BK.at[r])};Bnk.xXb=function(){Bnk.dUb(6)};Bnk.m6=function(){Bnk.yWe(6)};Bnk.v6=function(){Bnk.aYa(6)};Bnk.kBe=function(g,a){BK.xi=g;BK.xp=a;var h="";if(a==1||a==2){BK.xb=BK.b[g];BK.xn=BK.n[g]}else{BK.xb=BK.r[g];BK.xn=BK.m[g];if(!BK.bc[g]||BK.bc[g]=="")return}if(a==1||a==3){h=document.getElementById(BK.xb).value;h=Bnk.uUa(h);if(0<h.length&&BK.rtrv0==""){Bnk.pie(h,BK.xb)}}else{h=document.getElementById(BK.xn).value;h=Bnk.uUa(h);if(0<h.length&&BK.rtrv0==""){Bnk.pie(h,BK.xn)}}};Bnk.a0=function(t,d,w){if(t.addEventListener){t.addEventListener(d,w,false);BK.xlisten="1"}else if(t.attachEvent){t.attachEvent('on'+d,w);BK.xlisten="2"}};Bnk.p1=function(e,y){if(!document.getElementById(e))return 0;var p=document.getElementById(e);if(p.currentStyle)var z=p.currentStyle[y];else if(getComputedStyle){var z=document.defaultView.getComputedStyle(p,'').getPropertyValue(y)}else var z="0";if(typeof z==="undefined")z="1";var d=z;d=d.replace(/rem/g,'');d=d.replace(/em/g,'');if(z!=d)z=(BK.sphone!="")?parseInt(d*24):parseInt(d*BK.pfon);return z};Bnk.pRc=function(){Bnk.kBe(3,1)};Bnk.ir3=function(){Bnk.kBe(3,3)};Bnk.uXd=function(){Bnk.dUb(5)};Bnk.m5=function(){Bnk.yWe(5)};Bnk.v5=function(){Bnk.aYa(5)};Bnk.qZd=function(h,r,v,f,t){var c='keyup';var c2='compositionend';var u="";if(h!=""&&document.getElementById(h)){u=document.getElementById(h);if(t==1){Bnk.a0(u,c,Bnk.pPb);Bnk.a0(u,c2,Bnk.pPb)}else if(t==2){Bnk.a0(u,c,Bnk.dVb);Bnk.a0(u,c2,Bnk.dVb)}else if(t==3){Bnk.a0(u,c,Bnk.pRc);Bnk.a0(u,c2,Bnk.pRc)}}if(r!=""&&document.getElementById(r)){u=document.getElementById(r);if(t==1){Bnk.a0(u,c,Bnk.gYb);Bnk.a0(u,c2,Bnk.gYb)}else if(t==2){Bnk.a0(u,c,Bnk.uHb);Bnk.a0(u,c2,Bnk.uHb)}else if(t==3){Bnk.a0(u,c,Bnk.cHb);Bnk.a0(u,c2,Bnk.cHb)}}if(v!=""&&document.getElementById(v)){u=document.getElementById(v);if(t==1){Bnk.a0(u,c,Bnk.ir1);Bnk.a0(u,c2,Bnk.ir1)}else if(t==2){Bnk.a0(u,c,Bnk.ir2);Bnk.a0(u,c2,Bnk.ir2)}else if(t==3){Bnk.a0(u,c,Bnk.ir3);Bnk.a0(u,c2,Bnk.ir3)}}if(f!=""&&document.getElementById(f)){u=document.getElementById(f);if(t==1){Bnk.a0(u,c,Bnk.im1);Bnk.a0(u,c2,Bnk.im1)}else if(t==2){Bnk.a0(u,c,Bnk.im2);Bnk.a0(u,c2,Bnk.im2)}else if(t==3){Bnk.a0(u,c,Bnk.im3);Bnk.a0(u,c2,Bnk.im3)}}};Bnk.dCc=function(){Bnk.dUb(4)};Bnk.m4=function(){Bnk.yWe(4)};Bnk.v4=function(){Bnk.aYa(4)};Bnk.au=function(e){var d="https:";var w=BK.uls[e];if(location.protocol==d||BK.ul[e]==""){}else{var d="http:";var w=BK.ul[e]}w=Bnk.r2(unescape(w));w=d+'/'+'/'+w;return w};Bnk.bFe=function(){Bnk.dUb(10)};Bnk.m10=function(){Bnk.yWe(10)};Bnk.v10=function(){Bnk.aYa(10)};Bnk.cHb=function(){Bnk.kBe(3,2)};Bnk.im3=function(){Bnk.kBe(3,4)};Bnk.uUa=function(d){var m=Bnk.vNc(d);m=m.replace(/-/g,'');m=m.replace(/\s/g,'');return m};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.l2=function(c,y){if(document.getElementById(c)){var w='click';var d='mouseover';var z='mouseout';var h=document.getElementById(c);if(y==1){Bnk.a0(h,w,Bnk.cDc);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m1);Bnk.a0(h,z,Bnk.v1)}}else if(y==2){Bnk.a0(h,w,Bnk.dWd);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m2);Bnk.a0(h,z,Bnk.v2)}}else if(y==3){Bnk.a0(h,w,Bnk.zCc);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m3);Bnk.a0(h,z,Bnk.v3)}}else if(y==4){Bnk.a0(h,w,Bnk.dCc);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m4);Bnk.a0(h,z,Bnk.v4)}}else if(y==5){Bnk.a0(h,w,Bnk.uXd);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m5);Bnk.a0(h,z,Bnk.v5)}}else if(y==6){Bnk.a0(h,w,Bnk.xXb);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m6);Bnk.a0(h,z,Bnk.v6)}}else if(y==7){Bnk.a0(h,w,Bnk.eFe);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m7);Bnk.a0(h,z,Bnk.v7)}}else if(y==8){Bnk.a0(h,w,Bnk.fAc);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m8);Bnk.a0(h,z,Bnk.v8)}}else if(y==9){Bnk.a0(h,w,Bnk.wSa);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m9);Bnk.a0(h,z,Bnk.v9)}}else if(y==10){Bnk.a0(h,w,Bnk.bFe);if(BK.sphone==""){Bnk.a0(h,d,Bnk.m10);Bnk.a0(h,z,Bnk.v10)}}}};Bnk.wHe=function(){var x="211";var p=Bnk.au(BK.sv)+"/js/bankauto_x.php?v="+x;if(BK.apad!="")p+="&m="+BK.apad;Bnk.s4(p)};Bnk.dVb=function(){Bnk.kBe(2,1)};Bnk.ir2=function(){Bnk.kBe(2,3)};Bnk.yCe=function(){var n="bankauto_param";if(document.getElementById(n)){var a=document.getElementById(n).value;var u=a.split(",");for(var d=0;d<u.length;d++){var z=u[d].replace(/(^\s+)|(\s+$)/g,"");var v=z.split("=");if(v.length==2){var m=v[0];var y=v[1];if(m=="bkc")BK.b[1]=y;else if(m=="bkn")BK.n[1]=y;else if(m=="brc")BK.r[1]=y;else if(m=="brn")BK.m[1]=y;else if(m=="bkc2")BK.b[2]=y;else if(m=="bkn2")BK.n[2]=y;else if(m=="brc2")BK.r[2]=y;else if(m=="brn2")BK.m[2]=y;else if(m=="bkc3")BK.b[3]=y;else if(m=="bkn3")BK.n[3]=y;else if(m=="brc3")BK.r[3]=y;else if(m=="brn3")BK.m[3]=y;else if(m=="sel")BK.sel=y;else if(m=="left")BK.left=y;else if(m=="top")BK.top=y;else if(m=="pfon")BK.pfon=y;else if(m=="phig")BK.phig=y;else if(m=="rtrv")BK.rtrv=y;else if(m=="rtrv0")BK.rtrv0=y;else if(m=="bankmax")BK.bankmax=y}}}};Bnk.r2=function(w){var m=w.replace(/う/g,'');m=m.replace(/あ/g,'');m=m.replace(/い/g,'');m=m.replace(/え/g,'');return m};Bnk.zCc=function(){Bnk.dUb(3)};Bnk.m3=function(){Bnk.yWe(3)};Bnk.v3=function(){Bnk.aYa(3)};Bnk.cDc=function(){Bnk.dUb(1)};Bnk.m1=function(){Bnk.yWe(1)};Bnk.v1=function(){Bnk.aYa(1)};Bnk.s4=function(x){if(BK.debug=="T")alert(x);Bnk.e0(BK.elid);var f=document.createElement("script");f.id=BK.elid;f.setAttribute("type","text/javascript");f.setAttribute("src",x);f.setAttribute("charset","UTF-8");document.body.appendChild(f)};Bnk.wSa=function(){Bnk.dUb(9)};Bnk.m9=function(){Bnk.yWe(9)};Bnk.v9=function(){Bnk.aYa(9)};Bnk.e0=function(w){if(document.getElementById(w)){var m=document.getElementById(w);var d=document.getElementsByTagName("body").item(0);d.removeChild(m)}};Bnk.vNc=function(z){var y="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var n="0123456789-----";var d="";for(var x=0;x<z.length;x++){var t=z.charAt(x);var p=y.indexOf(t,0);if(p>=0)t=n.charAt(p);d+=t}return d};Bnk.pPb=function(){Bnk.kBe(1,1)};Bnk.ir1=function(){Bnk.kBe(1,3)};Bnk.sNe=function(p,x,s,r,z){if(p!=""){BK.tb["0"][p]=z;BK.tb["1"][p]=1;BK.tb["2"][p]=x}if(x!=""){BK.tb["0"][x]=z;BK.tb["1"][x]=2;BK.tb["2"][x]=p}if(s!=""){BK.tb["0"][s]=z;BK.tb["1"][s]=3;BK.tb["2"][s]=r}if(r!=""){BK.tb["0"][r]=z;BK.tb["1"][r]=4;BK.tb["2"][r]=s}};Bnk.fBc=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.vXb();if(BK.sphone==""){var r=navigator.userAgent;if((r.indexOf('iPhone')>0&&r.indexOf('iPad')==-1)||r.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var u=1;u<=BK.bankmax;u++){var b=BK.pm[u];BK.b[u]=(typeof b.bkc!="undefined")?b.bkc:"";BK.n[u]=(typeof b.bkn!="undefined")?b.bkn:"";BK.r[u]=(typeof b.brc!="undefined")?b.brc:"";BK.m[u]=(typeof b.brn!="undefined")?b.brn:""}Bnk.yCe();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var a=1;a<=BK.bankmax;a++){var v=BK.b[a];var n=BK.n[a];var w=BK.r[a];var g=BK.m[a];Bnk.pCb(v);Bnk.pCb(n);Bnk.pCb(w);Bnk.pCb(g);Bnk.qZd(v,n,w,g,a);Bnk.sNe(v,n,w,g,a)}Bnk.wHe();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.pCb=function(w){var k=w;if(w==""||document.getElementById(w)){}else{var g=document.getElementsByName(w);if(g.length==1&&(g[0].id=="undefined"||g[0].id=="")){k=k.replace(/\[/g,"");k=k.replace(/\]/g,"");g[0].id=k}else if(g.length==1){k=g[0].id}}return k};Bnk.uHb=function(){Bnk.kBe(2,2)};Bnk.im2=function(){Bnk.kBe(2,4)};Bnk.yWe=function(w){var obj=document.getElementById("zlin_"+w);Bnk.u9(obj,1)};Bnk.dWd=function(){Bnk.dUb(2)};Bnk.m2=function(){Bnk.yWe(2)};Bnk.v2=function(){Bnk.aYa(2)};Bnk.fAc=function(){Bnk.dUb(8)};Bnk.m8=function(){Bnk.yWe(8)};Bnk.v8=function(){Bnk.aYa(8)};Bnk.gYb=function(){Bnk.kBe(1,2)};Bnk.im1=function(){Bnk.kBe(1,4)};Bnk.aYa=function(y){var obj=document.getElementById("zlin_"+y);Bnk.u9(obj,0)};Bnk.vXb=function(){BK.ul[0]="";BK.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+BK.com;BK.sv=Math.floor(Math.random()*2);BK.sv=0};if(window.addEventListener){window.addEventListener('load',Bnk.fBc,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.fBc,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.fBc()})}catch(e){}