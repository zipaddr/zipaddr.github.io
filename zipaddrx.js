function Zip(){
/*
 *	■郵便番号から住所情報の自動入力処理( zipaddrx.js Ver7.68 )
 *
 *	The use is free of charge. // ご利用は無料です。
 *	@demo    http://zipaddr.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[htmlの定義]
 *	<script src="https://zipaddr.github.io/zipaddrx.js" charset="UTF-8"></script> or
 *
 *	<script src="https://zipaddr.com/js/zipaddrx.js" charset="UTF-8"></script>
 *
 * 	[html内のid名見直し]
 *	郵便番号, 都道府県(select),市区町村,地域,番地
 *	zip(zip1) pref             city     area addr
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
this.nodb="2";      // 1:nodb
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
this.xvr= "7.68";
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
this.help="https://zipaddr.com/";
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
this.zipaddr0="https://zipaddr.com/";
this.zipaddr2="http://zipaddr2.com/";
}var D= new Zip;
function Dmy(){}var ZP=new Dmy;
function zipaddr_compa(){if(typeof ZP.sysid!=="undefined")D.sysid=ZP.sysid;if(typeof ZP.min!=="undefined")D.min=ZP.min;}
Zip.a12=function(){Zip.an(12)};Zip.m12=function(){Zip.mv(12)};Zip.v12=function(){Zip.ot(12)};Zip.a69=function(){Zip.an(69)};Zip.m69=function(){Zip.mv(69)};Zip.v69=function(){Zip.ot(69)};Zip.a58=function(){Zip.an(58)};Zip.m58=function(){Zip.mv(58)};Zip.v58=function(){Zip.ot(58)};Zip.fc14=function(){Zip.c0(14,D.p[14],D.q[14])};Zip.in15=function(){Zip.chk(15)};Zip.a37=function(){Zip.an(37)};Zip.m37=function(){Zip.mv(37)};Zip.v37=function(){Zip.ot(37)};Zip.gload=function(){try{var u=window.google.maps}catch(e){var u="x"}if(u=="x"){Zip.scall("https://maps.google.com/maps/api/js?key=AIzaSyClLtjifg1XR3lH4LeEnR4VzyxNACXVb_0")}};Zip.in5=function(){Zip.chk(5)};Zip.a17=function(){Zip.an(17)};Zip.m17=function(){Zip.mv(17)};Zip.v17=function(){Zip.ot(17)};Zip.fc20=function(){Zip.c0(20,D.p[20],D.q[20])};Zip.a46=function(){Zip.an(46)};Zip.m46=function(){Zip.mv(46)};Zip.v46=function(){Zip.ot(46)};Zip.a54=function(){Zip.an(54)};Zip.m54=function(){Zip.mv(54)};Zip.v54=function(){Zip.ot(54)};Zip.r8=function(v){var z=v.replace(/う/g,'');z=z.replace(/あ/g,'');z=z.replace(/い/g,'');z=z.replace(/え/g,'');return z};Zip.a30=function(){Zip.an(30)};Zip.m30=function(){Zip.mv(30)};Zip.v30=function(){Zip.ot(30)};Zip.u6=function(){var k;if((D.ua.indexOf('iphone')>0&&D.ua.indexOf('ipad')==-1)||D.ua.indexOf('android')>0)k="1";else k="";if(typeof fnCallAddress==="function"||window.eccube!=undefined){D.eccube="1";if(D.sphone==""&&k=="1")D.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){D.welcart="1";if(D.sphone==""&&k=="1")D.sphone="2"}else if(D.sphone!=""){}else if(k=="1")D.sphone="2"};Zip.ir5=function(){Zip.rin(5)};Zip.ir2=function(){Zip.rin(2)};Zip.a62=function(){Zip.an(62)};Zip.m62=function(){Zip.mv(62)};Zip.v62=function(){Zip.ot(62)};Zip.a61=function(){Zip.an(61)};Zip.m61=function(){Zip.mv(61)};Zip.v61=function(){Zip.ot(61)};Zip.a27=function(){Zip.an(27)};Zip.m27=function(){Zip.mv(27)};Zip.v27=function(){Zip.ot(27)};Zip.a51=function(){Zip.an(51)};Zip.m51=function(){Zip.mv(51)};Zip.v51=function(){Zip.ot(51)};Zip.ir12=function(){Zip.rin(12)};Zip.fc18=function(){Zip.c0(18,D.p[18],D.q[18])};Zip.in16=function(){Zip.chk(16)};Zip.a41=function(){Zip.an(41)};Zip.m41=function(){Zip.mv(41)};Zip.v41=function(){Zip.ot(41)};Zip.fc7=function(){Zip.c0(7,D.p[7],D.q[7])};Zip.a20=function(){Zip.an(20)};Zip.m20=function(){Zip.mv(20)};Zip.v20=function(){Zip.ot(20)};Zip.ir11=function(){Zip.rin(11)};Zip.j=function(w,y){if(document.getElementById(w)){var b=document.getElementById(w);var a='click';var m='mouseover';var u='mouseout';if(y==1){Zip.va(b,a,Zip.a1);Zip.va(b,m,Zip.m1);Zip.va(b,u,Zip.v1)}else if(y==2){Zip.va(b,a,Zip.a2);Zip.va(b,m,Zip.m2);Zip.va(b,u,Zip.v2)}else if(y==3){Zip.va(b,a,Zip.a3);Zip.va(b,m,Zip.m3);Zip.va(b,u,Zip.v3)}else if(y==4){Zip.va(b,a,Zip.a4);Zip.va(b,m,Zip.m4);Zip.va(b,u,Zip.v4)}else if(y==5){Zip.va(b,a,Zip.a5);Zip.va(b,m,Zip.m5);Zip.va(b,u,Zip.v5)}else if(y==6){Zip.va(b,a,Zip.a6);Zip.va(b,m,Zip.m6);Zip.va(b,u,Zip.v6)}else if(y==7){Zip.va(b,a,Zip.a7);Zip.va(b,m,Zip.m7);Zip.va(b,u,Zip.v7)}else if(y==8){Zip.va(b,a,Zip.a8);Zip.va(b,m,Zip.m8);Zip.va(b,u,Zip.v8)}else if(y==9){Zip.va(b,a,Zip.a9);Zip.va(b,m,Zip.m9);Zip.va(b,u,Zip.v9)}else if(y==10){Zip.va(b,a,Zip.a10);Zip.va(b,m,Zip.m10);Zip.va(b,u,Zip.v10)}else if(y==11){Zip.va(b,a,Zip.a11);Zip.va(b,m,Zip.m11);Zip.va(b,u,Zip.v11)}else if(y==12){Zip.va(b,a,Zip.a12);Zip.va(b,m,Zip.m12);Zip.va(b,u,Zip.v12)}else if(y==13){Zip.va(b,a,Zip.a13);Zip.va(b,m,Zip.m13);Zip.va(b,u,Zip.v13)}else if(y==14){Zip.va(b,a,Zip.a14);Zip.va(b,m,Zip.m14);Zip.va(b,u,Zip.v14)}else if(y==15){Zip.va(b,a,Zip.a15);Zip.va(b,m,Zip.m15);Zip.va(b,u,Zip.v15)}else if(y==16){Zip.va(b,a,Zip.a16);Zip.va(b,m,Zip.m16);Zip.va(b,u,Zip.v16)}else if(y==17){Zip.va(b,a,Zip.a17);Zip.va(b,m,Zip.m17);Zip.va(b,u,Zip.v17)}else if(y==18){Zip.va(b,a,Zip.a18);Zip.va(b,m,Zip.m18);Zip.va(b,u,Zip.v18)}else if(y==19){Zip.va(b,a,Zip.a19);Zip.va(b,m,Zip.m19);Zip.va(b,u,Zip.v19)}else if(y==20){Zip.va(b,a,Zip.a20);Zip.va(b,m,Zip.m20);Zip.va(b,u,Zip.v20)}else if(y==21){Zip.va(b,a,Zip.a21);Zip.va(b,m,Zip.m21);Zip.va(b,u,Zip.v21)}else if(y==22){Zip.va(b,a,Zip.a22);Zip.va(b,m,Zip.m22);Zip.va(b,u,Zip.v22)}else if(y==23){Zip.va(b,a,Zip.a23);Zip.va(b,m,Zip.m23);Zip.va(b,u,Zip.v23)}else if(y==24){Zip.va(b,a,Zip.a24);Zip.va(b,m,Zip.m24);Zip.va(b,u,Zip.v24)}else if(y==25){Zip.va(b,a,Zip.a25);Zip.va(b,m,Zip.m25);Zip.va(b,u,Zip.v25)}else if(y==26){Zip.va(b,a,Zip.a26);Zip.va(b,m,Zip.m26);Zip.va(b,u,Zip.v26)}else if(y==27){Zip.va(b,a,Zip.a27);Zip.va(b,m,Zip.m27);Zip.va(b,u,Zip.v27)}else if(y==28){Zip.va(b,a,Zip.a28);Zip.va(b,m,Zip.m28);Zip.va(b,u,Zip.v28)}else if(y==29){Zip.va(b,a,Zip.a29);Zip.va(b,m,Zip.m29);Zip.va(b,u,Zip.v29)}else if(y==30){Zip.va(b,a,Zip.a30);Zip.va(b,m,Zip.m30);Zip.va(b,u,Zip.v30)}else if(y==31){Zip.va(b,a,Zip.a31);Zip.va(b,m,Zip.m31);Zip.va(b,u,Zip.v31)}else if(y==32){Zip.va(b,a,Zip.a32);Zip.va(b,m,Zip.m32);Zip.va(b,u,Zip.v32)}else if(y==33){Zip.va(b,a,Zip.a33);Zip.va(b,m,Zip.m33);Zip.va(b,u,Zip.v33)}else if(y==34){Zip.va(b,a,Zip.a34);Zip.va(b,m,Zip.m34);Zip.va(b,u,Zip.v34)}else if(y==35){Zip.va(b,a,Zip.a35);Zip.va(b,m,Zip.m35);Zip.va(b,u,Zip.v35)}else if(y==36){Zip.va(b,a,Zip.a36);Zip.va(b,m,Zip.m36);Zip.va(b,u,Zip.v36)}else if(y==37){Zip.va(b,a,Zip.a37);Zip.va(b,m,Zip.m37);Zip.va(b,u,Zip.v37)}else if(y==38){Zip.va(b,a,Zip.a38);Zip.va(b,m,Zip.m38);Zip.va(b,u,Zip.v38)}else if(y==39){Zip.va(b,a,Zip.a39);Zip.va(b,m,Zip.m39);Zip.va(b,u,Zip.v39)}else if(y==40){Zip.va(b,a,Zip.a40);Zip.va(b,m,Zip.m40);Zip.va(b,u,Zip.v40)}else if(y==41){Zip.va(b,a,Zip.a41);Zip.va(b,m,Zip.m41);Zip.va(b,u,Zip.v41)}else if(y==42){Zip.va(b,a,Zip.a42);Zip.va(b,m,Zip.m42);Zip.va(b,u,Zip.v42)}else if(y==43){Zip.va(b,a,Zip.a43);Zip.va(b,m,Zip.m43);Zip.va(b,u,Zip.v43)}else if(y==44){Zip.va(b,a,Zip.a44);Zip.va(b,m,Zip.m44);Zip.va(b,u,Zip.v44)}else if(y==45){Zip.va(b,a,Zip.a45);Zip.va(b,m,Zip.m45);Zip.va(b,u,Zip.v45)}else if(y==46){Zip.va(b,a,Zip.a46);Zip.va(b,m,Zip.m46);Zip.va(b,u,Zip.v46)}else if(y==47){Zip.va(b,a,Zip.a47);Zip.va(b,m,Zip.m47);Zip.va(b,u,Zip.v47)}else if(y==48){Zip.va(b,a,Zip.a48);Zip.va(b,m,Zip.m48);Zip.va(b,u,Zip.v48)}else if(y==49){Zip.va(b,a,Zip.a49);Zip.va(b,m,Zip.m49);Zip.va(b,u,Zip.v49)}else if(y==50){Zip.va(b,a,Zip.a50);Zip.va(b,m,Zip.m50);Zip.va(b,u,Zip.v50)}else if(y==51){Zip.va(b,a,Zip.a51);Zip.va(b,m,Zip.m51);Zip.va(b,u,Zip.v51)}else if(y==52){Zip.va(b,a,Zip.a52);Zip.va(b,m,Zip.m52);Zip.va(b,u,Zip.v52)}else if(y==53){Zip.va(b,a,Zip.a53);Zip.va(b,m,Zip.m53);Zip.va(b,u,Zip.v53)}else if(y==54){Zip.va(b,a,Zip.a54);Zip.va(b,m,Zip.m54);Zip.va(b,u,Zip.v54)}else if(y==55){Zip.va(b,a,Zip.a55);Zip.va(b,m,Zip.m55);Zip.va(b,u,Zip.v55)}else if(y==56){Zip.va(b,a,Zip.a56);Zip.va(b,m,Zip.m56);Zip.va(b,u,Zip.v56)}else if(y==57){Zip.va(b,a,Zip.a57);Zip.va(b,m,Zip.m57);Zip.va(b,u,Zip.v57)}else if(y==58){Zip.va(b,a,Zip.a58);Zip.va(b,m,Zip.m58);Zip.va(b,u,Zip.v58)}else if(y==59){Zip.va(b,a,Zip.a59);Zip.va(b,m,Zip.m59);Zip.va(b,u,Zip.v59)}else if(y==60){Zip.va(b,a,Zip.a60);Zip.va(b,m,Zip.m60);Zip.va(b,u,Zip.v60)}else if(y==61){Zip.va(b,a,Zip.a61);Zip.va(b,m,Zip.m61);Zip.va(b,u,Zip.v61)}else if(y==62){Zip.va(b,a,Zip.a62);Zip.va(b,m,Zip.m62);Zip.va(b,u,Zip.v62)}else if(y==63){Zip.va(b,a,Zip.a63);Zip.va(b,m,Zip.m63);Zip.va(b,u,Zip.v63)}else if(y==64){Zip.va(b,a,Zip.a64);Zip.va(b,m,Zip.m64);Zip.va(b,u,Zip.v64)}else if(y==65){Zip.va(b,a,Zip.a65);Zip.va(b,m,Zip.m65);Zip.va(b,u,Zip.v65)}else if(y==66){Zip.va(b,a,Zip.a66);Zip.va(b,m,Zip.m66);Zip.va(b,u,Zip.v66)}else if(y==67){Zip.va(b,a,Zip.a67);Zip.va(b,m,Zip.m67);Zip.va(b,u,Zip.v67)}else if(y==68){Zip.va(b,a,Zip.a68);Zip.va(b,m,Zip.m68);Zip.va(b,u,Zip.v68)}else if(y==69){Zip.va(b,a,Zip.a69);Zip.va(b,m,Zip.m69);Zip.va(b,u,Zip.v69)}else if(y==70){Zip.va(b,a,Zip.a70);Zip.va(b,m,Zip.m70);Zip.va(b,u,Zip.v70)}}};Zip.c9=function(){var w="zipaddr_param";if(document.getElementById(w)){var a=document.getElementById(w);var p=a.value.split(",");for(var e=0;e<p.length;e++){var n=p[e].replace(/(^\s+)|(\s+$)/g,"");var v=n.split("=");if(v.length==2){var s=v[0];var x=v[1];if(s=="zip")D.p[1]=x;else if(s=="zip1")D.q[1]=x;else if(s=="pref")D.r[1]=x;else if(s=="city")D.i[1]=x;else if(s=="addr")D.a[1]=x;else if(s=="zip2")D.p[2]=x;else if(s=="zip21")D.q[2]=x;else if(s=="pref2")D.r[2]=x;else if(s=="city2")D.i[2]=x;else if(s=="addr2")D.a[2]=x;else if(s=="dli")D.dli=x;else if(s=="bgc")D.bgc=x;else if(s=="bgm")D.bgm=x;else if(s=="ovr")D.ovr=x;else if(s=="lnc")D.lnc=x;else if(s=="clr")D.clr=x;else if(s=="min")D.min=x;else if(s=="sel")D.sel=x;else if(s=="left")D.left=x;else if(s=="top")D.top=x;else if(s=="pfon")D.pfon=x;else if(s=="phig")D.phig=x;else if(s=="sfon")D.sfon=x;else if(s=="shig")D.shig=x;else if(s=="rtrv")D.rtrv=x;else if(s=="rtrs")D.rtrs=x;else if(s=="opt")D.opt=x;else if(s=="lang")D.lang=x;else if(s=="exinput")D.exinput=x;else if(s=="welcart")D.welcart=x;else if(s=="eccube")D.eccube=x;else if(s=="zipmax")D.zipmax=x;else if(s=="focus")D.focus=x;else if(s=="sysid")D.sysid=x;else if(s=="after")D.after=x;else if(s=="debug")D.debug=x}}}};Zip.in18=function(){Zip.chk(18)};Zip.a9=function(){Zip.an(9)};Zip.m9=function(){Zip.mv(9)};Zip.v9=function(){Zip.ot(9)};Zip.in14=function(){Zip.chk(14)};Zip.in9=function(){Zip.chk(9)};Zip.a40=function(){Zip.an(40)};Zip.m40=function(){Zip.mv(40)};Zip.v40=function(){Zip.ot(40)};Zip.a43=function(){Zip.an(43)};Zip.m43=function(){Zip.mv(43)};Zip.v43=function(){Zip.ot(43)};Zip.a66=function(){Zip.an(66)};Zip.m66=function(){Zip.mv(66)};Zip.v66=function(){Zip.ot(66)};Zip.a22=function(){Zip.an(22)};Zip.m22=function(){Zip.mv(22)};Zip.v22=function(){Zip.ot(22)};Zip.a4=function(){Zip.an(4)};Zip.m4=function(){Zip.mv(4)};Zip.v4=function(){Zip.ot(4)};Zip.in7=function(){Zip.chk(7)};Zip.a67=function(){Zip.an(67)};Zip.m67=function(){Zip.mv(67)};Zip.v67=function(){Zip.ot(67)};Zip.c0=function(e,x,s){var t=document.getElementById(x).value;var r=document.getElementById(s).value;t=Zip.nx(t);r=Zip.nx(r);var z=t.length;var q=r.length;if(z==1&&q==0)Zip.chk(e);else if(D.sphone!=""){}else if(z==3&&q==4)Zip.chk(e);else{if(D.sphone==""&&z==3&&q<=3)Zip.f(document.getElementById(s));if(window.File&&(D.exinput=="2"||t=="?"))Zip.chk(e);if(D.rtrs=="1"||(D.nodb!=""&&z==3))Zip.chk(e)}};Zip.fc13=function(){Zip.c0(13,D.p[13],D.q[13])};Zip.fc3=function(){Zip.c0(3,D.p[3],D.q[3])};Zip.fc2=function(){Zip.c0(2,D.p[2],D.q[2])};Zip.a7=function(){Zip.an(7)};Zip.m7=function(){Zip.mv(7)};Zip.v7=function(){Zip.ot(7)};Zip.vs=function(){var m=D.sysid.split("_");for(var d=0;d<m.length;d++){var g=m[d];if(g=="WOOCOMMERCE"){D.woo="1";D.apad="woocommerce_after.js";D.after="1";for(var z=1;z<=2;z++){var t="shipping_";if(z==1)t="billing_";Zip.e5(z,t+"postcode","",t+"state",t+"city","",t+"address_1","")}}else if(g=="TRUSTFORM"){var v="zip_pref_city_addr";var b=v.split("_");for(var p=0;p<b.length;p++){var q=b[p];for(var h=1;h<=D.zipmax;h++){var x=(h<=1)?q:q+String(h);Zip.c4(x);if(q=="zip")Zip.c4(x+"1")}}}else if(g=="CSCART"){D.help=D.zipaddr0+"cscart/"}}};Zip.in2=function(){Zip.chk(2)};Zip.fc1=function(){Zip.c0(1,D.p[1],D.q[1])};Zip.e2=function(e,p){var v;if(document.getElementById(e)){v=document.getElementById(e)}else{v=document.createElement('div');v.id=e;if(p=="")var p=document.getElementsByTagName("body").item(0);p.appendChild(v)}return v};Zip.a32=function(){Zip.an(32)};Zip.m32=function(){Zip.mv(32)};Zip.v32=function(){Zip.ot(32)};Zip.a36=function(){Zip.an(36)};Zip.m36=function(){Zip.mv(36)};Zip.v36=function(){Zip.ot(36)};Zip.fc12=function(){Zip.c0(12,D.p[12],D.q[12])};Zip.a52=function(){Zip.an(52)};Zip.m52=function(){Zip.mv(52)};Zip.v52=function(){Zip.ot(52)};Zip.w=function(){var k="address1";var n="address2";var b="pref";var a="member_pref";var s="customer_pref";var x="delivery_pref";if(document.getElementById(b))Zip.e5(1,"zipcode","",b,"",k,n,n);else if(document.getElementById(a))Zip.e5(1,"zipcode","",a,"",k,n,n);else if(document.getElementById(s))Zip.e5(1,"zipcode","",s,"",k,n,n);else if(document.getElementById(x))Zip.e5(1,"zipcode","",x,"",k,n,n);D.zipmax=1};Zip.a14=function(){Zip.an(14)};Zip.m14=function(){Zip.mv(14)};Zip.v14=function(){Zip.ot(14)};Zip.s0=function(w,r,e){if(e==1){Zip.va(w,r,Zip.fc1)}else if(e==2){Zip.va(w,r,Zip.fc2)}else if(e==3){Zip.va(w,r,Zip.fc3)}else if(e==4){Zip.va(w,r,Zip.fc4)}else if(e==5){Zip.va(w,r,Zip.fc5)}else if(e==6){Zip.va(w,r,Zip.fc6)}else if(e==7){Zip.va(w,r,Zip.fc7)}else if(e==8){Zip.va(w,r,Zip.fc8)}else if(e==9){Zip.va(w,r,Zip.fc9)}else if(e==10){Zip.va(w,r,Zip.fc10)}else if(e==11){Zip.va(w,r,Zip.fc11)}else if(e==12){Zip.va(w,r,Zip.fc12)}else if(e==13){Zip.va(w,r,Zip.fc13)}else if(e==14){Zip.va(w,r,Zip.fc14)}else if(e==15){Zip.va(w,r,Zip.fc15)}else if(e==16){Zip.va(w,r,Zip.fc16)}else if(e==17){Zip.va(w,r,Zip.fc17)}else if(e==18){Zip.va(w,r,Zip.fc18)}else if(e==19){Zip.va(w,r,Zip.fc19)}else if(e==20){Zip.va(w,r,Zip.fc20)}};Zip.q=function(){var v=new Array();v[1]="";v[2]="deliv_";v[3]="order_";v[4]="shipping_";v[5]="law_";v[6]="dmy_";for(a=1;a<=6;a++){var u=v[a]+"zip01";var x=v[a]+"zip02";var q=v[a]+"pref";var w="";var s=v[a]+"addr01";var k=v[a]+"addr02";var h=v[a]+"addr02";Zip.e5(a,u,x,q,w,s,k,h)}for(jj=0;jj<=13;jj++){var n=jj+7;var y="shipping_zip01["+jj+"]";var t="shipping_zip02["+jj+"]";var f="shipping_pref["+jj+"]";var a="";var m="shipping_city["+jj+"]";var b="shipping_addr01["+jj+"]";var d="shipping_addr02["+jj+"]";Zip.e5(n,y,t,f,a,m,b,d)}D.top=21;D.sl="都道府県を選択";D.zipmax=20;D.help=D.zipaddr0+"eccube/plugin.html"};Zip.u3=function(){Zip.e5(1,D.zp,D.zp1,D.pr,D.ci,D.ar,D.ad,D.focus);Zip.e5(2,D.zp2,D.zp21,D.pr2,D.ci2,D.ar2,D.ad2,D.focus);Zip.e5(3,D.zp3,D.zp31,D.pr3,D.ci3,D.ar3,D.ad3,D.focus);Zip.e5(4,D.zp4,D.zp41,D.pr4,D.ci4,D.ar4,D.ad4,D.focus);Zip.e5(5,D.zp5,D.zp51,D.pr5,D.ci5,D.ar5,D.ad5,D.focus);Zip.e5(6,D.zp6,D.zp61,D.pr6,D.ci6,D.ar6,D.ad6,D.focus);for(var y=7;y<=D.zipmax;y++){Zip.e5(y,"zip"+y,"zip"+y+"1","pref"+y,"city"+y,"area"+y,"addr"+y,D.focus)}};Zip.a10=function(){Zip.an(10)};Zip.m10=function(){Zip.mv(10)};Zip.v10=function(){Zip.ot(10)};Zip.a34=function(){Zip.an(34)};Zip.m34=function(){Zip.mv(34)};Zip.v34=function(){Zip.ot(34)};Zip.mapc=function(){var n=location.protocol=="https:"?"S":"";if(D.m=="Y"||D.m=="G"){}else if(n==""&&D.bro=="Chrome"){}else if(D.sphone!="")D.m="Y";else D.m="G"};Zip.a18=function(){Zip.an(18)};Zip.m18=function(){Zip.mv(18)};Zip.v18=function(){Zip.ot(18)};Zip.a8=function(){Zip.an(8)};Zip.m8=function(){Zip.mv(8)};Zip.v8=function(){Zip.ot(8)};Zip.a16=function(){Zip.an(16)};Zip.m16=function(){Zip.mv(16)};Zip.v16=function(){Zip.ot(16)};Zip.a60=function(){Zip.an(60)};Zip.m60=function(){Zip.mv(60)};Zip.v60=function(){Zip.ot(60)};Zip.nx=function(r){var q=Zip.z(r);q=q.replace(/-/g,'');q=q.replace(/\s/g,'');return q};Zip.in10=function(){Zip.chk(10)};Zip.y=function(){var y=D.nodb==""?0:D.sv;if(D.reverse!=""){D.sv="0";y=0}var p=Zip.zipaddru(y)+"/js/ziparcx.php?v=129";if(D.reverse!="")p+="&r=85";if(D.apad!="")p+="&m="+D.apad;if(D.nodb!="")p+="&n="+D.nodb;Zip.scall(p)};Zip.a29=function(){Zip.an(29)};Zip.m29=function(){Zip.mv(29)};Zip.v29=function(){Zip.ot(29)};Zip.a13=function(){Zip.an(13)};Zip.m13=function(){Zip.mv(13)};Zip.v13=function(){Zip.ot(13)};Zip.e3=function(k){if(document.getElementById(k)){var q=document.getElementById(k);var t=document.getElementsByTagName("body").item(0);t.removeChild(q)}};Zip.a49=function(){Zip.an(49)};Zip.m49=function(){Zip.mv(49)};Zip.v49=function(){Zip.ot(49)};Zip.in20=function(){Zip.chk(20)};Zip.fc8=function(){Zip.c0(8,D.p[8],D.q[8])};Zip.a65=function(){Zip.an(65)};Zip.m65=function(){Zip.mv(65)};Zip.v65=function(){Zip.ot(65)};Zip.f=function(e){var h=e.value.length;e.focus();if(e.createTextRange){var r=e.createTextRange();r.move('character',h);r.select()}else if(e.setSelectionRange){e.setSelectionRange(h,h)}};Zip.ir6=function(){Zip.rin(6)};Zip.ir3=function(){Zip.rin(3)};Zip.fc5=function(){Zip.c0(5,D.p[5],D.q[5])};Zip.a68=function(){Zip.an(68)};Zip.m68=function(){Zip.mv(68)};Zip.v68=function(){Zip.ot(68)};Zip.a5=function(){Zip.an(5)};Zip.m5=function(){Zip.mv(5)};Zip.v5=function(){Zip.ot(5)};Zip.t5=function(v){var d=v.getAttribute("type").toLowerCase();if(d!="hidden")v.type="tel"};Zip.ir13=function(){Zip.rin(13)};Zip.in12=function(){Zip.chk(12)};Zip.va=function(f,d,p){if(f.addEventListener){f.addEventListener(d,p,false);D.xlisten="1"}else if(f.attachEvent){f.attachEvent('on'+d,p);D.xlisten="2"}};Zip.ir19=function(){Zip.rin(19)};Zip.ir1=function(){Zip.rin(1)};Zip.fc4=function(){Zip.c0(4,D.p[4],D.q[4])};Zip.e5=function(t,c,e,z,d,m,p,x){D.p[t]=c;D.q[t]=e;D.r[t]=z;D.i[t]=d;D.e[t]=m;D.a[t]=p;D.f[t]=x};Zip.a35=function(){Zip.an(35)};Zip.m35=function(){Zip.mv(35)};Zip.v35=function(){Zip.ot(35)};Zip.mv=function(q){var obj=document.getElementById("zline_"+q);Zip.u9(obj,1)};Zip.ir10=function(){Zip.rin(10)};Zip.a50=function(){Zip.an(50)};Zip.m50=function(){Zip.mv(50)};Zip.v50=function(){Zip.ot(50)};Zip.a59=function(){Zip.an(59)};Zip.m59=function(){Zip.mv(59)};Zip.v59=function(){Zip.ot(59)};Zip.a31=function(){Zip.an(31)};Zip.m31=function(){Zip.mv(31)};Zip.v31=function(){Zip.ot(31)};Zip.a19=function(){Zip.an(19)};Zip.m19=function(){Zip.mv(19)};Zip.v19=function(){Zip.ot(19)};Zip.a42=function(){Zip.an(42)};Zip.m42=function(){Zip.mv(42)};Zip.v42=function(){Zip.ot(42)};Zip.in1=function(){Zip.chk(1)};Zip.fc6=function(){Zip.c0(6,D.p[6],D.q[6])};Zip.zipaddru=function(w){if(D.xuls[w]==D.xul[w])var t='https:/'+'/'+Zip.r8(unescape(D.xuls[w]));else{var t=location.protocol=="https:"?D.xuls[w]:D.xul[w];t=location.protocol+'/'+'/'+Zip.r8(unescape(t))}return t};Zip.a44=function(){Zip.an(44)};Zip.m44=function(){Zip.mv(44)};Zip.v44=function(){Zip.ot(44)};Zip.a24=function(){Zip.an(24)};Zip.m24=function(){Zip.mv(24)};Zip.v24=function(){Zip.ot(24)};Zip.in19=function(){Zip.chk(19)};Zip.fc10=function(){Zip.c0(10,D.p[10],D.q[10])};Zip.fc19=function(){Zip.c0(19,D.p[19],D.q[19])};Zip.fc9=function(){Zip.c0(9,D.p[9],D.q[9])};Zip.x=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Zip.b();Zip.u0();Zip.u6();Zip.mapc();if(D.debug=="1")Zip.d0();if(D.eccube=="1"&&typeof Zip.q==="function")Zip.q();if(D.welcart=="1"&&typeof Zip.w==="function")Zip.w();if(typeof D.usces!="undefined"&&D.usces=="1"&&typeof Zip.usces==="function")Zip.usces();if(D.wp=="1"&&typeof Zip.w9==="function")Zip.w9();if(D.sphone!=""&&typeof Zip.s4==="function")Zip.s4();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof D.pm[1]!="undefined"&&D.pm[1]!=""){for(var a=1;a<D.pm.length;a++){var r=D.pm[a];var p="";var e="";var n="";var d="";var x="";var v="";var h="";if(typeof r.zip!="undefined")p=Zip.n(r.zip);if(typeof r.zip1!="undefined")e=Zip.n(r.zip1);if(typeof r.pref!="undefined")n=Zip.n(r.pref);if(typeof r.city!="undefined")d=Zip.n(r.city);if(typeof r.area!="undefined")x=Zip.n(r.area);if(typeof r.addr!="undefined")v=Zip.n(r.addr);if(typeof r.focus!="undefined")h=Zip.n(r.focus);Zip.e5(a,p,e,n,d,x,v,h)}D.zipmax=D.pm.length-1}else if(D.eccube=="1"||D.welcart=="1"||D.usces=="1"){}else Zip.u3();Zip.c9();if(typeof zipaddr_ownc==="function")zipaddr_ownc();D.sysid=D.sysid.toUpperCase();if(D.sysid!="")Zip.vs();for(var q=1;q<=D.zipmax;q++){Zip.n(D.p[q]);Zip.n(D.q[q]);Zip.n(D.r[q]);Zip.n(D.i[q]);Zip.n(D.e[q]);Zip.n(D.a[q]);if(q>20)alert(D.msg1);else if(D.p[q]==""){}else{Zip.set(D.p[q],D.q[q],q);if(D.reverse!="")Zip.rvset(D.a[q],q)}}if(D.xuse==1||D.sysid=="CSCART"){Zip.y()}if(typeof zipaddr_owna==="function")zipaddr_owna();if(D.m=="Y"){Zip.gload()}else if(D.m=="G"){if(D.bro.substr(0,2)=="IE"||D.bro=="Edge"){Zip.gload()}}};Zip.fc17=function(){Zip.c0(17,D.p[17],D.q[17])};Zip.in13=function(){Zip.chk(13)};Zip.a6=function(){Zip.an(6)};Zip.m6=function(){Zip.mv(6)};Zip.v6=function(){Zip.ot(6)};Zip.ir14=function(){Zip.rin(14)};Zip.scall=function(p){Zip.e3(D.elid);var u=document.createElement("script");u.id=D.elid;u.setAttribute("type","text/javascript");u.setAttribute("src",p);u.setAttribute("charset","UTF-8");document.body.appendChild(u)};Zip.a63=function(){Zip.an(63)};Zip.m63=function(){Zip.mv(63)};Zip.v63=function(){Zip.ot(63)};Zip.in8=function(){Zip.chk(8)};Zip.ir17=function(){Zip.rin(17)};Zip.a39=function(){Zip.an(39)};Zip.m39=function(){Zip.mv(39)};Zip.v39=function(){Zip.ot(39)};Zip.ir9=function(){Zip.rin(9)};Zip.u0=function(){D.xul[0]="%u3042z%u3046i%u3044pa%u3042d%u3046dr.co%u3042m";D.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r%u30465.c%u3042om";D.xul[2]="%u3046zip%u3042ad%u3046d%u3044r10.%u3042co%u3044m";D.xuls[0]=D.xul[0];D.xuls[1]="zip%u3042ad%u3046dr5-%u3044com.s%u3046sl-six%u3044core%u3046.jp";D.xuls[2]=D.xul[2];if(D.sv==""){var u=Math.floor(Math.random()*10);if(u>=8)D.sv="2";else if(u>=7)D.sv="1";else D.sv="0"}};Zip.k=function(b){for(var m=1;m<=b.zip.length;m++){if(m>70)alert(D.msg2);var x='zline_'+m;Zip.j(x,m)}};Zip.a56=function(){Zip.an(56)};Zip.m56=function(){Zip.mv(56)};Zip.v56=function(){Zip.ot(56)};Zip.ir16=function(){Zip.rin(16)};Zip.an=function(f){Zip.at2(D.at[f])};Zip.fc11=function(){Zip.c0(11,D.p[11],D.q[11])};Zip.a2=function(){Zip.an(2)};Zip.m2=function(){Zip.mv(2)};Zip.v2=function(){Zip.ot(2)};Zip.d0=function(){var m="Start-"+D.zipaddr+"_Ver"+D.xvr+"\n";m+="EC-CUBE: "+D.eccube+"\n";m+="Welcart: "+D.welcart+"\n";m+="SmartPhone:"+D.sphone+"\n";m+="Reverse:"+D.reverse+"\n";m+="zipmax:"+D.zipmax+"\n";m+="sv:"+D.sv+"\n";alert(m)};Zip.w9=function(){D.help=D.zipaddr2+"wordpress/"};Zip.n=function(b){var t=b;if(b==""||document.getElementById(b)){}else{var z=document.getElementsByName(b);if(z.length==1&&(z[0].id=="undefined"||z[0].id=="")){t=t.replace(/\[/g,"");t=t.replace(/\]/g,"");z[0].id=t}else if(z.length==1){t=z[0].id}}return t};Zip.b=function(){D.ua=window.navigator.userAgent.toLowerCase();var d=window.navigator.appVersion.toLowerCase();if(D.ua.indexOf("msie")>-1){if(d.indexOf("msie 6.")>-1){D.bro="IE6"}else if(d.indexOf("msie 7.")>-1){D.bro="IE7"}else if(d.indexOf("msie 8.")>-1){D.bro="IE8"}else if(d.indexOf("msie 9.")>-1){D.bro="IE9"}else if(d.indexOf("msie 10.")>-1){D.bro="IE10"}else{D.bro="IE"}}else if(D.ua.indexOf("trident/7")>-1){D.bro="IE11"}else if(D.ua.indexOf("edge")>-1){D.bro="Edge"}else if(D.ua.indexOf("firefox")>-1){D.bro="Firefox"}else if(D.ua.indexOf("opera")>-1){D.bro="Opera"}else if(D.ua.indexOf("chrome")>-1){D.bro="Chrome"}else if(D.ua.indexOf("safari")>-1){D.bro="Safari"}else if(D.ua.indexOf("gecko")>-1){D.bro="Gecko"}else{D.bro="Unknown"}};Zip.s1=function(q,z,g){if(g==1){Zip.va(q,z,Zip.in1)}else if(g==2){Zip.va(q,z,Zip.in2)}else if(g==3){Zip.va(q,z,Zip.in3)}else if(g==4){Zip.va(q,z,Zip.in4)}else if(g==5){Zip.va(q,z,Zip.in5)}else if(g==6){Zip.va(q,z,Zip.in6)}else if(g==7){Zip.va(q,z,Zip.in7)}else if(g==8){Zip.va(q,z,Zip.in8)}else if(g==9){Zip.va(q,z,Zip.in9)}else if(g==10){Zip.va(q,z,Zip.in10)}else if(g==11){Zip.va(q,z,Zip.in11)}else if(g==12){Zip.va(q,z,Zip.in12)}else if(g==13){Zip.va(q,z,Zip.in13)}else if(g==14){Zip.va(q,z,Zip.in14)}else if(g==15){Zip.va(q,z,Zip.in15)}else if(g==16){Zip.va(q,z,Zip.in16)}else if(g==17){Zip.va(q,z,Zip.in17)}else if(g==18){Zip.va(q,z,Zip.in18)}else if(g==19){Zip.va(q,z,Zip.in19)}else if(g==20){Zip.va(q,z,Zip.in20)}};Zip.a53=function(){Zip.an(53)};Zip.m53=function(){Zip.mv(53)};Zip.v53=function(){Zip.ot(53)};Zip.i5=function(q){q.style.imeMode="disabled"};Zip.fc16=function(){Zip.c0(16,D.p[16],D.q[16])};Zip.ir15=function(){Zip.rin(15)};Zip.in17=function(){Zip.chk(17)};Zip.a38=function(){Zip.an(38)};Zip.m38=function(){Zip.mv(38)};Zip.v38=function(){Zip.ot(38)};Zip.a3=function(){Zip.an(3)};Zip.m3=function(){Zip.mv(3)};Zip.v3=function(){Zip.ot(3)};Zip.ir4=function(){Zip.rin(4)};Zip.z=function(z){var y="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var c="0123456789-----";var r="";for(var q=0;q<z.length;q++){var u=z.charAt(q);var t=y.indexOf(u,0);if(t>=0)u=c.charAt(t);r+=u}return r};Zip.a33=function(){Zip.an(33)};Zip.m33=function(){Zip.mv(33)};Zip.v33=function(){Zip.ot(33)};Zip.a28=function(){Zip.an(28)};Zip.m28=function(){Zip.mv(28)};Zip.v28=function(){Zip.ot(28)};Zip.set=function(r,s,p){if(window.File&&D.exinput=="2")var z="mouseover";else var z="keyup";var n="";var w="";var x="";var q="";if(r!=""&&document.getElementById(r)){n=document.getElementById(r);w=n.getAttribute("type").toLowerCase();try{x=n.placeholder;q=true}catch(e){x="1";q=false}}if(r!=""&&document.getElementById(r)&&w!="hidden"){var g=r;var u=(D.dli=="")?7:8;if(s!=""&&document.getElementById(s)){Zip.i5(n);if(q)Zip.t5(n);Zip.s0(n,z,p);n=document.getElementById(s);g=s;u=4}else{if(w=="number"){u=7;D.dli=""}}Zip.i5(n);if(q)Zip.t5(n);Zip.s1(n,z,p);if(n.maxLength<=0||n.maxLength>=100)n.maxLength=u;D.xuse=1;n=document.getElementById(r);if(x==""){if(D.holder==""){if(navigator.geolocation&&D.sphone!="")n.placeholder="+:住所自動入力";else if(navigator.geolocation)n.placeholder="m:住所自動入力";else n.placeholder="住所自動入力"}else if(D.holder=="&nbsp;")n.placeholder="";else n.placeholder=D.holder}}};Zip.ir7=function(){Zip.rin(7)};Zip.a15=function(){Zip.an(15)};Zip.m15=function(){Zip.mv(15)};Zip.v15=function(){Zip.ot(15)};Zip.a11=function(){Zip.an(11)};Zip.m11=function(){Zip.mv(11)};Zip.v11=function(){Zip.ot(11)};Zip.in6=function(){Zip.chk(6)};Zip.s4=function(){D.min="7";D.left=30;D.top=25;D.sl="都道府県を選択して下さい。"};Zip.a1=function(){Zip.an(1)};Zip.m1=function(){Zip.mv(1)};Zip.v1=function(){Zip.ot(1)};Zip.a21=function(){Zip.an(21)};Zip.m21=function(){Zip.mv(21)};Zip.v21=function(){Zip.ot(21)};Zip.usces=function(){if(document.getElementById("zipcode")){}else{D.zipmax=4;var w=new Array();w[1]="member";w[2]="customer";w[3]="delivery";for(var t=1;t<D.zipmax;t++){var p=Zip.n(w[t]+"[zipcode]");var z=Zip.n(w[t]+"[pref]");var c=Zip.n(w[t]+"[address1]");var f=Zip.n(w[t]+"[address2]");Zip.e5(t,p,"",z,"",c,f,f)}Zip.n("zip_code");Zip.n("address1");Zip.e5(D.zipmax,"zip_code","","","","address1","","")}};Zip.rvset=function(y,m){if(document.getElementById(y)){var w='keyup';var h='change';var p=document.getElementById(y);if(m==1){Zip.va(p,w,Zip.ir1);Zip.va(p,h,Zip.ir1)}else if(m==2){Zip.va(p,w,Zip.ir2);Zip.va(p,h,Zip.ir2)}else if(m==3){Zip.va(p,w,Zip.ir3);Zip.va(p,h,Zip.ir3)}else if(m==4){Zip.va(p,w,Zip.ir4);Zip.va(p,h,Zip.ir4)}else if(m==5){Zip.va(p,w,Zip.ir5);Zip.va(p,h,Zip.ir5)}else if(m==6){Zip.va(p,w,Zip.ir6);Zip.va(p,h,Zip.ir6)}else if(m==7){Zip.va(p,w,Zip.ir7);Zip.va(p,h,Zip.ir7)}else if(m==8){Zip.va(p,w,Zip.ir8);Zip.va(p,h,Zip.ir8)}else if(m==9){Zip.va(p,w,Zip.ir9);Zip.va(p,h,Zip.ir9)}else if(m==10){Zip.va(p,w,Zip.ir10);Zip.va(p,h,Zip.ir10)}else if(m==11){Zip.va(p,w,Zip.ir11);Zip.va(p,h,Zip.ir11)}else if(m==12){Zip.va(p,w,Zip.ir12);Zip.va(p,h,Zip.ir12)}else if(m==13){Zip.va(p,w,Zip.ir13);Zip.va(p,h,Zip.ir13)}else if(m==14){Zip.va(p,w,Zip.ir14);Zip.va(p,h,Zip.ir14)}else if(m==15){Zip.va(p,w,Zip.ir15);Zip.va(p,h,Zip.ir15)}else if(m==16){Zip.va(p,w,Zip.ir16);Zip.va(p,h,Zip.ir16)}else if(m==17){Zip.va(p,w,Zip.ir17);Zip.va(p,h,Zip.ir17)}else if(m==18){Zip.va(p,w,Zip.ir18);Zip.va(p,h,Zip.ir18)}else if(m==19){Zip.va(p,w,Zip.ir19);Zip.va(p,h,Zip.ir19)}else if(m==20){Zip.va(p,w,Zip.ir20);Zip.va(p,h,Zip.ir20)}}};Zip.ir20=function(){Zip.rin(20)};Zip.a26=function(){Zip.an(26)};Zip.m26=function(){Zip.mv(26)};Zip.v26=function(){Zip.ot(26)};Zip.a45=function(){Zip.an(45)};Zip.m45=function(){Zip.mv(45)};Zip.v45=function(){Zip.ot(45)};Zip.a55=function(){Zip.an(55)};Zip.m55=function(){Zip.mv(55)};Zip.v55=function(){Zip.ot(55)};Zip.a64=function(){Zip.an(64)};Zip.m64=function(){Zip.mv(64)};Zip.v64=function(){Zip.ot(64)};Zip.aa=function(n){if(D.ajax==""){D.ajax="1";Zip.x()}if(D.ajax=="1"){var p=n.id;for(ii=1;ii<=D.zipmax;ii++){if(D.p[ii]==p&&document.getElementById(p)){Zip.chk(ii);break}}}};Zip.ir18=function(){Zip.rin(18)};Zip.a25=function(){Zip.an(25)};Zip.m25=function(){Zip.mv(25)};Zip.v25=function(){Zip.ot(25)};Zip.a48=function(){Zip.an(48)};Zip.m48=function(){Zip.mv(48)};Zip.v48=function(){Zip.ot(48)};Zip.a70=function(){Zip.an(70)};Zip.m70=function(){Zip.mv(70)};Zip.v70=function(){Zip.ot(70)};Zip.ir8=function(){Zip.rin(8)};Zip.a23=function(){Zip.an(23)};Zip.m23=function(){Zip.mv(23)};Zip.v23=function(){Zip.ot(23)};Zip.in11=function(){Zip.chk(11)};Zip.a57=function(){Zip.an(57)};Zip.m57=function(){Zip.mv(57)};Zip.v57=function(){Zip.ot(57)};Zip.ot=function(g){var obj=document.getElementById("zline_"+g);Zip.u9(obj,0)};Zip.fc15=function(){Zip.c0(15,D.p[15],D.q[15])};Zip.a47=function(){Zip.an(47)};Zip.m47=function(){Zip.mv(47)};Zip.v47=function(){Zip.ot(47)};Zip.in3=function(){Zip.chk(3)};Zip.in4=function(){Zip.chk(4)};Zip.c4=function(e){if(e!=""){var c=document.getElementsByClassName(e);if(c.length==1&&!document.getElementById(e)){if(c[0].id=="")c[0].id=e}}};if(window.addEventListener){window.addEventListener('load',Zip.x,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.x,true)}try{$(document).on('pageinit',function(e){D.sphone="1";Zip.x()})}catch(e){}