function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver2.13 )
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
this.rev=".13";
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
Bnk.vVd=function(d){Bnk.anp(K.at[d])};Bnk.xRd=function(){Bnk.vVd(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.nNd=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.pWc=function(){Bnk.vVd(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.dg=function(n,t,m,b,f){if(n!=""){K.tb["0"][n]=f;K.tb["1"][n]=1;K.tb["2"][n]=t}if(t!=""){K.tb["0"][t]=f;K.tb["1"][t]=2;K.tb["2"][t]=n}if(m!=""){K.tb["0"][m]=f;K.tb["1"][m]=3;K.tb["2"][m]=b}if(b!=""){K.tb["0"][b]=f;K.tb["1"][b]=4;K.tb["2"][b]=m}};Bnk.xBe=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.m=function(h){const obj=document.getElementById("zlin_"+h);Bnk.u9(obj,1)};Bnk.c=function(g,u){K.xi=g;K.xp=u;let x="";if(u==1||u==2){K.xb=K.b[g];K.xn=K.n[g]}else{K.xb=K.r[g];K.xn=K.m[g];if(!K.bc[g]||K.bc[g]=="")return}if(u==1||u==3){x=document.getElementById(K.xb).value;x=Ban.cg(x);if(0<x.length&&K.rtrv0==""){Bnk.pie(x,K.xb)}}else{x=document.getElementById(K.xn).value;x=Ban.cg(x);if(0<x.length&&K.rtrv0==""){Bnk.pie(x,K.xn)}}};Bnk.gUb=function(){Bnk.vVd(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.cUb=function(){Bnk.vVd(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.s=function(t,w,u,b,s){const p='keyup';const y='compositionend';let q="";let x="";if(t!=""&&document.getElementById(t)){x=document.getElementById(t);if(s==1){Ban.av(x,p,Bnk.xBe);Ban.av(x,y,Bnk.xBe);q="1"}else if(s==2){Ban.av(x,p,Bnk.dYa);Ban.av(x,y,Bnk.dYa);q="1"}else if(s==3){Ban.av(x,p,Bnk.nQd);Ban.av(x,y,Bnk.nQd);q="1"}}if(w!=""&&document.getElementById(w)){x=document.getElementById(w);if(s==1){Ban.av(x,p,Bnk.nNd);Ban.av(x,y,Bnk.nNd);q="1"}else if(s==2){Ban.av(x,p,Bnk.hEe);Ban.av(x,y,Bnk.hEe);q="1"}else if(s==3){Ban.av(x,p,Bnk.qSd);Ban.av(x,y,Bnk.qSd);q="1"}}if(u!=""&&document.getElementById(u)){x=document.getElementById(u);if(s==1){Ban.av(x,p,Bnk.ir1);Ban.av(x,y,Bnk.ir1);q="1"}else if(s==2){Ban.av(x,p,Bnk.ir2);Ban.av(x,y,Bnk.ir2);q="1"}else if(s==3){Ban.av(x,p,Bnk.ir3);Ban.av(x,y,Bnk.ir3);q="1"}}if(b!=""&&document.getElementById(b)){x=document.getElementById(b);if(s==1){Ban.av(x,p,Bnk.im1);Ban.av(x,y,Bnk.im1);q="1"}else if(s==2){Ban.av(x,p,Bnk.im2);Ban.av(x,y,Bnk.im2);q="1"}else if(s==3){Ban.av(x,p,Bnk.im3);Ban.av(x,y,Bnk.im3);q="1"}}return q};Bnk.sQa=function(){Bnk.vVd(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.pUb=function(){Bnk.vVd(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();if(K.sphone==""){const c=navigator.userAgent;if((c.indexOf('iPhone')>0&&c.indexOf('iPad')==-1)||c.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let u=1;u<=K.bankmax;u++){const h=K.pm[u];K.b[u]=(typeof h.bkc!="undefined")?h.bkc:"";K.n[u]=(typeof h.bkn!="undefined")?h.bkn:"";K.r[u]=(typeof h.brc!="undefined")?h.brc:"";K.m[u]=(typeof h.brn!="undefined")?h.brn:""}Bnk.wn();let x="";let k="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let a=1;a<=K.bankmax;a++){const e=K.b[a];const m=K.n[a];const t=K.r[a];const w=K.m[a];Ban.gi(e);Ban.gi(m);Ban.gi(t);Ban.gi(w);const z=Bnk.s(e,m,t,w,a);if(z=="1")x="1";Bnk.dg(e,m,t,w,a);k+=e+m+t+w+a}if(x=="1")Bnk.cs(k);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.hEe=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.wn=function(){const h="bankauto_param";if(document.getElementById(h)){const u=document.getElementById(h).value.split(",");for(let v=0;v<u.length;v++){let y=u[v].replace(/(^\s+)|(\s+$)/g,"");y=y.split("=");if(y.length==2){const m=y[0];const s=y[1];if(m=="bkc")K.b[1]=s;else if(m=="bkn")K.n[1]=s;else if(m=="brc")K.r[1]=s;else if(m=="brn")K.m[1]=s;else if(m=="bkc2")K.b[2]=s;else if(m=="bkn2")K.n[2]=s;else if(m=="brc2")K.r[2]=s;else if(m=="brn2")K.m[2]=s;else if(m=="bkc3")K.b[3]=s;else if(m=="bkn3")K.n[3]=s;else if(m=="brc3")K.r[3]=s;else if(m=="brn3")K.m[3]=s;else if(m=="sel")K.sel=s;else if(m=="left")K.left=s;else if(m=="top")K.top=s;else if(m=="pfon")K.pfon=s;else if(m=="phig")K.phig=s;else if(m=="rtrv")K.rtrv=s;else if(m=="rtrv0")K.rtrv0=s;else if(m=="bankmax")K.bankmax=s}}}};Bnk.l2=function(e,r){if(document.getElementById(e)){const q='click';const z='mouseover';const f='mouseout';const n=document.getElementById(e);if(r==1){Ban.av(n,q,Bnk.yZd);if(K.sphone==""){Ban.av(n,z,Bnk.m1);Ban.av(n,f,Bnk.v1)}}else if(r==2){Ban.av(n,q,Bnk.gUb);if(K.sphone==""){Ban.av(n,z,Bnk.m2);Ban.av(n,f,Bnk.v2)}}else if(r==3){Ban.av(n,q,Bnk.cUb);if(K.sphone==""){Ban.av(n,z,Bnk.m3);Ban.av(n,f,Bnk.v3)}}else if(r==4){Ban.av(n,q,Bnk.pWc);if(K.sphone==""){Ban.av(n,z,Bnk.m4);Ban.av(n,f,Bnk.v4)}}else if(r==5){Ban.av(n,q,Bnk.sQa);if(K.sphone==""){Ban.av(n,z,Bnk.m5);Ban.av(n,f,Bnk.v5)}}else if(r==6){Ban.av(n,q,Bnk.xRd);if(K.sphone==""){Ban.av(n,z,Bnk.m6);Ban.av(n,f,Bnk.v6)}}else if(r==7){Ban.av(n,q,Bnk.pFb);if(K.sphone==""){Ban.av(n,z,Bnk.m7);Ban.av(n,f,Bnk.v7)}}else if(r==8){Ban.av(n,q,Bnk.pDb);if(K.sphone==""){Ban.av(n,z,Bnk.m8);Ban.av(n,f,Bnk.v8)}}else if(r==9){Ban.av(n,q,Bnk.cFd);if(K.sphone==""){Ban.av(n,z,Bnk.m9);Ban.av(n,f,Bnk.v9)}}else if(r==10){Ban.av(n,q,Bnk.pUb);if(K.sphone==""){Ban.av(n,z,Bnk.m10);Ban.av(n,f,Bnk.v10)}}}};Bnk.nQd=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.dYa=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.au=function(h){let c="https:";let m=K.uls[h];if(location.protocol==c||K.ul[h]==""){}else{c="http:";m=K.ul[h]}m=Ban.pr(unescape(m));m=c+'/'+'/'+m;return m};Bnk.cs=function(v){const f="213";let s=Bnk.au(K.sv)+"/js/bankauto_x3.php?v="+f;if(typeof Banis_mole!="undefined")s+="&b=1";if(K.apad!="")s+="&m="+K.apad;if(v!="")s+="&t="+v;Ban.ca(s)};Bnk.cFd=function(){Bnk.vVd(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.ug=function(){K.ul[0]="";K.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+K.com;K.sv=Math.floor(Math.random()*10);K.sv=0};Bnk.t=function(y){const obj=document.getElementById("zlin_"+y);Bnk.u9(obj,0)};Bnk.qSd=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.pDb=function(){Bnk.vVd(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.pFb=function(){Bnk.vVd(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.c3=function(){Ban.es(K.elid)};Bnk.yZd=function(){Bnk.vVd(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";