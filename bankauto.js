function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto.js Ver1.4 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    http://bank-auto.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[使い方：headタグ内に次の1行を定義して下さい]
 *	<script src="https://zipaddr.github.io/bankauto.js" charset="UTF-8"></script>
 */
/*	<-↓ 以下は変更が可能な箇所です-> */
this.pm= new Array();
//            銀行コード、       支店コード
this.pm[1]= {"bkc":"bank_code", "brc":"branch_code" };
this.pm[2]= {"bkc":"bank_code2","brc":"branch_code2"};
this.pm[3]= {"bkc":"bank_code3","brc":"branch_code3"};
this.bankmax=3;
this.bgc="#009999"; // guide_bgc
this.lnc="#ffffcc"; // link color
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.sel= "7";      // 拡張用(selectc)
this.left=22;       // offsetLeft、ガイダンス画面表示位置の補正
this.top= 18;       // offsetTop
this.pfon="12";     // font-size
this.phig="1.4";    // height
this.rtrv="1";      // 1:曖昧検索,0:上方一致
this.rtrv0="";      // 1:検索wait
this.sphone="";     // 1:jQuery-mobile,2:etc(SmartPhone)
/*	<-↑ 以上が変更可能です-> */

this.ver="1";
this.rev=".4";
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
this.xp="";         // sequence
this.bc="";         // 銀行コード
this.apad="";       // module追加
this.auto="bnkauto";// ガイダンスid
this.zc="bnk_close";// 閉じるid
this.cls="mouseover"; // or click
this.contract="ymGTGwr9NXCv"; // 契約コード(c)
this.Cache=[];      // キャッシュ
} var BK= new Bnk;
Bnk.entry=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.urlgen();if(BK.sphone==""){var ua=navigator.userAgent;if((ua.indexOf('iPhone')>0&&ua.indexOf('iPad')==-1)||ua.indexOf('Android')>0){BK.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(i=1;i<=BK.bankmax;i++){var pm=BK.pm[i];BK.b[i]=BK.n[i]=BK.r[i]=BK.m[i]="";if(typeof pm.bkc!="undefined")BK.b[i]=pm.bkc;if(typeof pm.bkn!="undefined")BK.n[i]=pm.bkn;if(typeof pm.brc!="undefined")BK.r[i]=pm.brc;if(typeof pm.brn!="undefined")BK.m[i]=pm.brn}Bnk.htmlown();for(i=1;i<=BK.bankmax;i++){var bkc=BK.b[i];var bkn=BK.n[i];var brc=BK.r[i];var brn=BK.m[i];Bnk.nmd(bkc);Bnk.nmd(bkn);Bnk.nmd(brc);Bnk.nmd(brn);Bnk.set(bkc,bkn,brc,brn,i)}Bnk.bankautoc();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.set=function(b,n,r,m,i){var evt='keyup';if(b!=""&&document.getElementById(b)){var o=document.getElementById(b);if(i==1){Bnk.aEv(o,evt,Bnk.ib1)}else if(i==2){Bnk.aEv(o,evt,Bnk.ib2)}else if(i==3){Bnk.aEv(o,evt,Bnk.ib3)}}if(n!=""&&document.getElementById(n)){var o=document.getElementById(n);if(i==1){Bnk.aEv(o,evt,Bnk.in1)}else if(i==2){Bnk.aEv(o,evt,Bnk.in2)}else if(i==3){Bnk.aEv(o,evt,Bnk.in3)}}if(r!=""&&document.getElementById(r)){var o=document.getElementById(r);if(i==1){Bnk.aEv(o,evt,Bnk.ir1)}else if(i==2){Bnk.aEv(o,evt,Bnk.ir2)}else if(i==3){Bnk.aEv(o,evt,Bnk.ir3)}}if(m!=""&&document.getElementById(m)){var o=document.getElementById(m);if(i==1){Bnk.aEv(o,evt,Bnk.im1)}else if(i==2){Bnk.aEv(o,evt,Bnk.im2)}else if(i==3){Bnk.aEv(o,evt,Bnk.im3)}}};Bnk.ib1=function(){Bnk.cbc(1,1)};Bnk.ir1=function(){Bnk.cbc(1,3)};Bnk.ib2=function(){Bnk.cbc(2,1)};Bnk.ir2=function(){Bnk.cbc(2,3)};Bnk.ib3=function(){Bnk.cbc(3,1)};Bnk.ir3=function(){Bnk.cbc(3,3)};Bnk.in1=function(){Bnk.cbc(1,2)};Bnk.im1=function(){Bnk.cbc(1,4)};Bnk.in2=function(){Bnk.cbc(2,2)};Bnk.im2=function(){Bnk.cbc(2,4)};Bnk.in3=function(){Bnk.cbc(3,2)};Bnk.im3=function(){Bnk.cbc(3,4)};Bnk.cbc=function(i,p){BK.xp=p;if(p==1||p==2){BK.xb=BK.b[i];BK.xn=BK.n[i]}else{BK.xb=BK.r[i];BK.xn=BK.m[i];if(BK.bc=="")return}if(p==1||p==3){var k=document.getElementById(BK.xb).value;k=Bnk.chg(k);if(0<k.length&&BK.rtrv0==""){Bnk.input(k,BK.xb)}}else{var k=document.getElementById(BK.xn).value;k=Bnk.chg(k);if(0<k.length&&BK.rtrv0==""){Bnk.input(k,BK.xn)}}};Bnk.htmlown=function(){var idn="bankauto_param";if(document.getElementById(idn)){var prm=document.getElementById(idn).value;var da=prm.split(",");for(var j=0;j<da.length;j++){var wa=da[j].replace(/(^\s+)|(\s+$)/g,"");var wk=wa.split("=");if(wk.length==2){var w1=wk[0];var w2=wk[1];if(w1=="bkc")BK.b[1]=w2;else if(w1=="bkn")BK.n[1]=w2;else if(w1=="brc")BK.r[1]=w2;else if(w1=="brn")BK.m[1]=w2;else if(w1=="bkc2")BK.b[2]=w2;else if(w1=="bkn2")BK.n[2]=w2;else if(w1=="brc2")BK.r[2]=w2;else if(w1=="brn2")BK.m[2]=w2;else if(w1=="bkc3")BK.b[3]=w2;else if(w1=="bkn3")BK.n[3]=w2;else if(w1=="brc3")BK.r[3]=w2;else if(w1=="brn3")BK.m[3]=w2;else if(w1=="sel")BK.sel=w2;else if(w1=="left")BK.left=w2;else if(w1=="top")BK.top=w2;else if(w1=="pfon")BK.pfon=w2;else if(w1=="phig")BK.phig=w2;else if(w1=="rtrv")BK.rtrv=w2;else if(w1=="rtrv0")BK.rtrv0=w2;else if(w1=="bankmax")BK.bankmax=w2}}}};Bnk.nmd=function(id){if(id!=""&&document.getElementsByName(id)&&!document.getElementById(id)){var e=document.getElementsByName(id);if(e.length==1)e[0].id=id}};Bnk.setime=function(o){o.style.imeMode="disabled"};Bnk.pad=function(idn,type){var o=document.getElementById(idn);if(o.currentStyle)var pa=o.currentStyle[type];else if(getComputedStyle){var pa=document.defaultView.getComputedStyle(o,'').getPropertyValue(type)}else var pa="0";if(typeof pa==="undefined")pa="1";var pc=pa;pc=pc.replace(/rem/g,'');pc=pc.replace(/em/g,'');if(pa!=pc)pa=(BK.sphone=="")?parseInt(pc*BK.pfon):parseInt(pc*24);return pa};Bnk.offsLeft=function(o){var p=0;while(o){p+=o.offsetLeft;o=o.offsetParent}return p};Bnk.offsTop=function(o,idn){var p=0;if(idn=="")return p;if(typeof jQuery!="undefined"){p=jQuery("#"+idn).offset().top}else{while(o){p+=o.offsetTop;o=o.offsetParent}}if(document.getElementById(idn)){var e=document.getElementById(idn);var h=Math.floor((e.offsetHeight-18)/2)-3;if(h>=2){p+=h}}return p};Bnk.pararepl=function(pm){var a=pm.replace(/う/g,'');a=a.replace(/あ/g,'');a=a.replace(/い/g,'');return a.replace(/え/g,'')};Bnk.chg=function(k){var d=Bnk.zenk_hank(k);d=d.replace(/-/g,'');return d.replace(/\s/g,'')};Bnk.zenk_hank=function(data){var zenk="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var hank="0123456789-----";var ans="";for(var i=0;i<data.length;i++){var s=data.charAt(i);var n=zenk.indexOf(s,0);if(n>=0)s=hank.charAt(n);ans+=s}return ans};Bnk.close=function(){Bnk.el_cls(BK.auto)};Bnk.el_create=function(idn){if(document.getElementById(idn)){var o=document.getElementById(idn)}else{var o=document.createElement('div');o.id=idn;var elm=document.getElementsByTagName("body").item(0);elm.appendChild(o)}return o};Bnk.el_cls=function(idn){if(document.getElementById(idn)){var o=document.getElementById(idn);var objBody=document.getElementsByTagName("body").item(0);objBody.removeChild(o)}};Bnk.aEv=function(o,type,func){if(o.addEventListener){o.addEventListener(type,func,false)}else if(o.attachEvent){o.attachEvent('on'+type,func)}};Bnk.urlgen=function(){BK.ul[0]="z%u3044i%u3046pa%u3044d%u3042d%u3046r%u30423"+BK.com;BK.uls[0]="zip%u30463addr%u30423-com.s%u3046sl-s%u3044ixc%u30463ore.jp";BK.sv=Math.floor(Math.random()*2);BK.sv=0};Bnk.bankautoc=function(){var n=BK.sv;var url=location.protocol=="https:"?BK.uls[n]:BK.ul[n];url=Bnk.pararepl(unescape(url));var us=location.protocol+'/'+'/'+url+"/js/bankauto.php?v=4";if(BK.apad!="")us+="&m="+BK.apad;Bnk.scall(us)};Bnk.scall=function(u){Bnk.el_cls("call"+BK.auto);var s=document.createElement("script");s.id="call"+BK.auto;s.setAttribute("type","text/javascript");s.setAttribute("src",u);s.setAttribute("charset","UTF-8");document.body.appendChild(s)};Bnk.a=function(n){Bnk.autoinp(BK.at[n])};Bnk.a1=function(){Bnk.a(1)};Bnk.a6=function(){Bnk.a(6)};Bnk.a2=function(){Bnk.a(2)};Bnk.a7=function(){Bnk.a(7)};Bnk.a3=function(){Bnk.a(3)};Bnk.a8=function(){Bnk.a(8)};Bnk.a4=function(){Bnk.a(4)};Bnk.a9=function(){Bnk.a(9)};Bnk.a5=function(){Bnk.a(5)};Bnk.a10=function(){Bnk.a(10)};Bnk.listen2=function(id,n){if(document.getElementById(id)){var evt='click';var o=document.getElementById(id);if(n==1){Bnk.aEv(o,evt,Bnk.a1)}else if(n==2){Bnk.aEv(o,evt,Bnk.a2)}else if(n==3){Bnk.aEv(o,evt,Bnk.a3)}else if(n==4){Bnk.aEv(o,evt,Bnk.a4)}else if(n==5){Bnk.aEv(o,evt,Bnk.a5)}else if(n==6){Bnk.aEv(o,evt,Bnk.a6)}else if(n==7){Bnk.aEv(o,evt,Bnk.a7)}else if(n==8){Bnk.aEv(o,evt,Bnk.a8)}else if(n==9){Bnk.aEv(o,evt,Bnk.a9)}else if(n==10){Bnk.aEv(o,evt,Bnk.a10)}}};if(window.addEventListener){window.addEventListener('load',Bnk.entry,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.entry,true)}try{$(document).on('pageinit',function(e){BK.sphone="1";Bnk.entry()})}catch(e){}