function zipaddr_ownb(){var ver="1.3";
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
  D.pm[1]={"zip":   zp, "zip1":   z2,  "pref":   st,  "city":"",     "addr":   ad,  "focus":   fc};
  D.pm[2]={"zip":k2+zp, "zip1":k2+z2,  "pref":k3+st,  "city":"",     "addr":k3+ad,  "focus":k3+fc};
  D.pm[3]={"zip":k4+zp, "zip1":k4+z2,  "pref":k5+st,  "city":"",     "addr":k5+ad,  "focus":k5+fc};
  D.pm[4]={"zip":"zip", "zip1":"zip1", "pref":"pref", "city":"city", "addr":"addr", "focus":"addr"};
  D.pm[5]={"zip":"zip2","zip1":"zip21","pref":"pref2","city":"city2","addr":"addr2","focus":"addr2"};
  D.pm[6]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","addr":"addr3","focus":"addr3"};
//D.pm[7]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村", "addr":"住所","focus":"focus"};

  D.sfon="16";      // sPhone
  D.shig="1.5";
  D.top=  21;       // 位置
  D.sl=  "都道府県を選択";
  D.zipmax= D.pm.length;
  D.eccube="1";
  D.sysid= "eccube";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//変更する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
