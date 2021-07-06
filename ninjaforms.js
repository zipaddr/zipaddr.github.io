function zipaddr_ownpm(){     //Ninja Forms用
	const ver="1.0";
	let ans= new Array();
	ans[0]= "zip";
	ans[1]= "";
	ans[2]= "city";
	ans[3]= "address";
	const elm= document.getElementsByTagName("label");
	for( let ii=0;ii<elm.length;ii++ ){
		let dat= elm[ii].innerHTML;               // <label...>都道府県  </label>
		dat= dat.replace(/　/g,'');
		dat= dat.replace(/ /g, '');
		if( dat.match(/都道府県/) ){
			ans[1]= elm[ii].id.replace('label-',''); // nf-label-field-xx
			break;
	}	}
	for( let ii=0;ii<ans.length;ii++ ){
		const elm= document.getElementsByName(ans[ii]);
		if( elm.length==1 ) ans[ii]=elm[0].id;    // 差し替え
	}
//Set
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	return pm;
}
