function zipaddr_ownpm(){     //mailformpro用
	const ver="1.5";
	const uban= "郵便番号";
	let ans= new Array();
//
	let da= zipaddr_ownpm_search(uban);           // 都道府県,市区町村,住所
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
	let ans= new Array();
	ans[0]= ans[1]= ans[2]= "";
	const elm= document.getElementsByName(nam);   // 郵便番号
	if( elm.length==1 ){
		if( elm[0].hasAttribute("data-address") ){
			let dat= elm[0].getAttribute("data-address"); //data-address="都道府県,市区町村,市区町村"
			ans= dat.split(",");
			if( ans.length != 3 ) ans= new Array();
		}
		else{
			const obj= document.getElementsByTagName("input");
			for( let ii=0;ii<obj.length;ii++ ){
				let dats= obj[ii].getAttribute("onclick"); //onclick="mfpc('mailform','郵便番号','住所(必須)');"
				if( dats != null && dats.substr(0,5)=="mfpc(" ){
					let dat= dats.slice(0,-2);    // );をカット
					let da= dat.split(",");
					if( da.length==3 ){
						ans[0]= ans[1]= ans[2]= da[2].replace(/'/g,"");
						dats= dats.replace("mfpc(","zipaddr_mfpc(");
						obj[ii].setAttribute("onclick",dats);
						break;
		}	}	}	}
	}
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
function zipaddr_mfpc(mf,zip,addr){
//	alert(mf+":"+zip+":"+addr);
}
