function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver2.15 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    https://bank-auto.com/
 *	@link    https://www.pierre-soft.com/
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
this.debug="";      // 1:debug-mode
/*	<-↑ 以上が変更可能です-> */

this.ver="2";
this.rev=".15";
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
}let K= new Bnk;
Bnk.c3=function(){Ban.es(K.elid)};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();if(K.sphone==""){const v=navigator.userAgent;if((v.indexOf('iPhone')>0&&v.indexOf('iPad')==-1)||v.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let u=1;u<=K.bankmax;u++){const a=K.pm[u];K.b[u]=(typeof a.bkc!="undefined")?a.bkc:"";K.n[u]=(typeof a.bkn!="undefined")?a.bkn:"";K.r[u]=(typeof a.brc!="undefined")?a.brc:"";K.m[u]=(typeof a.brn!="undefined")?a.brn:""}Bnk.wn();let x="";let m="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let n=1;n<=K.bankmax;n++){const g=K.b[n];const y=K.n[n];const t=K.r[n];const c=K.m[n];Ban.gi(g);Ban.gi(y);Ban.gi(t);Ban.gi(c);const p=Bnk.s(g,y,t,c,n);if(p=="1")x="1";Bnk.dg(g,y,t,c,n);m+=g+y+t+c+n}if(x=="1")Bnk.cs(m);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.s=function(t,k,n,v,q){const g='keyup';const e='compositionend';let w="";let m="";if(t!=""&&document.getElementById(t)){m=document.getElementById(t);if(q==1){Ban.av(m,g,Bnk.mXd);Ban.av(m,e,Bnk.mXd);w="1"}else if(q==2){Ban.av(m,g,Bnk.pCc);Ban.av(m,e,Bnk.pCc);w="1"}else if(q==3){Ban.av(m,g,Bnk.gFb);Ban.av(m,e,Bnk.gFb);w="1"}}if(k!=""&&document.getElementById(k)){m=document.getElementById(k);if(q==1){Ban.av(m,g,Bnk.zWc);Ban.av(m,e,Bnk.zWc);w="1"}else if(q==2){Ban.av(m,g,Bnk.bPa);Ban.av(m,e,Bnk.bPa);w="1"}else if(q==3){Ban.av(m,g,Bnk.bBb);Ban.av(m,e,Bnk.bBb);w="1"}}if(n!=""&&document.getElementById(n)){m=document.getElementById(n);if(q==1){Ban.av(m,g,Bnk.ir1);Ban.av(m,e,Bnk.ir1);w="1"}else if(q==2){Ban.av(m,g,Bnk.ir2);Ban.av(m,e,Bnk.ir2);w="1"}else if(q==3){Ban.av(m,g,Bnk.ir3);Ban.av(m,e,Bnk.ir3);w="1"}}if(v!=""&&document.getElementById(v)){m=document.getElementById(v);if(q==1){Ban.av(m,g,Bnk.im1);Ban.av(m,e,Bnk.im1);w="1"}else if(q==2){Ban.av(m,g,Bnk.im2);Ban.av(m,e,Bnk.im2);w="1"}else if(q==3){Ban.av(m,g,Bnk.im3);Ban.av(m,e,Bnk.im3);w="1"}}return w};Bnk.yGa=function(){Bnk.eYc(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.yHb=function(){Bnk.eYc(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.bBb=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.zWc=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.nFa=function(){Bnk.eYc(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.au=function(t){let f="https:";let c=K.uls[t];if(location.protocol==f||K.ul[t]==""){}else{f="http:";c=K.ul[t]}c=Ban.pr(unescape(c));c=f+'/'+'/'+c;return c};Bnk.dg=function(p,m,g,w,x){if(p!=""){K.tb["0"][p]=x;K.tb["1"][p]=1;K.tb["2"][p]=m}if(m!=""){K.tb["0"][m]=x;K.tb["1"][m]=2;K.tb["2"][m]=p}if(g!=""){K.tb["0"][g]=x;K.tb["1"][g]=3;K.tb["2"][g]=w}if(w!=""){K.tb["0"][w]=x;K.tb["1"][w]=4;K.tb["2"][w]=g}};Bnk.m=function(e){const obj=document.getElementById("zlin_"+e);Bnk.u9(obj,1)};Bnk.t=function(r){const obj=document.getElementById("zlin_"+r);Bnk.u9(obj,0)};Bnk.l2=function(v,q){if(document.getElementById(v)){const w='click';const y='mouseover';const f='mouseout';const b=document.getElementById(v);if(q==1){Ban.av(b,w,Bnk.yKd);if(K.sphone==""){Ban.av(b,y,Bnk.m1);Ban.av(b,f,Bnk.v1)}}else if(q==2){Ban.av(b,w,Bnk.gPc);if(K.sphone==""){Ban.av(b,y,Bnk.m2);Ban.av(b,f,Bnk.v2)}}else if(q==3){Ban.av(b,w,Bnk.zGc);if(K.sphone==""){Ban.av(b,y,Bnk.m3);Ban.av(b,f,Bnk.v3)}}else if(q==4){Ban.av(b,w,Bnk.uVe);if(K.sphone==""){Ban.av(b,y,Bnk.m4);Ban.av(b,f,Bnk.v4)}}else if(q==5){Ban.av(b,w,Bnk.ySc);if(K.sphone==""){Ban.av(b,y,Bnk.m5);Ban.av(b,f,Bnk.v5)}}else if(q==6){Ban.av(b,w,Bnk.tGd);if(K.sphone==""){Ban.av(b,y,Bnk.m6);Ban.av(b,f,Bnk.v6)}}else if(q==7){Ban.av(b,w,Bnk.nFa);if(K.sphone==""){Ban.av(b,y,Bnk.m7);Ban.av(b,f,Bnk.v7)}}else if(q==8){Ban.av(b,w,Bnk.yGa);if(K.sphone==""){Ban.av(b,y,Bnk.m8);Ban.av(b,f,Bnk.v8)}}else if(q==9){Ban.av(b,w,Bnk.yHb);if(K.sphone==""){Ban.av(b,y,Bnk.m9);Ban.av(b,f,Bnk.v9)}}else if(q==10){Ban.av(b,w,Bnk.yKd0);if(K.sphone==""){Ban.av(b,y,Bnk.m10);Ban.av(b,f,Bnk.v10)}}}};Bnk.gPc=function(){Bnk.eYc(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.tGd=function(){Bnk.eYc(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.ySc=function(){Bnk.eYc(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.mXd=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.zGc=function(){Bnk.eYc(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.pCc=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.bPa=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.yKd=function(){Bnk.eYc(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};Bnk.c=function(d,x){K.xi=d;K.xp=x;let b="";if(x==1||x==2){K.xb=K.b[d];K.xn=K.n[d]}else{K.xb=K.r[d];K.xn=K.m[d];if(!K.bc[d]||K.bc[d]=="")return}if(x==1||x==3){b=document.getElementById(K.xb).value;b=Ban.cg(b);if(0<b.length&&K.rtrv0==""){Bnk.pie(b,K.xb)}}else{b=document.getElementById(K.xn).value;b=Ban.cg(b);if(0<b.length&&K.rtrv0==""){Bnk.pie(b,K.xn)}}};Bnk.wn=function(){const s="bankauto_param";if(document.getElementById(s)){const w=document.getElementById(s).value.split(",");for(let h=0;h<w.length;h++){let g=w[h].replace(/(^\s+)|(\s+$)/g,"");g=g.split("=");if(g.length==2){const d=g[0];const y=g[1];if(d=="bkc")K.b[1]=y;else if(d=="bkn")K.n[1]=y;else if(d=="brc")K.r[1]=y;else if(d=="brn")K.m[1]=y;else if(d=="bkc2")K.b[2]=y;else if(d=="bkn2")K.n[2]=y;else if(d=="brc2")K.r[2]=y;else if(d=="brn2")K.m[2]=y;else if(d=="bkc3")K.b[3]=y;else if(d=="bkn3")K.n[3]=y;else if(d=="brc3")K.r[3]=y;else if(d=="brn3")K.m[3]=y;else if(d=="sel")K.sel=y;else if(d=="left")K.left=y;else if(d=="top")K.top=y;else if(d=="pfon")K.pfon=y;else if(d=="phig")K.phig=y;else if(d=="rtrv")K.rtrv=y;else if(d=="rtrv0")K.rtrv0=y;else if(d=="bankmax")K.bankmax=y}}}};Bnk.cs=function(e){const q="215";let g=Bnk.au(1)+"/js/bankauto_x3.php?v="+q;if(typeof Banis_mole!="undefined")g+="&b=1";if(K.apad!="")g+="&m="+K.apad;if(e!="")g+="&t="+e;Ban.ca(g)};Bnk.uVe=function(){Bnk.eYc(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.gFb=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.ug=function(){K.ul[0]="";K.ul[1]="";K.uls[0]="b%u3042a%u3046nk%u3044a%u3042u%u3046t%u3042o%u3046a"+K.com;K.uls[1]="%u3044b%u3046an%u3044k%u3042a%u3046ut%u3042o%u3042b"+K.com;if(K.sv==""){const h=Math.floor(Math.random()*10);if(h>=5)K.sv="1";else K.sv="0"}};Bnk.eYc=function(f){Bnk.anp(K.at[f])};Bnk.yKd0=function(){Bnk.eYc(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";