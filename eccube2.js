function zipaddr_ownb(){var ver="1.1";
  D.zipmax= 20;
  var zp= "zip01";
  var z2= "zip02";
  var st= "pref";
  var ad= "addr01";
  var fc= "addr02";
//
  var k2= "deliv_";
  var k3= "order_";
  var k4= "shipping_";
  var k5= "law_";
  var k6= "dmy_";
  D.pm[1]={"zip":   zp, "zip1":   z2, "pref":   st, "city":"", "addr":   ad, "focus":   fc};
  D.pm[2]={"zip":k2+zp, "zip1":k2+z2, "pref":k2+st, "city":"", "addr":k2+ad, "focus":k2+fc};
  D.pm[3]={"zip":k3+zp, "zip1":k3+z2, "pref":k3+st, "city":"", "addr":k3+ad, "focus":k3+fc};
  D.pm[4]={"zip":k4+zp, "zip1":k4+z2, "pref":k4+st, "city":"", "addr":k4+ad, "focus":k4+fc};
  D.pm[5]={"zip":k5+zp, "zip1":k5+z2, "pref":k5+st, "city":"", "addr":k5+ad, "focus":k5+fc};
  D.pm[6]={"zip":k6+zp, "zip1":k6+z2, "pref":k6+st, "city":"", "addr":k6+ad, "focus":k6+fc};
  for( j=7;j<=D.zipmax;j++ ) { // 届け先はmax13か所
	var n= j - 7;
	var p= k4+zp +"["+n+"]";
	var q= k4+z2 +"["+n+"]";
	var r= k4+st +"["+n+"]";
	var a= k4+ad +"["+n+"]";
	var f= k4+fc +"["+n+"]";
	D.pm[j]={"zip":p, "zip1":q, "pref":r, "city":"", "addr":a, "focus":f};
  }
  D.top=  21;            // 位置
  D.sl=  "都道府県を選択";

  D.eccube="1";
  D.sysid= "eccube";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
