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
Bnk.mNc=function(v){var obj=document.getElementById("zlin_"+v);Bnk.u9(obj,0)};Bnk.qAd=function(){Bnk.sRe(3,2)};Bnk.im3=function(){Bnk.sRe(3,4)};Bnk.vDa=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.eXc=function(x){var g=x;if(x==""||document.getElementById(x)){}else{var r=document.getElementsByName(x);if(r.length==1&&(r[0].id=="undefined"||r[0].id=="")){g=g.replace(/\[/g,"");g=g.replace(/\]/g,"");r[0].id=g}else if(r.length==1){g=r[0].id}}return g};Bnk.aEa=function(){Bnk.vCb(7)};Bnk.m7=function(){Bnk.xQb(7)};Bnk.v7=function(){Bnk.mNc(7)};Bnk.aMb=function(){Bnk.sRe(3,1)};Bnk.ir3=function(){Bnk.sRe(3,3)};Bnk.hNe=function(){Bnk.sRe(1,1)};Bnk.ir1=function(){Bnk.sRe(1,3)};Bnk.bKd=function(){var p="210";var u=BK.sv;var w=location.protocol=="https:"?BK.uls[u]:BK.ul[u];w=Bnk.r2(unescape(w));var t=location.protocol+'/'+'/'+w+"/js/bankauto_x.php?v="+p;if(BK.apad!="")t+="&m="+BK.apad;Bnk.s4(t)};Bnk.aFa=function(){Bnk.vCb(4)};Bnk.m4=function(){Bnk.xQb(4)};Bnk.v4=function(){Bnk.mNc(4)};Bnk.xQb=function(s){var obj=document.getElementById("zlin_"+s);Bnk.u9(obj,1)};Bnk.e0=function(e){if(document.getElementById(e)){var k=document.getElementById(e);var d=document.getElementsByTagName("body").item(0);d.removeChild(k)}};Bnk.s4=function(u){Bnk.e0(BK.elid);var x=document.createElement("script");x.id=BK.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",u);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Bnk.aZc=function(w){var s=Bnk.pFb(w);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Bnk.vCb=function(m){Bnk.anp(BK.at[m])};Bnk.l2=function(m,c){if(document.getElementById(m)){var x='click';var q='mouseover';var w='mouseout';var r=document.getElementById(m);if(c==1){Bnk.a0(r,x,Bnk.bEd);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m1);Bnk.a0(r,w,Bnk.v1)}}else if(c==2){Bnk.a0(r,x,Bnk.tQe);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m2);Bnk.a0(r,w,Bnk.v2)}}else if(c==3){Bnk.a0(r,x,Bnk.pPd);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m3);Bnk.a0(r,w,Bnk.v3)}}else if(c==4){Bnk.a0(r,x,Bnk.aFa);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m4);Bnk.a0(r,w,Bnk.v4)}}else if(c==5){Bnk.a0(r,x,Bnk.fMb);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m5);Bnk.a0(r,w,Bnk.v5)}}else if(c==6){Bnk.a0(r,x,Bnk.uQa);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m6);Bnk.a0(r,w,Bnk.v6)}}else if(c==7){Bnk.a0(r,x,Bnk.aEa);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m7);Bnk.a0(r,w,Bnk.v7)}}else if(c==8){Bnk.a0(r,x,Bnk.bYe);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m8);Bnk.a0(r,w,Bnk.v8)}}else if(c==9){Bnk.a0(r,x,Bnk.pMd);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m9);Bnk.a0(r,w,Bnk.v9)}}else if(c==10){Bnk.a0(r,x,Bnk.tEd);if(BK.sphone==""){Bnk.a0(r,q,Bnk.m10);Bnk.a0(r,w,Bnk.v10)}}}};Bnk.qAe=function(){var t="bankauto_param";if(document.getElementById(t)){var m=document.getElementById(t).value;var e=m.split(",");for(var z=0;z<e.length;z++){var c=e[z].replace(/(^\s+)|(\s+$)/g,"");var y=c.split("=");if(y.length==2){var d=y[0];var h=y[1];if(d=="bkc")BK.b[1]=h;else if(d=="bkn")BK.n[1]=h;else if(d=="brc")BK.r[1]=h;else if(d=="brn")BK.m[1]=h;else if(d=="bkc2")BK.b[2]=h;else if(d=="bkn2")BK.n[2]=h;else if(d=="brc2")BK.r[2]=h;else if(d=="brn2")BK.m[2]=h;else if(d=="bkc3")BK.b[3]=h;else if(d=="bkn3")BK.n[3]=h;else if(d=="brc3")BK.r[3]=h;else if(d=="brn3")BK.m[3]=h;else if(d=="sel")BK.sel=h;else if(d=="left")BK.left=h;else if(d=="top")BK.top=h;else if(d=="pfon")BK.pfon=h;else if(d=="phig")BK.phig=h;else if(d=="rtrv")BK.rtrv=h;else if(d=="rtrv0")BK.rtrv0=h;else if(d=="bankmax")BK.bankmax=h}}}};Bnk.uUb=function(){Bnk.sRe(1,2)};Bnk.im1=function(){Bnk.sRe(1,4)};Bnk.uQa=function(){Bnk.vCb(6)};Bnk.m6=function(){Bnk.xQb(6)};Bnk.v6=function(){Bnk.mNc(6)};Bnk.pPd=function(){Bnk.vCb(3)};Bnk.m3=function(){Bnk.xQb(3)};Bnk.v3=function(){Bnk.mNc(3)};Bnk.dMb=function(g,b,u,h,m){var q='keyup';var a="";if(g!=""&&document.getElementById(g)){a=document.getElementById(g);if(m==1){Bnk.a0(a,q,Bnk.hNe)}else if(m==2){Bnk.a0(a,q,Bnk.eDb)}else if(m==3){Bnk.a0(a,q,Bnk.aMb)}}if(b!=""&&document.getElementById(b)){a=document.getElementById(b);if(m==1){Bnk.a0(a,q,Bnk.uUb)}else if(m==2){Bnk.a0(a,q,Bnk.hEd)}else if(m==3){Bnk.a0(a,q,Bnk.qAd)}}if(u!=""&&document.getElementById(u)){a=document.getElementById(u);if(m==1){Bnk.a0(a,q,Bnk.ir1)}else if(m==2){Bnk.a0(a,q,Bnk.ir2)}else if(m==3){Bnk.a0(a,q,Bnk.ir3)}}if(h!=""&&document.getElementById(h)){a=document.getElementById(h);if(m==1){Bnk.a0(a,q,Bnk.im1)}else if(m==2){Bnk.a0(a,q,Bnk.im2)}else if(m==3){Bnk.a0(a,q,Bnk.im3)}}};Bnk.pMd=function(){Bnk.vCb(9)};Bnk.m9=function(){Bnk.xQb(9)};Bnk.v9=function(){Bnk.mNc(9)};Bnk.tEd=function(){Bnk.vCb(10)};Bnk.m10=function(){Bnk.xQb(10)};Bnk.v10=function(){Bnk.mNc(10)};Bnk.sRe=function(n,g){BK.xi=n;BK.xp=g;var b="";if(g==1||g==2){BK.xb=BK.b[n];BK.xn=BK.n[n]}else{BK.xb=BK.r[n];BK.xn=BK.m[n];if(!BK.bc[n]||BK.bc[n]=="")return}if(g==1||g==3){b=document.getElementById(BK.xb).value;b=Bnk.aZc(b);if(0<b.length&&BK.rtrv0==""){Bnk.pie(b,BK.xb)}}else{b=document.getElementById(BK.xn).value;b=Bnk.aZc(b);if(0<b.length&&BK.rtrv0==""){Bnk.pie(b,BK.xn)}}};Bnk.r2=function(y){var v=y.replace(/う/g,'');v=v.replace(/あ/g,'');v=v.replace(/い/g,'');v=v.replace(/え/g,'');return v};Bnk.tEa=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.vDa();if(BK.sphone==""){var g=navigator.userAgent;if((g.indexOf('iPhone')>0&&g.indexOf('iPad')==-1)||g.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var y=1;y<=BK.bankmax;y++){var k=BK.pm[y];BK.b[y]=(typeof k.bkc!="undefined")?k.bkc:"";BK.n[y]=(typeof k.bkn!="undefined")?k.bkn:"";BK.r[y]=(typeof k.brc!="undefined")?k.brc:"";BK.m[y]=(typeof k.brn!="undefined")?k.brn:""}Bnk.qAe();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var s=1;s<=BK.bankmax;s++){var q=BK.b[s];var t=BK.n[s];var d=BK.r[s];var r=BK.m[s];Bnk.eXc(q);Bnk.eXc(t);Bnk.eXc(d);Bnk.eXc(r);Bnk.dMb(q,t,d,r,s);Bnk.gVe(q,t,d,r,s)}Bnk.bKd();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.gVe=function(u,v,s,y,x){if(u!=""){BK.tb["0"][u]=x;BK.tb["1"][u]=1;BK.tb["2"][u]=v}if(v!=""){BK.tb["0"][v]=x;BK.tb["1"][v]=2;BK.tb["2"][v]=u}if(s!=""){BK.tb["0"][s]=x;BK.tb["1"][s]=3;BK.tb["2"][s]=y}if(y!=""){BK.tb["0"][y]=x;BK.tb["1"][y]=4;BK.tb["2"][y]=s}};Bnk.pFb=function(b){var d="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var u="0123456789-----";var q="";for(var t=0;t<b.length;t++){var g=b.charAt(t);var n=d.indexOf(g,0);if(n>=0)g=u.charAt(n);q+=g}return q};Bnk.tQe=function(){Bnk.vCb(2)};Bnk.m2=function(){Bnk.xQb(2)};Bnk.v2=function(){Bnk.mNc(2)};Bnk.fMb=function(){Bnk.vCb(5)};Bnk.m5=function(){Bnk.xQb(5)};Bnk.v5=function(){Bnk.mNc(5)};Bnk.hEd=function(){Bnk.sRe(2,2)};Bnk.im2=function(){Bnk.sRe(2,4)};Bnk.p1=function(z,s){if(!document.getElementById(z))return 0;var y=document.getElementById(z);if(y.currentStyle)var c=y.currentStyle[s];else if(getComputedStyle){var c=document.defaultView.getComputedStyle(y,'').getPropertyValue(s)}else var c="0";if(typeof c==="undefined")c="1";var u=c;u=u.replace(/rem/g,'');u=u.replace(/em/g,'');if(c!=u)c=(BK.sphone!="")?parseInt(u*24):parseInt(u*BK.pfon);return c};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.a0=function(t,e,f){if(t.addEventListener){t.addEventListener(e,f,false);BK.xlisten="1"}else if(t.attachEvent){t.attachEvent('on'+e,f);BK.xlisten="2"}};Bnk.bYe=function(){Bnk.vCb(8)};Bnk.m8=function(){Bnk.xQb(8)};Bnk.v8=function(){Bnk.mNc(8)};Bnk.bEd=function(){Bnk.vCb(1)};Bnk.m1=function(){Bnk.xQb(1)};Bnk.v1=function(){Bnk.mNc(1)};Bnk.eDb=function(){Bnk.sRe(2,1)};Bnk.ir2=function(){Bnk.sRe(2,3)};if(window.addEventListener){window.addEventListener('load',Bnk.tEa,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.tEa,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.tEa()})}catch(e){}