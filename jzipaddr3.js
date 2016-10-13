/* jzipaddr3 v2.3  by http://zipaddr.com/ */

var zipa_z= new Array();
var zipa_q= new Array();
var zipa_p= new Array();
var zipa_c= new Array();
var zipa_a= new Array();
var zipa_foc= "";   // フォーカスのid名
var zipa_min= "7";  // ガイダンス表示桁数(5-7)
var zipa_dli= "-";  // 郵番の区切り文字
for( var zipa_i=1;zipa_i<=6;zipa_i++ ) {
	var zipa_x= (zipa_i==1) ? "" : String(zipa_i);
	zipa_z[zipa_i]= "zip" +zipa_x;
	zipa_q[zipa_i]= "zip" +zipa_x+"1";
	zipa_p[zipa_i]= "pref"+zipa_x;
	zipa_c[zipa_i]= "city"+zipa_x;
	zipa_a[zipa_i]= "addr"+zipa_x;
}
function zipaddr_ownb(){
	D.zp6=zipa_z[6]; D.zp61=zipa_q[6]; D.pr6=zipa_p[6]; D.ci6=zipa_c[6]; D.ad6=zipa_a[6];
	D.zp5=zipa_z[5]; D.zp51=zipa_q[5]; D.pr5=zipa_p[5]; D.ci5=zipa_c[5]; D.ad5=zipa_a[5];
	D.zp4=zipa_z[4]; D.zp41=zipa_q[4]; D.pr4=zipa_p[4]; D.ci4=zipa_c[4]; D.ad4=zipa_a[4];
	D.zp3=zipa_z[3]; D.zp31=zipa_q[3]; D.pr3=zipa_p[3]; D.ci3=zipa_c[3]; D.ad3=zipa_a[3];
	D.zp2=zipa_z[2]; D.zp21=zipa_q[2]; D.pr2=zipa_p[2]; D.ci2=zipa_c[2]; D.ad2=zipa_a[2];
	D.zp= zipa_z[1]; D.zp1= zipa_q[1]; D.pr= zipa_p[1]; D.ci= zipa_c[1]; D.ad= zipa_a[1];
	D.focus= zipa_foc;
	D.min= zipa_min;
	D.dli= zipa_dli;
};
(function($){
	$.fn.zipaddr6=function(opt){zipaddr_call(opt,6);return(this);}
	$.fn.zipaddr5=function(opt){zipaddr_call(opt,5);return(this);}
	$.fn.zipaddr4=function(opt){zipaddr_call(opt,4);return(this);}
	$.fn.zipaddr3=function(opt){zipaddr_call(opt,3);return(this);}
	$.fn.zipaddr2=function(opt){zipaddr_call(opt,2);return(this);}
	$.fn.zipaddr= function(opt){zipaddr_call(opt,1);return(this);}
	zipaddr_call=function(s,n){
		if(typeof s.zip  !="undefined") zipa_z[n]=s.zip;
		if(typeof s.zip1 !="undefined") zipa_q[n]=s.zip1;
		if(typeof s.pref !="undefined") zipa_p[n]=s.pref;
		if(typeof s.city !="undefined") zipa_c[n]=s.city;
		if(typeof s.addr !="undefined") zipa_a[n]=s.addr;
		if(typeof s.focus!="undefined") zipa_foc= s.focus;
		if(typeof s.min  !="undefined") {
			if("5" <= s.min && s.min <= "7") zipa_min= s.min;
		    else zipa_min= "7";
		}
		if(typeof s.dli  !="undefined") {
			if(s.dli=="" || s.dli=="-") zipa_dli= s.dli;
		    else zipa_dli= "-";
		}
		return(this);
	}
})(jQuery);
