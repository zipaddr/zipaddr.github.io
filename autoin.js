Ato.k=function(){const d=window.navigator.userAgent.toLowerCase();if((d.indexOf('iphone')>0&&d.indexOf('ipad')==-1)||d.indexOf('android')>0)T.sphone="1";T.inp=Ato.i();Ato.a(Ato.f(),Ato.h())};function Ato(){this.ver="3.3";this.use=0;this.sphone="";this.left=22;this.top=18;this.pfon="12";this.phig="1.4";this.sfon="16";this.shig="1.6";this.bgc="#009999";this.inp="";this.fid="autoin";this.uid=this.fid+"_def";this.pre=this.fid+"_pre";this.elid=this.fid+"puts";this.htps="https://";this.targ="%u3042/%u3044j%u3042s%u3044/%u3046"+this.fid+"p%u3046.h%u3044tm%u3046l";this.host=new Array();this.host[0]=this.fid+"%u3044.%u3042j%u3046p";this.host[1]="%u3046pie%u3042rr%u3046e-%u3044s%u3046o%u3042f%u3044t.%u3042co%u3044m"}let T=new Ato;Ato.x=function(d,q,v,y){const b=(d=="1")?"男性":"女性";if(v=="select"){}else if(y=="radio")Ato.d(q,d,b);else if(y=="checkbox")Ato.d(q,d,b);else q.value=b};Ato.h=function(){let g='<form name="autoform" method="post" action="#" enctype="multipart/form-data" />';g+='<style type="text/css"><!--.autoins{color:#ffffff;font-size:12px;}--></style>';g+='<input type="file" name="##" id="##" onchange="Ato.s()"><br />　　　　';g+='<a href="'+T.htps+'##.jp/define/"><span class="autoins">固有情報定義</span></a>　　';g+='<a href="'+T.htps+'##.jp/"><span class="autoins">##.jp</span></a> V'+T.ver;g+='</form>';g=g.replace(/##/g,T.fid);return g};Ato.in=function(){if(T.use==0){T.use=1;Ato.k()}else Ato.c()};Ato.f=function(){const h=Ext.er(T.elid,"");h.style.position='absolute';h.style.display="block";h.style.zIndex="9999999";const k=(T.sphone=="")?T.pfon:T.sfon;const u=(T.sphone=="")?T.phig:T.shig;h.style.fontSize=k+'px';h.style.lineHeight=u;h.style.padding="5px 8px";h.style.borderRadius="8px";h.style.backgroundColor=T.bgc;h.style.textAlign='left';h.innerHTML="";return h};Ato.ret=function(w){for(let a=0;a<w.ato.length;a++){const f=w.ato[a].k;let k=w.ato[a].d;if(document.getElementById(f)){const c=document.getElementById(f);const x=c.tagName.toLowerCase();let e=c.getAttribute("type");e=(e==null)?"":e.toLowerCase();if(f.indexOf('sex')!=-1){Ato.x(k,c,x,e)}else if(f.indexOf('pref')!=-1){Ato.e(k,c,x,f)}else{if(f.indexOf('birth')!=-1)k=k.replace(/\//g,'-');c.value=k}}}Ato.c()};Ato.a=function(n,p){let d=document.getElementById(T.uid);d.style.position="relative";d.noWrap="true";const e=Ato.p(d,"padding-top");let c=Ext.ol(d)+T.left;let k=Ext.ot(d,T.uid)+T.top+parseInt(e)-1;n.style.left=c+"px";n.style.top=k+"px";n.innerHTML=p};Ato.t=function(){const f=["","北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];return f};Ato.p=function(v,f){let w="0";if(v.currentStyle)w=v.currentStyle[f];else if(getComputedStyle){w=document.defaultView.getComputedStyle(v,'').getPropertyValue(f)}if(typeof w==="undefined")w="1";let d=w;d=d.replace(/rem/g,'');d=d.replace(/em/g,'');if(w!=d)w=(T.sphone!="")?parseInt(d*24):parseInt(d*12);return w};Ato.b=function(r){let c="";const b=r.replace(/\r|\n/g,'');const g=b.split(';');for(let h=0;h<g.length;h++){const n=g[h].split(':');if(n.length==2){let s=n[1];s=s.replace(/^\s+|\s+$/g,'');if(s!="")c+=n[0]+":"+s+";"}}return c};Ato.d=function(p,q,c){const n=p.name;const f=document.getElementsByName(n);for(let z=0;z<f.length;z++){const x=f[z].value.trim();if(x==q||x==c){f[z].checked=true;break}}};Ato.n=function(b){let s="";const y=document.getElementsByTagName(b);for(let a=0;a<y.length;a++){const v=y[a].id;if(v!=""){let e=y[a].getAttribute("type");e=(e==null)?"":e.toLowerCase();if(v==T.fid||v==T.uid){}else if(e!="hidden"){s+=(s=="")?v:","+v}}}return s};Ato.s=function(){const a=document.getElementById(T.pre)?document.getElementById(T.pre).value:"";const u=document.getElementById(T.fid).files[0];const c=new FileReader();c.readAsText(u,"utf-8");c.onload=function(evt){let b=Math.floor(Math.random()*2);b=0;const z=T.host[b];const p=Ext.pr(unescape(z));const w=Ext.pr(unescape(T.targ));const x=Ato.b(evt.target.result);let y=T.htps+p+w;y+='?'+T.fid+'d='+x;y+='&'+T.fid+'c='+T.inp;y+='&'+T.fid+'p='+a;Ext.ca(y)}};Ato.e=function(y,a,w,q){const f=Ato.t();const s=f[y];if(w=="select"){const t=document.getElementById(q).options;for(let h=0;h<t.length;h++){if(t[h].text===s){t[h].selected=true;break}}}else a.value=s};Ato.i=function(){let d=Ato.n("input");const t=Ato.n("select");if(t!=""&&d=="")d=t;else if(t!=""&&d!="")d+=","+t;return d};Ato.c=function(){T.use=0;Ext.es(T.elid)};Ext.sp=function(a){if(T.woo=='1'){}else{const y=a.getAttribute("type").toLowerCase();if(y!="hidden")a.type="tel"}};Ext.st=function(q){q.style.imeMode="disabled"};Ext.cs=function(r){if(r!=""){const n=document.getElementsByClassName(r);if(n.length==1&&!document.getElementById(r)){if(n[0].id=="")n[0].id=r}}};Ext.gi=function(u){let v=u;if(u==""||document.getElementById(u)){}else{const w=document.getElementsByName(u);if(w.length==1&&(w[0].id=="undefined"||w[0].id=="")){v=v.replace(/\[/g,"");v=v.replace(/\]/g,"");w[0].id=v}else if(w.length==1)v=w[0].id}return v};Ext.pr=function(n){let v=n.replace(/う/g,'');v=v.replace(/あ/g,'');v=v.replace(/い/g,'');v=v.replace(/え/g,'');return v};Ext.br=function(){T.ua=window.navigator.userAgent.toLowerCase();const m=window.navigator.appVersion.toLowerCase();let t;if(T.ua.indexOf("msie")>-1){if(m.indexOf("msie 6.")>-1){t="IE6"}else if(m.indexOf("msie 7.")>-1){t="IE7"}else if(m.indexOf("msie 8.")>-1){t="IE8"}else if(m.indexOf("msie 9.")>-1){t="IE9"}else if(m.indexOf("msie 10.")>-1){t="IE10"}else{t="IE"}}else if(T.ua.indexOf("trident/7")>-1){t="IE11"}else if(T.ua.indexOf("edge")>-1){t="Edge"}else if(T.ua.indexOf("firefox")>-1){t="Firefox"}else if(T.ua.indexOf("opera")>-1){t="Opera"}else if(T.ua.indexOf("chrome")>-1){t="Chrome"}else if(T.ua.indexOf("safari")>-1){t="Safari"}else if(T.ua.indexOf("gecko")>-1){t="Gecko"}else{t="Unknown"}T.bro=t;return t};Ext.sc=function(a){if(a.length<14)return false;const n=a.slice(2,-2);let k=n.length;if(k<10)return false;const e=n.substr(1,1);const u=n.substr(-3,1);const v=n.substr(-1,1);let p=n.substr(2,k-6);p=Ext.pr(unescape(p));k=(p.length+65)%100;k=("00"+k.toString(10)).slice(-2);if(e!=k.substr(0,1))return false;if(u!=k.substr(1,1))return false;if(v!=p.split(".").length)return false;if(p!=location.hostname)return false;return true};Ext.ca=function(s){if(T.debug=="T")alert(s);Ext.es(T.elid);const e=document.createElement("script");e.id=T.elid;e.setAttribute("type","text/javascript");e.setAttribute("src",s);e.setAttribute("charset","UTF-8");document.body.appendChild(e)};Ext.cg=function(k){let f=Ext.zh(k);f=f.replace(/-/g,'');f=f.replace(/\s/g,'');return f};Ext.av=function(s,e,u){if(s.addEventListener){s.addEventListener(e,u,false);T.xlisten="1"}else if(s.attachEvent){s.attachEvent('on'+e,u);T.xlisten="2"}};Ext.th=function(a){return a.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ext.ot=function(w,g){let a=0;if(g=="")return a;if(typeof jQuery!="undefined"){const n=jQuery("#"+g).offset();a=n.top}else{while(w){a+=w.offsetTop;w=w.offsetParent}}if(document.getElementById(g)){const r=document.getElementById(g);const z=Math.floor((r.offsetHeight-18)/2)-3;if(z>=2)a+=z}return a};Ext.zh=function(x){const r="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const s="0123456789-----";let n="";for(let p=0;p<x.length;p++){let d=x.charAt(p);const b=r.indexOf(d,0);if(b>=0)d=s.charAt(b);n+=d}return n};Ext.er=function(z,v){let k;if(document.getElementById(z)){k=document.getElementById(z)}else{k=document.createElement('div');k.id=z;let u=v;if(u=="")u=document.getElementsByTagName("body").item(0);u.appendChild(k)}return k};Ext.fc=function(n){const m=n.value.length;n.focus();if(n.createTextRange){const x=n.createTextRange();x.move('character',m);x.select()}else if(n.setSelectionRange){n.setSelectionRange(m,m)}};function Ext(){this.ver=1.8}let X=new Ext;Ext.bv=function(a,p,w){if(a.addEventListener){a.addEventListener(p,w,false)}else if(a.attachEvent){a.attachEvent('on'+p,w)}};Ext.ol=function(t){let p=0;while(t){p+=t.offsetLeft;t=t.offsetParent}return p};Ext.es=function(c){if(document.getElementById(c)){const e=document.getElementById(c);const a=document.getElementsByTagName("body").item(0);a.removeChild(e)}};Extis_mole="1";