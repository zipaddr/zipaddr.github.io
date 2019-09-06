function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver2.12 )
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
this.rev=".12";
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
Bnk.wYc=function(){Bnk.yAd(1,1)};Bnk.ir1=function(){Bnk.yAd(1,3)};Bnk.nYd=function(){Bnk.bRb(1)};Bnk.m1=function(){Bnk.aZb(1)};Bnk.v1=function(){Bnk.tYd(1)};Bnk.l2=function(h,r){if(document.getElementById(h)){var u='click';var a='mouseover';var z='mouseout';var n=document.getElementById(h);if(r==1){Bnk.a0(n,u,Bnk.nYd);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m1);Bnk.a0(n,z,Bnk.v1)}}else if(r==2){Bnk.a0(n,u,Bnk.zTa);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m2);Bnk.a0(n,z,Bnk.v2)}}else if(r==3){Bnk.a0(n,u,Bnk.yEe);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m3);Bnk.a0(n,z,Bnk.v3)}}else if(r==4){Bnk.a0(n,u,Bnk.aAe);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m4);Bnk.a0(n,z,Bnk.v4)}}else if(r==5){Bnk.a0(n,u,Bnk.hWc);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m5);Bnk.a0(n,z,Bnk.v5)}}else if(r==6){Bnk.a0(n,u,Bnk.kSa);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m6);Bnk.a0(n,z,Bnk.v6)}}else if(r==7){Bnk.a0(n,u,Bnk.qFc);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m7);Bnk.a0(n,z,Bnk.v7)}}else if(r==8){Bnk.a0(n,u,Bnk.aZc);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m8);Bnk.a0(n,z,Bnk.v8)}}else if(r==9){Bnk.a0(n,u,Bnk.fVa);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m9);Bnk.a0(n,z,Bnk.v9)}}else if(r==10){Bnk.a0(n,u,Bnk.nYd0);if(BK.sphone==""){Bnk.a0(n,a,Bnk.m10);Bnk.a0(n,z,Bnk.v10)}}}};Bnk.bRb=function(q){Bnk.anp(BK.at[q])};Bnk.uVa=function(h){var x=h;if(h==""||document.getElementById(h)){}else{var p=document.getElementsByName(h);if(p.length==1&&(p[0].id=="undefined"||p[0].id=="")){x=x.replace(/\[/g,"");x=x.replace(/\]/g,"");p[0].id=x}else if(p.length==1){x=p[0].id}}return x};Bnk.yEe=function(){Bnk.bRb(3)};Bnk.m3=function(){Bnk.aZb(3)};Bnk.v3=function(){Bnk.tYd(3)};Bnk.qFc=function(){Bnk.bRb(7)};Bnk.m7=function(){Bnk.aZb(7)};Bnk.v7=function(){Bnk.tYd(7)};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.aAe=function(){Bnk.bRb(4)};Bnk.m4=function(){Bnk.aZb(4)};Bnk.v4=function(){Bnk.tYd(4)};Bnk.eNe=function(k){var z="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var b="0123456789-----";var w="";for(var h=0;h<k.length;h++){var q=k.charAt(h);var g=z.indexOf(q,0);if(g>=0)q=b.charAt(g);w+=q}return w};Bnk.rVd=function(){Bnk.yAd(3,1)};Bnk.ir3=function(){Bnk.yAd(3,3)};Bnk.au=function(w){var f="https:";var y=BK.uls[w];if(location.protocol==f||BK.ul[w]==""){}else{var f="http:";var y=BK.ul[w]}y=Bnk.r2(unescape(y));y=f+'/'+'/'+y;return y};Bnk.qRe=function(){Bnk.yAd(2,2)};Bnk.im2=function(){Bnk.yAd(2,4)};Bnk.uSc=function(){var n="bankauto_param";if(document.getElementById(n)){var r=document.getElementById(n).value;var c=r.split(",");for(var x=0;x<c.length;x++){var u=c[x].replace(/(^\s+)|(\s+$)/g,"");var y=u.split("=");if(y.length==2){var w=y[0];var f=y[1];if(w=="bkc")BK.b[1]=f;else if(w=="bkn")BK.n[1]=f;else if(w=="brc")BK.r[1]=f;else if(w=="brn")BK.m[1]=f;else if(w=="bkc2")BK.b[2]=f;else if(w=="bkn2")BK.n[2]=f;else if(w=="brc2")BK.r[2]=f;else if(w=="brn2")BK.m[2]=f;else if(w=="bkc3")BK.b[3]=f;else if(w=="bkn3")BK.n[3]=f;else if(w=="brc3")BK.r[3]=f;else if(w=="brn3")BK.m[3]=f;else if(w=="sel")BK.sel=f;else if(w=="left")BK.left=f;else if(w=="top")BK.top=f;else if(w=="pfon")BK.pfon=f;else if(w=="phig")BK.phig=f;else if(w=="rtrv")BK.rtrv=f;else if(w=="rtrv0")BK.rtrv0=f;else if(w=="bankmax")BK.bankmax=f}}}};Bnk.yAd=function(k,x){BK.xi=k;BK.xp=x;var y="";if(x==1||x==2){BK.xb=BK.b[k];BK.xn=BK.n[k]}else{BK.xb=BK.r[k];BK.xn=BK.m[k];if(!BK.bc[k]||BK.bc[k]=="")return}if(x==1||x==3){y=document.getElementById(BK.xb).value;y=Bnk.gNe(y);if(0<y.length&&BK.rtrv0==""){Bnk.pie(y,BK.xb)}}else{y=document.getElementById(BK.xn).value;y=Bnk.gNe(y);if(0<y.length&&BK.rtrv0==""){Bnk.pie(y,BK.xn)}}};Bnk.gNe=function(c){var d=Bnk.eNe(c);d=d.replace(/-/g,'');d=d.replace(/\s/g,'');return d};Bnk.s4=function(t){if(BK.debug=="T")alert(t);Bnk.e0(BK.elid);var s=document.createElement("script");s.id=BK.elid;s.setAttribute("type","text/javascript");s.setAttribute("src",t);s.setAttribute("charset","UTF-8");document.body.appendChild(s)};Bnk.qBc=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.eTe();if(BK.sphone==""){var t=navigator.userAgent;if((t.indexOf('iPhone')>0&&t.indexOf('iPad')==-1)||t.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var k=1;k<=BK.bankmax;k++){var y=BK.pm[k];BK.b[k]=(typeof y.bkc!="undefined")?y.bkc:"";BK.n[k]=(typeof y.bkn!="undefined")?y.bkn:"";BK.r[k]=(typeof y.brc!="undefined")?y.brc:"";BK.m[k]=(typeof y.brn!="undefined")?y.brn:""}Bnk.uSc();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var h=1;h<=BK.bankmax;h++){var x=BK.b[h];var d=BK.n[h];var e=BK.r[h];var b=BK.m[h];Bnk.uVa(x);Bnk.uVa(d);Bnk.uVa(e);Bnk.uVa(b);Bnk.hMb(x,d,e,b,h);Bnk.gKa(x,d,e,b,h)}Bnk.zUe();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.nYd0=function(){Bnk.bRb(10)};Bnk.m10=function(){Bnk.aZb(10)};Bnk.v10=function(){Bnk.tYd(10)};Bnk.aZb=function(n){var obj=document.getElementById("zlin_"+n);Bnk.u9(obj,1)};Bnk.r2=function(q){var k=q.replace(/う/g,'');k=k.replace(/あ/g,'');k=k.replace(/い/g,'');k=k.replace(/え/g,'');return k};Bnk.p1=function(y,p){if(!document.getElementById(y))return 0;var w=document.getElementById(y);if(w.currentStyle)var q=w.currentStyle[p];else if(getComputedStyle){var q=document.defaultView.getComputedStyle(w,'').getPropertyValue(p)}else var q="0";if(typeof q==="undefined")q="1";var h=q;h=h.replace(/rem/g,'');h=h.replace(/em/g,'');if(q!=h)q=(BK.sphone!="")?parseInt(h*24):parseInt(h*BK.pfon);return q};Bnk.kSa=function(){Bnk.bRb(6)};Bnk.m6=function(){Bnk.aZb(6)};Bnk.v6=function(){Bnk.tYd(6)};Bnk.zTa=function(){Bnk.bRb(2)};Bnk.m2=function(){Bnk.aZb(2)};Bnk.v2=function(){Bnk.tYd(2)};Bnk.hMb=function(f,q,x,t,y){var c='keyup';var c2='compositionend';var k="";if(f!=""&&document.getElementById(f)){k=document.getElementById(f);if(y==1){Bnk.a0(k,c,Bnk.wYc);Bnk.a0(k,c2,Bnk.wYc)}else if(y==2){Bnk.a0(k,c,Bnk.nGa);Bnk.a0(k,c2,Bnk.nGa)}else if(y==3){Bnk.a0(k,c,Bnk.rVd);Bnk.a0(k,c2,Bnk.rVd)}}if(q!=""&&document.getElementById(q)){k=document.getElementById(q);if(y==1){Bnk.a0(k,c,Bnk.aYa);Bnk.a0(k,c2,Bnk.aYa)}else if(y==2){Bnk.a0(k,c,Bnk.qRe);Bnk.a0(k,c2,Bnk.qRe)}else if(y==3){Bnk.a0(k,c,Bnk.sTe);Bnk.a0(k,c2,Bnk.sTe)}}if(x!=""&&document.getElementById(x)){k=document.getElementById(x);if(y==1){Bnk.a0(k,c,Bnk.ir1);Bnk.a0(k,c2,Bnk.ir1)}else if(y==2){Bnk.a0(k,c,Bnk.ir2);Bnk.a0(k,c2,Bnk.ir2)}else if(y==3){Bnk.a0(k,c,Bnk.ir3);Bnk.a0(k,c2,Bnk.ir3)}}if(t!=""&&document.getElementById(t)){k=document.getElementById(t);if(y==1){Bnk.a0(k,c,Bnk.im1);Bnk.a0(k,c2,Bnk.im1)}else if(y==2){Bnk.a0(k,c,Bnk.im2);Bnk.a0(k,c2,Bnk.im2)}else if(y==3){Bnk.a0(k,c,Bnk.im3);Bnk.a0(k,c2,Bnk.im3)}}};Bnk.tYd=function(n){var obj=document.getElementById("zlin_"+n);Bnk.u9(obj,0)};Bnk.aZc=function(){Bnk.bRb(8)};Bnk.m8=function(){Bnk.aZb(8)};Bnk.v8=function(){Bnk.tYd(8)};Bnk.sTe=function(){Bnk.yAd(3,2)};Bnk.im3=function(){Bnk.yAd(3,4)};Bnk.fVa=function(){Bnk.bRb(9)};Bnk.m9=function(){Bnk.aZb(9)};Bnk.v9=function(){Bnk.tYd(9)};Bnk.e0=function(p){if(document.getElementById(p)){var f=document.getElementById(p);var y=document.getElementsByTagName("body").item(0);y.removeChild(f)}};Bnk.eTe=function(){BK.ul[0]="";BK.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+BK.com;BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.a0=function(b,g,k){if(b.addEventListener){b.addEventListener(g,k,false);BK.xlisten="1"}else if(b.attachEvent){b.attachEvent('on'+g,k);BK.xlisten="2"}};Bnk.hWc=function(){Bnk.bRb(5)};Bnk.m5=function(){Bnk.aZb(5)};Bnk.v5=function(){Bnk.tYd(5)};Bnk.nGa=function(){Bnk.yAd(2,1)};Bnk.ir2=function(){Bnk.yAd(2,3)};Bnk.zUe=function(){var k="212";var q=Bnk.au(BK.sv)+"/js/bankauto_x2.php?v="+k;if(typeof Basis_mole!="undefined")q+="&b=1";if(BK.apad!="")q+="&m="+BK.apad;Bnk.s4(q)};Bnk.gKa=function(u,f,b,p,h){if(u!=""){BK.tb["0"][u]=h;BK.tb["1"][u]=1;BK.tb["2"][u]=f}if(f!=""){BK.tb["0"][f]=h;BK.tb["1"][f]=2;BK.tb["2"][f]=u}if(b!=""){BK.tb["0"][b]=h;BK.tb["1"][b]=3;BK.tb["2"][b]=p}if(p!=""){BK.tb["0"][p]=h;BK.tb["1"][p]=4;BK.tb["2"][p]=b}};Bnk.aYa=function(){Bnk.yAd(1,2)};Bnk.im1=function(){Bnk.yAd(1,4)};if(window.addEventListener){window.addEventListener('load',Bnk.qBc,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.qBc,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.qBc()})}catch(e){}