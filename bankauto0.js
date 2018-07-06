function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver1.8 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    https://bank-auto.com/
 *	@link    https://www.pierre-soft.com/
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
this.debug="";      // 1:debug-mode
/*	<-↑ 以上が変更可能です-> */

this.ver="1";
this.rev=".8";
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
Bnk.kZc=function(){Bnk.yVc(7)};Bnk.m7=function(){Bnk.rUc(7)};Bnk.v7=function(){Bnk.fXb(7)};Bnk.au=function(v){var g="https:";var x=BK.uls[v];if(location.protocol==g||BK.ul[v]==""){}else{var g="http:";var x=BK.ul[v]}x=Bnk.r2(unescape(x));x=g+'/'+'/'+x;return x};Bnk.eDd=function(){Bnk.yVc(10)};Bnk.m10=function(){Bnk.rUc(10)};Bnk.v10=function(){Bnk.fXb(10)};Bnk.aXa=function(h,a,p,y,e){var c='keyup';var c2='compositionend';var x="";if(h!=""&&document.getElementById(h)){x=document.getElementById(h);if(e==1){Bnk.a0(x,c,Bnk.uYa);Bnk.a0(x,c2,Bnk.uYa)}else if(e==2){Bnk.a0(x,c,Bnk.zMe);Bnk.a0(x,c2,Bnk.zMe)}else if(e==3){Bnk.a0(x,c,Bnk.bXa);Bnk.a0(x,c2,Bnk.bXa)}}if(a!=""&&document.getElementById(a)){x=document.getElementById(a);if(e==1){Bnk.a0(x,c,Bnk.kMb);Bnk.a0(x,c2,Bnk.kMb)}else if(e==2){Bnk.a0(x,c,Bnk.kBb);Bnk.a0(x,c2,Bnk.kBb)}else if(e==3){Bnk.a0(x,c,Bnk.nXd);Bnk.a0(x,c2,Bnk.nXd)}}if(p!=""&&document.getElementById(p)){x=document.getElementById(p);if(e==1){Bnk.a0(x,c,Bnk.ir1);Bnk.a0(x,c2,Bnk.ir1)}else if(e==2){Bnk.a0(x,c,Bnk.ir2);Bnk.a0(x,c2,Bnk.ir2)}else if(e==3){Bnk.a0(x,c,Bnk.ir3);Bnk.a0(x,c2,Bnk.ir3)}}if(y!=""&&document.getElementById(y)){x=document.getElementById(y);if(e==1){Bnk.a0(x,c,Bnk.im1);Bnk.a0(x,c2,Bnk.im1)}else if(e==2){Bnk.a0(x,c,Bnk.im2);Bnk.a0(x,c2,Bnk.im2)}else if(e==3){Bnk.a0(x,c,Bnk.im3);Bnk.a0(x,c2,Bnk.im3)}}};Bnk.kMb=function(){Bnk.cWa(1,2)};Bnk.im1=function(){Bnk.cWa(1,4)};Bnk.yVc=function(x){Bnk.anp(BK.at[x])};Bnk.pQb=function(){Bnk.yVc(3)};Bnk.m3=function(){Bnk.rUc(3)};Bnk.v3=function(){Bnk.fXb(3)};Bnk.hVb=function(){Bnk.yVc(2)};Bnk.m2=function(){Bnk.rUc(2)};Bnk.v2=function(){Bnk.fXb(2)};Bnk.xWd=function(y,a,h,z,e){if(y!=""){BK.tb["0"][y]=e;BK.tb["1"][y]=1;BK.tb["2"][y]=a}if(a!=""){BK.tb["0"][a]=e;BK.tb["1"][a]=2;BK.tb["2"][a]=y}if(h!=""){BK.tb["0"][h]=e;BK.tb["1"][h]=3;BK.tb["2"][h]=z}if(z!=""){BK.tb["0"][z]=e;BK.tb["1"][z]=4;BK.tb["2"][z]=h}};Bnk.e0=function(c){if(document.getElementById(c)){var p=document.getElementById(c);var s=document.getElementsByTagName("body").item(0);s.removeChild(p)}};Bnk.cWa=function(t,d){BK.xi=t;BK.xp=d;var s="";if(d==1||d==2){BK.xb=BK.b[t];BK.xn=BK.n[t]}else{BK.xb=BK.r[t];BK.xn=BK.m[t];if(!BK.bc[t]||BK.bc[t]=="")return}if(d==1||d==3){s=document.getElementById(BK.xb).value;s=Bnk.uKb(s);if(0<s.length&&BK.rtrv0==""){Bnk.pie(s,BK.xb)}}else{s=document.getElementById(BK.xn).value;s=Bnk.uKb(s);if(0<s.length&&BK.rtrv0==""){Bnk.pie(s,BK.xn)}}};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.kBb=function(){Bnk.cWa(2,2)};Bnk.im2=function(){Bnk.cWa(2,4)};Bnk.fUc=function(d){var h="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var k="0123456789-----";var w="";for(var b=0;b<d.length;b++){var u=d.charAt(b);var s=h.indexOf(u,0);if(s>=0)u=k.charAt(s);w+=u}return w};Bnk.hXc=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.qMc();if(BK.sphone==""){var p=navigator.userAgent;if((p.indexOf('iPhone')>0&&p.indexOf('iPad')==-1)||p.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var w=1;w<=BK.bankmax;w++){var f=BK.pm[w];BK.b[w]=(typeof f.bkc!="undefined")?f.bkc:"";BK.n[w]=(typeof f.bkn!="undefined")?f.bkn:"";BK.r[w]=(typeof f.brc!="undefined")?f.brc:"";BK.m[w]=(typeof f.brn!="undefined")?f.brn:""}Bnk.gMd();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var s=1;s<=BK.bankmax;s++){var g=BK.b[s];var n=BK.n[s];var k=BK.r[s];var x=BK.m[s];Bnk.rSe(g);Bnk.rSe(n);Bnk.rSe(k);Bnk.rSe(x);Bnk.aXa(g,n,k,x,s);Bnk.xWd(g,n,k,x,s)}Bnk.zHb();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.rUb=function(){Bnk.yVc(9)};Bnk.m9=function(){Bnk.rUc(9)};Bnk.v9=function(){Bnk.fXb(9)};Bnk.wEc=function(){Bnk.yVc(5)};Bnk.m5=function(){Bnk.rUc(5)};Bnk.v5=function(){Bnk.fXb(5)};Bnk.rUc=function(t){var obj=document.getElementById("zlin_"+t);Bnk.u9(obj,1)};Bnk.eZd=function(){Bnk.yVc(8)};Bnk.m8=function(){Bnk.rUc(8)};Bnk.v8=function(){Bnk.fXb(8)};Bnk.kZd=function(){Bnk.yVc(1)};Bnk.m1=function(){Bnk.rUc(1)};Bnk.v1=function(){Bnk.fXb(1)};Bnk.qMc=function(){BK.ul[0]="";BK.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+BK.com;BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.zMe=function(){Bnk.cWa(2,1)};Bnk.ir2=function(){Bnk.cWa(2,3)};Bnk.a0=function(p,r,v){if(p.addEventListener){p.addEventListener(r,v,false);BK.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+r,v);BK.xlisten="2"}};Bnk.zHb=function(){var w="8";var k=Bnk.au(BK.sv)+"/js/bankauto_0.php?v="+w;if(BK.apad!="")k+="&m="+BK.apad;Bnk.s4(k)};Bnk.p1=function(q,h){if(!document.getElementById(q))return 0;var c=document.getElementById(q);if(c.currentStyle)var w=c.currentStyle[h];else if(getComputedStyle){var w=document.defaultView.getComputedStyle(c,'').getPropertyValue(h)}else var w="0";if(typeof w==="undefined")w="1";var z=w;z=z.replace(/rem/g,'');z=z.replace(/em/g,'');if(w!=z)w=(BK.sphone!="")?parseInt(z*24):parseInt(z*BK.pfon);return w};Bnk.wGc=function(){Bnk.yVc(4)};Bnk.m4=function(){Bnk.rUc(4)};Bnk.v4=function(){Bnk.fXb(4)};Bnk.gRa=function(){Bnk.yVc(6)};Bnk.m6=function(){Bnk.rUc(6)};Bnk.v6=function(){Bnk.fXb(6)};Bnk.rSe=function(y){var q=y;if(y==""||document.getElementById(y)){}else{var e=document.getElementsByName(y);if(e.length==1&&(e[0].id=="undefined"||e[0].id=="")){q=q.replace(/\[/g,"");q=q.replace(/\]/g,"");e[0].id=q}else if(e.length==1){q=e[0].id}}return q};Bnk.uKb=function(e){var x=Bnk.fUc(e);x=x.replace(/-/g,'');x=x.replace(/\s/g,'');return x};Bnk.nXd=function(){Bnk.cWa(3,2)};Bnk.im3=function(){Bnk.cWa(3,4)};Bnk.s4=function(f){if(BK.debug=="T")alert(f);Bnk.e0(BK.elid);var e=document.createElement("script");e.id=BK.elid;e.setAttribute("type","text/javascript");e.setAttribute("src",f);e.setAttribute("charset","UTF-8");document.body.appendChild(e)};Bnk.r2=function(m){var y=m.replace(/う/g,'');y=y.replace(/あ/g,'');y=y.replace(/い/g,'');y=y.replace(/え/g,'');return y};Bnk.fXb=function(b){var obj=document.getElementById("zlin_"+b);Bnk.u9(obj,0)};Bnk.l2=function(z,n){if(document.getElementById(z)){var m='click';var q='mouseover';var v='mouseout';var k=document.getElementById(z);if(n==1){Bnk.a0(k,m,Bnk.kZd);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m1);Bnk.a0(k,v,Bnk.v1)}}else if(n==2){Bnk.a0(k,m,Bnk.hVb);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m2);Bnk.a0(k,v,Bnk.v2)}}else if(n==3){Bnk.a0(k,m,Bnk.pQb);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m3);Bnk.a0(k,v,Bnk.v3)}}else if(n==4){Bnk.a0(k,m,Bnk.wGc);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m4);Bnk.a0(k,v,Bnk.v4)}}else if(n==5){Bnk.a0(k,m,Bnk.wEc);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m5);Bnk.a0(k,v,Bnk.v5)}}else if(n==6){Bnk.a0(k,m,Bnk.gRa);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m6);Bnk.a0(k,v,Bnk.v6)}}else if(n==7){Bnk.a0(k,m,Bnk.kZc);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m7);Bnk.a0(k,v,Bnk.v7)}}else if(n==8){Bnk.a0(k,m,Bnk.eZd);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m8);Bnk.a0(k,v,Bnk.v8)}}else if(n==9){Bnk.a0(k,m,Bnk.rUb);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m9);Bnk.a0(k,v,Bnk.v9)}}else if(n==10){Bnk.a0(k,m,Bnk.eDd);if(BK.sphone==""){Bnk.a0(k,q,Bnk.m10);Bnk.a0(k,v,Bnk.v10)}}}};Bnk.gMd=function(){var k="bankauto_param";if(document.getElementById(k)){var e=document.getElementById(k).value;var b=e.split(",");for(var x=0;x<b.length;x++){var z=b[x].replace(/(^\s+)|(\s+$)/g,"");var q=z.split("=");if(q.length==2){var r=q[0];var a=q[1];if(r=="bkc")BK.b[1]=a;else if(r=="bkn")BK.n[1]=a;else if(r=="brc")BK.r[1]=a;else if(r=="brn")BK.m[1]=a;else if(r=="bkc2")BK.b[2]=a;else if(r=="bkn2")BK.n[2]=a;else if(r=="brc2")BK.r[2]=a;else if(r=="brn2")BK.m[2]=a;else if(r=="bkc3")BK.b[3]=a;else if(r=="bkn3")BK.n[3]=a;else if(r=="brc3")BK.r[3]=a;else if(r=="brn3")BK.m[3]=a;else if(r=="sel")BK.sel=a;else if(r=="left")BK.left=a;else if(r=="top")BK.top=a;else if(r=="pfon")BK.pfon=a;else if(r=="phig")BK.phig=a;else if(r=="rtrv")BK.rtrv=a;else if(r=="rtrv0")BK.rtrv0=a;else if(r=="bankmax")BK.bankmax=a}}}};Bnk.uYa=function(){Bnk.cWa(1,1)};Bnk.ir1=function(){Bnk.cWa(1,3)};Bnk.bXa=function(){Bnk.cWa(3,1)};Bnk.ir3=function(){Bnk.cWa(3,3)};if(window.addEventListener){window.addEventListener('load',Bnk.hXc,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.hXc,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.hXc()})}catch(e){}