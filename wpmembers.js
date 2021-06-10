function zipaddr_ownpm(){     //WP-Members用
  const ver="1.1";
  const bbb= "billing_";
  const zzc= bbb+ "postcode";
  const zpf= bbb+ "state";
  const zci= bbb+ "city";
  const zad= bbb+ "address_1";
  pm= new Array();
  pm[1]= {"zip":zzc,  "zip1":"","pref":zpf,    "city":zci,   "area":"","addr":zad,    "focus":""}; // 項目idセット
  pm[2]= {"zip":"zip","zip1":"","pref":"state","city":"city","area":"","addr":"addr1","focus":""};
  return pm;
}
