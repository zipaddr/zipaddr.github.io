function zipaddr_ownpm(){     //MWWPForm
	const ver= "1.23";
const idc0= "zip,zip2,zip3,zip4,zip5,zip6"      .split(',');
const idc1= "zip1,zip21,zip31,zip41,zip51,zip61".split(',');
const idc2= "pref,pref2,pref3,pref4,pref5,pref6".split(',');
const idc3= "city,city2,city3,city4,city5,city6".split(',');
const idc4= "area,area2,area3,area4,area5,area6".split(',');
const idc5= "addr,addr2,addr3,addr4,addr5,addr6".split(',');
const idt= idc0.concat(idc1,idc2,idc3,idc4,idc5);
	const zip= idc0[0];       // id="zip" - id="zip1"
	const pref=idc2[0];       // id="pref"
	const city=idc3[0];       // id="city"
	const area=idc4[0];       // id="area"
	const addr=idc5[0];       // id="addr"
	let xz1=   idc1[0];       // id="zip1"
	let xfs= "focus";
	if( !document.getElementById(xz1) ) xz1= zipaddr_ownpm_namec(xz1,xz1);
	if( !document.getElementById(xfs) ) xfs= zipaddr_ownpm_namec(xfs,xfs);
	let pm= new Array();      // default
	let dcnt= 0;              // name="zip"のみは id="zip" を付加する（優先処理）
	for( let ii=0;ii<idt.length;ii++ ) {dcnt+= zipaddr_ownpm_count(idt[ii]);}
	if( dcnt >= 2 ) return pm;// 従来と同じ動き（互換性優先）
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
	let xzp= zipaddr_ownpm_namec(szip, zip );
	let xpf= zipaddr_ownpm_namec(spref,pref);
	let xcy= zipaddr_ownpm_namec(scity,city);
	let xar= zipaddr_ownpm_namec(sarea,area);
	let xad= zipaddr_ownpm_namec(saddr,addr);     //Set
	const xp=  zipaddr_ownpm_uban().split(',');   // 特別仕様
	if( xp[0] != "" && xp[1] != "" ) {xzp=xp[0]; xz1=xp[1];}
if( xpf=="" ) xpf= zipaddr_ownpm_namec(pref,pref);
if( xcy=="" ) xcy= zipaddr_ownpm_namec(city,city);
if( xar=="" ) xar= zipaddr_ownpm_namec(area,area);
if( xad=="" ) xad= zipaddr_ownpm_namec(addr,addr);
if( xad=="" ) xad= zipaddr_ownpm_namec("address",addr);
	pm[1]= {"zip":xzp, "zip1":xz1, "pref":xpf, "city":xcy, "area":xar, "addr":xad, "focus":xfs};
	return pm;
}
function zipaddr_ownpm_ctrl(uban){  let ans="";
	const ptrn= new RegExp(uban);                 //郵便番号
	              ans= zipaddr_ownpm_look("p",    ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("tr",   ptrn);
	if( ans=="" ) ans= zipaddr_ownpm_look("label",ptrn);
	if( ans=="" ){
		const elm= document.getElementsByName(uban);
		if( elm.length==1 ) ans= uban;
	}
	return ans;
}
function zipaddr_ownpm_look(tag,ptrn){  let ans="";
	const elm= document.getElementsByTagName(tag);//label
	for( let ii=0;ii<elm.length;ii++ ){
		const dat= elm[ii].innerHTML;             // <p..>郵便番号  </p>
		if( dat.match(ptrn) ){
			let msg= dat.match(/ name="(.*)"/i);  // <input type="text" name="zip"..
			if( msg!=null && msg!==false ){
				const da= msg[0].split('"');      // name="zip"..
				ans= da[1];                       // zip
				break;
	}	}	}
	return ans;
}
function zipaddr_ownpm_uban(){
	const uban= "郵便番号,zip,zipcode,postcode".split(',');
	let xp= "";
	let x1= "";
	for( let ii=0;ii<uban.length;ii++ ){
		xp= zipaddr_ownpm_namec(uban[ii]+"[data][0]","zip");
		x1= zipaddr_ownpm_namec(uban[ii]+"[data][1]","zip1");
		if( xp != "" && x1 != "" ) break;
	}
	return xp +","+ x1;
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
