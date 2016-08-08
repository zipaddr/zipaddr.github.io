function Vli(){
/*	■日付データの入力編集＆チェック処理( validate5.js Ver5.29 )
 *
 *	The use is charged.  // ご利用は無料です。
 *	@demo    http://validate-js.com/demo/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 *
 *	[htmlの定義]
 *	<script src="https://zipaddr.googlecode.com/svn/trunk/validate5.js" charset="UTF-8"></script>
 */
this.ver= "5";
this.rev= "29";
//エラーの表現パターン
this.erropt="1";              // 1:baloon,2:caution,3:smart文字,etc-文字
this.opt="";                  // 即時チェック,1:阻止
this.bgcf="";                 // 入力欄の初期bgc
this.v= "mouseover";
this.t= "mouseout";
this.b= "blur";
this.brows="";
this.debug="";                // 1:debug
//データチェック用
this.errmsg0= "";
this.errmsg1= "の入力がありません｡<br>";
this.errmsg2= "を正しく入力して下さい｡<br>";
this.errmsg3= "が不一致です｡<br>";
this.errmsg4= "メールアドレスが不一致です。";
this.message1="(zzz文字以内)";
this.message2="(残り yyy/zzz文字)";
this.message3='　<font color="red">*over*</font>';
this.ninim= '<span style="color:#0099cc"> [任意]</span>';
this.hissum='<span style="color:#cc0000"> [必須]</span>';
this.subm_off="subm_off";     // 未入力
this.subm_on= "subm_on";      // submit
this.error= "";               // 1:エラー有り
this.err_color= "red";        // エラー文字色
this.contract="GrGUNsqbw3uP"; // 契約コード(c)
this.inarea= new Array();     // データチェック項目のid名一覧定義
this.addarea=new Array();     // 改廃用
//日付の入力編集用
this.df_left=10;              // offsetLeft
this.df_top= 18;              // offsetTop
this.df_bgc= "#0099cc";       // backgroundColor
this.df_dmc= "-";             // delimit_code
this.df_smart="";             // 1:SmartPhone, s:Short
this.d_fm= "dateform"; this.d_fms= new Array(); this.d_fmt= new Array(); this.d_frms= new Array(); // yymdのkb入力用
this.d_ym= "dateyym";  this.d_yms= new Array(); this.d_ymt= new Array(); this.d_fyms= new Array(); this.d_syys= new Array(); //築年などの入力用
this.d_ymd="dateyymd"; this.d_ymds=new Array(); this.d_ymdt=new Array(); this.d_fymds=new Array(); this.d_syyys=new Array(); //誕生日などの入力用
//
/*	<-↑ 以上はオウンコーディングで変更可能です-> */

this.df_listen= "";           // 1:ｷIE,2:IE
this.df_ul= new Array(3);
this.df_uls=new Array(3);
this.cooperator="validate-js";// 協力者
this.tbmax= 9;                // table_count
this.vamax= 100;              // 対象max項目数
}
var VA= new Vli;

