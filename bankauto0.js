function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto0.js Ver1.10 )
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
this.rev=".10";
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
Ban.l2=function(z,n){if(document.getElementById(z)){const m='click';const p='mouseover';const e='mouseout';const s=document.getElementById(z);if(n==1){Ban.av(s,m,Bnk.a1);if(K.sphone==""){Ban.av(s,p,Bnk.m1);Ban.av(s,e,Bnk.v1)}}else if(n==2){Ban.av(s,m,Bnk.a2);if(K.sphone==""){Ban.av(s,p,Bnk.m2);Ban.av(s,e,Bnk.v2)}}else if(n==3){Ban.av(s,m,Bnk.a3);if(K.sphone==""){Ban.av(s,p,Bnk.m3);Ban.av(s,e,Bnk.v3)}}else if(n==4){Ban.av(s,m,Bnk.a4);if(K.sphone==""){Ban.av(s,p,Bnk.m4);Ban.av(s,e,Bnk.v4)}}else if(n==5){Ban.av(s,m,Bnk.a5);if(K.sphone==""){Ban.av(s,p,Bnk.m5);Ban.av(s,e,Bnk.v5)}}else if(n==6){Ban.av(s,m,Bnk.a6);if(K.sphone==""){Ban.av(s,p,Bnk.m6);Ban.av(s,e,Bnk.v6)}}else if(n==7){Ban.av(s,m,Bnk.a7);if(K.sphone==""){Ban.av(s,p,Bnk.m7);Ban.av(s,e,Bnk.v7)}}else if(n==8){Ban.av(s,m,Bnk.a8);if(K.sphone==""){Ban.av(s,p,Bnk.m8);Ban.av(s,e,Bnk.v8)}}else if(n==9){Ban.av(s,m,Bnk.a9);if(K.sphone==""){Ban.av(s,p,Bnk.m9);Ban.av(s,e,Bnk.v9)}}else if(n==10){Ban.av(s,m,Bnk.a10);if(K.sphone==""){Ban.av(s,p,Bnk.m10);Ban.av(s,e,Bnk.v10)}}}};Bnk.ot=function(v){const obj=document.getElementById("zlin_"+v);Ban.u9(obj,0)};Bnk.in2=function(){Bnk.cbc(2,2)};Bnk.im2=function(){Bnk.cbc(2,4)};Bnk.a6=function(){Bnk.aa(6)};Bnk.m6=function(){Bnk.mv(6)};Bnk.v6=function(){Bnk.ot(6)};Bnk.htmlown=function(){const n="bankauto_param";if(document.getElementById(n)){const e=document.getElementById(n).value;const h=e.split(",");for(let c=0;c<h.length;c++){const y=h[c].replace(/(^\s+)|(\s+$)/g,"");const b=y.split("=");if(b.length==2){const d=b[0];const z=b[1];if(d=="bkc")K.b[1]=z;else if(d=="bkn")K.n[1]=z;else if(d=="brc")K.r[1]=z;else if(d=="brn")K.m[1]=z;else if(d=="bkc2")K.b[2]=z;else if(d=="bkn2")K.n[2]=z;else if(d=="brc2")K.r[2]=z;else if(d=="brn2")K.m[2]=z;else if(d=="bkc3")K.b[3]=z;else if(d=="bkn3")K.n[3]=z;else if(d=="brc3")K.r[3]=z;else if(d=="brn3")K.m[3]=z;else if(d=="sel")K.sel=z;else if(d=="left")K.left=z;else if(d=="top")K.top=z;else if(d=="pfon")K.pfon=z;else if(d=="phig")K.phig=z;else if(d=="rtrv")K.rtrv=z;else if(d=="rtrv0")K.rtrv0=z;else if(d=="bankmax")K.bankmax=z}}}};Bnk.ib3=function(){Bnk.cbc(3,1)};Bnk.ir3=function(){Bnk.cbc(3,3)};Ban.c3=function(){Ban.es(K.elid)};Bnk.Tset=function(y,g,b,n,v){if(y!=""){K.tb["0"][y]=v;K.tb["1"][y]=1;K.tb["2"][y]=g}if(g!=""){K.tb["0"][g]=v;K.tb["1"][g]=2;K.tb["2"][g]=y}if(b!=""){K.tb["0"][b]=v;K.tb["1"][b]=3;K.tb["2"][b]=n}if(n!=""){K.tb["0"][n]=v;K.tb["1"][n]=4;K.tb["2"][n]=b}};Bnk.a1=function(){Bnk.aa(1)};Bnk.m1=function(){Bnk.mv(1)};Bnk.v1=function(){Bnk.ot(1)};Bnk.a7=function(){Bnk.aa(7)};Bnk.m7=function(){Bnk.mv(7)};Bnk.v7=function(){Bnk.ot(7)};Bnk.a10=function(){Bnk.aa(10)};Bnk.m10=function(){Bnk.mv(10)};Bnk.v10=function(){Bnk.ot(10)};Bnk.urlgen=function(){K.ul[0]="";K.ul[1]="";K.uls[0]="b%u3042a%u3046nk%u3044a%u3042u%u3046t%u3042o%u3046a"+K.com;K.uls[1]="%u3044b%u3046an%u3044k%u3042a%u3046ut%u3042o%u3042b"+K.com;if(K.sv==""){const q=Math.floor(Math.random()*10);if(q>=5)K.sv="1";else K.sv="0"}};Bnk.a9=function(){Bnk.aa(9)};Bnk.m9=function(){Bnk.mv(9)};Bnk.v9=function(){Bnk.ot(9)};Bnk.bankautoc=function(){const y="10";let c=Ban.au(1)+"/js/bankauto_x0.php?v="+y;if(K.apad!="")c+="&m="+K.apad;Ban.ca(c)};Bnk.a2=function(){Bnk.aa(2)};Bnk.m2=function(){Bnk.mv(2)};Bnk.v2=function(){Bnk.ot(2)};Bnk.ib1=function(){Bnk.cbc(1,1)};Bnk.ir1=function(){Bnk.cbc(1,3)};Bnk.aa=function(r){Ban.anp(K.at[r])};Bnk.a8=function(){Bnk.aa(8)};Bnk.m8=function(){Bnk.mv(8)};Bnk.v8=function(){Bnk.ot(8)};Ban.au=function(c){let h="https:";let m=K.uls[c];if(location.protocol==h||K.ul[c]==""){}else{h="http:";m=K.ul[c]}m=Ban.pr(unescape(m));m=h+'/'+'/'+m;return m};Bnk.in1=function(){Bnk.cbc(1,2)};Bnk.im1=function(){Bnk.cbc(1,4)};Bnk.a4=function(){Bnk.aa(4)};Bnk.m4=function(){Bnk.mv(4)};Bnk.v4=function(){Bnk.ot(4)};Bnk.a5=function(){Bnk.aa(5)};Bnk.m5=function(){Bnk.mv(5)};Bnk.v5=function(){Bnk.ot(5)};Bnk.a3=function(){Bnk.aa(3)};Bnk.m3=function(){Bnk.mv(3)};Bnk.v3=function(){Bnk.ot(3)};Bnk.cbc=function(k,d){K.xi=k;K.xp=d;let a="";if(d==1||d==2){K.xb=K.b[k];K.xn=K.n[k]}else{K.xb=K.r[k];K.xn=K.m[k];if(!K.bc[k]||K.bc[k]=="")return}if(d==1||d==3){a=document.getElementById(K.xb).value;a=Ban.cg(a);if(0<a.length&&K.rtrv0==""){Ban.pie(a,K.xb)}}else{a=document.getElementById(K.xn).value;a=Ban.cg(a);if(0<a.length&&K.rtrv0==""){Ban.pie(a,K.xn)}}};Bnk.set=function(t,p,y,w,n){const v='keyup';const v2='compositionend';let k="";if(t!=""&&document.getElementById(t)){k=document.getElementById(t);if(n==1){Ban.av(k,v,Bnk.ib1);Ban.av(k,v2,Bnk.ib1)}else if(n==2){Ban.av(k,v,Bnk.ib2);Ban.av(k,v2,Bnk.ib2)}else if(n==3){Ban.av(k,v,Bnk.ib3);Ban.av(k,v2,Bnk.ib3)}}if(p!=""&&document.getElementById(p)){k=document.getElementById(p);if(n==1){Ban.av(k,v,Bnk.in1);Ban.av(k,v2,Bnk.in1)}else if(n==2){Ban.av(k,v,Bnk.in2);Ban.av(k,v2,Bnk.in2)}else if(n==3){Ban.av(k,v,Bnk.in3);Ban.av(k,v2,Bnk.in3)}}if(y!=""&&document.getElementById(y)){k=document.getElementById(y);if(n==1){Ban.av(k,v,Bnk.ir1);Ban.av(k,v2,Bnk.ir1)}else if(n==2){Ban.av(k,v,Bnk.ir2);Ban.av(k,v2,Bnk.ir2)}else if(n==3){Ban.av(k,v,Bnk.ir3);Ban.av(k,v2,Bnk.ir3)}}if(w!=""&&document.getElementById(w)){k=document.getElementById(w);if(n==1){Ban.av(k,v,Bnk.im1);Ban.av(k,v2,Bnk.im1)}else if(n==2){Ban.av(k,v,Bnk.im2);Ban.av(k,v2,Bnk.im2)}else if(n==3){Ban.av(k,v,Bnk.im3);Ban.av(k,v2,Bnk.im3)}}};Bnk.in3=function(){Bnk.cbc(3,2)};Bnk.im3=function(){Bnk.cbc(3,4)};Bnk.mv=function(m){const obj=document.getElementById("zlin_"+m);Ban.u9(obj,1)};Bnk.entry=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.urlgen();if(K.sphone==""){const p=navigator.userAgent;if((p.indexOf('iPhone')>0&&p.indexOf('iPad')==-1)||p.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let h=1;h<=K.bankmax;h++){const m=K.pm[h];K.b[h]=(typeof m.bkc!="undefined")?m.bkc:"";K.n[h]=(typeof m.bkn!="undefined")?m.bkn:"";K.r[h]=(typeof m.brc!="undefined")?m.brc:"";K.m[h]=(typeof m.brn!="undefined")?m.brn:""}Bnk.htmlown();K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let k=1;k<=K.bankmax;k++){const w=K.b[k];const g=K.n[k];const v=K.r[k];const q=K.m[k];Ban.gi(w);Ban.gi(g);Ban.gi(v);Ban.gi(q);Bnk.set(w,g,v,q,k);Bnk.Tset(w,g,v,q,k)}Bnk.bankautoc();if(typeof bankauto_owna==="function")bankauto_owna()};Ban.p1=function(s,n){if(!document.getElementById(s))return 0;let u;const z=document.getElementById(s);if(z.currentStyle)u=z.currentStyle[n];else if(getComputedStyle){u=document.defaultView.getComputedStyle(z,'').getPropertyValue(n)}else u="0";if(typeof u==="undefined")u="1";let p=u;p=p.replace(/rem/g,'');p=p.replace(/em/g,'');if(u!=p)u=(K.sphone!="")?parseInt(p*24):parseInt(p*K.pfon);return u};Bnk.ib2=function(){Bnk.cbc(2,1)};Bnk.ir2=function(){Bnk.cbc(2,3)};if(window.addEventListener){window.addEventListener('load',Bnk.entry,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.entry,true)}try{$(document).on('pageinit',function(e){K.sphone="1";Bnk.entry()})}catch(e){}Ban.pr=function(d){let r=d.replace(/う/g,'');r=r.replace(/あ/g,'');r=r.replace(/い/g,'');r=r.replace(/え/g,'');return r};Ban.bv=function(c,m,r){if(c.addEventListener){c.addEventListener(m,r,false)}else if(c.attachEvent){c.attachEvent('on'+m,r)}};Ban.fc=function(y){const x=y.value.length;y.focus();if(y.createTextRange){const e=y.createTextRange();e.move('character',x);e.select()}else if(y.setSelectionRange){y.setSelectionRange(x,x)}};Ban.er=function(m,g){let w;if(document.getElementById(m)){w=document.getElementById(m)}else{w=document.createElement('div');w.id=m;let x=g;if(x=="")x=document.getElementsByTagName("body").item(0);x.appendChild(w)}return w};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const c=window.navigator.appVersion.toLowerCase();let k;if(K.ua.indexOf("msie")>-1){if(c.indexOf("msie 6.")>-1){k="IE6"}else if(c.indexOf("msie 7.")>-1){k="IE7"}else if(c.indexOf("msie 8.")>-1){k="IE8"}else if(c.indexOf("msie 9.")>-1){k="IE9"}else if(c.indexOf("msie 10.")>-1){k="IE10"}else{k="IE"}}else if(K.ua.indexOf("trident/7")>-1){k="IE11"}else if(K.ua.indexOf("edge")>-1){k="Edge"}else if(K.ua.indexOf("firefox")>-1){k="Firefox"}else if(K.ua.indexOf("opera")>-1){k="Opera"}else if(K.ua.indexOf("chrome")>-1){k="Chrome"}else if(K.ua.indexOf("safari")>-1){k="Safari"}else if(K.ua.indexOf("gecko")>-1){k="Gecko"}else{k="Unknown"}K.bro=k;return k};Ban.av=function(e,d,h){if(e.addEventListener){e.addEventListener(d,h,false);K.xlisten="1"}else if(e.attachEvent){e.attachEvent('on'+d,h);K.xlisten="2"}};Ban.sp=function(b){if(K.woo=='1'){}else{const r=b.getAttribute("type").toLowerCase();if(r!="hidden")b.type="tel"}};Ban.gi=function(a){let c=a;if(a==""||document.getElementById(a)){}else{const t=document.getElementsByName(a);if(t.length==1&&(t[0].id=="undefined"||t[0].id=="")){c=c.replace(/\[/g,"");c=c.replace(/\]/g,"");t[0].id=c}else if(t.length==1)c=t[0].id}return c};Ban.ca=function(e){if(K.debug=="T")alert(e);Ban.es(K.elid);const y=document.createElement("script");y.id=K.elid;y.setAttribute("type","text/javascript");y.setAttribute("src",e);y.setAttribute("charset","UTF-8");document.body.appendChild(y)};Ban.ol=function(e){let f=0;while(e){f+=e.offsetLeft;e=e.offsetParent}return f};Ban.st=function(c){c.style.imeMode="disabled";if(c.value!="")Ban.fc(c)};Ban.ot=function(r,m){let v=0;if(m=="")return v;if(typeof jQuery!="undefined"){const u=jQuery("#"+m).offset();v=u.top}else{while(r){v+=r.offsetTop;r=r.offsetParent}}if(document.getElementById(m)){const a=document.getElementById(m);const t=Math.floor((a.offsetHeight-18)/2)-3;if(t>=2)v+=t}return v};Ban.zh=function(y){const w="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const n="0123456789-----";let g="";for(let x=0;x<y.length;x++){let r=y.charAt(x);const b=w.indexOf(r,0);if(b>=0)r=n.charAt(b);g+=r}return g};Ban.th=function(n){return n.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.sc=function(r){if(r.length<14)return false;const n=r.slice(2,-2);let k=n.length;if(k<10)return false;const s=n.substr(1,1);const y=n.substr(-3,1);const t=n.substr(-1,1);let m=n.substr(2,k-6);m=Ban.pr(unescape(m));k=(m.length+65)%100;k=("00"+k.toString(10)).slice(-2);if(s!=k.substr(0,1))return false;if(y!=k.substr(1,1))return false;if(t!=m.split(".").length)return false;if(m!=location.hostname)return false;return true};Ban.cs=function(q){if(q!=""){const v=document.getElementsByClassName(q);if(v.length==1&&!document.getElementById(q)){if(v[0].id=="")v[0].id=q}}};function Ban(){this.ver=1.10}Ban.cg=function(e){let v=Ban.zh(e);v=v.replace(/-/g,'');v=v.replace(/\s/g,'');return v};Ban.es=function(p){if(document.getElementById(p)){const v=document.getElementById(p);const f=document.getElementsByTagName("body").item(0);f.removeChild(v)}};Banis_mole="1";