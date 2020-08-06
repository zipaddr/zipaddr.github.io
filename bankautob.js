function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver2.14 )
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
this.rev=".14";
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
Bnk.c=function(w,m){K.xi=w;K.xp=m;let b="";if(m==1||m==2){K.xb=K.b[w];K.xn=K.n[w]}else{K.xb=K.r[w];K.xn=K.m[w];if(!K.bc[w]||K.bc[w]=="")return}if(m==1||m==3){b=document.getElementById(K.xb).value;b=Ban.cg(b);if(0<b.length&&K.rtrv0==""){Bnk.pie(b,K.xb)}}else{b=document.getElementById(K.xn).value;b=Ban.cg(b);if(0<b.length&&K.rtrv0==""){Bnk.pie(b,K.xn)}}};Bnk.yDb=function(){Bnk.zGa(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};Bnk.bUc=function(){Bnk.zGa(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.yNa=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.xQc=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.sEc=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.wn=function(){const u="bankauto_param";if(document.getElementById(u)){const s=document.getElementById(u).value.split(",");for(let a=0;a<s.length;a++){let q=s[a].replace(/(^\s+)|(\s+$)/g,"");q=q.split("=");if(q.length==2){const g=q[0];const b=q[1];if(g=="bkc")K.b[1]=b;else if(g=="bkn")K.n[1]=b;else if(g=="brc")K.r[1]=b;else if(g=="brn")K.m[1]=b;else if(g=="bkc2")K.b[2]=b;else if(g=="bkn2")K.n[2]=b;else if(g=="brc2")K.r[2]=b;else if(g=="brn2")K.m[2]=b;else if(g=="bkc3")K.b[3]=b;else if(g=="bkn3")K.n[3]=b;else if(g=="brc3")K.r[3]=b;else if(g=="brn3")K.m[3]=b;else if(g=="sel")K.sel=b;else if(g=="left")K.left=b;else if(g=="top")K.top=b;else if(g=="pfon")K.pfon=b;else if(g=="phig")K.phig=b;else if(g=="rtrv")K.rtrv=b;else if(g=="rtrv0")K.rtrv0=b;else if(g=="bankmax")K.bankmax=b}}}};Bnk.zGa=function(p){Bnk.anp(K.at[p])};Bnk.t=function(z){const obj=document.getElementById("zlin_"+z);Bnk.u9(obj,0)};Bnk.cs=function(g){const y="214";let a=Bnk.au(K.sv)+"/js/bankauto_x3.php?v="+y;if(typeof Banis_mole!="undefined")a+="&b=1";if(K.apad!="")a+="&m="+K.apad;if(g!="")a+="&t="+g;Ban.ca(a)};Bnk.kEa=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.xVd=function(){Bnk.zGa(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.sYb=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.ug=function(){K.ul[0]="";K.uls[0]="b%u3044a%u3046nk%u3044-%u3042a%u3046u%u3042to"+K.com;K.sv=Math.floor(Math.random()*10);K.sv=0};Bnk.dTe=function(){Bnk.zGa(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();if(K.sphone==""){const h=navigator.userAgent;if((h.indexOf('iPhone')>0&&h.indexOf('iPad')==-1)||h.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let n=1;n<=K.bankmax;n++){const g=K.pm[n];K.b[n]=(typeof g.bkc!="undefined")?g.bkc:"";K.n[n]=(typeof g.bkn!="undefined")?g.bkn:"";K.r[n]=(typeof g.brc!="undefined")?g.brc:"";K.m[n]=(typeof g.brn!="undefined")?g.brn:""}Bnk.wn();let d="";let v="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let k=1;k<=K.bankmax;k++){const b=K.b[k];const c=K.n[k];const z=K.r[k];const f=K.m[k];Ban.gi(b);Ban.gi(c);Ban.gi(z);Ban.gi(f);const w=Bnk.s(b,c,z,f,k);if(w=="1")d="1";Bnk.dg(b,c,z,f,k);v+=b+c+z+f+k}if(d=="1")Bnk.cs(v);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.uGa=function(){Bnk.zGa(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};Bnk.nUe=function(){Bnk.zGa(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.aFb=function(){Bnk.zGa(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.qXe=function(){Bnk.zGa(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.l2=function(z,w){if(document.getElementById(z)){const t='click';const n='mouseover';const a='mouseout';const k=document.getElementById(z);if(w==1){Ban.av(k,t,Bnk.uGa);if(K.sphone==""){Ban.av(k,n,Bnk.m1);Ban.av(k,a,Bnk.v1)}}else if(w==2){Ban.av(k,t,Bnk.cEb);if(K.sphone==""){Ban.av(k,n,Bnk.m2);Ban.av(k,a,Bnk.v2)}}else if(w==3){Ban.av(k,t,Bnk.eRb);if(K.sphone==""){Ban.av(k,n,Bnk.m3);Ban.av(k,a,Bnk.v3)}}else if(w==4){Ban.av(k,t,Bnk.dTe);if(K.sphone==""){Ban.av(k,n,Bnk.m4);Ban.av(k,a,Bnk.v4)}}else if(w==5){Ban.av(k,t,Bnk.xVd);if(K.sphone==""){Ban.av(k,n,Bnk.m5);Ban.av(k,a,Bnk.v5)}}else if(w==6){Ban.av(k,t,Bnk.aFb);if(K.sphone==""){Ban.av(k,n,Bnk.m6);Ban.av(k,a,Bnk.v6)}}else if(w==7){Ban.av(k,t,Bnk.nUe);if(K.sphone==""){Ban.av(k,n,Bnk.m7);Ban.av(k,a,Bnk.v7)}}else if(w==8){Ban.av(k,t,Bnk.qXe);if(K.sphone==""){Ban.av(k,n,Bnk.m8);Ban.av(k,a,Bnk.v8)}}else if(w==9){Ban.av(k,t,Bnk.bUc);if(K.sphone==""){Ban.av(k,n,Bnk.m9);Ban.av(k,a,Bnk.v9)}}else if(w==10){Ban.av(k,t,Bnk.yDb);if(K.sphone==""){Ban.av(k,n,Bnk.m10);Ban.av(k,a,Bnk.v10)}}}};Bnk.s=function(a,n,u,r,g){const h='keyup';const e='compositionend';let y="";let b="";if(a!=""&&document.getElementById(a)){b=document.getElementById(a);if(g==1){Ban.av(b,h,Bnk.sEc);Ban.av(b,e,Bnk.sEc);y="1"}else if(g==2){Ban.av(b,h,Bnk.yNa);Ban.av(b,e,Bnk.yNa);y="1"}else if(g==3){Ban.av(b,h,Bnk.zXa);Ban.av(b,e,Bnk.zXa);y="1"}}if(n!=""&&document.getElementById(n)){b=document.getElementById(n);if(g==1){Ban.av(b,h,Bnk.xQc);Ban.av(b,e,Bnk.xQc);y="1"}else if(g==2){Ban.av(b,h,Bnk.kEa);Ban.av(b,e,Bnk.kEa);y="1"}else if(g==3){Ban.av(b,h,Bnk.sYb);Ban.av(b,e,Bnk.sYb);y="1"}}if(u!=""&&document.getElementById(u)){b=document.getElementById(u);if(g==1){Ban.av(b,h,Bnk.ir1);Ban.av(b,e,Bnk.ir1);y="1"}else if(g==2){Ban.av(b,h,Bnk.ir2);Ban.av(b,e,Bnk.ir2);y="1"}else if(g==3){Ban.av(b,h,Bnk.ir3);Ban.av(b,e,Bnk.ir3);y="1"}}if(r!=""&&document.getElementById(r)){b=document.getElementById(r);if(g==1){Ban.av(b,h,Bnk.im1);Ban.av(b,e,Bnk.im1);y="1"}else if(g==2){Ban.av(b,h,Bnk.im2);Ban.av(b,e,Bnk.im2);y="1"}else if(g==3){Ban.av(b,h,Bnk.im3);Ban.av(b,e,Bnk.im3);y="1"}}return y};Bnk.dg=function(x,h,q,e,r){if(x!=""){K.tb["0"][x]=r;K.tb["1"][x]=1;K.tb["2"][x]=h}if(h!=""){K.tb["0"][h]=r;K.tb["1"][h]=2;K.tb["2"][h]=x}if(q!=""){K.tb["0"][q]=r;K.tb["1"][q]=3;K.tb["2"][q]=e}if(e!=""){K.tb["0"][e]=r;K.tb["1"][e]=4;K.tb["2"][e]=q}};Bnk.m=function(y){const obj=document.getElementById("zlin_"+y);Bnk.u9(obj,1)};Bnk.cEb=function(){Bnk.zGa(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.au=function(m){let w="https:";let c=K.uls[m];if(location.protocol==w||K.ul[m]==""){}else{w="http:";c=K.ul[m]}c=Ban.pr(unescape(c));c=w+'/'+'/'+c;return c};Bnk.eRb=function(){Bnk.zGa(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.zXa=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.c3=function(){Ban.es(K.elid)};if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";