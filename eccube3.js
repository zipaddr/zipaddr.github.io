function zipaddr_ownb(){var ver="3.6";
  var zp= "zip01";
  var z2= "zip02";
  var st= "pref";
  var ad= "addr01";
  var fc= "addr02";
//
  var k2= "order_zip_";
  var k3= "order_address_";
  var k4= "admin_customer_zip_";
  var k5= "admin_customer_address_";
  ZP.pm[1]={"zip":   zp, "zip1":   z2,  "pref":   st,  "city":"",     "area":   ad,  "addr":   fc,  "focus":   fc};
  ZP.pm[2]={"zip":k2+zp, "zip1":k2+z2,  "pref":k3+st,  "city":"",     "area":k3+ad,  "addr":k3+fc,  "focus":k3+fc};
  ZP.pm[3]={"zip":k4+zp, "zip1":k4+z2,  "pref":k5+st,  "city":"",     "area":k5+ad,  "addr":k5+fc,  "focus":k5+fc};
  ZP.pm[4]={"zip":"zip", "zip1":"zip1", "pref":"pref", "city":"city", "area":"area", "addr":"addr", "focus":"addr"};
  ZP.pm[5]={"zip":"zip2","zip1":"zip21","pref":"pref2","city":"city2","area":"area2","addr":"addr2","focus":"addr2"};
  ZP.pm[6]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","area":"area3","addr":"addr3","focus":"addr3"};
//ZP.pm[7]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村","area":"地区","addr":"番地","focus":"focus"};

  ZP.sfon="16";      // sPhone
  ZP.shig="1.5";
  ZP.top=  21;       // 位置
  ZP.sl=  "都道府県を選択";
  ZP.zipmax= ZP.pm.length;
  ZP.eccube="1";
  ZP.sysid= "eccube";
  ZP.holder="住所自動入力";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
