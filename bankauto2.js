function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver2.8 )
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
Bnk.wPe=function(){Bnk.hGd(1)};Bnk.o0=function(f){var w=0;while(f){w+=f.offsetLeft;f=f.offsetParent}return w};Bnk.l2=function(n,x){if(document.getElementById(n)){var h='click';var c=document.getElementById(n);if(x==1){Bnk.a0(c,h,Bnk.wPe)}else if(x==2){Bnk.a0(c,h,Bnk.tVd)}else if(x==3){Bnk.a0(c,h,Bnk.sKa)}else if(x==4){Bnk.a0(c,h,Bnk.mZd)}else if(x==5){Bnk.a0(c,h,Bnk.vYc)}else if(x==6){Bnk.a0(c,h,Bnk.wPc)}else if(x==7){Bnk.a0(c,h,Bnk.pEa)}else if(x==8){Bnk.a0(c,h,Bnk.bXa)}else if(x==9){Bnk.a0(c,h,Bnk.uZc)}else if(x==10){Bnk.a0(c,h,Bnk.wPe0)}}};Bnk.xFe=function(){Bnk.yYb(3,2)};Bnk.im3=function(){Bnk.yYb(3,4)};Bnk.bXa=function(){Bnk.hGd(8)};Bnk.p1=function(h,r){if(!document.getElementById(h))return 0;var n=document.getElementById(h);if(n.currentStyle)var v=n.currentStyle[r];else if(getComputedStyle){var v=document.defaultView.getComputedStyle(n,'').getPropertyValue(r)}else var v="0";if(typeof v==="undefined")v="1";var t=v;t=t.replace(/rem/g,'');t=t.replace(/em/g,'');if(v!=t)v=(BK.sphone!="")?parseInt(t*24):parseInt(t*BK.pfon);return v};Bnk.s4=function(u){Bnk.e0(BK.elid);var s=document.createElement("script");s.id=BK.elid;s.setAttribute("type","text/javascript");s.setAttribute("src",u);s.setAttribute("charset","UTF-8");document.body.appendChild(s)};Bnk.pEa=function(){Bnk.hGd(7)};Bnk.ySb=function(){Bnk.yYb(3,1)};Bnk.ir3=function(){Bnk.yYb(3,3)};Bnk.fRb=function(){Bnk.yYb(1,2)};Bnk.im1=function(){Bnk.yYb(1,4)};Bnk.sSb=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.hSe();if(BK.sphone==""){var p=navigator.userAgent;if((p.indexOf('iPhone')>0&&p.indexOf('iPad')==-1)||p.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(var m=1;m<=BK.bankmax;m++){var y=BK.pm[m];BK.b[m]=BK.n[m]=BK.r[m]=BK.m[m]="";if(typeof y.bkc!="undefined")BK.b[m]=y.bkc;if(typeof y.bkn!="undefined")BK.n[m]=y.bkn;if(typeof y.brc!="undefined")BK.r[m]=y.brc;if(typeof y.brn!="undefined")BK.m[m]=y.brn}Bnk.rHc();BK.tb["0"]=new Array();BK.tb["1"]=new Array();BK.tb["2"]=new Array();for(var k=1;k<=BK.bankmax;k++){var f=BK.b[k];var n=BK.n[k];var h=BK.r[k];var c=BK.m[k];Bnk.rVe(f);Bnk.rVe(n);Bnk.rVe(h);Bnk.rVe(c);Bnk.xFd(f,n,h,c,k);Bnk.zMb(f,n,h,c,k)}Bnk.sCd();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.rVe=function(p){var t=p;if(p==""||document.getElementById(p)){}else{var b=document.getElementsByName(p);if(b.length==1&&(b[0].id=="undefined"||b[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");b[0].id=t}else if(b.length==1){t=b[0].id}}return t};Bnk.tDe=function(v){var p=Bnk.nSb(v);p=p.replace(/-/g,'');p=p.replace(/\s/g,'');return p};Bnk.nFd=function(p){p.style.imeMode="disabled"};Bnk.wBb=function(){Bnk.yYb(2,2)};Bnk.im2=function(){Bnk.yYb(2,4)};Bnk.vYc=function(){Bnk.hGd(5)};Bnk.uZc=function(){Bnk.hGd(9)};Bnk.wPc=function(){Bnk.hGd(6)};Bnk.zMb=function(s,w,z,q,h){if(s!=""){BK.tb["0"][s]=h;BK.tb["1"][s]=1;BK.tb["2"][s]=w}if(w!=""){BK.tb["0"][w]=h;BK.tb["1"][w]=2;BK.tb["2"][w]=s}if(z!=""){BK.tb["0"][z]=h;BK.tb["1"][z]=3;BK.tb["2"][z]=q}if(q!=""){BK.tb["0"][q]=h;BK.tb["1"][q]=4;BK.tb["2"][q]=z}};Bnk.hSe=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u3046addr%u30423-com.s%u3046sl-s%u3044ixc%u3046ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.rHc=function(){var d="bankauto_param";if(document.getElementById(d)){var n=document.getElementById(d).value;var c=n.split(",");for(var y=0;y<c.length;y++){var g=c[y].replace(/(^\s+)|(\s+$)/g,"");var s=g.split("=");if(s.length==2){var w=s[0];var f=s[1];if(w=="bkc")BK.b[1]=f;else if(w=="bkn")BK.n[1]=f;else if(w=="brc")BK.r[1]=f;else if(w=="brn")BK.m[1]=f;else if(w=="bkc2")BK.b[2]=f;else if(w=="bkn2")BK.n[2]=f;else if(w=="brc2")BK.r[2]=f;else if(w=="brn2")BK.m[2]=f;else if(w=="bkc3")BK.b[3]=f;else if(w=="bkn3")BK.n[3]=f;else if(w=="brc3")BK.r[3]=f;else if(w=="brn3")BK.m[3]=f;else if(w=="sel")BK.sel=f;else if(w=="left")BK.left=f;else if(w=="top")BK.top=f;else if(w=="pfon")BK.pfon=f;else if(w=="phig")BK.phig=f;else if(w=="rtrv")BK.rtrv=f;else if(w=="rtrv0")BK.rtrv0=f;else if(w=="bankmax")BK.bankmax=f}}}};Bnk.yYb=function(x,p){BK.xi=x;BK.xp=p;var s="";if(p==1||p==2){BK.xb=BK.b[x];BK.xn=BK.n[x]}else{BK.xb=BK.r[x];BK.xn=BK.m[x];if(!BK.bc[x]||BK.bc[x]=="")return}if(p==1||p==3){s=document.getElementById(BK.xb).value;s=Bnk.tDe(s);if(0<s.length&&BK.rtrv0==""){Bnk.pie(s,BK.xb)}}else{s=document.getElementById(BK.xn).value;s=Bnk.tDe(s);if(0<s.length&&BK.rtrv0==""){Bnk.pie(s,BK.xn)}}};Bnk.wSc=function(){Bnk.yYb(2,1)};Bnk.ir2=function(){Bnk.yYb(2,3)};Bnk.c3=function(){Bnk.e0(BK.elid)};Bnk.r2=function(c){var a=c.replace(/う/g,'');a=a.replace(/あ/g,'');a=a.replace(/い/g,'');a=a.replace(/え/g,'');return a};Bnk.sCd=function(){var b="28";var n=BK.sv;var c=location.protocol=="https:"?BK.uls[n]:BK.ul[n];c=Bnk.r2(unescape(c));var q=location.protocol+'/'+'/'+c+"/js/bankautox.php?v="+b;if(BK.apad!="")q+="&m="+BK.apad;Bnk.s4(q)};Bnk.mZd=function(){Bnk.hGd(4)};Bnk.tVd=function(){Bnk.hGd(2)};Bnk.a0=function(d,e,h){if(d.addEventListener){d.addEventListener(e,h,false);BK.xlisten="1"}else if(d.attachEvent){d.attachEvent('on'+e,h);BK.xlisten="2"}};Bnk.fPd=function(){Bnk.yYb(1,1)};Bnk.ir1=function(){Bnk.yYb(1,3)};Bnk.sKa=function(){Bnk.hGd(3)};Bnk.e0=function(t){if(document.getElementById(t)){var u=document.getElementById(t);var a=document.getElementsByTagName("body").item(0);a.removeChild(u)}};Bnk.wPe0=function(){Bnk.hGd(10)};Bnk.o1=function(q,u){var b=0;if(u=="")return b;if(typeof jQuery!="undefined"){var t=jQuery("#"+u).offset();b=t.top}else{while(q){b+=q.offsetTop;q=q.offsetParent}}if(document.getElementById(u)){var a=document.getElementById(u);var d=Math.floor((a.offsetHeight-18)/2)-3;if(d>=2){b+=d}}return b};Bnk.nSb=function(s){var d="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var n="0123456789-----";var g="";for(var z=0;z<s.length;z++){var m=s.charAt(z);var f=d.indexOf(m,0);if(f>=0)m=n.charAt(f);g+=m}return g};Bnk.hGd=function(g){Bnk.anp(BK.at[g])};Bnk.xFd=function(z,y,m,a,d){var q='keyup';var c="";if(z!=""&&document.getElementById(z)){c=document.getElementById(z);if(d==1){Bnk.a0(c,q,Bnk.fPd)}else if(d==2){Bnk.a0(c,q,Bnk.wSc)}else if(d==3){Bnk.a0(c,q,Bnk.ySb)}}if(y!=""&&document.getElementById(y)){c=document.getElementById(y);if(d==1){Bnk.a0(c,q,Bnk.fRb)}else if(d==2){Bnk.a0(c,q,Bnk.wBb)}else if(d==3){Bnk.a0(c,q,Bnk.xFe)}}if(m!=""&&document.getElementById(m)){c=document.getElementById(m);if(d==1){Bnk.a0(c,q,Bnk.ir1)}else if(d==2){Bnk.a0(c,q,Bnk.ir2)}else if(d==3){Bnk.a0(c,q,Bnk.ir3)}}if(a!=""&&document.getElementById(a)){c=document.getElementById(a);if(d==1){Bnk.a0(c,q,Bnk.im1)}else if(d==2){Bnk.a0(c,q,Bnk.im2)}else if(d==3){Bnk.a0(c,q,Bnk.im3)}}};Bnk.e1=function(h,y){if(document.getElementById(h)){var v=document.getElementById(h)}else{var v=document.createElement('div');v.id=h;if(y=="")var y=document.getElementsByTagName("body").item(0);y.appendChild(v)}return v};if(window.addEventListener){window.addEventListener('load',Bnk.sSb,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.sSb,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.sSb()})}catch(e){}