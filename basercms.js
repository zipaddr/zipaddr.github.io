function zipaddr_ownb(){     //basercms用
  var ver="1.8";
	let ans= new Array();
	ans[0]= zipaddr_ownpm_name("zip");
	ans[1]= zipaddr_ownpm_name("address_1");
	ans[2]= zipaddr_ownpm_name("address_2");
	ans[9]= zipaddr_ownpm_name("address_3");
  ZP.pm[1]={"zip":"MailMessageZip", "zip1":"MailMessageZip1", "pref":"MailMessageAddress1", "city":"", "area":"", "addr":"MailMessageAddress2", "focus":"MailMessageAddress2"};
  ZP.pm[2]={"zip":"MessageZip", "zip1":"MessageZip1", "pref":"MessageAddress1", "city":"", "area":"", "addr":"MessageAddress2", "focus":"MessageAddress2"};
  ZP.pm[3]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","area":"area3","addr":"addr3","focus":"addr3"};
  ZP.pm[4]={"zip":"zip4","zip1":"zip41","pref":"pref4","city":"city4","area":"area4","addr":"addr4","focus":"addr4"};
  ZP.pm[5]={"zip":"zip5","zip1":"zip51","pref":"pref5","city":"city5","area":"area5","addr":"addr5","focus":"addr5"};
  ZP.pm[6]={"zip":ans[0],"zip1":"",     "pref":ans[1], "city":"",     "area":"",     "addr":ans[2], "focus":ans[9]};
//ZP.pm[7]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村","area":"地区","addr":"番地","focus":"focus"};

  ZP.basercms= "1";
  ZP.zipmax= ZP.pm.length;
  ZP.sl= "都道府県";
  ZP.holder="住所自動入力";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
function zipaddr_ownpm_name(nam){
	let ans= "";
	if( nam != "" ){
		const elm= document.getElementsByName(nam);
		if( elm.length==1 ){
			if( elm[0].id=="" ) elm[0].id=nam;
			ans= elm[0].id;
	}	}
	return ans;
}
