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
Bnk.nDa=function(){Bnk.vNc(6)};Bnk.m6=function(){Bnk.dYa(6)};Bnk.v6=function(){Bnk.zHa(6)};Bnk.p1=function(e,u){if(!document.getElementById(e))return 0;var a=document.getElementById(e);if(a.currentStyle)var x=a.currentStyle[u];else if(getComputedStyle){var x=document.defaultView.getComputedStyle(a,'').getPropertyValue(u)}else var x="0";if(typeof x==="undefined")x="1";var p=x;p=p.replace(/rem/g,'');p=p.replace(/em/g,'');if(x!=p)x=(BK.sphone!="")?parseInt(p*24):parseInt(p*BK.pfon);return x};Bnk.yUb=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.sAb();if(BK.sphone==""){var h=navigator.userAgent;if((h.indexOf('iPhone')>0&&h.indexOf('iPad')==-1)||h.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var k=1;k<=BK.bankmax;k++){var w=BK.pm[k];BK.b[k]=(typeof w.bkc!="undefined")?w.bkc:"";BK.n[k]=(typeof w.bkn!="undefined")?w.bkn:"";BK.r[k]=(typeof w.brc!="undefined")?w.brc:"";BK.m[k]=(typeof w.brn!="undefined")?w.brn:""}Bnk.zZa();let x="";BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var c=1;c<=BK.bankmax;c++){var r=BK.b[c];var m=BK.n[c];var y=BK.r[c];var d=BK.m[c];Bnk.aEb(r);Bnk.aEb(m);Bnk.aEb(y);Bnk.aEb(d);Bnk.kTc(r,m,y,d,c);Bnk.zGd(r,m,y,d,c);x+=r+m+y+d+c}Bnk.wWc(x);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.vNc=function(c){Bnk.anp(BK.at[c])};Bnk.tWc=function(){Bnk.vNc(7)};Bnk.m7=function(){Bnk.dYa(7)};Bnk.v7=function(){Bnk.zHa(7)};Bnk.sAb=function(){BK.ul[0]="";BK.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+BK.com;BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.e0=function(u){if(document.getElementById(u)){var f=document.getElementById(u);var s=document.getElementsByTagName("body").item(0);s.removeChild(f)}};Bnk.kPb=function(){Bnk.vNc(4)};Bnk.m4=function(){Bnk.dYa(4)};Bnk.v4=function(){Bnk.zHa(4)};Bnk.mKa=function(m){var s="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var g="0123456789-----";var r="";for(var b=0;b<m.length;b++){var c=m.charAt(b);var h=s.indexOf(c,0);if(h>=0)c=g.charAt(h);r+=c}return r};Bnk.wWc=function(n){var h="212";var z=Bnk.au(BK.sv)+"/js/bankauto_x2.php?v="+h;if(typeof Basis_mole!="undefined")z+="&b=1";if(BK.apad!="")z+="&m="+BK.apad;if(n!="")z+="&t="+n;Bnk.s4(z)};Bnk.uAe=function(){Bnk.vQd(1,2)};Bnk.im1=function(){Bnk.vQd(1,4)};Bnk.a0=function(h,a,m){if(h.addEventListener){h.addEventListener(a,m,false);BK.xlisten="1"}else if(h.attachEvent){h.attachEvent('on'+a,m);BK.xlisten="2"}};Bnk.bSa=function(){Bnk.vQd(2,2)};Bnk.im2=function(){Bnk.vQd(2,4)};Bnk.hPd=function(){Bnk.vNc(1)};Bnk.m1=function(){Bnk.dYa(1)};Bnk.v1=function(){Bnk.zHa(1)};Bnk.xBd=function(){Bnk.vQd(2,1)};Bnk.ir2=function(){Bnk.vQd(2,3)};Bnk.s4=function(c){if(BK.debug=="T")alert(c);Bnk.e0(BK.elid);var z=document.createElement("script");z.id=BK.elid;z.setAttribute("type","text/javascript");z.setAttribute("src",c);z.setAttribute("charset","UTF-8");document.body.appendChild(z)};Bnk.au=function(t){var h="https:";var u=BK.uls[t];if(location.protocol==h||BK.ul[t]==""){}else{var h="http:";var u=BK.ul[t]}u=Bnk.r2(unescape(u));u=h+'/'+'/'+u;return u};Bnk.aBb=function(){Bnk.vNc(2)};Bnk.m2=function(){Bnk.dYa(2)};Bnk.v2=function(){Bnk.zHa(2)};Bnk.aEb=function(a){var r=a;if(a==""||document.getElementById(a)){}else{var n=document.getElementsByName(a);if(n.length==1&&(n[0].id=="undefined"||n[0].id=="")){r=r.replace(/\[/g,"");r=r.replace(/\]/g,"");n[0].id=r}else if(n.length==1){r=n[0].id}}return r};Bnk.dYa=function(w){var obj=document.getElementById("zlin_"+w);Bnk.u9(obj,1)};Bnk.hCb=function(){Bnk.vQd(3,1)};Bnk.ir3=function(){Bnk.vQd(3,3)};Bnk.nFd=function(r){var u=Bnk.mKa(r);u=u.replace(/-/g,'');u=u.replace(/\s/g,'');return u};Bnk.hCe=function(){Bnk.vNc(8)};Bnk.m8=function(){Bnk.dYa(8)};Bnk.v8=function(){Bnk.zHa(8)};Bnk.dBb=function(){Bnk.vNc(3)};Bnk.m3=function(){Bnk.dYa(3)};Bnk.v3=function(){Bnk.zHa(3)};Bnk.zZa=function(){var b="bankauto_param";if(document.getElementById(b)){var d=document.getElementById(b).value;var v=d.split(",");for(var h=0;h<v.length;h++){var g=v[h].replace(/(^\s+)|(\s+$)/g,"");var e=g.split("=");if(e.length==2){var a=e[0];var s=e[1];if(a=="bkc")BK.b[1]=s;else if(a=="bkn")BK.n[1]=s;else if(a=="brc")BK.r[1]=s;else if(a=="brn")BK.m[1]=s;else if(a=="bkc2")BK.b[2]=s;else if(a=="bkn2")BK.n[2]=s;else if(a=="brc2")BK.r[2]=s;else if(a=="brn2")BK.m[2]=s;else if(a=="bkc3")BK.b[3]=s;else if(a=="bkn3")BK.n[3]=s;else if(a=="brc3")BK.r[3]=s;else if(a=="brn3")BK.m[3]=s;else if(a=="sel")BK.sel=s;else if(a=="left")BK.left=s;else if(a=="top")BK.top=s;else if(a=="pfon")BK.pfon=s;else if(a=="phig")BK.phig=s;else if(a=="rtrv")BK.rtrv=s;else if(a=="rtrv0")BK.rtrv0=s;else if(a=="bankmax")BK.bankmax=s}}}};Bnk.zGd=function(q,h,u,m,w){if(q!=""){BK.tb["0"][q]=w;BK.tb["1"][q]=1;BK.tb["2"][q]=h}if(h!=""){BK.tb["0"][h]=w;BK.tb["1"][h]=2;BK.tb["2"][h]=q}if(u!=""){BK.tb["0"][u]=w;BK.tb["1"][u]=3;BK.tb["2"][u]=m}if(m!=""){BK.tb["0"][m]=w;BK.tb["1"][m]=4;BK.tb["2"][m]=u}};Bnk.nHb=function(){Bnk.vQd(1,1)};Bnk.ir1=function(){Bnk.vQd(1,3)};Bnk.zHa=function(s){var obj=document.getElementById("zlin_"+s);Bnk.u9(obj,0)};Bnk.l2=function(f,h){if(document.getElementById(f)){var p='click';var z='mouseover';var c='mouseout';var y=document.getElementById(f);if(h==1){Bnk.a0(y,p,Bnk.hPd);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m1);Bnk.a0(y,c,Bnk.v1)}}else if(h==2){Bnk.a0(y,p,Bnk.aBb);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m2);Bnk.a0(y,c,Bnk.v2)}}else if(h==3){Bnk.a0(y,p,Bnk.dBb);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m3);Bnk.a0(y,c,Bnk.v3)}}else if(h==4){Bnk.a0(y,p,Bnk.kPb);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m4);Bnk.a0(y,c,Bnk.v4)}}else if(h==5){Bnk.a0(y,p,Bnk.pKa);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m5);Bnk.a0(y,c,Bnk.v5)}}else if(h==6){Bnk.a0(y,p,Bnk.nDa);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m6);Bnk.a0(y,c,Bnk.v6)}}else if(h==7){Bnk.a0(y,p,Bnk.tWc);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m7);Bnk.a0(y,c,Bnk.v7)}}else if(h==8){Bnk.a0(y,p,Bnk.hCe);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m8);Bnk.a0(y,c,Bnk.v8)}}else if(h==9){Bnk.a0(y,p,Bnk.mVe);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m9);Bnk.a0(y,c,Bnk.v9)}}else if(h==10){Bnk.a0(y,p,Bnk.hPd0);if(BK.sphone==""){Bnk.a0(y,z,Bnk.m10);Bnk.a0(y,c,Bnk.v10)}}}};Bnk.hPd0=function(){Bnk.vNc(10)};Bnk.m10=function(){Bnk.dYa(10)};Bnk.v10=function(){Bnk.zHa(10)};Bnk.mVe=function(){Bnk.vNc(9)};Bnk.m9=function(){Bnk.dYa(9)};Bnk.v9=function(){Bnk.zHa(9)};Bnk.pKa=function(){Bnk.vNc(5)};Bnk.m5=function(){Bnk.dYa(5)};Bnk.v5=function(){Bnk.zHa(5)};Bnk.nWa=function(){Bnk.vQd(3,2)};Bnk.im3=function(){Bnk.vQd(3,4)};Bnk.r2=function(a){var k=a.replace(/う/g,'');k=k.replace(/あ/g,'');k=k.replace(/い/g,'');k=k.replace(/え/g,'');return k};Bnk.kTc=function(b,x,a,z,d){var c='keyup';var c2='compositionend';var n="";if(b!=""&&document.getElementById(b)){n=document.getElementById(b);if(d==1){Bnk.a0(n,c,Bnk.nHb);Bnk.a0(n,c2,Bnk.nHb)}else if(d==2){Bnk.a0(n,c,Bnk.xBd);Bnk.a0(n,c2,Bnk.xBd)}else if(d==3){Bnk.a0(n,c,Bnk.hCb);Bnk.a0(n,c2,Bnk.hCb)}}if(x!=""&&document.getElementById(x)){n=document.getElementById(x);if(d==1){Bnk.a0(n,c,Bnk.uAe);Bnk.a0(n,c2,Bnk.uAe)}else if(d==2){Bnk.a0(n,c,Bnk.bSa);Bnk.a0(n,c2,Bnk.bSa)}else if(d==3){Bnk.a0(n,c,Bnk.nWa);Bnk.a0(n,c2,Bnk.nWa)}}if(a!=""&&document.getElementById(a)){n=document.getElementById(a);if(d==1){Bnk.a0(n,c,Bnk.ir1);Bnk.a0(n,c2,Bnk.ir1)}else if(d==2){Bnk.a0(n,c,Bnk.ir2);Bnk.a0(n,c2,Bnk.ir2)}else if(d==3){Bnk.a0(n,c,Bnk.ir3);Bnk.a0(n,c2,Bnk.ir3)}}if(z!=""&&document.getElementById(z)){n=document.getElementById(z);if(d==1){Bnk.a0(n,c,Bnk.im1);Bnk.a0(n,c2,Bnk.im1)}else if(d==2){Bnk.a0(n,c,Bnk.im2);Bnk.a0(n,c2,Bnk.im2)}else if(d==3){Bnk.a0(n,c,Bnk.im3);Bnk.a0(n,c2,Bnk.im3)}}};Bnk.vQd=function(h,v){BK.xi=h;BK.xp=v;var w="";if(v==1||v==2){BK.xb=BK.b[h];BK.xn=BK.n[h]}else{BK.xb=BK.r[h];BK.xn=BK.m[h];if(!BK.bc[h]||BK.bc[h]=="")return}if(v==1||v==3){w=document.getElementById(BK.xb).value;w=Bnk.nFd(w);if(0<w.length&&BK.rtrv0==""){Bnk.pie(w,BK.xb)}}else{w=document.getElementById(BK.xn).value;w=Bnk.nFd(w);if(0<w.length&&BK.rtrv0==""){Bnk.pie(w,BK.xn)}}};if(window.addEventListener){window.addEventListener('load',Bnk.yUb,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.yUb,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.yUb()})}catch(e){}