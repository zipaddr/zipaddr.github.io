function zipaddr_ownpm(){     //contactform7
	const ver= "1.16";
	const zip=  "zip";   // id="zip" - id="zip1"
	const pref= "pref";  // id="pref"
	const city= "city";  // id="city"
	const area= "area";  // id="area"
	const addr= "addr";  // id="addr"
	let xz1= "zip1";
	let xfs= "focus";
	if( !document.getElementById(xz1) ) xz1= zipaddr_ownpm_namec(xz1,xz1);
	if( !document.getElementById(xfs) ) xfs= zipaddr_ownpm_namec(xfs,xfs);
	let pm= new Array();      //default
let dcnt= 0;
	dcnt+= zipaddr_ownpm_count(zip);    //name="zip"のみは id="zip" を付加する（優先処理）
	dcnt+= zipaddr_ownpm_count(pref);
	dcnt+= zipaddr_ownpm_count(city);
	dcnt+= zipaddr_ownpm_count(area);
	dcnt+= zipaddr_ownpm_count(addr);
	if( dcnt >= 2 ) return pm; // 従来と同じ動き（互換性優先）
//
//未設定の場合、自動設定を試みます。（xxx-xxxxは除外する）
	let szip=  zipaddr_ownpm_ctrl("郵便番号");
	let spref= zipaddr_ownpm_ctrl("都道府県");
	let scity= zipaddr_ownpm_ctrl("市区町村");
	let sarea= zipaddr_ownpm_ctrl("町域");
	let saddr= zipaddr_ownpm_ctrl("番地");
	if( szip =="" ) szip=  zipaddr_ownpm_ctrl("〒");
	if( scity=="" ) scity= zipaddr_ownpm_ctrl("市町村");
	if( sarea=="" ) sarea= zipaddr_ownpm_ctrl("地域");
	if( saddr=="" ) saddr= zipaddr_ownpm_ctrl("以降の住所");
	if( saddr=="" ) saddr= zipaddr_ownpm_ctrl("ご住所");
	if( scity == sarea || scity == saddr ) scity="";
	if( sarea == saddr ) sarea="";
//
	const xzp= zipaddr_ownpm_namec(szip, zip );
	const xpf= zipaddr_ownpm_namec(spref,pref);
	const xcy= zipaddr_ownpm_namec(scity,city);
	const xar= zipaddr_ownpm_namec(sarea,area);
	const xad= zipaddr_ownpm_namec(saddr,addr); //Set
	pm[1]= {"zip":xzp, "zip1":xz1, "pref":xpf, "city":xcy, "area":xar, "addr":xad, "focus":xfs};
	return pm;
}
function zipaddr_ownpm_ctrl(uban){  let ans="";
	const ptrn= new RegExp(uban);                 //郵便番号
	              ans= zipaddr_ownpm_look("p",    ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("tr",   ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("label",ptrn);
	return ans;
}
function zipaddr_ownpm_look(tag,ptrn){  let ans="";
	const elm= document.getElementsByTagName(tag);//label
	for( let ii=0;ii<elm.length;ii++ ){
		const dat= elm[ii].innerHTML;             // <p..>郵便番号  </p>
		if( dat.match(ptrn) ){
			let msg= dat.match(/name="(.*)"/i);   // <input type="text" name="zip"..
			if( msg!=null && msg!==false ){
				const da= msg[0].split('"');      // name="zip"..
				ans= da[1];                       // zip
	}	}	}
	return ans;
}
function zipaddr_ownpm_count(zip){
	 if( document.getElementById(zip) )     return 1;
else if( zipaddr_ownpm_namec(zip,zip)!="" ) return 1;
else return 0;
}
function zipaddr_ownpm_namec(nam,xid){  let ans="";
	if( nam != "" ){
		const elm= document.getElementsByName(nam);
		if( elm.length==1 ){
			if( elm[0].id=="" ) elm[0].id=xid;
			ans= elm[0].id;
	}	}
	return ans;
}
