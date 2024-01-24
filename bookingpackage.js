function zipaddr_ownpm(){     //booking-package用
	const ver="1.5";
	const key="booking_package_input_";
	let ans= new Array();
	ans[0]= key +"zip";       //郵便番号
	ans[1]= key +"zip1";      //郵番_後半4桁
	ans[2]= key +"pref";      //都道府県
	ans[3]= key +"city";      //市区町村
	ans[4]= key +"address";   //住所
	ans[5]= key +"addrfocus"; //focus
//
	ans[6]= ans[0]+"2";       //booking_package_input_zip2
	ans[7]= key   +"zip21";   //郵番_後半4桁
	ans[8]= ans[2]+"2";
	ans[9]= ans[3]+"2";
	ans[10]=ans[4]+"2";
	ans[11]=ans[5]+"2";
//Set
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":ans[1], "pref":ans[2], "city":ans[3], "area":"", "addr":ans[4], "focus":ans[5]};
pm[2]= {"zip":ans[6], "zip1":ans[7], "pref":ans[8], "city":ans[9], "area":"", "addr":ans[10],"focus":ans[11]};
	return pm;
}
