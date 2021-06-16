function zipaddr_ownpm(){     //TrustForm用
	const ver="1.2";
	let ans= new Array();
	ans[0]= "";
	ans[1]= "";
	ans[2]= "";
	ans[3]= "";
	ans[4]= "";
	ans[5]= "";
	const dac= "zip_zip1_pref_city_area_addr";
	const dan= dac.split("_");
	for( let ii=0;ii<dan.length;ii++ ){
		ans[ii]= zipaddr_trust( dan[ii] );
	}
//Set
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":ans[1], "pref":ans[2], "city":ans[3], "area":ans[4], "addr":ans[5], "focus":""};
	return pm;
}
function zipaddr_trust(nam){
	let ans= nam;
	if( nam != "" ){
		const elm= document.getElementsByClassName(nam);
		if( elm.length==1 ){
			if( elm[0].id=="" ) elm[0].id= nam;
			else ans= elm[0].id;
		}
	}
	return ans;
}
