function Zip(){
/*
 ■郵便番号から住所情報の自動入力処理(zipaddr7.js Ver7.79)

 The use is free of charge.// ご利用は無料です。
 @demo   https://zipaddr.com/
 @author https://pierre-soft.com/

 [htmlの定義]
   <script src="https://zipaddr.github.io/zipaddr7.js" charset="UTF-8"></script>
*/
//	共通
this.pt="1";    // 都道府県select欄 1:id, 2:名称
this.pn="1";    // 都道府県idの桁数 2:2桁
this.sl="---選択";
this.sc="";     // value
this.lin="--------";// 都道府県(Group)区切り
this.dli="-";   // 郵便番号の区切り
this.mrk="〒";
this.bgc="#009999";
this.bgm="#0099cc";
this.ovr="#00bbff";
this.lnc="#ffffcc";
this.clr="#333333";
this.fweight="";
this.design="1";// sp:通常,1:コンパクト版
this.family="ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,sans-serif";
this.debug="";  // 1:debug-mode
//
this.min="7";
this.max="7";
this.sel="10";
this.wok="";    // 拡張用(1:企業を除く)
this.left=22;   // offsetLeft
this.top=18;    // offsetTop
this.pfon="12"; // pc:font-size
this.phig="1.4";// pc:height
this.sfon="16";
this.shig="1.6";
this.emsg="1";  // 1:エラーメッセージを阻止する
this.rtrv="1";  // 1:曖昧検索,0:完全一致
this.rtrs="";   // 1:補助ガイダンス利用
this.exinput="";// 1:拡張入力,2:専用
this.welcart="";
this.usces="";
this.nodb="";
this.wp="";
this.eccube="";
this.advance="";
this.basercms="";
this.guideg=""; // 1:grouping阻止
this.reverse="";// 1:逆検索on, 2:大口事業所を含む
this.rmin="2";  // 逆用(mini)
this.rsel="15"; // 逆用(selectc)
this.sphone=""; // 1:jQuery-mobile,2:etc
this.opt="_____";// li
this.guide="@head@page@line&nbsp;@count@close&nbsp;@zipaddr"; // G-layout,NL:改行
this.contract="TgeWyKPsMMRT";
//   郵便番号(7桁/上3)用  下4桁   都道府県         市区町村         地域             番地
this.zp ="zip"; this.zp1 ="zip1"; this.pr ="pref"; this.ci ="city"; this.ar ="area"; this.ad ="addr";
this.zp2="zip2";this.zp21="zip21";this.pr2="pref2";this.ci2="city2";this.ar2="area2";this.ad2="addr2";
this.zp3="zip3";this.zp31="zip31";this.pr3="pref3";this.ci3="city3";this.ar3="area3";this.ad3="addr3";
this.zp4="zip4";this.zp41="zip41";this.pr4="pref4";this.ci4="city4";this.ar4="area4";this.ad4="addr4";
this.zp5="zip5";this.zp51="zip51";this.pr5="pref5";this.ci5="city5";this.ar5="area5";this.ad5="addr5";
this.zp6="zip6";this.zp61="zip61";this.pr6="pref6";this.ci6="city6";this.ar6="area6";this.ad6="addr6";
//        zip7, zip71, pref7, city7, addr7 // zip7～以降は上記体系で名称は固定です。
this.zipmax=6;  // 7個以上の設置はこの値を変更して拡張します。
this.focus="";  // set後のfocus位置
this.sysid="";  // 拡張sys識別子
this.pm=new Array();
/*	<-↑ 以上はオウンコーディングで変更可能です-> */
this.xvr="7.79";
this.zipaddr="zipaddr";
this.uver="";
this.xzp="";     // zip(key)
this.xzz="";     // -
this.xpr="";     // pref
this.xci="";     // city
this.xar="";     // area
this.xad="";     // addr
this.p= new Array();
this.q= new Array();
this.r= new Array();
this.i= new Array();
this.e= new Array();
this.a= new Array();
this.f= new Array();
this.preftable= new Array();
this.adv= new Array();
this.xul= new Array();
this.xuls=new Array();
this.sv="";      // server
this.ua;         // agent
this.xuse=0;     // 1:論理チェックok
this.xlisten=""; // 1:ｷIE,2:IE
this.ajax="";    // 1:on
this.bro="";     // ブラウザ
this.elid="call"+this.zipaddr;
this.apad="";    // module追加
this.after="";   // 1:後処理要
this.woo="";     // 1:woo
this.mai="";     // submit
this.msg1="**郵番の設置は最大20箇所迄です。";
this.msg2="**Listen 70over, Please TEL "+this.zipaddr;
this.m="";
this.n="[住所自動入力]_start！";
this.lang="";
this.holder="";
this.zipaddr0="https://zipaddr.com/";
this.zipaddr2="http://zipaddr2.com/";
this.help=this.zipaddr0;
}var ZP= new Zip;
Zip.hXc=function(){var p="zipaddr_param";if(document.getElementById(p)){var e=document.getElementById(p);var y=e.value.split(",");for(var r=0;r<y.length;r++){var b=y[r].replace(/(^\s+)|(\s+$)/g,"");var h=b.split("=");if(h.length==2){var d=h[0];var c=h[1];if(d=="zip")ZP.p[1]=c;else if(d=="zip1")ZP.q[1]=c;else if(d=="pref")ZP.r[1]=c;else if(d=="city")ZP.i[1]=c;else if(d=="addr")ZP.a[1]=c;else if(d=="zip2")ZP.p[2]=c;else if(d=="zip21")ZP.q[2]=c;else if(d=="pref2")ZP.r[2]=c;else if(d=="city2")ZP.i[2]=c;else if(d=="addr2")ZP.a[2]=c;else if(d=="dli")ZP.dli=c;else if(d=="bgc")ZP.bgc=c;else if(d=="bgm")ZP.bgm=c;else if(d=="ovr")ZP.ovr=c;else if(d=="lnc")ZP.lnc=c;else if(d=="clr")ZP.clr=c;else if(d=="min")ZP.min=c;else if(d=="sel")ZP.sel=c;else if(d=="left")ZP.left=c;else if(d=="top")ZP.top=c;else if(d=="pfon")ZP.pfon=c;else if(d=="phig")ZP.phig=c;else if(d=="sfon")ZP.sfon=c;else if(d=="shig")ZP.shig=c;else if(d=="rtrv")ZP.rtrv=c;else if(d=="rtrs")ZP.rtrs=c;else if(d=="opt")ZP.opt=c;else if(d=="lang")ZP.lang=c;else if(d=="exinput")ZP.exinput=c;else if(d=="welcart")ZP.welcart=c;else if(d=="eccube")ZP.eccube=c;else if(d=="zipmax")ZP.zipmax=c;else if(d=="focus")ZP.focus=c;else if(d=="sysid")ZP.sysid=c;else if(d=="after")ZP.after=c;else if(d=="debug")ZP.debug=c}}}};Zip.tFa=function(){Zip.r9(2)};Zip.xMd=function(){Zip.c5(1)};Zip.xMd7=function(){Zip.c5(17)};Zip.yKc=function(){var u=new Array();u[1]="";u[2]="deliv_";u[3]="order_";u[4]="shipping_";u[5]="law_";u[6]="dmy_";for(p=1;p<=6;p++){var e=u[p]+"zip01";var r=u[p]+"zip02";var g=u[p]+"pref";var m="";var s=u[p]+"addr01";var n=u[p]+"addr02";var y=u[p]+"addr02";Zip.kXe(p,e,r,g,m,s,n,y)}for(jj=0;jj<=13;jj++){var x=jj+7;var v="shipping_zip01["+jj+"]";var b="shipping_zip02["+jj+"]";var t="shipping_pref["+jj+"]";var p="";var q="shipping_city["+jj+"]";var k="shipping_addr01["+jj+"]";var h="shipping_addr02["+jj+"]";Zip.kXe(x,v,b,t,p,q,k,h)}ZP.top=21;ZP.sl="都道府県を選択";ZP.zipmax=20;ZP.help=ZP.zipaddr0+"eccube/plugin.html"};Zip.tFa0=function(){Zip.r9(20)};Zip.zFe=function(){Zip.c5(8)};Zip.nVd=function(y,e,c){if(c==1){Bas.av(y,e,Zip.qFe)}else if(c==2){Bas.av(y,e,Zip.rNe)}else if(c==3){Bas.av(y,e,Zip.aSe)}else if(c==4){Bas.av(y,e,Zip.gSe)}else if(c==5){Bas.av(y,e,Zip.sBb)}else if(c==6){Bas.av(y,e,Zip.gEa)}else if(c==7){Bas.av(y,e,Zip.sYc)}else if(c==8){Bas.av(y,e,Zip.bCc)}else if(c==9){Bas.av(y,e,Zip.gKa)}else if(c==10){Bas.av(y,e,Zip.qFe0)}else if(c==11){Bas.av(y,e,Zip.qFe1)}else if(c==12){Bas.av(y,e,Zip.sSd)}else if(c==13){Bas.av(y,e,Zip.uUe)}else if(c==14){Bas.av(y,e,Zip.kBd)}else if(c==15){Bas.av(y,e,Zip.hCe)}else if(c==16){Bas.av(y,e,Zip.xKd)}else if(c==17){Bas.av(y,e,Zip.cWe)}else if(c==18){Bas.av(y,e,Zip.eFd)}else if(c==19){Bas.av(y,e,Zip.wCd)}else if(c==20){Bas.av(y,e,Zip.pYd)}};Zip.xMd2=function(){Zip.c5(12)};Zip.bCc=function(){Zip.pSe(8,ZP.p[8],ZP.q[8])};Zip.xMd5=function(){Zip.c5(15)};Zip.zFc=function(b){if(b==""||document.getElementById(b))return b;else{var y=document.getElementsByName(b);if(y.length==1&&(y[0].id=="undefined"||y[0].id==""))return b}return""};Zip.gKa=function(){Zip.pSe(9,ZP.p[9],ZP.q[9])};Zip.nRa=function(){Zip.r9(1)};Zip.nRa1=function(){Zip.r9(11)};Zip.rHd=function(){Zip.r9(3)};Zip.gSe=function(){Zip.pSe(4,ZP.p[4],ZP.q[4])};Zip.mFc=function(){Zip.c5(5)};Zip.uUe=function(){Zip.pSe(13,ZP.p[13],ZP.q[13])};Zip.kBd=function(){Zip.pSe(14,ZP.p[14],ZP.q[14])};Zip.wCd=function(){Zip.pSe(19,ZP.p[19],ZP.q[19])};Zip.aSe=function(){Zip.pSe(3,ZP.p[3],ZP.q[3])};Zip.gEa=function(){Zip.pSe(6,ZP.p[6],ZP.q[6])};Zip.xZd=function(){Zip.c5(9)};Zip.cXc=function(){Zip.c5(6)};Zip.mRe=function(k,a,s){if(s==1){Bas.av(k,a,Zip.xMd)}else if(s==2){Bas.av(k,a,Zip.yDb)}else if(s==3){Bas.av(k,a,Zip.zQb)}else if(s==4){Bas.av(k,a,Zip.qCe)}else if(s==5){Bas.av(k,a,Zip.mFc)}else if(s==6){Bas.av(k,a,Zip.cXc)}else if(s==7){Bas.av(k,a,Zip.fEa)}else if(s==8){Bas.av(k,a,Zip.zFe)}else if(s==9){Bas.av(k,a,Zip.xZd)}else if(s==10){Bas.av(k,a,Zip.xMd0)}else if(s==11){Bas.av(k,a,Zip.xMd1)}else if(s==12){Bas.av(k,a,Zip.xMd2)}else if(s==13){Bas.av(k,a,Zip.xMd3)}else if(s==14){Bas.av(k,a,Zip.xMd4)}else if(s==15){Bas.av(k,a,Zip.xMd5)}else if(s==16){Bas.av(k,a,Zip.xMd6)}else if(s==17){Bas.av(k,a,Zip.xMd7)}else if(s==18){Bas.av(k,a,Zip.xMd8)}else if(s==19){Bas.av(k,a,Zip.xMd9)}else if(s==20){Bas.av(k,a,Zip.tXa)}};Zip.pMa=function(){Zip.r9(8)};Zip.nRa2=function(){Zip.r9(12)};Zip.vBd=function(){var u=ZP.nodb==""?0:ZP.sv;if(ZP.reverse!=""){ZP.sv="0";u=0}var f=Zip.zadu(u)+"/js/ziparc7_3.php?v=139";if(ZP.reverse!="")f+="&r=85";if(ZP.apad!="")f+="&m="+ZP.apad;if(ZP.nodb!="")f+="&n="+ZP.nodb;Bas.ca(f)};Zip.nRa0=function(){Zip.r9(10)};Zip.nRa3=function(){Zip.r9(13)};Zip.xMd6=function(){Zip.c5(16)};Zip.sYc=function(){Zip.pSe(7,ZP.p[7],ZP.q[7])};Zip.hZc=function(g,n){var p="";var t="";for(var x=0;x<g.length;x++){t="";p=Zip.zFc(g[x]);if(p!=""){if(n[x]=="")break;else{t=Zip.zFc(n[x]);if(t!="")break}}}return p+"|"+t};Zip.sKc=function(){var c=ZP.sysid.split("_");for(var r=0;r<c.length;r++){var u=c[r];if(u=="WOOCOMMERCE"){ZP.woo="1";ZP.apad="woocommerce_after.js";ZP.after="1";for(var p=1;p<=2;p++){var n="shipping_";if(p==1)n="billing_";Zip.kXe(p,n+"postcode","",n+"state",n+"city","",n+"address_1","")}}else if(u=="TRUSTFORM"){var x="zip_pref_city_addr";var m=x.split("_");for(var y=0;y<m.length;y++){var a=m[y];for(var k=1;k<=ZP.zipmax;k++){var g=(k<=1)?a:a+String(k);Bas.cs(g);if(a=="zip")Bas.cs(g+"1")}}}else if(u=="CSCART"){ZP.help=ZP.zipaddr0+"cscart/"}}};Zip.nRa9=function(){Zip.r9(19)};Zip.vYd=function(){Zip.r9(7)};Zip.fEa=function(){Zip.c5(7)};Zip.sSd=function(){Zip.pSe(12,ZP.p[12],ZP.q[12])};Zip.xMd1=function(){Zip.c5(11)};Zip.yRb=function(v){if(ZP.ajax==""){ZP.ajax="1";Zip.bUc()}if(ZP.ajax=="1"){var a=v.id;for(var k=1;k<=ZP.zipmax;k++){if(ZP.p[k]==a&&document.getElementById(a)){Zip.c5(k);break}}}};Zip.hCe=function(){Zip.pSe(15,ZP.p[15],ZP.q[15])};Zip.tXa=function(){Zip.c5(20)};Zip.xMd0=function(){Zip.c5(10)};Zip.bUc=function(){if(typeof zipaddr_ownb==="function")zipaddr_ownb();Bas.br();Zip.qNd();Zip.vDd();if(ZP.debug=="1")Zip.pZe();if(ZP.eccube=="1"&&typeof Zip.yKc==="function")Zip.yKc();if(ZP.basercms=="1"&&typeof Zip.sYb==="function")Zip.sYb();if(ZP.advance=="1"&&typeof Zip.uYc==="function")Zip.uYc();if(ZP.welcart=="1"&&typeof Zip.wDd==="function")Zip.wDd();if(typeof ZP.usces!="undefined"&&ZP.usces=="1"&&typeof Zip.wDe==="function")Zip.wDe();if(ZP.wp=="1"&&typeof Zip.vYb==="function")Zip.vYb();if(ZP.sphone!=""&&typeof Zip.mUa==="function")Zip.mUa();if(typeof zipaddr_eccube==="function")zipaddr_eccube();if(typeof zipaddr_own==="function")zipaddr_own();if(typeof ZP.pm[1]!="undefined"&&ZP.pm[1]!=""){for(var p=1;p<ZP.pm.length;p++){var t=ZP.pm[p];var u="";var z="";var f="";var y="";var d="";var k="";var a="";if(typeof t.zip!="undefined")u=Bas.gi(t.zip);if(typeof t.zip1!="undefined")z=Bas.gi(t.zip1);if(typeof t.pref!="undefined")f=Bas.gi(t.pref);if(typeof t.city!="undefined")y=Bas.gi(t.city);if(typeof t.area!="undefined")d=Bas.gi(t.area);if(typeof t.addr!="undefined")k=Bas.gi(t.addr);if(typeof t.focus!="undefined")a=Bas.gi(t.focus);Zip.kXe(p,u,z,f,y,d,k,a)}ZP.zipmax=ZP.pm.length-1}else if(ZP.eccube=="1"||ZP.welcart=="1"||ZP.usces=="1"){}else Zip.dUc();Zip.hXc();if(typeof zipaddr_ownc==="function")zipaddr_ownc();ZP.sysid=ZP.sysid.toUpperCase();if(ZP.sysid!="")Zip.sKc();for(var w=1;w<=ZP.zipmax;w++){if(typeof ZP.e[w]=="undefined")ZP.e[w]="";Bas.gi(ZP.p[w]);Bas.gi(ZP.q[w]);Bas.gi(ZP.r[w]);Bas.gi(ZP.i[w]);Bas.gi(ZP.e[w]);Bas.gi(ZP.a[w]);if(w>20)alert(ZP.msg1);else if(ZP.p[w]==""){}else{Zip.gQa(ZP.p[w],ZP.q[w],w);if(ZP.reverse!="")Zip.nQb(ZP.a[w],w)}}if(ZP.lang=="EN")ZP.apad+=";EN.js";if(ZP.xuse==1||ZP.sysid=="CSCART"){if(typeof Zip.c5==="function"){}else Zip.vBd()}if(typeof zipaddr_owna==="function")zipaddr_owna()};Zip.qNd=function(){ZP.xul[0]="%u3042z%u3046i%u3044pa%u3042d%u3046dr.co%u3042m";ZP.xul[1]="z%u3044i%u3046pa%u3044dd%u3042r%u30467.c%u3042om";ZP.xul[2]="%u3046pie%u3042rr%u3046e-%u3044s%u3046o%u3042f%u3044t.%u3042co%u3044m";ZP.xuls[0]=ZP.xul[0];ZP.xuls[1]=ZP.xul[1];ZP.xuls[2]=ZP.xul[2];if(ZP.sv==""){var d=Math.floor(Math.random()*10);if(d>=6)ZP.sv="2";else if(d>=5)ZP.sv="1";else ZP.sv="0"}};Zip.xMd9=function(){Zip.c5(19)};Zip.zadu=function(u){if(ZP.xuls[u]==ZP.xul[u]){var a='https:';var n=ZP.xuls[u]}else{var a=location.protocol;var n=a=="https:"?ZP.xuls[u]:ZP.xul[u]}n=a+'/'+'/'+Bas.pr(unescape(n));return n};Zip.zQb=function(){Zip.c5(3)};Zip.mUa=function(){ZP.min="7";ZP.left=30;ZP.top=25;ZP.sl="都道府県を選択して下さい。"};Zip.yBb=function(){Zip.r9(6)};Zip.eFd=function(){Zip.pSe(18,ZP.p[18],ZP.q[18])};Zip.xKd=function(){Zip.pSe(16,ZP.p[16],ZP.q[16])};Zip.xMd4=function(){Zip.c5(14)};Zip.dKd=function(){Zip.r9(4)};Zip.qCe=function(){Zip.c5(4)};Zip.uYc=function(){ZP.adv[0]=["zip","zip1","ZIP1","zip01","ZIP01","zipcode1","zip_code1","zip_1","post1","postcode1","yubin1","yubin_no1","txtPostCD1","zip","zipcode","zipCode","postal","postcode","yubin","yubin_no1"];ZP.adv[1]=["zip1","zip2","ZIP2","zip02","ZIP02","zipcode2","zip_code2","zip_2","post2","postcod2","yubin2","yubin_no2","txtPostCD2","","","","","","",""];ZP.adv[2]=["pref","prefs","prefecture","prefectures","prefecture_id","PREFECTURAL","selKen","sel_ken","ken","stCD"];ZP.adv[3]=["city","cities","txtShinchou"];ZP.adv[4]=["area","street"];ZP.adv[5]=["addr","addr1","addr01","address","address1","address01","ADDRESS","adrs1","add","txtBanchi"];var s=Zip.hZc(ZP.adv[0],ZP.adv[1]);ZP.pr=Zip.uYc_chk(ZP.adv[2]);ZP.ci=Zip.uYc_chk(ZP.adv[3]);ZP.ar=Zip.uYc_chk(ZP.adv[4]);ZP.ad=Zip.uYc_chk(ZP.adv[5]);var f=s.split("|");ZP.zp=f[0];ZP.zp1=f[1];ZP.zp2=ZP.zp3=ZP.zp4=ZP.zp5=ZP.zp6=""};Zip.uYc_chk=function(k){var u="";for(var s=0;s<k.length;s++){u=Zip.zFc(k[s]);if(u!="")break}return u};Zip.xMd8=function(){Zip.c5(18)};Zip.wDe=function(){if(document.getElementById("zipcode")){}else{ZP.zipmax=4;var e=new Array();e[1]="member";e[2]="customer";e[3]="delivery";for(var p=1;p<ZP.zipmax;p++){var f=Bas.gi(e[p]+"[zipcode]");var d=Bas.gi(e[p]+"[pref]");var r=Bas.gi(e[p]+"[address1]");var w=Bas.gi(e[p]+"[address2]");Zip.kXe(p,f,"",d,"",r,w,w)}Bas.gi("zip_code");Bas.gi("address1");Zip.kXe(ZP.zipmax,"zip_code","","","","address1","","")}};Zip.rWa=function(){Zip.r9(9)};Zip.vYb=function(){ZP.help=ZP.zipaddr2+"wordpress/"};Zip.cWe=function(){Zip.pSe(17,ZP.p[17],ZP.q[17])};Zip.nRa7=function(){Zip.r9(17)};Zip.qFe=function(){Zip.pSe(1,ZP.p[1],ZP.q[1])};Zip.vDd=function(){var g="";if((ZP.ua.indexOf('iphone')>0&&ZP.ua.indexOf('ipad')==-1)||ZP.ua.indexOf('android')>0)g="1";if(typeof fnCallAddress==="function"||window.eccube!=undefined){ZP.eccube="1";if(ZP.sphone==""&&g=="1")ZP.sphone="2"}else if(typeof uscesL10n!="undefined"&&document.getElementById("zipcode")){ZP.welcart="1";if(ZP.sphone==""&&g=="1")ZP.sphone="2"}else if(ZP.sphone!=""){}else if(g=="1")ZP.sphone="2"};Zip.pYd=function(){Zip.pSe(20,ZP.p[20],ZP.q[20])};Zip.nRa6=function(){Zip.r9(16)};Zip.pSe=function(q,s,p){var r=Bas.cg(document.getElementById(s).value);var x=Bas.cg(document.getElementById(p).value);var h=r.length;var d=x.length;if(h==1&&d==0)Zip.c5(q);else if(h==3&&d==4)Zip.c5(q);else{if(h==3&&d==0){if(ZP.sphone!=""){document.getElementById(s).blur()}Bas.fc(document.getElementById(p))}if(window.File&&(ZP.exinput=="2"||r=="?"))Zip.c5(q);else if(ZP.rtrs=="1"||(ZP.nodb!=""&&h==3))Zip.c5(q)}};Zip.pZe=function(){var y="Start-"+ZP.zipaddr+"_Ver"+ZP.xvr+"\n";y+="EC-CUBE: "+ZP.eccube+"\n";y+="Welcart: "+ZP.welcart+"\n";y+="SmartPhone:"+ZP.sphone+"\n";y+="Reverse:"+ZP.reverse+"\n";y+="zipmax:"+ZP.zipmax+"\n";y+="sv:"+ZP.sv+"\n";alert(y)};Zip.rNe=function(){Zip.pSe(2,ZP.p[2],ZP.q[2])};Zip.sYb=function(){ZP.help=ZP.zipaddr0+"basercms/"};Zip.nRa5=function(){Zip.r9(15)};Zip.qFe1=function(){Zip.pSe(11,ZP.p[11],ZP.q[11])};Zip.yDb=function(){Zip.c5(2)};Zip.eRa=function(){Zip.r9(5)};Zip.wDd=function(){var s="address1";var h="address2";var e="pref";var c="member_pref";var w="customer_pref";var m="delivery_pref";if(document.getElementById(e))Zip.kXe(1,"zipcode","",e,"",s,h,h);else if(document.getElementById(c))Zip.kXe(1,"zipcode","",c,"",s,h,h);else if(document.getElementById(w))Zip.kXe(1,"zipcode","",w,"",s,h,h);else if(document.getElementById(m))Zip.kXe(1,"zipcode","",m,"",s,h,h);ZP.zipmax=1};Zip.gQa=function(m,z,u){var v=(window.File&&ZP.exinput=="2")?"mouseover":"keyup";var d="";var y="";var p="";var h="";if(m!=""&&document.getElementById(m)){d=document.getElementById(m);y=d.getAttribute("type").toLowerCase();try{p=d.placeholder;h=true}catch(e){p="1";h=false}}if(m!=""&&document.getElementById(m)&&y!="hidden"){var k=(ZP.dli=="")?7:8;if(z!=""&&document.getElementById(z)){Bas.st(d);if(h)Bas.sp(d);Zip.nVd(d,v,u);d=document.getElementById(z);k=4}else{if(y=="number"){k=7;ZP.dli=""}}Bas.st(d);if(h)Bas.sp(d);Zip.mRe(d,v,u);if(d.maxLength<=0||d.maxLength>=100)d.maxLength=k;ZP.xuse=1;d=document.getElementById(m);if(p==""){if(ZP.holder=="")d.placeholder="住所自動入力";else if(ZP.holder=="&nbsp;")d.placeholder="";else d.placeholder=ZP.holder}}};Zip.sBb=function(){Zip.pSe(5,ZP.p[5],ZP.q[5])};Zip.nRa8=function(){Zip.r9(18)};Zip.kXe=function(k,z,u,s,n,a,x,c){if(ZP.debug=="T")alert(k+":"+z+":"+u+":"+s+":"+n+":"+a+":"+x+":"+c);ZP.p[k]=z;ZP.q[k]=u;ZP.r[k]=s;ZP.i[k]=n;ZP.e[k]=a;ZP.a[k]=x;ZP.f[k]=c};Zip.qFe0=function(){Zip.pSe(10,ZP.p[10],ZP.q[10])};Zip.nRa4=function(){Zip.r9(14)};Zip.dUc=function(){Zip.kXe(1,ZP.zp,ZP.zp1,ZP.pr,ZP.ci,ZP.ar,ZP.ad,ZP.focus);Zip.kXe(2,ZP.zp2,ZP.zp21,ZP.pr2,ZP.ci2,ZP.ar2,ZP.ad2,ZP.focus);Zip.kXe(3,ZP.zp3,ZP.zp31,ZP.pr3,ZP.ci3,ZP.ar3,ZP.ad3,ZP.focus);Zip.kXe(4,ZP.zp4,ZP.zp41,ZP.pr4,ZP.ci4,ZP.ar4,ZP.ad4,ZP.focus);Zip.kXe(5,ZP.zp5,ZP.zp51,ZP.pr5,ZP.ci5,ZP.ar5,ZP.ad5,ZP.focus);Zip.kXe(6,ZP.zp6,ZP.zp61,ZP.pr6,ZP.ci6,ZP.ar6,ZP.ad6,ZP.focus);for(var s=7;s<=ZP.zipmax;s++){Zip.kXe(s,"zip"+s,"zip"+s+"1","pref"+s,"city"+s,"area"+s,"addr"+s,ZP.focus)}};Zip.nQb=function(m,a){if(document.getElementById(m)){var y=document.getElementById(m);var r='keyup';var z='change';if(a==1){Bas.av(y,r,Zip.nRa);Bas.av(y,z,Zip.nRa)}else if(a==2){Bas.av(y,r,Zip.tFa);Bas.av(y,z,Zip.tFa)}else if(a==3){Bas.av(y,r,Zip.rHd);Bas.av(y,z,Zip.rHd)}else if(a==4){Bas.av(y,r,Zip.dKd);Bas.av(y,z,Zip.dKd)}else if(a==5){Bas.av(y,r,Zip.eRa);Bas.av(y,z,Zip.eRa)}else if(a==6){Bas.av(y,r,Zip.yBb);Bas.av(y,z,Zip.yBb)}else if(a==7){Bas.av(y,r,Zip.vYd);Bas.av(y,z,Zip.vYd)}else if(a==8){Bas.av(y,r,Zip.pMa);Bas.av(y,z,Zip.pMa)}else if(a==9){Bas.av(y,r,Zip.rWa);Bas.av(y,z,Zip.rWa)}else if(a==10){Bas.av(y,r,Zip.nRa0);Bas.av(y,z,Zip.nRa0)}else if(a==11){Bas.av(y,r,Zip.nRa1);Bas.av(y,z,Zip.nRa1)}else if(a==12){Bas.av(y,r,Zip.nRa2);Bas.av(y,z,Zip.nRa2)}else if(a==13){Bas.av(y,r,Zip.nRa3);Bas.av(y,z,Zip.nRa3)}else if(a==14){Bas.av(y,r,Zip.nRa4);Bas.av(y,z,Zip.nRa4)}else if(a==15){Bas.av(y,r,Zip.nRa5);Bas.av(y,z,Zip.nRa5)}else if(a==16){Bas.av(y,r,Zip.nRa6);Bas.av(y,z,Zip.nRa6)}else if(a==17){Bas.av(y,r,Zip.nRa7);Bas.av(y,z,Zip.nRa7)}else if(a==18){Bas.av(y,r,Zip.nRa8);Bas.av(y,z,Zip.nRa8)}else if(a==19){Bas.av(y,r,Zip.nRa9);Bas.av(y,z,Zip.nRa9)}else if(a==20){Bas.av(y,r,Zip.tFa0);Bas.av(y,z,Zip.tFa0)}}};Zip.xMd3=function(){Zip.c5(13)};Bas.st=function(t){t.style.imeMode="disabled"};Bas.es=function(n){if(document.getElementById(n)){var b=document.getElementById(n);var u=document.getElementsByTagName("body").item(0);u.removeChild(b)}};Bas.sp=function(k){if(ZP.woo=='1'){}else{var x=k.getAttribute("type").toLowerCase();if(x!="hidden")k.type="tel"}};function Bas(){var ver=1.5}var B=new Bas;Bas.br=function(){ZP.ua=window.navigator.userAgent.toLowerCase();var r;var z=window.navigator.appVersion.toLowerCase();if(ZP.ua.indexOf("msie")>-1){if(z.indexOf("msie 6.")>-1){r="IE6"}else if(z.indexOf("msie 7.")>-1){r="IE7"}else if(z.indexOf("msie 8.")>-1){r="IE8"}else if(z.indexOf("msie 9.")>-1){r="IE9"}else if(z.indexOf("msie 10.")>-1){r="IE10"}else{r="IE"}}else if(ZP.ua.indexOf("trident/7")>-1){r="IE11"}else if(ZP.ua.indexOf("edge")>-1){r="Edge"}else if(ZP.ua.indexOf("firefox")>-1){r="Firefox"}else if(ZP.ua.indexOf("opera")>-1){r="Opera"}else if(ZP.ua.indexOf("chrome")>-1){r="Chrome"}else if(ZP.ua.indexOf("safari")>-1){r="Safari"}else if(ZP.ua.indexOf("gecko")>-1){r="Gecko"}else{r="Unknown"}ZP.bro=r;return r};Bas.er=function(k,y){var c;if(document.getElementById(k)){c=document.getElementById(k)}else{c=document.createElement('div');c.id=k;if(y=="")var y=document.getElementsByTagName("body").item(0);y.appendChild(c)}return c};Bas.th=function(y){return y.replace(/[！-～]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})};Bas.ol=function(n){var k=0;while(n){k+=n.offsetLeft;n=n.offsetParent}return k};Bas.cg=function(f){var b=Bas.zh(f);b=b.replace(/-/g,'');b=b.replace(/\s/g,'');return b};Bas.sc=function(v){if(v.length<14)return false;var s=v.slice(2,-2);var w=s.length;if(w<10)return false;var x=s.substr(1,1);var c=s.substr(-3,1);var b=s.substr(-1,1);var h=s.substr(2,w-6);h=Bas.pr(unescape(h));w=(h.length+65)%100;w=("00"+w.toString(10)).slice(-2);if(x!=w.substr(0,1))return false;if(c!=w.substr(1,1))return false;if(b!=h.split(".").length)return false;if(h!=location.hostname)return false;return true};Bas.zh=function(w){var k="０１２３４５６７８９ー－‐―"+decodeURI("%E2%88%92");var q="0123456789-----";var v="";for(var d=0;d<w.length;d++){var y=w.charAt(d);var x=k.indexOf(y,0);if(x>=0)y=q.charAt(x);v+=y}return v};Bas.av=function(g,w,s){if(g.addEventListener){g.addEventListener(w,s,false);ZP.xlisten="1"}else if(g.attachEvent){g.attachEvent('on'+w,s);ZP.xlisten="2"}};Bas.ot=function(w,g){var k=0;if(g=="")return k;if(typeof jQuery!="undefined"){var f=jQuery("#"+g).offset();k=f.top}else{while(w){k+=w.offsetTop;w=w.offsetParent}}if(document.getElementById(g)){var p=document.getElementById(g);var e=Math.floor((p.offsetHeight-18)/2)-3;if(e>=2){k+=e}}return k};Bas.ca=function(p){if(ZP.debug=="T")alert(p);Bas.es(ZP.elid);var q=document.createElement("script");q.id=ZP.elid;q.setAttribute("type","text/javascript");q.setAttribute("src",p);q.setAttribute("charset","UTF-8");document.body.appendChild(q)};Bas.gi=function(u){var h=u;if(u==""||document.getElementById(u)){}else{var z=document.getElementsByName(u);if(z.length==1&&(z[0].id=="undefined"||z[0].id=="")){h=h.replace(/\[/g,"");h=h.replace(/\]/g,"");z[0].id=h}else if(z.length==1){h=z[0].id}}return h};Bas.pr=function(e){var u=e.replace(/う/g,'');u=u.replace(/あ/g,'');u=u.replace(/い/g,'');u=u.replace(/え/g,'');return u};Bas.fc=function(n){var k=n.value.length;n.focus();if(n.createTextRange){var f=n.createTextRange();f.move('character',k);f.select()}else if(n.setSelectionRange){n.setSelectionRange(k,k)}};Bas.bv=function(x,s,v){if(x.addEventListener){x.addEventListener(s,v,false)}else if(x.attachEvent){x.attachEvent('on'+s,v)}};Bas.cs=function(v){if(v!=""){var g=document.getElementsByClassName(v);if(g.length==1&&!document.getElementById(v)){if(g[0].id=="")g[0].id=v}}};if(window.addEventListener){window.addEventListener('load',Zip.bUc,true)}else if(window.attachEvent){window.attachEvent('onload',Zip.bUc,true)}try{$(document).on('pageinit',function(e){ZP.sphone="1";Zip.bUc()})}catch(e){}