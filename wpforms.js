function zipaddr_ownpm(){     //WPForms用
	const ver="1.1";
	let lab= new Array();
	lab[0]= "郵便番号";
	lab[1]= "都道府県";
	lab[2]= "市区町村";
	lab[3]= "住所";
	let ans= new Array();
	ans[0]= "";
	ans[1]= "";
	ans[2]= "";
	ans[3]= "";
	const elm= document.getElementsByTagName("label");
	for( let ii=0;ii<elm.length;ii++ ){
		const idx= elm[ii].for;
		let dat= elm[ii].innerHTML; // <label...>都道府県  </label>
		for( let jj=0;jj<lab.length;jj++ ){
			if( dat.indexOf(lab[jj]) ){  //都道府県含まれる？
				ans[jj]= idx;
				jj= 9999;
		}	}
	}
alert( ans[0]+"##" );
//Set
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	return pm;
}
