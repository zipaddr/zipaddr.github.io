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
  D.pm[1]={"zip":k1+zp,   "zip1":"", "pref":k11+"24","city":"", "addr":k1+ci,    "focus":k1+ad   };//¿‹æ
  D.pm[2]={"zip":k2+zp,   "zip1":"", "pref":k11+"25","city":"", "addr":k2+ci,    "focus":k2+ad   };//”z‘—æ
  D.pm[3]={"zip":k3+zp,   "zip1":"", "pref":k3+st,   "city":"", "addr":k3+ci,    "focus":k3+ad   };
  D.pm[4]={"zip":k4+zp,   "zip1":"", "pref":k4+st,   "city":"", "addr":k4+ci,    "focus":k4+ad   };
  D.pm[5]={"zip":k5+"33]","zip1":"", "pref":k51+"25","city":"", "addr":k5+"26]", "focus":k5+"27]"};//ƒVƒ‡‰^
  D.pm[6]={"zip":k5+"18]","zip1":"", "pref":k61+"21","city":"", "addr":k5+"19]", "focus":k5+"17]"};//‘S”Ê
}
function AjaxZip3(){}
AjaxZip3.zip2addr=function(z, d1,s,c,d2,a){Zip.aa(z);};
