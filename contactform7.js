function zipaddr_ownpm(){     //contactform7
	const ver= "1.8";
	let pm= new Array();      //default
	const zip=  "zip";        // id="zip" - id="zip1"
	const pref= "pref";       // id="pref"
	const city= "city";       // id="city"
	const area= "area";       // id="area"
	const addr= "addr";       // id="addr"
	let dcnt= 0;
	if( document.getElementById(zip)  ) dcnt++;
	if( document.getElementById(pref) ) dcnt++;
	if( document.getElementById(city) ) dcnt++;
	if( document.getElementById(area) ) dcnt++;
	if( document.getElementById(addr) ) dcnt++;
	if( dcnt >= 2 ) return pm;// 従来通り
//
//                            // 未設定の場合、自動設定を試みます。
	let szip=  zipaddr_ownpm_ctrl("郵便番号");
	let spref= zipaddr_ownpm_ctrl("都道府県");
	let scity= zipaddr_ownpm_ctrl("市区町村");
	let sarea= zipaddr_ownpm_ctrl("地域");
	let saddr= zipaddr_ownpm_ctrl("住所");
	if( szip =="" ) szip=  zipaddr_ownpm_ctrl("〒");
	if( scity=="" ) scity= zipaddr_ownpm_ctrl("市町村");
	if( saddr=="" ) saddr= zipaddr_ownpm_ctrl("番地");
	if( scity == saddr ) scity="";
	if( sarea == saddr ) sarea="";
//
	const xzip=  zipaddr_ownpm_namec(szip,  zip );
	const xpref= zipaddr_ownpm_namec(spref, pref);
	const xcity= zipaddr_ownpm_namec(scity, city);
	const xarea= zipaddr_ownpm_namec(sarea, area);
	const xaddr= zipaddr_ownpm_namec(saddr, addr);
//Set
	pm[1]= {"zip":xzip, "zip1":"", "pref":xpref, "city":xcity, "area":xarea, "addr":xaddr, "focus":""};
	return pm;
}
function zipaddr_ownpm_ctrl(uban){
	let ans="";
	const ptrn= new RegExp(uban);                 //郵便番号
	              ans= zipaddr_ownpm_look("label",ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("p",    ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("tr",   ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("dl",   ptrn);
	return ans;
}
function zipaddr_ownpm_look(tag,ptrn){
	let ans="";
	const elm= document.getElementsByTagName(tag);//label
	for( let ii=0;ii<elm.length;ii++ ){
		const dat= elm[ii].innerHTML;             // <p..>郵便番号  </p>
		if( dat.match(ptrn) ){
			const msg= dat.match(/name="(.*)"/i); // <input type="text" name="zip"..
			if( msg!==false ){
				const da= msg[0].split('"');      // name="zip"..
				ans= da[1];                       // zip
	}	}	}
	return ans;
}
function zipaddr_ownpm_namec(nam,xid){
	let ans="";
	if( nam != "" ){
		const elm= document.getElementsByName(nam);
		if( elm.length==1 ){
			if( elm[0].id=="" ) elm[0].id=xid;
			ans= elm[0].id;
	}	}
	return ans;
}
