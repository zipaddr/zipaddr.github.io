function zipaddr_ownpm(){     //WPForms用
	const ver="1.7";
	let ans= new Array();
	ans[0]= zipaddr_ownpm_tag("label","郵便番号");
	ans[1]= zipaddr_ownpm_tag("label","都道府県");
	ans[2]= zipaddr_ownpm_tag("label","市区町村");
	ans[3]= zipaddr_ownpm_tag("label","住所");
if( ans[3]=="" ){
	ans[3]= zipaddr_ownpm_tag("label","ご住所");
}
//Set
	if( typeof ZP.tel != "undefined" ) ZP.tel[1]= zipaddr_ownpm_tag("label","電話番号");
	if( typeof ZP.sei != "undefined" ) ZP.sei[1]= zipaddr_ownpm_tag("label","姓");
	if( typeof ZP.mei != "undefined" ) ZP.mei[1]= zipaddr_ownpm_tag("label","名");
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	return pm;
}
function zipaddr_ownpm_tag(tag,names){
	let ans="";
	const ptrn= new RegExp("^"+names);
	const elm= document.getElementsByTagName(tag);
	for( let ii=0;ii<elm.length;ii++ ){
		let dat= elm[ii].innerHTML;               // <label...>都道府県  </label>
		dat= dat.replace(/　/g,'');
		dat= dat.replace(/ /g, '');
		if( dat.match(ptrn) ){                    //都道府県/
			ans= elm[ii].htmlFor;
			break;
	}	}
	return ans;
}
