function zipaddr_ownpm(){     //booking-package用
	const ver="1.3";
	const key="booking_package_input_";
	let ans= new Array();
	ans[0]= key +"zip";       //郵便番号
	ans[1]= key +"pref";      //都道府県
	ans[2]= key +"city";      //市区町村
	ans[3]= key +"address";   //住所
//Set
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":ans[3]};
	return pm;
}
