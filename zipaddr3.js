function Zip(){
/*
 *	■郵便番号から住所情報の自動入力処理( zipaddr3.js Ver7.41 )
 *
 *	The use is charged.  // ご利用は有料です。
 *	@demo    http://zipaddr2.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[htmlの定義]
 *	<link rel="stylesheet" href="css/zipaddr.css" />‥‥[任意]
 *
 *	<script src="http://zipaddr2.com/js/zipaddr3.js"  charset="UTF-8"></script> or
 *	<script src="https://zipaddr2-com.ssl-sixcore.jp/js/zipaddr3.js" charset="UTF-8"></script>
 *
 *	同様の使い方で次のモジュールがあります。
 *	　zipaddr30.js： ガイダンス表示なしモジュール。
 *	　zipaddrr3.js： 住所から郵便番号を逆検索（有償オプション）。
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
this.min= "5";      // 拡張用(mini)
this.max= "7";      // 拡張用(max)
this.sel= "10";     // 拡張用(selectc)
this.wok= "";       // 拡張用(1:企業を除く)
this.left=22;       // offsetLeft
this.top= 18;       // offsetTop
this.pfon="12";     // pc:font-size
this.phig="1.4";    // pc:height
this.sfon="20";     // sPhone
this.shig="1.5";
this.emsg="1";      // 1:エラーメッセージを阻止する
this.rtrv="1";      // 1:曖昧検索,0:完全一致
this.rtrs="1";      // 1:補助ガイダンス利用
this.exinput="";    // 1:拡張入力,2:専用
this.welcart="";    // 1:on
this.usces="";      // 1:拡張
this.nodb="";       // 1:nodb
this.wp="";         // 1:on
this.eccube="";     // 1:on
this.reverse="";    // 1:逆検索on, 2:大口事業所を含む
this.rmin= "2";     // 逆用(mini)
this.rsel= "15";    // 逆用(selectc)
this.sphone= "";    // SmartPhone 1:jQuery-mobile,2:etc
this.opt= "_____";  // li
this.guide= "&nbsp;@head　@count&nbsp;@closeNL@line&nbsp;@zipaddr@page"; // G-layout、NL:改行
this.contract="WRRS2uQhW66E"; // 契約コード(c)

//  郵便番号(7桁/上3)用　下4桁      都道府県          市区町村          地域
this.zp= "zip";  this.zp1= "zip1";  this.pr= "pref";  this.ci= "city";  this.ad= "addr";
this.zp2="zip2"; this.zp21="zip21"; this.pr2="pref2"; this.ci2="city2"; this.ad2="addr2";
this.zp3="zip3"; this.zp31="zip31"; this.pr3="pref3"; this.ci3="city3"; this.ad3="addr3";
this.zp4="zip4"; this.zp41="zip41"; this.pr4="pref4"; this.ci4="city4"; this.ad4="addr4";
this.zp5="zip5"; this.zp51="zip51"; this.pr5="pref5"; this.ci5="city5"; this.ad5="addr5";
this.zp6="zip6"; this.zp61="zip61"; this.pr6="pref6"; this.ci6="city6"; this.ad6="addr6";
//        zip7, zip71, pref7, city7, addr7        // zip7～以降は上記体系で名称は固定です。
this.zipmax=20;     // 郵便番号max設置数
this.focus= "";     // set後のfocus位置
this.sysid= "";     // 拡張sys識別子
this.pm=new Array();// 拡張用
/*	<-↑ 以上はオウンコーディングで変更可能です-> */

this.zipaddr= "zipaddr";
this.xvr= "7.41";
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
this.at=new Array();
this.preftable= new Array();
this.xul= new Array();
this.xuls=new Array();
this.sv="";         // server
this.ua;            // agent
this.xuse= 0;       // 1:論理チェックok
this.xlisten= "";   // 1:ｷIE,2:IE
this.ajax="";       // 1:on
this.bro="";        // ブラウザ
this.help= "http://zipaddr2.com/";
this.elid="callzipaddr";
this.apad="";       // module追加
this.after="";      // 1:後処理要
this.woo="";        // 1:woo
this.msg1= "**郵番の設置は最大20箇所迄です。";
this.msg2= "**Listen 70over, Please TEL Zipaddr";
this.n= "[住所自動入力]_start！";
this.lang="";
}var ZP= new Zip;
Zip.nfc=function(nn,z1p,z2p){var keys=document.getElementById(z1p).value;var key2=document.getElementById(z2p).value;keys=Zip.chg(keys);key2=Zip.chg(key2);var kl0=keys.length;var kl2=key2.length;if(kl0==3&&kl2==4)Zip.chk(nn);else{if(ZP.sphone==""&&kl0==3&&kl2<=3)Zip.focus(document.getElementById(z2p));if(window.File&&(ZP.exinput=="2"||keys=="?"))Zip.chk(nn);else if(ZP.rtrs=="1"||(ZP.nodb!=""&&kl0==3))Zip.chk(nn)}};Zip.chg=function(keys){var dd=Zip.zenk_hank(keys);dd=dd.replace(/-/g,'');dd=dd.replace(/\s/g,'');return dd};Zip.ajax=function(idn){if(idn!=""&&document.getElementById(idn)){if(ZP.ajax==""){ZP.ajax="1";Zip.entry()}if(ZP.ajax=="1"){for(ii=1;ii<=ZP.zipmax;ii++){if(ZP.p[ii]==idn){Zip.chk(ii);break}}}}};Zip.focus=function(ee){var size=ee.value.length;ee.focus();if(ee.createTextRange){var range=ee.createTextRange();range.move('character',size);range.select()}else if(ee.setSelectionRange){ee.setSelectionRange(size,size)}};Zip.entry=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Zip.brows();Zip.urlgen();Zip.Module();if(ZP.debug=="1")Zip.debug();if(ZP.eccube=="1"&&typeof Zip.eccube==="function")Zip.eccube();if(ZP.welcart=="1"&&typeof Zip.welcart==="function")Zip.welcart();if(typeof ZP.usces!="undefined"&&ZP.usces=="1"&&typeof Zip.usces==="function")Zip.usces();if(ZP.wp=="1"&&typeof Zip.wpress==="function")Zip.wpress();if(ZP.sphone!=""&&typeof Zip.SPhone==="function")Zip.SPhone();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof ZP.pm[1]!="undefined"&&ZP.pm[1]!=""){for(var jj=1;jj<ZP.pm.length;jj++){var tt=ZP.pm[jj];var ppp="";var qq="";var rr="";var ii="";var aa="";var ff="";if(typeof tt.zip!="undefined")ppp=Zip.getid(tt.zip);if(typeof tt.zip1!="undefined")qq=Zip.getid(tt.zip1);if(typeof tt.pref!="undefined")rr=Zip.getid(tt.pref);if(typeof tt.city!="undefined")ii=Zip.getid(tt.city);if(typeof tt.addr!="undefined")aa=Zip.getid(tt.addr);if(typeof tt.focus!="undefined")ff=Zip.getid(tt.focus);Zip.pqria(jj,ppp,qq,rr,ii,aa,ff)}ZP.zipmax=ZP.pm.length-1}else if(ZP.eccube=="1"||ZP.welcart=="1"||ZP.usces=="1"){}else Zip.maxset();Zip.htmlown();if(typeof zipaddr_ownc==="function")zipaddr_ownc();ZP.sysid=ZP.sysid.toUpperCase();if(ZP.sysid!="")Zip.APsysid();for(i=1;i<=ZP.zipmax;i++){Zip.getid(ZP.p[i]);Zip.getid(ZP.q[i]);Zip.getid(ZP.r[i]);Zip.getid(ZP.i[i]);Zip.getid(ZP.a[i]);if(i>20)alert(ZP.msg1);else{Zip.set(ZP.p[i],ZP.q[i],i);if(ZP.reverse!="")Zip.setr(ZP.a[i],i)}}if(ZP.lang=="EN")ZP.apad+=";EN.js";if(ZP.xuse==1){if(typeof Zip.chk==="function"){}else Zip.zipaddrc()}if(typeof zipaddr_owna==="function")zipaddr_owna()};Zip.maxset=function(){ZP.p[1]=ZP.zp;ZP.q[1]=ZP.zp1;ZP.r[1]=ZP.pr;ZP.i[1]=ZP.ci;ZP.a[1]=ZP.ad;ZP.p[2]=ZP.zp2;ZP.q[2]=ZP.zp21;ZP.r[2]=ZP.pr2;ZP.i[2]=ZP.ci2;ZP.a[2]=ZP.ad2;ZP.p[3]=ZP.zp3;ZP.q[3]=ZP.zp31;ZP.r[3]=ZP.pr3;ZP.i[3]=ZP.ci3;ZP.a[3]=ZP.ad3;ZP.p[4]=ZP.zp4;ZP.q[4]=ZP.zp41;ZP.r[4]=ZP.pr4;ZP.i[4]=ZP.ci4;ZP.a[4]=ZP.ad4;ZP.p[5]=ZP.zp5;ZP.q[5]=ZP.zp51;ZP.r[5]=ZP.pr5;ZP.i[5]=ZP.ci5;ZP.a[5]=ZP.ad5;ZP.p[6]=ZP.zp6;ZP.q[6]=ZP.zp61;ZP.r[6]=ZP.pr6;ZP.i[6]=ZP.ci6;ZP.a[6]=ZP.ad6;for(i=7;i<=ZP.zipmax;i++){var n=i;ZP.p[i]="zip"+n;ZP.q[i]="zip"+n+"1";ZP.r[i]="pref"+n;ZP.i[i]="city"+n;ZP.a[i]="addr"+n}};Zip.htmlown=function(){var idn="zipaddr_param";if(document.getElementById(idn)){var obj=document.getElementById(idn);var prm=obj.value;var da=prm.split(",");for(var j=0;j<da.length;j++){var wa=da[j].replace(/(^\s+)|(\s+$)/g,"");var wk=wa.split("=");if(wk.length==2){var w1=wk[0];var w2=wk[1];if(w1=="zip")ZP.p[1]=w2;else if(w1=="zip1")ZP.q[1]=w2;else if(w1=="pref")ZP.r[1]=w2;else if(w1=="city")ZP.i[1]=w2;else if(w1=="addr")ZP.a[1]=w2;else if(w1=="zip2")ZP.p[2]=w2;else if(w1=="zip21")ZP.q[2]=w2;else if(w1=="pref2")ZP.r[2]=w2;else if(w1=="city2")ZP.i[2]=w2;else if(w1=="addr2")ZP.a[2]=w2;else if(w1=="dli")ZP.dli=w2;else if(w1=="bgc")ZP.bgc=w2;else if(w1=="bgm")ZP.bgm=w2;else if(w1=="ovr")ZP.ovr=w2;else if(w1=="lnc")ZP.lnc=w2;else if(w1=="clr")ZP.clr=w2;else if(w1=="min")ZP.min=w2;else if(w1=="sel")ZP.sel=w2;else if(w1=="left")ZP.left=w2;else if(w1=="top")ZP.top=w2;else if(w1=="pfon")ZP.pfon=w2;else if(w1=="phig")ZP.phig=w2;else if(w1=="sfon")ZP.sfon=w2;else if(w1=="shig")ZP.shig=w2;else if(w1=="rtrv")ZP.rtrv=w2;else if(w1=="rtrs")ZP.rtrs=w2;else if(w1=="opt")ZP.opt=w2;else if(w1=="lang")ZP.lang=w2;else if(w1=="exinput")ZP.exinput=w2;else if(w1=="welcart")ZP.welcart=w2;else if(w1=="eccube")ZP.eccube=w2;else if(w1=="zipmax")ZP.zipmax=w2;else if(w1=="focus")ZP.focus=w2;else if(w1=="sysid")ZP.sysid=w2;else if(w1=="after")ZP.after=w2;else if(w1=="debug")ZP.debug=w2}}}};Zip.APsysid=function(){var wk=ZP.sysid.split("_");for(var i=0;i<wk.length;i++){var dat=wk[i];if(dat=="WOOCOMMERCE"){ZP.woo="1";ZP.apad="woocommerce_after.js";ZP.after="1";for(j=1;j<=2;j++){if(j==1)var sd="billing_";else var sd="shipping_";Zip.pqria(j,sd+"postcode","",sd+"state",sd+"city",sd+"address_1","")}}else if(dat=="TRUSTFORM"){var dac="zip_pref_city_addr";var dan=dac.split("_");for(var j=0;j<dan.length;j++){var da=dan[j];for(var k=1;k<=ZP.zipmax;k++){var nam=(k<=1)?da:da+String(k);Zip.clasd(nam);if(da=="zip")Zip.clasd(nam+"1")}}}}};Zip.debug=function(){var ans="Start-"+ZP.zipaddr+"_Ver"+ZP.xvr+"\n";ans+="EC-CUBE: "+ZP.eccube+"\n";ans+="Welcart: "+ZP.welcart+"\n";ans+="SmartPhone:"+ZP.sphone+"\n";ans+="Reverse:"+ZP.reverse+"\n";ans+="zipmax:"+ZP.zipmax+"\n";ans+="sv:"+ZP.sv+"\n";alert(ans)};Zip.getid=function(ix){var nn=ix;if(ix==""||document.getElementById(ix)){}else{var elm=document.getElementsByName(ix);if(elm.length==1&&(elm[0].id=="undefined"||elm[0].id=="")){nn=nn.replace(/\[/g,"");nn=nn.replace(/\]/g,"");elm[0].id=nn}else if(elm.length==1){nn=elm[0].id}}return nn};Zip.clasd=function(nam){if(nam!=""){var elm=document.getElementsByClassName(nam);if(elm.length==1&&!document.getElementById(nam)){if(elm[0].id=="")elm[0].id=nam}}};Zip.fc1=function(){Zip.nfc(1,ZP.p[1],ZP.q[1])};Zip.fc11=function(){11,Zip.nfc(ZP.p[11],ZP.q[11])};Zip.fc2=function(){Zip.nfc(2,ZP.p[2],ZP.q[2])};Zip.fc12=function(){12,Zip.nfc(ZP.p[12],ZP.q[12])};Zip.fc3=function(){Zip.nfc(3,ZP.p[3],ZP.q[3])};Zip.fc13=function(){13,Zip.nfc(ZP.p[13],ZP.q[13])};Zip.fc4=function(){Zip.nfc(4,ZP.p[4],ZP.q[4])};Zip.fc14=function(){14,Zip.nfc(ZP.p[14],ZP.q[14])};Zip.fc5=function(){Zip.nfc(5,ZP.p[5],ZP.q[5])};Zip.fc15=function(){15,Zip.nfc(ZP.p[15],ZP.q[15])};Zip.fc6=function(){Zip.nfc(6,ZP.p[6],ZP.q[6])};Zip.fc16=function(){16,Zip.nfc(ZP.p[16],ZP.q[16])};Zip.fc7=function(){Zip.nfc(7,ZP.p[7],ZP.q[7])};Zip.fc17=function(){17,Zip.nfc(ZP.p[17],ZP.q[17])};Zip.fc8=function(){Zip.nfc(8,ZP.p[8],ZP.q[8])};Zip.fc18=function(){18,Zip.nfc(ZP.p[18],ZP.q[18])};Zip.fc9=function(){Zip.nfc(9,ZP.p[9],ZP.q[9])};Zip.fc19=function(){19,Zip.nfc(ZP.p[19],ZP.q[19])};Zip.fc10=function(){Zip.nfc(10,ZP.p[10],ZP.q[10])};Zip.fc20=function(){20,Zip.nfc(ZP.p[20],ZP.q[20])};Zip.in1=function(){Zip.chk(1)};Zip.in11=function(){Zip.chk(11)};Zip.in2=function(){Zip.chk(2)};Zip.in12=function(){Zip.chk(12)};Zip.in3=function(){Zip.chk(3)};Zip.in13=function(){Zip.chk(13)};Zip.in4=function(){Zip.chk(4)};Zip.in14=function(){Zip.chk(14)};Zip.in5=function(){Zip.chk(5)};Zip.in15=function(){Zip.chk(15)};Zip.in6=function(){Zip.chk(6)};Zip.in16=function(){Zip.chk(16)};Zip.in7=function(){Zip.chk(7)};Zip.in17=function(){Zip.chk(17)};Zip.in8=function(){Zip.chk(8)};Zip.in18=function(){Zip.chk(18)};Zip.in9=function(){Zip.chk(9)};Zip.in19=function(){Zip.chk(19)};Zip.in10=function(){Zip.chk(10)};Zip.in20=function(){Zip.chk(20)};Zip.set=function(z1p,z2p,ii){if(window.File&&ZP.exinput=="2")var evt="mouseover";else var evt="keyup";if(z1p!=""&&document.getElementById(z1p)){var insize=(ZP.dli=="")?7:8;var obj=document.getElementById(z1p);var spc="";try{spc=obj.placeholder}catch(e){spc="1"}if(spc=="")obj.placeholder="住所自動入力";var tp=obj.getAttribute("type").toLowerCase();if(z2p!=""&&document.getElementById(z2p)){Zip.setime(obj);Zip.settype(obj);if(ZP.sphone==""){Zip.set1(obj,evt,ii)}var obj=document.getElementById(z2p);insize=4}else{if(tp=="number"){insize=7;ZP.dli=""}}Zip.setime(obj);if(insize==4||insize==7)Zip.settype(obj);Zip.set2(obj,evt,ii);if(obj.maxLength<=0||obj.maxLength>=100)obj.maxLength=insize;ZP.xuse=1}};Zip.set1=function(obj,evt,ii){if(ii==1){Zip.aEv(obj,evt,Zip.fc1)}else if(ii==2){Zip.aEv(obj,evt,Zip.fc2)}else if(ii==3){Zip.aEv(obj,evt,Zip.fc3)}else if(ii==4){Zip.aEv(obj,evt,Zip.fc4)}else if(ii==5){Zip.aEv(obj,evt,Zip.fc5)}else if(ii==6){Zip.aEv(obj,evt,Zip.fc6)}else if(ii==7){Zip.aEv(obj,evt,Zip.fc7)}else if(ii==8){Zip.aEv(obj,evt,Zip.fc8)}else if(ii==9){Zip.aEv(obj,evt,Zip.fc9)}else if(ii==10){Zip.aEv(obj,evt,Zip.fc10)}else if(ii==11){Zip.aEv(obj,evt,Zip.fc11)}else if(ii==12){Zip.aEv(obj,evt,Zip.fc12)}else if(ii==13){Zip.aEv(obj,evt,Zip.fc13)}else if(ii==14){Zip.aEv(obj,evt,Zip.fc14)}else if(ii==15){Zip.aEv(obj,evt,Zip.fc15)}else if(ii==16){Zip.aEv(obj,evt,Zip.fc16)}else if(ii==17){Zip.aEv(obj,evt,Zip.fc17)}else if(ii==18){Zip.aEv(obj,evt,Zip.fc18)}else if(ii==19){Zip.aEv(obj,evt,Zip.fc19)}else if(ii==20){Zip.aEv(obj,evt,Zip.fc20)}};Zip.set2=function(obj,evt,ii){if(ii==1){Zip.aEv(obj,evt,Zip.in1)}else if(ii==2){Zip.aEv(obj,evt,Zip.in2)}else if(ii==3){Zip.aEv(obj,evt,Zip.in3)}else if(ii==4){Zip.aEv(obj,evt,Zip.in4)}else if(ii==5){Zip.aEv(obj,evt,Zip.in5)}else if(ii==6){Zip.aEv(obj,evt,Zip.in6)}else if(ii==7){Zip.aEv(obj,evt,Zip.in7)}else if(ii==8){Zip.aEv(obj,evt,Zip.in8)}else if(ii==9){Zip.aEv(obj,evt,Zip.in9)}else if(ii==10){Zip.aEv(obj,evt,Zip.in10)}else if(ii==11){Zip.aEv(obj,evt,Zip.in11)}else if(ii==12){Zip.aEv(obj,evt,Zip.in12)}else if(ii==13){Zip.aEv(obj,evt,Zip.in13)}else if(ii==14){Zip.aEv(obj,evt,Zip.in14)}else if(ii==15){Zip.aEv(obj,evt,Zip.in15)}else if(ii==16){Zip.aEv(obj,evt,Zip.in16)}else if(ii==17){Zip.aEv(obj,evt,Zip.in17)}else if(ii==18){Zip.aEv(obj,evt,Zip.in18)}else if(ii==19){Zip.aEv(obj,evt,Zip.in19)}else if(ii==20){Zip.aEv(obj,evt,Zip.in20)}};Zip.aEv=function(obj,type,mod){if(obj.addEventListener){obj.addEventListener(type,mod,false);ZP.xlisten="1"}else if(obj.attachEvent){obj.attachEvent('on'+type,mod);ZP.xlisten="2"}};Zip.setime=function(obj){obj.style.imeMode="disabled"};Zip.settype=function(obj){if(ZP.sphone!="")obj.type="tel"};Zip.zenk_hank=function(data){var zenk="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var hank="0123456789-----";var ans="";for(var ii=0;ii<data.length;ii++){var ss=data.charAt(ii);var nn=zenk.indexOf(ss,0);if(nn>=0)ss=hank.charAt(nn);ans+=ss}return ans};Zip.urlgen=function(){ZP.xul[0]="%u3046zi%u3046pa%u3042dd%u3046r5.%u3046com";ZP.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r3%u3046.c%u3042om";ZP.xuls[0]="zi%u3046pa%u3046ddr%u30425-co%u3046m.s%u3046sl%u3042-si%u3046xc%u3046ore.jp";ZP.xuls[1]="zipaddr3-com.s%u3046sl-x%u3044server.jp";ZP.sv=Math.floor(Math.random()*2);ZP.sv="0"};Zip.zipaddrc=function(){var n=0;var url=location.protocol=="https:"?ZP.xuls[n]:ZP.xul[n];url=Zip.pararepl(unescape(url));var us=location.protocol+'/'+'/'+url+"/js/ziparc7.php?v=108";if(ZP.reverse!=""){us+="&r="+ZP.reverse;us+="&s=84"}if(ZP.apad!="")us+="&m="+ZP.apad;if(ZP.nodb!="")us+="&n="+ZP.nodb;Zip.scall(us)};Zip.scall=function(us){Zip.el_close(ZP.elid);var ss=document.createElement("script");ss.id=ZP.elid;ss.setAttribute("type","text/javascript");ss.setAttribute("src",us);ss.setAttribute("charset","UTF-8");document.body.appendChild(ss)};Zip.el_create=function(idn,elm){var obj;if(document.getElementById(idn)){obj=document.getElementById(idn)}else{obj=document.createElement('div');obj.id=idn;if(elm=="")var elm=document.getElementsByTagName("body").item(0);elm.appendChild(obj)}return obj};Zip.el_close=function(idn){if(document.getElementById(idn)){var obj=document.getElementById(idn);var newBody=document.getElementsByTagName("body").item(0);newBody.removeChild(obj)}};Zip.Module=function(){var smt;if((ZP.ua.indexOf('iphone')>0&&ZP.ua.indexOf('ipad')==-1)||ZP.ua.indexOf('android')>0)smt="1";else smt="";if(typeof fnCallAddress==="function"||window.eccube!=undefined){ZP.eccube="1";if(ZP.sphone==""&&smt=="1")ZP.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){ZP.welcart="1";if(ZP.sphone==""&&smt=="1")ZP.sphone="2"}else if(ZP.sphone!=""){}else if(smt=="1")ZP.sphone="2"};Zip.eccube=function(){Zip.pqria(1,"zip01","zip02","pref","","addr01","addr02");Zip.pqria(2,"deliv_zip01","deliv_zip02","deliv_pref","","deliv_addr01","deliv_addr02");Zip.pqria(3,"order_zip01","order_zip02","order_pref","","order_addr01","order_addr02");Zip.pqria(4,"shipping_zip01","shipping_zip02","shipping_pref","","shipping_addr01","shipping_addr02");Zip.pqria(5,"law_zip01","law_zip02","law_pref","","law_addr01","law_addr02");Zip.pqria(6,"dmy_zip01","dmy_zip02","dmy_pref","","dmy_addr01","dmy_addr02");for(jj=0;jj<=13;jj++){var nn=jj+7;var pp="shipping_zip01["+jj+"]";var qq="shipping_zip02["+jj+"]";var rr="shipping_pref["+jj+"]";var ii="shipping_city["+jj+"]";var aa="shipping_addr01["+jj+"]";var ff="shipping_addr02["+jj+"]";Zip.pqria(nn,pp,qq,rr,ii,aa,ff)}ZP.top=21;ZP.sl="都道府県を選択";ZP.zipmax=20;ZP.help="http:/"+"/zipaddr.com/eccube/plugin.html"};Zip.welcart=function(){var addr2="address2";var id0="pref";var id1="member_pref";var id2="customer_pref";var id3="delivery_pref";if(document.getElementById(id0))Zip.pqria(1,"zipcode","",id0,"","address1",addr2);else if(document.getElementById(id1))Zip.pqria(1,"zipcode","",id1,"","address1",addr2);else if(document.getElementById(id2))Zip.pqria(1,"zipcode","",id2,"","address1",addr2);else if(document.getElementById(id3))Zip.pqria(1,"zipcode","",id3,"","address1",addr2);ZP.zipmax=1;ZP.help="http:/"+"/zipaddr2.com/wordpress/"};Zip.usces=function(){if(document.getElementById("zipcode")){}else{ZP.zipmax=4;var prm=new Array();prm[1]="member";prm[2]="customer";prm[3]="delivery";for(var ii=1;ii<ZP.zipmax;ii++){var z1p=Zip.getid(prm[ii]+"[zipcode]");var prf=Zip.getid(prm[ii]+"[pref]");var adr1=Zip.getid(prm[ii]+"[address1]");var adr2=Zip.getid(prm[ii]+"[address2]");Zip.pqria(ii,z1p,"",prf,"",adr1,adr2)}Zip.getid("zip_code");Zip.getid("address1");Zip.pqria(ZP.zipmax,"zip_code","","","","address1","")}};Zip.wpress=function(){ZP.help="http:/"+"/zipaddr2.com/wordpress/"};Zip.SPhone=function(){ZP.min="7";ZP.left=30;ZP.top=25;ZP.sl="都道府県を選択して下さい。"};Zip.pqria=function(nn,pp,qq,rr,ii,aa,ff){ZP.p[nn]=pp;ZP.q[nn]=qq;ZP.r[nn]=rr;ZP.i[nn]=ii;ZP.a[nn]=aa;ZP.f[nn]=ff};Zip.pararepl=function(para){var ans=para.replace(/う/g,'');ans=ans.replace(/あ/g,'');ans=ans.replace(/い/g,'');ans=ans.replace(/え/g,'');return ans};Zip.brows=function(){ZP.ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();if(ZP.ua.indexOf("msie")>-1){if(ver.indexOf("msie 6.")>-1){ZP.bro="IE6"}else if(ver.indexOf("msie 7.")>-1){ZP.bro="IE7"}else if(ver.indexOf("msie 8.")>-1){ZP.bro="IE8"}else if(ver.indexOf("msie 9.")>-1){ZP.bro="IE9"}else if(ver.indexOf("msie 10.")>-1){ZP.bro="IE10"}else{ZP.bro="IE"}}else if(ZP.ua.indexOf("trident/7")>-1){ZP.bro="IE11"}else if(ZP.ua.indexOf("firefox")>-1){ZP.bro="Firefox"}else if(ZP.ua.indexOf("opera")>-1){ZP.bro="Opera"}else if(ZP.ua.indexOf("chrome")>-1){ZP.bro="Chrome"}else if(ZP.ua.indexOf("iphone")>-1){ZP.bro="iphone"}else if(ZP.ua.indexOf("android")>-1){ZP.bro="android"}else if(ZP.ua.indexOf("safari")>-1){ZP.bro="Safari"}else if(ZP.ua.indexOf("gecko")>-1){ZP.bro="Gecko"}else if(ZP.ua.indexOf("edge")>-1){ZP.bro="Edge"}else{ZP.bro="Unknown"}};Zip.setr=function(x_ad,ii){if(document.getElementById(x_ad)){var evt1='keyup';var evt2='change';var obj=document.getElementById(x_ad);if(ii==1){Zip.aEv(obj,evt1,Zip.ir1);Zip.aEv(obj,evt2,Zip.ir1)}else if(ii==2){Zip.aEv(obj,evt1,Zip.ir2);Zip.aEv(obj,evt2,Zip.ir2)}else if(ii==3){Zip.aEv(obj,evt1,Zip.ir3);Zip.aEv(obj,evt2,Zip.ir3)}else if(ii==4){Zip.aEv(obj,evt1,Zip.ir4);Zip.aEv(obj,evt2,Zip.ir4)}else if(ii==5){Zip.aEv(obj,evt1,Zip.ir5);Zip.aEv(obj,evt2,Zip.ir5)}else if(ii==6){Zip.aEv(obj,evt1,Zip.ir6);Zip.aEv(obj,evt2,Zip.ir6)}else if(ii==7){Zip.aEv(obj,evt1,Zip.ir7);Zip.aEv(obj,evt2,Zip.ir7)}else if(ii==8){Zip.aEv(obj,evt1,Zip.ir8);Zip.aEv(obj,evt2,Zip.ir8)}else if(ii==9){Zip.aEv(obj,evt1,Zip.ir9);Zip.aEv(obj,evt2,Zip.ir9)}else if(ii==10){Zip.aEv(obj,evt1,Zip.ir10);Zip.aEv(obj,evt2,Zip.ir10)}else if(ii==11){Zip.aEv(obj,evt1,Zip.ir11);Zip.aEv(obj,evt2,Zip.ir11)}else if(ii==12){Zip.aEv(obj,evt1,Zip.ir12);Zip.aEv(obj,evt2,Zip.ir12)}else if(ii==13){Zip.aEv(obj,evt1,Zip.ir13);Zip.aEv(obj,evt2,Zip.ir13)}else if(ii==14){Zip.aEv(obj,evt1,Zip.ir14);Zip.aEv(obj,evt2,Zip.ir14)}else if(ii==15){Zip.aEv(obj,evt1,Zip.ir15);Zip.aEv(obj,evt2,Zip.ir15)}else if(ii==16){Zip.aEv(obj,evt1,Zip.ir16);Zip.aEv(obj,evt2,Zip.ir16)}else if(ii==17){Zip.aEv(obj,evt1,Zip.ir17);Zip.aEv(obj,evt2,Zip.ir17)}else if(ii==18){Zip.aEv(obj,evt1,Zip.ir18);Zip.aEv(obj,evt2,Zip.ir18)}else if(ii==19){Zip.aEv(obj,evt1,Zip.ir19);Zip.aEv(obj,evt2,Zip.ir19)}else if(ii==20){Zip.aEv(obj,evt1,Zip.ir20);Zip.aEv(obj,evt2,Zip.ir20)}}};Zip.ir1=function(){Zip.rin(1)};Zip.ir11=function(){Zip.rin(11)};Zip.ir2=function(){Zip.rin(2)};Zip.ir12=function(){Zip.rin(12)};Zip.ir3=function(){Zip.rin(3)};Zip.ir13=function(){Zip.rin(13)};Zip.ir4=function(){Zip.rin(4)};Zip.ir14=function(){Zip.rin(14)};Zip.ir5=function(){Zip.rin(5)};Zip.ir15=function(){Zip.rin(15)};Zip.ir6=function(){Zip.rin(6)};Zip.ir16=function(){Zip.rin(16)};Zip.ir7=function(){Zip.rin(7)};Zip.ir17=function(){Zip.rin(17)};Zip.ir8=function(){Zip.rin(8)};Zip.ir18=function(){Zip.rin(18)};Zip.ir9=function(){Zip.rin(9)};Zip.ir19=function(){Zip.rin(19)};Zip.ir10=function(){Zip.rin(10)};Zip.ir20=function(){Zip.rin(20)};Zip.mv=function(nn){var obj=document.getElementById("zline_"+nn);Zip.mover(obj,1)};Zip.ot=function(nn){var obj=document.getElementById("zline_"+nn);Zip.mover(obj,0)};Zip.an=function(nn){Zip.autoinp(ZP.at[nn])};Zip.a1=function(){Zip.an(1)};Zip.m1=function(){Zip.mv(1)};Zip.v1=function(){Zip.ot(1)};Zip.a2=function(){Zip.an(2)};Zip.m2=function(){Zip.mv(2)};Zip.v2=function(){Zip.ot(2)};Zip.a3=function(){Zip.an(3)};Zip.m3=function(){Zip.mv(3)};Zip.v3=function(){Zip.ot(3)};Zip.a4=function(){Zip.an(4)};Zip.m4=function(){Zip.mv(4)};Zip.v4=function(){Zip.ot(4)};Zip.a5=function(){Zip.an(5)};Zip.m5=function(){Zip.mv(5)};Zip.v5=function(){Zip.ot(5)};Zip.a6=function(){Zip.an(6)};Zip.m6=function(){Zip.mv(6)};Zip.v6=function(){Zip.ot(6)};Zip.a7=function(){Zip.an(7)};Zip.m7=function(){Zip.mv(7)};Zip.v7=function(){Zip.ot(7)};Zip.a8=function(){Zip.an(8)};Zip.m8=function(){Zip.mv(8)};Zip.v8=function(){Zip.ot(8)};Zip.a9=function(){Zip.an(9)};Zip.m9=function(){Zip.mv(9)};Zip.v9=function(){Zip.ot(9)};Zip.a10=function(){Zip.an(10)};Zip.m10=function(){Zip.mv(10)};Zip.v10=function(){Zip.ot(10)};Zip.a11=function(){Zip.an(11)};Zip.m11=function(){Zip.mv(11)};Zip.v11=function(){Zip.ot(11)};Zip.a12=function(){Zip.an(12)};Zip.m12=function(){Zip.mv(12)};Zip.v12=function(){Zip.ot(12)};Zip.a13=function(){Zip.an(13)};Zip.m13=function(){Zip.mv(13)};Zip.v13=function(){Zip.ot(13)};Zip.a14=function(){Zip.an(14)};Zip.m14=function(){Zip.mv(14)};Zip.v14=function(){Zip.ot(14)};Zip.a15=function(){Zip.an(15)};Zip.m15=function(){Zip.mv(15)};Zip.v15=function(){Zip.ot(15)};Zip.a16=function(){Zip.an(16)};Zip.m16=function(){Zip.mv(16)};Zip.v16=function(){Zip.ot(16)};Zip.a17=function(){Zip.an(17)};Zip.m17=function(){Zip.mv(17)};Zip.v17=function(){Zip.ot(17)};Zip.a18=function(){Zip.an(18)};Zip.m18=function(){Zip.mv(18)};Zip.v18=function(){Zip.ot(18)};Zip.a19=function(){Zip.an(19)};Zip.m19=function(){Zip.mv(19)};Zip.v19=function(){Zip.ot(19)};Zip.a20=function(){Zip.an(20)};Zip.m20=function(){Zip.mv(20)};Zip.v20=function(){Zip.ot(20)};Zip.a21=function(){Zip.an(21)};Zip.m21=function(){Zip.mv(21)};Zip.v21=function(){Zip.ot(21)};Zip.a22=function(){Zip.an(22)};Zip.m22=function(){Zip.mv(22)};Zip.v22=function(){Zip.ot(22)};Zip.a23=function(){Zip.an(23)};Zip.m23=function(){Zip.mv(23)};Zip.v23=function(){Zip.ot(23)};Zip.a24=function(){Zip.an(24)};Zip.m24=function(){Zip.mv(24)};Zip.v24=function(){Zip.ot(24)};Zip.a25=function(){Zip.an(25)};Zip.m25=function(){Zip.mv(25)};Zip.v25=function(){Zip.ot(25)};Zip.a26=function(){Zip.an(26)};Zip.m26=function(){Zip.mv(26)};Zip.v26=function(){Zip.ot(26)};Zip.a27=function(){Zip.an(27)};Zip.m27=function(){Zip.mv(27)};Zip.v27=function(){Zip.ot(27)};Zip.a28=function(){Zip.an(28)};Zip.m28=function(){Zip.mv(28)};Zip.v28=function(){Zip.ot(28)};Zip.a29=function(){Zip.an(29)};Zip.m29=function(){Zip.mv(29)};Zip.v29=function(){Zip.ot(29)};Zip.a30=function(){Zip.an(30)};Zip.m30=function(){Zip.mv(30)};Zip.v30=function(){Zip.ot(30)};Zip.a31=function(){Zip.an(31)};Zip.m31=function(){Zip.mv(31)};Zip.v31=function(){Zip.ot(31)};Zip.a32=function(){Zip.an(32)};Zip.m32=function(){Zip.mv(32)};Zip.v32=function(){Zip.ot(32)};Zip.a33=function(){Zip.an(33)};Zip.m33=function(){Zip.mv(33)};Zip.v33=function(){Zip.ot(33)};Zip.a34=function(){Zip.an(34)};Zip.m34=function(){Zip.mv(34)};Zip.v34=function(){Zip.ot(34)};Zip.a35=function(){Zip.an(35)};Zip.m35=function(){Zip.mv(35)};Zip.v35=function(){Zip.ot(35)};Zip.a36=function(){Zip.an(36)};Zip.m36=function(){Zip.mv(36)};Zip.v36=function(){Zip.ot(36)};Zip.a37=function(){Zip.an(37)};Zip.m37=function(){Zip.mv(37)};Zip.v37=function(){Zip.ot(37)};Zip.a38=function(){Zip.an(38)};Zip.m38=function(){Zip.mv(38)};Zip.v38=function(){Zip.ot(38)};Zip.a39=function(){Zip.an(39)};Zip.m39=function(){Zip.mv(39)};Zip.v39=function(){Zip.ot(39)};Zip.a40=function(){Zip.an(40)};Zip.m40=function(){Zip.mv(40)};Zip.v40=function(){Zip.ot(40)};Zip.a41=function(){Zip.an(41)};Zip.m41=function(){Zip.mv(41)};Zip.v41=function(){Zip.ot(41)};Zip.a42=function(){Zip.an(42)};Zip.m42=function(){Zip.mv(42)};Zip.v42=function(){Zip.ot(42)};Zip.a43=function(){Zip.an(43)};Zip.m43=function(){Zip.mv(43)};Zip.v43=function(){Zip.ot(43)};Zip.a44=function(){Zip.an(44)};Zip.m44=function(){Zip.mv(44)};Zip.v44=function(){Zip.ot(44)};Zip.a45=function(){Zip.an(45)};Zip.m45=function(){Zip.mv(45)};Zip.v45=function(){Zip.ot(45)};Zip.a46=function(){Zip.an(46)};Zip.m46=function(){Zip.mv(46)};Zip.v46=function(){Zip.ot(46)};Zip.a47=function(){Zip.an(47)};Zip.m47=function(){Zip.mv(47)};Zip.v47=function(){Zip.ot(47)};Zip.a48=function(){Zip.an(48)};Zip.m48=function(){Zip.mv(48)};Zip.v48=function(){Zip.ot(48)};Zip.a49=function(){Zip.an(49)};Zip.m49=function(){Zip.mv(49)};Zip.v49=function(){Zip.ot(49)};Zip.a50=function(){Zip.an(50)};Zip.m50=function(){Zip.mv(50)};Zip.v50=function(){Zip.ot(50)};Zip.a51=function(){Zip.an(51)};Zip.m51=function(){Zip.mv(51)};Zip.v51=function(){Zip.ot(51)};Zip.a52=function(){Zip.an(52)};Zip.m52=function(){Zip.mv(52)};Zip.v52=function(){Zip.ot(52)};Zip.a53=function(){Zip.an(53)};Zip.m53=function(){Zip.mv(53)};Zip.v53=function(){Zip.ot(53)};Zip.a54=function(){Zip.an(54)};Zip.m54=function(){Zip.mv(54)};Zip.v54=function(){Zip.ot(54)};Zip.a55=function(){Zip.an(55)};Zip.m55=function(){Zip.mv(55)};Zip.v55=function(){Zip.ot(55)};Zip.a56=function(){Zip.an(56)};Zip.m56=function(){Zip.mv(56)};Zip.v56=function(){Zip.ot(56)};Zip.a57=function(){Zip.an(57)};Zip.m57=function(){Zip.mv(57)};Zip.v57=function(){Zip.ot(57)};Zip.a58=function(){Zip.an(58)};Zip.m58=function(){Zip.mv(58)};Zip.v58=function(){Zip.ot(58)};Zip.a59=function(){Zip.an(59)};Zip.m59=function(){Zip.mv(59)};Zip.v59=function(){Zip.ot(59)};Zip.a60=function(){Zip.an(60)};Zip.m60=function(){Zip.mv(60)};Zip.v60=function(){Zip.ot(60)};Zip.a61=function(){Zip.an(61)};Zip.m61=function(){Zip.mv(61)};Zip.v61=function(){Zip.ot(61)};Zip.a62=function(){Zip.an(62)};Zip.m62=function(){Zip.mv(62)};Zip.v62=function(){Zip.ot(62)};Zip.a63=function(){Zip.an(63)};Zip.m63=function(){Zip.mv(63)};Zip.v63=function(){Zip.ot(63)};Zip.a64=function(){Zip.an(64)};Zip.m64=function(){Zip.mv(64)};Zip.v64=function(){Zip.ot(64)};Zip.a65=function(){Zip.an(65)};Zip.m65=function(){Zip.mv(65)};Zip.v65=function(){Zip.ot(65)};Zip.a66=function(){Zip.an(66)};Zip.m66=function(){Zip.mv(66)};Zip.v66=function(){Zip.ot(66)};Zip.a67=function(){Zip.an(67)};Zip.m67=function(){Zip.mv(67)};Zip.v67=function(){Zip.ot(67)};Zip.a68=function(){Zip.an(68)};Zip.m68=function(){Zip.mv(68)};Zip.v68=function(){Zip.ot(68)};Zip.a69=function(){Zip.an(69)};Zip.m69=function(){Zip.mv(69)};Zip.v69=function(){Zip.ot(69)};Zip.a70=function(){Zip.an(70)};Zip.m70=function(){Zip.mv(70)};Zip.v70=function(){Zip.ot(70)};Zip.line_listen=function(da){for(var jj=1;jj<=da.zip.length;jj++){if(jj>70)alert(ZP.msg2);var id='zline_'+jj;Zip.listen2(id,jj)}};Zip.listen2=function(id,nn){if(document.getElementById(id)){var obj=document.getElementById(id);var evt1='click';var evt2='mouseover';var evt3='mouseout';if(nn==1){Zip.aEv(obj,evt1,Zip.a1);Zip.aEv(obj,evt2,Zip.m1);Zip.aEv(obj,evt3,Zip.v1)}else if(nn==2){Zip.aEv(obj,evt1,Zip.a2);Zip.aEv(obj,evt2,Zip.m2);Zip.aEv(obj,evt3,Zip.v2)}else if(nn==3){Zip.aEv(obj,evt1,Zip.a3);Zip.aEv(obj,evt2,Zip.m3);Zip.aEv(obj,evt3,Zip.v3)}else if(nn==4){Zip.aEv(obj,evt1,Zip.a4);Zip.aEv(obj,evt2,Zip.m4);Zip.aEv(obj,evt3,Zip.v4)}else if(nn==5){Zip.aEv(obj,evt1,Zip.a5);Zip.aEv(obj,evt2,Zip.m5);Zip.aEv(obj,evt3,Zip.v5)}else if(nn==6){Zip.aEv(obj,evt1,Zip.a6);Zip.aEv(obj,evt2,Zip.m6);Zip.aEv(obj,evt3,Zip.v6)}else if(nn==7){Zip.aEv(obj,evt1,Zip.a7);Zip.aEv(obj,evt2,Zip.m7);Zip.aEv(obj,evt3,Zip.v7)}else if(nn==8){Zip.aEv(obj,evt1,Zip.a8);Zip.aEv(obj,evt2,Zip.m8);Zip.aEv(obj,evt3,Zip.v8)}else if(nn==9){Zip.aEv(obj,evt1,Zip.a9);Zip.aEv(obj,evt2,Zip.m9);Zip.aEv(obj,evt3,Zip.v9)}else if(nn==10){Zip.aEv(obj,evt1,Zip.a10);Zip.aEv(obj,evt2,Zip.m10);Zip.aEv(obj,evt3,Zip.v10)}else if(nn==11){Zip.aEv(obj,evt1,Zip.a11);Zip.aEv(obj,evt2,Zip.m11);Zip.aEv(obj,evt3,Zip.v11)}else if(nn==12){Zip.aEv(obj,evt1,Zip.a12);Zip.aEv(obj,evt2,Zip.m12);Zip.aEv(obj,evt3,Zip.v12)}else if(nn==13){Zip.aEv(obj,evt1,Zip.a13);Zip.aEv(obj,evt2,Zip.m13);Zip.aEv(obj,evt3,Zip.v13)}else if(nn==14){Zip.aEv(obj,evt1,Zip.a14);Zip.aEv(obj,evt2,Zip.m14);Zip.aEv(obj,evt3,Zip.v14)}else if(nn==15){Zip.aEv(obj,evt1,Zip.a15);Zip.aEv(obj,evt2,Zip.m15);Zip.aEv(obj,evt3,Zip.v15)}else if(nn==16){Zip.aEv(obj,evt1,Zip.a16);Zip.aEv(obj,evt2,Zip.m16);Zip.aEv(obj,evt3,Zip.v16)}else if(nn==17){Zip.aEv(obj,evt1,Zip.a17);Zip.aEv(obj,evt2,Zip.m17);Zip.aEv(obj,evt3,Zip.v17)}else if(nn==18){Zip.aEv(obj,evt1,Zip.a18);Zip.aEv(obj,evt2,Zip.m18);Zip.aEv(obj,evt3,Zip.v18)}else if(nn==19){Zip.aEv(obj,evt1,Zip.a19);Zip.aEv(obj,evt2,Zip.m19);Zip.aEv(obj,evt3,Zip.v19)}else if(nn==20){Zip.aEv(obj,evt1,Zip.a20);Zip.aEv(obj,evt2,Zip.m20);Zip.aEv(obj,evt3,Zip.v20)}else if(nn==21){Zip.aEv(obj,evt1,Zip.a21);Zip.aEv(obj,evt2,Zip.m21);Zip.aEv(obj,evt3,Zip.v21)}else if(nn==22){Zip.aEv(obj,evt1,Zip.a22);Zip.aEv(obj,evt2,Zip.m22);Zip.aEv(obj,evt3,Zip.v22)}else if(nn==23){Zip.aEv(obj,evt1,Zip.a23);Zip.aEv(obj,evt2,Zip.m23);Zip.aEv(obj,evt3,Zip.v23)}else if(nn==24){Zip.aEv(obj,evt1,Zip.a24);Zip.aEv(obj,evt2,Zip.m24);Zip.aEv(obj,evt3,Zip.v24)}else if(nn==25){Zip.aEv(obj,evt1,Zip.a25);Zip.aEv(obj,evt2,Zip.m25);Zip.aEv(obj,evt3,Zip.v25)}else if(nn==26){Zip.aEv(obj,evt1,Zip.a26);Zip.aEv(obj,evt2,Zip.m26);Zip.aEv(obj,evt3,Zip.v26)}else if(nn==27){Zip.aEv(obj,evt1,Zip.a27);Zip.aEv(obj,evt2,Zip.m27);Zip.aEv(obj,evt3,Zip.v27)}else if(nn==28){Zip.aEv(obj,evt1,Zip.a28);Zip.aEv(obj,evt2,Zip.m28);Zip.aEv(obj,evt3,Zip.v28)}else if(nn==29){Zip.aEv(obj,evt1,Zip.a29);Zip.aEv(obj,evt2,Zip.m29);Zip.aEv(obj,evt3,Zip.v29)}else if(nn==30){Zip.aEv(obj,evt1,Zip.a30);Zip.aEv(obj,evt2,Zip.m30);Zip.aEv(obj,evt3,Zip.v30)}else if(nn==31){Zip.aEv(obj,evt1,Zip.a31);Zip.aEv(obj,evt2,Zip.m31);Zip.aEv(obj,evt3,Zip.v31)}else if(nn==32){Zip.aEv(obj,evt1,Zip.a32);Zip.aEv(obj,evt2,Zip.m32);Zip.aEv(obj,evt3,Zip.v32)}else if(nn==33){Zip.aEv(obj,evt1,Zip.a33);Zip.aEv(obj,evt2,Zip.m33);Zip.aEv(obj,evt3,Zip.v33)}else if(nn==34){Zip.aEv(obj,evt1,Zip.a34);Zip.aEv(obj,evt2,Zip.m34);Zip.aEv(obj,evt3,Zip.v34)}else if(nn==35){Zip.aEv(obj,evt1,Zip.a35);Zip.aEv(obj,evt2,Zip.m35);Zip.aEv(obj,evt3,Zip.v35)}else if(nn==36){Zip.aEv(obj,evt1,Zip.a36);Zip.aEv(obj,evt2,Zip.m36);Zip.aEv(obj,evt3,Zip.v36)}else if(nn==37){Zip.aEv(obj,evt1,Zip.a37);Zip.aEv(obj,evt2,Zip.m37);Zip.aEv(obj,evt3,Zip.v37)}else if(nn==38){Zip.aEv(obj,evt1,Zip.a38);Zip.aEv(obj,evt2,Zip.m38);Zip.aEv(obj,evt3,Zip.v38)}else if(nn==39){Zip.aEv(obj,evt1,Zip.a39);Zip.aEv(obj,evt2,Zip.m39);Zip.aEv(obj,evt3,Zip.v39)}else if(nn==40){Zip.aEv(obj,evt1,Zip.a40);Zip.aEv(obj,evt2,Zip.m40);Zip.aEv(obj,evt3,Zip.v40)}else if(nn==41){Zip.aEv(obj,evt1,Zip.a41);Zip.aEv(obj,evt2,Zip.m41);Zip.aEv(obj,evt3,Zip.v41)}else if(nn==42){Zip.aEv(obj,evt1,Zip.a42);Zip.aEv(obj,evt2,Zip.m42);Zip.aEv(obj,evt3,Zip.v42)}else if(nn==43){Zip.aEv(obj,evt1,Zip.a43);Zip.aEv(obj,evt2,Zip.m43);Zip.aEv(obj,evt3,Zip.v43)}else if(nn==44){Zip.aEv(obj,evt1,Zip.a44);Zip.aEv(obj,evt2,Zip.m44);Zip.aEv(obj,evt3,Zip.v44)}else if(nn==45){Zip.aEv(obj,evt1,Zip.a45);Zip.aEv(obj,evt2,Zip.m45);Zip.aEv(obj,evt3,Zip.v45)}else if(nn==46){Zip.aEv(obj,evt1,Zip.a46);Zip.aEv(obj,evt2,Zip.m46);Zip.aEv(obj,evt3,Zip.v46)}else if(nn==47){Zip.aEv(obj,evt1,Zip.a47);Zip.aEv(obj,evt2,Zip.m47);Zip.aEv(obj,evt3,Zip.v47)}else if(nn==48){Zip.aEv(obj,evt1,Zip.a48);Zip.aEv(obj,evt2,Zip.m48);Zip.aEv(obj,evt3,Zip.v48)}else if(nn==49){Zip.aEv(obj,evt1,Zip.a49);Zip.aEv(obj,evt2,Zip.m49);Zip.aEv(obj,evt3,Zip.v49)}else if(nn==50){Zip.aEv(obj,evt1,Zip.a50);Zip.aEv(obj,evt2,Zip.m50);Zip.aEv(obj,evt3,Zip.v50)}else if(nn==51){Zip.aEv(obj,evt1,Zip.a51);Zip.aEv(obj,evt2,Zip.m51);Zip.aEv(obj,evt3,Zip.v51)}else if(nn==52){Zip.aEv(obj,evt1,Zip.a52);Zip.aEv(obj,evt2,Zip.m52);Zip.aEv(obj,evt3,Zip.v52)}else if(nn==53){Zip.aEv(obj,evt1,Zip.a53);Zip.aEv(obj,evt2,Zip.m53);Zip.aEv(obj,evt3,Zip.v53)}else if(nn==54){Zip.aEv(obj,evt1,Zip.a54);Zip.aEv(obj,evt2,Zip.m54);Zip.aEv(obj,evt3,Zip.v54)}else if(nn==55){Zip.aEv(obj,evt1,Zip.a55);Zip.aEv(obj,evt2,Zip.m55);Zip.aEv(obj,evt3,Zip.v55)}else if(nn==56){Zip.aEv(obj,evt1,Zip.a56);Zip.aEv(obj,evt2,Zip.m56);Zip.aEv(obj,evt3,Zip.v56)}else if(nn==57){Zip.aEv(obj,evt1,Zip.a57);Zip.aEv(obj,evt2,Zip.m57);Zip.aEv(obj,evt3,Zip.v57)}else if(nn==58){Zip.aEv(obj,evt1,Zip.a58);Zip.aEv(obj,evt2,Zip.m58);Zip.aEv(obj,evt3,Zip.v58)}else if(nn==59){Zip.aEv(obj,evt1,Zip.a59);Zip.aEv(obj,evt2,Zip.m59);Zip.aEv(obj,evt3,Zip.v59)}else if(nn==60){Zip.aEv(obj,evt1,Zip.a60);Zip.aEv(obj,evt2,Zip.m60);Zip.aEv(obj,evt3,Zip.v60)}else if(nn==61){Zip.aEv(obj,evt1,Zip.a61);Zip.aEv(obj,evt2,Zip.m61);Zip.aEv(obj,evt3,Zip.v61)}else if(nn==62){Zip.aEv(obj,evt1,Zip.a62);Zip.aEv(obj,evt2,Zip.m62);Zip.aEv(obj,evt3,Zip.v62)}else if(nn==63){Zip.aEv(obj,evt1,Zip.a63);Zip.aEv(obj,evt2,Zip.m63);Zip.aEv(obj,evt3,Zip.v63)}else if(nn==64){Zip.aEv(obj,evt1,Zip.a64);Zip.aEv(obj,evt2,Zip.m64);Zip.aEv(obj,evt3,Zip.v64)}else if(nn==65){Zip.aEv(obj,evt1,Zip.a65);Zip.aEv(obj,evt2,Zip.m65);Zip.aEv(obj,evt3,Zip.v65)}else if(nn==66){Zip.aEv(obj,evt1,Zip.a66);Zip.aEv(obj,evt2,Zip.m66);Zip.aEv(obj,evt3,Zip.v66)}else if(nn==67){Zip.aEv(obj,evt1,Zip.a67);Zip.aEv(obj,evt2,Zip.m67);Zip.aEv(obj,evt3,Zip.v67)}else if(nn==68){Zip.aEv(obj,evt1,Zip.a68);Zip.aEv(obj,evt2,Zip.m68);Zip.aEv(obj,evt3,Zip.v68)}else if(nn==69){Zip.aEv(obj,evt1,Zip.a69);Zip.aEv(obj,evt2,Zip.m69);Zip.aEv(obj,evt3,Zip.v69)}else if(nn==70){Zip.aEv(obj,evt1,Zip.a70);Zip.aEv(obj,evt2,Zip.m70);Zip.aEv(obj,evt3,Zip.v70)}}};if(window.addEventListener){window.addEventListener('load',Zip.entry,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.entry,true)}try{$(document).on('pageinit',function(e){ZP.sphone="1";Zip.entry()})}catch(e){}