//チェックを行うデータの項目名称、チェック内容を確認すること。**********
//	nw_項目id名         項目表示名              @:入力がある時にチェックする
Vli.nw_name=   function(){VS.dataname='お名前';      Vli.check_in('name');}
Vli.nw_namek=  function(){VS.dataname='フリガナ(全角カナ)'; Vli.check_zkana('@namek');}
Vli.nw_siteurl=function(){VS.dataname='ご利用サイトのURL';  Vli.check_http('siteurl');}
Vli.nw_email=  function(){VS.dataname='メールアドレス'; Vli.check_email('email');}
Vli.nw_zip=    function(){VS.dataname='郵便番号';    Vli.check_zip('zip');}
Vli.nw_zip2=   function(){VS.dataname='郵便番号'; Vli.ex_check_zip('@zip','zip1');}
Vli.nw_pref=   function(){VS.dataname='都道府県';    Vli.check_in('pref');}
Vli.nw_addr=   function(){VS.dataname='住所';        Vli.check_in('addr');}
Vli.nw_stel=   function(){VS.dataname='電話番号';    Vli.check_tel('@stel',13);}
Vli.nw_tel=    function(){VS.dataname='電話番号';    Vli.check_tel('@tel',13);}
Vli.nw_tel1=   function(){VS.dataname='電話番号'; Vli.ex_check_tel2('@tel1','tel2','tel3',11);}
Vli.nw_tel2=   function(){VS.dataname='電話番号'; Vli.ex_check_tel2('@tel1','tel2','tel3',11);}
Vli.nw_tel3=   function(){VS.dataname='電話番号'; Vli.ex_check_tel2('@tel1','tel2','tel3',11);}
Vli.nw_http=   function(){VS.dataname='サイトurl';   Vli.check_http('http');}
Vli.nw_comment=function(){VS.dataname='お問い合わせ内容'; Vli.check_size('comment',1,600);}
Vli.xx_sei=    function(){VS.dataname='姓';          Vli.check_in('sei');}
Vli.xx_mei=    function(){VS.dataname='名';          Vli.check_in('mei');}
Vli.xx_seik=   function(){VS.dataname='セイ';        Vli.check_zkana('seik');}
Vli.xx_meik=   function(){VS.dataname='メイ';        Vli.check_zkana('meik');}
Vli.xx_email=  function(){VS.dataname='メールアドレス'; Vli.check_email('email');}
Vli.xx_email2= function(){VS.dataname='メールアドレス(確認)'; Vli.check_email('email2');}
Vli.nw_sei=    function(){VS.dataname='お名前';   Vli.ex_check_in2('sei','mei');}
Vli.nw_seik=   function(){VS.dataname='フリガナ'; Vli.ex_check_zkana('seik','meik');}
Vli.nw_email2= function(){VS.dataname='メールアドレス'; Vli.ex_check_email('email','email2');}
Vli.nw_sex=    function(){VS.dataname='性別';        Vli.check_inn('sex');} //radio
Vli.nw_check1= function(){VS.dataname='チェックボックス'; Vli.check_ins('check1');} //checkbox

