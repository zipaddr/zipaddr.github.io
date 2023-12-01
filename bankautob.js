function Bnk(){
/*
 *	■金融機関（銀行コード等）情報の自動入力( bankautob.js Ver3.19 )
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
this.sys="1";       // 0:無料,1:有料
this.rtrv="1";      // 1:曖昧検索,0:上方一致
this.sel="10";this.left=22;this.top=18;this.pfon="12";this.phig="1.4";this.sfon="16";this.shig="1.6";this.rtrv0="";this.sphone="";this.clear="_clear";this.debug="";this.ver="3";this.rev=".19";this.com=".com";this.goo=".git";this.sv="";this.pad=0;this.url;this.ul=new Array();this.uls=new Array();this.b=new Array();this.n=new Array();this.r=new Array();this.m=new Array();this.tb=new Array();this.at=new Array();this.bc=new Array();this.xb="";this.xn="";this.xi="";this.xp="";this.xk="";this.woo="";this.apad="";this.xlisten="";this.elid="bnkauto";this.zc="bnk_close";this.cls="click";this.contract="ymGTGwr9NXCv";this.Cache=[]}let K=new Bnk;Bnk.pie=function(y,w){K.xk=y;K.pad=Bnk.p1(w,"padding-top");if(K.sys=="0")Bnk.x0();else Bnk.y1();const d=K.Cache[K.url];if(d)return Bnk.back(d);Ban.ca(K.url,K.elid)};Bnk.anp=function(x){Bnk.c3();const q=K.xi;const m=K.xp;const h=x.split(" ");if(h.length!=2)return;Bnk.as(K.xb,h[0]);Bnk.as(K.xn,h[1]);if(m==1||m==2){K.bc[q]=h[0];Bnk.as(K.r[q],"");Bnk.as(K.m[q],"")}if(K.sphone!=""){let y="";if(m==1&&K.b[q]!="")y=document.getElementById(K.b[q]);else if(m==2&&K.n[q]!="")y=document.getElementById(K.n[q]);else if(m==3&&K.r[q]!="")y=document.getElementById(K.r[q]);else if(m==4&&K.m[q]!="")y=document.getElementById(K.m[q]);if(y!="")y.blur()}if(typeof bankauto_after==="function")bankauto_after(K.xb,K.xn);return false};Bnk.uEd=function(){Bnk.qYe(1)};Bnk.m1=function(){Bnk.m(1)};Bnk.v1=function(){Bnk.t(1)};Bnk.xs=function(h,p){const k=h+K.clear;if(p!=""&&document.getElementById(k)){const a=document.getElementById(k);a.style.display='inline-block';a.addEventListener("click",function(){Bnk.sr(h,k)},false)}};Bnk.uEd0=function(){Bnk.qYe(10)};Bnk.m10=function(){Bnk.m(10)};Bnk.v10=function(){Bnk.t(10)};Bnk.tp=function(g){let t="";let w="";try{t=g.placeholder;w=true}catch(e){t="1";w=false}if(K.smf=="1"&&w&&typeof g.type!="undefined"){Ban.sp(g);Ban.st(g)}};Bnk.ug=function(){K.ul[0]="";K.ul[1]="";K.uls[0]="b%u3042a%u3046nk%u3044a%u3042u%u3046t%u3042o%u3046a"+K.com;K.uls[1]="%u3044b%u3046an%u3044k%u3042a%u3046ut%u3042o%u3042b"+K.com;if(K.sv==""){const v=Math.floor(Math.random()*10);if(v>=6)K.sv="1";else K.sv="0"}};Bnk.nNe=function(){Bnk.qYe(8)};Bnk.m8=function(){Bnk.m(8)};Bnk.v8=function(){Bnk.t(8)};Bnk.pZa=function(){let c="";if((K.ua.indexOf('iphone')>0&&K.ua.indexOf('ipad')==-1)||K.ua.indexOf('android')>0)c="1";if(typeof fnCallAddress==="function"||window.eccube!=undefined){K.eccube="1";if(K.sphone==""&&c=="1")K.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){K.welcart="1";if(K.sphone==""&&c=="1")K.sphone="2"}else if(K.sphone!=""){}else if(c=="1")K.sphone="2"};Bnk.cs=function(n){const f="319";let u=Bnk.au(1)+"/js/bankauto_x5.php?v="+f;u+="&f="+K.sys;if(typeof Banis_mole!="undefined")u+="&b=1";if(K.apad!="")u+="&m="+K.apad;if(n!="")u+="&t="+n;Ban.ca(u)};Bnk.m=function(s){const obj=document.getElementById("zlin_"+s);Bnk.u9(obj,1)};Bnk.c=function(d,r){K.xi=d;K.xp=r;let v="";if(r==1||r==2){K.xb=K.b[d];K.xn=K.n[d]}else{K.xb=K.r[d];K.xn=K.m[d];if(!K.bc[d]||K.bc[d]=="")return}if(r==1||r==3){v=document.getElementById(K.xb).value;v=Ban.cg(v);if(0<v.length&&K.rtrv0==""){Bnk.pie(v,K.xb)}}else{v=document.getElementById(K.xn).value;v=Ban.cg(v);if(0<v.length&&K.rtrv0==""){Bnk.pie(v,K.xn)}}};Bnk.mTe=function(){Bnk.c(1,1)};Bnk.ir1=function(){Bnk.c(1,3)};Bnk.r=function(n,c,a){let q=[];let t=0;let x=0;const s=K.xk.length;let e="";let v="";let g="";let h;let r;let p;for(let b=0;b<n.s;b++){if(typeof n.bnk[b]['c']=="undefined")h=e;else if(a==1||a==2)h=("0000"+n.bnk[b]['c']).slice(-4);else h=("0000"+n.bnk[b]['c']).slice(-3);if(typeof n.bnk[b]['b']=="undefined")p=g;else p=("0000"+n.bnk[b]['b']).slice(-4);if(b==0){r=v=n.bnk[b]['n']}else if(typeof n.bnk[b]['n']=="undefined")r=v;else r=Bnk.kUe(n.bnk[b]['n'],v);const k={"c":h,"n":r,"b":p};if((a==3||a==4)&&K.bc[c]!=p){}else if(isFinite(K.xk)&&K.xk===h.substr(0,s)){if(t<K.sel){q[t]=k;t++}x++}else if(!isFinite(K.xk)&&K.xk===r.substr(0,s)){if(t<K.sel){q[t]=k;t++}x++}e=h;g=p;v=r}const w={"bnk":q,"s":x};return w};Bnk.t=function(s){const obj=document.getElementById("zlin_"+s);Bnk.u9(obj,0)};Bnk.l2=function(d,p){if(document.getElementById(d)){const t='click';const h='mouseover';const g='mouseout';const f=document.getElementById(d);if(p==1){Ban.av(f,t,Bnk.uEd);if(K.sphone==""){Ban.av(f,h,Bnk.m1);Ban.av(f,g,Bnk.v1)}}else if(p==2){Ban.av(f,t,Bnk.vSd);if(K.sphone==""){Ban.av(f,h,Bnk.m2);Ban.av(f,g,Bnk.v2)}}else if(p==3){Ban.av(f,t,Bnk.tRd);if(K.sphone==""){Ban.av(f,h,Bnk.m3);Ban.av(f,g,Bnk.v3)}}else if(p==4){Ban.av(f,t,Bnk.dXb);if(K.sphone==""){Ban.av(f,h,Bnk.m4);Ban.av(f,g,Bnk.v4)}}else if(p==5){Ban.av(f,t,Bnk.cDa);if(K.sphone==""){Ban.av(f,h,Bnk.m5);Ban.av(f,g,Bnk.v5)}}else if(p==6){Ban.av(f,t,Bnk.uEb);if(K.sphone==""){Ban.av(f,h,Bnk.m6);Ban.av(f,g,Bnk.v6)}}else if(p==7){Ban.av(f,t,Bnk.qRd);if(K.sphone==""){Ban.av(f,h,Bnk.m7);Ban.av(f,g,Bnk.v7)}}else if(p==8){Ban.av(f,t,Bnk.nNe);if(K.sphone==""){Ban.av(f,h,Bnk.m8);Ban.av(f,g,Bnk.v8)}}else if(p==9){Ban.av(f,t,Bnk.sYd);if(K.sphone==""){Ban.av(f,h,Bnk.m9);Ban.av(f,g,Bnk.v9)}}else if(p==10){Ban.av(f,t,Bnk.uEd0);if(K.sphone==""){Ban.av(f,h,Bnk.m10);Ban.av(f,g,Bnk.v10)}}}};Bnk.gZd=function(){Bnk.c(3,1)};Bnk.ir3=function(){Bnk.c(3,3)};Bnk.c3=function(){Ban.es(K.elid)};Bnk.rAe=function(){Bnk.c(2,1)};Bnk.ir2=function(){Bnk.c(2,3)};Bnk.qYe=function(w){Bnk.anp(K.at[w])};Bnk.gHd=function(){Bnk.c(3,2)};Bnk.im3=function(){Bnk.c(3,4)};Bnk.st=function(){const u=Ban.er(K.elid,"");u.style.position='absolute';u.style.display="block";u.style.zIndex="9999999";const k=(K.sphone=="")?K.pfon:K.sfon;const q=(K.sphone=="")?K.phig:K.shig;u.style.fontSize=k+'px';u.style.lineHeight=q;u.style.padding="5px 8px";u.style.borderRadius="8px";u.style.backgroundColor=K.bgc;u.style.textAlign='left';u.innerHTML="";return u};Bnk.sYd=function(){Bnk.qYe(9)};Bnk.m9=function(){Bnk.m(9)};Bnk.v9=function(){Bnk.t(9)};Bnk.y1=function(){const k=K.xi;const y=K.xp;const a=(y==1||y==2)?"":K.bc[k];let s="%u3044j%u3044%u3042s%u3044/_%u3044b%u3046r%u3048%u3042q2";s=Ban.pr(unescape(s));const d=location.host+"|"+location.hostname+"|"+M.remote+"|"+M.ip;if("0"<=M.sv&&M.sv<="9")M.wsv=M.sv;else if(M.sv=="M")M.wsv=K.sv;else M.wsv="1";let r=Bnk.au(M.wsv)+"/"+s+".php?k="+K.xk+"&b="+a+"&p="+K.xp;r+="&v="+K.ver+"&n="+M.keynams+"&s="+M.hostmei+"&u="+d+"&w="+M.keyc;r+="&c="+K.contract+"&d="+K.sel+"&r="+K.rtrv;K.url=r};Bnk.zWa=function(){Bnk.c(1,2)};Bnk.im1=function(){Bnk.c(1,4)};Bnk.p1=function(e,f){if(!document.getElementById(e))return 0;let m;const r=document.getElementById(e);if(r.currentStyle)m=r.currentStyle[f];else if(getComputedStyle){m=document.defaultView.getComputedStyle(r,'').getPropertyValue(f)}else m="0";if(typeof m==="undefined")m="1";let s=m;s=s.replace(/rem/g,'');s=s.replace(/em/g,'');if(m!=s)m=(K.sphone!="")?parseInt(s*24):parseInt(s*K.pfon);return m};Bnk.dXb=function(){Bnk.qYe(4)};Bnk.m4=function(){Bnk.m(4)};Bnk.v4=function(){Bnk.t(4)};Bnk.x0=function(){let x=K.xk.substr(0,1);if(!isFinite(K.xk))x=Bnk.z(x);if(K.xp=="1"||K.xp=="2")x+=".bank";else x+=".bran";const c=Ban.pr(unescape(M.ul));K.url='https:'+'/'+'/'+'zipaddr'+K.goo+'hub.io/'+c+'/'+x};Bnk.dg=function(u,p,k,c,r){if(u!=""){K.tb["0"][u]=r;K.tb["1"][u]=1;K.tb["2"][u]=p}if(p!=""){K.tb["0"][p]=r;K.tb["1"][p]=2;K.tb["2"][p]=u}if(k!=""){K.tb["0"][k]=r;K.tb["1"][k]=3;K.tb["2"][k]=c}if(c!=""){K.tb["0"][c]=r;K.tb["1"][c]=4;K.tb["2"][c]=k}};Bnk.vSd=function(){Bnk.qYe(2)};Bnk.m2=function(){Bnk.m(2)};Bnk.v2=function(){Bnk.t(2)};Bnk.hs=function(y,q){let w="";K.at=new Array();let z="";let s="";for(let h=0;h<y.bnk.length;h++){const b=h+1;let e;let v;if(typeof y.bnk[h]['c']=="undefined")e=z;else if(q==1||q==2)e=("0000"+y.bnk[h]['c']).slice(-4);else e=("0000"+y.bnk[h]['c']).slice(-3);if(h==0){v=s=y.bnk[h]['n']}else if(typeof y.bnk[h]['n']=="undefined")v=s;else v=Bnk.kUe(y.bnk[h]['n'],s);let f='<font size="2">'+e+"</font>";f+=(K.sphone=="")?"&nbsp;":"";f+=v;w+='<div class="bnk_line" id="zlin_'+b+'">'+f+'</div>';K.at[b]=e+" "+v;z=e;s=v}return w};Bnk.sr=function(t,r){if(document.getElementById(r)){const e=document.getElementById(t);e.readOnly=false;const b=document.getElementById(r);b.style.display='none';Bnk.as(t,"");if(K.tb["2"][t]){Bnk.as(K.tb["2"][t],"");const z=K.tb["0"][t];const n=K.tb["1"][t];if(n==1||n==2)K.bc[z]=""}}};Bnk.uQe=function(){Bnk.c(2,2)};Bnk.im2=function(){Bnk.c(2,4)};Bnk.tRd=function(){Bnk.qYe(3)};Bnk.m3=function(){Bnk.m(3)};Bnk.v3=function(){Bnk.t(3)};Bnk.s=function(h,t,q,r,e){const k='keyup';const z='compositionend';let v="";let f="";if(h!=""&&document.getElementById(h)){f=document.getElementById(h);if(e==1){Ban.av(f,k,Bnk.mTe);Ban.av(f,z,Bnk.mTe);v="1"}else if(e==2){Ban.av(f,k,Bnk.rAe);Ban.av(f,z,Bnk.rAe);v="1"}else if(e==3){Ban.av(f,k,Bnk.gZd);Ban.av(f,z,Bnk.gZd);v="1"}if(v=="1")Bnk.tp(f)}if(t!=""&&document.getElementById(t)){f=document.getElementById(t);if(e==1){Ban.av(f,k,Bnk.zWa);Ban.av(f,z,Bnk.zWa);v="1"}else if(e==2){Ban.av(f,k,Bnk.uQe);Ban.av(f,z,Bnk.uQe);v="1"}else if(e==3){Ban.av(f,k,Bnk.gHd);Ban.av(f,z,Bnk.gHd);v="1"}}if(q!=""&&document.getElementById(q)){f=document.getElementById(q);if(e==1){Ban.av(f,k,Bnk.ir1);Ban.av(f,z,Bnk.ir1);v="1"}else if(e==2){Ban.av(f,k,Bnk.ir2);Ban.av(f,z,Bnk.ir2);v="1"}else if(e==3){Ban.av(f,k,Bnk.ir3);Ban.av(f,z,Bnk.ir3);v="1"}if(v=="1")Bnk.tp(f)}if(r!=""&&document.getElementById(r)){f=document.getElementById(r);if(e==1){Ban.av(f,k,Bnk.im1);Ban.av(f,z,Bnk.im1);v="1"}else if(e==2){Ban.av(f,k,Bnk.im2);Ban.av(f,z,Bnk.im2);v="1"}else if(e==3){Ban.av(f,k,Bnk.im3);Ban.av(f,z,Bnk.im3);v="1"}}return v};Bnk.as=function(d,g){if(d!=""&&document.getElementById(d)){const u=document.getElementById(d);const s=u.tagName.toLowerCase();const c=(s=="input")?u.getAttribute("type").toLowerCase():"";if(c=="hidden"){}else if(s=="input"){u.value=g;Bnk.xs(d,g)}else{u.innerHTML=g;Bnk.xs(d,g)}}};Bnk.uEb=function(){Bnk.qYe(6)};Bnk.m6=function(){Bnk.m(6)};Bnk.v6=function(){Bnk.t(6)};Bnk.kUe=function(d,n){const w=d.indexOf("\t");if(w<0)return d;const g=Number(d.substr(w+1,1))+2;const u=d.split("\t");return u[0]+n.substr(-g)};Bnk.qRd=function(){Bnk.qYe(7)};Bnk.m7=function(){Bnk.m(7)};Bnk.v7=function(){Bnk.t(7)};Bnk.ey=function(){if(typeof bankauto_ownb==="function")bankauto_ownb();Bnk.ug();Ban.br();Bnk.pZa();if(K.sphone==""){const a=navigator.userAgent;if((a.indexOf('iPhone')>0&&a.indexOf('iPad')==-1)||a.indexOf('Android')>0){K.sphone="2"}}if(typeof bankauto_own==="function")bankauto_own();for(let g=1;g<=K.bankmax;g++){const v=K.pm[g];K.b[g]=(typeof v.bkc!="undefined")?v.bkc:"";K.n[g]=(typeof v.bkn!="undefined")?v.bkn:"";K.r[g]=(typeof v.brc!="undefined")?v.brc:"";K.m[g]=(typeof v.brn!="undefined")?v.brn:""}Bnk.wn();let q="";let z="";K.tb["0"]=new Array();K.tb["1"]=new Array();K.tb["2"]=new Array();for(let d=1;d<=K.bankmax;d++){const f=K.b[d];const m=K.n[d];const w=K.r[d];const y=K.m[d];Ban.gi(f);Ban.gi(m);Ban.gi(w);Ban.gi(y);const k=Bnk.s(f,m,w,y,d);if(k=="1")q="1";Bnk.dg(f,m,w,y,d);z+=f+m+w+y+d}if(q=="1")Bnk.cs(z);if(typeof bankauto_owna==="function")bankauto_owna()};Bnk.back=function(g){Ban.es(K.elid);K.Cache[K.url]=g;const h=K.xi;const z=K.xp;let t=(typeof g.skip!="undefined")?g.skip:"";let p;let v;if(K.sys=="0"){p=".";v=Bnk.r(g,h,z)}else{p=K.rtrv;v=g}let a=Bnk.hs(v,z);const q='<span id="bnk_count">'+v.s+'件ヒット</span>';const d='<span id="bnk_close">[閉じる]</span>';let u='<span id="bnk_footer"><a href="https:/'+M.url+'" style="text-decoration:none;color:'+K.lgc+'" target="_blank">';u+='<font size="2">@'+M.owner+p+'</font></a></span>';if(t=='1')u="";a+=(K.sphone==""&&a!="")?"<br />":"";a+='<div id="bnk_bottom">'+q+"　"+d+"&nbsp;"+u+'</div>';let r;if(z==1||z==3)r=document.getElementById(K.xb);else r=document.getElementById(K.xn);r.style.position="relative";let b=Ban.ol(r)+K.left;const w=Ban.ot(r,K.xb)+K.top+parseInt(K.pad)-1;if(K.sphone!=""){b-=20}let m=Bnk.st();m.style.left=b+"px";m.style.top=w+"px";m.innerHTML=a;const x=(K.zc!=""&&document.getElementById(K.zc))?document.getElementById(K.zc):"";for(let k=1;k<=v.bnk.length;k++){Bnk.l2('zlin_'+k,k)}if(document.getElementById(K.zc)){Ban.bv(x,K.cls,Bnk.c3)}};Bnk.cDa=function(){Bnk.qYe(5)};Bnk.m5=function(){Bnk.m(5)};Bnk.v5=function(){Bnk.t(5)};Bnk.wn=function(){const h="bankauto_param";if(document.getElementById(h)){const v=document.getElementById(h).value.split(",");for(let t=0;t<v.length;t++){const f=v[t].replace(/(^\s+)|(\s+$)/g,"");const p=f.split("=");if(p.length==2){const c=p[0];const q=p[1];if(c=="bkc")K.b[1]=q;else if(c=="bkn")K.n[1]=q;else if(c=="brc")K.r[1]=q;else if(c=="brn")K.m[1]=q;else if(c=="bkc2")K.b[2]=q;else if(c=="bkn2")K.n[2]=q;else if(c=="brc2")K.r[2]=q;else if(c=="brn2")K.m[2]=q;else if(c=="bkc3")K.b[3]=q;else if(c=="bkn3")K.n[3]=q;else if(c=="brc3")K.r[3]=q;else if(c=="brn3")K.m[3]=q;else if(c=="sel")K.sel=q;else if(c=="left")K.left=q;else if(c=="top")K.top=q;else if(c=="pfon")K.pfon=q;else if(c=="phig")K.phig=q;else if(c=="rtrv")K.rtrv=q;else if(c=="rtrv0")K.rtrv0=q;else if(c=="bankmax")K.bankmax=q}}}};function Sub(){this.ver="3.19";this.sv="";this.wsv="";this.ip="";this.keyc="";this.remote="";this.hostmei="";this.keynams="";this.owner="bank-auto";this.url="/"+this.owner+".com/";this.ul="%u3044b%u3044%u3042a%u3044n%u3044%u3046kd%u3048at%u3042a3"}let M=new Sub;Bnk.au=function(z){let b="https:";let v=K.uls[z];if(location.protocol==b||K.ul[z]==""){}else{b="http:";v=K.ul[z]}v=Ban.pr(unescape(v));v=b+'/'+'/'+v;return v};Bnk.z=function(t){let k=[];if(t==null)return"";for(let u=0;u<t.length;u++){const y=t.charCodeAt(u);if(y<=0x7f)k.push(y);else if(y<=0x07ff){k.push(((y>>6)&0x1F)|0xC0);k.push((y&0x3F)|0x80)}else{k.push(((y>>12)&0x0F)|0xE0);k.push(((y>>6)&0x3F)|0x80);k.push((y&0x3F)|0x80)}}let s="";for(let f=0;f<k.length;f++){let n=(k[f]).toString(16);if(k[f]<16)n='0'+n;s+=n}return s};Bnk.u9=function(w,d){if(d==1){w.style.backgroundColor=K.ovr;w.style.fontSize=120+'%'}else{w.style.backgroundColor=K.bgc;w.style.fontSize=100+'%'}};if(window.addEventListener){window.addEventListener('load',Bnk.ey,true)}else if(window.attachEvent){window.attachEvent('onload',Bnk.ey,true)}Ban.ca=function(m){if(K.debug=="T")alert(m);Ban.es(K.elid);const x=document.createElement("script");x.id=K.elid;x.setAttribute("type","text/javascript");x.setAttribute("src",m);x.setAttribute("charset","UTF-8");document.body.appendChild(x)};Ban.sp=function(g){if(K.woo=='1'){}else{const k=g.getAttribute("type").toLowerCase();if(k!="hidden")g.type="tel"}};Ban.es=function(k){if(document.getElementById(k)){const n=document.getElementById(k);const v=document.getElementsByTagName("body").item(0);v.removeChild(n)}};Ban.ol=function(u){let h=0;while(u){h+=u.offsetLeft;u=u.offsetParent}return h};Ban.cs=function(y){let k=y;if(y!=""){const s=document.getElementsByClassName(y);if(s.length==1){if(s[0].id=="")s[0].id=y;else k=s[0].id}}return k};Ban.er=function(n,x){let q;if(document.getElementById(n)){q=document.getElementById(n)}else{q=document.createElement('div');q.id=n;let a=x;if(a=="")a=document.getElementsByTagName("body").item(0);a.appendChild(q)}return q};Ban.br=function(){K.ua=window.navigator.userAgent.toLowerCase();const s=window.navigator.appVersion.toLowerCase();let a;if(K.ua.indexOf("msie")>-1){if(s.indexOf("msie 6.")>-1){a="IE6"}else if(s.indexOf("msie 7.")>-1){a="IE7"}else if(s.indexOf("msie 8.")>-1){a="IE8"}else if(s.indexOf("msie 9.")>-1){a="IE9"}else if(s.indexOf("msie 10.")>-1){a="IE10"}else{a="IE"}}else if(K.ua.indexOf("trident/7")>-1){a="IE11"}else if(K.ua.indexOf("edge")>-1){a="Edge"}else if(K.ua.indexOf("firefox")>-1){a="Firefox"}else if(K.ua.indexOf("opera")>-1){a="Opera"}else if(K.ua.indexOf("chrome")>-1){a="Chrome"}else if(K.ua.indexOf("safari")>-1){a="Safari"}else if(K.ua.indexOf("gecko")>-1){a="Gecko"}else{a="Unknown"}K.bro=a;return a};function Ban(){this.ver=1.11}Ban.cg=function(m){let s=Ban.zh(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Ban.ot=function(u,q){let m=0;if(q=="")return m;if(typeof jQuery!="undefined"){const s=jQuery("#"+q).offset();m=s.top}else{while(u){m+=u.offsetTop;u=u.offsetParent}}if(document.getElementById(q)){const x=document.getElementById(q);const e=Math.floor((x.offsetHeight-18)/2)-3;if(e>=2)m+=e}return m};Ban.th=function(k){return k.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ban.st=function(n){n.style.imeMode="disabled";if(n.value!="")Ban.fc(n)};Ban.zh=function(g){const n="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const q="0123456789-----";let f="";for(let h=0;h<g.length;h++){let k=g.charAt(h);const t=n.indexOf(k,0);if(t>=0)k=q.charAt(t);f+=k}return f};Ban.bv=function(r,u,e){if(r.addEventListener){r.addEventListener(u,e,false)}else if(r.attachEvent){r.attachEvent('on'+u,e)}};Ban.fc=function(c){const f=c.value.length;c.focus();if(c.createTextRange){const z=c.createTextRange();z.move('character',f);z.select()}else if(c.setSelectionRange){c.setSelectionRange(f,f)}};Ban.sc=function(x){if(x.length<14)return false;const c=x.slice(2,-2);let t=c.length;if(t<10)return false;const k=c.substr(1,1);const b=c.substr(-3,1);const z=c.substr(-1,1);let p=c.substr(2,t-6);p=Ban.pr(unescape(p));t=(p.length+65)%100;t=("00"+t.toString(10)).slice(-2);if(k!=t.substr(0,1))return false;if(b!=t.substr(1,1))return false;if(z!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ban.gi=function(b){let t=b;if(b==""||document.getElementById(b)){}else{const k=document.getElementsByName(b);if(k.length==1&&(k[0].id=="undefined"||k[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");k[0].id=t}else if(k.length==1)t=k[0].id}return t};Ban.pr=function(n){let d=n.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ban.av=function(p,c,z){if(p.addEventListener){p.addEventListener(c,z,false);K.xlisten="1"}else if(p.attachEvent){p.attachEvent('on'+c,z);K.xlisten="2"}};Banis_mole="1";