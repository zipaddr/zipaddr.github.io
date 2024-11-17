function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankauto2.js Ver3.21 )
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
this.sys="1";       // 0:無料,1:有料
this.rtrv="0";      // 1:曖昧検索,0:上方一致
this.sel="10";this.left=22;this.top=18;this.pfon="12";this.phig="1.4";this.sfon="16";this.shig="1.6";this.rtrv0="";this.sphone="";this.clear="_clear";this.debug="";this.ver="3";this.rev=".19";this.bbb="bank";this.com=".com";this.goo=".git";this.sv="";this.pad=0;this.url;this.ul=new Array();this.uls=new Array();this.b=new Array();this.n=new Array();this.r=new Array();this.m=new Array();this.tb=new Array();this.at=new Array();this.bc=new Array();this.xb="";this.xn="";this.xi="";this.xp="";this.xk="";this.woo="";this.apad="";this.xlisten="";this.elid="bnkauto";this.zc="bnk_close";this.cls="click";this.contract="ymGTGwr9NXCv";this.Cache=[];this.kana="";this.KANA="";this.HIRA="";}let K=new Bnk;Bnk.eWb=function(){let k="";if((K.ua.indexOf('iphone')>0&&K.ua.indexOf('ipad')==-1)||K.ua.indexOf('android')>0)k="1";if(typeof fnCallAddress==="function"||window.eccube!=undefined){K.eccube="1";if(K.sphone==""&&k=="1")K.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){K.welcart="1";if(K.sphone==""&&k=="1")K.sphone="2"}else if(K.sphone!=""){}else if(k=="1")K.sphone="2"};Bnk.rKe=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.as=function(w,f){if(w!=""&&document.getElementById(w)){const k=document.getElementById(w);const r=k.tagName.toLowerCase();const x=(r=="input")?k.getAttribute("type").toLowerCase():"";if(x=="hidden"){}else if(r=="input"){k.value=f;Bnk.rRb(w,r,f);Bnk.xs(w,f)}else{k.innerHTML=f;Bnk.rRb(w,r,f);Bnk.xs(w,f)}}};Bnk.p1=function(n,b){if(!document.getElementById(n))return 0;let z;const v=document.getElementById(n);if(v.currentStyle)z=v.currentStyle[b];else if(getComputedStyle){z=document.defaultView.getComputedStyle(v,'').getPropertyValue(b)}else z="0";if(typeof z==="undefined")z="1";let k=z;k=k.replace(/rem/g,'');k=k.replace(/em/g,'');if(z!=k)z=(K.sphone!="")?parseInt(k*24):parseInt(k*K.pfon);return z};Bnk.z=function(u){let x=[];if(u==null)return"";for(let y=0;y<u.length;y++){const g=u.charCodeAt(y);if(g<=0x7f)x.push(g);else if(g<=0x07ff){x.push(((g>>6)&0x1F)|0xC0);x.push((g&0x3F)|0x80)}else{x.push(((g>>12)&0x0F)|0xE0);x.push(((g>>6)&0x3F)|0x80);x.push((g&0x3F)|0x80)}}let p="";for(let r=0;r<x.length;r++){let h=(x[r]).toString(16);if(x[r]<16)h='0'+h;p+=h}return p};Bnk.st=function(){const g=Ban.er(K.elid,"");g.style.position='absolute';g.style.display="block";g.style.zIndex="9999999";const z=(K.sphone=="")?K.pfon:K.sfon;const k=(K.sphone=="")?K.phig:K.shig;g.style.fontSize=z+'px';g.style.lineHeight=k;g.style.padding="5px 8px";g.style.borderRadius="8px";g.style.backgroundColor=K.bgc;g.style.textAlign='left';g.innerHTML="";return g};Bnk.cs=function(n){const y="321";const r=Ban.pr(unescape(K.abc));let v=Bnk.au(1)+"/j"+"s/"+K.bbb+r+"_x5."+K.cc+"?v="+y;v+="&f="+K.sys;if(typeof Banis_mole!="undefined")v+="&b=1";if(K.apad!="")v+="&m="+K.apad;if(n!="")v+="&t="+n;Ban.ca(v)};Bnk.uEe=function(m){return m.replace(/[\u3041-\u3096]/g,function(match){var p=match.charCodeAt(0)+0x60;return String.fromCharCode(p)})};Bnk.au=function(n){let t="https:";let x=K.uls[n];if(location.protocol==t||K.ul[n]==""){}else{t="http:";x=K.ul[n]}x=Ban.pr(unescape(x));x=t+'/'+'/'+x;return x};Bnk.rRb=function(v,n,e){if(K.sys!="0"&&v!=""&&e!=""){let t=new Array();t[0]=K.kana;t[1]=K.KANA;t[2]=K.HIRA;const a="kana_KANA_HIRA".split("_");for(let p=0;p<a.length;p++){const s=v+"_"+a[p];if(document.getElementById(s)){let y=document.getElementById(s);if(n=="input")y.value=t[p];else y.innerHTML=t[p]}}}};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();Ban.br();Bnk.eWb();if(K.sphone==""){const c=navigator.userAgent;if((c.indexOf('iPhone')>0&&c.indexOf('iPad')==-1)||c.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let p=1;p<=K.bankmax;p++){const a=K.pm[p];K.b[p]=(typeof a.bkc!="undefined")?a.bkc:"";K.n[p]=(typeof a.bkn!="undefined")?a.bkn:"";K.r[p]=(typeof a.brc!="undefined")?a.brc:"";K.m[p]=(typeof a.brn!="undefined")?a.brn:""}K.cc=Ban.pr(unescape("%u3044p%u3042%u3046h%u3042%u3046p%u3044"));Bnk.wn();let k="";let d="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let w=1;w<=K.bankmax;w++){const t=K.b[w];const e=K.n[w];const r=K.r[w];const n=K.m[w];Ban.gi(t);Ban.gi(e);Ban.gi(r);Ban.gi(n);const s=Bnk.s(t,e,r,n,w);if(s=="1")k="1";Bnk.dg(t,e,r,n,w);d+=t+e+r+n+w}if(k=="1")Bnk.cs(d);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.tDb=function(){Bnk.mDd(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.xCd=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.back=function(h){Ban.es(K.elid);K.Cache[K.url]=h;const q=K.xi;const m=K.xp;let w=(typeof h.skip!="undefined")?h.skip:"";let t;let u;if(K.sys=="0"){t=".";u=Bnk.r(h,q,m)}else{t=K.rtrv;u=h}let f=Bnk.hs(u,m);if(K.smf=="1"&&u.s==1&&(m==1||m==3)){Bnk.anp(K.at[1])}else{Bnk.ln(u,f,t,w,m)}};Bnk.sXd=function(){Bnk.mDd(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};Bnk.mDd=function(z){Bnk.anp(K.at[z])};Bnk.qBd=function(q,t){const r=q.indexOf("\t");if(r<0)return q;const d=Number(q.substr(r+1,1))+2;const w=q.split("\t");return w[0]+t.substr(-d)};Bnk.xSa=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.sMd=function(){Bnk.mDd(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.c3=function(){Ban.es(K.elid)};Bnk.wFe=function(){Bnk.mDd(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.hBd=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.t=function(s){const obj=document.getElementById("zlin_"+s);Bnk.u9(obj,0)};Bnk.sRa=function(){Bnk.mDd(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.ln=function(x,q,z,h,y){let r=q;const g='<span id="bnk_count">'+x.s+'件ヒット</span>';const a='<span id="bnk_close">[閉じる]</span>';let p='<span id="bnk_footer"><a href="https:/'+M.url+'" style="text-decoration:none;color:'+K.lgc+'" target="_blank">';p+='<font size="2">@'+M.owner+z+'</font></a></span>';if(h=='1')p="";r+=(K.sphone==""&&r!="")?"<br />":"";r+='<div id="bnk_bottom">'+g+"　"+a+"&nbsp;"+p+'</div>';let s;if(y==1||y==3)s=document.getElementById(K.xb);else s=document.getElementById(K.xn);s.style.position="relative";let k=Ban.ol(s)+K.left;const w=Ban.ot(s,K.xb)+K.top+parseInt(K.pad)-1;if(K.sphone!=""){k-=20}let v=Bnk.st();v.style.left=k+"px";v.style.top=w+"px";v.innerHTML=r;const e=(K.zc!=""&&document.getElementById(K.zc))?document.getElementById(K.zc):"";for(let d=1;d<=x.bnk.length;d++){Bnk.l2('zlin_'+d,d)}if(document.getElementById(K.zc)){Ban.bv(e,K.cls,Bnk.c3)}};Bnk.sXd0=function(){Bnk.mDd(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};Bnk.ug=function(){K.ul[0]="";K.ul[1]="";K.uls[0]="b%u3042a%u3046nk%u3044a%u3042u%u3046t%u3042o%u3046a"+K.com;K.uls[1]="%u3044b%u3046an%u3044k%u3042a%u3046ut%u3042o%u3042b"+K.com;if(K.sv==""){const y=Math.floor(Math.random()*10);if(y>=6)K.sv="1";else K.sv="0"}};Bnk.c=function(d,v){K.xi=d;K.xp=v;let g="";if(v==1||v==2){K.xb=K.b[d];K.xn=K.n[d]}else{K.xb=K.r[d];K.xn=K.m[d];if(!K.bc[d]||K.bc[d]=="")return}if(v==1||v==3){g=document.getElementById(K.xb).value;g=Ban.cg(g);if(0<g.length&&K.rtrv0==""){Bnk.pie(g,K.xb)}}else{g=document.getElementById(K.xn).value;g=Ban.cg(g);if(0<g.length&&K.rtrv0==""){Bnk.pie(g,K.xn)}}};Bnk.hCb=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.anp=function(d){Bnk.c3();const q=K.xi;const p=K.xp;const s=d.split("_");if(s.length<2)return;K.kana="";K.KANA="";K.HIRA="";if(s.length>=3)K.kana=s[2];if(s.length>=4)K.KANA=s[3];if(s.length>=5)K.HIRA=s[4];Bnk.as(K.xb,s[0]);Bnk.as(K.xn,s[1]);if(p==1||p==2){K.bc[q]=s[0];Bnk.as(K.r[q],"");Bnk.as(K.m[q],"")}if(K.sphone!=""){let w="";if(p==1&&K.b[q]!="")w=document.getElementById(K.b[q]);else if(p==2&&K.n[q]!="")w=document.getElementById(K.n[q]);else if(p==3&&K.r[q]!="")w=document.getElementById(K.r[q]);else if(p==4&&K.m[q]!="")w=document.getElementById(K.m[q]);if(w!="")w.blur()}if(typeof bankauto_after==="function")bankauto_after(K.xb,K.xn);return false};Bnk.zYb=function(){Bnk.mDd(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.hs=function(c,d){let a="";K.at=new Array();let h="";let s="";for(let m=0;m<c.bnk.length;m++){const v=m+1;let g;let t;if(typeof c.bnk[m]['c']=="undefined")g=h;else if(d==1||d==2)g=("0000"+c.bnk[m]['c']).slice(-4);else g=("0000"+c.bnk[m]['c']).slice(-3);if(m==0){t=s=c.bnk[m]['n']}else if(typeof c.bnk[m]['n']=="undefined")t=s;else t=Bnk.qBd(c.bnk[m]['n'],s);let w="";let KANA="";let HIRA="";if(typeof c.bnk[m]['h']!="undefined")HIRA=c.bnk[m]['h'];if(typeof c.bnk[m]['k']!="undefined")w=c.bnk[m]['k'];if(HIRA!="")KANA=Bnk.uEe(HIRA);let r='<font size="2">'+g+"</font>";r+=(K.sphone=="")?"&nbsp;":"";r+=t;a+='<div class="bnk_line" id="zlin_'+v+'">'+r+'</div>';K.at[v]=g+"_"+t+"_"+w+"_"+KANA+"_"+HIRA;h=g;s=t}return a};function Sub(){this.ver="3.21";this.sv="";this.wsv="";this.ip="";this.keyc="";this.remote="";this.hostmei="";this.keynams="";this.owner="bank-auto";this.url="/"+this.owner+".com/";this.ul="%u3044b%u3044%u3042a%u3044n%u3044%u3046kd%u3048at%u3042a3"}let M=new Sub;Bnk.wXd=function(){Bnk.mDd(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.r=function(g,y,x){let n=[];let a=0;let r=0;const b=K.xk.length;let h="";let p="";let u="";let t;let m;let f;for(let e=0;e<g.s;e++){if(typeof g.bnk[e]['c']=="undefined")t=h;else if(x==1||x==2)t=("0000"+g.bnk[e]['c']).slice(-4);else t=("0000"+g.bnk[e]['c']).slice(-3);if(typeof g.bnk[e]['b']=="undefined")f=u;else f=("0000"+g.bnk[e]['b']).slice(-4);if(e==0){m=p=g.bnk[e]['n']}else if(typeof g.bnk[e]['n']=="undefined")m=p;else m=Bnk.qBd(g.bnk[e]['n'],p);const d={"c":t,"n":m,"b":f};if((x==3||x==4)&&K.bc[y]!=f){}else if(isFinite(K.xk)&&K.xk===t.substr(0,b)){if(a<K.sel){n[a]=d;a++}r++}else if(!isFinite(K.xk)&&K.xk===m.substr(0,b)){if(a<K.sel){n[a]=d;a++}r++}h=t;u=f;p=m}const s={"bnk":n,"s":r};return s};Bnk.y1=function(){const p=K.xi;const r=K.xp;const q=(r==1||r==2)?"":K.bc[p];let t="%u3044j%u3044%u3042s%u3044/_%u3044b%u3046r%u3048%u3042q3";t=Ban.pr(unescape(t));const w=location.host+"|"+location.hostname+"|"+M.remote+"|"+M.ip;if("0"<=M.sv&&M.sv<="9")M.wsv=M.sv;else if(M.sv=="M")M.wsv=K.sv;else M.wsv="1";let x=Bnk.au(M.wsv)+"/"+t+"."+K.cc+"?k="+K.xk+"&b="+q+"&p="+K.xp;x+="&v="+K.ver+"&n="+M.keynams+"&s="+M.hostmei+"&u="+w+"&w="+M.keyc;x+="&c="+K.contract+"&d="+K.sel+"&r="+K.rtrv;K.url=x};Bnk.u9=function(v,r){if(r==1){v.style.backgroundColor=K.ovr;v.style.fontSize=120+'%'}else{v.style.backgroundColor=K.bgc;v.style.fontSize=100+'%'}};Bnk.s=function(m,q,a,d,n){const b='keyup';const f='compositionend';let s="";let t="";if(m!=""&&document.getElementById(m)){t=document.getElementById(m);if(n==1){Ban.av(t,b,Bnk.hCb);Ban.av(t,f,Bnk.hCb);s="1"}else if(n==2){Ban.av(t,b,Bnk.hBd);Ban.av(t,f,Bnk.hBd);s="1"}else if(n==3){Ban.av(t,b,Bnk.vSd);Ban.av(t,f,Bnk.vSd);s="1"}if(s=="1")Bnk.tp(t)}if(q!=""&&document.getElementById(q)){t=document.getElementById(q);if(n==1){Ban.av(t,b,Bnk.xSa);Ban.av(t,f,Bnk.xSa);s="1"}else if(n==2){Ban.av(t,b,Bnk.xCd);Ban.av(t,f,Bnk.xCd);s="1"}else if(n==3){Ban.av(t,b,Bnk.rKe);Ban.av(t,f,Bnk.rKe);s="1"}}if(a!=""&&document.getElementById(a)){t=document.getElementById(a);if(n==1){Ban.av(t,b,Bnk.ir1);Ban.av(t,f,Bnk.ir1);s="1"}else if(n==2){Ban.av(t,b,Bnk.ir2);Ban.av(t,f,Bnk.ir2);s="1"}else if(n==3){Ban.av(t,b,Bnk.ir3);Ban.av(t,f,Bnk.ir3);s="1"}if(s=="1")Bnk.tp(t)}if(d!=""&&document.getElementById(d)){t=document.getElementById(d);if(n==1){Ban.av(t,b,Bnk.im1);Ban.av(t,f,Bnk.im1);s="1"}else if(n==2){Ban.av(t,b,Bnk.im2);Ban.av(t,f,Bnk.im2);s="1"}else if(n==3){Ban.av(t,b,Bnk.im3);Ban.av(t,f,Bnk.im3);s="1"}}return s};Bnk.pie=function(h,p){K.xk=h;K.pad=Bnk.p1(p,"padding-top");if(K.sys=="0")Bnk.x0();else Bnk.y1();const w=K.Cache[K.url];if(w)return Bnk.back(w);Ban.ca(K.url,K.elid)};Bnk.gYc=function(){Bnk.mDd(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.x0=function(){let m=K.xk.substr(0,1);if(!isFinite(K.xk))m=Bnk.z(m);if(K.xp=="1"||K.xp=="2")m+=".bank";else m+=".bran";const g=Ban.pr(unescape(M.ul));K.url='https:'+'/'+'/'+'zipaddr'+K.goo+'hub.io/'+g+'/'+m};Bnk.wn=function(){const u="bankauto_param";if(document.getElementById(u)){const n=document.getElementById(u).value.split(",");for(let d=0;d<n.length;d++){const q=n[d].replace(/(^\s+)|(\s+$)/g,"");const t=q.split("=");if(t.length==2){const m=t[0];const a=t[1];if(m=="bkc")K.b[1]=a;else if(m=="bkn")K.n[1]=a;else if(m=="brc")K.r[1]=a;else if(m=="brn")K.m[1]=a;else if(m=="bkc2")K.b[2]=a;else if(m=="bkn2")K.n[2]=a;else if(m=="brc2")K.r[2]=a;else if(m=="brn2")K.m[2]=a;else if(m=="bkc3")K.b[3]=a;else if(m=="bkn3")K.n[3]=a;else if(m=="brc3")K.r[3]=a;else if(m=="brn3")K.m[3]=a;else if(m=="sel")K.sel=a;else if(m=="left")K.left=a;else if(m=="top")K.top=a;else if(m=="pfon")K.pfon=a;else if(m=="phig")K.phig=a;else if(m=="rtrv")K.rtrv=a;else if(m=="rtrv0")K.rtrv0=a;else if(m=="bankmax")K.bankmax=a}}}};Bnk.l2=function(t,w){if(document.getElementById(t)){const z='click';const a='mouseover';const g='mouseout';const u=document.getElementById(t);if(w==1){Ban.av(u,z,Bnk.sXd);if(K.sphone==""){Ban.av(u,a,Bnk.m1);Ban.av(u,g,Bnk.v1)}}else if(w==2){Ban.av(u,z,Bnk.tDb);if(K.sphone==""){Ban.av(u,a,Bnk.m2);Ban.av(u,g,Bnk.v2)}}else if(w==3){Ban.av(u,z,Bnk.sRa);if(K.sphone==""){Ban.av(u,a,Bnk.m3);Ban.av(u,g,Bnk.v3)}}else if(w==4){Ban.av(u,z,Bnk.wXd);if(K.sphone==""){Ban.av(u,a,Bnk.m4);Ban.av(u,g,Bnk.v4)}}else if(w==5){Ban.av(u,z,Bnk.zYb);if(K.sphone==""){Ban.av(u,a,Bnk.m5);Ban.av(u,g,Bnk.v5)}}else if(w==6){Ban.av(u,z,Bnk.mPd);if(K.sphone==""){Ban.av(u,a,Bnk.m6);Ban.av(u,g,Bnk.v6)}}else if(w==7){Ban.av(u,z,Bnk.sMd);if(K.sphone==""){Ban.av(u,a,Bnk.m7);Ban.av(u,g,Bnk.v7)}}else if(w==8){Ban.av(u,z,Bnk.gYc);if(K.sphone==""){Ban.av(u,a,Bnk.m8);Ban.av(u,g,Bnk.v8)}}else if(w==9){Ban.av(u,z,Bnk.wFe);if(K.sphone==""){Ban.av(u,a,Bnk.m9);Ban.av(u,g,Bnk.v9)}}else if(w==10){Ban.av(u,z,Bnk.sXd0);if(K.sphone==""){Ban.av(u,a,Bnk.m10);Ban.av(u,g,Bnk.v10)}}}};Bnk.tp=function(x){let n="";let f="";try{n=x.placeholder;f=true}catch(e){n="1";f=false}if(K.smf=="1"&&f&&typeof x.type!="undefined"){Ban.sp(x);Ban.st(x)}};Bnk.mPd=function(){Bnk.mDd(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.vSd=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.dg=function(t,m,n,d,q){if(t!=""){K.tb["0"][t]=q;K.tb["1"][t]=1;K.tb["2"][t]=m}if(m!=""){K.tb["0"][m]=q;K.tb["1"][m]=2;K.tb["2"][m]=t}if(n!=""){K.tb["0"][n]=q;K.tb["1"][n]=3;K.tb["2"][n]=d}if(d!=""){K.tb["0"][d]=q;K.tb["1"][d]=4;K.tb["2"][d]=n}};Bnk.sr=function(c,q){if(document.getElementById(q)){const a=document.getElementById(c);a.readOnly=false;const w=document.getElementById(q);w.style.display='none';Bnk.as(c,"");if(K.tb["2"][c]){Bnk.as(K.tb["2"][c],"");const p=K.tb["0"][c];const x=K.tb["1"][c];if(x==1||x==2)K.bc[p]=""}}};Bnk.xs=function(q,f){const k=q+K.clear;if(f!=""&&document.getElementById(k)){const t=document.getElementById(k);t.style.display='inline-block';t.addEventListener("click",function(){Bnk.sr(q,k)},false)}};Bnk.m=function(f){const obj=document.getElementById("zlin_"+f);Bnk.u9(obj,1)};K.abc="%u3044a%u3048%u3042u%u3046t%u3044o";if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";