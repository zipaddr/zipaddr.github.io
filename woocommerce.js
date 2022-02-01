function zipaddr_ownpm(){     //WooCommerce用
	const ver="1.4";
	const lastn= "last_name";
	const first= "first_name";
	const phone= "phone";
	let lab= new Array();
	lab[0]= "billing_";
	lab[1]= "shipping_";
//
	lab[6]= "postcode";
	lab[7]= "state";
	lab[8]= "city";
	lab[9]= "address_1";
	let ans= new Array();
	for( let ii=0;ii<=1;ii++ ) {
		if( ii == 0 ){        //注文者
			ans[0]= lab[0] + lab[6];
			ans[1]= lab[0] + lab[7];
			ans[2]= lab[0] + lab[8];
			ans[3]= lab[0] + lab[9];
		}
		else{                 //届け先
			ans[6]= lab[1] + lab[6];
			ans[7]= lab[1] + lab[7];
			ans[8]= lab[1] + lab[8];
			ans[9]= lab[1] + lab[9];
	}	}
//Set
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]=lab[0]+phone; ZP.tel[2]="";}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]=lab[0]+lastn; ZP.sei[2]=lab[1]+lastn;}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]=lab[0]+first; ZP.mei[2]=lab[1]+first;}
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":"", "area":ans[2], "addr":ans[3], "focus":ans[3]};
	pm[2]= {"zip":ans[6], "zip1":"", "pref":ans[7], "city":"", "area":ans[8], "addr":ans[9], "focus":ans[9]};
	return pm;
}
