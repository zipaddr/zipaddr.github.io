function zipaddr_ownpm(){     //Welcart用
	const ver="1.4";
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
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]="tel";   ZP.tel[2]="tel";}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]="name1"; ZP.sei[2]="name1";}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]="name2"; ZP.mei[2]="name2";}
	if( typeof ZP.shimei!="undefined") {ZP.shimei[1]="";   ZP.shimei[2]="";}
	if( typeof ZP.dyna!= "undefined" ) ZP.dyna="";
	pm= new Array();
  if( document.getElementById(pref[1]) ){
	pm[1]= {"zip":zip, "zip1":"", "pref":pref[1], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
  }
  else
  if( document.getElementById(pref[2]) ){
	pm[1]= {"zip":zip, "zip1":"", "pref":pref[2], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
  }
  else
  if( document.getElementById(pref[3]) ){
	pm[1]= {"zip":zip, "zip1":"", "pref":pref[3], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
  }
  else{
	pm[1]= {"zip":zip, "zip1":"", "pref":pref[4], "city":"", "area":addr1, "addr":addr2, "focus":addr2};
	if( typeof ZP.dyna!="undefined") ZP.dyna="1";
  }
	return pm;
}
