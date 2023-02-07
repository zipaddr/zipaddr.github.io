function zipaddr_ownpm(){     //TieredWorks用
	const ver="1.3";
const idc1= "郵便番号,〒"           .split(',');
const idc2= "都道府県"              .split(',');
const idc3= "市区町村,市町村"       .split(',');
const idc4= "町域,地域"             .split(',');
const idc5= "番地,以降の住所,ご住所".split(',');
	let zip= new Array();
	let prf= new Array();
	let cty= new Array();
	let ara= new Array();
	let adr= new Array();
	for( let ii=0;ii<3;ii++ ){
		zip[ii]= zipaddr_ownpm_roop(idc1,ii);
		prf[ii]= zipaddr_ownpm_roop(idc2,ii);
		cty[ii]= zipaddr_ownpm_roop(idc3,ii);
		ara[ii]= zipaddr_ownpm_roop(idc4,ii);
		adr[ii]= zipaddr_ownpm_roop(idc5,ii);
	}
//Set
	pm= new Array();
pm[1]={"zip":zip[0],"zip1":"", "pref":prf[0], "city":cty[0], "area":ara[0], "addr":adr[0],"focus":adr[0]};
pm[2]={"zip":zip[1],"zip1":"", "pref":prf[1], "city":cty[1], "area":ara[1], "addr":adr[1],"focus":adr[1]};
pm[3]={"zip":zip[2],"zip1":"", "pref":prf[2], "city":cty[2], "area":ara[2], "addr":adr[2],"focus":adr[2]};
	return pm;
}
function zipaddr_ownpm_roop(names,ii){
	let ans="";
	const nn= (ii==0) ?  "" : ii+1;
	for( let jj=0;jj<names.length;jj++ ){
		ans= zipaddr_ownpm_tag(names[jj]+nn);
		if( ans != "" ) break;
	}
	return ans;
}
function zipaddr_ownpm_tag(names){
	let ans="";
	const ptrn= new RegExp(names);
	const elm= document.getElementsByTagName("label");
	for( let ii=0;ii<elm.length;ii++ ){
		let dat= elm[ii].innerHTML;               // <label...>都道府県  </label>
		dat= dat.replace(/　/g,'');
		dat= dat.replace(/ /g, '');
		if( dat.match(ptrn) ){                    //都道府県/
			ans= elm[ii].getAttribute('for');     // for;
			break;
	}	}
	return ans;
}
