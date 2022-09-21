function zipaddr_ownpm(){     //Ninja Forms用
	const ver="1.2";
	let ans= new Array();
	ans[0]= "zip";
	ans[1]= zipaddr_ownpm_tag("label","都道府県");
	ans[2]= "city";
	ans[3]= "address";
	ans[6]= "zip2";
	ans[7]= zipaddr_ownpm_tag("label","都道府県2");
	ans[8]= "city2";
	ans[9]= "address2";
	for( let ii=0;ii<ans.length;ii++ ){
		const elm= document.getElementsByName(ans[ii]);
		if( elm.length==1 ) ans[ii]=elm[0].id;    // 差し替え
	}
//Set
	if( typeof ZP.tel != "undefined" ) {ZP.tel[1]= zipaddr_ownpm_name("phone");}
	if( typeof ZP.sei != "undefined" ) {ZP.sei[1]= zipaddr_ownpm_name("lname");}
	if( typeof ZP.mei != "undefined" ) {ZP.mei[1]= zipaddr_ownpm_name("fname");}
	if( typeof ZP.simei!="undefined"){
		ZP.simei[1]= zipaddr_ownpm_tag("label","名前");
		if( ZP.simei[1]=="" ) ZP.simei[1]= zipaddr_ownpm_tag("label","氏名");
	}
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":ans[3]};
pm[2]= {"zip":ans[6], "zip1":"", "pref":ans[7], "city":ans[8], "area":"", "addr":ans[9], "focus":ans[9]};
	return pm;
}
function zipaddr_ownpm_tag(tag,names){
	let ans="";
	const ptrn= new RegExp(names);
	const elm= document.getElementsByTagName(tag);
	for( let ii=0;ii<elm.length;ii++ ){
		let dat= elm[ii].innerHTML;               // <label...>都道府県  </label>
		dat= dat.replace(/　/g,'');
		dat= dat.replace(/ /g, '');
		if( dat.match(ptrn) ){                    //都道府県/
			ans= elm[ii].id.replace('label-',''); // nf-label-field-xx
			break;
	}	}
	return ans;
}
function zipaddr_ownpm_name(nam){
	let ans= "";
	if( nam != "" ){
		const elm= document.getElementsByName(nam);
		if( elm.length==1 ){
			if( elm[0].id!="" ) ans= elm[0].id;
	}	}
	return ans;
}
