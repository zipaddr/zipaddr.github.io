function zipaddr_ownb(){
  var ver="4.0";
  var zp= "_postal_code";     //郵便番号
//var z2= "_zip02";
  var st= "_address_pref";    //都道府県
  var ad= "_address_addr01";  //市区町村＋地域
  var fc= "_address_addr02";  //番地
//フロント画面
  var k = "edit";             //ご注文手続き
  var k1= "contact";          //お問い合わせ
  var k2= "entry";            //新規会員登録
  var k3= "shopping_shipping";//お届け先の追加/変更
  var k4= "nonmember";        //お客様情報の入力
  var k5= "member";
//管理画面
  var k6= "shop_master";      //店舗情報
  var k7= "order";            //受注登録
  var k8= "order_Shipping";   //出荷情報
  var k9= "admin_customer";   //会員登録
  D.pm[1]={"zip":k1+zp, "zip1":"", "pref":k1+st, "city":"", "area":k1+ad, "addr":k1+fc, "focus":k1+fc};
  D.pm[2]={"zip":k2+zp, "zip1":"", "pref":k2+st, "city":"", "area":k2+ad, "addr":k2+fc, "focus":k2+fc};
  D.pm[3]={"zip":k3+zp, "zip1":"", "pref":k3+st, "city":"", "area":k3+ad, "addr":k3+fc, "focus":k3+fc};
  D.pm[4]={"zip":k4+zp, "zip1":"", "pref":k4+st, "city":"", "area":k4+ad, "addr":k4+fc, "focus":k4+fc};
  D.pm[5]={"zip":k5+zp, "zip1":"", "pref":k5+st, "city":"", "area":k5+ad, "addr":k5+fc, "focus":k5+fc};
  D.pm[6]={"zip":k6+zp, "zip1":"", "pref":k6+st, "city":"", "area":k6+ad, "addr":k6+fc, "focus":k6+fc};
  D.pm[7]={"zip":k7+zp, "zip1":"", "pref":k7+st, "city":"", "area":k7+ad, "addr":k7+fc, "focus":k7+fc};
  D.pm[8]={"zip":k8+zp, "zip1":"", "pref":k8+st, "city":"", "area":k8+ad, "addr":k8+fc, "focus":k8+fc};
  D.pm[9]={"zip":k9+zp, "zip1":"", "pref":k9+st, "city":"", "area":k9+ad, "addr":k9+fc, "focus":k9+fc};
//D.pm[10]={"zip":k+"5","zip1":"", "pref":k+"6", "city":"", "area":k+"7", "addr":k+"8", "focus":k+"8"};
  D.top=  21;            // 位置
  D.sl=  "都道府県を選択";
  D.zipmax= D.pm.length;
  D.eccube="1";
  D.sysid= "eccube";
  D.holder="住所自動入力";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
