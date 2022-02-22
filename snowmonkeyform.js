function zipaddr_ownpm(){//SnowMonkeyForm
	const ver= "1.2";
	const zip=  "zip";   // id="zip" - id="zip1"
	const pref= "pref";  // id="pref"
	const city= "city";  // id="city"
	const area= "area";  // id="area"
	const addr= "addr";  // id="addr"
	let xz1= "zip1";
	let xfs= "focus";
	if( !document.getElementById(xz1) ) xz1= zipaddr_ownpm_namec(xz1,xz1);
	if( !document.getElementById(xfs) ) xfs= zipaddr_ownpm_namec(xfs,xfs);
	let pm= new Array(); //default
let dcnt= 0;
	dcnt+= zipaddr_ownpm_count(zip);    //name="zip"のみは id="zip" を付加する（優先処理）
	dcnt+= zipaddr_ownpm_count(pref);
	dcnt+= zipaddr_ownpm_count(city);
	dcnt+= zipaddr_ownpm_count(area);
	dcnt+= zipaddr_ownpm_count(addr);
	if( dcnt >= 2 ) return pm; // 従来と同じ動き（互換性優先）
//
//未設定の場合、自動設定を試みます。（xxx-xxxxは除外する）
let prm= new Array();
	prm[0]=new Array(); prm[1]=new Array(); prm[2]=new Array(); prm[3]=new Array(); prm[4]=new Array();
	prm[0][0]="郵便番号"; prm[0][1]="〒";
	prm[1][0]="都道府県";
	prm[2][0]="市区町村"; prm[2][1]="市町村";
	prm[3][0]="町域";     prm[3][1]="地域";
	prm[4][0]="番地";     prm[4][1]="以降の住所"; prm[4][2]="ご住所";
	const ans= zipaddr_ownpm_ctrl(prm);
	if( ans[2] == ans[3] || ans[2] == ans[4] ) ans[2]="";
	if( ans[3] == ans[4] ) ans[3]="";
//
	const xzp= zipaddr_ownpm_namec(ans[0], zip );
	const xpf= zipaddr_ownpm_namec(ans[1], pref);
	const xcy= zipaddr_ownpm_namec(ans[2], city);
	const xar= zipaddr_ownpm_namec(ans[3], area);
	const xad= zipaddr_ownpm_namec(ans[4], addr); //Set
	pm[1]={"zip":xzp, "zip1":xz1, "pref":xpf, "city":xcy, "area":xar, "addr":xad, "focus":xfs};
	return pm;
}
function zipaddr_ownpm_ctrl(prm){  let ans= new Array();
	const elm= document.getElementsByClassName("wp-block-snow-monkey-forms-item");
	for( let ii=0;ii<elm.length;ii++ ){
		const wk= zipaddr_ownpm_look(elm[ii].innerHTML, prm); // <div..>郵便番号  </div>
		let da= wk.split('_');                    // 0_xzip
		if( da.length==2 ) ans[da[0]]= da[1];
	}
	return ans;
}
function zipaddr_ownpm_look(dat,prm){  let ans="";
	for( let ii=0;ii<prm.length;ii++ ){
		for( let jj=0;jj<prm[ii].length;jj++ ){
			const ptrn= new RegExp(prm[ii][jj]);  //郵便番号
			if( dat.match(ptrn) ){
				let msg= dat.match(/ name="(.*)"/i); // <input type="text" name="zip"..
				if( msg!=null && msg!==false ){
					const da= msg[0].split('"');  // name="zip"..
					ans= ii +"_"+ da[1];          // zip
					ii= 9999;
					break;
	}	}	}	}
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
