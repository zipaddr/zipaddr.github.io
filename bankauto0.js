function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver1.07 )
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
this.ovr="#00bbff"; // deepskyblue
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "10";     // 拡張用(selectc)
this.left=22;       // offsetLeft、ガイダンス画面表示位置の補正
this.top= 18;       // offsetTop
this.pfon="12";     // font-size
this.phig="1.4";    // height
this.rtrv="0";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
this.clear="_clear";
/*	<-↑ 以上が変更可能です-> */

this.ver="1";
this.rev=".07";
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
Bnk.vHc=function(){Bnk.pYa(3,2)};Bnk.im3=function(){Bnk.pYa(3,4)};Bnk.aDa=function(){var d="0";var u=BK.sv;var e=location.protocol=="https:"?BK.uls[u]:BK.ul[u];e=Bnk.r2(unescape(e));var c=location.protocol+'/'+'/'+e+"/js/bankauto_0.php?v="+d;if(BK.apad!="")c+="&m="+BK.apad;Bnk.s4(c)};Bnk.rZd=function(){Bnk.hNc(1)};Bnk.sHc=function(){Bnk.hNc(4)};Bnk.uAb=function(){Bnk.hNc(7)};Bnk.gTa=function(){Bnk.hNc(2)};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.aRa=function(){Bnk.hNc(6)};Bnk.tXe=function(){Bnk.hNc(3)};Bnk.s4=function(u){Bnk.e0(BK.elid);var c=document.createElement("script");c.id=BK.elid;c.setAttribute("type","text/javascript");c.setAttribute("src",u);c.setAttribute("charset","UTF-8");document.body.appendChild(c)};Bnk.hNc=function(r){Bnk.anp(BK.at[r])};Bnk.bSa=function(){Bnk.pYa(3,1)};Bnk.ir3=function(){Bnk.pYa(3,3)};Bnk.a0=function(b,z,f){if(b.addEventListener){b.addEventListener(z,f,false);BK.xlisten="1"}else if(b.attachEvent){b.attachEvent('on'+z,f);BK.xlisten="2"}};Bnk.zNb=function(){Bnk.hNc(9)};Bnk.kNc=function(h){var c=Bnk.mPa(h);c=c.replace(/-/g,'');c=c.replace(/\s/g,'');return c};Bnk.r2=function(b){var s=b.replace(/う/g,'');s=s.replace(/あ/g,'');s=s.replace(/い/g,'');s=s.replace(/え/g,'');return s};Bnk.qBc=function(){var g="bankauto_param";if(document.getElementById(g)){var q=document.getElementById(g).value;var b=q.split(",");for(var k=0;k<b.length;k++){var a=b[k].replace(/(^\s+)|(\s+$)/g,"");var t=a.split("=");if(t.length==2){var m=t[0];var n=t[1];if(m=="bkc")BK.b[1]=n;else if(m=="bkn")BK.n[1]=n;else if(m=="brc")BK.r[1]=n;else if(m=="brn")BK.m[1]=n;else if(m=="bkc2")BK.b[2]=n;else if(m=="bkn2")BK.n[2]=n;else if(m=="brc2")BK.r[2]=n;else if(m=="brn2")BK.m[2]=n;else if(m=="bkc3")BK.b[3]=n;else if(m=="bkn3")BK.n[3]=n;else if(m=="brc3")BK.r[3]=n;else if(m=="brn3")BK.m[3]=n;else if(m=="sel")BK.sel=n;else if(m=="left")BK.left=n;else if(m=="top")BK.top=n;else if(m=="pfon")BK.pfon=n;else if(m=="phig")BK.phig=n;else if(m=="rtrv")BK.rtrv=n;else if(m=="rtrv0")BK.rtrv0=n;else if(m=="bankmax")BK.bankmax=n}}}};Bnk.gTd=function(){Bnk.hNc(8)};Bnk.wNd=function(){Bnk.pYa(1,2)};Bnk.im1=function(){Bnk.pYa(1,4)};Bnk.dVc=function(k){var b=k;if(k==""||document.getElementById(k)){}else{var h=document.getElementsByName(k);if(h.length==1&&(h[0].id=="undefined"||h[0].id=="")){b=b.replace(/\[/g,"");b=b.replace(/\]/g,"");h[0].id=b}else if(h.length==1){b=h[0].id}}return b};Bnk.gVa=function(){Bnk.pYa(2,1)};Bnk.ir2=function(){Bnk.pYa(2,3)};Bnk.mPa=function(x){var m="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var a="0123456789-----";var b="";for(var d=0;d<x.length;d++){var f=x.charAt(d);var y=m.indexOf(f,0);if(y>=0)f=a.charAt(y);b+=f}return b};Bnk.e0=function(h){if(document.getElementById(h)){var v=document.getElementById(h);var z=document.getElementsByTagName("body").item(0);z.removeChild(v)}};Bnk.hXc=function(h,u,b,q,e){var r='keyup';var n="";if(h!=""&&document.getElementById(h)){n=document.getElementById(h);if(e==1){Bnk.a0(n,r,Bnk.bHa)}else if(e==2){Bnk.a0(n,r,Bnk.gVa)}else if(e==3){Bnk.a0(n,r,Bnk.bSa)}}if(u!=""&&document.getElementById(u)){n=document.getElementById(u);if(e==1){Bnk.a0(n,r,Bnk.wNd)}else if(e==2){Bnk.a0(n,r,Bnk.vAb)}else if(e==3){Bnk.a0(n,r,Bnk.vHc)}}if(b!=""&&document.getElementById(b)){n=document.getElementById(b);if(e==1){Bnk.a0(n,r,Bnk.ir1)}else if(e==2){Bnk.a0(n,r,Bnk.ir2)}else if(e==3){Bnk.a0(n,r,Bnk.ir3)}}if(q!=""&&document.getElementById(q)){n=document.getElementById(q);if(e==1){Bnk.a0(n,r,Bnk.im1)}else if(e==2){Bnk.a0(n,r,Bnk.im2)}else if(e==3){Bnk.a0(n,r,Bnk.im3)}}};Bnk.uYa=function(){Bnk.hNc(5)};Bnk.uYd=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.zEe();if(BK.sphone==""){var e=navigator.userAgent;if((e.indexOf('iPhone')>0&&e.indexOf('iPad')==-1)||e.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var v=1;v<=BK.bankmax;v++){var r=BK.pm[v];BK.b[v]=BK.n[v]=BK.r[v]=BK.m[v]="";if(typeof r.bkc!="undefined")BK.b[v]=r.bkc;if(typeof r.bkn!="undefined")BK.n[v]=r.bkn;if(typeof r.brc!="undefined")BK.r[v]=r.brc;if(typeof r.brn!="undefined")BK.m[v]=r.brn}Bnk.qBc();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var w=1;w<=BK.bankmax;w++){var n=BK.b[w];var a=BK.n[w];var h=BK.r[w];var x=BK.m[w];Bnk.dVc(n);Bnk.dVc(a);Bnk.dVc(h);Bnk.dVc(x);Bnk.hXc(n,a,h,x,w);Bnk.qEa(n,a,h,x,w)}Bnk.aDa();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.l2=function(c,s){if(document.getElementById(c)){var u='click';var q=document.getElementById(c);if(s==1){Bnk.a0(q,u,Bnk.rZd)}else if(s==2){Bnk.a0(q,u,Bnk.gTa)}else if(s==3){Bnk.a0(q,u,Bnk.tXe)}else if(s==4){Bnk.a0(q,u,Bnk.sHc)}else if(s==5){Bnk.a0(q,u,Bnk.uYa)}else if(s==6){Bnk.a0(q,u,Bnk.aRa)}else if(s==7){Bnk.a0(q,u,Bnk.uAb)}else if(s==8){Bnk.a0(q,u,Bnk.gTd)}else if(s==9){Bnk.a0(q,u,Bnk.zNb)}else if(s==10){Bnk.a0(q,u,Bnk.rZd0)}}};Bnk.bHa=function(){Bnk.pYa(1,1)};Bnk.ir1=function(){Bnk.pYa(1,3)};Bnk.p1=function(t,v){if(!document.getElementById(t))return 0;var u=document.getElementById(t);if(u.currentStyle)var y=u.currentStyle[v];else if(getComputedStyle){var y=document.defaultView.getComputedStyle(u,'').getPropertyValue(v)}else var y="0";if(typeof y==="undefined")y="1";var f=y;f=f.replace(/rem/g,'');f=f.replace(/em/g,'');if(y!=f)y=(BK.sphone!="")?parseInt(f*24):parseInt(f*BK.pfon);return y};Bnk.pYa=function(u,s){BK.xi=u;BK.xp=s;var r="";if(s==1||s==2){BK.xb=BK.b[u];BK.xn=BK.n[u]}else{BK.xb=BK.r[u];BK.xn=BK.m[u];if(!BK.bc[u]||BK.bc[u]=="")return}if(s==1||s==3){r=document.getElementById(BK.xb).value;r=Bnk.kNc(r);if(0<r.length&&BK.rtrv0==""){Bnk.pie(r,BK.xb)}}else{r=document.getElementById(BK.xn).value;r=Bnk.kNc(r);if(0<r.length&&BK.rtrv0==""){Bnk.pie(r,BK.xn)}}};Bnk.zEe=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.vAb=function(){Bnk.pYa(2,2)};Bnk.im2=function(){Bnk.pYa(2,4)};Bnk.qEa=function(p,t,d,r,y){if(p!=""){BK.tb["0"][p]=y;BK.tb["1"][p]=1;BK.tb["2"][p]=t}if(t!=""){BK.tb["0"][t]=y;BK.tb["1"][t]=2;BK.tb["2"][t]=p}if(d!=""){BK.tb["0"][d]=y;BK.tb["1"][d]=3;BK.tb["2"][d]=r}if(r!=""){BK.tb["0"][r]=y;BK.tb["1"][r]=4;BK.tb["2"][r]=d}};Bnk.rZd0=function(){Bnk.hNc(10)};if(window.addEventListener){window.addEventListener('load',Bnk.uYd,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.uYd,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.uYd()})}catch(e){}