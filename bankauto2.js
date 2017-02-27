function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver2.7 )
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
this.lnc="#ffffcc"; // link color
this.lgc="#333333"; // link guide
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "7";      // 拡張用(selectc)
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
Bnk.qKe=function(){Bnk.uQd(2,1)};Bnk.ir2=function(){Bnk.uQd(2,3)};Bnk.eKc=function(){Bnk.uQd(3,2)};Bnk.im3=function(){Bnk.uQd(3,4)};Bnk.a0=function(d,g,e){if(d.addEventListener){d.addEventListener(g,e,false);BK.xlisten="1"}else if(d.attachEvent){d.attachEvent('on'+g,e);BK.xlisten="2"}};Bnk.fUb=function(){var g="bankauto_param";if(document.getElementById(g)){var t=document.getElementById(g).value;var a=t.split(",");for(var b=0;b<a.length;b++){var h=a[b].replace(/(^\s+)|(\s+$)/g,"");var r=h.split("=");if(r.length==2){var u=r[0];var p=r[1];if(u=="bkc")BK.b[1]=p;else if(u=="bkn")BK.n[1]=p;else if(u=="brc")BK.r[1]=p;else if(u=="brn")BK.m[1]=p;else if(u=="bkc2")BK.b[2]=p;else if(u=="bkn2")BK.n[2]=p;else if(u=="brc2")BK.r[2]=p;else if(u=="brn2")BK.m[2]=p;else if(u=="bkc3")BK.b[3]=p;else if(u=="bkn3")BK.n[3]=p;else if(u=="brc3")BK.r[3]=p;else if(u=="brn3")BK.m[3]=p;else if(u=="sel")BK.sel=p;else if(u=="left")BK.left=p;else if(u=="top")BK.top=p;else if(u=="pfon")BK.pfon=p;else if(u=="phig")BK.phig=p;else if(u=="rtrv")BK.rtrv=p;else if(u=="rtrv0")BK.rtrv0=p;else if(u=="bankmax")BK.bankmax=p}}}};Bnk.uVb=function(d,r,k,t,e){var n='keyup';var s="";if(d!=""&&document.getElementById(d)){s=document.getElementById(d);if(e==1){Bnk.a0(s,n,Bnk.wNe)}else if(e==2){Bnk.a0(s,n,Bnk.qKe)}else if(e==3){Bnk.a0(s,n,Bnk.yGa)}}if(r!=""&&document.getElementById(r)){s=document.getElementById(r);if(e==1){Bnk.a0(s,n,Bnk.mQa)}else if(e==2){Bnk.a0(s,n,Bnk.rVa)}else if(e==3){Bnk.a0(s,n,Bnk.eKc)}}if(k!=""&&document.getElementById(k)){s=document.getElementById(k);if(e==1){Bnk.a0(s,n,Bnk.ir1)}else if(e==2){Bnk.a0(s,n,Bnk.ir2)}else if(e==3){Bnk.a0(s,n,Bnk.ir3)}}if(t!=""&&document.getElementById(t)){s=document.getElementById(t);if(e==1){Bnk.a0(s,n,Bnk.im1)}else if(e==2){Bnk.a0(s,n,Bnk.im2)}else if(e==3){Bnk.a0(s,n,Bnk.im3)}}};Bnk.hWb=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.zTd();if(BK.sphone==""){var c=navigator.userAgent;if((c.indexOf('iPhone')>0&&c.indexOf('iPad')==-1)||c.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var d=1;d<=BK.bankmax;d++){var g=BK.pm[d];BK.b[d]=BK.n[d]=BK.r[d]=BK.m[d]="";if(typeof g.bkc!="undefined")BK.b[d]=g.bkc;if(typeof g.bkn!="undefined")BK.n[d]=g.bkn;if(typeof g.brc!="undefined")BK.r[d]=g.brc;if(typeof g.brn!="undefined")BK.m[d]=g.brn}Bnk.fUb();for(var w=1;w<=BK.bankmax;w++){var a=BK.b[w];var h=BK.n[w];var y=BK.r[w];var v=BK.m[w];Bnk.kMd(a);Bnk.kMd(h);Bnk.kMd(y);Bnk.kMd(v);Bnk.uVb(a,h,y,v,w)}Bnk.qAc();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.uVbime=function(c){c.style.imeMode="disabled"};Bnk.kXa=function(){Bnk.rBd(6)};Bnk.rVa=function(){Bnk.uQd(2,2)};Bnk.im2=function(){Bnk.uQd(2,4)};Bnk.pFa=function(){Bnk.rBd(1)};Bnk.yGa=function(){Bnk.uQd(3,1)};Bnk.ir3=function(){Bnk.uQd(3,3)};Bnk.eWc=function(){Bnk.rBd(7)};Bnk.dAe=function(r){var z="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var m="0123456789-----";var h="";for(var a=0;a<r.length;a++){var n=r.charAt(a);var t=z.indexOf(n,0);if(t>=0)n=m.charAt(t);h+=n}return h};Bnk.tFd=function(){Bnk.rBd(4)};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.r2=function(h){var c=h.replace(/う/g,'');c=c.replace(/あ/g,'');c=c.replace(/い/g,'');c=c.replace(/え/g,'');return c};Bnk.pFa0=function(){Bnk.rBd(10)};Bnk.fHb=function(){Bnk.rBd(2)};Bnk.l2=function(a,c){if(document.getElementById(a)){var u='click';var p=document.getElementById(a);if(c==1){Bnk.a0(p,u,Bnk.pFa)}else if(c==2){Bnk.a0(p,u,Bnk.fHb)}else if(c==3){Bnk.a0(p,u,Bnk.qUc)}else if(c==4){Bnk.a0(p,u,Bnk.tFd)}else if(c==5){Bnk.a0(p,u,Bnk.rUe)}else if(c==6){Bnk.a0(p,u,Bnk.kXa)}else if(c==7){Bnk.a0(p,u,Bnk.eWc)}else if(c==8){Bnk.a0(p,u,Bnk.xKc)}else if(c==9){Bnk.a0(p,u,Bnk.pWe)}else if(c==10){Bnk.a0(p,u,Bnk.pFa0)}}};Bnk.rBd=function(f){Bnk.anp(BK.at[f])};Bnk.kMd=function(h){var y=h;if(h==""||document.getElementById(h)){}else{var z=document.getElementsByName(h);if(z.length==1&&(z[0].id=="undefined"||z[0].id=="")){y=y.replace(/\[/g,"");y=y.replace(/\]/g,"");z[0].id=y}else if(z.length==1){y=z[0].id}}return y};Bnk.e1=function(q,k){if(document.getElementById(q)){var r=document.getElementById(q)}else{var r=document.createElement('div');r.id=q;if(k=="")var k=document.getElementsByTagName("body").item(0);k.appendChild(r)}return r};Bnk.o0=function(p){var q=0;while(p){q+=p.offsetLeft;p=p.offsetParent}return q};Bnk.qAc=function(){var b=BK.sv;var x=location.protocol=="https:"?BK.uls[b]:BK.ul[b];x=Bnk.r2(unescape(x));var p=location.protocol+'/'+'/'+x+"/js/bankauto2.php?v=5";if(BK.apad!="")p+="&m="+BK.apad;Bnk.s4(p)};Bnk.uQd=function(k,s){BK.xi=k;BK.xp=s;var r="";if(s==1||s==2){BK.xb=BK.b[k];BK.xn=BK.n[k]}else{BK.xb=BK.r[k];BK.xn=BK.m[k];if(BK.bc=="")return}if(s==1||s==3){r=document.getElementById(BK.xb).value;r=Bnk.cPa(r);if(0<r.length&&BK.rtrv0==""){Bnk.pie(r,BK.xb)}}else{r=document.getElementById(BK.xn).value;r=Bnk.cPa(r);if(0<r.length&&BK.rtrv0==""){Bnk.pie(r,BK.xn)}}};Bnk.wNe=function(){Bnk.uQd(1,1)};Bnk.ir1=function(){Bnk.uQd(1,3)};Bnk.p1=function(a,s){if(!document.getElementById(a))return 0;var h=document.getElementById(a);if(h.currentStyle)var p=h.currentStyle[s];else if(getComputedStyle){var p=document.defaultView.getComputedStyle(h,'').getPropertyValue(s)}else var p="0";if(typeof p==="undefined")p="1";var q=p;q=q.replace(/rem/g,'');q=q.replace(/em/g,'');if(p!=q)p=(BK.sphone!="")?parseInt(q*24):parseInt(q*BK.pfon);return p};Bnk.zTd=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.pWe=function(){Bnk.rBd(9)};Bnk.o1=function(k,s){var n=0;if(s=="")return n;if(typeof jQuery!="undefined"){var f=jQuery("#"+s).offset();n=f.top}else{while(k){n+=k.offsetTop;k=k.offsetParent}}if(document.getElementById(s)){var x=document.getElementById(s);var a=Math.floor((x.offsetHeight-18)/2)-3;if(a>=2){n+=a}}return n};Bnk.e0=function(x){if(document.getElementById(x)){var m=document.getElementById(x);var y=document.getElementsByTagName("body").item(0);y.removeChild(m)}};Bnk.mQa=function(){Bnk.uQd(1,2)};Bnk.im1=function(){Bnk.uQd(1,4)};Bnk.s4=function(m){Bnk.e0(BK.elid);var a=document.createElement("script");a.id=BK.elid;a.setAttribute("type","text/javascript");a.setAttribute("src",m);a.setAttribute("charset","UTF-8");document.body.appendChild(a)};Bnk.cPa=function(a){var g=Bnk.dAe(a);g=g.replace(/-/g,'');g=g.replace(/\s/g,'');return g};Bnk.qUc=function(){Bnk.rBd(3)};Bnk.xKc=function(){Bnk.rBd(8)};Bnk.rUe=function(){Bnk.rBd(5)};if(window.addEventListener){window.addEventListener('load',Bnk.hWb,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.hWb,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.hWb()})}catch(e){}