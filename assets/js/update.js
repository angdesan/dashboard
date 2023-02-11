runScripts = () =>{
    let id = 'chart-bars';
    let chart_bars = document.getElementById(id);
    console.log(chart_bars);

    let tagName = 'i';
    let icons = document.getElementsByTagName(tagName);
    console.log(icons);

    let className = 'card';
    let cards = document.getElementsByClassName(className);
    console.log(cards);




}
modifyText = ()=>{
    let tagName = 'p'
    let listOfP = document.getElementsByTagName( tagName );
    let elementP = listOfP[3];
    elementP.innerHTML = 'Dinero actual';

    let tagName2 = 'h4';
    let listOfH4 = document.getElementsByTagName(tagName2);
    let elementH4 = listOfH4[0];

    elementH4.innerHTML = '$301k';
}
runScripts();
