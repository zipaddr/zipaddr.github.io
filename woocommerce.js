function zipaddr_ownpm(){     //WooCommerce用
	const ver="1.0";
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
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	pm[2]= {"zip":ans[6], "zip1":"", "pref":ans[7], "city":ans[8], "area":"", "addr":ans[9], "focus":""};
	return pm;
}
