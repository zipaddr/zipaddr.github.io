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
  var k6= "field__default_";
  D.pm[1]={"zip":k1+zp,   "zip1":"", "pref":k1+st,   "city":"", "addr":k1+ci,    "focus":k1+ad   };//������
  D.pm[2]={"zip":k2+zp,   "zip1":"", "pref":k2+st,   "city":"", "addr":k2+ci,    "focus":k2+ad   };//�z����
  D.pm[3]={"zip":k3+zp,   "zip1":"", "pref":k3+st,   "city":"", "addr":k3+ci,    "focus":k3+ad   };
  D.pm[4]={"zip":k4+zp,   "zip1":"", "pref":k4+st,   "city":"", "addr":k4+ci,    "focus":k4+ad   };
  D.pm[5]={"zip":k5+"33]","zip1":"", "pref":k5+"25]","city":"", "addr":k5+"26]", "focus":k5+"27]"};//shop
  D.pm[6]={"zip":k6+"zipcode_18","zip1":"", "pref":k6+"state_21","city":"", "addr":k6+"city_19", "focus":k6+"address_17"};//default
}
function AjaxZip3(){}
AjaxZip3.zip2addr=function(z, d1,s,c,d2,a){Zip.aa(z);};
