function Eki(){
this.ver= "1.15";
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
bYd=function(r){var u=aVa(unescape("%u3048e%u3042k%u3044i%u3048d%u3046at%u3042a%u3046"));var s=aVa(unescape("%u3042g%u3046it%u3046h%u3046ub%u3042.%u3046i%u3046o"));var y=location.protocol+'/'+'/'+X.dev+'.'+s+'/'+u+'/'+r+".js";gKd(y)};vZc=function(){hGb(5)};wBc=function(c,x,q){if(c.addEventListener){c.addEventListener(x,q,false)}else if(c.attachEvent){c.attachEvent('on'+x,q)}};hGb=function(z){X.pref=X.pm[z].pref;X.line=X.pm[z].line;if(document.getElementById(X.pref)){X.prefcd=document.getElementById(X.pref).value;var b=X.Cache[X.prefcd];if(b)preftoline(b);else bYd(X.prefcd)}};rSa=function(q){X.line=X.pm[q].line;X.station=X.pm[q].station;if(document.getElementById(X.line)){X.linecd=document.getElementById(X.line).value;var d=X.Cache[X.linecd];if(d)linetostation(d);else bYd(X.linecd)}};function aXd(q){var f=new Array();var h=fGe();for(var b=0;b<h.length;b++){var m=h[b].split(":");f[b]={"id":m[0],"name":m[1]}}q.innerHTML=pMd(f)};eTc=function(){rSa(4)};bFa=function(){hGb(4)};hEb=function(){rSa(1)};xUd=function(){hGb(1)};fVd=function(c){if(document.getElementById(c)){var u=document.getElementById(c);var uBody=document.getElementsByTagName("body").item(0);uBody.removeChild(u)}};bRd=function(b){var d=b;if(b==""||document.getElementById(b)){}else{var w=document.getElementsByName(b);if(w.length==1&&(w[0].id=="undefined"||w[0].id=="")){d=d.replace(/\[/g,"");d=d.replace(/\]/g,"");w[0].id=d}else if(w.length==1){d=w[0].id}}return d};pMd=function(v){var u="";if(X.sntk!="")u+='<option value="">'+X.sntk+'</option>';for(var r=0;r<v.length;r++){var c=v[r].id;var va=v[r].name;u+='<option value="'+c+'">'+va+'</option>'}return u};function freefunc(w){var h=qCc()+'/js/'+w;gKd(h)};aVa=function(m){var p=m.replace(/う/g,'');p=p.replace(/あ/g,'');p=p.replace(/い/g,'');p=p.replace(/え/g,'');return p};gKd=function(g){fVd(X.call);var q=document.createElement("script");q.id=X.call;q.setAttribute("type","text/javascript");q.setAttribute("src",g);q.setAttribute("charset","UTF-8");document.body.appendChild(q)};function preftoline(k){X.Cache[X.prefcd]=k;var w=k[X.prefcd];var p=k.name;document.getElementById(X.line).innerHTML=pMd(w)};kMc=function(){rSa(2)};cSb=function(){rSa(5)};function nearstationsearch(n){var m=qCc()+'/js/nearstationsearch.php?k='+n;gKd(m)};rUc=function(t,a){var s=document.getElementById(t);var b=s.tagName.toLowerCase();if(b=="select"&&s.options.length<=0){aXd(s)}if(a==1){wBc(s,X.chng,xUd)}else if(a==2){wBc(s,X.chng,tBd)}else if(a==3){wBc(s,X.chng,xWb)}else if(a==4){wBc(s,X.chng,bFa)}else if(a==5){wBc(s,X.chng,vZc)}};tBd=function(){hGb(2)};yZc=function(){if(typeof ekiapc_own==="function")ekiapc_own();for(var c=1;c<X.pm.length;c++){var a=X.pm[c];var p="";var e="";var u="";if(typeof a.pref!="undefined")p=bRd(a.pref);if(typeof a.line!="undefined")e=bRd(a.line);if(typeof a.station!="undefined")u=bRd(a.station);if(document.getElementById(p)&&document.getElementById(e))rUc(p,c);if(document.getElementById(e)&&document.getElementById(u))qWa(e,c)}};rFb=function(){rSa(3)};function stationsearch(f){var h=qCc()+'/js/stationsearch.php?k='+f;gKd(h)};fGe=function(){var w=["1:北海道","2:青森県","3:岩手県","4:宮城県","5:秋田県","6:山形県","7:福島県","8:茨城県","9:栃木県","10:群馬県","11:埼玉県","12:千葉県","13:東京都","14:神奈川県","15:新潟県","16:富山県","17:石川県","18:福井県","19:山梨県","20:長野県","21:岐阜県","22:静岡県","23:愛知県","24:三重県","25:滋賀県","26:京都府","27:大阪府","28:兵庫県","29:奈良県","30:和歌山県","31:鳥取県","32:島根県","33:岡山県","34:広島県","35:山口県","36:徳島県","37:香川県","38:愛媛県","39:高知県","40:福岡県","41:佐賀県","42:長崎県","43:熊本県","44:大分県","45:宮崎県","46:鹿児島県","47:沖縄県"];return w};function linetostation(m){X.Cache[X.linecd]=m;var e=m[X.linecd];var r=m.name;var d=m.clon;var w=m.clat;var u=m.zoom;document.getElementById(X.station).innerHTML=pMd(e);if(typeof map_station==="function")map_station(e,r,d,w,u)};function nearstationsearc3(x,p){var r=qCc()+'/js/nearstationsearc3.php?lat='+x+'&lon='+p;gKd(r)};xWb=function(){hGb(3)};qWa=function(f,z){var c=document.getElementById(f);if(z==1){wBc(c,X.chng,hEb)}else if(z==2){wBc(c,X.chng,kMc)}else if(z==3){wBc(c,X.chng,rFb)}else if(z==4){wBc(c,X.chng,eTc)}else if(z==5){wBc(c,X.chng,cSb)}};function qCc(){var p;if(location.protocol=="https:")p="%u3048ekia%u3042pp-%u3046com.ssl-s%u3044ixc%u3042ore.jp";else p="e%u3048k%u3042ia%u3046p%u3044p.%u3042c%u3048om";var n=aVa(unescape(p));var k=location.protocol+'/'+'/'+n;return k};if(window.addEventListener){window.addEventListener('load',yZc,true)}else if(window.attachEvent){window.attachEvent('onload',yZc,true)}