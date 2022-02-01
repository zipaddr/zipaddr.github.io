function zipaddr_ownpm(){     //WP-Members用
	const ver="1.2";
	const bbb= "billing_";
	const zzc= bbb+ "postcode";
	const zpf= bbb+ "state";
	const zci= bbb+ "city";
	const zad= bbb+ "address_1";
//Set
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]= bbb+ "phone";}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]= "last_name";}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]= "first_name";}
	pm= new Array();
	pm[1]= {"zip":zzc,  "zip1":"","pref":zpf,    "city":zci,   "area":"","addr":zad,    "focus":""};
	pm[2]= {"zip":"zip","zip1":"","pref":"state","city":"city","area":"","addr":"addr1","focus":""};
	return pm;
}
