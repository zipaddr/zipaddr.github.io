function zipaddr_ownb(){
  var ver="1.2";
  var zp= "zipcode]";
  var st= "state]";
  var ci= "city]";
  var ad= "address]";
  var k1= "user_data[b_";
  var k2= "user_data[s_";
  var k3= "company_data[";
  var k4= "supplier_data[";
  var k5= "update[";
  var k6= "gift_cert_data[";
  var k11="elm_";
  var k51="field__company_state_";
  var k7z="field__default_zipcode_18";
  var k7s="field__default_state_21";
  var k7c="field__default_city_19";
  var k7a="field__default_address_17";
  D.pm[1]={"zip":k1+zp,   "zip1":"", "pref":k11+"24", "city":"", "addr":k1+ci,    "focus":k1+ad   };//請求先
  D.pm[2]={"zip":k2+zp,   "zip1":"", "pref":k11+"25", "city":"", "addr":k2+ci,    "focus":k2+ad   };//配送先
  D.pm[3]={"zip":k3+zp,   "zip1":"", "pref":k3+st,    "city":"", "addr":k3+ci,    "focus":k3+ad   };
  D.pm[4]={"zip":k4+zp,   "zip1":"", "pref":k4+st,    "city":"", "addr":k4+ci,    "focus":k4+ad   };
  D.pm[5]={"zip":k5+"33]","zip1":"", "pref":k51+"25", "city":"", "addr":k5+"26]", "focus":k5+"27]"};//ショ運
  D.pm[6]={"zip":k6+zp,   "zip1":"", "pref":k6+st,    "city":"", "addr":k6+ci,    "focus":k6+ad   };//gift
  D.pm[7]={"zip":k7z,     "zip1":"", "pref":k7s,      "city":"", "addr":k7c,      "focus":k7a};     //全般
//拡張方法（id名で指定して下さい）
  D.pm[8]={"zip":"zip2","zip1":"zip21","pref":"pref2","city":"city2","addr":"addr2","focus":""};
  D.pm[9]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","addr":"addr3","focus":""};
//D.pm[10]={"zip":"〒", "zip1":"下4桁","pref":"都道府県","city":"市区町村", "addr":"住所", "focus":"focus"};
  D.sysid= "cscart";
}
function AjaxZip3(){}
AjaxZip3.zip2addr=function(z, d1,s,c,d2,a){Zip.aa(z);};