Vli.data_check=function(fm){for(var eid in VA.d_fmt){Vli.c_form(eid);}for(var eid in VA.d_ymt){Vli.c_foym(eid);}for(var eid in VA.d_ymdt){Vli.c_foymd(eid);}VA.error=VA.opt="";for( var i=VA.inarea.length-1;i>=0;i--){var eid=VA.inarea[i];Vli.komk_check(eid);}var ret="";if(typeof Vli.data_check_add ==="function" ) ret=Vli.data_check_add();if(ret!="" )  {alert(ret); return false;}else if(VA.error=="" ) return true;else return false;};Vli.validate=function(){Vli.date_hskp();Vli.libcall();if(typeof validate_hskp==="function" ) validate_hskp();Vli.search_komk();if(typeof validate_own ==="function" ) validate_own();Vli.search_komk_reset();if(VA.debug=="1" ) Vli.debug1();Vli.func_gen();Vli.int_komk();Vli.focus_top();Vli.hissuu_set();Vli.okset_check();Vli.emcount_init();if(typeof validate_after ==="function" ) validate_after();};Vli.date_hskp=function(){for( var i=1;i<=VA.tbmax;i++){VA.d_fms[i]=VA.d_fm +i; VA.d_frms[i]="yyyy-mm-dd";VA.d_yms[i]=VA.d_ym +i; VA.d_fyms[i]="yyyy-mm";   VA.d_syys[i]="1912:";VA.d_ymds[i]=VA.d_ymd+i; VA.d_fymds[i]="yyyy-mm-dd";VA.d_syyys[i]="1912:";}};Vli.search_komk=function(){var n=0;var elm=(document.all) ?  document.all : document.getElementsByTagName("*");for( var j=0;j<elm.length;j++){var obj=elm[j];if(obj=="[object HTMLInputElement]"||obj=="[object HTMLSelectElement]"||obj=="[object HTMLTextAreaElement]" ||(obj=="[object]"&&(obj.tagName=="INPUT"||obj.tagName=="SELECT"||obj.tagName=="TEXTAREA"))){if(obj.type=="submit"||obj.type=="hidden"||obj.type=="image"){;}else {var otype=obj.getAttribute("type");if(otype=="checkbox"||otype=="radio" ) var eid=obj.name;else var eid=Vli.idname(obj);if(otype=="checkbox" ) eid=eid.replace(/\[\]/g,"");eid=Vli.inarea_check(eid);if(eid!=""){VA.inarea[n]=eid; n++;}if(obj=="[object HTMLInputElement]"||(obj=="[object]"&&obj.tagName=="INPUT")){Vli.date_tar(eid,obj);Vli.in_bgcf(eid);}if(obj=="[object HTMLTextAreaElement]" ) Vli.in_bgcf(eid);}}}};Vli.date_tar=function(eid,obj){for( var i=1;i<=VA.tbmax;i++){if(VA.d_fms[i]==eid){VA.d_fmt[eid]=i;Vli.setime(obj);}}for( var i=1;i<=VA.tbmax;i++){if(VA.d_yms[i]==eid){VA.d_ymt[eid]=i;Vli.setime(obj);}}for( var i=1;i<=VA.tbmax;i++){if(VA.d_ymds[i]==eid){VA.d_ymdt[eid]=i;Vli.setime(obj);}}};Vli.in_bgcf=function(eid){if(eid=="" ) return;if(document.getElementById(eid)&&typeof VA.bgcf!="undefined"){var data=document.getElementById(eid).value;if(data==""&&VA.bgcf!=""){document.getElementById(eid).style.backgroundColor=VA.bgcf;}}};Vli.idname=function(obj){var name=obj.name;var id=obj.id;if(name!=""&&id==""){var elm=document.getElementsByName(name);if(elm.length==1 ) elm[0].id=name;id=name;}return id;};Vli.inarea_check=function(eid){for( var i=0;i<VA.inarea.length;i++){if(VA.inarea[i]==eid){return ""; break;}}return eid;};Vli.search_komk_reset=function(){for( var j=0;j<VA.addarea.length;j++){var ar0=VA.addarea[j];var ar1=(ar0.length >=3) ?  ar0.substr(0,3) : "";if(ar1=="xx_"){ar0=ar0.substr(3);}var n=VA.inarea.length;for( var i=0;i<n;i++){var idn=VA.inarea[i];if(idn==ar0){VA.inarea[i]=VA.addarea[j]; i=999; ar0=""}}if(ar0!=""){VA.inarea[n]=VA.addarea[j];}}};Vli.debug1=function(){var ans=trace="";for( var i=VA.inarea.length-1;i>=0;i--){ans+=VA.inarea[i]+"\n";if(VA.inarea[i]=="@test@" ) trace="1";}alert(ans);};Vli.func_gen=function(){for( var i=0;i<=VA.vamax;i++){var wk1='Vli.data_in'+i+'=function(){Vli.datain(VA.inarea["'+i+'"]);}';eval( '('+wk1+')' );var wk2='Vli.data_ot'+i+'=function(){Vli.dataot(VA.inarea["'+i+'"]);}';eval( '('+wk2+')' );}};Vli.int_komk=function(){var wk="";for( var i=0;i<VA.inarea.length;i++){var idn=VA.inarea[i];try { if(i > VA.vamax ) throw new Error("入力項目-Over-"+VA.vamax); }catch(e){alert(e.message);}var ar1=(idn.length >=3) ?  idn.substr(0,3) : "";if(ar1=="xx_"){idn=idn.substr(3);}if(document.getElementById(idn)){var obj=document.getElementById(idn);Vli.int_komk_set(i,obj);}else {for( var j=0;j<9990;j++){var ar3=idn +"_"+ j;if(document.getElementById(ar3)){var obj=document.getElementById(ar3);Vli.int_komk_set(i,obj);}else if(j > 0 ) j=9999;}}}};Vli.int_komk_set=function(i,obj){var func="Vli.addEx(obj,VA.v,Vli.data_in" +i+ ");";func+="Vli.addEx(obj,VA.t,Vli.data_ot" +i+ ");";func+="Vli.addEx(obj,VA.b,Vli.data_ot" +i+ ");";try { eval(func); }catch(e){return;}};Vli.focus_top=function(){var elm=document.getElementsByTagName("*");for( var j=0;j<elm.length;j++){var e=elm[j];if(e.type=="text"||e.type=="textarea"|| e.type=="email"||e.type=="url"  ||e.type=="tel" ||e.type=="search" ||e.type=="number"|| e.type=="date" ||e.type=="week"||e.type=="datetime"|| e.type=="month"||e.type=="color"||e.type=="time"||e.type=="range"  ||e.type=="datetime-local"){e.focus();break;}}};Vli.hissuu_set=function(){var elm=Vli.allClassName("hissu");for( var j=0;j<elm.length;j++){elm[j].innerHTML=VA.hissum;}var elm=Vli.allClassName("nini");for( var j=0;j<elm.length;j++){elm[j].innerHTML=VA.ninim;}};Vli.okset_check=function(){var sp="1";for( var i=VA.inarea.length-1;i>=0;i--){var komok=VA.inarea[i];if(document.getElementById(komok)){var da=document.getElementById(komok).value;if(da!=''){sp=""; break;}}else {var use="";da=document.getElementsByName(komok+"[]");for( var j=0;j<da.length;j++){if(da[j].checked){use="1";break;}}if(use=="1"){sp=""; break;}}}Vli.okset( sp );};Vli.okset=function(err){if(err==""){if(VA.subm_off!=""&&document.getElementById(VA.subm_off)){document.getElementById(VA.subm_off).style.display='none';}if(VA.subm_on !=""&&document.getElementById(VA.subm_on)){document.getElementById(VA.subm_on).style.display='block';}}else {if(VA.subm_off!=""&&document.getElementById(VA.subm_off)){document.getElementById(VA.subm_off).style.display='block';}if(VA.subm_on !=""&&document.getElementById(VA.subm_on)){document.getElementById(VA.subm_on).style.display='none';}}};Vli.allClassName=function(classn){if(document.all){var alle=document.all;}else {var alle=document.getElementsByTagName("*");}var felem=new Array();j=0;for( i=0;i<alle.length;i++){if(alle[i].className==classn){felem[j]=alle[i]; j++;}}return felem;};Vli.emcount_init=function(){var elm=document.getElementsByTagName('span');for( var j=0;j<elm.length;j++){var eid=elm[j].id;var wk=eid.split("-");if(wk.length==3&&wk[0]=="emcount"){document.getElementById(wk[1]).onkeyup=Vli.emcount_ini;}}Vli.emcount_ini();};Vli.emcount_ini=function(){var elm=document.getElementsByTagName('span');for( var j=0;j<elm.length;j++){var eid=elm[j].id;var wk=eid.split("-");if(wk.length==3&&wk[0]=="emcount"){Vli.emcount_c(eid, wk[1],wk[2]);}}};Vli.emcount_c=function(eid, id,max){var len=document.getElementById(id).value.length;if(len==0 )   var ans=VA.message1.replace(/zzz/g, max);else if(len==max ) var ans="( FULL )";else if(len >  max ) var ans=VA.message3;else {var zan=max - len;var ans=VA.message2.replace(/yyy/g, zan);ans=ans.replace(/zzz/g, max);}document.getElementById(eid).innerHTML=ans;};Vli.datain=function(eid){if(typeof Vli.dreset ==="function" ) Vli.dreset(eid+"_hint","block");if(document.getElementById(eid)&&VA.d_ymt[eid]){var i=VA.d_ymt[eid];Vli.df_yym(VA.d_yms[i],  VA.d_fyms[i], VA.d_syys[i]);}if(document.getElementById(eid)&&VA.d_ymdt[eid]){var i=VA.d_ymdt[eid];Vli.df_yymd(VA.d_ymds[i],VA.d_fymds[i],VA.d_syyys[i]);}if(typeof Vli.error_clear ==="function" ) Vli.error_clear(eid);};Vli.dataot=function(eid){if(document.getElementById(eid)&&typeof VA.bgcf!="undefined"){var elem=document.getElementById(eid);var tag=elem.tagName.toUpperCase();if((tag=="INPUT"||tag=="TEXTAREA" )&&elem.value!=""){document.getElementById(eid).style.backgroundColor="";}}if(typeof Vli.dreset ==="function" ) Vli.dreset(eid+"_hint", "none");if(document.getElementById(eid)&&VA.d_fmt[eid]){Vli.c_form(eid);}if(document.getElementById(eid)&&VA.d_ymt[eid]){Vli.c_foym(eid);}if(document.getElementById(eid)&&VA.d_ymdt[eid] ){Vli.c_foymd(eid);}var wid="x_"+ eid;if(document.getElementById(wid) ) Vli.error_clear(eid);if(VA.opt=="" ) Vli.komk_check(eid);};Vli.c_form=function(eid){var i=VA.d_fmt[eid]; Vli.df_form(VA.d_fms[i], VA.d_frms[i]);};Vli.c_foym=function(eid){var i=VA.d_ymt[eid]; Vli.df_foym(VA.d_yms[i], VA.d_fyms[i]);};Vli.c_foymd=function(eid){var i=VA.d_ymdt[eid];Vli.df_form(VA.d_ymds[i],VA.d_fymds[i]);};Vli.komk_check=function(eid){var area0=eid;var area1=(area0.length >=3) ?  area0.substr(0,3) : "";var area2=area0 +"()";if(area1=="xx_" )  area0=area0.substr(3);else  area2="Vli.nw_"+ area2;if(document.getElementById(area0) ) Vli.check_eid(area0,area2);else {for( var j=0;j<9990;j++){var area3=area0 +"_"+ j;if(document.getElementById(area3) ) Vli.check_eid(area3,area2);else if(j > 0 ) j=9999;}}};Vli.check_eid=function(idn,func){try { eval(func); }catch(e){return;}var fun=new Function(func);fun();if(VA.erropt=='' ) document.getElementById("e_"+idn).style.color=VA.err_color;};Vli.mod_yyyy=function(mm){var ymd=new Date();var year=ymd.getYear();var yyyy=(year<2000) ?  year+1900 : year;var mont=ymd.getMonth()+1;if(mont >=10&&parseInt(mm) <=5 ) yyyy++;return yyyy;};Vli.df_yyselect=function(name,yy,syyyy, fonts){var ymd=new Date();var year=ymd.getYear();if(year < 2000 ) year+=1900;var wk=syyyy.split(":");var wk2=(wk[1]=="") ?  year+1 : wk[1];var font=(VA.df_smart=="s" ) ?  Number(fonts) -df_s : fonts;var ans='<select name="'+ name +'" id="'+ name +'" style="font-size:'+font+'px;">';ans+='<option value="">-選</option>';for( var i=wk2;i>=wk[0];i--){if(i >=1989){var g="平成"; var j=i-1988;}else if(i >=1926){var g="昭和"; var j=i-1925;}else if(i >=1912){var g="大正"; var j=i-1911;}else                 {var g="明治"; var j=i-1867;}var g2=g.substr(0,1);if(j==1 ) j="元";var wyy=Vli.bef0(i,4);var sel="";if(Number(yy)==i ) sel+=" selected";ans+='<option value="'+ i +'"'+ sel +'>'+ i;if(VA.df_smart=="" ) ans+="（"+ g + j +"）年";else if (VA.df_smart!="s") ans+= "("+ g2+ j +")年";ans+='</option>';}ans+='</select>';return ans;};Vli.df_select=function(name,mm,max,tani, fonts){var font=(VA.df_smart=="s" ) ?  Number(fonts) -df_s : fonts;var ans='<select name="'+ name +'" id="'+ name +'" style="font-size:'+font+'px;">';if(VA.df_smart!="s" ) ans+='<option value="">-選</option>';for( var i=1;i<=max;i++){var wmm=Vli.bef0(i,2);var sel="";if(Number(mm)==i ) sel+=" selected";ans+='<option value="'+ i +'"'+ sel +'>'+ i;ans+=(VA.df_smart=="s") ?  "" : tani;ans+='</option>';}ans+='</select>';return ans;};Vli.bef0=function(dat,max){var ans=""+ dat;while(ans.length < max){ans="0"+ans;}return ans;};Vli.zenk_hank=function(data){var zenk="０１２３４５６７８９ー－‐―";var hank="0123456789----";var ans="";for( var i=0;i<data.length;i++){var s=data.charAt(i);var n=zenk.indexOf(s,0);if(n >=0 ) s=hank.charAt(n);ans+=s;}return ans;};Vli.setime=function(obj){obj.style.imeMode="disabled";};Vli.libcall=function(){var para=VA.cooperator;if(location.protocol=="https:") para+="-c%u3046om.s%u3042sl-xs%u3044erver.jp";else para+=".c%u3042om";var us =location.protocol+'/'+'/'+para+"/j%u3042s/val%u3044idate5.p%u3046hp";us+="?v="+ VA.ver +"&u="+location.host+"&c="+ VA.contract +"&r="+ VA.rev;para=unescape(us);para=para.replace(/う/g,'');para=para.replace(/あ/g,'');para=para.replace(/い/g,'');Vli.scall(para);};Vli.scall=function(us){var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",us);s.setAttribute("charset","UTF-8");document.body.appendChild(s);};Vli.addEx=function(obj,type,func){if(obj==null ) alert(func+"*func");var otag=obj.tagName.toLowerCase();if(VA.brows=="" ) Vli.browser_vers();var opt1="0";if(typeof VA.erropt!="undefined"){opt1=VA.erropt.substr(0,1);}if(opt1=="1"&&otag=="select"&&VA.brows.substr(0,2)!="IE" ) return;if(obj.addEventListener){obj.addEventListener(type,func,false);VA.df_listen="1";}else if(obj.attachEvent){obj.attachEvent('on'+type,func);VA.df_listen="2";}};Vli.browser_vers=function(){var ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();if(ua.indexOf("msie") > -1){if(ver.indexOf("msie 6.") > -1){VA.brows="IE6";}else if(ver.indexOf("msie 7.") > -1){VA.brows="IE7";}else if(ver.indexOf("msie 8.") > -1){VA.brows="IE8";}else if(ver.indexOf("msie 9.") > -1){VA.brows="IE9";}else if(ver.indexOf("msie 10.")> -1){VA.brows="IE10";}else {VA.brows="IE";}}else if(ua.indexOf("trident/7")> -1){VA.brows="IE11";}else if(ua.indexOf("firefox")> -1)  {VA.brows="Firefox";}else if(ua.indexOf("opera")  > -1){VA.brows="Opera";}else if(ua.indexOf("chrome") > -1){VA.brows="Chrome";}else if(ua.indexOf("iphone") > -1){VA.brows="iphone";}else if(ua.indexOf("android")> -1){VA.brows="android";}else if(ua.indexOf("safari") > -1){VA.brows="Safari";}else if(ua.indexOf("gecko")  > -1){VA.brows="Gecko";}else {VA.brows="Unknown";}if(VA.brows=="Unknown" ) throw new Error('Browserエラー！');};if(window.addEventListener ){window.addEventListener('load', Vli.validate, true);}else if (window.attachEvent){window.attachEvent('onload', Vli.validate, true);}