function Zip(){
/*
 *	■郵便番号から住所情報の自動入力処理( zipaddr7.js Ver7.63 )
 *
 *	The use is free of charge. // ご利用は無料です。
 *	@demo    http://zipaddr.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[htmlの定義]
 *	<script src="https://zipaddr.github.io/zipaddr7.js" charset="UTF-8"></script>
 *
 *	<script src="http://zipaddr.com/js/zipaddr7.js" charset="UTF-8"></script> or
 *	<script src="https://zipaddr-com.ssl-xserver.jp/js/zipaddr7.js" charset="UTF-8"></script> or
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
this.sfon="16";     // sPhone
this.shig="1.6";
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

//  郵便番号(7桁/上3)用　下4桁      都道府県          市区町村          地域              番地
this.zp= "zip";  this.zp1= "zip1";  this.pr= "pref";  this.ci= "city";  this.ar= "area";  this.ad= "addr";
this.zp2="zip2"; this.zp21="zip21"; this.pr2="pref2"; this.ci2="city2"; this.ar2="area2"; this.ad2="addr2";
this.zp3="zip3"; this.zp31="zip31"; this.pr3="pref3"; this.ci3="city3"; this.ar3="area3"; this.ad3="addr3";
this.zp4="zip4"; this.zp41="zip41"; this.pr4="pref4"; this.ci4="city4"; this.ar4="area4"; this.ad4="addr4";
this.zp5="zip5"; this.zp51="zip51"; this.pr5="pref5"; this.ci5="city5"; this.ar5="area5"; this.ad5="addr5";
this.zp6="zip6"; this.zp61="zip61"; this.pr6="pref6"; this.ci6="city6"; this.ar6="area6"; this.ad6="addr6";
//        zip7, zip71, pref7, city7, addr7        // zip7～以降は上記体系で名称は固定です。
this.zipmax=6;                                    // 7個以上の設置はこの値を変更して拡張します。
this.focus= "";     // set後のfocus位置
this.sysid= "";     // 拡張sys識別子
this.pm=new Array();// 拡張用
/*	<-↑ 以上はオウンコーディングで変更可能です-> */

this.zipaddr= "zipaddr";
this.xvr= "7.63";
this.uver="";
this.xzp= "";       // zip(key)
this.xzz= "";       // -
this.xpr= "";       // pref
this.xci= "";       // city
this.xar= "";       // area
this.xad= "";       // addr
this.p= new Array();
this.q= new Array();
this.r= new Array();
this.i= new Array();
this.e= new Array();
this.a= new Array();
this.f= new Array();
this.preftable= new Array();
this.xul= new Array();
this.xuls=new Array();
this.sv="";         // server
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
this.m= "";
this.n= "[住所自動入力]_start！";
this.lang="";
this.holder="";
this.zipaddr0="http://zipaddr.com/";
this.zipaddr2="http://zipaddr2.com/";
}var ZP= new Zip;
Zip.xRd=function(){var b="zipaddr_param";if(document.getElementById(b)){var m=document.getElementById(b);var g=m.value.split(",");for(var p=0;p<g.length;p++){var d=g[p].replace(/(^\s+)|(\s+$)/g,"");var w=d.split("=");if(w.length==2){var u=w[0];var c=w[1];if(u=="zip")ZP.p[1]=c;else if(u=="zip1")ZP.q[1]=c;else if(u=="pref")ZP.r[1]=c;else if(u=="city")ZP.i[1]=c;else if(u=="addr")ZP.a[1]=c;else if(u=="zip2")ZP.p[2]=c;else if(u=="zip21")ZP.q[2]=c;else if(u=="pref2")ZP.r[2]=c;else if(u=="city2")ZP.i[2]=c;else if(u=="addr2")ZP.a[2]=c;else if(u=="dli")ZP.dli=c;else if(u=="bgc")ZP.bgc=c;else if(u=="bgm")ZP.bgm=c;else if(u=="ovr")ZP.ovr=c;else if(u=="lnc")ZP.lnc=c;else if(u=="clr")ZP.clr=c;else if(u=="min")ZP.min=c;else if(u=="sel")ZP.sel=c;else if(u=="left")ZP.left=c;else if(u=="top")ZP.top=c;else if(u=="pfon")ZP.pfon=c;else if(u=="phig")ZP.phig=c;else if(u=="sfon")ZP.sfon=c;else if(u=="shig")ZP.shig=c;else if(u=="rtrv")ZP.rtrv=c;else if(u=="rtrs")ZP.rtrs=c;else if(u=="opt")ZP.opt=c;else if(u=="lang")ZP.lang=c;else if(u=="exinput")ZP.exinput=c;else if(u=="welcart")ZP.welcart=c;else if(u=="eccube")ZP.eccube=c;else if(u=="zipmax")ZP.zipmax=c;else if(u=="focus")ZP.focus=c;else if(u=="sysid")ZP.sysid=c;else if(u=="after")ZP.after=c;else if(u=="debug")ZP.debug=c}}}};Zip.qHd=function(){Zip.tZd(23)};Zip.m23=function(){Zip.gGb(23)};Zip.v23=function(){Zip.eQd(23)};Zip.sUb=function(){Zip.hVb(1,ZP.zp,ZP.zp1,ZP.pr,ZP.ci,ZP.ar,ZP.ad,ZP.focus);Zip.hVb(2,ZP.zp2,ZP.zp21,ZP.pr2,ZP.ci2,ZP.ar2,ZP.ad2,ZP.focus);Zip.hVb(3,ZP.zp3,ZP.zp31,ZP.pr3,ZP.ci3,ZP.ar3,ZP.ad3,ZP.focus);Zip.hVb(4,ZP.zp4,ZP.zp41,ZP.pr4,ZP.ci4,ZP.ar4,ZP.ad4,ZP.focus);Zip.hVb(5,ZP.zp5,ZP.zp51,ZP.pr5,ZP.ci5,ZP.ar5,ZP.ad5,ZP.focus);Zip.hVb(6,ZP.zp6,ZP.zp61,ZP.pr6,ZP.ci6,ZP.ar6,ZP.ad6,ZP.focus);for(var e=7;e<=ZP.zipmax;e++){Zip.hVb(e,"zip"+e,"zip"+e+"1","pref"+e,"city"+e,"area"+e,"addr"+e,ZP.focus)}};Zip.pTb=function(){Zip.tZd(70)};Zip.m70=function(){Zip.gGb(70)};Zip.v70=function(){Zip.eQd(70)};Zip.hRe=function(){Zip.tZd(16)};Zip.m16=function(){Zip.gGb(16)};Zip.v16=function(){Zip.eQd(16)};Zip.qZc=function(){Zip.hQb(6,ZP.p[6],ZP.q[6])};Zip.fHb6=function(){16,Zip.hQb(ZP.p[16],ZP.q[16])};Zip.nXb=function(){Zip.tZd(42)};Zip.m42=function(){Zip.gGb(42)};Zip.v42=function(){Zip.eQd(42)};Zip.k=function(s){for(var k=1;k<=s.zip.length;k++){if(k>70)alert(ZP.msg2);var w='zline_'+k;Zip.yDc(w,k)}};Zip.eQd=function(c){var obj=document.getElementById("zline_"+c);Zip.u9(obj,0)};Zip.vRe=function(){Zip.tZd(24)};Zip.m24=function(){Zip.gGb(24)};Zip.v24=function(){Zip.eQd(24)};Zip.pEa=function(){Zip.tZd(66)};Zip.m66=function(){Zip.gGb(66)};Zip.v66=function(){Zip.eQd(66)};Zip.f=function(m){var g=m.value.length;m.focus();if(m.createTextRange){var s=m.createTextRange();s.move('character',g);s.select()}else if(m.setSelectionRange){m.setSelectionRange(g,g)}};Zip.aCd=function(){Zip.tZd(41)};Zip.m41=function(){Zip.gGb(41)};Zip.v41=function(){Zip.eQd(41)};Zip.rTa=function(){Zip.hQb(5,ZP.p[5],ZP.q[5])};Zip.fHb5=function(){15,Zip.hQb(ZP.p[15],ZP.q[15])};Zip.fKd=function(){Zip.r9(3)};Zip.xQc3=function(){Zip.r9(13)};Zip.pXc=function(){Zip.tZd(52)};Zip.m52=function(){Zip.gGb(52)};Zip.v52=function(){Zip.eQd(52)};Zip.uFa=function(){Zip.tZd(37)};Zip.m37=function(){Zip.gGb(37)};Zip.v37=function(){Zip.eQd(37)};Zip.rVa=function(){ZP.help=ZP.zipaddr2+"wordpress/"};Zip.eGe=function(w,b){if(document.getElementById(w)){var q='keyup';var t='change';var d=document.getElementById(w);if(b==1){Zip.va(d,q,Zip.xQc);Zip.va(d,t,Zip.xQc)}else if(b==2){Zip.va(d,q,Zip.hAc);Zip.va(d,t,Zip.hAc)}else if(b==3){Zip.va(d,q,Zip.fKd);Zip.va(d,t,Zip.fKd)}else if(b==4){Zip.va(d,q,Zip.kUb);Zip.va(d,t,Zip.kUb)}else if(b==5){Zip.va(d,q,Zip.eVd);Zip.va(d,t,Zip.eVd)}else if(b==6){Zip.va(d,q,Zip.sBa);Zip.va(d,t,Zip.sBa)}else if(b==7){Zip.va(d,q,Zip.yYc);Zip.va(d,t,Zip.yYc)}else if(b==8){Zip.va(d,q,Zip.gQa);Zip.va(d,t,Zip.gQa)}else if(b==9){Zip.va(d,q,Zip.tGa);Zip.va(d,t,Zip.tGa)}else if(b==10){Zip.va(d,q,Zip.xQc0);Zip.va(d,t,Zip.xQc0)}else if(b==11){Zip.va(d,q,Zip.xQc1);Zip.va(d,t,Zip.xQc1)}else if(b==12){Zip.va(d,q,Zip.xQc2);Zip.va(d,t,Zip.xQc2)}else if(b==13){Zip.va(d,q,Zip.xQc3);Zip.va(d,t,Zip.xQc3)}else if(b==14){Zip.va(d,q,Zip.xQc4);Zip.va(d,t,Zip.xQc4)}else if(b==15){Zip.va(d,q,Zip.xQc5);Zip.va(d,t,Zip.xQc5)}else if(b==16){Zip.va(d,q,Zip.xQc6);Zip.va(d,t,Zip.xQc6)}else if(b==17){Zip.va(d,q,Zip.xQc7);Zip.va(d,t,Zip.xQc7)}else if(b==18){Zip.va(d,q,Zip.xQc8);Zip.va(d,t,Zip.xQc8)}else if(b==19){Zip.va(d,q,Zip.xQc9);Zip.va(d,t,Zip.xQc9)}else if(b==20){Zip.va(d,q,Zip.hAc0);Zip.va(d,t,Zip.hAc0)}}};Zip.pNc=function(){Zip.tZd(36)};Zip.m36=function(){Zip.gGb(36)};Zip.v36=function(){Zip.eQd(36)};Zip.fFb=function(){Zip.hQb(10,ZP.p[10],ZP.q[10])};Zip.pSe0=function(){20,Zip.hQb(ZP.p[20],ZP.q[20])};Zip.bVc=function(){Zip.tZd(62)};Zip.m62=function(){Zip.gGb(62)};Zip.v62=function(){Zip.eQd(62)};Zip.cVc=function(){Zip.tZd(34)};Zip.m34=function(){Zip.gGb(34)};Zip.v34=function(){Zip.eQd(34)};Zip.vMb=function(s,n,h){if(window.File&&ZP.exinput=="2")var p="mouseover";else var p="keyup";var c="";if(s!=""&&document.getElementById(s)){var r=document.getElementById(s);c=r.getAttribute("type").toLowerCase()}if(s!=""&&document.getElementById(s)&&c!="hidden"){var d=(ZP.dli=="")?7:8;if(n!=""&&document.getElementById(n)){Zip.vMbime(r);Zip.vMbtype(r,n);Zip.vMb1(r,p,h);var r=document.getElementById(n);d=4}else{if(c=="number"){d=7;ZP.dli=""}}Zip.vMbime(r);if(d==4||d==7)Zip.vMbtype(r,n);Zip.vMb2(r,p,h);if(r.maxLength<=0||r.maxLength>=100)r.maxLength=d;ZP.xuse=1;r=document.getElementById(s);var e="";try{e=r.placeholder}catch(e){e="1"}if(e==""){if(ZP.holder==""){c=r.getAttribute("type").toLowerCase();if(navigator.geolocation&&ZP.m=="Y"&&c=="tel")r.placeholder="+:住所自動入力";else if(navigator.geolocation&&ZP.m!="")r.placeholder="m:住所自動入力";else r.placeholder="住所自動入力"}else if(ZP.holder=="&nbsp;")r.placeholder="";else r.placeholder=ZP.holder}}};Zip.wTc=function(){var w=new Array();w[1]="";w[2]="deliv_";w[3]="order_";w[4]="shipping_";w[5]="law_";w[6]="dmy_";for(q=1;q<=6;q++){var x=w[q]+"zip01";var h=w[q]+"zip02";var a=w[q]+"pref";var p="";var t=w[q]+"addr01";var k=w[q]+"addr02";var d=w[q]+"addr02";Zip.hVb(q,x,h,a,p,t,k,d)}for(jj=0;jj<=13;jj++){var n=jj+7;var z="shipping_zip01["+jj+"]";var u="shipping_zip02["+jj+"]";var g="shipping_pref["+jj+"]";var q="";var m="shipping_city["+jj+"]";var f="shipping_addr01["+jj+"]";var y="shipping_addr02["+jj+"]";Zip.hVb(n,z,u,g,q,m,f,y)}ZP.top=21;ZP.sl="都道府県を選択";ZP.zipmax=20;ZP.help=ZP.zipaddr0+"eccube/plugin.html"};Zip.rEc=function(){Zip.tZd(55)};Zip.m55=function(){Zip.gGb(55)};Zip.v55=function(){Zip.eQd(55)};Zip.bYd=function(){Zip.tZd(48)};Zip.m48=function(){Zip.gGb(48)};Zip.v48=function(){Zip.eQd(48)};Zip.eQc=function(){ZP.min="7";ZP.left=30;ZP.top=25;ZP.sl="都道府県を選択して下さい。"};Zip.gUe=function(){Zip.tZd(27)};Zip.m27=function(){Zip.gGb(27)};Zip.v27=function(){Zip.eQd(27)};Zip.gGb=function(d){var obj=document.getElementById("zline_"+d);Zip.u9(obj,1)};Zip.xQc=function(){Zip.r9(1)};Zip.xQc1=function(){Zip.r9(11)};Zip.bSb=function(){Zip.tZd(39)};Zip.m39=function(){Zip.gGb(39)};Zip.v39=function(){Zip.eQd(39)};Zip.pUa=function(){Zip.tZd(20)};Zip.m20=function(){Zip.gGb(20)};Zip.v20=function(){Zip.eQd(20)};Zip.aPc=function(){Zip.tZd(53)};Zip.m53=function(){Zip.gGb(53)};Zip.v53=function(){Zip.eQd(53)};Zip.va=function(q,m,y){if(q.addEventListener){q.addEventListener(m,y,false);ZP.xlisten="1"}else if(q.attachEvent){q.attachEvent('on'+m,y);ZP.xlisten="2"}};Zip.fHb=function(){Zip.hQb(1,ZP.p[1],ZP.q[1])};Zip.fHb1=function(){11,Zip.hQb(ZP.p[11],ZP.q[11])};Zip.z=function(t){var a="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var b="0123456789-----";var d="";for(var m=0;m<t.length;m++){var g=t.charAt(m);var z=a.indexOf(g,0);if(z>=0)g=b.charAt(z);d+=g}return d};Zip.wYc=function(){Zip.tZd(50)};Zip.m50=function(){Zip.gGb(50)};Zip.v50=function(){Zip.eQd(50)};Zip.hAc=function(){Zip.r9(2)};Zip.xQc2=function(){Zip.r9(12)};Zip.cFe=function(){Zip.c5(1)};Zip.cFe1=function(){Zip.c5(11)};Zip.rQd=function(){Zip.hQb(9,ZP.p[9],ZP.q[9])};Zip.fHb9=function(){19,Zip.hQb(ZP.p[19],ZP.q[19])};Zip.nWa=function(){ZP.ua=window.navigator.userAgent.toLowerCase();var g=window.navigator.appVersion.toLowerCase();if(ZP.ua.indexOf("msie")>-1){if(g.indexOf("msie 6.")>-1){ZP.bro="IE6"}else if(g.indexOf("msie 7.")>-1){ZP.bro="IE7"}else if(g.indexOf("msie 8.")>-1){ZP.bro="IE8"}else if(g.indexOf("msie 9.")>-1){ZP.bro="IE9"}else if(g.indexOf("msie 10.")>-1){ZP.bro="IE10"}else{ZP.bro="IE"}}else if(ZP.ua.indexOf("trident/7")>-1){ZP.bro="IE11"}else if(ZP.ua.indexOf("edge")>-1){ZP.bro="Edge"}else if(ZP.ua.indexOf("firefox")>-1){ZP.bro="Firefox"}else if(ZP.ua.indexOf("opera")>-1){ZP.bro="Opera"}else if(ZP.ua.indexOf("chrome")>-1){ZP.bro="Chrome"}else if(ZP.ua.indexOf("safari")>-1){ZP.bro="Safari"}else if(ZP.ua.indexOf("gecko")>-1){ZP.bro="Gecko"}else{ZP.bro="Unknown"}};Zip.uUd=function(){Zip.tZd(26)};Zip.m26=function(){Zip.gGb(26)};Zip.v26=function(){Zip.eQd(26)};Zip.hVb=function(s,a,w,h,t,f,e,y){ZP.p[s]=a;ZP.q[s]=w;ZP.r[s]=h;ZP.i[s]=t;ZP.e[s]=f;ZP.a[s]=e;ZP.f[s]=y};Zip.tGa=function(){Zip.r9(9)};Zip.xQc9=function(){Zip.r9(19)};Zip.wHc=function(){Zip.tZd(35)};Zip.m35=function(){Zip.gGb(35)};Zip.v35=function(){Zip.eQd(35)};Zip.mRe=function(){Zip.tZd(30)};Zip.m30=function(){Zip.gGb(30)};Zip.v30=function(){Zip.eQd(30)};Zip.tNe=function(){Zip.tZd(43)};Zip.m43=function(){Zip.gGb(43)};Zip.v43=function(){Zip.eQd(43)};Zip.eVe=function(){var s=ZP.nodb==""?0:ZP.sv;if(ZP.reverse!=""){ZP.sv="0";s=0}var w=location.protocol=="https:"?ZP.xuls[s]:ZP.xul[s];w=Zip.r8(unescape(w));var z=location.protocol+'/'+'/'+w+"/js/ziparc7.php?v=126";if(ZP.reverse!="")z+="&r=85";if(ZP.apad!="")z+="&m="+ZP.apad;if(ZP.nodb!="")z+="&n="+ZP.nodb;Zip.s7(z)};Zip.rXa=function(){Zip.tZd(65)};Zip.m65=function(){Zip.gGb(65)};Zip.v65=function(){Zip.eQd(65)};Zip.rPd=function(){Zip.tZd(49)};Zip.m49=function(){Zip.gGb(49)};Zip.v49=function(){Zip.eQd(49)};Zip.hZc=function(){Zip.tZd(14)};Zip.m14=function(){Zip.gGb(14)};Zip.v14=function(){Zip.eQd(14)};Zip.mUb=function(){Zip.tZd(32)};Zip.m32=function(){Zip.gGb(32)};Zip.v32=function(){Zip.eQd(32)};Zip.bCa=function(){Zip.tZd(60)};Zip.m60=function(){Zip.gGb(60)};Zip.v60=function(){Zip.eQd(60)};Zip.gVc=function(){Zip.c5(9)};Zip.cFe9=function(){Zip.c5(19)};Zip.hRd=function(){Zip.tZd(15)};Zip.m15=function(){Zip.gGb(15)};Zip.v15=function(){Zip.eQd(15)};Zip.xBb=function(){Zip.tZd(13)};Zip.m13=function(){Zip.gGb(13)};Zip.v13=function(){Zip.eQd(13)};Zip.wVe=function(){Zip.tZd(45)};Zip.m45=function(){Zip.gGb(45)};Zip.v45=function(){Zip.eQd(45)};Zip.tZd=function(k){Zip.at2(ZP.at[k])};Zip.a1=function(){Zip.tZd(1)};Zip.m1=function(){Zip.gGb(1)};Zip.v1=function(){Zip.eQd(1)};Zip.a2=function(){Zip.tZd(2)};Zip.m2=function(){Zip.gGb(2)};Zip.v2=function(){Zip.eQd(2)};Zip.a3=function(){Zip.tZd(3)};Zip.m3=function(){Zip.gGb(3)};Zip.v3=function(){Zip.eQd(3)};Zip.a4=function(){Zip.tZd(4)};Zip.m4=function(){Zip.gGb(4)};Zip.v4=function(){Zip.eQd(4)};Zip.a5=function(){Zip.tZd(5)};Zip.m5=function(){Zip.gGb(5)};Zip.v5=function(){Zip.eQd(5)};Zip.a6=function(){Zip.tZd(6)};Zip.m6=function(){Zip.gGb(6)};Zip.v6=function(){Zip.eQd(6)};Zip.a7=function(){Zip.tZd(7)};Zip.m7=function(){Zip.gGb(7)};Zip.v7=function(){Zip.eQd(7)};Zip.a8=function(){Zip.tZd(8)};Zip.m8=function(){Zip.gGb(8)};Zip.v8=function(){Zip.eQd(8)};Zip.a9=function(){Zip.tZd(9)};Zip.m9=function(){Zip.gGb(9)};Zip.v9=function(){Zip.eQd(9)};Zip.rQc=function(){var c=location.protocol=="https:"?"S":"";if(ZP.m=="Y"||ZP.m=="G"){}else if(c==""&&ZP.bro=="Chrome"){}else if(ZP.sphone!="")ZP.m="Y";else ZP.m="G"};Zip.uEa=function(){Zip.tZd(58)};Zip.m58=function(){Zip.gGb(58)};Zip.v58=function(){Zip.eQd(58)};Zip.nQa=function(m){var s=Zip.z(m);s=s.replace(/-/g,'');s=s.replace(/\s/g,'');return s};Zip.vMb2=function(b,r,f){if(f==1){Zip.va(b,r,Zip.cFe)}else if(f==2){Zip.va(b,r,Zip.bUb)}else if(f==3){Zip.va(b,r,Zip.dBa)}else if(f==4){Zip.va(b,r,Zip.sCd)}else if(f==5){Zip.va(b,r,Zip.bBa)}else if(f==6){Zip.va(b,r,Zip.tRc)}else if(f==7){Zip.va(b,r,Zip.xEd)}else if(f==8){Zip.va(b,r,Zip.xKa)}else if(f==9){Zip.va(b,r,Zip.gVc)}else if(f==10){Zip.va(b,r,Zip.cFe0)}else if(f==11){Zip.va(b,r,Zip.cFe1)}else if(f==12){Zip.va(b,r,Zip.cFe2)}else if(f==13){Zip.va(b,r,Zip.cFe3)}else if(f==14){Zip.va(b,r,Zip.cFe4)}else if(f==15){Zip.va(b,r,Zip.cFe5)}else if(f==16){Zip.va(b,r,Zip.cFe6)}else if(f==17){Zip.va(b,r,Zip.cFe7)}else if(f==18){Zip.va(b,r,Zip.cFe8)}else if(f==19){Zip.va(b,r,Zip.cFe9)}else if(f==20){Zip.va(b,r,Zip.bUb0)}};Zip.gAe=function(){if(document.getElementById("zipcode")){}else{ZP.zipmax=4;var p=new Array();p[1]="member";p[2]="customer";p[3]="delivery";for(var y=1;y<ZP.zipmax;y++){var r=Zip.n(p[y]+"[zipcode]");var a=Zip.n(p[y]+"[pref]");var t=Zip.n(p[y]+"[address1]");var h=Zip.n(p[y]+"[address2]");Zip.hVb(y,r,"",a,"",t,h,h)}Zip.n("zip_code");Zip.n("address1");Zip.hVb(ZP.zipmax,"zip_code","","","","address1","","")}};Zip.kHd=function(){Zip.tZd(51)};Zip.m51=function(){Zip.gGb(51)};Zip.v51=function(){Zip.eQd(51)};Zip.vMbtype=function(s,h){var z=s.getAttribute("type").toLowerCase();if(ZP.sphone!=""&&document.getElementById(h)&&z!="hidden")s.type="tel"};Zip.pQb=function(){Zip.tZd(54)};Zip.m54=function(){Zip.gGb(54)};Zip.v54=function(){Zip.eQd(54)};Zip.xKa=function(){Zip.c5(8)};Zip.cFe8=function(){Zip.c5(18)};Zip.sBa=function(){Zip.r9(6)};Zip.xQc6=function(){Zip.r9(16)};Zip.gTd=function(){Zip.tZd(68)};Zip.m68=function(){Zip.gGb(68)};Zip.v68=function(){Zip.eQd(68)};Zip.vMe=function(){Zip.tZd(25)};Zip.m25=function(){Zip.gGb(25)};Zip.v25=function(){Zip.eQd(25)};Zip.xYc=function(){Zip.tZd(59)};Zip.m59=function(){Zip.gGb(59)};Zip.v59=function(){Zip.eQd(59)};Zip.yYc=function(){Zip.r9(7)};Zip.xQc7=function(){Zip.r9(17)};Zip.uEc=function(){Zip.tZd(44)};Zip.m44=function(){Zip.gGb(44)};Zip.v44=function(){Zip.eQd(44)};Zip.sQd=function(){Zip.tZd(10)};Zip.m10=function(){Zip.gGb(10)};Zip.v10=function(){Zip.eQd(10)};Zip.r8=function(t){var e=t.replace(/う/g,'');e=e.replace(/あ/g,'');e=e.replace(/い/g,'');e=e.replace(/え/g,'');return e};Zip.kHc=function(){Zip.hQb(8,ZP.p[8],ZP.q[8])};Zip.fHb8=function(){18,Zip.hQb(ZP.p[18],ZP.q[18])};Zip.e2=function(g,m){var p;if(document.getElementById(g)){p=document.getElementById(g)}else{p=document.createElement('div');p.id=g;if(m=="")var m=document.getElementsByTagName("body").item(0);m.appendChild(p)}return p};Zip.tXe=function(){Zip.tZd(47)};Zip.m47=function(){Zip.gGb(47)};Zip.v47=function(){Zip.eQd(47)};Zip.bUb=function(){Zip.c5(2)};Zip.cFe2=function(){Zip.c5(12)};Zip.fMc=function(){Zip.hQb(4,ZP.p[4],ZP.q[4])};Zip.fHb4=function(){14,Zip.hQb(ZP.p[14],ZP.q[14])};Zip.kTa=function(){Zip.tZd(40)};Zip.m40=function(){Zip.gGb(40)};Zip.v40=function(){Zip.eQd(40)};Zip.bPd=function(){Zip.tZd(38)};Zip.m38=function(){Zip.gGb(38)};Zip.v38=function(){Zip.eQd(38)};Zip.cFe0=function(){Zip.c5(10)};Zip.bUb0=function(){Zip.c5(20)};Zip.mHc=function(){Zip.tZd(29)};Zip.m29=function(){Zip.gGb(29)};Zip.v29=function(){Zip.eQd(29)};Zip.xCd=function(){Zip.tZd(18)};Zip.m18=function(){Zip.gGb(18)};Zip.v18=function(){Zip.eQd(18)};Zip.gVb=function(){var h;if((ZP.ua.indexOf('iphone')>0&&ZP.ua.indexOf('ipad')==-1)||ZP.ua.indexOf('android')>0)h="1";else h="";if(typeof fnCallAddress==="function"||window.eccube!=undefined){ZP.eccube="1";if(ZP.sphone==""&&h=="1")ZP.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){ZP.welcart="1";if(ZP.sphone==""&&h=="1")ZP.sphone="2"}else if(ZP.sphone!=""){}else if(h=="1")ZP.sphone="2"};Zip.bDc=function(){Zip.tZd(64)};Zip.m64=function(){Zip.gGb(64)};Zip.v64=function(){Zip.eQd(64)};Zip.n=function(d){var c=d;if(d==""||document.getElementById(d)){}else{var a=document.getElementsByName(d);if(a.length==1&&(a[0].id=="undefined"||a[0].id=="")){c=c.replace(/\[/g,"");c=c.replace(/\]/g,"");a[0].id=c}else if(a.length==1){c=a[0].id}}return c};Zip.e3=function(d){if(document.getElementById(d)){var p=document.getElementById(d);var r=document.getElementsByTagName("body").item(0);r.removeChild(p)}};Zip.nWc=function(){Zip.tZd(69)};Zip.m69=function(){Zip.gGb(69)};Zip.v69=function(){Zip.eQd(69)};Zip.nYa=function(){Zip.tZd(31)};Zip.m31=function(){Zip.gGb(31)};Zip.v31=function(){Zip.eQd(31)};Zip.xEd=function(){Zip.c5(7)};Zip.cFe7=function(){Zip.c5(17)};Zip.hQb=function(d,e,k){var t=document.getElementById(e).value;var u=document.getElementById(k).value;t=Zip.nQa(t);u=Zip.nQa(u);var g=t.length;var f=u.length;if(g==1&&f==0)Zip.c5(d);else if(ZP.sphone!=""){}else if(g==3&&f==4)Zip.c5(d);else{if(ZP.sphone==""&&g==3&&f<=3)Zip.f(document.getElementById(k));if(window.File&&(ZP.exinput=="2"||t=="?"))Zip.c5(d);if(ZP.rtrs=="1"||(ZP.nodb!=""&&g==3))Zip.c5(d)}};Zip.pSe=function(){Zip.hQb(2,ZP.p[2],ZP.q[2])};Zip.fHb2=function(){12,Zip.hQb(ZP.p[12],ZP.q[12])};Zip.cSb=function(){var k="address1";var g="address2";var y="pref";var m="member_pref";var s="customer_pref";var r="delivery_pref";if(document.getElementById(y))Zip.hVb(1,"zipcode","",y,"",k,g,g);else if(document.getElementById(m))Zip.hVb(1,"zipcode","",m,"",k,g,g);else if(document.getElementById(s))Zip.hVb(1,"zipcode","",s,"",k,g,g);else if(document.getElementById(r))Zip.hVb(1,"zipcode","",r,"",k,g,g);ZP.zipmax=1};Zip.sCd=function(){Zip.c5(4)};Zip.cFe4=function(){Zip.c5(14)};Zip.bZd=function(){Zip.tZd(19)};Zip.m19=function(){Zip.gGb(19)};Zip.v19=function(){Zip.eQd(19)};Zip.uFc=function(){ZP.xul[0]="%u3042z%u3046i%u3044pa%u3042d%u3046dr.co%u3042m";ZP.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r5%u3046.c%u3042om";ZP.xul[2]="%u3046zip%u3042ad%u3046dr.s%u3044aku%u3042ra%u3044.ne.jp";ZP.xuls[0]="z%u3042ip%u3044addr-c%u3042om.s%u3046sl-x%u3044serv%u3044er.jp";ZP.xuls[1]="zip%u3042ad%u3046dr5-%u3044com.s%u3046sl-six%u3044core%u3046.jp";ZP.xuls[2]="%u3046zip%u3042ad%u3046dr.s%u3044aku%u3042ra%u3044.ne.jp";if(ZP.sv==""){ZP.sv=Math.floor(Math.random()*10);if(ZP.sv>=8)ZP.sv="2";else if(ZP.sv>=5)ZP.sv="1";else ZP.sv="0"}};Zip.yHd=function(){Zip.tZd(28)};Zip.m28=function(){Zip.gGb(28)};Zip.v28=function(){Zip.eQd(28)};Zip.vMbime=function(u){u.style.imeMode="disabled"};Zip.grod=function(){try{var r=window.google.maps}catch(e){var r="x"}if(r=="x"){Zip.s7("https://maps.google.com/maps/api/js?key=AIzaSyClLtjifg1XR3lH4LeEnR4VzyxNACXVb_0")}};Zip.yGc=function(){Zip.tZd(63)};Zip.m63=function(){Zip.gGb(63)};Zip.v63=function(){Zip.eQd(63)};Zip.cEd=function(){Zip.tZd(21)};Zip.m21=function(){Zip.gGb(21)};Zip.v21=function(){Zip.eQd(21)};Zip.uPb=function(){Zip.tZd(46)};Zip.m46=function(){Zip.gGb(46)};Zip.v46=function(){Zip.eQd(46)};Zip.bAe=function(){Zip.tZd(56)};Zip.m56=function(){Zip.gGb(56)};Zip.v56=function(){Zip.eQd(56)};Zip.yDc=function(z,y){if(document.getElementById(z)){var t=document.getElementById(z);var k='click';var m='mouseover';var u='mouseout';if(y==1){Zip.va(t,k,Zip.a1);Zip.va(t,m,Zip.m1);Zip.va(t,u,Zip.v1)}else if(y==2){Zip.va(t,k,Zip.a2);Zip.va(t,m,Zip.m2);Zip.va(t,u,Zip.v2)}else if(y==3){Zip.va(t,k,Zip.a3);Zip.va(t,m,Zip.m3);Zip.va(t,u,Zip.v3)}else if(y==4){Zip.va(t,k,Zip.a4);Zip.va(t,m,Zip.m4);Zip.va(t,u,Zip.v4)}else if(y==5){Zip.va(t,k,Zip.a5);Zip.va(t,m,Zip.m5);Zip.va(t,u,Zip.v5)}else if(y==6){Zip.va(t,k,Zip.a6);Zip.va(t,m,Zip.m6);Zip.va(t,u,Zip.v6)}else if(y==7){Zip.va(t,k,Zip.a7);Zip.va(t,m,Zip.m7);Zip.va(t,u,Zip.v7)}else if(y==8){Zip.va(t,k,Zip.a8);Zip.va(t,m,Zip.m8);Zip.va(t,u,Zip.v8)}else if(y==9){Zip.va(t,k,Zip.a9);Zip.va(t,m,Zip.m9);Zip.va(t,u,Zip.v9)}else if(y==10){Zip.va(t,k,Zip.sQd);Zip.va(t,m,Zip.m10);Zip.va(t,u,Zip.v10)}else if(y==11){Zip.va(t,k,Zip.pXa);Zip.va(t,m,Zip.m11);Zip.va(t,u,Zip.v11)}else if(y==12){Zip.va(t,k,Zip.wXc);Zip.va(t,m,Zip.m12);Zip.va(t,u,Zip.v12)}else if(y==13){Zip.va(t,k,Zip.xBb);Zip.va(t,m,Zip.m13);Zip.va(t,u,Zip.v13)}else if(y==14){Zip.va(t,k,Zip.hZc);Zip.va(t,m,Zip.m14);Zip.va(t,u,Zip.v14)}else if(y==15){Zip.va(t,k,Zip.hRd);Zip.va(t,m,Zip.m15);Zip.va(t,u,Zip.v15)}else if(y==16){Zip.va(t,k,Zip.hRe);Zip.va(t,m,Zip.m16);Zip.va(t,u,Zip.v16)}else if(y==17){Zip.va(t,k,Zip.kAb);Zip.va(t,m,Zip.m17);Zip.va(t,u,Zip.v17)}else if(y==18){Zip.va(t,k,Zip.xCd);Zip.va(t,m,Zip.m18);Zip.va(t,u,Zip.v18)}else if(y==19){Zip.va(t,k,Zip.bZd);Zip.va(t,m,Zip.m19);Zip.va(t,u,Zip.v19)}else if(y==20){Zip.va(t,k,Zip.pUa);Zip.va(t,m,Zip.m20);Zip.va(t,u,Zip.v20)}else if(y==21){Zip.va(t,k,Zip.cEd);Zip.va(t,m,Zip.m21);Zip.va(t,u,Zip.v21)}else if(y==22){Zip.va(t,k,Zip.qPa);Zip.va(t,m,Zip.m22);Zip.va(t,u,Zip.v22)}else if(y==23){Zip.va(t,k,Zip.qHd);Zip.va(t,m,Zip.m23);Zip.va(t,u,Zip.v23)}else if(y==24){Zip.va(t,k,Zip.vRe);Zip.va(t,m,Zip.m24);Zip.va(t,u,Zip.v24)}else if(y==25){Zip.va(t,k,Zip.vMe);Zip.va(t,m,Zip.m25);Zip.va(t,u,Zip.v25)}else if(y==26){Zip.va(t,k,Zip.uUd);Zip.va(t,m,Zip.m26);Zip.va(t,u,Zip.v26)}else if(y==27){Zip.va(t,k,Zip.gUe);Zip.va(t,m,Zip.m27);Zip.va(t,u,Zip.v27)}else if(y==28){Zip.va(t,k,Zip.yHd);Zip.va(t,m,Zip.m28);Zip.va(t,u,Zip.v28)}else if(y==29){Zip.va(t,k,Zip.mHc);Zip.va(t,m,Zip.m29);Zip.va(t,u,Zip.v29)}else if(y==30){Zip.va(t,k,Zip.mRe);Zip.va(t,m,Zip.m30);Zip.va(t,u,Zip.v30)}else if(y==31){Zip.va(t,k,Zip.nYa);Zip.va(t,m,Zip.m31);Zip.va(t,u,Zip.v31)}else if(y==32){Zip.va(t,k,Zip.mUb);Zip.va(t,m,Zip.m32);Zip.va(t,u,Zip.v32)}else if(y==33){Zip.va(t,k,Zip.sWb);Zip.va(t,m,Zip.m33);Zip.va(t,u,Zip.v33)}else if(y==34){Zip.va(t,k,Zip.cVc);Zip.va(t,m,Zip.m34);Zip.va(t,u,Zip.v34)}else if(y==35){Zip.va(t,k,Zip.wHc);Zip.va(t,m,Zip.m35);Zip.va(t,u,Zip.v35)}else if(y==36){Zip.va(t,k,Zip.pNc);Zip.va(t,m,Zip.m36);Zip.va(t,u,Zip.v36)}else if(y==37){Zip.va(t,k,Zip.uFa);Zip.va(t,m,Zip.m37);Zip.va(t,u,Zip.v37)}else if(y==38){Zip.va(t,k,Zip.bPd);Zip.va(t,m,Zip.m38);Zip.va(t,u,Zip.v38)}else if(y==39){Zip.va(t,k,Zip.bSb);Zip.va(t,m,Zip.m39);Zip.va(t,u,Zip.v39)}else if(y==40){Zip.va(t,k,Zip.kTa);Zip.va(t,m,Zip.m40);Zip.va(t,u,Zip.v40)}else if(y==41){Zip.va(t,k,Zip.aCd);Zip.va(t,m,Zip.m41);Zip.va(t,u,Zip.v41)}else if(y==42){Zip.va(t,k,Zip.nXb);Zip.va(t,m,Zip.m42);Zip.va(t,u,Zip.v42)}else if(y==43){Zip.va(t,k,Zip.tNe);Zip.va(t,m,Zip.m43);Zip.va(t,u,Zip.v43)}else if(y==44){Zip.va(t,k,Zip.uEc);Zip.va(t,m,Zip.m44);Zip.va(t,u,Zip.v44)}else if(y==45){Zip.va(t,k,Zip.wVe);Zip.va(t,m,Zip.m45);Zip.va(t,u,Zip.v45)}else if(y==46){Zip.va(t,k,Zip.uPb);Zip.va(t,m,Zip.m46);Zip.va(t,u,Zip.v46)}else if(y==47){Zip.va(t,k,Zip.tXe);Zip.va(t,m,Zip.m47);Zip.va(t,u,Zip.v47)}else if(y==48){Zip.va(t,k,Zip.bYd);Zip.va(t,m,Zip.m48);Zip.va(t,u,Zip.v48)}else if(y==49){Zip.va(t,k,Zip.rPd);Zip.va(t,m,Zip.m49);Zip.va(t,u,Zip.v49)}else if(y==50){Zip.va(t,k,Zip.wYc);Zip.va(t,m,Zip.m50);Zip.va(t,u,Zip.v50)}else if(y==51){Zip.va(t,k,Zip.kHd);Zip.va(t,m,Zip.m51);Zip.va(t,u,Zip.v51)}else if(y==52){Zip.va(t,k,Zip.pXc);Zip.va(t,m,Zip.m52);Zip.va(t,u,Zip.v52)}else if(y==53){Zip.va(t,k,Zip.aPc);Zip.va(t,m,Zip.m53);Zip.va(t,u,Zip.v53)}else if(y==54){Zip.va(t,k,Zip.pQb);Zip.va(t,m,Zip.m54);Zip.va(t,u,Zip.v54)}else if(y==55){Zip.va(t,k,Zip.rEc);Zip.va(t,m,Zip.m55);Zip.va(t,u,Zip.v55)}else if(y==56){Zip.va(t,k,Zip.bAe);Zip.va(t,m,Zip.m56);Zip.va(t,u,Zip.v56)}else if(y==57){Zip.va(t,k,Zip.qRe);Zip.va(t,m,Zip.m57);Zip.va(t,u,Zip.v57)}else if(y==58){Zip.va(t,k,Zip.uEa);Zip.va(t,m,Zip.m58);Zip.va(t,u,Zip.v58)}else if(y==59){Zip.va(t,k,Zip.xYc);Zip.va(t,m,Zip.m59);Zip.va(t,u,Zip.v59)}else if(y==60){Zip.va(t,k,Zip.bCa);Zip.va(t,m,Zip.m60);Zip.va(t,u,Zip.v60)}else if(y==61){Zip.va(t,k,Zip.cQa);Zip.va(t,m,Zip.m61);Zip.va(t,u,Zip.v61)}else if(y==62){Zip.va(t,k,Zip.bVc);Zip.va(t,m,Zip.m62);Zip.va(t,u,Zip.v62)}else if(y==63){Zip.va(t,k,Zip.yGc);Zip.va(t,m,Zip.m63);Zip.va(t,u,Zip.v63)}else if(y==64){Zip.va(t,k,Zip.bDc);Zip.va(t,m,Zip.m64);Zip.va(t,u,Zip.v64)}else if(y==65){Zip.va(t,k,Zip.rXa);Zip.va(t,m,Zip.m65);Zip.va(t,u,Zip.v65)}else if(y==66){Zip.va(t,k,Zip.pEa);Zip.va(t,m,Zip.m66);Zip.va(t,u,Zip.v66)}else if(y==67){Zip.va(t,k,Zip.vBa);Zip.va(t,m,Zip.m67);Zip.va(t,u,Zip.v67)}else if(y==68){Zip.va(t,k,Zip.gTd);Zip.va(t,m,Zip.m68);Zip.va(t,u,Zip.v68)}else if(y==69){Zip.va(t,k,Zip.nWc);Zip.va(t,m,Zip.m69);Zip.va(t,u,Zip.v69)}else if(y==70){Zip.va(t,k,Zip.pTb);Zip.va(t,m,Zip.m70);Zip.va(t,u,Zip.v70)}}};Zip.eVd=function(){Zip.r9(5)};Zip.xQc5=function(){Zip.r9(15)};Zip.wXc=function(){Zip.tZd(12)};Zip.m12=function(){Zip.gGb(12)};Zip.v12=function(){Zip.eQd(12)};Zip.qRe=function(){Zip.tZd(57)};Zip.m57=function(){Zip.gGb(57)};Zip.v57=function(){Zip.eQd(57)};Zip.cQa=function(){Zip.tZd(61)};Zip.m61=function(){Zip.gGb(61)};Zip.v61=function(){Zip.eQd(61)};Zip.vBa=function(){Zip.tZd(67)};Zip.m67=function(){Zip.gGb(67)};Zip.v67=function(){Zip.eQd(67)};Zip.kAb=function(){Zip.tZd(17)};Zip.m17=function(){Zip.gGb(17)};Zip.v17=function(){Zip.eQd(17)};Zip.wDc=function(r){if(r!=""){var c=document.getElementsByClassName(r);if(c.length==1&&!document.getElementById(r)){if(c[0].id=="")c[0].id=r}}};Zip.pXa=function(){Zip.tZd(11)};Zip.m11=function(){Zip.gGb(11)};Zip.v11=function(){Zip.eQd(11)};Zip.vMb1=function(u,r,x){if(x==1){Zip.va(u,r,Zip.fHb)}else if(x==2){Zip.va(u,r,Zip.pSe)}else if(x==3){Zip.va(u,r,Zip.eQa)}else if(x==4){Zip.va(u,r,Zip.fMc)}else if(x==5){Zip.va(u,r,Zip.rTa)}else if(x==6){Zip.va(u,r,Zip.qZc)}else if(x==7){Zip.va(u,r,Zip.eDb)}else if(x==8){Zip.va(u,r,Zip.kHc)}else if(x==9){Zip.va(u,r,Zip.rQd)}else if(x==10){Zip.va(u,r,Zip.fFb)}else if(x==11){Zip.va(u,r,Zip.fHb1)}else if(x==12){Zip.va(u,r,Zip.fHb2)}else if(x==13){Zip.va(u,r,Zip.fHb3)}else if(x==14){Zip.va(u,r,Zip.fHb4)}else if(x==15){Zip.va(u,r,Zip.fHb5)}else if(x==16){Zip.va(u,r,Zip.fHb6)}else if(x==17){Zip.va(u,r,Zip.fHb7)}else if(x==18){Zip.va(u,r,Zip.fHb8)}else if(x==19){Zip.va(u,r,Zip.fHb9)}else if(x==20){Zip.va(u,r,Zip.pSe0)}};Zip.sWb=function(){Zip.tZd(33)};Zip.m33=function(){Zip.gGb(33)};Zip.v33=function(){Zip.eQd(33)};Zip.dBa=function(){Zip.c5(3)};Zip.cFe3=function(){Zip.c5(13)};Zip.uXe=function(h){if(ZP.ajax==""){ZP.ajax="1";Zip.kKb()}if(ZP.ajax=="1"){var u=h.id;for(ii=1;ii<=ZP.zipmax;ii++){if(ZP.p[ii]==u&&document.getElementById(u)){Zip.c5(ii);break}}}};Zip.hNc=function(){var c="Start-"+ZP.zipaddr+"_Ver"+ZP.xvr+"\n";c+="EC-CUBE: "+ZP.eccube+"\n";c+="Welcart: "+ZP.welcart+"\n";c+="SmartPhone:"+ZP.sphone+"\n";c+="Reverse:"+ZP.reverse+"\n";c+="zipmax:"+ZP.zipmax+"\n";c+="sv:"+ZP.sv+"\n";alert(c)};Zip.eQa=function(){Zip.hQb(3,ZP.p[3],ZP.q[3])};Zip.fHb3=function(){13,Zip.hQb(ZP.p[13],ZP.q[13])};Zip.s7=function(q){Zip.e3(ZP.elid);var c=document.createElement("script");c.id=ZP.elid;c.setAttribute("type","text/javascript");c.setAttribute("src",q);c.setAttribute("charset","UTF-8");document.body.appendChild(c)};Zip.kKb=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Zip.nWa();Zip.uFc();Zip.gVb();Zip.rQc();if(ZP.debug=="1")Zip.hNc();if(ZP.eccube=="1"&&typeof Zip.wTc==="function")Zip.wTc();if(ZP.welcart=="1"&&typeof Zip.cSb==="function")Zip.cSb();if(typeof ZP.usces!="undefined"&&ZP.usces=="1"&&typeof Zip.gAe==="function")Zip.gAe();if(ZP.wp=="1"&&typeof Zip.rVa==="function")Zip.rVa();if(ZP.sphone!=""&&typeof Zip.eQc==="function")Zip.eQc();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof ZP.pm[1]!="undefined"&&ZP.pm[1]!=""){for(var w=1;w<ZP.pm.length;w++){var g=ZP.pm[w];var m="";var b="";var s="";var u="";var a="";var k="";var z="";if(typeof g.zip!="undefined")m=Zip.n(g.zip);if(typeof g.zip1!="undefined")b=Zip.n(g.zip1);if(typeof g.pref!="undefined")s=Zip.n(g.pref);if(typeof g.city!="undefined")u=Zip.n(g.city);if(typeof g.area!="undefined")a=Zip.n(g.area);if(typeof g.addr!="undefined")k=Zip.n(g.addr);if(typeof g.focus!="undefined")z=Zip.n(g.focus);Zip.hVb(w,m,b,s,u,a,k,z)}ZP.zipmax=ZP.pm.length-1}else if(ZP.eccube=="1"||ZP.welcart=="1"||ZP.usces=="1"){}else Zip.sUb();Zip.xRd();if(typeof zipaddr_ownc==="function")zipaddr_ownc();ZP.sysid=ZP.sysid.toUpperCase();if(ZP.sysid!="")Zip.dMc();for(var v=1;v<=ZP.zipmax;v++){Zip.n(ZP.p[v]);Zip.n(ZP.q[v]);Zip.n(ZP.r[v]);Zip.n(ZP.i[v]);Zip.n(ZP.e[v]);Zip.n(ZP.a[v]);if(v>20)alert(ZP.msg1);else if(ZP.p[v]==""){}else{Zip.vMb(ZP.p[v],ZP.q[v],v);if(ZP.reverse!="")Zip.eGe(ZP.a[v],v)}}if(ZP.xuse==1||ZP.sysid=="CSCART"){Zip.eVe()}if(typeof zipaddr_owna==="function")zipaddr_owna();if(ZP.m=="Y"){Zip.grod()}else if(ZP.m=="G"){if(ZP.bro.substr(0,2)=="IE"||ZP.bro=="Edge"){Zip.grod()}}};Zip.kUb=function(){Zip.r9(4)};Zip.xQc4=function(){Zip.r9(14)};Zip.tRc=function(){Zip.c5(6)};Zip.cFe6=function(){Zip.c5(16)};Zip.eDb=function(){Zip.hQb(7,ZP.p[7],ZP.q[7])};Zip.fHb7=function(){17,Zip.hQb(ZP.p[17],ZP.q[17])};Zip.xQc0=function(){Zip.r9(10)};Zip.hAc0=function(){Zip.r9(20)};Zip.gQa=function(){Zip.r9(8)};Zip.xQc8=function(){Zip.r9(18)};Zip.qPa=function(){Zip.tZd(22)};Zip.m22=function(){Zip.gGb(22)};Zip.v22=function(){Zip.eQd(22)};Zip.bBa=function(){Zip.c5(5)};Zip.cFe5=function(){Zip.c5(15)};Zip.dMc=function(){var y=ZP.sysid.split("_");for(var s=0;s<y.length;s++){var e=y[s];if(e=="WOOCOMMERCE"){ZP.woo="1";ZP.apad="woocommerce_after.js";ZP.after="1";for(var h=1;h<=2;h++){var u="shipping_";if(h==1)u="billing_";Zip.hVb(h,u+"postcode","",u+"state",u+"city","",u+"address_1","")}}else if(e=="TRUSTFORM"){var t="zip_pref_city_addr";var k=t.split("_");for(var r=0;r<k.length;r++){var a=k[r];for(var c=1;c<=ZP.zipmax;c++){var p=(c<=1)?a:a+String(c);Zip.wDc(p);if(a=="zip")Zip.wDc(p+"1")}}}else if(e=="CSCART"){ZP.help=ZP.zipaddr0+"cscart/"}}};if(window.addEventListener){window.addEventListener('load',Zip.kKb,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.kKb,true)}try{$(document).on('pageinit',function(e){ZP.sphone="1";Zip.kKb()})}catch(e){}