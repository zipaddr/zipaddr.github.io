function zipaddr_ownb(){var ver="1.2";
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
  D.pm[1]={"zip":   zp, "zip1":   z2, "pref":   st, "city":"", "area":   ad, "addr":   fc, "focus":   fc};
  D.pm[2]={"zip":k2+zp, "zip1":k2+z2, "pref":k2+st, "city":"", "area":k2+ad, "addr":k2+fc, "focus":k2+fc};
  D.pm[3]={"zip":k3+zp, "zip1":k3+z2, "pref":k3+st, "city":"", "area":k3+ad, "addr":k3+fc, "focus":k3+fc};
  D.pm[4]={"zip":k4+zp, "zip1":k4+z2, "pref":k4+st, "city":"", "area":k4+ad, "addr":k4+fc, "focus":k4+fc};
  D.pm[5]={"zip":k5+zp, "zip1":k5+z2, "pref":k5+st, "city":"", "area":k5+ad, "addr":k5+fc, "focus":k5+fc};
  D.pm[6]={"zip":k6+zp, "zip1":k6+z2, "pref":k6+st, "city":"", "area":k6+ad, "addr":k6+fc, "focus":k6+fc};
  for( j=7;j<=D.zipmax;j++ ) { // 届け先はmax13か所
	var n= j - 7;
	var p= k4+zp +"["+n+"]";
	var q= k4+z2 +"["+n+"]";
	var r= k4+st +"["+n+"]";
	var e= "";
	var a= k4+ad +"["+n+"]";
	var f= k4+fc +"["+n+"]";
	D.pm[j]={"zip":p, "zip1":q, "pref":r, "city":"", "area":a, "addr":f, "focus":f};
  }
  D.top=  21;            // 位置
  D.sl=  "都道府県を選択";

  D.eccube="1";
  D.sysid= "eccube";
  if( typeof zipaddr_ownb_continue==="function" ) zipaddr_ownb_continue(); // 追加owncode
}
//拡張する場合は、自サイトにzipaddr_ownb_continueを設置して下さい。
