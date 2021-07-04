function zipaddr_ownpm(){     //WPForms用
	const ver="1.4";
	let lab= new Array();
	lab[0]= "郵便番号";
	lab[1]= "都道府県";
	lab[2]= "市区町村";
	lab[3]= "住所";
	lab[4]= "区市町村";
	let ans= new Array();
	ans[0]= "";
	ans[1]= "";
	ans[2]= "";
	ans[3]= "";
	const elm= document.getElementsByTagName("label");
	for( let ii=0;ii<elm.length;ii++ ){
		const idx= elm[ii].htmlFor;
		const dat= elm[ii].innerHTML; // <label...>都道府県  </label>
		for( let jj=0;jj<lab.length;jj++ ){
			const ptrn= new RegExp( lab[jj], 'g' );
			matchArr= dat.match(ptrn);
			if( Array.isArray(matchArr) ){  //都道府県含まれる？
				if( jj==4 ) ans[2]= idx;
				else       ans[jj]= idx;
				jj= 9999;
		}	}
	}
//Set
	pm= new Array();
	pm[1]= {"zip":ans[0], "zip1":"", "pref":ans[1], "city":ans[2], "area":"", "addr":ans[3], "focus":""};
	return pm;
}
