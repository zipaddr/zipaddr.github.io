function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver2.16 )
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
this.rev=".16";
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
Bnk.dAd=function(){Bnk.sQc(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.rXc=function(){Bnk.sQc(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.dg=function(f,p,k,a,r){if(f!=""){K.tb["0"][f]=r;K.tb["1"][f]=1;K.tb["2"][f]=p}if(p!=""){K.tb["0"][p]=r;K.tb["1"][p]=2;K.tb["2"][p]=f}if(k!=""){K.tb["0"][k]=r;K.tb["1"][k]=3;K.tb["2"][k]=a}if(a!=""){K.tb["0"][a]=r;K.tb["1"][a]=4;K.tb["2"][a]=k}};Bnk.ug=function(){K.ul[0]="";K.ul[1]="";K.uls[0]="b%u3042a%u3046nk%u3044a%u3042u%u3046t%u3042o%u3046a"+K.com;K.uls[1]="%u3044b%u3046an%u3044k%u3042a%u3046ut%u3042o%u3042b"+K.com;if(K.sv==""){const g=Math.floor(Math.random()*10);if(g>=5)K.sv="1";else K.sv="0"}};Bnk.c3=function(){Ban.es(K.elid)};Bnk.au=function(e){let t="https:";let r=K.uls[e];if(location.protocol==t||K.ul[e]==""){}else{t="http:";r=K.ul[e]}r=Ban.pr(unescape(r));r=t+'/'+'/'+r;return r};Bnk.wSe=function(){Bnk.sQc(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.m=function(q){const obj=document.getElementById("zlin_"+q);Bnk.u9(obj,1)};Bnk.cs=function(d){const m="216";let n=Bnk.au(1)+"/js/bankauto_x4.php?v="+m;if(typeof Banis_mole!="undefined")n+="&b=1";if(K.apad!="")n+="&m="+K.apad;if(d!="")n+="&t="+d;Ban.ca(n)};Bnk.c=function(v,u){K.xi=v;K.xp=u;let t="";if(u==1||u==2){K.xb=K.b[v];K.xn=K.n[v]}else{K.xb=K.r[v];K.xn=K.m[v];if(!K.bc[v]||K.bc[v]=="")return}if(u==1||u==3){t=document.getElementById(K.xb).value;t=Ban.cg(t);if(0<t.length&&K.rtrv0==""){Bnk.pie(t,K.xb)}}else{t=document.getElementById(K.xn).value;t=Ban.cg(t);if(0<t.length&&K.rtrv0==""){Bnk.pie(t,K.xn)}}};Bnk.s=function(b,g,u,s,k){const a='keyup';const n='compositionend';let q="";let y="";if(b!=""&&document.getElementById(b)){y=document.getElementById(b);if(k==1){Ban.av(y,a,Bnk.hBb);Ban.av(y,n,Bnk.hBb);q="1"}else if(k==2){Ban.av(y,a,Bnk.gNa);Ban.av(y,n,Bnk.gNa);q="1"}else if(k==3){Ban.av(y,a,Bnk.fRe);Ban.av(y,n,Bnk.fRe);q="1"}}if(g!=""&&document.getElementById(g)){y=document.getElementById(g);if(k==1){Ban.av(y,a,Bnk.mSb);Ban.av(y,n,Bnk.mSb);q="1"}else if(k==2){Ban.av(y,a,Bnk.rSc);Ban.av(y,n,Bnk.rSc);q="1"}else if(k==3){Ban.av(y,a,Bnk.nYd);Ban.av(y,n,Bnk.nYd);q="1"}}if(u!=""&&document.getElementById(u)){y=document.getElementById(u);if(k==1){Ban.av(y,a,Bnk.ir1);Ban.av(y,n,Bnk.ir1);q="1"}else if(k==2){Ban.av(y,a,Bnk.ir2);Ban.av(y,n,Bnk.ir2);q="1"}else if(k==3){Ban.av(y,a,Bnk.ir3);Ban.av(y,n,Bnk.ir3);q="1"}}if(s!=""&&document.getElementById(s)){y=document.getElementById(s);if(k==1){Ban.av(y,a,Bnk.im1);Ban.av(y,n,Bnk.im1);q="1"}else if(k==2){Ban.av(y,a,Bnk.im2);Ban.av(y,n,Bnk.im2);q="1"}else if(k==3){Ban.av(y,a,Bnk.im3);Ban.av(y,n,Bnk.im3);q="1"}}return q};Bnk.t=function(s){const obj=document.getElementById("zlin_"+s);Bnk.u9(obj,0)};Bnk.nYd=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.mSb=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.ySd=function(){Bnk.sQc(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.tPd=function(){Bnk.sQc(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.sQc=function(k){Bnk.anp(K.at[k])};Bnk.wn=function(){const k="bankauto_param";if(document.getElementById(k)){const d=document.getElementById(k).value.split(",");for(let r=0;r<d.length;r++){let a=d[r].replace(/(^\s+)|(\s+$)/g,"");a=a.split("=");if(a.length==2){const x=a[0];const h=a[1];if(x=="bkc")K.b[1]=h;else if(x=="bkn")K.n[1]=h;else if(x=="brc")K.r[1]=h;else if(x=="brn")K.m[1]=h;else if(x=="bkc2")K.b[2]=h;else if(x=="bkn2")K.n[2]=h;else if(x=="brc2")K.r[2]=h;else if(x=="brn2")K.m[2]=h;else if(x=="bkc3")K.b[3]=h;else if(x=="bkn3")K.n[3]=h;else if(x=="brc3")K.r[3]=h;else if(x=="brn3")K.m[3]=h;else if(x=="sel")K.sel=h;else if(x=="left")K.left=h;else if(x=="top")K.top=h;else if(x=="pfon")K.pfon=h;else if(x=="phig")K.phig=h;else if(x=="rtrv")K.rtrv=h;else if(x=="rtrv0")K.rtrv0=h;else if(x=="bankmax")K.bankmax=h}}}};Bnk.aXb=function(){Bnk.sQc(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.l2=function(q,y){if(document.getElementById(q)){const s='click';const x='mouseover';const p='mouseout';const b=document.getElementById(q);if(y==1){Ban.av(b,s,Bnk.rVa);if(K.sphone==""){Ban.av(b,x,Bnk.m1);Ban.av(b,p,Bnk.v1)}}else if(y==2){Ban.av(b,s,Bnk.yVe);if(K.sphone==""){Ban.av(b,x,Bnk.m2);Ban.av(b,p,Bnk.v2)}}else if(y==3){Ban.av(b,s,Bnk.ySd);if(K.sphone==""){Ban.av(b,x,Bnk.m3);Ban.av(b,p,Bnk.v3)}}else if(y==4){Ban.av(b,s,Bnk.cVb);if(K.sphone==""){Ban.av(b,x,Bnk.m4);Ban.av(b,p,Bnk.v4)}}else if(y==5){Ban.av(b,s,Bnk.wSe);if(K.sphone==""){Ban.av(b,x,Bnk.m5);Ban.av(b,p,Bnk.v5)}}else if(y==6){Ban.av(b,s,Bnk.rXc);if(K.sphone==""){Ban.av(b,x,Bnk.m6);Ban.av(b,p,Bnk.v6)}}else if(y==7){Ban.av(b,s,Bnk.dAd);if(K.sphone==""){Ban.av(b,x,Bnk.m7);Ban.av(b,p,Bnk.v7)}}else if(y==8){Ban.av(b,s,Bnk.tPd);if(K.sphone==""){Ban.av(b,x,Bnk.m8);Ban.av(b,p,Bnk.v8)}}else if(y==9){Ban.av(b,s,Bnk.aXb);if(K.sphone==""){Ban.av(b,x,Bnk.m9);Ban.av(b,p,Bnk.v9)}}else if(y==10){Ban.av(b,s,Bnk.rVa0);if(K.sphone==""){Ban.av(b,x,Bnk.m10);Ban.av(b,p,Bnk.v10)}}}};Bnk.rSc=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.hBb=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.yVe=function(){Bnk.sQc(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.fRe=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();if(K.sphone==""){const f=navigator.userAgent;if((f.indexOf('iPhone')>0&&f.indexOf('iPad')==-1)||f.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let k=1;k<=K.bankmax;k++){const p=K.pm[k];K.b[k]=(typeof p.bkc!="undefined")?p.bkc:"";K.n[k]=(typeof p.bkn!="undefined")?p.bkn:"";K.r[k]=(typeof p.brc!="undefined")?p.brc:"";K.m[k]=(typeof p.brn!="undefined")?p.brn:""}Bnk.wn();let v="";let n="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let y=1;y<=K.bankmax;y++){const s=K.b[y];const z=K.n[y];const u=K.r[y];const d=K.m[y];Ban.gi(s);Ban.gi(z);Ban.gi(u);Ban.gi(d);const t=Bnk.s(s,z,u,d,y);if(t=="1")v="1";Bnk.dg(s,z,u,d,y);n+=s+z+u+d+y}if(v=="1")Bnk.cs(n);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.rVa=function(){Bnk.sQc(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};Bnk.gNa=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.cVb=function(){Bnk.sQc(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.rVa0=function(){Bnk.sQc(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";Bnk.back=function(m){Ban.es(K.elid);K.Cache[K.url]=m;const d=K.xi;const w=K.xp;if(m.bnk.length==1){return Bnk.anp(m.bnk[0].c+" "+m.bnk[0].n)}const g=(SB.sv=="0")?"":".";const p='<span id="bnk_count">'+m.s+'件ヒット</span>';const c='<span id="bnk_close">[閉じる]</span>';const k=(typeof m.skip!="undefined")?m.skip:"";const h=(k=='1')?'':'<span id="bnk_footer"><a href="https:/'+SB.url+'" target="_blank">'+SB.owner+g+'</a></span>';let t=Bnk.hs(m);t+=(K.sphone==""&&t!="")?"<br />":"";t+='<div id="bnk_bottom">'+p+"　"+c+"&nbsp;"+h+'</div>';let v;if(w==1||w==3)v=document.getElementById(K.xb);else v=document.getElementById(K.xn);v.style.position="relative";let z=Ban.ol(v)+K.left;const u=Ban.ot(v,K.xb)+K.top+parseInt(K.pad)-1;if(K.sphone!=""){z-=20}let x=Bnk.st();x.style.left=z+"px";x.style.top=u+"px";x.innerHTML=t;const e=(K.zc!=""&&document.getElementById(K.zc))?document.getElementById(K.zc):"";for(let n=1;n<=m.bnk.length;n++){Bnk.l2('zlin_'+n,n)}if(document.getElementById(K.zc)){Ban.bv(e,K.cls,Bnk.c3)}};Bnk.sr=function(q,p){if(document.getElementById(p)){const y=document.getElementById(q);y.readOnly=false;const x=document.getElementById(p);x.style.display='none';Bnk.as(q,"");if(K.tb["2"][q]){Bnk.as(K.tb["2"][q],"");const w=K.tb["0"][q];const h=K.tb["1"][q];if(h==1||h==2)K.bc[w]=""}}};Bnk.p1=function(m,k){if(!document.getElementById(m))return 0;let f;const z=document.getElementById(m);if(z.currentStyle)f=z.currentStyle[k];else if(getComputedStyle){f=document.defaultView.getComputedStyle(z,'').getPropertyValue(k)}else f="0";if(typeof f==="undefined")f="1";let g=f;g=g.replace(/rem/g,'');g=g.replace(/em/g,'');if(f!=g)f=(K.sphone!="")?parseInt(g*24):parseInt(g*K.pfon);return f};Bnk.as=function(u,c){if(u!=""&&document.getElementById(u)){const y=document.getElementById(u);const b=y.tagName.toLowerCase();const d=(b=="input")?y.getAttribute("type").toLowerCase():"";if(d=="hidden"){}else if(b=="input"){y.value=c;Bnk.xs(u,c)}else{y.innerHTML=c;Bnk.xs(u,c)}}};Bnk.u9=function(r,f){if(f==1){r.style.backgroundColor=K.ovr;r.style.fontSize=120+'%'}else{r.style.backgroundColor=K.bgc;r.style.fontSize=100+'%'}};function Sub(){this.ver="2.16";this.sv="1";this.ip="";this.keyc="";this.remote="";this.hostmei="";this.keynams="";this.mesg2="";this.owner="@bank-auto";this.url="/bank-auto.com/"}let SB=new Sub;Bnk.st=function(){const f=Ban.er(K.elid,"");f.style.position='absolute';f.style.display="block";f.style.zIndex="9999999";const w=(K.sphone=="")?K.pfon:K.sfon;const s=(K.sphone=="")?K.phig:K.shig;f.style.fontSize=w+'px';f.style.lineHeight=s;f.style.padding="5px 8px";f.style.borderRadius="8px";f.style.backgroundColor=K.bgc;f.style.textAlign='left';f.innerHTML="";return f};Bnk.pie=function(e,u){K.xk=e;K.pad=Bnk.p1(u,"padding-top");const w=K.xi;const r=K.xp;const b=(r==1||r==2)?"":K.bc[w];let n="%u3044j%u3044%u3042s%u3044/_%u3044b%u3046r%u3048%u3042q2";n=Ban.pr(unescape(n));const z=location.host+"|"+location.hostname+"|"+SB.remote+"|"+SB.ip;SB.sv=('0'<=SB.sv&&SB.sv<='9')?SB.sv:K.sv;let t=Bnk.au(SB.sv)+"/"+n+".php?k="+e+"&b="+b+"&p="+K.xp;t+="&v="+K.ver+"&n="+SB.keynams+"&s="+SB.hostmei+"&u="+z+"&w="+SB.keyc;t+="&c="+K.contract+"&d="+K.sel+"&r="+K.rtrv;K.url=t;const s=K.Cache[K.url];if(s)return Bnk.back(s);Ban.ca(K.url,K.elid)};Bnk.anp=function(q){Bnk.c3();const s=K.xi;const b=K.xp;const r=q.split(" ");if(r.length!=2)return;Bnk.as(K.xb,r[0]);Bnk.as(K.xn,r[1]);if(b==1||b==2){K.bc[s]=r[0];Bnk.as(K.r[s],"");Bnk.as(K.m[s],"")}if(K.sphone!=""){let v="";if(b==1&&K.b[s]!="")v=document.getElementById(K.b[s]);else if(b==2&&K.n[s]!="")v=document.getElementById(K.n[s]);else if(b==3&&K.r[s]!="")v=document.getElementById(K.r[s]);else if(b==4&&K.m[s]!="")v=document.getElementById(K.m[s]);if(v!="")v.blur()}if(typeof bankauto_after==="function")bankauto_after(K.xb,K.xn);return false};Bnk.xs=function(w,h){const a=w+K.clear;if(h!=""&&document.getElementById(a)){const x=document.getElementById(a);x.style.display='inline-block';x.addEventListener("click",function(){Bnk.sr(w,a)},false)}};Bnk.hs=function(r){let w="";K.at=new Array();for(let v=0;v<r.bnk.length;v++){const p=v+1;const q=r.bnk[v]['c'];let x='<font size="2">'+q+"</font>";x+=(K.sphone=="")?"&nbsp;":"";x+=r.bnk[v]['n'];w+='<div class="bnk_line" id="zlin_'+p+'">'+x+'</div>';K.at[p]=q+" "+r.bnk[v]['n']}return w};