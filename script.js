const tanks = [

{
name:"M1 Abrams",
text:"アメリカの主力戦車。高い機動力と装甲性能を持っています。"
},

{
name:"Leopard2A7",
text:"ドイツの主力戦車。高い命中精度と防御力があります。"
},

{
name:"90式戦車",
text:"日本の主力戦車。軽量で高性能な射撃システムを搭載しています。"
},

{
name:"T-90",
text:"ロシアの主力戦車。防御力と火力のバランスが優れています。"
}

];

let index = 0;

function nextTank(){

    index++;

    if(index >= tanks.length){
        index = 0;
    }

    document.getElementById("tankName").innerHTML =
    tanks[index].name;

    document.getElementById("tankText").innerHTML =
    tanks[index].text;

}