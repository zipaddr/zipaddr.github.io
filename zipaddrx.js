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
Zip.a2=function(){Zip.an(2)};Zip.m2=function(){Zip.mv(2)};Zip.v2=function(){Zip.ot(2)};Zip.ir10=function(){Zip.rin(10)};Zip.ir19=function(){Zip.rin(19)};Zip.e2=function(m,g){if(document.getElementById(m)){var e=document.getElementById(m)}else{var e=document.createElement('div');e.id=m;if(g=="")var g=document.getElementsByTagName("body").item(0);g.appendChild(e)}return e};Zip.a4=function(){Zip.an(4)};Zip.m4=function(){Zip.mv(4)};Zip.v4=function(){Zip.ot(4)};Zip.in14=function(){Zip.chk(14)};Zip.a24=function(){Zip.an(24)};Zip.m24=function(){Zip.mv(24)};Zip.v24=function(){Zip.ot(24)};Zip.a65=function(){Zip.an(65)};Zip.m65=function(){Zip.mv(65)};Zip.v65=function(){Zip.ot(65)};Zip.a16=function(){Zip.an(16)};Zip.m16=function(){Zip.mv(16)};Zip.v16=function(){Zip.ot(16)};Zip.ir6=function(){Zip.rin(6)};Zip.in15=function(){Zip.chk(15)};Zip.a27=function(){Zip.an(27)};Zip.m27=function(){Zip.mv(27)};Zip.v27=function(){Zip.ot(27)};Zip.aa=function(p){if(D.ajax==""){D.ajax="1";Zip.x()}if(D.ajax=="1"){var n=p.id;for(ii=1;ii<=D.zipmax;ii++){if(D.p[ii]==n&&document.getElementById(n)){Zip.chk(ii);break}}}};Zip.fc1=function(){Zip.c0(1,D.p[1],D.q[1])};Zip.i5=function(v){v.style.imeMode="disabled"};Zip.ir2=function(){Zip.rin(2)};Zip.a26=function(){Zip.an(26)};Zip.m26=function(){Zip.mv(26)};Zip.v26=function(){Zip.ot(26)};Zip.a32=function(){Zip.an(32)};Zip.m32=function(){Zip.mv(32)};Zip.v32=function(){Zip.ot(32)};Zip.rvset=function(p,r){if(document.getElementById(p)){var w='keyup';var m='change';var z=document.getElementById(p);if(r==1){Zip.va(z,w,Zip.ir1);Zip.va(z,m,Zip.ir1)}else if(r==2){Zip.va(z,w,Zip.ir2);Zip.va(z,m,Zip.ir2)}else if(r==3){Zip.va(z,w,Zip.ir3);Zip.va(z,m,Zip.ir3)}else if(r==4){Zip.va(z,w,Zip.ir4);Zip.va(z,m,Zip.ir4)}else if(r==5){Zip.va(z,w,Zip.ir5);Zip.va(z,m,Zip.ir5)}else if(r==6){Zip.va(z,w,Zip.ir6);Zip.va(z,m,Zip.ir6)}else if(r==7){Zip.va(z,w,Zip.ir7);Zip.va(z,m,Zip.ir7)}else if(r==8){Zip.va(z,w,Zip.ir8);Zip.va(z,m,Zip.ir8)}else if(r==9){Zip.va(z,w,Zip.ir9);Zip.va(z,m,Zip.ir9)}else if(r==10){Zip.va(z,w,Zip.ir10);Zip.va(z,m,Zip.ir10)}else if(r==11){Zip.va(z,w,Zip.ir11);Zip.va(z,m,Zip.ir11)}else if(r==12){Zip.va(z,w,Zip.ir12);Zip.va(z,m,Zip.ir12)}else if(r==13){Zip.va(z,w,Zip.ir13);Zip.va(z,m,Zip.ir13)}else if(r==14){Zip.va(z,w,Zip.ir14);Zip.va(z,m,Zip.ir14)}else if(r==15){Zip.va(z,w,Zip.ir15);Zip.va(z,m,Zip.ir15)}else if(r==16){Zip.va(z,w,Zip.ir16);Zip.va(z,m,Zip.ir16)}else if(r==17){Zip.va(z,w,Zip.ir17);Zip.va(z,m,Zip.ir17)}else if(r==18){Zip.va(z,w,Zip.ir18);Zip.va(z,m,Zip.ir18)}else if(r==19){Zip.va(z,w,Zip.ir19);Zip.va(z,m,Zip.ir19)}else if(r==20){Zip.va(z,w,Zip.ir20);Zip.va(z,m,Zip.ir20)}}};Zip.ir11=function(){Zip.rin(11)};Zip.a23=function(){Zip.an(23)};Zip.m23=function(){Zip.mv(23)};Zip.v23=function(){Zip.ot(23)};Zip.c0=function(t,g,w){var x=document.getElementById(g).value;var a=document.getElementById(w).value;x=Zip.nx(x);a=Zip.nx(a);var f=x.length;var e=a.length;if(f==1&&e==0)Zip.chk(t);else if(D.sphone!=""){}else if(f==3&&e==4)Zip.chk(t);else{if(D.sphone==""&&f==3&&e<=3)Zip.f(document.getElementById(w));if(window.File&&(D.exinput=="2"||x=="?"))Zip.chk(t);if(D.rtrs=="1"||(D.nodb!=""&&f==3))Zip.chk(t)}};Zip.a50=function(){Zip.an(50)};Zip.m50=function(){Zip.mv(50)};Zip.v50=function(){Zip.ot(50)};Zip.a35=function(){Zip.an(35)};Zip.m35=function(){Zip.mv(35)};Zip.v35=function(){Zip.ot(35)};Zip.va=function(r,v,g){if(r.addEventListener){r.addEventListener(v,g,false);D.xlisten="1"}else if(r.attachEvent){r.attachEvent('on'+v,g);D.xlisten="2"}};Zip.a52=function(){Zip.an(52)};Zip.m52=function(){Zip.mv(52)};Zip.v52=function(){Zip.ot(52)};Zip.fc17=function(){Zip.c0(17,D.p[17],D.q[17])};Zip.f=function(v){var q=v.value.length;v.focus();if(v.createTextRange){var e=v.createTextRange();e.move('character',q);e.select()}else if(v.setSelectionRange){v.setSelectionRange(q,q)}};Zip.a19=function(){Zip.an(19)};Zip.m19=function(){Zip.mv(19)};Zip.v19=function(){Zip.ot(19)};Zip.t5=function(e){var h=e.getAttribute("type").toLowerCase();if(h!="hidden")e.type="tel"};Zip.ir4=function(){Zip.rin(4)};Zip.a55=function(){Zip.an(55)};Zip.m55=function(){Zip.mv(55)};Zip.v55=function(){Zip.ot(55)};Zip.a43=function(){Zip.an(43)};Zip.m43=function(){Zip.mv(43)};Zip.v43=function(){Zip.ot(43)};Zip.in11=function(){Zip.chk(11)};Zip.in4=function(){Zip.chk(4)};Zip.in10=function(){Zip.chk(10)};Zip.e3=function(n){if(document.getElementById(n)){var x=document.getElementById(n);var u=document.getElementsByTagName("body").item(0);u.removeChild(x)}};Zip.a60=function(){Zip.an(60)};Zip.m60=function(){Zip.mv(60)};Zip.v60=function(){Zip.ot(60)};Zip.ir13=function(){Zip.rin(13)};Zip.a3=function(){Zip.an(3)};Zip.m3=function(){Zip.mv(3)};Zip.v3=function(){Zip.ot(3)};Zip.a56=function(){Zip.an(56)};Zip.m56=function(){Zip.mv(56)};Zip.v56=function(){Zip.ot(56)};Zip.a45=function(){Zip.an(45)};Zip.m45=function(){Zip.mv(45)};Zip.v45=function(){Zip.ot(45)};Zip.a58=function(){Zip.an(58)};Zip.m58=function(){Zip.mv(58)};Zip.v58=function(){Zip.ot(58)};Zip.ir16=function(){Zip.rin(16)};Zip.a13=function(){Zip.an(13)};Zip.m13=function(){Zip.mv(13)};Zip.v13=function(){Zip.ot(13)};Zip.fc19=function(){Zip.c0(19,D.p[19],D.q[19])};Zip.a17=function(){Zip.an(17)};Zip.m17=function(){Zip.mv(17)};Zip.v17=function(){Zip.ot(17)};Zip.a67=function(){Zip.an(67)};Zip.m67=function(){Zip.mv(67)};Zip.v67=function(){Zip.ot(67)};Zip.y=function(){var v=D.nodb==""?0:D.sv;if(D.reverse!=""){D.sv="0";v=0}var b=Zip.zipaddru(v)+"/js/ziparcx.php?v=129";if(D.reverse!="")b+="&r=85";if(D.apad!="")b+="&m="+D.apad;if(D.nodb!="")b+="&n="+D.nodb;Zip.scall(b)};Zip.ir20=function(){Zip.rin(20)};Zip.a40=function(){Zip.an(40)};Zip.m40=function(){Zip.mv(40)};Zip.v40=function(){Zip.ot(40)};Zip.ir15=function(){Zip.rin(15)};Zip.fc18=function(){Zip.c0(18,D.p[18],D.q[18])};Zip.in2=function(){Zip.chk(2)};Zip.fc16=function(){Zip.c0(16,D.p[16],D.q[16])};Zip.a51=function(){Zip.an(51)};Zip.m51=function(){Zip.mv(51)};Zip.v51=function(){Zip.ot(51)};Zip.in3=function(){Zip.chk(3)};Zip.u6=function(){var m;if((D.ua.indexOf('iphone')>0&&D.ua.indexOf('ipad')==-1)||D.ua.indexOf('android')>0)m="1";else m="";if(typeof fnCallAddress==="function"||window.eccube!=undefined){D.eccube="1";if(D.sphone==""&&m=="1")D.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){D.welcart="1";if(D.sphone==""&&m=="1")D.sphone="2"}else if(D.sphone!=""){}else if(m=="1")D.sphone="2"};Zip.a69=function(){Zip.an(69)};Zip.m69=function(){Zip.mv(69)};Zip.v69=function(){Zip.ot(69)};Zip.a63=function(){Zip.an(63)};Zip.m63=function(){Zip.mv(63)};Zip.v63=function(){Zip.ot(63)};Zip.a62=function(){Zip.an(62)};Zip.m62=function(){Zip.mv(62)};Zip.v62=function(){Zip.ot(62)};Zip.in9=function(){Zip.chk(9)};Zip.s1=function(t,r,y){if(y==1){Zip.va(t,r,Zip.in1)}else if(y==2){Zip.va(t,r,Zip.in2)}else if(y==3){Zip.va(t,r,Zip.in3)}else if(y==4){Zip.va(t,r,Zip.in4)}else if(y==5){Zip.va(t,r,Zip.in5)}else if(y==6){Zip.va(t,r,Zip.in6)}else if(y==7){Zip.va(t,r,Zip.in7)}else if(y==8){Zip.va(t,r,Zip.in8)}else if(y==9){Zip.va(t,r,Zip.in9)}else if(y==10){Zip.va(t,r,Zip.in10)}else if(y==11){Zip.va(t,r,Zip.in11)}else if(y==12){Zip.va(t,r,Zip.in12)}else if(y==13){Zip.va(t,r,Zip.in13)}else if(y==14){Zip.va(t,r,Zip.in14)}else if(y==15){Zip.va(t,r,Zip.in15)}else if(y==16){Zip.va(t,r,Zip.in16)}else if(y==17){Zip.va(t,r,Zip.in17)}else if(y==18){Zip.va(t,r,Zip.in18)}else if(y==19){Zip.va(t,r,Zip.in19)}else if(y==20){Zip.va(t,r,Zip.in20)}};Zip.a25=function(){Zip.an(25)};Zip.m25=function(){Zip.mv(25)};Zip.v25=function(){Zip.ot(25)};Zip.in7=function(){Zip.chk(7)};Zip.in8=function(){Zip.chk(8)};Zip.n=function(n){var c=n;if(n==""||document.getElementById(n)){}else{var q=document.getElementsByName(n);if(q.length==1&&(q[0].id=="undefined"||q[0].id=="")){c=c.replace(/\[/g,"");c=c.replace(/\]/g,"");q[0].id=c}else if(q.length==1){c=q[0].id}}return c};Zip.a42=function(){Zip.an(42)};Zip.m42=function(){Zip.mv(42)};Zip.v42=function(){Zip.ot(42)};Zip.a49=function(){Zip.an(49)};Zip.m49=function(){Zip.mv(49)};Zip.v49=function(){Zip.ot(49)};Zip.nx=function(h){var p=Zip.z(h);p=p.replace(/-/g,'');p=p.replace(/\s/g,'');return p};Zip.in6=function(){Zip.chk(6)};Zip.usces=function(){if(document.getElementById("zipcode")){}else{D.zipmax=4;var q=new Array();q[1]="member";q[2]="customer";q[3]="delivery";for(var a=1;a<D.zipmax;a++){var v=Zip.n(q[a]+"[zipcode]");var k=Zip.n(q[a]+"[pref]");var y=Zip.n(q[a]+"[address1]");var b=Zip.n(q[a]+"[address2]");Zip.e5(a,v,"",k,"",y,b,b)}Zip.n("zip_code");Zip.n("address1");Zip.e5(D.zipmax,"zip_code","","","","address1","","")}};Zip.ir9=function(){Zip.rin(9)};Zip.fc11=function(){Zip.c0(11,D.p[11],D.q[11])};Zip.fc20=function(){Zip.c0(20,D.p[20],D.q[20])};Zip.in12=function(){Zip.chk(12)};Zip.ir5=function(){Zip.rin(5)};Zip.a54=function(){Zip.an(54)};Zip.m54=function(){Zip.mv(54)};Zip.v54=function(){Zip.ot(54)};Zip.a66=function(){Zip.an(66)};Zip.m66=function(){Zip.mv(66)};Zip.v66=function(){Zip.ot(66)};Zip.a48=function(){Zip.an(48)};Zip.m48=function(){Zip.mv(48)};Zip.v48=function(){Zip.ot(48)};Zip.in5=function(){Zip.chk(5)};Zip.a1=function(){Zip.an(1)};Zip.m1=function(){Zip.mv(1)};Zip.v1=function(){Zip.ot(1)};Zip.fc2=function(){Zip.c0(2,D.p[2],D.q[2])};Zip.fc15=function(){Zip.c0(15,D.p[15],D.q[15])};Zip.a31=function(){Zip.an(31)};Zip.m31=function(){Zip.mv(31)};Zip.v31=function(){Zip.ot(31)};Zip.mv=function(k){var obj=document.getElementById("zline_"+k);Zip.u9(obj,1)};Zip.mapc=function(){var e=location.protocol=="https:"?"S":"";if(D.m=="Y"||D.m=="G"){}else if(e==""&&D.bro=="Chrome"){}else if(D.sphone!="")D.m="Y";else D.m="G"};Zip.a39=function(){Zip.an(39)};Zip.m39=function(){Zip.mv(39)};Zip.v39=function(){Zip.ot(39)};Zip.scall=function(f){Zip.e3(D.elid);var a=document.createElement("script");a.id=D.elid;a.setAttribute("type","text/javascript");a.setAttribute("src",f);a.setAttribute("charset","UTF-8");document.body.appendChild(a)};Zip.in19=function(){Zip.chk(19)};Zip.a37=function(){Zip.an(37)};Zip.m37=function(){Zip.mv(37)};Zip.v37=function(){Zip.ot(37)};Zip.ir14=function(){Zip.rin(14)};Zip.a57=function(){Zip.an(57)};Zip.m57=function(){Zip.mv(57)};Zip.v57=function(){Zip.ot(57)};Zip.a36=function(){Zip.an(36)};Zip.m36=function(){Zip.mv(36)};Zip.v36=function(){Zip.ot(36)};Zip.a15=function(){Zip.an(15)};Zip.m15=function(){Zip.mv(15)};Zip.v15=function(){Zip.ot(15)};Zip.fc14=function(){Zip.c0(14,D.p[14],D.q[14])};Zip.a18=function(){Zip.an(18)};Zip.m18=function(){Zip.mv(18)};Zip.v18=function(){Zip.ot(18)};Zip.ir12=function(){Zip.rin(12)};Zip.a68=function(){Zip.an(68)};Zip.m68=function(){Zip.mv(68)};Zip.v68=function(){Zip.ot(68)};Zip.ir17=function(){Zip.rin(17)};Zip.set=function(a,q,w){if(window.File&&D.exinput=="2")var r="mouseover";else var r="keyup";var y="";var f="";var t="";var d="";if(a!=""&&document.getElementById(a)){y=document.getElementById(a);f=y.getAttribute("type").toLowerCase();try{t=y.placeholder;d=true}catch(e){t="1";d=false}}if(a!=""&&document.getElementById(a)&&f!="hidden"){var b=a;var e=(D.dli=="")?7:8;if(q!=""&&document.getElementById(q)){Zip.i5(y);if(d)Zip.t5(y);Zip.s0(y,r,w);y=document.getElementById(q);b=q;e=4}else{if(f=="number"){e=7;D.dli=""}}Zip.i5(y);if(d)Zip.t5(y);Zip.s1(y,r,w);if(y.maxLength<=0||y.maxLength>=100)y.maxLength=e;D.xuse=1;y=document.getElementById(a);if(t==""){if(D.holder==""){if(navigator.geolocation&&D.sphone!="")y.placeholder="+:住所自動入力";else if(navigator.geolocation)y.placeholder="m:住所自動入力";else y.placeholder="住所自動入力"}else if(D.holder=="&nbsp;")y.placeholder="";else y.placeholder=D.holder}}};Zip.e5=function(t,r,p,e,z,q,n,b){D.p[t]=r;D.q[t]=p;D.r[t]=e;D.i[t]=z;D.e[t]=q;D.a[t]=n;D.f[t]=b};Zip.a28=function(){Zip.an(28)};Zip.m28=function(){Zip.mv(28)};Zip.v28=function(){Zip.ot(28)};Zip.fc4=function(){Zip.c0(4,D.p[4],D.q[4])};Zip.fc7=function(){Zip.c0(7,D.p[7],D.q[7])};Zip.s4=function(){D.min="7";D.left=30;D.top=25;D.sl="都道府県を選択して下さい。"};Zip.a29=function(){Zip.an(29)};Zip.m29=function(){Zip.mv(29)};Zip.v29=function(){Zip.ot(29)};Zip.in20=function(){Zip.chk(20)};Zip.ir7=function(){Zip.rin(7)};Zip.a41=function(){Zip.an(41)};Zip.m41=function(){Zip.mv(41)};Zip.v41=function(){Zip.ot(41)};Zip.ot=function(z){var obj=document.getElementById("zline_"+z);Zip.u9(obj,0)};Zip.fc12=function(){Zip.c0(12,D.p[12],D.q[12])};Zip.in18=function(){Zip.chk(18)};Zip.in16=function(){Zip.chk(16)};Zip.a64=function(){Zip.an(64)};Zip.m64=function(){Zip.mv(64)};Zip.v64=function(){Zip.ot(64)};Zip.gload=function(){try{var s=window.google.maps}catch(e){var s="x"}if(s=="x"){Zip.scall("https://maps.google.com/maps/api/js?key=AIzaSyClLtjifg1XR3lH4LeEnR4VzyxNACXVb_0")}};Zip.in13=function(){Zip.chk(13)};Zip.a34=function(){Zip.an(34)};Zip.m34=function(){Zip.mv(34)};Zip.v34=function(){Zip.ot(34)};Zip.a7=function(){Zip.an(7)};Zip.m7=function(){Zip.mv(7)};Zip.v7=function(){Zip.ot(7)};Zip.zipaddru=function(a){if(D.xuls[a]==D.xul[a])var s='https:/'+'/'+Zip.r8(unescape(D.xuls[a]));else{var s=location.protocol=="https:"?D.xuls[a]:D.xul[a];s=location.protocol+'/'+'/'+Zip.r8(unescape(s))}return s};Zip.in1=function(){Zip.chk(1)};Zip.fc13=function(){Zip.c0(13,D.p[13],D.q[13])};Zip.a30=function(){Zip.an(30)};Zip.m30=function(){Zip.mv(30)};Zip.v30=function(){Zip.ot(30)};Zip.a33=function(){Zip.an(33)};Zip.m33=function(){Zip.mv(33)};Zip.v33=function(){Zip.ot(33)};Zip.a9=function(){Zip.an(9)};Zip.m9=function(){Zip.mv(9)};Zip.v9=function(){Zip.ot(9)};Zip.a22=function(){Zip.an(22)};Zip.m22=function(){Zip.mv(22)};Zip.v22=function(){Zip.ot(22)};Zip.fc6=function(){Zip.c0(6,D.p[6],D.q[6])};Zip.z=function(w){var f="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var s="0123456789-----";var x="";for(var e=0;e<w.length;e++){var y=w.charAt(e);var v=f.indexOf(y,0);if(v>=0)y=s.charAt(v);x+=y}return x};Zip.in17=function(){Zip.chk(17)};Zip.a46=function(){Zip.an(46)};Zip.m46=function(){Zip.mv(46)};Zip.v46=function(){Zip.ot(46)};Zip.u0=function(){D.xul[0]="%u3042z%u3046i%u3044pa%u3042d%u3046dr.co%u3042m";D.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r%u30465.c%u3042om";D.xul[2]="%u3046zip%u3042ad%u3046d%u3044r10.%u3042co%u3044m";D.xuls[0]=D.xul[0];D.xuls[1]="zip%u3042ad%u3046dr5-%u3044com.s%u3046sl-six%u3044core%u3046.jp";D.xuls[2]=D.xul[2];if(D.sv==""){var x=Math.floor(Math.random()*10);if(x>=5)D.sv="2";else if(x>=3)D.sv="1";else D.sv="0"}};Zip.a70=function(){Zip.an(70)};Zip.m70=function(){Zip.mv(70)};Zip.v70=function(){Zip.ot(70)};Zip.a21=function(){Zip.an(21)};Zip.m21=function(){Zip.mv(21)};Zip.v21=function(){Zip.ot(21)};Zip.ir8=function(){Zip.rin(8)};Zip.a11=function(){Zip.an(11)};Zip.m11=function(){Zip.mv(11)};Zip.v11=function(){Zip.ot(11)};Zip.a10=function(){Zip.an(10)};Zip.m10=function(){Zip.mv(10)};Zip.v10=function(){Zip.ot(10)};Zip.a59=function(){Zip.an(59)};Zip.m59=function(){Zip.mv(59)};Zip.v59=function(){Zip.ot(59)};Zip.w9=function(){D.help=D.zipaddr2+"wordpress/"};Zip.fc3=function(){Zip.c0(3,D.p[3],D.q[3])};Zip.a5=function(){Zip.an(5)};Zip.m5=function(){Zip.mv(5)};Zip.v5=function(){Zip.ot(5)};Zip.a6=function(){Zip.an(6)};Zip.m6=function(){Zip.mv(6)};Zip.v6=function(){Zip.ot(6)};Zip.a20=function(){Zip.an(20)};Zip.m20=function(){Zip.mv(20)};Zip.v20=function(){Zip.ot(20)};Zip.q=function(){var z=new Array();z[1]="";z[2]="deliv_";z[3]="order_";z[4]="shipping_";z[5]="law_";z[6]="dmy_";for(p=1;p<=6;p++){var v=z[p]+"zip01";var a=z[p]+"zip02";var s=z[p]+"pref";var m="";var c=z[p]+"addr01";var x=z[p]+"addr02";var u=z[p]+"addr02";Zip.e5(p,v,a,s,m,c,x,u)}for(jj=0;jj<=13;jj++){var k=jj+7;var h="shipping_zip01["+jj+"]";var y="shipping_zip02["+jj+"]";var g="shipping_pref["+jj+"]";var p="";var b="shipping_city["+jj+"]";var t="shipping_addr01["+jj+"]";var r="shipping_addr02["+jj+"]";Zip.e5(k,h,y,g,p,b,t,r)}D.top=21;D.sl="都道府県を選択";D.zipmax=20;D.help=D.zipaddr0+"eccube/plugin.html"};Zip.ir3=function(){Zip.rin(3)};Zip.c4=function(k){if(k!=""){var a=document.getElementsByClassName(k);if(a.length==1&&!document.getElementById(k)){if(a[0].id=="")a[0].id=k}}};Zip.vs=function(){var g=D.sysid.split("_");for(var e=0;e<g.length;e++){var c=g[e];if(c=="WOOCOMMERCE"){D.woo="1";D.apad="woocommerce_after.js";D.after="1";for(var b=1;b<=2;b++){var d="shipping_";if(b==1)d="billing_";Zip.e5(b,d+"postcode","",d+"state",d+"city","",d+"address_1","")}}else if(c=="TRUSTFORM"){var y="zip_pref_city_addr";var w=y.split("_");for(var h=0;h<w.length;h++){var t=w[h];for(var m=1;m<=D.zipmax;m++){var z=(m<=1)?t:t+String(m);Zip.c4(z);if(t=="zip")Zip.c4(z+"1")}}}else if(c=="CSCART"){D.help=D.zipaddr0+"cscart/"}}};Zip.a38=function(){Zip.an(38)};Zip.m38=function(){Zip.mv(38)};Zip.v38=function(){Zip.ot(38)};Zip.c9=function(){var c="zipaddr_param";if(document.getElementById(c)){var u=document.getElementById(c);var x=u.value.split(",");for(var a=0;a<x.length;a++){var b=x[a].replace(/(^\s+)|(\s+$)/g,"");var k=b.split("=");if(k.length==2){var m=k[0];var n=k[1];if(m=="zip")D.p[1]=n;else if(m=="zip1")D.q[1]=n;else if(m=="pref")D.r[1]=n;else if(m=="city")D.i[1]=n;else if(m=="addr")D.a[1]=n;else if(m=="zip2")D.p[2]=n;else if(m=="zip21")D.q[2]=n;else if(m=="pref2")D.r[2]=n;else if(m=="city2")D.i[2]=n;else if(m=="addr2")D.a[2]=n;else if(m=="dli")D.dli=n;else if(m=="bgc")D.bgc=n;else if(m=="bgm")D.bgm=n;else if(m=="ovr")D.ovr=n;else if(m=="lnc")D.lnc=n;else if(m=="clr")D.clr=n;else if(m=="min")D.min=n;else if(m=="sel")D.sel=n;else if(m=="left")D.left=n;else if(m=="top")D.top=n;else if(m=="pfon")D.pfon=n;else if(m=="phig")D.phig=n;else if(m=="sfon")D.sfon=n;else if(m=="shig")D.shig=n;else if(m=="rtrv")D.rtrv=n;else if(m=="rtrs")D.rtrs=n;else if(m=="opt")D.opt=n;else if(m=="lang")D.lang=n;else if(m=="exinput")D.exinput=n;else if(m=="welcart")D.welcart=n;else if(m=="eccube")D.eccube=n;else if(m=="zipmax")D.zipmax=n;else if(m=="focus")D.focus=n;else if(m=="sysid")D.sysid=n;else if(m=="after")D.after=n;else if(m=="debug")D.debug=n}}}};Zip.a14=function(){Zip.an(14)};Zip.m14=function(){Zip.mv(14)};Zip.v14=function(){Zip.ot(14)};Zip.x=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Zip.b();Zip.u0();Zip.u6();Zip.mapc();if(D.debug=="1")Zip.d0();if(D.eccube=="1"&&typeof Zip.q==="function")Zip.q();if(D.welcart=="1"&&typeof Zip.w==="function")Zip.w();if(typeof D.usces!="undefined"&&D.usces=="1"&&typeof Zip.usces==="function")Zip.usces();if(D.wp=="1"&&typeof Zip.w9==="function")Zip.w9();if(D.sphone!=""&&typeof Zip.s4==="function")Zip.s4();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof D.pm[1]!="undefined"&&D.pm[1]!=""){for(var y=1;y<D.pm.length;y++){var n=D.pm[y];var d="";var e="";var v="";var x="";var b="";var m="";var g="";if(typeof n.zip!="undefined")d=Zip.n(n.zip);if(typeof n.zip1!="undefined")e=Zip.n(n.zip1);if(typeof n.pref!="undefined")v=Zip.n(n.pref);if(typeof n.city!="undefined")x=Zip.n(n.city);if(typeof n.area!="undefined")b=Zip.n(n.area);if(typeof n.addr!="undefined")m=Zip.n(n.addr);if(typeof n.focus!="undefined")g=Zip.n(n.focus);Zip.e5(y,d,e,v,x,b,m,g)}D.zipmax=D.pm.length-1}else if(D.eccube=="1"||D.welcart=="1"||D.usces=="1"){}else Zip.u3();Zip.c9();if(typeof zipaddr_ownc==="function")zipaddr_ownc();D.sysid=D.sysid.toUpperCase();if(D.sysid!="")Zip.vs();for(var f=1;f<=D.zipmax;f++){Zip.n(D.p[f]);Zip.n(D.q[f]);Zip.n(D.r[f]);Zip.n(D.i[f]);Zip.n(D.e[f]);Zip.n(D.a[f]);if(f>20)alert(D.msg1);else if(D.p[f]==""){}else{Zip.set(D.p[f],D.q[f],f);if(D.reverse!="")Zip.rvset(D.a[f],f)}}if(D.xuse==1||D.sysid=="CSCART"){Zip.y()}if(typeof zipaddr_owna==="function")zipaddr_owna();if(D.m=="Y"){Zip.gload()}else if(D.m=="G"){if(D.bro.substr(0,2)=="IE"||D.bro=="Edge"){Zip.gload()}}};Zip.d0=function(){var p="Start-"+D.zipaddr+"_Ver"+D.xvr+"\n";p+="EC-CUBE: "+D.eccube+"\n";p+="Welcart: "+D.welcart+"\n";p+="SmartPhone:"+D.sphone+"\n";p+="Reverse:"+D.reverse+"\n";p+="zipmax:"+D.zipmax+"\n";p+="sv:"+D.sv+"\n";alert(p)};Zip.fc8=function(){Zip.c0(8,D.p[8],D.q[8])};Zip.a53=function(){Zip.an(53)};Zip.m53=function(){Zip.mv(53)};Zip.v53=function(){Zip.ot(53)};Zip.k=function(n){for(var d=1;d<=n.zip.length;d++){if(d>70)alert(D.msg2);var r='zline_'+d;Zip.j(r,d)}};Zip.an=function(h){Zip.at2(D.at[h])};Zip.ir1=function(){Zip.rin(1)};Zip.fc9=function(){Zip.c0(9,D.p[9],D.q[9])};Zip.r8=function(n){var w=n.replace(/う/g,'');w=w.replace(/あ/g,'');w=w.replace(/い/g,'');w=w.replace(/え/g,'');return w};Zip.b=function(){D.ua=window.navigator.userAgent.toLowerCase();var b=window.navigator.appVersion.toLowerCase();if(D.ua.indexOf("msie")>-1){if(b.indexOf("msie 6.")>-1){D.bro="IE6"}else if(b.indexOf("msie 7.")>-1){D.bro="IE7"}else if(b.indexOf("msie 8.")>-1){D.bro="IE8"}else if(b.indexOf("msie 9.")>-1){D.bro="IE9"}else if(b.indexOf("msie 10.")>-1){D.bro="IE10"}else{D.bro="IE"}}else if(D.ua.indexOf("trident/7")>-1){D.bro="IE11"}else if(D.ua.indexOf("edge")>-1){D.bro="Edge"}else if(D.ua.indexOf("firefox")>-1){D.bro="Firefox"}else if(D.ua.indexOf("opera")>-1){D.bro="Opera"}else if(D.ua.indexOf("chrome")>-1){D.bro="Chrome"}else if(D.ua.indexOf("safari")>-1){D.bro="Safari"}else if(D.ua.indexOf("gecko")>-1){D.bro="Gecko"}else{D.bro="Unknown"}};Zip.a12=function(){Zip.an(12)};Zip.m12=function(){Zip.mv(12)};Zip.v12=function(){Zip.ot(12)};Zip.a44=function(){Zip.an(44)};Zip.m44=function(){Zip.mv(44)};Zip.v44=function(){Zip.ot(44)};Zip.fc10=function(){Zip.c0(10,D.p[10],D.q[10])};Zip.w=function(){var y="address1";var v="address2";var d="pref";var t="member_pref";var s="customer_pref";var e="delivery_pref";if(document.getElementById(d))Zip.e5(1,"zipcode","",d,"",y,v,v);else if(document.getElementById(t))Zip.e5(1,"zipcode","",t,"",y,v,v);else if(document.getElementById(s))Zip.e5(1,"zipcode","",s,"",y,v,v);else if(document.getElementById(e))Zip.e5(1,"zipcode","",e,"",y,v,v);D.zipmax=1};Zip.s0=function(v,b,r){if(r==1){Zip.va(v,b,Zip.fc1)}else if(r==2){Zip.va(v,b,Zip.fc2)}else if(r==3){Zip.va(v,b,Zip.fc3)}else if(r==4){Zip.va(v,b,Zip.fc4)}else if(r==5){Zip.va(v,b,Zip.fc5)}else if(r==6){Zip.va(v,b,Zip.fc6)}else if(r==7){Zip.va(v,b,Zip.fc7)}else if(r==8){Zip.va(v,b,Zip.fc8)}else if(r==9){Zip.va(v,b,Zip.fc9)}else if(r==10){Zip.va(v,b,Zip.fc10)}else if(r==11){Zip.va(v,b,Zip.fc11)}else if(r==12){Zip.va(v,b,Zip.fc12)}else if(r==13){Zip.va(v,b,Zip.fc13)}else if(r==14){Zip.va(v,b,Zip.fc14)}else if(r==15){Zip.va(v,b,Zip.fc15)}else if(r==16){Zip.va(v,b,Zip.fc16)}else if(r==17){Zip.va(v,b,Zip.fc17)}else if(r==18){Zip.va(v,b,Zip.fc18)}else if(r==19){Zip.va(v,b,Zip.fc19)}else if(r==20){Zip.va(v,b,Zip.fc20)}};Zip.a61=function(){Zip.an(61)};Zip.m61=function(){Zip.mv(61)};Zip.v61=function(){Zip.ot(61)};Zip.u3=function(){Zip.e5(1,D.zp,D.zp1,D.pr,D.ci,D.ar,D.ad,D.focus);Zip.e5(2,D.zp2,D.zp21,D.pr2,D.ci2,D.ar2,D.ad2,D.focus);Zip.e5(3,D.zp3,D.zp31,D.pr3,D.ci3,D.ar3,D.ad3,D.focus);Zip.e5(4,D.zp4,D.zp41,D.pr4,D.ci4,D.ar4,D.ad4,D.focus);Zip.e5(5,D.zp5,D.zp51,D.pr5,D.ci5,D.ar5,D.ad5,D.focus);Zip.e5(6,D.zp6,D.zp61,D.pr6,D.ci6,D.ar6,D.ad6,D.focus);for(var f=7;f<=D.zipmax;f++){Zip.e5(f,"zip"+f,"zip"+f+"1","pref"+f,"city"+f,"area"+f,"addr"+f,D.focus)}};Zip.a47=function(){Zip.an(47)};Zip.m47=function(){Zip.mv(47)};Zip.v47=function(){Zip.ot(47)};Zip.a8=function(){Zip.an(8)};Zip.m8=function(){Zip.mv(8)};Zip.v8=function(){Zip.ot(8)};Zip.ir18=function(){Zip.rin(18)};Zip.fc5=function(){Zip.c0(5,D.p[5],D.q[5])};Zip.j=function(a,c){if(document.getElementById(a)){var m=document.getElementById(a);var n='click';var h='mouseover';var e='mouseout';if(c==1){Zip.va(m,n,Zip.a1);Zip.va(m,h,Zip.m1);Zip.va(m,e,Zip.v1)}else if(c==2){Zip.va(m,n,Zip.a2);Zip.va(m,h,Zip.m2);Zip.va(m,e,Zip.v2)}else if(c==3){Zip.va(m,n,Zip.a3);Zip.va(m,h,Zip.m3);Zip.va(m,e,Zip.v3)}else if(c==4){Zip.va(m,n,Zip.a4);Zip.va(m,h,Zip.m4);Zip.va(m,e,Zip.v4)}else if(c==5){Zip.va(m,n,Zip.a5);Zip.va(m,h,Zip.m5);Zip.va(m,e,Zip.v5)}else if(c==6){Zip.va(m,n,Zip.a6);Zip.va(m,h,Zip.m6);Zip.va(m,e,Zip.v6)}else if(c==7){Zip.va(m,n,Zip.a7);Zip.va(m,h,Zip.m7);Zip.va(m,e,Zip.v7)}else if(c==8){Zip.va(m,n,Zip.a8);Zip.va(m,h,Zip.m8);Zip.va(m,e,Zip.v8)}else if(c==9){Zip.va(m,n,Zip.a9);Zip.va(m,h,Zip.m9);Zip.va(m,e,Zip.v9)}else if(c==10){Zip.va(m,n,Zip.a10);Zip.va(m,h,Zip.m10);Zip.va(m,e,Zip.v10)}else if(c==11){Zip.va(m,n,Zip.a11);Zip.va(m,h,Zip.m11);Zip.va(m,e,Zip.v11)}else if(c==12){Zip.va(m,n,Zip.a12);Zip.va(m,h,Zip.m12);Zip.va(m,e,Zip.v12)}else if(c==13){Zip.va(m,n,Zip.a13);Zip.va(m,h,Zip.m13);Zip.va(m,e,Zip.v13)}else if(c==14){Zip.va(m,n,Zip.a14);Zip.va(m,h,Zip.m14);Zip.va(m,e,Zip.v14)}else if(c==15){Zip.va(m,n,Zip.a15);Zip.va(m,h,Zip.m15);Zip.va(m,e,Zip.v15)}else if(c==16){Zip.va(m,n,Zip.a16);Zip.va(m,h,Zip.m16);Zip.va(m,e,Zip.v16)}else if(c==17){Zip.va(m,n,Zip.a17);Zip.va(m,h,Zip.m17);Zip.va(m,e,Zip.v17)}else if(c==18){Zip.va(m,n,Zip.a18);Zip.va(m,h,Zip.m18);Zip.va(m,e,Zip.v18)}else if(c==19){Zip.va(m,n,Zip.a19);Zip.va(m,h,Zip.m19);Zip.va(m,e,Zip.v19)}else if(c==20){Zip.va(m,n,Zip.a20);Zip.va(m,h,Zip.m20);Zip.va(m,e,Zip.v20)}else if(c==21){Zip.va(m,n,Zip.a21);Zip.va(m,h,Zip.m21);Zip.va(m,e,Zip.v21)}else if(c==22){Zip.va(m,n,Zip.a22);Zip.va(m,h,Zip.m22);Zip.va(m,e,Zip.v22)}else if(c==23){Zip.va(m,n,Zip.a23);Zip.va(m,h,Zip.m23);Zip.va(m,e,Zip.v23)}else if(c==24){Zip.va(m,n,Zip.a24);Zip.va(m,h,Zip.m24);Zip.va(m,e,Zip.v24)}else if(c==25){Zip.va(m,n,Zip.a25);Zip.va(m,h,Zip.m25);Zip.va(m,e,Zip.v25)}else if(c==26){Zip.va(m,n,Zip.a26);Zip.va(m,h,Zip.m26);Zip.va(m,e,Zip.v26)}else if(c==27){Zip.va(m,n,Zip.a27);Zip.va(m,h,Zip.m27);Zip.va(m,e,Zip.v27)}else if(c==28){Zip.va(m,n,Zip.a28);Zip.va(m,h,Zip.m28);Zip.va(m,e,Zip.v28)}else if(c==29){Zip.va(m,n,Zip.a29);Zip.va(m,h,Zip.m29);Zip.va(m,e,Zip.v29)}else if(c==30){Zip.va(m,n,Zip.a30);Zip.va(m,h,Zip.m30);Zip.va(m,e,Zip.v30)}else if(c==31){Zip.va(m,n,Zip.a31);Zip.va(m,h,Zip.m31);Zip.va(m,e,Zip.v31)}else if(c==32){Zip.va(m,n,Zip.a32);Zip.va(m,h,Zip.m32);Zip.va(m,e,Zip.v32)}else if(c==33){Zip.va(m,n,Zip.a33);Zip.va(m,h,Zip.m33);Zip.va(m,e,Zip.v33)}else if(c==34){Zip.va(m,n,Zip.a34);Zip.va(m,h,Zip.m34);Zip.va(m,e,Zip.v34)}else if(c==35){Zip.va(m,n,Zip.a35);Zip.va(m,h,Zip.m35);Zip.va(m,e,Zip.v35)}else if(c==36){Zip.va(m,n,Zip.a36);Zip.va(m,h,Zip.m36);Zip.va(m,e,Zip.v36)}else if(c==37){Zip.va(m,n,Zip.a37);Zip.va(m,h,Zip.m37);Zip.va(m,e,Zip.v37)}else if(c==38){Zip.va(m,n,Zip.a38);Zip.va(m,h,Zip.m38);Zip.va(m,e,Zip.v38)}else if(c==39){Zip.va(m,n,Zip.a39);Zip.va(m,h,Zip.m39);Zip.va(m,e,Zip.v39)}else if(c==40){Zip.va(m,n,Zip.a40);Zip.va(m,h,Zip.m40);Zip.va(m,e,Zip.v40)}else if(c==41){Zip.va(m,n,Zip.a41);Zip.va(m,h,Zip.m41);Zip.va(m,e,Zip.v41)}else if(c==42){Zip.va(m,n,Zip.a42);Zip.va(m,h,Zip.m42);Zip.va(m,e,Zip.v42)}else if(c==43){Zip.va(m,n,Zip.a43);Zip.va(m,h,Zip.m43);Zip.va(m,e,Zip.v43)}else if(c==44){Zip.va(m,n,Zip.a44);Zip.va(m,h,Zip.m44);Zip.va(m,e,Zip.v44)}else if(c==45){Zip.va(m,n,Zip.a45);Zip.va(m,h,Zip.m45);Zip.va(m,e,Zip.v45)}else if(c==46){Zip.va(m,n,Zip.a46);Zip.va(m,h,Zip.m46);Zip.va(m,e,Zip.v46)}else if(c==47){Zip.va(m,n,Zip.a47);Zip.va(m,h,Zip.m47);Zip.va(m,e,Zip.v47)}else if(c==48){Zip.va(m,n,Zip.a48);Zip.va(m,h,Zip.m48);Zip.va(m,e,Zip.v48)}else if(c==49){Zip.va(m,n,Zip.a49);Zip.va(m,h,Zip.m49);Zip.va(m,e,Zip.v49)}else if(c==50){Zip.va(m,n,Zip.a50);Zip.va(m,h,Zip.m50);Zip.va(m,e,Zip.v50)}else if(c==51){Zip.va(m,n,Zip.a51);Zip.va(m,h,Zip.m51);Zip.va(m,e,Zip.v51)}else if(c==52){Zip.va(m,n,Zip.a52);Zip.va(m,h,Zip.m52);Zip.va(m,e,Zip.v52)}else if(c==53){Zip.va(m,n,Zip.a53);Zip.va(m,h,Zip.m53);Zip.va(m,e,Zip.v53)}else if(c==54){Zip.va(m,n,Zip.a54);Zip.va(m,h,Zip.m54);Zip.va(m,e,Zip.v54)}else if(c==55){Zip.va(m,n,Zip.a55);Zip.va(m,h,Zip.m55);Zip.va(m,e,Zip.v55)}else if(c==56){Zip.va(m,n,Zip.a56);Zip.va(m,h,Zip.m56);Zip.va(m,e,Zip.v56)}else if(c==57){Zip.va(m,n,Zip.a57);Zip.va(m,h,Zip.m57);Zip.va(m,e,Zip.v57)}else if(c==58){Zip.va(m,n,Zip.a58);Zip.va(m,h,Zip.m58);Zip.va(m,e,Zip.v58)}else if(c==59){Zip.va(m,n,Zip.a59);Zip.va(m,h,Zip.m59);Zip.va(m,e,Zip.v59)}else if(c==60){Zip.va(m,n,Zip.a60);Zip.va(m,h,Zip.m60);Zip.va(m,e,Zip.v60)}else if(c==61){Zip.va(m,n,Zip.a61);Zip.va(m,h,Zip.m61);Zip.va(m,e,Zip.v61)}else if(c==62){Zip.va(m,n,Zip.a62);Zip.va(m,h,Zip.m62);Zip.va(m,e,Zip.v62)}else if(c==63){Zip.va(m,n,Zip.a63);Zip.va(m,h,Zip.m63);Zip.va(m,e,Zip.v63)}else if(c==64){Zip.va(m,n,Zip.a64);Zip.va(m,h,Zip.m64);Zip.va(m,e,Zip.v64)}else if(c==65){Zip.va(m,n,Zip.a65);Zip.va(m,h,Zip.m65);Zip.va(m,e,Zip.v65)}else if(c==66){Zip.va(m,n,Zip.a66);Zip.va(m,h,Zip.m66);Zip.va(m,e,Zip.v66)}else if(c==67){Zip.va(m,n,Zip.a67);Zip.va(m,h,Zip.m67);Zip.va(m,e,Zip.v67)}else if(c==68){Zip.va(m,n,Zip.a68);Zip.va(m,h,Zip.m68);Zip.va(m,e,Zip.v68)}else if(c==69){Zip.va(m,n,Zip.a69);Zip.va(m,h,Zip.m69);Zip.va(m,e,Zip.v69)}else if(c==70){Zip.va(m,n,Zip.a70);Zip.va(m,h,Zip.m70);Zip.va(m,e,Zip.v70)}}};if(window.addEventListener){window.addEventListener('load',Zip.x,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.x,true)}try{$(document).on('pageinit',function(e){D.sphone="1";Zip.x()})}catch(e){}