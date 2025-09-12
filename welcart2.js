function zipaddr_ownpm(){     //Welcart(usces)用
	const ver="1.7";
	const zip=   "[zipcode]";
	const prf=   "pref";
	const addr1= "[address1]";
	const addr2= "[address2]";
//
	let pref= new Array();
	pref[1]=             prf;
	pref[2]= "member_"+  prf;
	pref[3]= "customer_"+prf;
	pref[4]= "delivery_"+prf;
//Set
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]="tel";   ZP.tel[2]="tel";}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]="name1"; ZP.sei[2]="name1";}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]="name2"; ZP.mei[2]="name2";}
	pm= new Array();
	let zp;
	let a1;
	let a2;
//	pm[1]= {"zip":"zip_code", "zip1":"", "pref":"", "city":"", "area":addr1, "addr":addr2, "focus":addr2};
  if( document.getElementById(pref[3]) ){         // customer
	const pr= pref[3].split("_");
	zp= Bas.nd(pr[0]+zip);
	a1= Bas.nd(pr[0]+addr1);
	a2= Bas.nd(pr[0]+addr2);
	pm[1]= {"zip":zp, "zip1":"", "pref":pref[3], "city":"", "area":a1, "addr":a2, "focus":a2};
  }
  if( document.getElementById(pref[4]) ){
	const pr= pref[4].split("_");
	zp= Bas.nd(pr[0]+zip);
	a1= Bas.nd(pr[0]+addr1);
	a2= Bas.nd(pr[0]+addr2);
	pm[2]= {"zip":zp, "zip1":"", "pref":pref[4], "city":"", "area":a1, "addr":a2, "focus":a2};
  }
	return pm;
}
