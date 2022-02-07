function zipaddr_ownpm(){     //mailformpro用
	const ver="1.4";
	const uban= "郵便番号";
	let ans= new Array();
//
	let dat= zipaddr_ownpm_search(uban);          // 都道府県,市区町村,住所
	let da= dat.split(",");
	if( da.length != 3 ) return ans;
	if( da[0]==da[1] ) da[0]="";
	if( da[1]==da[2] ) da[1]="";
	ans[0]= zipaddr_ownpm_namec(uban, "zip");
	ans[1]= zipaddr_ownpm_namec(da[0],"pref");
	ans[2]= zipaddr_ownpm_namec(da[1],"city");
	ans[3]= zipaddr_ownpm_namec(da[2],"addr");
//Set
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	return pm;
}
function zipaddr_ownpm_search(nam){
	let ans= "";
	const elm= document.getElementsByName(nam);
	if( elm.length==1 ) ans= elm[0].getAttribute("data-address");
	return ans;
}
function zipaddr_ownpm_namec(nam,xid){
	let ans= "";
	if( nam != "" ){
		const elm= document.getElementsByName(nam);
		if( elm.length==1 ){
			if( elm[0].id=="" ) elm[0].id=xid;
			ans= elm[0].id;
	}	}
	return ans;
}
