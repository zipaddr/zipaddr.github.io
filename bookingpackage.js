function zipaddr_ownpm(){     //booking-package用
	const ver="1.2";
	const key="booking_package_input_";
	let ans= new Array();
	ans[0]= key +"zip";
	ans[1]= key +"pref";
	ans[2]= key +"city";
	ans[3]= key +"address";
//	ans[6]= "zip2";
//	ans[7]= zipaddr_ownpm_tag("label","都道府県2");
//	ans[8]= "city2";
//	ans[9]= "address2";
//	for( let ii=0;ii<ans.length;ii++ ){
//		const elm= document.getElementById(ans[ii]);
//		if( elm.length==1 ) ans[ii]=elm[0].id;    // 差し替え
//		else                ans[ii]="";
//	}
//Set
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":ans[3]};
	return pm;
}
