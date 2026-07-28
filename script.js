const tanks = [

{
    name:"M1 Abrams",
    image:"images/abrams.jpg",
    text:"アメリカの主力戦車。優れた防御力と火力を持ち、現在も世界トップクラスの性能を誇ります。",
    spec:"重量：66.8t　最高速度：67km/h"
},

{
    name:"Leopard 2",
    image:"images/leopard2.jpg",
    text:"ドイツの主力戦車。命中精度が高く、多くの国で採用されています。",
    spec:"重量：64t　最高速度：68km/h"
},

{
    name:"90式戦車",
    image:"images/type90.jpg",
    text:"日本の主力戦車。高い機動力と自動装填装置を備えています。",
    spec:"重量：50.2t　最高速度：70km/h"
},

{
    name:"10式戦車",
    image:"images/type10.jpg",
    text:"日本の最新主力戦車。ネットワーク機能と高い機動力が特徴です。",
    spec:"重量：48t　最高速度：70km/h"
},

{
    name:"T-90M",
    image:"images/t90.jpg",
    text:"ロシア軍の近代化主力戦車。最新の防御装備を搭載しています。",
    spec:"重量：48t　最高速度：60km/h"
},

{
    name:"Challenger 2",
    image:"images/challenger2.jpg",
    text:"イギリスの主力戦車。優れた装甲で知られています。",
    spec:"重量：62.5t　最高速度：59km/h"
},

{
    name:"K2 Black Panther",
    image:"images/k2.jpg",
    text:"韓国の最新鋭主力戦車。高い機動性能を持っています。",
    spec:"重量：55t　最高速度：70km/h"
},

{
    name:"Leclerc",
    image:"images/leclerc.jpg",
    text:"フランスの主力戦車。自動装填装置を採用した高性能戦車です。",
    spec:"重量：57.4t　最高速度：72km/h"
}

];

let index = 0;

/*=========================
  戦車表示
=========================*/

function showTank(){

    document.getElementById("tankName").textContent =
        tanks[index].name;

    document.getElementById("tankImage").src =
        tanks[index].image;

    document.getElementById("tankImage").alt =
        tanks[index].name;

    document.getElementById("tankText").innerHTML =
        tanks[index].text +
        "<br><br><strong>" +
        tanks[index].spec +
        "</strong>";

}

/*=========================
  次へ
=========================*/

function nextTank(){

    index++;

    if(index >= tanks.length){

        index = 0;

    }

    showTank();

}

/*=========================
  前へ
=========================*/

function prevTank(){

    index--;

    if(index < 0){

        index = tanks.length - 1;

    }

    showTank();

}

/*=========================
  ランダム表示
=========================*/

function randomTank(){

    let random;

    do{

        random = Math.floor(Math.random()*tanks.length);

    }while(random === index);

    index = random;

    showTank();

}

/*=========================
  今日のおすすめ
=========================*/

function todayTank(){

    const day = new Date().getDate();

    const recommend = day % tanks.length;

    document.getElementById("recommendTank").textContent =
        tanks[recommend].name;

}

todayTank();

/*=========================
  ダークモード
=========================*/

function darkMode(){

    document.body.classList.toggle("dark");

}
