function zipaddr_ownpm(){     //booking-package用
	const ver="1.6";
	const key="booking_package_input_";
	let ans= new Array();
	ans[0]= key +"zip";       //郵便番号
	ans[1]= key +"zip1";      //郵番_後半4桁
	ans[2]= key +"pref";      //都道府県
	ans[3]= key +"city";      //市区町村
	ans[4]= key +"address";   //住所
	ans[5]= key +"addrfocus"; //focus
//
	ans[6]= ans[0]+"2";       //booking_package_input_zip2
	ans[7]= key   +"zip21";   //郵番_後半4桁
	ans[8]= ans[2]+"2";
	ans[9]= ans[3]+"2";
	ans[10]=ans[4]+"2";
	ans[11]=ans[5]+"2";
//Set
	pm= new Array();
pm[1]= {"zip":ans[0], "zip1":ans[1], "pref":ans[2], "city":ans[3], "area":"", "addr":ans[4], "focus":ans[5]};
pm[2]= {"zip":ans[6], "zip1":ans[7], "pref":ans[8], "city":ans[9], "area":"", "addr":ans[10],"focus":ans[11]};
	return pm;
}
function zipaddrjp_browsjp_input(){
let pppp = "0:姓|1:名|51:氏名,名前,お名前|52:フリガナ,カナ|53:ふりがな,かな|";
	pppp+= "54:郵便番号,郵番,〒|4:都道府県|5:市区町村,市町村|6:地域,町域|7:番地,住所,ご住所|";
	pppp+= "8:メールアドレス,メール|9:電話,電話番号|10:会社名,組織名";
	const ddd= pppp.split("|");                   // 51:氏名,名前|52:フリガナ
	let chngt= new Array();
	let no= 0;                                    // 添字
	let elm= document.querySelectorAll('.row');   // 項目のclass名
	if( !elm ) {elm= new Array();}
	for( let ii=0;ii<elm.length;ii++ ){           // データ有り？
		let obj= elm[ii].querySelector(".name");
		if( obj ){
			const komk= obj.innerHTML;            // 項目名：氏名（全角）
			const komksize= komk.length;
			let idn= zipaddrjp_browsjp_input_next(elm[ii]);
			if( komk != "" && idn != "" ){
				for( let jj=0;jj<ddd.length;jj++ ){
					const aaa= ddd[jj].split(":");// 51:氏名,名前,お名前
					const nnn= aaa[0];            // 51
					const mmm= aaa[1].split(","); // 氏名,名前,お名前
					let eee="";
					for( let kk=0;kk<mmm.length;kk++ ){
						const name= mmm[kk];      // 氏名...
						const mmmsize= name.length;
						if( komksize<mmmsize ){;} // 不一致
						else
						if( name == komk ) {eee=komk; kk=999;}                   // 合致
						else                      // komk < mmm
						if( komk.substr(0,mmmsize) == name ) {eee=komk; kk=999;} // 上位一致
					}
					if( eee != "" ){              // データ有り
						chngt[no]= nnn +":"+ idn; // 51:booking_package_input_name
						no++;
						jj= 999;                  // break
		}	}	}	}
	}
	let ans= chngt.join(',');                     // 51:booking_package_input_name,54:booking_pack...
	return ans;
}
function zipaddrjp_browsjp_input_next(elm){
	let idn="";
	let obj= elm.querySelector('.value');
	if( obj ){
		const obj2= obj.querySelector('.hidden_panel');
		if( obj2 && obj2.id != "" ){
			idn= obj2.id;
			idn= idn.replace("_value_","_input_");
	}	}
	return idn;
}
