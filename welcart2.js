function zipaddr_ownpm(){     //Welcart用
	const ver="1.1";
	const zip=   "zipcode";
	const prf=   "pref";
	const addr1= "address1";
	const addr2= "address2";
//
	let pref= new Array();
	pref[1]=             prf;
	pref[2]= "member_"+  prf;
	pref[3]= "customer_"+prf;
	pref[4]= "delivery_"+pref;
//Set
	if( typeof ZP.sei != "undefined" )  ZP.sei="name1";
	if( typeof ZP.mei != "undefined" )  ZP.mei="name2";
	if( typeof ZP.tel != "undefined")ZP.tel[0]="tel";
	pm= new Array();
	pm[1]= {"zip":zip, "zip1":"", "pref":pref[1], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
	pm[2]= {"zip":zip, "zip1":"", "pref":pref[2], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
	pm[3]= {"zip":zip, "zip1":"", "pref":pref[3], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
	pm[4]= {"zip":zip, "zip1":"", "pref":pref[4], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
	return pm;
}