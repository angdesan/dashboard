let runScripts = () =>{
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
let modifyText = ()=>{
    let tagName = 'p'
    let listOfP = document.getElementsByTagName( tagName );
    let elementP = listOfP[3];
    elementP.innerHTML = 'Dinero actual';

    let tagName2 = 'h4';
    let listOfH4 = document.getElementsByTagName(tagName2);
    let elementH4 = listOfH4[0];

    elementH4.innerHTML = '$301k';
}
let updateData = () =>{
    
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  
  let [users, clients,sales] = data;
  let {title: title_users, value: value_users} = users;
  let {title: title_clients, value: value_clients} = clients;
  let {title: title_sales, value: value_sales} = sales;
   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
  
  let listOfElements = document.getElementsByClassName('text-end pt-1');
  let [,second,third,fourth] = listOfElements;

  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;

}
let updateIndicators = () =>{
    
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]
      let [week, today, yesterday, yesterday2] = cambios;
      let {valor_previo: previoWeek, valor_actual: actualWeek, mensaje_tiempo: tiempoWeek} = week;
      let {valor_previo: previoToday, valor_actual: actualToday, mensaje_tiempo: tiempoToday} = today;
      let {valor_previo: previoYesterday, valor_actual: actualYesterday, mensaje_tiempo: tiempoYesterday} = yesterday;
      let {valor_previo: previoYesterday2, valor_actual: actualYesterday2, mensaje_tiempo: tiempoYesterday2} = yesterday2;
    
      let porcentaje_de_cambio_week = ((actualWeek - previoWeek)*100/previoWeek).toFixed(2);
      let porcentaje_de_cambio_today = ((actualToday - previoToday)*100/previoToday).toFixed(2);
      let porcentaje_de_cambio_yesterday = ((actualYesterday - previoYesterday)*100/previoYesterday).toFixed(2);
      let porcentaje_de_cambio_yesterday2 = ((actualYesterday2 - previoYesterday2)*100/previoYesterday2).toFixed(2);

      let clase_cambio_week = porcentaje_de_cambio_week>0? 'text-success' : 'text-danger';
      let clase_cambio_today = porcentaje_de_cambio_today>0? 'text-success' : 'text-danger';
      let clase_cambio_yesterday = porcentaje_de_cambio_yesterday>0? 'text-success' : 'text-danger';
      let clase_cambio_yesterday2 = porcentaje_de_cambio_yesterday2>0? 'text-success' : 'text-danger'; 
    
    
    let message_week = `<p class="mb-0"><span class="text-sm ${clase_cambio_week} font-weight-bolder"> ${porcentaje_de_cambio_week}% </span> ${tiempoWeek} </p>`;
    let message_today = `<p class="mb-0"><span class="text-sm ${clase_cambio_today} font-weight-bolder"> ${porcentaje_de_cambio_today}% </span> ${tiempoToday} </p>`;
    let message_yesterday = `<p class="mb-0"><span class="text-sm ${clase_cambio_yesterday} font-weight-bolder"> ${porcentaje_de_cambio_yesterday}% </span> ${tiempoYesterday} </p>`;
    let message_yestarday2 = `<p class="mb-0"><span class="text-sm ${clase_cambio_yesterday2} font-weight-bolder"> ${porcentaje_de_cambio_yesterday2}% </span> ${tiempoYesterday2} </p>`;
    let arr_message = [message_week,message_today,message_yesterday,message_yestarday2];
    let listOfElements = document.getElementsByClassName('card-footer p-3');
    for(let x in listOfElements){
        listOfElements[x].innerHTML = arr_message[x];
    }
    

  
}
runScripts();
modifyText();
updateData();
updateIndicators();


