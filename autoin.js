function Ato(){
/*
■究極の自動入力ＥＦＯツールAutoin.js(Ver3.18)

The use is free of charge.// ご利用は無料です。
[htmlの定義]
  <script src="https://zipaddr.github.io/autoin.js" charset="UTF-8"></script>
*/
this.ver="3.18";
this.sphone=""; // 1:mobile
this.left=22;
this.top=18;
this.pfon="12"; // pc:font-size
this.phig="1.4";// pc:height
this.sfon="16";
this.shig="1.6";
this.bgc="#009999";
this.mod="x";
this.prx="";    // field_
this.sid="";
this.woo="";
this.fid="autoin";         // file
this.uid= this.fid+"_def"; // user_define
this.pre= this.fid+"_pre"; // Prefix
this.elid=this.fid+"puts"; //newMenu
this.use=0;this.inp="";this.zip="";this.zp1="";this.prf="";this.cty="";this.ara="";this.adr="";this.zip2="";this.zp21="";this.prf2="";this.cty2="";this.ara2="";this.adr2="";this.dbg="";this.html='<input type="button" id="autoin_def" value="Autoin入力" onClick="Ato.in()">';this.ownc='D.zp="@zzz";D.zp1="@iii";D.pr="@ppp";D.ci="@ccc";D.ar="@aaa";D.ad="@ddd";';this.ownc2='D.zp2="@zzz";D.zp21="@iii";D.pr2="@ppp";D.ci2="@ccc";D.ar2="@aaa";D.ad2="@ddd";';this.htps="https://";this.zipa="zipaddr";this.zipc=this.zipa+".%u3042c%u3046o%u3044m%u3046/%u3044j%u3042s";this.targ="%u3042/%u3044j%u3042s%u3044/%u3046"+this.fid+"p%u3046.h%u3044tm%u3046l";this.host=new Array();this.host[0]=this.fid+"%u3044.%u3042j%u3046p";this.host[1]="%u3046pie%u3042rr%u3046e-%u3044s%u3046o%u3042f%u3044t.%u3042co%u3044m";this.htbl=new Array();this.last=""}let T=new Ato;Ato.b=function(u){let h="";const a=u.replace(/\r|\n/g,'');const x=a.split(';');for(let g=0;g<x.length;g++){const q=x[g].split('|');if(q.length==2){let y=q[1];y=y.replace(/^\s+|\s+$/g,'');if(y!="")h+=q[0]+"|"+y+";"}}return h};Ato.i=function(){let n=Ato.n("input");const q=Ato.n("select");const r=Ato.n("textarea");if(q!="")n+=(n=="")?q:","+q;if(r!="")n+=(n=="")?r:","+r;return n};Ato.ret=function(s){if(typeof s.w!="undefined"&&s.w!="")T.prx=s.w;let h="";let x;Ato.v();for(let c=0;c<s.ato.length;c++){let m=s.ato[c].k;let t=s.ato[c].d;let g=m;if(typeof(T.htbl[m])!=="undefined"){g=T.htbl[m];if(m=="city"||m=="area"||m=="addr"||m=="city2"||m=="area2"||m=="addr2"){t=h+t}h=""}g=T.prx+g;if(T.dbg!="")alert(g);if(document.getElementById(g)){x=document.getElementById(g);const z=x.tagName.toLowerCase();let u=x.getAttribute("type");u=(u==null)?"":u.toLowerCase();if(g.indexOf('sex')!=-1){Ato.x(t,x,z,u)}else if(m.indexOf('pref')!=-1){Ato.e(t,x,z,g)}else if(u=="radio"||u=="checkbox")Ato.checked(x.name,t);else if(z=="select")x.value=t;else{if(g.indexOf('birth')!=-1)t=t.replace(/\//g,'-');x.value=t}h=""}else if(t!=""){if(m.indexOf('city')!=-1)h+=t;else if(m.indexOf('area')!=-1)h+=t;else if(m.indexOf('addr')!=-1)h+=t}}if(h!=""&&T.last!=""&&document.getElementById(T.last)){x=document.getElementById(T.last);x.value=x.value+h}Ato.c()};Ato.e=function(v,e,r,a){const n=Ato.t();const x=n[v];if(r=="select"){const d=document.getElementById(a).options;for(let c=0;c<d.length;c++){if(d[c].text===x){d[c].selected=true;break}}}else e.value=x};Ato.m=function(q,b){let h=0;if(b.indexOf('21')!=-1)T.zp21=b;else if(b.indexOf('2')!=-1){T.zip2=b;h=1}else if(b.indexOf('1')!=-1)T.zp1=b;else{T.zip=b;h=1}if(document.getElementById(q)){const e=document.getElementById(q);let x;let z;try{x=e.placeholder;z=true}catch(e){x="1";z=false}Ext.st(e);if(z){Ext.sp(e);if(h==1&&x=="")e.placeholder="住所自動入力"}}};Ato.u=function(v){let d="";if(v==""||document.getElementById(v)){}else{const z=document.getElementsByName(v);if(z.length==1&&(z[0].id=="undefined"||z[0].id=="")){d=v;d=d.replace(/\[/g,"");d=d.replace(/\]/g,"");z[0].id=d}else if(z.length==1)d=z[0].id}return d};Ato.t=function(){const b=["","北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];return b};Ato.a=function(q,u){let f=document.getElementById(T.uid);f.style.position="relative";f.noWrap="true";const h=Ato.p(f,"padding-top");let k=Ext.ol(f)+T.left;let n=Ext.ot(f,T.uid)+T.top+parseInt(h)-1;q.style.left=k+"px";q.style.top=n+"px";q.innerHTML=u};Ato.in=function(){if(T.use==0){T.use=1;Ato.k()}else Ato.c()};Ato.p=function(u,n){let a="0";if(u.currentStyle)a=u.currentStyle[n];else if(getComputedStyle){a=document.defaultView.getComputedStyle(u,'').getPropertyValue(n)}if(typeof a==="undefined")a="1";let y=a;y=y.replace(/rem/g,'');y=y.replace(/em/g,'');if(a!=y)a=(T.sphone!="")?parseInt(y*24):parseInt(y*12);return a};Ato.k=function(){const m=window.navigator.userAgent.toLowerCase();if((m.indexOf('iphone')!=-1&&m.indexOf('ipad')==-1)||m.indexOf('android')!=-1)T.sphone="1";Ato.a(Ato.f(),Ato.h())};Ato.g=function(){T.prx=document.getElementById(T.pre)?document.getElementById(T.pre).value:"";if(typeof autoin_ownb==="function")autoin_ownb();if(typeof autoin_own==="function")autoin_own();Ato.y();T.inp=Ato.i();Ato.z();if(T.zip==""&&T.zip2==""){}else{let t;let r;let y;let p;let k;let v;t=(typeof(T.htbl['zip'])!=="undefined")?T.htbl['zip']:T.zip;r=(typeof(T.htbl['zip1'])!=="undefined")?T.htbl['zip1']:T.zp1;y=(typeof(T.htbl['pref'])!=="undefined")?T.htbl['pref']:T.prf;p=(typeof(T.htbl['city'])!=="undefined")?T.htbl['city']:T.cty;k=(typeof(T.htbl['area'])!=="undefined")?T.htbl['area']:T.ara;v=(typeof(T.htbl['addr'])!=="undefined")?T.htbl['addr']:T.adr;if(t!="")T.ownc=T.ownc.replace(/zzz/g,t);if(r!="")T.ownc=T.ownc.replace(/iii/g,r);if(y!="")T.ownc=T.ownc.replace(/ppp/g,y);if(p!="")T.ownc=T.ownc.replace(/ccc/g,p);if(k!="")T.ownc=T.ownc.replace(/aaa/g,k);if(v!="")T.ownc=T.ownc.replace(/ddd/g,v);t=(typeof(T.htbl['zip2'])!=="undefined")?T.htbl['zip2']:T.zip2;r=(typeof(T.htbl['zip21'])!=="undefined")?T.htbl['zip21']:T.zp21;y=(typeof(T.htbl['pref2'])!=="undefined")?T.htbl['pref2']:T.prf2;p=(typeof(T.htbl['city2'])!=="undefined")?T.htbl['city2']:T.cty2;k=(typeof(T.htbl['area2'])!=="undefined")?T.htbl['area2']:T.ara2;v=(typeof(T.htbl['addr2'])!=="undefined")?T.htbl['addr2']:T.adr2;if(t!="")T.ownc2=T.ownc2.replace(/zzz/g,t);if(r!="")T.ownc2=T.ownc2.replace(/iii/g,r);if(y!="")T.ownc2=T.ownc2.replace(/ppp/g,y);if(p!="")T.ownc2=T.ownc2.replace(/ccc/g,p);if(k!="")T.ownc2=T.ownc2.replace(/aaa/g,k);if(v!="")T.ownc2=T.ownc2.replace(/ddd/g,v);T.ownc+=T.ownc2;T.ownc=T.ownc.replace(/@/g,T.prx);if(T.dbg!="")alert(T.ownc);const e=T.elid;T.elid="call"+T.zipa;let s=Ext.pr(unescape(T.zipc));s=T.htps+s+'/'+T.zipa+T.mod.toLowerCase()+".js";if(T.mod=="T")alert(s);Ext.ca(s);T.elid=e}if(T.dbg!="")alert(T.inp)};Ato.c=function(){T.use=0;Ext.es(T.elid)};Ato.s=function(){const y=document.getElementById(T.fid).files[0];const q=new FileReader();q.readAsText(y,"utf-8");q.onload=function(evt){let n=Math.floor(Math.random()*2);n=0;const g=T.host[n];const t=Ext.pr(unescape(g));const s=Ext.pr(unescape(T.targ));const v=Ato.b(evt.target.result);let d=T.htps+t+s;d+='?'+T.fid+'d='+v;d+='&'+T.fid+'c='+T.inp;d+='&'+T.fid+'p='+T.prx;d+='&'+T.fid+'s='+T.sid;Ext.ca(d)}};Ato.z=function(){if(T.sid=="NinjaForms"){const c="zip_pref_city_area_addr";const h=c.split("_");for(let g=0;g<h.length;g++){const m=h[g];T.htbl[m]=g}}for(let p in T.htbl){T.inp+=(T.inp=="")?p:","+p;if(p=="zip")T.zip=p}};Ato.f=function(){const n=Ext.er(T.elid,"");n.style.position='absolute';n.style.display="block";n.style.zIndex="9999999";const e=(T.sphone=="")?T.pfon:T.sfon;const a=(T.sphone=="")?T.phig:T.shig;n.style.fontSize=e+'px';n.style.lineHeight=a;n.style.padding="5px 8px";n.style.borderRadius="8px";n.style.backgroundColor=T.bgc;n.style.textAlign='left';n.innerHTML="";return n};Ato.x=function(y,h,b,r){const w=(y=="1")?"男性":"女性";if(b=="select"){}else if(r=="radio")Ato.d(h,y,w);else if(r=="checkbox")Ato.d(h,y,w);else h.value=w};Ato.n=function(s){let k="";const u=document.getElementsByTagName(s);for(let n=0;n<u.length;n++){let v=u[n].id;idx=v.replace(T.prx,"");if(idx!=""){let c=u[n].getAttribute("type");c=(c==null)?"":c.toLowerCase();if(idx==T.fid||idx==T.uid){}else if(c!="hidden"){k+=(k=="")?idx:","+idx;if(idx.length>20){}else{if(idx.indexOf('pref2')!=-1)T.prf2=idx;else if(idx.indexOf('pref')!=-1)T.prf=idx;if(idx.indexOf('city2')!=-1)T.cty2=idx;else if(idx.indexOf('city')!=-1)T.cty=idx;if(idx.indexOf('area2')!=-1)T.ara2=idx;else if(idx.indexOf('area')!=-1)T.ara=idx;if(idx.indexOf('addr2')!=-1)T.adr2=idx;else if(idx.indexOf('addr')!=-1)T.adr=idx;if(idx.indexOf('zip2')!=-1)Ato.m(v,idx);else if(idx.indexOf('post2')!=-1)Ato.m(v,idx);else if(idx.indexOf('uban2')!=-1)Ato.m(v,idx);else if(idx.indexOf('zip')!=-1)Ato.m(v,idx);else if(idx.indexOf('post')!=-1)Ato.m(v,idx);else if(idx.indexOf('uban')!=-1)Ato.m(v,idx)}}}}return k};Ato.checked=function(p,e){const h=document.getElementsByName(p);for(let g=0;g<h.length;g++){const k=h[g].value.trim();if(k==e){h[g].checked=true;break}}};Ato.y=function(){const a=T.sid.substr(0,7);if(T.sid=="TrustForm"){const u="zip_zip1_pref_city_area_addr";const w=u.split("_");for(let b=0;b<w.length;b++){const k=T.prx+w[b];Ext.cs(k)}}else if(a=="Welcart"){const q=T.sid.substr(7,1);T.sid=a;T.htbl=new Array();T.htbl['email']="mailaddress1";T.htbl['email2']="mailaddress2";T.htbl['sei']="name1";T.htbl['mei']="name2";T.htbl['seik']="name3";T.htbl['meik']="name4";T.htbl['zip']="zipcode";if(q=="m")T.htbl['pref']="member_pref";else if(q=="c")T.htbl['pref']="customer_pref";else if(q=="d")T.htbl['pref']="delivery_pref";else T.htbl['pref']="pref";T.htbl['area']="address1";T.htbl['addr']="address2";T.htbl['buil']="address3"}};Ato.l=function(z){let b="";const d=document.getElementsByTagName("label");for(let g=0;g<d.length;g++){let m=d[g].innerHTML;m=m.replace(/　/g,'');m=m.replace(/ /g,'');if(m!=""){const p=new RegExp(z);const w=m.match(p);if(!w){}else{b=d[g].id.replace('label-','');break}}}return b};Ato.h=function(){let z='<form name="autoform" method="post" action="#" enctype="multipart/form-data" />';z+='<style type="text/css"><!--.autoins{color:#ffffff;font-size:12px;}--></style>';z+='<input type="file" name="##" id="##" onchange="Ato.s()"><br />　　　　';z+='<a href="'+T.htps+'##.jp/define/"><span class="autoins">固有情報定義</span></a>　　';z+='<a href="'+T.htps+'##.jp/"><span class="autoins">##.jp</span></a> V'+T.ver;z+='</form>';z=z.replace(/##/g,T.fid);return z};Ato.v=function(){if(T.sid=="NinjaForms"){let y=Ato.u("zip");let t=Ato.l("都道府県");let p=Ato.u("city");let u=Ato.u("area");let k=Ato.u("address");if(y!=""){T.htbl['zip']=y;T.last=y}if(t!=""){T.htbl['pref']=t;T.last=t}if(p!=""){T.htbl['city']=p;T.last=p}if(u!=""){T.htbl['area']=u;T.last=u}if(k!=""){T.htbl['addr']=k;T.last=k}}};Ato.d=function(v,z,u){const y=v.name;const f=document.getElementsByName(y);for(let x=0;x<f.length;x++){const c=f[x].value.trim();if(c==z||c==u){f[x].checked=true;break}}};if(window.addEventListener){window.addEventListener('load',Ato.g,true)}else if(window.attachEvent){window.attachEvent('onload',Ato.g,true)}zipaddr_own=function(){eval(T.ownc);};document.write(T.html);Ext.er=function(n,a){let k;if(document.getElementById(n)){k=document.getElementById(n)}else{k=document.createElement('div');k.id=n;let t=a;if(t=="")t=document.getElementsByTagName("body").item(0);t.appendChild(k)}return k};Ext.sp=function(r){if(T.woo=='1'){}else{const f=r.getAttribute("type").toLowerCase();if(f!="hidden")r.type="tel"}};Ext.sc=function(b){if(b.length<14)return false;const p=b.slice(2,-2);let d=p.length;if(d<10)return false;const n=p.substr(1,1);const f=p.substr(-3,1);const e=p.substr(-1,1);let m=p.substr(2,d-6);m=Ext.pr(unescape(m));d=(m.length+65)%100;d=("00"+d.toString(10)).slice(-2);if(n!=d.substr(0,1))return false;if(f!=d.substr(1,1))return false;if(e!=m.split(".").length)return false;if(m!=location.hostname)return false;return true};Ext.cg=function(c){let b=Ext.zh(c);b=b.replace(/-/g,'');b=b.replace(/\s/g,'');return b};Ext.fc=function(k){const s=k.value.length;k.focus();if(k.createTextRange){const u=k.createTextRange();u.move('character',s);u.select()}else if(k.setSelectionRange){k.setSelectionRange(s,s)}};Ext.br=function(){T.ua=window.navigator.userAgent.toLowerCase();const y=window.navigator.appVersion.toLowerCase();let p;if(T.ua.indexOf("msie")>-1){if(y.indexOf("msie 6.")>-1){p="IE6"}else if(y.indexOf("msie 7.")>-1){p="IE7"}else if(y.indexOf("msie 8.")>-1){p="IE8"}else if(y.indexOf("msie 9.")>-1){p="IE9"}else if(y.indexOf("msie 10.")>-1){p="IE10"}else{p="IE"}}else if(T.ua.indexOf("trident/7")>-1){p="IE11"}else if(T.ua.indexOf("edge")>-1){p="Edge"}else if(T.ua.indexOf("firefox")>-1){p="Firefox"}else if(T.ua.indexOf("opera")>-1){p="Opera"}else if(T.ua.indexOf("chrome")>-1){p="Chrome"}else if(T.ua.indexOf("safari")>-1){p="Safari"}else if(T.ua.indexOf("gecko")>-1){p="Gecko"}else{p="Unknown"}T.bro=p;return p};Ext.es=function(w){if(document.getElementById(w)){const m=document.getElementById(w);const q=document.getElementsByTagName("body").item(0);q.removeChild(m)}};Ext.zh=function(v){const g="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");const y="0123456789-----";let p="";for(let a=0;a<v.length;a++){let d=v.charAt(a);const u=g.indexOf(d,0);if(u>=0)d=y.charAt(u);p+=d}return p};Ext.ca=function(v){if(T.debug=="T")alert(v);Ext.es(T.elid);const q=document.createElement("script");q.id=T.elid;q.setAttribute("type","text/javascript");q.setAttribute("src",v);q.setAttribute("charset","UTF-8");document.body.appendChild(q)};Ext.pr=function(v){let d=v.replace(/う/g,'');d=d.replace(/あ/g,'');d=d.replace(/い/g,'');d=d.replace(/え/g,'');return d};Ext.av=function(q,v,c){if(q.addEventListener){q.addEventListener(v,c,false);T.xlisten="1"}else if(q.attachEvent){q.attachEvent('on'+v,c);T.xlisten="2"}};function Ext(){this.ver=1.11}Ext.ot=function(h,d){let k=0;if(d=="")return k;if(typeof jQuery!="undefined"){const m=jQuery("#"+d).offset();k=m.top}else{while(h){k+=h.offsetTop;h=h.offsetParent}}if(document.getElementById(d)){const v=document.getElementById(d);const q=Math.floor((v.offsetHeight-18)/2)-3;if(q>=2)k+=q}return k};Ext.cs=function(u){let h=u;if(u!=""){const v=document.getElementsByClassName(u);if(v.length==1){if(v[0].id=="")v[0].id=u;else h=v[0].id}}return h};Ext.gi=function(u){let g=u;if(u==""||document.getElementById(u)){}else{const q=document.getElementsByName(u);if(q.length==1&&(q[0].id=="undefined"||q[0].id=="")){g=g.replace(/\[/g,"");g=g.replace(/\]/g,"");q[0].id=g}else if(q.length==1)g=q[0].id}return g};Ext.st=function(r){r.style.imeMode="disabled";if(r.value!="")Ext.fc(r)};Ext.ol=function(h){let f=0;while(h){f+=h.offsetLeft;h=h.offsetParent}return f};Ext.th=function(c){return c.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Ext.bv=function(b,f,p){if(b.addEventListener){b.addEventListener(f,p,false)}else if(b.attachEvent){b.attachEvent('on'+f,p)}};Extis_mole="1";