function zipaddr_ownpm(){     //Welcart(usces)用
	const ver="1.8";
	const zipc=  "zipcode";
	const adr1=  "address1";
	const adr2=  "address2";
	const zip=   "[zipcode]";
	const prf=   "pref";
	const addr1= "["+adr1+"]";
	const addr2= "["+adr2+"]";
//
	let pref= new Array();
	pref[1]=             prf;
	pref[2]= "member_"+  prf;
	pref[3]= "customer_"+prf;
	pref[4]= "delivery_"+prf;
	let ref=  new Array();
	ref[0]=  "customer["+prf+"]";
	ref[1]=  "delivery["+prf+"]";
//Set
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]="tel";   ZP.tel[2]="tel";}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]="name1"; ZP.sei[2]="name1";}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]="name2"; ZP.mei[2]="name2";}
	pm= new Array();
	let zp= "";
	let pf= "";
	let a1= "";
	let a2= "";
  if( document.getElementById(zipc) ){            // 標準画面
		 if( document.getElementById(pref[2]) ) pf= pref[2]; // member_prf
	else if( document.getElementById(pref[3]) ) pf= pref[3]; // customer_prf
	else if( document.getElementById(pref[4]) ) pf= pref[4]; // delivery_prf
	zp= zipc;
	a1= adr1;
	a2= adr2;
	pm[1]= {"zip":zp, "zip1":"", "pref":pf, "city":"", "area":a1, "addr":a2, "focus":a2};
  }
  else                                            // 管理画面
  if( document.getElementById("business_setting") ){// 基本設定
	zp= Bas.nd("zip_code");
	pf= Bas.nd(adr1);
	a1= Bas.nd(adr2);
	pm[1]= {"zip":zp, "zip1":"", "pref":pf, "city":"", "area":a1, "addr":"", "focus":""};
  }
  else{
	let elm="";
	elm= document.getElementsByName(ref[0]);      // customer[pref]
	if( elm.length >= 1 ){
		const pr= ref[0].split("[");              // customer
		zp= Bas.nd(pr[0]+zip);                    // customer[zipcode]
		a1= Bas.nd(pr[0]+addr1);                  // customer[address1]
		a2= Bas.nd(pr[0]+addr2);                  // customer[address2]
		pm[1]= {"zip":zp, "zip1":"", "pref":ref[0], "city":"", "area":a1, "addr":a2, "focus":a2};
	}
	elm= document.getElementsByName(ref[1]);      // delivery[pref]
	if( elm.length >= 1 ){
		const pr= ref[1].split("[");              // delivery
		zp= Bas.nd(pr[0]+zip);
		a1= Bas.nd(pr[0]+addr1);
		a2= Bas.nd(pr[0]+addr2);
		pm[2]= {"zip":zp, "zip1":"", "pref":ref[1], "city":"", "area":a1, "addr":a2, "focus":a2};
	}
  }
	return pm;
}
