function typeauto_own(){
  var ver="1.1";
  var n=0;
//tel,fax（お問い合わせ,会員登録,お客様情報,お届け先,admin会員管理,admin受注管理）
  var idg= "contact_tel_tel0,entry_tel_tel0,entry_fax_fax0,nonmember_tel_tel0";
  var idg+=",shopping_shipping_tel_tel0,shopping_shipping_fax_fax0";
  var idg+=",admin_customer_tel_tel0,admin_customer_fax_fax0";
  var idg+=",order_tel_tel0,order_fax_fax0,order_Shippings_0_tel_tel0,order_Shippings_0_fax_fax0";
  var idn= idg.split(",");
  for( var i=0;i<idn.length;i++ ) {
	for( var j=1;j<=3;j++ ) {
		Typ.tel[n]= idn[i]+j;
		n++;
	}
  }
}