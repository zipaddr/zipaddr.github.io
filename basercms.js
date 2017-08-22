function zipaddr_ownb(){
  var ver="1.0";
  D.pm[1]={"zip":"zip", "zip1":"zip1", "pref":"pref", "city":"city", "area":"area", "addr":"addr", "focus":"addr"};
  D.pm[2]={"zip":"zip2","zip1":"zip21","pref":"pref2","city":"city2","area":"area2","addr":"addr2","focus":"addr2"};
  D.pm[3]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","area":"area3","addr":"addr3","focus":"addr3"};
  D.pm[4]={"zip":"zip4","zip1":"zip41","pref":"pref4","city":"city4","area":"area4","addr":"addr4","focus":"addr4"};
  D.pm[5]={"zip":"zip5","zip1":"zip51","pref":"pref5","city":"city5","area":"area5","addr":"addr5","focus":"addr5"};
//標準のお問い合わせ
  D.pm[6]={"zip":"data[MailMessage][zip]", "zip1":"", "pref":"data[MailMessage][address_1]", "city":"", "area":"", "addr":"data[MailMessage][address_2]", "focus":"data[MailMessage][address_2]"};
//D.pm[7]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村","area":"地区","addr":"番地","focus":"focus"};

  D.sl=  "都道府県";
  D.zipmax= D.pm.length;
  D.basercms="1";
  D.holder="住所自動入力";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
