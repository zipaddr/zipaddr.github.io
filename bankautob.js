function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver2.9 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    http://bank-auto.com/
 *	@link    http://www.pierre-soft.com/
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
this.lnc="#ffffcc"; // link color
this.lgc="#333333"; // link guide
this.ovr="#00bbff"; // deepskyblue
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "10";     // 拡張用(selectc)
this.left=22;       // offsetLeft、ガイダンス画面表示位置の補正
this.top= 18;       // offsetTop
this.pfon="12";     // font-size
this.phig="1.4";    // height
this.rtrv="1";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
this.clear="_clear";
/*	<-↑ 以上が変更可能です-> */

this.ver="2";
this.rev=".9";
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
Bnk.aHb=function(){Bnk.cYe(2,1)};Bnk.ir2=function(){Bnk.cYe(2,3)};Bnk.rRb=function(f){var q=Bnk.qCe(f);q=q.replace(/-/g,'');q=q.replace(/\s/g,'');return q};Bnk.qCe=function(m){var q="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var h="0123456789-----";var r="";for(var d=0;d<m.length;d++){var t=m.charAt(d);var p=q.indexOf(t,0);if(p>=0)t=h.charAt(p);r+=t}return r};Bnk.wYc=function(){Bnk.aEc(8)};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.p1=function(a,e){if(!document.getElementById(a))return 0;var h=document.getElementById(a);if(h.currentStyle)var y=h.currentStyle[e];else if(getComputedStyle){var y=document.defaultView.getComputedStyle(h,'').getPropertyValue(e)}else var y="0";if(typeof y==="undefined")y="1";var b=y;b=b.replace(/rem/g,'');b=b.replace(/em/g,'');if(y!=b)y=(BK.sphone!="")?parseInt(b*24):parseInt(b*BK.pfon);return y};Bnk.r2=function(k){var w=k.replace(/う/g,'');w=w.replace(/あ/g,'');w=w.replace(/い/g,'');w=w.replace(/え/g,'');return w};Bnk.aEc=function(h){Bnk.anp(BK.at[h])};Bnk.aCd=function(){Bnk.aEc(6)};Bnk.l2=function(e,r){if(document.getElementById(e)){var h='click';var g=document.getElementById(e);if(r==1){Bnk.a0(g,h,Bnk.xDe)}else if(r==2){Bnk.a0(g,h,Bnk.pMd)}else if(r==3){Bnk.a0(g,h,Bnk.mAb)}else if(r==4){Bnk.a0(g,h,Bnk.wQd)}else if(r==5){Bnk.a0(g,h,Bnk.vYd)}else if(r==6){Bnk.a0(g,h,Bnk.aCd)}else if(r==7){Bnk.a0(g,h,Bnk.wTa)}else if(r==8){Bnk.a0(g,h,Bnk.wYc)}else if(r==9){Bnk.a0(g,h,Bnk.hVc)}else if(r==10){Bnk.a0(g,h,Bnk.xDe0)}}};Bnk.nCa=function(){Bnk.cYe(1,2)};Bnk.im1=function(){Bnk.cYe(1,4)};Bnk.vPe=function(){Bnk.cYe(2,2)};Bnk.im2=function(){Bnk.cYe(2,4)};Bnk.e0=function(z){if(document.getElementById(z)){var w=document.getElementById(z);var p=document.getElementsByTagName("body").item(0);p.removeChild(w)}};Bnk.rNe=function(e,w,r,n,m){var b='keyup';var a="";if(e!=""&&document.getElementById(e)){a=document.getElementById(e);if(m==1){Bnk.a0(a,b,Bnk.tAd)}else if(m==2){Bnk.a0(a,b,Bnk.aHb)}else if(m==3){Bnk.a0(a,b,Bnk.eFb)}}if(w!=""&&document.getElementById(w)){a=document.getElementById(w);if(m==1){Bnk.a0(a,b,Bnk.nCa)}else if(m==2){Bnk.a0(a,b,Bnk.vPe)}else if(m==3){Bnk.a0(a,b,Bnk.dCc)}}if(r!=""&&document.getElementById(r)){a=document.getElementById(r);if(m==1){Bnk.a0(a,b,Bnk.ir1)}else if(m==2){Bnk.a0(a,b,Bnk.ir2)}else if(m==3){Bnk.a0(a,b,Bnk.ir3)}}if(n!=""&&document.getElementById(n)){a=document.getElementById(n);if(m==1){Bnk.a0(a,b,Bnk.im1)}else if(m==2){Bnk.a0(a,b,Bnk.im2)}else if(m==3){Bnk.a0(a,b,Bnk.im3)}}};Bnk.mAb=function(){Bnk.aEc(3)};Bnk.pBc=function(x){var k=x;if(x==""||document.getElementById(x)){}else{var n=document.getElementsByName(x);if(n.length==1&&(n[0].id=="undefined"||n[0].id=="")){k=k.replace(/\[/g,"");k=k.replace(/\]/g,"");n[0].id=k}else if(n.length==1){k=n[0].id}}return k};Bnk.wTa=function(){Bnk.aEc(7)};Bnk.eFb=function(){Bnk.cYe(3,1)};Bnk.ir3=function(){Bnk.cYe(3,3)};Bnk.a0=function(n,q,e){if(n.addEventListener){n.addEventListener(q,e,false);BK.xlisten="1"}else if(n.attachEvent){n.attachEvent('on'+q,e);BK.xlisten="2"}};Bnk.dBb=function(z,q,m,h,p){if(z!=""){BK.tb["0"][z]=p;BK.tb["1"][z]=1;BK.tb["2"][z]=q}if(q!=""){BK.tb["0"][q]=p;BK.tb["1"][q]=2;BK.tb["2"][q]=z}if(m!=""){BK.tb["0"][m]=p;BK.tb["1"][m]=3;BK.tb["2"][m]=h}if(h!=""){BK.tb["0"][h]=p;BK.tb["1"][h]=4;BK.tb["2"][h]=m}};Bnk.uBc=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.dCc=function(){Bnk.cYe(3,2)};Bnk.im3=function(){Bnk.cYe(3,4)};Bnk.wQd=function(){Bnk.aEc(4)};Bnk.xKb=function(){var y="bankauto_param";if(document.getElementById(y)){var e=document.getElementById(y).value;var q=e.split(",");for(var g=0;g<q.length;g++){var a=q[g].replace(/(^\s+)|(\s+$)/g,"");var p=a.split("=");if(p.length==2){var s=p[0];var v=p[1];if(s=="bkc")BK.b[1]=v;else if(s=="bkn")BK.n[1]=v;else if(s=="brc")BK.r[1]=v;else if(s=="brn")BK.m[1]=v;else if(s=="bkc2")BK.b[2]=v;else if(s=="bkn2")BK.n[2]=v;else if(s=="brc2")BK.r[2]=v;else if(s=="brn2")BK.m[2]=v;else if(s=="bkc3")BK.b[3]=v;else if(s=="bkn3")BK.n[3]=v;else if(s=="brc3")BK.r[3]=v;else if(s=="brn3")BK.m[3]=v;else if(s=="sel")BK.sel=v;else if(s=="left")BK.left=v;else if(s=="top")BK.top=v;else if(s=="pfon")BK.pfon=v;else if(s=="phig")BK.phig=v;else if(s=="rtrv")BK.rtrv=v;else if(s=="rtrv0")BK.rtrv0=v;else if(s=="bankmax")BK.bankmax=v}}}};Bnk.tAd=function(){Bnk.cYe(1,1)};Bnk.ir1=function(){Bnk.cYe(1,3)};Bnk.pMd=function(){Bnk.aEc(2)};Bnk.vYd=function(){Bnk.aEc(5)};Bnk.hVc=function(){Bnk.aEc(9)};Bnk.pZd=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.uBc();if(BK.sphone==""){var r=navigator.userAgent;if((r.indexOf('iPhone')>0&&r.indexOf('iPad')==-1)||r.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var d=1;d<=BK.bankmax;d++){var g=BK.pm[d];BK.b[d]=BK.n[d]=BK.r[d]=BK.m[d]="";if(typeof g.bkc!="undefined")BK.b[d]=g.bkc;if(typeof g.bkn!="undefined")BK.n[d]=g.bkn;if(typeof g.brc!="undefined")BK.r[d]=g.brc;if(typeof g.brn!="undefined")BK.m[d]=g.brn}Bnk.xKb();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var w=1;w<=BK.bankmax;w++){var a=BK.b[w];var y=BK.n[w];var n=BK.r[w];var z=BK.m[w];Bnk.pBc(a);Bnk.pBc(y);Bnk.pBc(n);Bnk.pBc(z);Bnk.rNe(a,y,n,z,w);Bnk.dBb(a,y,n,z,w)}Bnk.cYc();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.xDe=function(){Bnk.aEc(1)};Bnk.cYe=function(h,k){BK.xi=h;BK.xp=k;var v="";if(k==1||k==2){BK.xb=BK.b[h];BK.xn=BK.n[h]}else{BK.xb=BK.r[h];BK.xn=BK.m[h];if(!BK.bc[h]||BK.bc[h]=="")return}if(k==1||k==3){v=document.getElementById(BK.xb).value;v=Bnk.rRb(v);if(0<v.length&&BK.rtrv0==""){Bnk.pie(v,BK.xb)}}else{v=document.getElementById(BK.xn).value;v=Bnk.rRb(v);if(0<v.length&&BK.rtrv0==""){Bnk.pie(v,BK.xn)}}};Bnk.xDe0=function(){Bnk.aEc(10)};Bnk.cYc=function(){var v="29";var z=BK.sv;var a=location.protocol=="https:"?BK.uls[z]:BK.ul[z];a=Bnk.r2(unescape(a));var p=location.protocol+'/'+'/'+a+"/js/bankauto_x.php?v="+v;if(BK.apad!="")p+="&m="+BK.apad;Bnk.s4(p)};Bnk.s4=function(m){Bnk.e0(BK.elid);var c=document.createElement("script");c.id=BK.elid;c.setAttribute("type","text/javascript");c.setAttribute("src",m);c.setAttribute("charset","UTF-8");document.body.appendChild(c)};if(window.addEventListener){window.addEventListener('load',Bnk.pZd,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.pZd,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.pZd()})}catch(e){}