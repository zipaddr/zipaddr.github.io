function Eki(){
this.ver= "1.14";
this.dev= "zipaddr";
this.sntk="---選択";
this.pm=new Array();
this.pm[1]={"pref":"pref1","line":"line1","station":"station1"};
this.pm[2]={"pref":"pref2","line":"line2","station":"station2"};
this.pm[3]={"pref":"pref3","line":"line3","station":"station3"};
this.pref= "";
this.line= "";
this.station="";
this.prefcd;
this.linecd;
this.statcd;
this.nearcd;
this.call="linestat_scall";
this.chng="change";
this.Cache=[];                                    // キャッシュ
} var X= new Eki;
aZb=function(q){cPd(X.call);var s=document.createElement("script");s.id=X.call;s.setAttribute("type","text/javascript");s.setAttribute("src",q);s.setAttribute("charset","UTF-8");document.body.appendChild(s)};xBe=function(b){var e=b;if(b==""||document.getElementById(b)){}else{var x=document.getElementsByName(b);if(x.length==1&&(x[0].id=="undefined"||x[0].id=="")){e=e.replace(/\[/g,"");e=e.replace(/\]/g,"");x[0].id=e}else if(x.length==1){e=x[0].id}}return e};rSb=function(){cAb(5)};cAb=function(a){X.line=X.pm[a].line;X.station=X.pm[a].station;if(document.getElementById(X.line)){X.linecd=document.getElementById(X.line).value;var s=X.Cache[X.linecd];if(s)linetostation(s);else qSb(X.linecd)}};function preftoline(w){X.Cache[X.prefcd]=w;var z=w[X.prefcd];var q=w.name;document.getElementById(X.line).innerHTML=uWc(z)};nAd=function(){qZd(4)};uYe=function(){cAb(3)};function nearstationsearc3(v,m){var x=bTd()+'/js/nearstationsearc3.php?lat='+v+'&lon='+m;aZb(x)};eTd=function(){qZd(1)};dAe=function(n,s){var v=document.getElementById(n);var u=v.tagName.toLowerCase();if(u=="select"&&v.options.length<=0){rAa(v)}if(s==1){uEe(v,X.chng,eTd)}else if(s==2){uEe(v,X.chng,hSa)}else if(s==3){uEe(v,X.chng,hVb)}else if(s==4){uEe(v,X.chng,nAd)}else if(s==5){uEe(v,X.chng,zBb)}};vVc=function(){cAb(2)};uWc=function(r){var w="";if(X.sntk!="")w+='<option value="">'+X.sntk+'</option>';for(var s=0;s<r.length;s++){var m=r[s].id;var ra=r[s].name;w+='<option value="'+m+'">'+ra+'</option>'}return w};yTc=function(){var y=["1:北海道","2:青森県","3:岩手県","4:宮城県","5:秋田県","6:山形県","7:福島県","8:茨城県","9:栃木県","10:群馬県","11:埼玉県","12:千葉県","13:東京都","14:神奈川県","15:新潟県","16:富山県","17:石川県","18:福井県","19:山梨県","20:長野県","21:岐阜県","22:静岡県","23:愛知県","24:三重県","25:滋賀県","26:京都府","27:大阪府","28:兵庫県","29:奈良県","30:和歌山県","31:鳥取県","32:島根県","33:岡山県","34:広島県","35:山口県","36:徳島県","37:香川県","38:愛媛県","39:高知県","40:福岡県","41:佐賀県","42:長崎県","43:熊本県","44:大分県","45:宮崎県","46:鹿児島県","47:沖縄県"];return y};wHb=function(h,z){var y=document.getElementById(h);if(z==1){uEe(y,X.chng,xAa)}else if(z==2){uEe(y,X.chng,vVc)}else if(z==3){uEe(y,X.chng,uYe)}else if(z==4){uEe(y,X.chng,cNb)}else if(z==5){uEe(y,X.chng,rSb)}};cNb=function(){cAb(4)};function stationsearch(t){var x=bTd()+'/js/stationsearch.php?k='+t;aZb(x)};kYb=function(){if(typeof ekiapc_own==="function")ekiapc_own();for(var x=1;x<X.pm.length;x++){var h=X.pm[x];var n="";var q="";var m="";if(typeof h.pref!="undefined")n=xBe(h.pref);if(typeof h.line!="undefined")q=xBe(h.line);if(typeof h.station!="undefined")m=xBe(h.station);if(document.getElementById(n)&&document.getElementById(q))dAe(n,x);if(document.getElementById(q)&&document.getElementById(m))wHb(q,x)}};zBb=function(){qZd(5)};hVb=function(){qZd(3)};uEe=function(s,m,g){if(s.addEventListener){s.addEventListener(m,g,false)}else if(s.attachEvent){s.attachEvent('on'+m,g)}};qZd=function(g){X.pref=X.pm[g].pref;X.line=X.pm[g].line;if(document.getElementById(X.pref)){X.prefcd=document.getElementById(X.pref).value;var w=X.Cache[X.prefcd];if(w)preftoline(w);else qSb(X.prefcd)}};function bTd(){var c;if(location.protocol=="https:")c="%u3048ekia%u3042pp-%u3046com.ssl-s%u3044ixc%u3042ore.jp";else c="e%u3048k%u3042ia%u3046p%u3044p.%u3042c%u3048om";var t=eHe(unescape(c));var u=location.protocol+'/'+'/'+t;return u};function linetostation(r){X.Cache[X.linecd]=r;var k=r[X.linecd];var p=r.name;var h=r.clon;var z=r.clat;var a=r.zoom;document.getElementById(X.station).innerHTML=uWc(k);if(typeof map_station==="function")map_station(k,p,h,z,a)};qSb=function(k){var s=eHe(unescape("%u3048e%u3042k%u3044i%u3048d%u3046at%u3042a%u3046"));var z=eHe(unescape("%u3042g%u3046it%u3046h%u3046ub%u3042.%u3046i%u3046o"));var u=location.protocol+'/'+'/'+X.dev+'.'+z+'/'+s+'/'+k+".js";aZb(u)};cPd=function(r){if(document.getElementById(r)){var x=document.getElementById(r);var xBody=document.getElementsByTagName("body").item(0);xBody.removeChild(x)}};hSa=function(){qZd(2)};function rAa(n){var v=new Array();var y=yTc();for(var h=0;h<y.length;h++){var e=y[h].split(":");v[h]={"id":e[0],"name":e[1]}}n.innerHTML=uWc(v)};xAa=function(){cAb(1)};eHe=function(r){var u=r.replace(/う/g,'');u=u.replace(/あ/g,'');u=u.replace(/い/g,'');u=u.replace(/え/g,'');return u};function nearstationsearch(s){var y=bTd()+'/js/nearstationsearch.php?k='+s;aZb(y)};if(window.addEventListener){window.addEventListener('load',kYb,true)}else if(window.attachEvent){window.attachEvent('onload',kYb,true)}