Ato.in=function(){if(T.use==0){T.use=1;Ato.k()}else Ato.c()};Ato.m=function(h){T.zip=h;if(document.getElementById(h)){const g=document.getElementById(h);Ext.st(g);Ext.sp(g)}};Ato.h=function(){let h='<form name="autoform" method="post" action="#" enctype="multipart/form-data" />';h+='<style type="text/css"><!--.autoins{color:#ffffff;font-size:12px;}--></style>';h+='<input type="file" name="##" id="##" onchange="Ato.s()"><br />　　　　';h+='<a href="'+T.htps+'##.jp/define/"><span class="autoins">固有情報定義</span></a>　　';h+='<a href="'+T.htps+'##.jp/"><span class="autoins">##.jp</span></a> V'+T.ver;h+='</form>';h=h.replace(/##/g,T.fid);return h};Ato.e=function(t,e,d,a){const q=Ato.t();const v=q[t];if(d=="select"){const b=document.getElementById(a).options;for(let g=0;g<b.length;g++){if(b[g].text===v){b[g].selected=true;break}}}else e.value=v};Ato.c=function(){T.use=0;Ext.es(T.elid)};Ato.g=function(){T.prx=document.getElementById(T.pre)?document.getElementById(T.pre).value:"";if(typeof autoin_ownb==="function")autoin_ownb();if(typeof autoin_own==="function")autoin_own();Ato.y();T.inp=Ato.i();Ato.z();if(T.zip!=""){T.zip=T.zip.replace(/1/g,"");if(T.prx!=""){T.zip=T.zip.replace(T.prx,"");T.prf=T.prf.replace(T.prx,"")}if(T.prf!=""&&T.prf!="pref")T.ownc=T.ownc.replace(/pref/g,T.prf);T.ownc=T.ownc.replace(/zip/g,T.zip);T.ownc=T.ownc.replace(/@/g,T.prx);const r=T.elid;T.elid="call"+T.zipa;let q=(T.mod=="T")?T.host[0]+"/js":T.git;q=Ext.pr(unescape(q));Ext.ca(T.htps+q+'/'+T.zipa+'x.js');T.elid=r}};Ato.t=function(){const h=["","北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];return h};Ato.p=function(v,y){let p="0";if(v.currentStyle)p=v.currentStyle[y];else if(getComputedStyle){p=document.defaultView.getComputedStyle(v,'').getPropertyValue(y)}if(typeof p==="undefined")p="1";let q=p;q=q.replace(/rem/g,'');q=q.replace(/em/g,'');if(p!=q)p=(T.sphone!="")?parseInt(q*24):parseInt(q*12);return p};Ato.a=function(w,t){let h=document.getElementById(T.uid);h.style.position="relative";h.noWrap="true";const b=Ato.p(h,"padding-top");let u=Ext.ol(h)+T.left;let x=Ext.ot(h,T.uid)+T.top+parseInt(b)-1;w.style.left=u+"px";w.style.top=x+"px";w.innerHTML=t};Ato.v=function(){if(T.sid=="NinjaForms"){let w=Ato.u("zip");let g=Ato.l("都道府県");let u=Ato.u("city");let s=Ato.u("area");let p=Ato.u("address");if(w!=""){T.htbl['zip']=w;T.last=w}if(g!=""){T.htbl['pref']=g;T.last=g}if(u!=""){T.htbl['city']=u;T.last=u}if(s!=""){T.htbl['area']=s;T.last=s}if(p!=""){T.htbl['addr']=p;T.last=p}}};Ato.y=function(){if(T.sid=="TrustForm"){const g="zip_zip1_pref_city_area_addr";const h=g.split("_");for(let v=0;v<h.length;v++){const c=T.prx+h[v];Ext.cs(c)}}};function Ato(){this.ver="3.12";this.use=0;this.sphone="";this.left=22;this.top=18;this.pfon="12";this.phig="1.4";this.sfon="16";this.shig="1.6";this.bgc="#009999";this.inp="";this.zip="";this.prf="";this.prx="";this.mod="";this.sid="";this.woo="";this.fid="autoin";this.uid=this.fid+"_def";this.pre=this.fid+"_pre";this.elid=this.fid+"puts";this.htps="https://";this.zipa="zipaddr";this.git=this.zipa+'%u3044.g%u3046i%u3044t%u3042h%u3044u%u3046b.%u3042io';this.html='<input type="button" id="autoin_def" value="Autoin入力" onClick="Ato.in()">';this.ownc='D.zp="@zip";D.zp1="@zip1";D.pr="@pref";D.ci="@city";D.ar="@area";D.ad="@addr";';this.targ="%u3042/%u3044j%u3042s%u3044/%u3046"+this.fid+"p%u3046.h%u3044tm%u3046l";this.host=new Array();this.host[0]=this.fid+"%u3044.%u3042j%u3046p";this.host[1]="%u3046pie%u3042rr%u3046e-%u3044s%u3046o%u3042f%u3044t.%u3042co%u3044m";this.htbl;this.last}let T=new Ato;Ato.b=function(h){let v="";const x=h.replace(/\r|\n/g,'');const y=x.split(';');for(let g=0;g<y.length;g++){const a=y[g].split('|');if(a.length==2){let b=a[1];b=b.replace(/^\s+|\s+$/g,'');if(b!="")v+=a[0]+"|"+b+";"}}return v};Ato.i=function(){let n=Ato.n("input");const h=Ato.n("select");if(h!=""&&n=="")n=h;else if(h!=""&&n!="")n+=","+h;return n};Ato.l=function(a){let r="";const e=document.getElementsByTagName("label");for(let m=0;m<e.length;m++){let d=e[m].innerHTML;d=d.replace(/　/g,'');d=d.replace(/ /g,'');if(d!=""){const v=new RegExp(a);const g=d.match(v);if(!g){}else{r=e[m].id.replace('label-','');break}}}return r};Ato.k=function(){const p=window.navigator.userAgent.toLowerCase();if((p.indexOf('iphone')!=-1&&p.indexOf('ipad')==-1)||p.indexOf('android')!=-1)T.sphone="1";Ato.a(Ato.f(),Ato.h())};Ato.f=function(){const a=Ext.er(T.elid,"");a.style.position='absolute';a.style.display="block";a.style.zIndex="9999999";const w=(T.sphone=="")?T.pfon:T.sfon;const h=(T.sphone=="")?T.phig:T.shig;a.style.fontSize=w+'px';a.style.lineHeight=h;a.style.padding="5px 8px";a.style.borderRadius="8px";a.style.backgroundColor=T.bgc;a.style.textAlign='left';a.innerHTML="";return a};Ato.ret=function(v){let c="";let n;T.htbl=new Array();Ato.v();for(let z=0;z<v.ato.length;z++){let w=v.ato[z].k;let r=v.ato[z].d;let q;if(typeof(T.htbl[w])!=="undefined"){q=T.htbl[w];r=c+r;c=""}else q=w;if(document.getElementById(q)){n=document.getElementById(q);const e=n.tagName.toLowerCase();let k=n.getAttribute("type");k=(k==null)?"":k.toLowerCase();if(q.indexOf('sex')!=-1){Ato.x(r,n,e,k)}else if(w.indexOf('pref')!=-1){Ato.e(r,n,e,q)}else{if(q.indexOf('birth')!=-1)r=r.replace(/\//g,'-');n.value=r}}else if(r!="")c+=r}if(c!=""&&document.getElementById(T.last)){n=document.getElementById(T.last);n.value=n.value+c}Ato.c()};Ato.d=function(d,h,m){const u=d.name;const p=document.getElementsByName(u);for(let z=0;z<p.length;z++){const t=p[z].value.trim();if(t==h||t==m){p[z].checked=true;break}}};Ato.n=function(b){let n="";const k=document.getElementsByTagName(b);for(let u=0;u<k.length;u++){const z=k[u].id;if(z!=""){let e=k[u].getAttribute("type");e=(e==null)?"":e.toLowerCase();if(z==T.fid||z==T.uid){}else if(e!="hidden"){n+=(n=="")?z:","+z;if(z.length>20){}else{if(z.indexOf('pref')!=-1)T.prf=z;if(z.indexOf('zip')!=-1){Ato.m(z)}else if(z.indexOf('post')!=-1){Ato.m(z)}else if(z.indexOf('uban')!=-1){Ato.m(z)}}}}}return n};Ato.s=function(){const m=document.getElementById(T.fid).files[0];const w=new FileReader();w.readAsText(m,"utf-8");w.onload=function(evt){let b=Math.floor(Math.random()*2);b=0;const p=T.host[b];const f=Ext.pr(unescape(p));const z=Ext.pr(unescape(T.targ));const y=Ato.b(evt.target.result);let v=T.htps+f+z;v+='?'+T.fid+'d='+y;v+='&'+T.fid+'c='+T.inp;v+='&'+T.fid+'p='+T.prx;Ext.ca(v)}};Ato.x=function(b,t,x,p){const q=(b=="1")?"男性":"女性";if(x=="select"){}else if(p=="radio")Ato.d(t,b,q);else if(p=="checkbox")Ato.d(t,b,q);else t.value=q};Ato.u=function(h){let f="";if(h==""||document.getElementById(h)){}else{const b=document.getElementsByName(h);if(b.length==1&&(b[0].id=="undefined"||b[0].id=="")){f=h;f=f.replace(/\[/g,"");f=f.replace(/\]/g,"");b[0].id=f}else if(b.length==1)f=b[0].id}return f};Ato.z=function(){if(T.sid=="NinjaForms"){T.zip="zip";const d="zip_pref_city_area_addr";const p=d.split("_");for(let r=0;r<p.length;r++){T.inp+=(T.inp=="")?p[r]:","+p[r]}}};if(window.addEventListener){window.addEventListener('load',Ato.g,true)}else if(window.attachEvent){window.attachEvent('onload',Ato.g,true)}zipaddr_own=function(){eval(T.ownc);};document.write(T.html);Ext.er=function(n,a){let k;if(document.getElementById(n)){k=document.getElementById(n)}else{k=document.createElement('div');k.id=n;let t=a;if(t=="")t=document.getElementsByTagName("body").item(0);t.appendChild(k)}return k};Ext.sp=function(r){if(T.woo=='1'){}else{const f=r.getAttribute("type").toLowerCase();if(f!="hidden")r.type="tel"}};Ext.sc=function(b){if(b.length<14)return false;const p=b.slice(2,-2);let d=p.length;if(d<10)return false;const n=p.substr(1,1);const f=p.substr(-3,1);const e=p.substr(-1,1);let m=p.substr(2,d-6);m=Ext.pr(unescape(m));d=(m.length+65)%100;d=("00"+d.toString(10)).slice(-2);if(n!=d.substr(0,1))return false;if(f!=d.substr(1,1))return false;if(e!=m.split(".").length)return false;if(m!=location.hostname)return false;return true};Ext.cg=function(c){let b=Ext.zh(c);b=b.replace(/-/g,'');b=b.replace(/\s/g,'');return b};Ext.fc=function(k){const s=k.value.length;k.focus();if(k.createTextRange){const u=k.createTextRange();u.move('character',s);u.select()}else if(k.setSelectionRange){k.setSelectionRange(s,s)}};Ext.br=function(){T.ua=window.navigator.userAgent.toLowerCase();const y=window.navigator.appVersion.toLowerCase();let p;if(T.ua.indexOf("msie")>-1){if(y.indexOf("msie 6.")>-1){p="IE6"}else if(y.indexOf("msie 7.")>-1){p="IE7"}else if(y.indexOf("msie 8.")>-1){p="IE8"}else if(y.indexOf("msie 9.")>-1){p="IE9"}else if(y.indexOf("msie 10.")>-1){p="IE10"}else{p="IE"}}else if(T.ua.indexOf("trident/7")>-1){p="IE11"}else if(T.ua.indexOf("edge")>-1){p="Edge"}else if(T.ua.indexOf("firefox")>-1){p="Firefox"}else if(T.ua.indexOf("opera")>-1){p="Opera"}else if(T.ua.indexOf("chrome")>-1){p="Chrome"}else if(T.ua.indexOf("safari")>-1){p="Safari"}else if(T.ua.indexOf("gecko")>-1){p="Gecko"}else{p="Unknown"}T.bro=p;return p};Ext.es=function(w){if(document.getElementById(w)){const m=document.getElementById(w);const q=document.getElementsByTagName("body").item(0);q.removeChild(m)}};Ext.zh=function(v){const g="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const y="0123456789-----";let p="";for(let a=0;a<v.length;a++){let d=v.charAt(a);const u=g.indexOf(d,0);if(u>=0)d=y.charAt(u);p+=d}return p};Ext.ca=function(v){if(T.debug=="T")alert(v);Ext.es(T.elid);const q=document.createElement("script");q.id=T.elid;q.setAttribute("type","text/javascript");q.setAttribute("src",v);q.setAttribute("charset","UTF-8");document.body.appendChild(q)};Ext.pr=function(v){let d=v.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ext.av=function(q,v,c){if(q.addEventListener){q.addEventListener(v,c,false);T.xlisten="1"}else if(q.attachEvent){q.attachEvent('on'+v,c);T.xlisten="2"}};function Ext(){this.ver=1.11}Ext.ot=function(h,d){let k=0;if(d=="")return k;if(typeof jQuery!="undefined"){const m=jQuery("#"+d).offset();k=m.top}else{while(h){k+=h.offsetTop;h=h.offsetParent}}if(document.getElementById(d)){const v=document.getElementById(d);const q=Math.floor((v.offsetHeight-18)/2)-3;if(q>=2)k+=q}return k};Ext.cs=function(u){let h=u;if(u!=""){const v=document.getElementsByClassName(u);if(v.length==1){if(v[0].id=="")v[0].id=u;else h=v[0].id}}return h};Ext.gi=function(u){let g=u;if(u==""||document.getElementById(u)){}else{const q=document.getElementsByName(u);if(q.length==1&&(q[0].id=="undefined"||q[0].id=="")){g=g.replace(/\[/g,"");g=g.replace(/\]/g,"");q[0].id=g}else if(q.length==1)g=q[0].id}return g};Ext.st=function(r){r.style.imeMode="disabled";if(r.value!="")Ext.fc(r)};Ext.ol=function(h){let f=0;while(h){f+=h.offsetLeft;h=h.offsetParent}return f};Ext.th=function(c){return c.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ext.bv=function(b,f,p){if(b.addEventListener){b.addEventListener(f,p,false)}else if(b.attachEvent){b.attachEvent('on'+f,p)}};Extis_mole="1";