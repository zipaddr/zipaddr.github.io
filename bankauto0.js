function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver2.8 )
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
this.clear="_clear";
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
Bnk.pTa=function(){Bnk.xHa(9)};Bnk.xHa=function(c){Bnk.anp(BK.at[c])};Bnk.uXe=function(d){var f=d;if(d==""||document.getElementById(d)){}else{var n=document.getElementsByName(d);if(n.length==1&&(n[0].id=="undefined"||n[0].id=="")){f=f.replace(/\[/g,"");f=f.replace(/\]/g,"");n[0].id=f}else if(n.length==1){f=n[0].id}}return f};Bnk.wRc=function(){Bnk.xHa(7)};Bnk.zBa=function(){Bnk.xHa(8)};Bnk.tFb=function(){Bnk.tTa(3,1)};Bnk.ir3=function(){Bnk.tTa(3,3)};Bnk.cBc=function(){Bnk.xHa(6)};Bnk.vCa=function(){var u="bankauto_param";if(document.getElementById(u)){var h=document.getElementById(u).value;var c=h.split(",");for(var n=0;n<c.length;n++){var a=c[n].replace(/(^\s+)|(\s+$)/g,"");var f=a.split("=");if(f.length==2){var x=f[0];var p=f[1];if(x=="bkc")BK.b[1]=p;else if(x=="bkn")BK.n[1]=p;else if(x=="brc")BK.r[1]=p;else if(x=="brn")BK.m[1]=p;else if(x=="bkc2")BK.b[2]=p;else if(x=="bkn2")BK.n[2]=p;else if(x=="brc2")BK.r[2]=p;else if(x=="brn2")BK.m[2]=p;else if(x=="bkc3")BK.b[3]=p;else if(x=="bkn3")BK.n[3]=p;else if(x=="brc3")BK.r[3]=p;else if(x=="brn3")BK.m[3]=p;else if(x=="sel")BK.sel=p;else if(x=="left")BK.left=p;else if(x=="top")BK.top=p;else if(x=="pfon")BK.pfon=p;else if(x=="phig")BK.phig=p;else if(x=="rtrv")BK.rtrv=p;else if(x=="rtrv0")BK.rtrv0=p;else if(x=="bankmax")BK.bankmax=p}}}};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.nNe=function(){Bnk.tTa(3,2)};Bnk.im3=function(){Bnk.tTa(3,4)};Bnk.dZb=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.pZe();if(BK.sphone==""){var g=navigator.userAgent;if((g.indexOf('iPhone')>0&&g.indexOf('iPad')==-1)||g.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var m=1;m<=BK.bankmax;m++){var a=BK.pm[m];BK.b[m]=BK.n[m]=BK.r[m]=BK.m[m]="";if(typeof a.bkc!="undefined")BK.b[m]=a.bkc;if(typeof a.bkn!="undefined")BK.n[m]=a.bkn;if(typeof a.brc!="undefined")BK.r[m]=a.brc;if(typeof a.brn!="undefined")BK.m[m]=a.brn}Bnk.vCa();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var b=1;b<=BK.bankmax;b++){var c=BK.b[b];var y=BK.n[b];var s=BK.r[b];var q=BK.m[b];Bnk.uXe(c);Bnk.uXe(y);Bnk.uXe(s);Bnk.uXe(q);Bnk.gUe(c,y,s,q,b);Bnk.bRe(c,y,s,q,b)}Bnk.cZb();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.r2=function(b){var s=b.replace(/う/g,'');s=s.replace(/あ/g,'');s=s.replace(/い/g,'');s=s.replace(/え/g,'');return s};Bnk.zPe=function(){Bnk.tTa(2,1)};Bnk.ir2=function(){Bnk.tTa(2,3)};Bnk.o1=function(b,y){var v=0;if(y=="")return v;if(typeof jQuery!="undefined"){var n=jQuery("#"+y).offset();v=n.top}else{while(b){v+=b.offsetTop;b=b.offsetParent}}if(document.getElementById(y)){var x=document.getElementById(y);var r=Math.floor((x.offsetHeight-18)/2)-3;if(r>=2){v+=r}}return v};Bnk.l2=function(g,h){if(document.getElementById(g)){var k='click';var r=document.getElementById(g);if(h==1){Bnk.a0(r,k,Bnk.pRb)}else if(h==2){Bnk.a0(r,k,Bnk.uGd)}else if(h==3){Bnk.a0(r,k,Bnk.sBd)}else if(h==4){Bnk.a0(r,k,Bnk.zVa)}else if(h==5){Bnk.a0(r,k,Bnk.cGe)}else if(h==6){Bnk.a0(r,k,Bnk.cBc)}else if(h==7){Bnk.a0(r,k,Bnk.wRc)}else if(h==8){Bnk.a0(r,k,Bnk.zBa)}else if(h==9){Bnk.a0(r,k,Bnk.pTa)}else if(h==10){Bnk.a0(r,k,Bnk.cZe)}}};Bnk.cMb=function(){Bnk.tTa(2,2)};Bnk.im2=function(){Bnk.tTa(2,4)};Bnk.gDb=function(n){n.style.imeMode="disabled"};Bnk.cZe=function(){Bnk.xHa(10)};Bnk.e0=function(x){if(document.getElementById(x)){var s=document.getElementById(x);var e=document.getElementsByTagName("body").item(0);e.removeChild(s)}};Bnk.pZe=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.tTa=function(e,y){BK.xi=e;BK.xp=y;var c="";if(y==1||y==2){BK.xb=BK.b[e];BK.xn=BK.n[e]}else{BK.xb=BK.r[e];BK.xn=BK.m[e];if(!BK.bc[e]||BK.bc[e]=="")return}if(y==1||y==3){c=document.getElementById(BK.xb).value;c=Bnk.zZc(c);if(0<c.length&&BK.rtrv0==""){Bnk.pie(c,BK.xb)}}else{c=document.getElementById(BK.xn).value;c=Bnk.zZc(c);if(0<c.length&&BK.rtrv0==""){Bnk.pie(c,BK.xn)}}};Bnk.zVa=function(){Bnk.xHa(4)};Bnk.a0=function(t,e,q){if(t.addEventListener){t.addEventListener(e,q,false);BK.xlisten="1"}else if(t.attachEvent){t.attachEvent('on'+e,q);BK.xlisten="2"}};Bnk.pRb=function(){Bnk.xHa(1)};Bnk.sBd=function(){Bnk.xHa(3)};Bnk.e1=function(u,g){if(document.getElementById(u)){var s=document.getElementById(u)}else{var s=document.createElement('div');s.id=u;if(g=="")var g=document.getElementsByTagName("body").item(0);g.appendChild(s)}return s};Bnk.pFd=function(){Bnk.tTa(1,2)};Bnk.im1=function(){Bnk.tTa(1,4)};Bnk.vEb=function(){Bnk.tTa(1,1)};Bnk.ir1=function(){Bnk.tTa(1,3)};Bnk.s4=function(g){Bnk.e0(BK.elid);var z=document.createElement("script");z.id=BK.elid;z.setAttribute("type","text/javascript");z.setAttribute("src",g);z.setAttribute("charset","UTF-8");document.body.appendChild(z)};Bnk.uGd=function(){Bnk.xHa(2)};Bnk.bRe=function(h,e,a,c,s){if(h!=""){BK.tb["0"][h]=s;BK.tb["1"][h]=1;BK.tb["2"][h]=e}if(e!=""){BK.tb["0"][e]=s;BK.tb["1"][e]=2;BK.tb["2"][e]=h}if(a!=""){BK.tb["0"][a]=s;BK.tb["1"][a]=3;BK.tb["2"][a]=c}if(c!=""){BK.tb["0"][c]=s;BK.tb["1"][c]=4;BK.tb["2"][c]=a}};Bnk.gUe=function(c,a,g,k,s){var w='keyup';var p="";if(c!=""&&document.getElementById(c)){p=document.getElementById(c);if(s==1){Bnk.a0(p,w,Bnk.vEb)}else if(s==2){Bnk.a0(p,w,Bnk.zPe)}else if(s==3){Bnk.a0(p,w,Bnk.tFb)}}if(a!=""&&document.getElementById(a)){p=document.getElementById(a);if(s==1){Bnk.a0(p,w,Bnk.pFd)}else if(s==2){Bnk.a0(p,w,Bnk.cMb)}else if(s==3){Bnk.a0(p,w,Bnk.nNe)}}if(g!=""&&document.getElementById(g)){p=document.getElementById(g);if(s==1){Bnk.a0(p,w,Bnk.ir1)}else if(s==2){Bnk.a0(p,w,Bnk.ir2)}else if(s==3){Bnk.a0(p,w,Bnk.ir3)}}if(k!=""&&document.getElementById(k)){p=document.getElementById(k);if(s==1){Bnk.a0(p,w,Bnk.im1)}else if(s==2){Bnk.a0(p,w,Bnk.im2)}else if(s==3){Bnk.a0(p,w,Bnk.im3)}}};Bnk.cGe=function(){Bnk.xHa(5)};Bnk.p1=function(s,b){if(!document.getElementById(s))return 0;var u=document.getElementById(s);if(u.currentStyle)var q=u.currentStyle[b];else if(getComputedStyle){var q=document.defaultView.getComputedStyle(u,'').getPropertyValue(b)}else var q="0";if(typeof q==="undefined")q="1";var v=q;v=v.replace(/rem/g,'');v=v.replace(/em/g,'');if(q!=v)q=(BK.sphone!="")?parseInt(v*24):parseInt(v*BK.pfon);return q};Bnk.zZc=function(u){var d=Bnk.fPa(u);d=d.replace(/-/g,'');d=d.replace(/\s/g,'');return d};Bnk.cZb=function(){var b="0";var k=BK.sv;var w=location.protocol=="https:"?BK.uls[k]:BK.ul[k];w=Bnk.r2(unescape(w));var g=location.protocol+'/'+'/'+w+"/js/bankauto"+b+".php?v="+b;if(BK.apad!="")g+="&m="+BK.apad;Bnk.s4(g)};Bnk.fPa=function(t){var b="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var q="0123456789-----";var s="";for(var k=0;k<t.length;k++){var u=t.charAt(k);var n=b.indexOf(u,0);if(n>=0)u=q.charAt(n);s+=u}return s};Bnk.o0=function(k){var v=0;while(k){v+=k.offsetLeft;k=k.offsetParent}return v};if(window.addEventListener){window.addEventListener('load',Bnk.dZb,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.dZb,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.dZb()})}catch(e){}