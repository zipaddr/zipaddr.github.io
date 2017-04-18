function San(){
this.ver= "1.11";
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
San.kMd=function(){if(typeof sansuut_own==="function")sansuut_own();var g=document.getElementById(SA.kwd)?document.getElementById(SA.kwd).innerHTML:"";var p=location.host+"|"+location.hostname;var k=SA.sansu+"?d="+SA.domain+"&c="+SA.contra+"&u="+p+"&x="+g+"&v=6";San.dGe(k)};San.k=function(){return"おみごとです"};San.z=function(){if(SA.ecnt==0)var n=San.k();else if(SA.ecnt<=3)var n="よくできました";else if(SA.ecnt<=5)var n="がんばったね";else if(SA.ecnt<=8)var n="またやろうね";else var n="もっとれんしゅうね";n+="("+(SA.dcnt-SA.ecnt)+")<br />";if(SA.time!="")n+=SA.time+"<br />";San.e(n)};San.e=function(f){San.t("final",f)};San.compute=function(){var q=document.getElementById(SA.q1).innerHTML;var w=document.getElementById(SA.q2).innerHTML;var m=document.getElementById(SA.ans).value;if((parseInt(q)+parseInt(w))==parseInt(m)){San.r("せいかいです。");SA.ccnt++;var t=""}else{San.r(m+"はまちがいです。");SA.ecnt++;var t="1"}if((SA.ccnt+SA.ecnt)>=SA.dcnt){San.z()}else if(t==""){San.n(SA.ans,"");San.u()}};San.n=function(m,p){document.getElementById(m).value=p};San.u=function(){if(SA.opt=="1"){q1=San.g(5);q2=San.g(5)}San.t(SA.q1,q1);San.t(SA.q2,q2)};San.r=function(u){San.t("mesg",u)};San.start=function(){if(document.getElementById(SA.sta))document.getElementById(SA.sta).style.display="none";if(document.getElementById(SA.tra))document.getElementById(SA.tra).style.display="block";San.t(SA.lv,SA.opt);SA.ccnt=0;SA.ecnt=0;San.u()};San.t=function(v,b){document.getElementById(v).innerHTML=b};San.g=function(q){var f=q+1;return Math.floor(Math.random()*f)};San.dGe=function(g){var m=document.createElement("script");m.id="sansuut_id";m.setAttribute("type","text/javascript");m.setAttribute("src",g);m.setAttribute("charset","UTF-8");document.body.appendChild(m)};if(window.addEventListener){window.addEventListener('load',San.kMd,true)}else if(window.attachEvent){window.attachEvent('onload',San.kMd,true)}