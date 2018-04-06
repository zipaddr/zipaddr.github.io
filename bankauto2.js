function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver2.10 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    http://bank-auto.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[使い方：headタグ内に次の1行を定義して下さい]
 *	<script src="https://zipaddr.github.io/bankauto2.js" charset="UTF-8"></script>
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
this.rtrv="0";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
this.clear="_clear";
/*	<-↑ 以上が変更可能です-> */

this.ver="2";
this.rev=".10";
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
Bnk.mYa=function(){var z="210";var r=BK.sv;var c=location.protocol=="https:"?BK.uls[r]:BK.ul[r];c=Bnk.r2(unescape(c));var a=location.protocol+'/'+'/'+c+"/js/bankauto_x.php?v="+z;if(BK.apad!="")a+="&m="+BK.apad;Bnk.s4(a)};Bnk.ySb=function(){Bnk.yRb(3,1)};Bnk.ir3=function(){Bnk.yRb(3,3)};Bnk.uVd=function(){Bnk.yRb(1,2)};Bnk.im1=function(){Bnk.yRb(1,4)};Bnk.aAa=function(){Bnk.bZe(2)};Bnk.m2=function(){Bnk.wRc(2)};Bnk.v2=function(){Bnk.xZe(2)};Bnk.uHc=function(){Bnk.bZe(8)};Bnk.m8=function(){Bnk.wRc(8)};Bnk.v8=function(){Bnk.xZe(8)};Bnk.wVd=function(){Bnk.bZe(5)};Bnk.m5=function(){Bnk.wRc(5)};Bnk.v5=function(){Bnk.xZe(5)};Bnk.dQb=function(){Bnk.bZe(7)};Bnk.m7=function(){Bnk.wRc(7)};Bnk.v7=function(){Bnk.xZe(7)};Bnk.vPe=function(){Bnk.bZe(6)};Bnk.m6=function(){Bnk.wRc(6)};Bnk.v6=function(){Bnk.xZe(6)};Bnk.wRc=function(a){var obj=document.getElementById("zlin_"+a);Bnk.u9(obj,1)};Bnk.zFa=function(w,c,s,p,z){var k='keyup';var v="";if(w!=""&&document.getElementById(w)){v=document.getElementById(w);if(z==1){Bnk.a0(v,k,Bnk.zQc)}else if(z==2){Bnk.a0(v,k,Bnk.pWc)}else if(z==3){Bnk.a0(v,k,Bnk.ySb)}}if(c!=""&&document.getElementById(c)){v=document.getElementById(c);if(z==1){Bnk.a0(v,k,Bnk.uVd)}else if(z==2){Bnk.a0(v,k,Bnk.tFb)}else if(z==3){Bnk.a0(v,k,Bnk.sMb)}}if(s!=""&&document.getElementById(s)){v=document.getElementById(s);if(z==1){Bnk.a0(v,k,Bnk.ir1)}else if(z==2){Bnk.a0(v,k,Bnk.ir2)}else if(z==3){Bnk.a0(v,k,Bnk.ir3)}}if(p!=""&&document.getElementById(p)){v=document.getElementById(p);if(z==1){Bnk.a0(v,k,Bnk.im1)}else if(z==2){Bnk.a0(v,k,Bnk.im2)}else if(z==3){Bnk.a0(v,k,Bnk.im3)}}};Bnk.cGc=function(){var m="bankauto_param";if(document.getElementById(m)){var z=document.getElementById(m).value;var q=z.split(",");for(var r=0;r<q.length;r++){var a=q[r].replace(/(^\s+)|(\s+$)/g,"");var v=a.split("=");if(v.length==2){var s=v[0];var h=v[1];if(s=="bkc")BK.b[1]=h;else if(s=="bkn")BK.n[1]=h;else if(s=="brc")BK.r[1]=h;else if(s=="brn")BK.m[1]=h;else if(s=="bkc2")BK.b[2]=h;else if(s=="bkn2")BK.n[2]=h;else if(s=="brc2")BK.r[2]=h;else if(s=="brn2")BK.m[2]=h;else if(s=="bkc3")BK.b[3]=h;else if(s=="bkn3")BK.n[3]=h;else if(s=="brc3")BK.r[3]=h;else if(s=="brn3")BK.m[3]=h;else if(s=="sel")BK.sel=h;else if(s=="left")BK.left=h;else if(s=="top")BK.top=h;else if(s=="pfon")BK.pfon=h;else if(s=="phig")BK.phig=h;else if(s=="rtrv")BK.rtrv=h;else if(s=="rtrv0")BK.rtrv0=h;else if(s=="bankmax")BK.bankmax=h}}}};Bnk.hSc=function(q){var d="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var h="0123456789-----";var b="";for(var e=0;e<q.length;e++){var u=q.charAt(e);var k=d.indexOf(u,0);if(k>=0)u=h.charAt(k);b+=u}return b};Bnk.sMb=function(){Bnk.yRb(3,2)};Bnk.im3=function(){Bnk.yRb(3,4)};Bnk.zQc=function(){Bnk.yRb(1,1)};Bnk.ir1=function(){Bnk.yRb(1,3)};Bnk.dCb=function(){Bnk.bZe(4)};Bnk.m4=function(){Bnk.wRc(4)};Bnk.v4=function(){Bnk.xZe(4)};Bnk.uUa=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.pWc=function(){Bnk.yRb(2,1)};Bnk.ir2=function(){Bnk.yRb(2,3)};Bnk.bZe=function(c){Bnk.anp(BK.at[c])};Bnk.l2=function(n,x){if(document.getElementById(n)){var u='click';var k='mouseover';var s='mouseout';var f=document.getElementById(n);if(x==1){Bnk.a0(f,u,Bnk.vNd);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m1);Bnk.a0(f,s,Bnk.v1)}}else if(x==2){Bnk.a0(f,u,Bnk.aAa);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m2);Bnk.a0(f,s,Bnk.v2)}}else if(x==3){Bnk.a0(f,u,Bnk.mSe);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m3);Bnk.a0(f,s,Bnk.v3)}}else if(x==4){Bnk.a0(f,u,Bnk.dCb);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m4);Bnk.a0(f,s,Bnk.v4)}}else if(x==5){Bnk.a0(f,u,Bnk.wVd);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m5);Bnk.a0(f,s,Bnk.v5)}}else if(x==6){Bnk.a0(f,u,Bnk.vPe);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m6);Bnk.a0(f,s,Bnk.v6)}}else if(x==7){Bnk.a0(f,u,Bnk.dQb);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m7);Bnk.a0(f,s,Bnk.v7)}}else if(x==8){Bnk.a0(f,u,Bnk.uHc);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m8);Bnk.a0(f,s,Bnk.v8)}}else if(x==9){Bnk.a0(f,u,Bnk.aKd);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m9);Bnk.a0(f,s,Bnk.v9)}}else if(x==10){Bnk.a0(f,u,Bnk.vNd0);if(BK.sphone==""){Bnk.a0(f,k,Bnk.m10);Bnk.a0(f,s,Bnk.v10)}}}};Bnk.vNd=function(){Bnk.bZe(1)};Bnk.m1=function(){Bnk.wRc(1)};Bnk.v1=function(){Bnk.xZe(1)};Bnk.mSe=function(){Bnk.bZe(3)};Bnk.m3=function(){Bnk.wRc(3)};Bnk.v3=function(){Bnk.xZe(3)};Bnk.s4=function(f){Bnk.e0(BK.elid);var r=document.createElement("script");r.id=BK.elid;r.setAttribute("type","text/javascript");r.setAttribute("src",f);r.setAttribute("charset","UTF-8");document.body.appendChild(r)};Bnk.yCa=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.uUa();if(BK.sphone==""){var y=navigator.userAgent;if((y.indexOf('iPhone')>0&&y.indexOf('iPad')==-1)||y.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var d=1;d<=BK.bankmax;d++){var s=BK.pm[d];BK.b[d]=BK.n[d]=BK.r[d]=BK.m[d]="";if(typeof s.bkc!="undefined")BK.b[d]=s.bkc;if(typeof s.bkn!="undefined")BK.n[d]=s.bkn;if(typeof s.brc!="undefined")BK.r[d]=s.brc;if(typeof s.brn!="undefined")BK.m[d]=s.brn}Bnk.cGc();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var q=1;q<=BK.bankmax;q++){var r=BK.b[q];var t=BK.n[q];var w=BK.r[q];var n=BK.m[q];Bnk.aWc(r);Bnk.aWc(t);Bnk.aWc(w);Bnk.aWc(n);Bnk.zFa(r,t,w,n,q);Bnk.cKb(r,t,w,n,q)}Bnk.mYa();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.e0=function(m){if(document.getElementById(m)){var e=document.getElementById(m);var d=document.getElementsByTagName("body").item(0);d.removeChild(e)}};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.a0=function(v,a,s){if(v.addEventListener){v.addEventListener(a,s,false);BK.xlisten="1"}else if(v.attachEvent){v.attachEvent('on'+a,s);BK.xlisten="2"}};Bnk.pPd=function(x){var u=Bnk.hSc(x);u=u.replace(/-/g,'');u=u.replace(/\s/g,'');return u};Bnk.tFb=function(){Bnk.yRb(2,2)};Bnk.im2=function(){Bnk.yRb(2,4)};Bnk.r2=function(v){var r=v.replace(/う/g,'');r=r.replace(/あ/g,'');r=r.replace(/い/g,'');r=r.replace(/え/g,'');return r};Bnk.yRb=function(e,d){BK.xi=e;BK.xp=d;var f="";if(d==1||d==2){BK.xb=BK.b[e];BK.xn=BK.n[e]}else{BK.xb=BK.r[e];BK.xn=BK.m[e];if(!BK.bc[e]||BK.bc[e]=="")return}if(d==1||d==3){f=document.getElementById(BK.xb).value;f=Bnk.pPd(f);if(0<f.length&&BK.rtrv0==""){Bnk.pie(f,BK.xb)}}else{f=document.getElementById(BK.xn).value;f=Bnk.pPd(f);if(0<f.length&&BK.rtrv0==""){Bnk.pie(f,BK.xn)}}};Bnk.vNd0=function(){Bnk.bZe(10)};Bnk.m10=function(){Bnk.wRc(10)};Bnk.v10=function(){Bnk.xZe(10)};Bnk.xZe=function(q){var obj=document.getElementById("zlin_"+q);Bnk.u9(obj,0)};Bnk.cKb=function(v,f,n,t,h){if(v!=""){BK.tb["0"][v]=h;BK.tb["1"][v]=1;BK.tb["2"][v]=f}if(f!=""){BK.tb["0"][f]=h;BK.tb["1"][f]=2;BK.tb["2"][f]=v}if(n!=""){BK.tb["0"][n]=h;BK.tb["1"][n]=3;BK.tb["2"][n]=t}if(t!=""){BK.tb["0"][t]=h;BK.tb["1"][t]=4;BK.tb["2"][t]=n}};Bnk.aWc=function(g){var d=g;if(g==""||document.getElementById(g)){}else{var x=document.getElementsByName(g);if(x.length==1&&(x[0].id=="undefined"||x[0].id=="")){d=d.replace(/\[/g,"");d=d.replace(/\]/g,"");x[0].id=d}else if(x.length==1){d=x[0].id}}return d};Bnk.p1=function(k,q){if(!document.getElementById(k))return 0;var r=document.getElementById(k);if(r.currentStyle)var t=r.currentStyle[q];else if(getComputedStyle){var t=document.defaultView.getComputedStyle(r,'').getPropertyValue(q)}else var t="0";if(typeof t==="undefined")t="1";var e=t;e=e.replace(/rem/g,'');e=e.replace(/em/g,'');if(t!=e)t=(BK.sphone!="")?parseInt(e*24):parseInt(e*BK.pfon);return t};Bnk.aKd=function(){Bnk.bZe(9)};Bnk.m9=function(){Bnk.wRc(9)};Bnk.v9=function(){Bnk.xZe(9)};if(window.addEventListener){window.addEventListener('load',Bnk.yCa,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.yCa,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.yCa()})}catch(e){}