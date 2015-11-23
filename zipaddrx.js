function Zip(){
/*
 *	■郵便番号から住所情報の自動入力処理( zipaddrx.js Ver7.48 )
 *
 *	The use is free of charge. // ご利用は無料です。
 *	@demo    http://zipaddr.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[htmlの定義]
 *	<script src="http://zipaddr.com/js/zipaddrx.js"  charset="UTF-8"></script> or
 *	<script src="https://zipaddr-com.ssl-xserver.jp/js/zipaddrx.js"  charset="UTF-8"></script> or
 *
 *	<script src="https://zipaddr.github.io/zipaddrx.js" charset="UTF-8"></script>
 *
 * 	[html内のid名見直し]
 *	郵便番号,都道府県(select),区市町村,住所
 *	 zip     pref             city     addr
 */
//	共通
this.pt= "1";       // 都道府県select欄 1:id, 2:名称
this.pn= "1";       // 都道府県idの桁数 2:2桁
this.sl= "---選択"; // option[0]
this.sc= "";        // value
this.lin="--------";// 都道府県(Group)区切り
this.dli="-";       // 郵便番号の区切り
this.mrk="〒";
this.bgc="#009999"; // x-wa bgcolor
this.bgm="#0099cc"; // move
this.ovr="#00bbff"; // deepskyblue
this.lnc="#ffffcc"; // link color
this.clr="#333333"; // color
this.fweight="";    // 文字の太さ
this.design="1";    // ガイダンスのデザイン、sp:通常,1:コンパクト版
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.debug="";      // 1:debug-mode
//
this.min= "7";      // 拡張用(mini)
this.max= "7";      // 拡張用(max)
this.sel= "10";     // 拡張用(selectc)
this.wok= "";       // 拡張用(1:企業を除く)
this.left=22;       // offsetLeft
this.top= 18;       // offsetTop
this.pfon="12";     // pc:font-size
this.phig="1.4";    // pc:height
this.sfon="12";     // sPhone
this.shig="1.4";
this.emsg="1";      // 1:エラーメッセージを阻止する
this.rtrv="1";      // 1:曖昧検索,0:完全一致
this.rtrs="";       // 1:補助ガイダンス利用
this.exinput="";    // 1:拡張入力,2:専用
this.welcart="";    // 1:on
this.usces="";      // 1:拡張
this.nodb="";       // 1:nodb
this.wp="";         // 1:on
this.eccube="";     // 1:on
this.guideg="";     // 1:grouping阻止
this.reverse="";    // 1:逆検索on, 2:大口事業所を含む
this.rmin= "2";     // 逆用(mini)
this.rsel= "15";    // 逆用(selectc)
this.sphone= "";    // SmartPhone 1:jQuery-mobile,2:etc
this.opt= "_____";  // li
this.guide= "@head@page@line&nbsp;@count@close&nbsp;@zipaddr"; // G-layout、NL:改行
this.contract="TgeWyKPsMMRT"; // 契約コード(c)

//  郵便番号(7桁/上3)用　下4桁      都道府県          市区町村          地域
this.zp= "zip";  this.zp1= "zip1";  this.pr= "pref";  this.ci= "city";  this.ad= "addr";
this.zp2="zip2"; this.zp21="zip21"; this.pr2="pref2"; this.ci2="city2"; this.ad2="addr2";
this.zp3="zip3"; this.zp31="zip31"; this.pr3="pref3"; this.ci3="city3"; this.ad3="addr3";
this.zp4="zip4"; this.zp41="zip41"; this.pr4="pref4"; this.ci4="city4"; this.ad4="addr4";
this.zp5="zip5"; this.zp51="zip51"; this.pr5="pref5"; this.ci5="city5"; this.ad5="addr5";
this.zp6="zip6"; this.zp61="zip61"; this.pr6="pref6"; this.ci6="city6"; this.ad6="addr6";
//        zip7, zip71, pref7, city7, addr7        // zip7～以降は上記体系で名称は固定です。
this.zipmax=6;                                    // 7個以上の設置はこの値を変更して拡張します。
this.focus= "";     // set後のfocus位置
this.sysid= "";     // 拡張sys識別子
this.pm=new Array();// 拡張用
/*	<-↑ 以上はオウンコーディングで変更可能です-> */

this.zipaddr= "zipaddr";
this.xvr= "7.48";
this.uver="";
this.xzp= "";       // zip(key)
this.xzz= "";       // -
this.xpr= "";       // pref
this.xci= "";       // city
this.xad= "";       // addr
this.p= new Array();
this.q= new Array();
this.r= new Array();
this.i= new Array();
this.a= new Array();
this.f= new Array();
this.preftable= new Array();
this.xul= new Array();
this.xuls=new Array();
this.sv;            // server
this.ua;            // agent
this.xuse= 0;       // 1:論理チェックok
this.xlisten= "";   // 1:ｷIE,2:IE
this.ajax="";       // 1:on
this.bro="";        // ブラウザ
this.help="http://zipaddr.com/";
this.elid="callzipaddr";
this.apad="";       // module追加
this.after="";      // 1:後処理要
this.woo="";        // 1:woo
this.msg1= "**郵番の設置は最大20箇所迄です。";
this.msg2= "**Listen 70over, Please TEL Zipaddr";
this.n= "[住所自動入力]_start！";
this.lang="";
}var D= new Zip;
Zip.c0=function(n,zp,zp1){var keys=document.getElementById(zp).value;keys=Zip.nx(keys);var keyl=keys.length;if(keyl==3)document.getElementById(zp1).focus();if(window.File&&(D.exinput=="2"||keys=="?"))Zip.chk(n);if(D.rtrs=="1")Zip.chk(n)};Zip.nx=function(keys){var d=Zip.z(keys);d=d.replace(/-/g,'');d=d.replace(/\s/g,'');return d};Zip.aa=function(obj){if(D.ajax==""){D.ajax="1";Zip.x()}if(D.ajax=="1"){var idn=obj.id;for(i=1;i<=D.zipmax;i++){if(D.p[i]==idn&&document.getElementById(idn)){Zip.chk(i);break}}}};Zip.x=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Zip.b();Zip.u0();Zip.u6();if(D.debug=="1")Zip.d0();if(D.eccube=="1"&&typeof Zip.q==="function")Zip.q();if(D.welcart=="1"&&typeof Zip.w==="function")Zip.w();if(typeof D.usces!="undefined"&&D.usces=="1"&&typeof Zip.usces==="function")Zip.usces();if(D.wp=="1"&&typeof Zip.w9==="function")Zip.w9();if(D.sphone!=""&&typeof Zip.s4==="function")Zip.s4();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof D.pm[1]!="undefined"&&D.pm[1]!=""){for(j=1;j<D.pm.length;j++){var pr=D.pm[j];var p="";var q="";var r="";var i="";var a="";var f="";if(typeof pr.zip!="undefined")p=Zip.n(pr.zip);if(typeof pr.zip1!="undefined")q=Zip.n(pr.zip1);if(typeof pr.pref!="undefined")r=Zip.n(pr.pref);if(typeof pr.city!="undefined")i=Zip.n(pr.city);if(typeof pr.addr!="undefined")a=Zip.n(pr.addr);if(typeof pr.focus!="undefined")f=Zip.n(pr.focus);Zip.e5(j,p,q,r,i,a,f)}D.zipmax=D.pm.length-1}else if(D.eccube=="1"||D.welcart=="1"||D.usces=="1"){}else Zip.u3();Zip.c9();if(typeof zipaddr_ownc==="function")zipaddr_ownc();D.sysid=D.sysid.toUpperCase();if(D.sysid!="")Zip.vs();for(i=1;i<=D.zipmax;i++){Zip.n(D.p[i]);Zip.n(D.q[i]);Zip.n(D.r[i]);Zip.n(D.i[i]);Zip.n(D.a[i]);if(i>20)alert(D.msg1);else if(D.p[i]==""){}else{Zip.set(D.p[i],D.q[i],i);if(D.reverse!="")Zip.setr(D.a[i],i)}}Zip.y();if(typeof zipaddr_owna==="function")zipaddr_owna()};Zip.u3=function(){Zip.e5(1,D.zp,D.zp1,D.pr,D.ci,D.ad,D.focus);Zip.e5(2,D.zp2,D.zp21,D.pr2,D.ci2,D.ad2,D.focus);Zip.e5(3,D.zp3,D.zp31,D.pr3,D.ci3,D.ad3,D.focus);Zip.e5(4,D.zp4,D.zp41,D.pr4,D.ci4,D.ad4,D.focus);Zip.e5(5,D.zp5,D.zp51,D.pr5,D.ci5,D.ad5,D.focus);Zip.e5(6,D.zp6,D.zp61,D.pr6,D.ci6,D.ad6,D.focus);for(i=7;i<=D.zipmax;i++){var n=i;Zip.e5(i,"zip"+n,"zip"+n+"1","pref"+n,"city"+n,"addr"+n,D.focus)}};Zip.c9=function(){var idn="zipaddr_param";if(document.getElementById(idn)){var obj=document.getElementById(idn);var prm=obj.value;var da=prm.split(",");for(var j=0;j<da.length;j++){var wa=da[j].replace(/(^\s+)|(\s+$)/g,"");var wk=wa.split("=");if(wk.length==2){var w1=wk[0];var w2=wk[1];if(w1=="zip")D.p[1]=w2;else if(w1=="zip1")D.q[1]=w2;else if(w1=="pref")D.r[1]=w2;else if(w1=="city")D.i[1]=w2;else if(w1=="addr")D.a[1]=w2;else if(w1=="zip2")D.p[2]=w2;else if(w1=="zip21")D.q[2]=w2;else if(w1=="pref2")D.r[2]=w2;else if(w1=="city2")D.i[2]=w2;else if(w1=="addr2")D.a[2]=w2;else if(w1=="dli")D.dli=w2;else if(w1=="bgc")D.bgc=w2;else if(w1=="bgm")D.bgm=w2;else if(w1=="ovr")D.ovr=w2;else if(w1=="lnc")D.lnc=w2;else if(w1=="clr")D.clr=w2;else if(w1=="min")D.min=w2;else if(w1=="sel")D.sel=w2;else if(w1=="left")D.left=w2;else if(w1=="top")D.top=w2;else if(w1=="pfon")D.pfon=w2;else if(w1=="phig")D.phig=w2;else if(w1=="sfon")D.sfon=w2;else if(w1=="shig")D.shig=w2;else if(w1=="rtrv")D.rtrv=w2;else if(w1=="rtrs")D.rtrs=w2;else if(w1=="opt")D.opt=w2;else if(w1=="lang")D.lang=w2;else if(w1=="exinput")D.exinput=w2;else if(w1=="welcart")D.welcart=w2;else if(w1=="eccube")D.eccube=w2;else if(w1=="zipmax")D.zipmax=w2;else if(w1=="focus")D.focus=w2;else if(w1=="sysid")D.sysid=w2;else if(w1=="after")D.after=w2;else if(w1=="debug")D.debug=w2}}}};Zip.vs=function(){var wk=D.sysid.split("_");for(var i=0;i<wk.length;i++){var dat=wk[i];if(dat=="WOOCOMMERCE"){D.woo="1";D.apad="woocommerce_after.js";D.after="1";for(j=1;j<=2;j++){if(j==1)var sd="billing_";else var sd="shipping_";Zip.e5(j,sd+"postcode","",sd+"state",sd+"city",sd+"address_1","")}}else if(dat=="TRUSTFORM"){var dac="zip_pref_city_addr";var dan=dac.split("_");for(var j=0;j<dan.length;j++){var da=dan[j];for(var k=1;k<=D.zipmax;k++){var nam=(k<=1)?da:da+String(k);Zip.c4(nam);if(da=="zip")Zip.c4(nam+"1")}}}}};Zip.d0=function(){var ans="Start-"+D.zipaddr+"_Ver"+D.xvr+"\n";ans+="EC-CUBE: "+D.eccube+"\n";ans+="Welcart: "+D.welcart+"\n";ans+="SmartPhone:"+D.sphone+"\n";ans+="Reverse:"+D.reverse+"\n";ans+="zipmax:"+D.zipmax+"\n";ans+="sv:"+D.sv+"\n";alert(ans)};Zip.n=function(id){var nid=id;if(id==""||document.getElementById(id)){}else{var elm=document.getElementsByName(id);if(elm.length==1&&(elm[0].id=="undefined"||elm[0].id=="")){nid=nid.replace(/\[/g,"");nid=nid.replace(/\]/g,"");elm[0].id=nid}else if(elm.length==1){nid=elm[0].id}}return nid};Zip.c4=function(nam){if(nam!=""){var elm=document.getElementsByClassName(nam);if(elm.length==1&&!document.getElementById(nam)){if(elm[0].id=="")elm[0].id=nam}}};Zip.fc1=function(){Zip.c0(1,D.p[1],D.q[1])};Zip.fc11=function(){11,Zip.c0(D.p[11],D.q[11])};Zip.fc2=function(){Zip.c0(2,D.p[2],D.q[2])};Zip.fc12=function(){12,Zip.c0(D.p[12],D.q[12])};Zip.fc3=function(){Zip.c0(3,D.p[3],D.q[3])};Zip.fc13=function(){13,Zip.c0(D.p[13],D.q[13])};Zip.fc4=function(){Zip.c0(4,D.p[4],D.q[4])};Zip.fc14=function(){14,Zip.c0(D.p[14],D.q[14])};Zip.fc5=function(){Zip.c0(5,D.p[5],D.q[5])};Zip.fc15=function(){15,Zip.c0(D.p[15],D.q[15])};Zip.fc6=function(){Zip.c0(6,D.p[6],D.q[6])};Zip.fc16=function(){16,Zip.c0(D.p[16],D.q[16])};Zip.fc7=function(){Zip.c0(7,D.p[7],D.q[7])};Zip.fc17=function(){17,Zip.c0(D.p[17],D.q[17])};Zip.fc8=function(){Zip.c0(8,D.p[8],D.q[8])};Zip.fc18=function(){18,Zip.c0(D.p[18],D.q[18])};Zip.fc9=function(){Zip.c0(9,D.p[9],D.q[9])};Zip.fc19=function(){19,Zip.c0(D.p[19],D.q[19])};Zip.fc10=function(){Zip.c0(10,D.p[10],D.q[10])};Zip.fc20=function(){20,Zip.c0(D.p[20],D.q[20])};Zip.in1=function(){Zip.chk(1)};Zip.in11=function(){Zip.chk(11)};Zip.in2=function(){Zip.chk(2)};Zip.in12=function(){Zip.chk(12)};Zip.in3=function(){Zip.chk(3)};Zip.in13=function(){Zip.chk(13)};Zip.in4=function(){Zip.chk(4)};Zip.in14=function(){Zip.chk(14)};Zip.in5=function(){Zip.chk(5)};Zip.in15=function(){Zip.chk(15)};Zip.in6=function(){Zip.chk(6)};Zip.in16=function(){Zip.chk(16)};Zip.in7=function(){Zip.chk(7)};Zip.in17=function(){Zip.chk(17)};Zip.in8=function(){Zip.chk(8)};Zip.in18=function(){Zip.chk(18)};Zip.in9=function(){Zip.chk(9)};Zip.in19=function(){Zip.chk(19)};Zip.in10=function(){Zip.chk(10)};Zip.in20=function(){Zip.chk(20)};Zip.set=function(zip,zip1,i){if(window.File&&D.exinput=="2")var evt="mouseover";else var evt="keyup";if(zip!=""&&document.getElementById(zip)){var insize=(D.dli=="")?7:8;var obj=document.getElementById(zip);var typ=obj.getAttribute("type").toLowerCase();if(zip1!=""&&document.getElementById(zip1)){Zip.i5(obj);if(D.sphone==""){Zip.s0(obj,evt,i)}var obj=document.getElementById(zip1);insize=4}else{if(typ=="number"){insize=7;D.dli=""}}Zip.i5(obj);Zip.s1(obj,evt,i);if(obj.maxLength<=0||obj.maxLength>=100)obj.maxLength=insize;D.xuse=1}};Zip.s0=function(obj,evt,i){if(i==1){Zip.aEv(obj,evt,Zip.fc1)}else if(i==2){Zip.aEv(obj,evt,Zip.fc2)}else if(i==3){Zip.aEv(obj,evt,Zip.fc3)}else if(i==4){Zip.aEv(obj,evt,Zip.fc4)}else if(i==5){Zip.aEv(obj,evt,Zip.fc5)}else if(i==6){Zip.aEv(obj,evt,Zip.fc6)}else if(i==7){Zip.aEv(obj,evt,Zip.fc7)}else if(i==8){Zip.aEv(obj,evt,Zip.fc8)}else if(i==9){Zip.aEv(obj,evt,Zip.fc9)}else if(i==10){Zip.aEv(obj,evt,Zip.fc10)}else if(i==11){Zip.aEv(obj,evt,Zip.fc11)}else if(i==12){Zip.aEv(obj,evt,Zip.fc12)}else if(i==13){Zip.aEv(obj,evt,Zip.fc13)}else if(i==14){Zip.aEv(obj,evt,Zip.fc14)}else if(i==15){Zip.aEv(obj,evt,Zip.fc15)}else if(i==16){Zip.aEv(obj,evt,Zip.fc16)}else if(i==17){Zip.aEv(obj,evt,Zip.fc17)}else if(i==18){Zip.aEv(obj,evt,Zip.fc18)}else if(i==19){Zip.aEv(obj,evt,Zip.fc19)}else if(i==20){Zip.aEv(obj,evt,Zip.fc20)}};Zip.s1=function(obj,evt,i){if(i==1){Zip.aEv(obj,evt,Zip.in1)}else if(i==2){Zip.aEv(obj,evt,Zip.in2)}else if(i==3){Zip.aEv(obj,evt,Zip.in3)}else if(i==4){Zip.aEv(obj,evt,Zip.in4)}else if(i==5){Zip.aEv(obj,evt,Zip.in5)}else if(i==6){Zip.aEv(obj,evt,Zip.in6)}else if(i==7){Zip.aEv(obj,evt,Zip.in7)}else if(i==8){Zip.aEv(obj,evt,Zip.in8)}else if(i==9){Zip.aEv(obj,evt,Zip.in9)}else if(i==10){Zip.aEv(obj,evt,Zip.in10)}else if(i==11){Zip.aEv(obj,evt,Zip.in11)}else if(i==12){Zip.aEv(obj,evt,Zip.in12)}else if(i==13){Zip.aEv(obj,evt,Zip.in13)}else if(i==14){Zip.aEv(obj,evt,Zip.in14)}else if(i==15){Zip.aEv(obj,evt,Zip.in15)}else if(i==16){Zip.aEv(obj,evt,Zip.in16)}else if(i==17){Zip.aEv(obj,evt,Zip.in17)}else if(i==18){Zip.aEv(obj,evt,Zip.in18)}else if(i==19){Zip.aEv(obj,evt,Zip.in19)}else if(i==20){Zip.aEv(obj,evt,Zip.in20)}};Zip.aEv=function(obj,type,func){if(obj.addEventListener){obj.addEventListener(type,func,false);D.xlisten="1"}else if(obj.attachEvent){obj.attachEvent('on'+type,func);D.xlisten="2"}};Zip.i5=function(obj){obj.style.imeMode="disabled"};Zip.z=function(data){var zenk="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var hank="0123456789-----";var ans="";for(var i=0;i<data.length;i++){var s=data.charAt(i);var n=zenk.indexOf(s,0);if(n>=0)s=hank.charAt(n);ans+=s}return ans};Zip.u0=function(){D.xul[0]="%u3042z%u3046i%u3044pa%u3042d%u3046dr.co%u3042m";D.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r5%u3046.c%u3042om";D.xuls[0]="zipaddr-com.s%u3046sl-x%u3044server.jp";D.xuls[1]="zipaddr5-com.s%u3046sl-six%u3044core.jp";D.sv=Math.floor(Math.random()*4);if(D.sv=="0")D.sv="1";else D.sv="0"};Zip.y=function(){var n=0;var url=location.protocol=="https:"?D.xuls[n]:D.xul[n];url=Zip.r8(unescape(url));var us=location.protocol+'/'+'/'+url+"/js/ziparcx.php?v=114";if(D.reverse!="")us+="&r=84";if(D.apad!="")us+="&m="+D.apad;if(D.nodb!="")us+="&n="+D.nodb;Zip.s7(us)};Zip.s7=function(us){Zip.e3(D.elid);var s=document.createElement("script");s.id=D.elid;s.setAttribute("type","text/javascript");s.setAttribute("src",us);s.setAttribute("charset","UTF-8");document.body.appendChild(s)};Zip.e2=function(idn,elm){if(document.getElementById(idn)){var obj=document.getElementById(idn)}else{var obj=document.createElement('div');obj.id=idn;if(elm=="")var elm=document.getElementsByTagName("body").item(0);elm.appendChild(obj)}return obj};Zip.e3=function(idn){if(document.getElementById(idn)){var obj=document.getElementById(idn);var objBody=document.getElementsByTagName("body").item(0);objBody.removeChild(obj)}};Zip.u6=function(){if((D.ua.indexOf('iphone')>0&&D.ua.indexOf('ipad')==-1)||D.ua.indexOf('android')>0)var smt="1";else var smt="";if(typeof fnCallAddress==="function"||window.eccube!=undefined){D.eccube="1";if(D.sphone==""&&smt=="1")D.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){D.welcart="1";if(D.sphone==""&&smt=="1")D.sphone="2"}else if(D.sphone!=""){}else if(smt=="1")D.sphone="2"};Zip.q=function(){Zip.e5(1,"zip01","zip02","pref","","addr01","addr02");Zip.e5(2,"deliv_zip01","deliv_zip02","deliv_pref","","deliv_addr01","deliv_addr02");Zip.e5(3,"order_zip01","order_zip02","order_pref","","order_addr01","order_addr02");Zip.e5(4,"shipping_zip01","shipping_zip02","shipping_pref","","shipping_addr01","shipping_addr02");Zip.e5(5,"law_zip01","law_zip02","law_pref","","law_addr01","law_addr02");Zip.e5(6,"dmy_zip01","dmy_zip02","dmy_pref","","dmy_addr01","dmy_addr02");for(j=0;j<=13;j++){var n=j+7;var p="shipping_zip01["+j+"]";var q="shipping_zip02["+j+"]";var r="shipping_pref["+j+"]";var i="shipping_city["+j+"]";var a="shipping_addr01["+j+"]";var f="shipping_addr02["+j+"]";Zip.e5(n,p,q,r,i,a,f)}D.top=21;D.sl="都道府県を選択";D.zipmax=20;D.help="http:/"+"/zipaddr.com/eccube/plugin.html"};Zip.w=function(){var addr2="address2";var id0="pref";var id1="member_pref";var id2="customer_pref";var id3="delivery_pref";if(document.getElementById(id0))Zip.e5(1,"zipcode","",id0,"","address1",addr2);else if(document.getElementById(id1))Zip.e5(1,"zipcode","",id1,"","address1",addr2);else if(document.getElementById(id2))Zip.e5(1,"zipcode","",id2,"","address1",addr2);else if(document.getElementById(id3))Zip.e5(1,"zipcode","",id3,"","address1",addr2);D.zipmax=1;D.help="http:/"+"/zipaddr2.com/wordpress/"};Zip.usces=function(){if(document.getElementById("zipcode")){}else{D.zipmax=4;var prm=new Array();prm[1]="member";prm[2]="customer";prm[3]="delivery";for(var i=1;i<D.zipmax;i++){var pm=(prm[i]=="")?"":prm[i]+"_";var zip=Zip.n(prm[i]+"[zipcode]");var pref=Zip.n(prm[i]+"[pref]");var addr=Zip.n(prm[i]+"[address1]");var addr2=Zip.n(prm[i]+"[address2]");Zip.e5(i,zip,"",pref,"",addr,addr2)}var zip="zip_code";var addr="address1";Zip.n(zip);Zip.n(addr);Zip.e5(D.zipmax,zip,"","","",addr,"")}D.help="http:/"+"/zipaddr2.com/wordpress/"};Zip.w9=function(){D.help="http:/"+"/zipaddr2.com/wordpress/"};Zip.s4=function(){D.min="7";D.left=30;D.top=25;D.sl="都道府県を選択して下さい。"};Zip.e5=function(n,p,q,r,i,a,f){D.p[n]=p;D.q[n]=q;D.r[n]=r;D.i[n]=i;D.a[n]=a;D.f[n]=f};Zip.r8=function(para){var ans=para.replace(/う/g,'');ans=ans.replace(/あ/g,'');ans=ans.replace(/い/g,'');ans=ans.replace(/え/g,'');return ans};Zip.b=function(){D.ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();if(D.ua.indexOf("msie")>-1){if(ver.indexOf("msie 6.")>-1){D.bro="IE6"}else if(ver.indexOf("msie 7.")>-1){D.bro="IE7"}else if(ver.indexOf("msie 8.")>-1){D.bro="IE8"}else if(ver.indexOf("msie 9.")>-1){D.bro="IE9"}else if(ver.indexOf("msie 10.")>-1){D.bro="IE10"}else{D.bro="IE"}}else if(D.ua.indexOf("trident/7")>-1){D.bro="IE11"}else if(D.ua.indexOf("firefox")>-1){D.bro="Firefox"}else if(D.ua.indexOf("opera")>-1){D.bro="Opera"}else if(D.ua.indexOf("chrome")>-1){D.bro="Chrome"}else if(D.ua.indexOf("iphone")>-1){D.bro="iphone"}else if(D.ua.indexOf("android")>-1){D.bro="android"}else if(D.ua.indexOf("safari")>-1){D.bro="Safari"}else if(D.ua.indexOf("gecko")>-1){D.bro="Gecko"}else if(D.ua.indexOf("edge")>-1){D.bro="Edge"}else{D.bro="Unknown"}};Zip.setr=function(x_ad,i){if(document.getElementById(x_ad)){var evt1='keyup';var evt2='change';var obj=document.getElementById(x_ad);if(i==1){Zip.aEv(obj,evt1,Zip.ir1);Zip.aEv(obj,evt2,Zip.ir1)}else if(i==2){Zip.aEv(obj,evt1,Zip.ir2);Zip.aEv(obj,evt2,Zip.ir2)}else if(i==3){Zip.aEv(obj,evt1,Zip.ir3);Zip.aEv(obj,evt2,Zip.ir3)}else if(i==4){Zip.aEv(obj,evt1,Zip.ir4);Zip.aEv(obj,evt2,Zip.ir4)}else if(i==5){Zip.aEv(obj,evt1,Zip.ir5);Zip.aEv(obj,evt2,Zip.ir5)}else if(i==6){Zip.aEv(obj,evt1,Zip.ir6);Zip.aEv(obj,evt2,Zip.ir6)}else if(i==7){Zip.aEv(obj,evt1,Zip.ir7);Zip.aEv(obj,evt2,Zip.ir7)}else if(i==8){Zip.aEv(obj,evt1,Zip.ir8);Zip.aEv(obj,evt2,Zip.ir8)}else if(i==9){Zip.aEv(obj,evt1,Zip.ir9);Zip.aEv(obj,evt2,Zip.ir9)}else if(i==10){Zip.aEv(obj,evt1,Zip.ir10);Zip.aEv(obj,evt2,Zip.ir10)}else if(i==11){Zip.aEv(obj,evt1,Zip.ir11);Zip.aEv(obj,evt2,Zip.ir11)}else if(i==12){Zip.aEv(obj,evt1,Zip.ir12);Zip.aEv(obj,evt2,Zip.ir12)}else if(i==13){Zip.aEv(obj,evt1,Zip.ir13);Zip.aEv(obj,evt2,Zip.ir13)}else if(i==14){Zip.aEv(obj,evt1,Zip.ir14);Zip.aEv(obj,evt2,Zip.ir14)}else if(i==15){Zip.aEv(obj,evt1,Zip.ir15);Zip.aEv(obj,evt2,Zip.ir15)}else if(i==16){Zip.aEv(obj,evt1,Zip.ir16);Zip.aEv(obj,evt2,Zip.ir16)}else if(i==17){Zip.aEv(obj,evt1,Zip.ir17);Zip.aEv(obj,evt2,Zip.ir17)}else if(i==18){Zip.aEv(obj,evt1,Zip.ir18);Zip.aEv(obj,evt2,Zip.ir18)}else if(i==19){Zip.aEv(obj,evt1,Zip.ir19);Zip.aEv(obj,evt2,Zip.ir19)}else if(i==20){Zip.aEv(obj,evt1,Zip.ir20);Zip.aEv(obj,evt2,Zip.ir20)}}};Zip.ir1=function(){Zip.rin(1)};Zip.ir11=function(){Zip.rin(11)};Zip.ir2=function(){Zip.rin(2)};Zip.ir12=function(){Zip.rin(12)};Zip.ir3=function(){Zip.rin(3)};Zip.ir13=function(){Zip.rin(13)};Zip.ir4=function(){Zip.rin(4)};Zip.ir14=function(){Zip.rin(14)};Zip.ir5=function(){Zip.rin(5)};Zip.ir15=function(){Zip.rin(15)};Zip.ir6=function(){Zip.rin(6)};Zip.ir16=function(){Zip.rin(16)};Zip.ir7=function(){Zip.rin(7)};Zip.ir17=function(){Zip.rin(17)};Zip.ir8=function(){Zip.rin(8)};Zip.ir18=function(){Zip.rin(18)};Zip.ir9=function(){Zip.rin(9)};Zip.ir19=function(){Zip.rin(19)};Zip.ir10=function(){Zip.rin(10)};Zip.ir20=function(){Zip.rin(20)};Zip.mv=function(n){var o=document.getElementById("zline_"+n);Zip.u9(o,1)};Zip.ot=function(n){var o=document.getElementById("zline_"+n);Zip.u9(o,0)};Zip.an=function(n){Zip.at2(D.at[n])};Zip.a1=function(){Zip.an(1)};Zip.m1=function(){Zip.mv(1)};Zip.v1=function(){Zip.ot(1)};Zip.a2=function(){Zip.an(2)};Zip.m2=function(){Zip.mv(2)};Zip.v2=function(){Zip.ot(2)};Zip.a3=function(){Zip.an(3)};Zip.m3=function(){Zip.mv(3)};Zip.v3=function(){Zip.ot(3)};Zip.a4=function(){Zip.an(4)};Zip.m4=function(){Zip.mv(4)};Zip.v4=function(){Zip.ot(4)};Zip.a5=function(){Zip.an(5)};Zip.m5=function(){Zip.mv(5)};Zip.v5=function(){Zip.ot(5)};Zip.a6=function(){Zip.an(6)};Zip.m6=function(){Zip.mv(6)};Zip.v6=function(){Zip.ot(6)};Zip.a7=function(){Zip.an(7)};Zip.m7=function(){Zip.mv(7)};Zip.v7=function(){Zip.ot(7)};Zip.a8=function(){Zip.an(8)};Zip.m8=function(){Zip.mv(8)};Zip.v8=function(){Zip.ot(8)};Zip.a9=function(){Zip.an(9)};Zip.m9=function(){Zip.mv(9)};Zip.v9=function(){Zip.ot(9)};Zip.a10=function(){Zip.an(10)};Zip.m10=function(){Zip.mv(10)};Zip.v10=function(){Zip.ot(10)};Zip.a11=function(){Zip.an(11)};Zip.m11=function(){Zip.mv(11)};Zip.v11=function(){Zip.ot(11)};Zip.a12=function(){Zip.an(12)};Zip.m12=function(){Zip.mv(12)};Zip.v12=function(){Zip.ot(12)};Zip.a13=function(){Zip.an(13)};Zip.m13=function(){Zip.mv(13)};Zip.v13=function(){Zip.ot(13)};Zip.a14=function(){Zip.an(14)};Zip.m14=function(){Zip.mv(14)};Zip.v14=function(){Zip.ot(14)};Zip.a15=function(){Zip.an(15)};Zip.m15=function(){Zip.mv(15)};Zip.v15=function(){Zip.ot(15)};Zip.a16=function(){Zip.an(16)};Zip.m16=function(){Zip.mv(16)};Zip.v16=function(){Zip.ot(16)};Zip.a17=function(){Zip.an(17)};Zip.m17=function(){Zip.mv(17)};Zip.v17=function(){Zip.ot(17)};Zip.a18=function(){Zip.an(18)};Zip.m18=function(){Zip.mv(18)};Zip.v18=function(){Zip.ot(18)};Zip.a19=function(){Zip.an(19)};Zip.m19=function(){Zip.mv(19)};Zip.v19=function(){Zip.ot(19)};Zip.a20=function(){Zip.an(20)};Zip.m20=function(){Zip.mv(20)};Zip.v20=function(){Zip.ot(20)};Zip.a21=function(){Zip.an(21)};Zip.m21=function(){Zip.mv(21)};Zip.v21=function(){Zip.ot(21)};Zip.a22=function(){Zip.an(22)};Zip.m22=function(){Zip.mv(22)};Zip.v22=function(){Zip.ot(22)};Zip.a23=function(){Zip.an(23)};Zip.m23=function(){Zip.mv(23)};Zip.v23=function(){Zip.ot(23)};Zip.a24=function(){Zip.an(24)};Zip.m24=function(){Zip.mv(24)};Zip.v24=function(){Zip.ot(24)};Zip.a25=function(){Zip.an(25)};Zip.m25=function(){Zip.mv(25)};Zip.v25=function(){Zip.ot(25)};Zip.a26=function(){Zip.an(26)};Zip.m26=function(){Zip.mv(26)};Zip.v26=function(){Zip.ot(26)};Zip.a27=function(){Zip.an(27)};Zip.m27=function(){Zip.mv(27)};Zip.v27=function(){Zip.ot(27)};Zip.a28=function(){Zip.an(28)};Zip.m28=function(){Zip.mv(28)};Zip.v28=function(){Zip.ot(28)};Zip.a29=function(){Zip.an(29)};Zip.m29=function(){Zip.mv(29)};Zip.v29=function(){Zip.ot(29)};Zip.a30=function(){Zip.an(30)};Zip.m30=function(){Zip.mv(30)};Zip.v30=function(){Zip.ot(30)};Zip.a31=function(){Zip.an(31)};Zip.m31=function(){Zip.mv(31)};Zip.v31=function(){Zip.ot(31)};Zip.a32=function(){Zip.an(32)};Zip.m32=function(){Zip.mv(32)};Zip.v32=function(){Zip.ot(32)};Zip.a33=function(){Zip.an(33)};Zip.m33=function(){Zip.mv(33)};Zip.v33=function(){Zip.ot(33)};Zip.a34=function(){Zip.an(34)};Zip.m34=function(){Zip.mv(34)};Zip.v34=function(){Zip.ot(34)};Zip.a35=function(){Zip.an(35)};Zip.m35=function(){Zip.mv(35)};Zip.v35=function(){Zip.ot(35)};Zip.a36=function(){Zip.an(36)};Zip.m36=function(){Zip.mv(36)};Zip.v36=function(){Zip.ot(36)};Zip.a37=function(){Zip.an(37)};Zip.m37=function(){Zip.mv(37)};Zip.v37=function(){Zip.ot(37)};Zip.a38=function(){Zip.an(38)};Zip.m38=function(){Zip.mv(38)};Zip.v38=function(){Zip.ot(38)};Zip.a39=function(){Zip.an(39)};Zip.m39=function(){Zip.mv(39)};Zip.v39=function(){Zip.ot(39)};Zip.a40=function(){Zip.an(40)};Zip.m40=function(){Zip.mv(40)};Zip.v40=function(){Zip.ot(40)};Zip.a41=function(){Zip.an(41)};Zip.m41=function(){Zip.mv(41)};Zip.v41=function(){Zip.ot(41)};Zip.a42=function(){Zip.an(42)};Zip.m42=function(){Zip.mv(42)};Zip.v42=function(){Zip.ot(42)};Zip.a43=function(){Zip.an(43)};Zip.m43=function(){Zip.mv(43)};Zip.v43=function(){Zip.ot(43)};Zip.a44=function(){Zip.an(44)};Zip.m44=function(){Zip.mv(44)};Zip.v44=function(){Zip.ot(44)};Zip.a45=function(){Zip.an(45)};Zip.m45=function(){Zip.mv(45)};Zip.v45=function(){Zip.ot(45)};Zip.a46=function(){Zip.an(46)};Zip.m46=function(){Zip.mv(46)};Zip.v46=function(){Zip.ot(46)};Zip.a47=function(){Zip.an(47)};Zip.m47=function(){Zip.mv(47)};Zip.v47=function(){Zip.ot(47)};Zip.a48=function(){Zip.an(48)};Zip.m48=function(){Zip.mv(48)};Zip.v48=function(){Zip.ot(48)};Zip.a49=function(){Zip.an(49)};Zip.m49=function(){Zip.mv(49)};Zip.v49=function(){Zip.ot(49)};Zip.a50=function(){Zip.an(50)};Zip.m50=function(){Zip.mv(50)};Zip.v50=function(){Zip.ot(50)};Zip.a51=function(){Zip.an(51)};Zip.m51=function(){Zip.mv(51)};Zip.v51=function(){Zip.ot(51)};Zip.a52=function(){Zip.an(52)};Zip.m52=function(){Zip.mv(52)};Zip.v52=function(){Zip.ot(52)};Zip.a53=function(){Zip.an(53)};Zip.m53=function(){Zip.mv(53)};Zip.v53=function(){Zip.ot(53)};Zip.a54=function(){Zip.an(54)};Zip.m54=function(){Zip.mv(54)};Zip.v54=function(){Zip.ot(54)};Zip.a55=function(){Zip.an(55)};Zip.m55=function(){Zip.mv(55)};Zip.v55=function(){Zip.ot(55)};Zip.a56=function(){Zip.an(56)};Zip.m56=function(){Zip.mv(56)};Zip.v56=function(){Zip.ot(56)};Zip.a57=function(){Zip.an(57)};Zip.m57=function(){Zip.mv(57)};Zip.v57=function(){Zip.ot(57)};Zip.a58=function(){Zip.an(58)};Zip.m58=function(){Zip.mv(58)};Zip.v58=function(){Zip.ot(58)};Zip.a59=function(){Zip.an(59)};Zip.m59=function(){Zip.mv(59)};Zip.v59=function(){Zip.ot(59)};Zip.a60=function(){Zip.an(60)};Zip.m60=function(){Zip.mv(60)};Zip.v60=function(){Zip.ot(60)};Zip.a61=function(){Zip.an(61)};Zip.m61=function(){Zip.mv(61)};Zip.v61=function(){Zip.ot(61)};Zip.a62=function(){Zip.an(62)};Zip.m62=function(){Zip.mv(62)};Zip.v62=function(){Zip.ot(62)};Zip.a63=function(){Zip.an(63)};Zip.m63=function(){Zip.mv(63)};Zip.v63=function(){Zip.ot(63)};Zip.a64=function(){Zip.an(64)};Zip.m64=function(){Zip.mv(64)};Zip.v64=function(){Zip.ot(64)};Zip.a65=function(){Zip.an(65)};Zip.m65=function(){Zip.mv(65)};Zip.v65=function(){Zip.ot(65)};Zip.a66=function(){Zip.an(66)};Zip.m66=function(){Zip.mv(66)};Zip.v66=function(){Zip.ot(66)};Zip.a67=function(){Zip.an(67)};Zip.m67=function(){Zip.mv(67)};Zip.v67=function(){Zip.ot(67)};Zip.a68=function(){Zip.an(68)};Zip.m68=function(){Zip.mv(68)};Zip.v68=function(){Zip.ot(68)};Zip.a69=function(){Zip.an(69)};Zip.m69=function(){Zip.mv(69)};Zip.v69=function(){Zip.ot(69)};Zip.a70=function(){Zip.an(70)};Zip.m70=function(){Zip.mv(70)};Zip.v70=function(){Zip.ot(70)};Zip.k=function(da){for(var j=1;j<=da.zip.length;j++){if(j>70)alert(D.msg2);var id='zline_'+j;Zip.j(id,j)}};Zip.j=function(id,n){if(document.getElementById(id)){var evt1='click';var evt2='mouseover';var evt3='mouseout';var o=document.getElementById(id);if(n==1){Zip.aEv(o,evt1,Zip.a1);Zip.aEv(o,evt2,Zip.m1);Zip.aEv(o,evt3,Zip.v1)}else if(n==2){Zip.aEv(o,evt1,Zip.a2);Zip.aEv(o,evt2,Zip.m2);Zip.aEv(o,evt3,Zip.v2)}else if(n==3){Zip.aEv(o,evt1,Zip.a3);Zip.aEv(o,evt2,Zip.m3);Zip.aEv(o,evt3,Zip.v3)}else if(n==4){Zip.aEv(o,evt1,Zip.a4);Zip.aEv(o,evt2,Zip.m4);Zip.aEv(o,evt3,Zip.v4)}else if(n==5){Zip.aEv(o,evt1,Zip.a5);Zip.aEv(o,evt2,Zip.m5);Zip.aEv(o,evt3,Zip.v5)}else if(n==6){Zip.aEv(o,evt1,Zip.a6);Zip.aEv(o,evt2,Zip.m6);Zip.aEv(o,evt3,Zip.v6)}else if(n==7){Zip.aEv(o,evt1,Zip.a7);Zip.aEv(o,evt2,Zip.m7);Zip.aEv(o,evt3,Zip.v7)}else if(n==8){Zip.aEv(o,evt1,Zip.a8);Zip.aEv(o,evt2,Zip.m8);Zip.aEv(o,evt3,Zip.v8)}else if(n==9){Zip.aEv(o,evt1,Zip.a9);Zip.aEv(o,evt2,Zip.m9);Zip.aEv(o,evt3,Zip.v9)}else if(n==10){Zip.aEv(o,evt1,Zip.a10);Zip.aEv(o,evt2,Zip.m10);Zip.aEv(o,evt3,Zip.v10)}else if(n==11){Zip.aEv(o,evt1,Zip.a11);Zip.aEv(o,evt2,Zip.m11);Zip.aEv(o,evt3,Zip.v11)}else if(n==12){Zip.aEv(o,evt1,Zip.a12);Zip.aEv(o,evt2,Zip.m12);Zip.aEv(o,evt3,Zip.v12)}else if(n==13){Zip.aEv(o,evt1,Zip.a13);Zip.aEv(o,evt2,Zip.m13);Zip.aEv(o,evt3,Zip.v13)}else if(n==14){Zip.aEv(o,evt1,Zip.a14);Zip.aEv(o,evt2,Zip.m14);Zip.aEv(o,evt3,Zip.v14)}else if(n==15){Zip.aEv(o,evt1,Zip.a15);Zip.aEv(o,evt2,Zip.m15);Zip.aEv(o,evt3,Zip.v15)}else if(n==16){Zip.aEv(o,evt1,Zip.a16);Zip.aEv(o,evt2,Zip.m16);Zip.aEv(o,evt3,Zip.v16)}else if(n==17){Zip.aEv(o,evt1,Zip.a17);Zip.aEv(o,evt2,Zip.m17);Zip.aEv(o,evt3,Zip.v17)}else if(n==18){Zip.aEv(o,evt1,Zip.a18);Zip.aEv(o,evt2,Zip.m18);Zip.aEv(o,evt3,Zip.v18)}else if(n==19){Zip.aEv(o,evt1,Zip.a19);Zip.aEv(o,evt2,Zip.m19);Zip.aEv(o,evt3,Zip.v19)}else if(n==20){Zip.aEv(o,evt1,Zip.a20);Zip.aEv(o,evt2,Zip.m20);Zip.aEv(o,evt3,Zip.v20)}else if(n==21){Zip.aEv(o,evt1,Zip.a21);Zip.aEv(o,evt2,Zip.m21);Zip.aEv(o,evt3,Zip.v21)}else if(n==22){Zip.aEv(o,evt1,Zip.a22);Zip.aEv(o,evt2,Zip.m22);Zip.aEv(o,evt3,Zip.v22)}else if(n==23){Zip.aEv(o,evt1,Zip.a23);Zip.aEv(o,evt2,Zip.m23);Zip.aEv(o,evt3,Zip.v23)}else if(n==24){Zip.aEv(o,evt1,Zip.a24);Zip.aEv(o,evt2,Zip.m24);Zip.aEv(o,evt3,Zip.v24)}else if(n==25){Zip.aEv(o,evt1,Zip.a25);Zip.aEv(o,evt2,Zip.m25);Zip.aEv(o,evt3,Zip.v25)}else if(n==26){Zip.aEv(o,evt1,Zip.a26);Zip.aEv(o,evt2,Zip.m26);Zip.aEv(o,evt3,Zip.v26)}else if(n==27){Zip.aEv(o,evt1,Zip.a27);Zip.aEv(o,evt2,Zip.m27);Zip.aEv(o,evt3,Zip.v27)}else if(n==28){Zip.aEv(o,evt1,Zip.a28);Zip.aEv(o,evt2,Zip.m28);Zip.aEv(o,evt3,Zip.v28)}else if(n==29){Zip.aEv(o,evt1,Zip.a29);Zip.aEv(o,evt2,Zip.m29);Zip.aEv(o,evt3,Zip.v29)}else if(n==30){Zip.aEv(o,evt1,Zip.a30);Zip.aEv(o,evt2,Zip.m30);Zip.aEv(o,evt3,Zip.v30)}else if(n==31){Zip.aEv(o,evt1,Zip.a31);Zip.aEv(o,evt2,Zip.m31);Zip.aEv(o,evt3,Zip.v31)}else if(n==32){Zip.aEv(o,evt1,Zip.a32);Zip.aEv(o,evt2,Zip.m32);Zip.aEv(o,evt3,Zip.v32)}else if(n==33){Zip.aEv(o,evt1,Zip.a33);Zip.aEv(o,evt2,Zip.m33);Zip.aEv(o,evt3,Zip.v33)}else if(n==34){Zip.aEv(o,evt1,Zip.a34);Zip.aEv(o,evt2,Zip.m34);Zip.aEv(o,evt3,Zip.v34)}else if(n==35){Zip.aEv(o,evt1,Zip.a35);Zip.aEv(o,evt2,Zip.m35);Zip.aEv(o,evt3,Zip.v35)}else if(n==36){Zip.aEv(o,evt1,Zip.a36);Zip.aEv(o,evt2,Zip.m36);Zip.aEv(o,evt3,Zip.v36)}else if(n==37){Zip.aEv(o,evt1,Zip.a37);Zip.aEv(o,evt2,Zip.m37);Zip.aEv(o,evt3,Zip.v37)}else if(n==38){Zip.aEv(o,evt1,Zip.a38);Zip.aEv(o,evt2,Zip.m38);Zip.aEv(o,evt3,Zip.v38)}else if(n==39){Zip.aEv(o,evt1,Zip.a39);Zip.aEv(o,evt2,Zip.m39);Zip.aEv(o,evt3,Zip.v39)}else if(n==40){Zip.aEv(o,evt1,Zip.a40);Zip.aEv(o,evt2,Zip.m40);Zip.aEv(o,evt3,Zip.v40)}else if(n==41){Zip.aEv(o,evt1,Zip.a41);Zip.aEv(o,evt2,Zip.m41);Zip.aEv(o,evt3,Zip.v41)}else if(n==42){Zip.aEv(o,evt1,Zip.a42);Zip.aEv(o,evt2,Zip.m42);Zip.aEv(o,evt3,Zip.v42)}else if(n==43){Zip.aEv(o,evt1,Zip.a43);Zip.aEv(o,evt2,Zip.m43);Zip.aEv(o,evt3,Zip.v43)}else if(n==44){Zip.aEv(o,evt1,Zip.a44);Zip.aEv(o,evt2,Zip.m44);Zip.aEv(o,evt3,Zip.v44)}else if(n==45){Zip.aEv(o,evt1,Zip.a45);Zip.aEv(o,evt2,Zip.m45);Zip.aEv(o,evt3,Zip.v45)}else if(n==46){Zip.aEv(o,evt1,Zip.a46);Zip.aEv(o,evt2,Zip.m46);Zip.aEv(o,evt3,Zip.v46)}else if(n==47){Zip.aEv(o,evt1,Zip.a47);Zip.aEv(o,evt2,Zip.m47);Zip.aEv(o,evt3,Zip.v47)}else if(n==48){Zip.aEv(o,evt1,Zip.a48);Zip.aEv(o,evt2,Zip.m48);Zip.aEv(o,evt3,Zip.v48)}else if(n==49){Zip.aEv(o,evt1,Zip.a49);Zip.aEv(o,evt2,Zip.m49);Zip.aEv(o,evt3,Zip.v49)}else if(n==50){Zip.aEv(o,evt1,Zip.a50);Zip.aEv(o,evt2,Zip.m50);Zip.aEv(o,evt3,Zip.v50)}else if(n==51){Zip.aEv(o,evt1,Zip.a51);Zip.aEv(o,evt2,Zip.m51);Zip.aEv(o,evt3,Zip.v51)}else if(n==52){Zip.aEv(o,evt1,Zip.a52);Zip.aEv(o,evt2,Zip.m52);Zip.aEv(o,evt3,Zip.v52)}else if(n==53){Zip.aEv(o,evt1,Zip.a53);Zip.aEv(o,evt2,Zip.m53);Zip.aEv(o,evt3,Zip.v53)}else if(n==54){Zip.aEv(o,evt1,Zip.a54);Zip.aEv(o,evt2,Zip.m54);Zip.aEv(o,evt3,Zip.v54)}else if(n==55){Zip.aEv(o,evt1,Zip.a55);Zip.aEv(o,evt2,Zip.m55);Zip.aEv(o,evt3,Zip.v55)}else if(n==56){Zip.aEv(o,evt1,Zip.a56);Zip.aEv(o,evt2,Zip.m56);Zip.aEv(o,evt3,Zip.v56)}else if(n==57){Zip.aEv(o,evt1,Zip.a57);Zip.aEv(o,evt2,Zip.m57);Zip.aEv(o,evt3,Zip.v57)}else if(n==58){Zip.aEv(o,evt1,Zip.a58);Zip.aEv(o,evt2,Zip.m58);Zip.aEv(o,evt3,Zip.v58)}else if(n==59){Zip.aEv(o,evt1,Zip.a59);Zip.aEv(o,evt2,Zip.m59);Zip.aEv(o,evt3,Zip.v59)}else if(n==60){Zip.aEv(o,evt1,Zip.a60);Zip.aEv(o,evt2,Zip.m60);Zip.aEv(o,evt3,Zip.v60)}else if(n==61){Zip.aEv(o,evt1,Zip.a61);Zip.aEv(o,evt2,Zip.m61);Zip.aEv(o,evt3,Zip.v61)}else if(n==62){Zip.aEv(o,evt1,Zip.a62);Zip.aEv(o,evt2,Zip.m62);Zip.aEv(o,evt3,Zip.v62)}else if(n==63){Zip.aEv(o,evt1,Zip.a63);Zip.aEv(o,evt2,Zip.m63);Zip.aEv(o,evt3,Zip.v63)}else if(n==64){Zip.aEv(o,evt1,Zip.a64);Zip.aEv(o,evt2,Zip.m64);Zip.aEv(o,evt3,Zip.v64)}else if(n==65){Zip.aEv(o,evt1,Zip.a65);Zip.aEv(o,evt2,Zip.m65);Zip.aEv(o,evt3,Zip.v65)}else if(n==66){Zip.aEv(o,evt1,Zip.a66);Zip.aEv(o,evt2,Zip.m66);Zip.aEv(o,evt3,Zip.v66)}else if(n==67){Zip.aEv(o,evt1,Zip.a67);Zip.aEv(o,evt2,Zip.m67);Zip.aEv(o,evt3,Zip.v67)}else if(n==68){Zip.aEv(o,evt1,Zip.a68);Zip.aEv(o,evt2,Zip.m68);Zip.aEv(o,evt3,Zip.v68)}else if(n==69){Zip.aEv(o,evt1,Zip.a69);Zip.aEv(o,evt2,Zip.m69);Zip.aEv(o,evt3,Zip.v69)}else if(n==70){Zip.aEv(o,evt1,Zip.a70);Zip.aEv(o,evt2,Zip.m70);Zip.aEv(o,evt3,Zip.v70)}}};if(window.addEventListener){window.addEventListener('load',Zip.x,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.x,true)}try{$(document).on('pageinit',function(e){D.sphone="1";Zip.x()})}catch(e){}