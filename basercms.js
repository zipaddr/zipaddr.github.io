function zipaddr_ownb(){
  var ver="1.4";
//標準のお問い合わせ
  D.pm[1]={"zip":"MailMessageZip", "zip1":"MailMessageZip1", "pref":"MailMessageAddress1", "city":"", "area":"", "addr":"MailMessageAddress2", "focus":"MailMessageAddress2"};
  D.pm[2]={"zip":"MessageZip", "zip1":"MessageZip1", "pref":"MessageAddress1", "city":"", "area":"", "addr":"MessageAddress2", "focus":"MessageAddress2"};
  D.pm[3]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","area":"area3","addr":"addr3","focus":"addr3"};
  D.pm[4]={"zip":"zip4","zip1":"zip41","pref":"pref4","city":"city4","area":"area4","addr":"addr4","focus":"addr4"};
  D.pm[5]={"zip":"zip5","zip1":"zip51","pref":"pref5","city":"city5","area":"area5","addr":"addr5","focus":"addr5"};
  D.pm[6]={"zip":"zip6","zip1":"zip61","pref":"pref6","city":"city6","area":"area6","addr":"addr6","focus":"addr6"};
//D.pm[7]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村","area":"地区","addr":"番地","focus":"focus"};

  D.basercms= "1";
  D.zipmax= D.pm.length;
  D.sl= "都道府県";
  D.holder="住所自動入力";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
