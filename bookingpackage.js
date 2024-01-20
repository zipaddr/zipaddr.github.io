function zipaddr_ownpm(){     //booking-package用
	const ver="1.4";
	const key="booking_package_input_";
	let ans= new Array();
	ans[0]= key +"zip";       //郵便番号
	ans[1]= key +"pref";      //都道府県
	ans[2]= key +"city";      //市区町村
	ans[3]= key +"address";   //住所
//
	ans[6]= ans[0]+"2";       //booking_package_input_zip2
	ans[7]= ans[1]+"2";
	ans[8]= ans[2]+"2";
	ans[9]= ans[3]+"2";
//Set
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":ans[3]};
pm[2]= {"zip":ans[6], "zip1":"", "pref":ans[7], "city":ans[8], "area":"", "addr":ans[9], "focus":ans[9]};
	return pm;
}
