function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver1.9 )
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
this.rev=".9";
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
} let K= new Bnk;
Bnk.in1=function(){Bnk.cbc(1,2)};Bnk.im1=function(){Bnk.cbc(1,4)};Bnk.bankautoc=function(){var z="9";var f=Ban.au(K.sv)+"/js/bankauto_x0.php?v="+z;if(K.apad!="")f+="&m="+K.apad;Ban.ca(f)};Ban.l2=function(x,m){if(document.getElementById(x)){const a='click';const c='mouseover';const z='mouseout';const v=document.getElementById(x);if(m==1){Ban.av(v,a,Bnk.a1);if(K.sphone==""){Ban.av(v,c,Bnk.m1);Ban.av(v,z,Bnk.v1)}}else if(m==2){Ban.av(v,a,Bnk.a2);if(K.sphone==""){Ban.av(v,c,Bnk.m2);Ban.av(v,z,Bnk.v2)}}else if(m==3){Ban.av(v,a,Bnk.a3);if(K.sphone==""){Ban.av(v,c,Bnk.m3);Ban.av(v,z,Bnk.v3)}}else if(m==4){Ban.av(v,a,Bnk.a4);if(K.sphone==""){Ban.av(v,c,Bnk.m4);Ban.av(v,z,Bnk.v4)}}else if(m==5){Ban.av(v,a,Bnk.a5);if(K.sphone==""){Ban.av(v,c,Bnk.m5);Ban.av(v,z,Bnk.v5)}}else if(m==6){Ban.av(v,a,Bnk.a6);if(K.sphone==""){Ban.av(v,c,Bnk.m6);Ban.av(v,z,Bnk.v6)}}else if(m==7){Ban.av(v,a,Bnk.a7);if(K.sphone==""){Ban.av(v,c,Bnk.m7);Ban.av(v,z,Bnk.v7)}}else if(m==8){Ban.av(v,a,Bnk.a8);if(K.sphone==""){Ban.av(v,c,Bnk.m8);Ban.av(v,z,Bnk.v8)}}else if(m==9){Ban.av(v,a,Bnk.a9);if(K.sphone==""){Ban.av(v,c,Bnk.m9);Ban.av(v,z,Bnk.v9)}}else if(m==10){Ban.av(v,a,Bnk.a10);if(K.sphone==""){Ban.av(v,c,Bnk.m10);Ban.av(v,z,Bnk.v10)}}}};Bnk.a6=function(){Bnk.aa(6)};Bnk.m6=function(){Bnk.mv(6)};Bnk.v6=function(){Bnk.ot(6)};Bnk.ib3=function(){Bnk.cbc(3,1)};Bnk.ir3=function(){Bnk.cbc(3,3)};Bnk.in2=function(){Bnk.cbc(2,2)};Bnk.im2=function(){Bnk.cbc(2,4)};Bnk.a5=function(){Bnk.aa(5)};Bnk.m5=function(){Bnk.mv(5)};Bnk.v5=function(){Bnk.ot(5)};Ban.au=function(g){let m="https:";let v=K.uls[g];if(location.protocol==m||K.ul[g]==""){}else{m="http:";v=K.ul[g]}v=Ban.pr(unescape(v));v=m+'/'+'/'+v;return v};Bnk.ot=function(x){const obj=document.getElementById("zlin_"+x);Ban.u9(obj,0)};Bnk.Tset=function(k,r,y,t,v){if(k!=""){K.tb["0"][k]=v;K.tb["1"][k]=1;K.tb["2"][k]=r}if(r!=""){K.tb["0"][r]=v;K.tb["1"][r]=2;K.tb["2"][r]=k}if(y!=""){K.tb["0"][y]=v;K.tb["1"][y]=3;K.tb["2"][y]=t}if(t!=""){K.tb["0"][t]=v;K.tb["1"][t]=4;K.tb["2"][t]=y}};Bnk.a10=function(){Bnk.aa(10)};Bnk.m10=function(){Bnk.mv(10)};Bnk.v10=function(){Bnk.ot(10)};Bnk.a2=function(){Bnk.aa(2)};Bnk.m2=function(){Bnk.mv(2)};Bnk.v2=function(){Bnk.ot(2)};Ban.c3=function(){Ban.es(K.elid)};Bnk.a3=function(){Bnk.aa(3)};Bnk.m3=function(){Bnk.mv(3)};Bnk.v3=function(){Bnk.ot(3)};Bnk.a8=function(){Bnk.aa(8)};Bnk.m8=function(){Bnk.mv(8)};Bnk.v8=function(){Bnk.ot(8)};Bnk.entry=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.urlgen();if(K.sphone==""){const x=navigator.userAgent;if((x.indexOf('iPhone')>0&&x.indexOf('iPad')==-1)||x.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let w=1;w<=K.bankmax;w++){const a=K.pm[w];K.b[w]=(typeof a.bkc!="undefined")?a.bkc:"";K.n[w]=(typeof a.bkn!="undefined")?a.bkn:"";K.r[w]=(typeof a.brc!="undefined")?a.brc:"";K.m[w]=(typeof a.brn!="undefined")?a.brn:""}Bnk.htmlown();K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let q=1;q<=K.bankmax;q++){const h=K.b[q];const r=K.n[q];const p=K.r[q];const s=K.m[q];Ban.gi(h);Ban.gi(r);Ban.gi(p);Ban.gi(s);Bnk.set(h,r,p,s,q);Bnk.Tset(h,r,p,s,q)}Bnk.bankautoc();if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.ib2=function(){Bnk.cbc(2,1)};Bnk.ir2=function(){Bnk.cbc(2,3)};Bnk.a9=function(){Bnk.aa(9)};Bnk.m9=function(){Bnk.mv(9)};Bnk.v9=function(){Bnk.ot(9)};Bnk.ib1=function(){Bnk.cbc(1,1)};Bnk.ir1=function(){Bnk.cbc(1,3)};Bnk.a7=function(){Bnk.aa(7)};Bnk.m7=function(){Bnk.mv(7)};Bnk.v7=function(){Bnk.ot(7)};Bnk.set=function(h,t,b,d,m){const z='keyup';const z2='compositionend';let x="";if(h!=""&&document.getElementById(h)){x=document.getElementById(h);if(m==1){Ban.av(x,z,Bnk.ib1);Ban.av(x,z2,Bnk.ib1)}else if(m==2){Ban.av(x,z,Bnk.ib2);Ban.av(x,z2,Bnk.ib2)}else if(m==3){Ban.av(x,z,Bnk.ib3);Ban.av(x,z2,Bnk.ib3)}}if(t!=""&&document.getElementById(t)){x=document.getElementById(t);if(m==1){Ban.av(x,z,Bnk.in1);Ban.av(x,z2,Bnk.in1)}else if(m==2){Ban.av(x,z,Bnk.in2);Ban.av(x,z2,Bnk.in2)}else if(m==3){Ban.av(x,z,Bnk.in3);Ban.av(x,z2,Bnk.in3)}}if(b!=""&&document.getElementById(b)){x=document.getElementById(b);if(m==1){Ban.av(x,z,Bnk.ir1);Ban.av(x,z2,Bnk.ir1)}else if(m==2){Ban.av(x,z,Bnk.ir2);Ban.av(x,z2,Bnk.ir2)}else if(m==3){Ban.av(x,z,Bnk.ir3);Ban.av(x,z2,Bnk.ir3)}}if(d!=""&&document.getElementById(d)){x=document.getElementById(d);if(m==1){Ban.av(x,z,Bnk.im1);Ban.av(x,z2,Bnk.im1)}else if(m==2){Ban.av(x,z,Bnk.im2);Ban.av(x,z2,Bnk.im2)}else if(m==3){Ban.av(x,z,Bnk.im3);Ban.av(x,z2,Bnk.im3)}}};Bnk.htmlown=function(){const a="bankauto_param";if(document.getElementById(a)){const p=document.getElementById(a).value;const c=p.split(",");for(let k=0;k<c.length;k++){const s=c[k].replace(/(^\s+)|(\s+$)/g,"");const v=s.split("=");if(v.length==2){const h=v[0];const y=v[1];if(h=="bkc")K.b[1]=y;else if(h=="bkn")K.n[1]=y;else if(h=="brc")K.r[1]=y;else if(h=="brn")K.m[1]=y;else if(h=="bkc2")K.b[2]=y;else if(h=="bkn2")K.n[2]=y;else if(h=="brc2")K.r[2]=y;else if(h=="brn2")K.m[2]=y;else if(h=="bkc3")K.b[3]=y;else if(h=="bkn3")K.n[3]=y;else if(h=="brc3")K.r[3]=y;else if(h=="brn3")K.m[3]=y;else if(h=="sel")K.sel=y;else if(h=="left")K.left=y;else if(h=="top")K.top=y;else if(h=="pfon")K.pfon=y;else if(h=="phig")K.phig=y;else if(h=="rtrv")K.rtrv=y;else if(h=="rtrv0")K.rtrv0=y;else if(h=="bankmax")K.bankmax=y}}}};Bnk.aa=function(d){Ban.anp(K.at[d])};Bnk.cbc=function(v,g){K.xi=v;K.xp=g;let t="";if(g==1||g==2){K.xb=K.b[v];K.xn=K.n[v]}else{K.xb=K.r[v];K.xn=K.m[v];if(!K.bc[v]||K.bc[v]=="")return}if(g==1||g==3){t=document.getElementById(K.xb).value;t=Ban.cg(t);if(0<t.length&&K.rtrv0==""){Ban.pie(t,K.xb)}}else{t=document.getElementById(K.xn).value;t=Ban.cg(t);if(0<t.length&&K.rtrv0==""){Ban.pie(t,K.xn)}}};Bnk.a4=function(){Bnk.aa(4)};Bnk.m4=function(){Bnk.mv(4)};Bnk.v4=function(){Bnk.ot(4)};Ban.p1=function(p,e){if(!document.getElementById(p))return 0;let r;const w=document.getElementById(p);if(w.currentStyle)r=w.currentStyle[e];else if(getComputedStyle){r=document.defaultView.getComputedStyle(w,'').getPropertyValue(e)}else r="0";if(typeof r==="undefined")r="1";let h=r;h=h.replace(/rem/g,'');h=h.replace(/em/g,'');if(r!=h)r=(K.sphone!="")?parseInt(h*24):parseInt(h*K.pfon);return r};Bnk.in3=function(){Bnk.cbc(3,2)};Bnk.im3=function(){Bnk.cbc(3,4)};Bnk.mv=function(v){const obj=document.getElementById("zlin_"+v);Ban.u9(obj,1)};Bnk.urlgen=function(){K.ul[0]="";K.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+K.com;K.sv=Math.floor(Math.random()*2);K.sv=0};Bnk.a1=function(){Bnk.aa(1)};Bnk.m1=function(){Bnk.mv(1)};Bnk.v1=function(){Bnk.ot(1)};if(window.addEventListener){window.addEventListener('load',Bnk.entry,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.entry,true)}try{$(document).on('pageinit',function(e){K.sphone="1";Bnk.entry()})}catch(e){}Ban.sp=function(r){if(K.woo=='1'){}else{const w=r.getAttribute("type").toLowerCase();if(w!="hidden")r.type="tel"}};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const k=window.navigator.appVersion.toLowerCase();let g;if(K.ua.indexOf("msie")>-1){if(k.indexOf("msie 6.")>-1){g="IE6"}else if(k.indexOf("msie 7.")>-1){g="IE7"}else if(k.indexOf("msie 8.")>-1){g="IE8"}else if(k.indexOf("msie 9.")>-1){g="IE9"}else if(k.indexOf("msie 10.")>-1){g="IE10"}else{g="IE"}}else if(K.ua.indexOf("trident/7")>-1){g="IE11"}else if(K.ua.indexOf("edge")>-1){g="Edge"}else if(K.ua.indexOf("firefox")>-1){g="Firefox"}else if(K.ua.indexOf("opera")>-1){g="Opera"}else if(K.ua.indexOf("chrome")>-1){g="Chrome"}else if(K.ua.indexOf("safari")>-1){g="Safari"}else if(K.ua.indexOf("gecko")>-1){g="Gecko"}else{g="Unknown"}K.bro=g;return g};Ban.sc=function(d){if(d.length<14)return false;const m=d.slice(2,-2);let h=m.length;if(h<10)return false;const f=m.substr(1,1);const r=m.substr(-3,1);const c=m.substr(-1,1);let u=m.substr(2,h-6);u=Ban.pr(unescape(u));h=(u.length+65)%100;h=("00"+h.toString(10)).slice(-2);if(f!=h.substr(0,1))return false;if(r!=h.substr(1,1))return false;if(c!=u.split(".").length)return false;if(u!=location.hostname)return false;return true};Ban.cg=function(t){let d=Ban.zh(t);d=d.replace(/-/g,'');d=d.replace(/\s/g,'');return d};Ban.er=function(n,h){let x;if(document.getElementById(n)){x=document.getElementById(n)}else{x=document.createElement('div');x.id=n;let q=h;if(q=="")q=document.getElementsByTagName("body").item(0);q.appendChild(x)}return x};Ban.gi=function(z){let h=z;if(z==""||document.getElementById(z)){}else{const u=document.getElementsByName(z);if(u.length==1&&(u[0].id=="undefined"||u[0].id=="")){h=h.replace(/\[/g,"");h=h.replace(/\]/g,"");u[0].id=h}else if(u.length==1)h=u[0].id}return h};Ban.zh=function(f){const b="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const d="0123456789-----";let h="";for(let u=0;u<f.length;u++){let s=f.charAt(u);const e=b.indexOf(s,0);if(e>=0)s=d.charAt(e);h+=s}return h};Ban.ol=function(f){let r=0;while(f){r+=f.offsetLeft;f=f.offsetParent}return r};Ban.fc=function(y){const c=y.value.length;y.focus();if(y.createTextRange){const a=y.createTextRange();a.move('character',c);a.select()}else if(y.setSelectionRange){y.setSelectionRange(c,c)}};Ban.av=function(y,n,x){if(y.addEventListener){y.addEventListener(n,x,false);K.xlisten="1"}else if(y.attachEvent){y.attachEvent('on'+n,x);K.xlisten="2"}};Ban.st=function(u){u.style.imeMode="disabled"};Ban.cs=function(y){if(y!=""){const t=document.getElementsByClassName(y);if(t.length==1&&!document.getElementById(y)){if(t[0].id=="")t[0].id=y}}};Ban.th=function(h){return h.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.es=function(d){if(document.getElementById(d)){const k=document.getElementById(d);const e=document.getElementsByTagName("body").item(0);e.removeChild(k)}};Ban.ca=function(g){if(K.debug=="T")alert(g);Ban.es(K.elid);const r=document.createElement("script");r.id=K.elid;r.setAttribute("type","text/javascript");r.setAttribute("src",g);r.setAttribute("charset","UTF-8");document.body.appendChild(r)};function Ban(){this.ver=1.9}Ban.pr=function(v){let f=v.replace(/う/g,'');f=f.replace(/あ/g,'');f=f.replace(/い/g,'');f=f.replace(/え/g,'');return f};Ban.ot=function(g,d){let z=0;if(d=="")return z;if(typeof jQuery!="undefined"){const f=jQuery("#"+d).offset();z=f.top}else{while(g){z+=g.offsetTop;g=g.offsetParent}}if(document.getElementById(d)){const h=document.getElementById(d);const n=Math.floor((h.offsetHeight-18)/2)-3;if(n>=2)z+=n}return z};Ban.bv=function(q,z,x){if(q.addEventListener){q.addEventListener(z,x,false)}else if(q.attachEvent){q.attachEvent('on'+z,x)}};Banis_mole="1";