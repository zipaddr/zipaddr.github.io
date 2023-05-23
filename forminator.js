function zipaddr_ownpm(){     //Forminator用
	const ver="1.4";
let cnt= 0;
let ans= new Array();
let prm= new Array();
	prm[0]=new Array(); prm[1]=new Array(); prm[2]=new Array(); prm[3]=new Array(); prm[4]=new Array();
	prm[0][0]="郵便番号"; prm[0][1]="〒";
	prm[1][0]="都道府県";
	prm[2][0]="市区町村"; prm[2][1]="市町村";
	prm[3][0]="町域";     prm[3][1]="地域";
	prm[4][0]="番地";     prm[4][1]="以降の住所"; prm[4][2]="ご住所";
	for( let ii=0;ii<prm.length;ii++ ){
		ans[ii]= "";
		for( let jj=0;jj<prm[ii].length;jj++ ){
			let res= zipaddr_ownpm_tag(prm[ii][jj]);
			if( res != "" ) {ans[ii]=res; jj=999; cnt++;}
		}
	}
	if( ans[2] == ans[3] ) ans[2]="";
	pm= new Array();
if( ans[0]!="" && cnt >= 2 ){
	pm[1]={"zip":ans[0],"zip1":"","pref":ans[1],"city":ans[2],"area":ans[3],"addr":ans[4],"focus":ans[4]};
}
	return pm;
}
function zipaddr_ownpm_tag(names){
	let ans="";
	const elm= document.getElementsByTagName("label");
	for( let ii=0;ii<elm.length;ii++ ){
		let parm= elm[ii].innerHTML; //<label for="forminator-field-text-_1234567"..>郵便番号</label>
		if( parm.includes(names) ){  //郵便番号？
			ans= elm[ii].getAttribute('for');
			ans= ans.replace("-label", "");
			break;
		}
	}
	return ans;
}
