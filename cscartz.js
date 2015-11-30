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
  var k11="elm_";
  var k51="field__company_state_";
  var k61="field__default_state_";
  ZP.pm[1]={"zip":k1+zp,   "zip1":"", "pref":k11+"24", "city":"", "addr":k1+ci,    "focus":k1+ad   };//請求先
  ZP.pm[2]={"zip":k2+zp,   "zip1":"", "pref":k11+"25", "city":"", "addr":k2+ci,    "focus":k2+ad   };//配送先
  ZP.pm[3]={"zip":k3+zp,   "zip1":"", "pref":k3+st,    "city":"", "addr":k3+ci,    "focus":k3+ad   };
  ZP.pm[4]={"zip":k4+zp,   "zip1":"", "pref":k4+st,    "city":"", "addr":k4+ci,    "focus":k4+ad   };
  ZP.pm[5]={"zip":k5+"33]","zip1":"", "pref":k51+"25", "city":"", "addr":k5+"26]", "focus":k5+"27]"};//ショ運
  ZP.pm[6]={"zip":k5+"18]","zip1":"", "pref":k61+"21", "city":"", "addr":k5+"19]", "focus":k5+"17]"};//全般
//拡張方法（id名で指定して下さい）
  ZP.pm[7]={"zip":"zip2","zip1":"zip21","pref":"pref2","city":"city2","addr":"addr2","focus":""};
  ZP.pm[8]={"zip":"zip3","zip1":"zip31","pref":"pref3","city":"city3","addr":"addr3","focus":""};
//ZP.pm[9]={"zip":"〒",  "zip1":"下4桁","pref":"都道府県","city":"市区町村", "addr":"住所", "focus":"focus"};
  ZP.sysid= "cscart";
}
function AjaxZip3(){}
AjaxZip3.zip2addr=function(z, d1,s,c,d2,a){Zip.ajax(z);};
