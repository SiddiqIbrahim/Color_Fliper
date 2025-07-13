// function press() {
//   let input = document.getElementById("input").value;
//   let match = input.match(/^(\d+)([+\-*/])(\d+)$/); 
//   let result =document.getElementById("result");
   

//   if (match) {
//     let operand1 = Number(match[1]);
//     let operator = match[2];
//     let operand2 = Number(match[3]);

//     switch(operator){
//       case '+':
//       operand1+operand2
//       break;

//       case '-':
//       operand1-operand2
//       break;

//       case '*':
//       operand1*operand2
//       break;
//       case '/':
//         operand2!== 0?
//         operand1/operand2:'cannot divide by zero';
//         break;

//         default:
//          answer='invalid oprator';

          
//     }

//      result.innerHTML=
//      'operand1='+ operand1 + '<br>'+
//      'operator='+operator + '<br>'+
//      'operand2='+operand2+'<br>'+'.'
    
//   } else {
//     result.innerHTML = "Invalid input";
//   }

//   console.log(input);
  
// }
// function click(){
//     let catocari = document.getElementById("values").
//     value
//     let catocari_value = "";

//     if(catocari==="school"){
//         catocari_value = document.getElementById("v1").value;
//     }else if(catocari==="UG"){
//          catocari_value = document.getElementById("v2").value;
//     }else if(catocari==="PG"){
//          catocari_value = document.getElementById("v3").value;
    
//     }else if(catocari==="Doc"){
//          catocari_value = document.getElementById("v4").value;
    
//     }
//     document.getElementById("result").innerHTML=catocari_value
// }
// console.log(item);
// //another way to create object
// //dot notation
// let item2 = new Object()
// item2.name = 'phone',
// item2.price = 12000,
// item2.quantity = 1
// console.log(item2.price);

// item.name='redmi'
// item.actor='vijay'
// console.log(item);

// //square notation

// item['actoress']='pooja hegde'
// console.log(item);

// let item={
//   name:'siddiq',
//   mobile:'Redmi',
//   place:'Madurai',
//   Number:7448937734,
//   buy:function(){
//     console.log('item added to cart');
    
//   },
//  addToList(){
//     console.log('item add to list');
    
//  }
// }

// item.buy()
// // console.log(item);
// item.addToList()

// let user = {
//   name: 'Siddiq',
//   password:5656,
//   Email: 'siddiqibrahim55555@gmail.com',
//  login:function(){
//    console.log('login');
   
//  }

// }
// console.log(user);

// user.Address='pasumail'
// console.log(user);
// user.name='ashik'
// console.log(user);
// user.login()


// function c(){
// let store = document.getElementById("somefield")
// console.log(store.value);
// console.dir(store);
// let obe = {
//   name:store
// }
// console.log(obe);

// let val = document.getElementById("result")
// console.log(val)
// console.dir(val)
// val.textContent=store

// let button = document.querySelector("button")
// console.log(button.style);
// console.dir(button);
// button.style.backgroundColor = "red"
// button.style.color = "white"

// }
  
//for loop
// for(let i=1; i<=5; i++){
//   console.log(i);
  
// }
  
//while loop
//  i=20
//  while(i>=1){
//   console.log(i);
//   i--;
//  }

 //do while loop
// i=1
// do{
//   console.log(i);
//   i++;
  
// }while(i<=5)
//break - stop the loop
  // while(true){
  //   let num = Number(prompt('enter a number'))
  //   if(!isNaN(num))
  //   break;
  // }

  // continue - skip the current iteration
  // for(i=1; i<=10; i++){
  //   if(i%2==0)
  //     continue
  //   console.log(i);
    
  // }

  // //for...of
  // let arr = ['apple','orange','grapes','mango']
  // for(i=0; i<arr.length; i++){
  //   console.log(arr[i].toUpperCase());
    
  // }

  // for(let fruit of arr){
  //   console.log(fruit.toUpperCase());
    
  // }

  // //for...in
  // item = {
  //   name:'GT650',
  //   price:430000,
  //   quantity:1,
  // }

  // for(let bike in item){
  //   console.log(item.name)
  // }

    const color = document.getElementById("bc")
    color.addEventListener('click',() => {
      const r = Math.floor(Math.random()*256);
      const g = Math.floor(Math.random()*256);
      const b = Math.floor(Math.random()*256); 
      const randomval = `rgb(${r},${g},${b})`;
       let co = document.getElementById("bg")
    co.style.backgroundColor=randomval
      const pval= document.getElementById("ptag")
      pval.innerHTML=randomval
      
    })
  
