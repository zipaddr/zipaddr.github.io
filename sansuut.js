function San(){
this.ver= "1.10";
this.opt= "1";                                    // 処理レベル
this.dcnt= 3;                                     // 処理回数カウンタ
this.ccnt;
this.ecnt;
this.qi= "qui";                                   // 問題img
this.ai= "ani";                                   // 回答img
this.lv= "lvl";                                   // レベル
this.q1= "qus1";                                  // 問題1
this.q2= "qus2";                                  // 問題2
this.ans="ans";                                   // 回答
this.kwd="keywd";                                 // キーワード
this.sta="start";
this.tra="training";
this.sansu="https://zipaddr10.com/js/sansuut.php";// 提供元
this.domain= "ドメイン名";                        // 修正要（利用先ドメイン）
this.contra= "契約コード";                        // 修正要（契約コード）
this.time="";
} var SA= new San;
San.r=function(y){San.t("mesg",y)};San.start=function(){if(document.getElementById(SA.sta))document.getElementById(SA.sta).style.display="none";if(document.getElementById(SA.tra))document.getElementById(SA.tra).style.display="block";San.t(SA.lv,SA.opt);SA.ccnt=0;SA.ecnt=0;San.u()};San.n=function(w,q){document.getElementById(w).value=q};San.dFd=function(){if(typeof sansuut_own==="function")sansuut_own();var n=document.getElementById(SA.kwd)?document.getElementById(SA.kwd).innerHTML:"";var m=location.host+"|"+location.hostname;var u=SA.sansu+"?d="+SA.domain+"&c="+SA.contra+"&u="+m+"&x="+n+"&v=5";San.nWb(u)};San.nWb=function(u){var p=document.createElement("script");p.setAttribute("type","text/javascript");p.setAttribute("src",u);p.setAttribute("charset","UTF-8");document.body.appendChild(p)};San.z=function(){if(SA.ecnt==0)var v=San.k();else if(SA.ecnt<=3)var v="よくできました";else if(SA.ecnt<=5)var v="がんばったね";else if(SA.ecnt<=8)var v="またやろうね";else var v="もっとれんしゅうね";v+="("+(SA.dcnt-SA.ecnt)+")<br />";if(SA.time!="")v+=SA.time+"<br />";San.e(v)};San.g=function(r){var c=r+1;return Math.floor(Math.random()*c)};San.u=function(){if(SA.opt=="1"){q1=San.g(5);q2=San.g(5)}San.t(SA.q1,q1);San.t(SA.q2,q2)};San.t=function(t,e){document.getElementById(t).innerHTML=e};San.e=function(n){San.t("final",n)};San.compute=function(){var z=document.getElementById(SA.q1).innerHTML;var p=document.getElementById(SA.q2).innerHTML;var f=document.getElementById(SA.ans).value;if((parseInt(z)+parseInt(p))==parseInt(f)){San.r("せいかいです。");SA.ccnt++;var w=""}else{San.r(f+"はまちがいです。");SA.ecnt++;var w="1"}if((SA.ccnt+SA.ecnt)>=SA.dcnt){San.z()}else if(w==""){San.n(SA.ans,"");San.u()}};San.k=function(){return"おみごとです"};if(window.addEventListener){window.addEventListener('load',San.dFd,true)}else if(window.attachEvent){window.attachEvent('onload',San.dFd,true)}