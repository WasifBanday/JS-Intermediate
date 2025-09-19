let numberofGuest=0;
let pizzasize;
// small-->for 2 people  
// medium -->for 3-5 people
// large --> for more then 5

if(numberofGuest<=0){
    pizzasize="Hanji, fir kyu hi karna hai order"
    console.log(pizzasize)
}
else if(numberofGuest<=2){
    pizzasize="small"
    console.log(pizzasize)
}
else if (numberofGuest<=5){
    pizzasize="medium"
    console.log(pizzasize)
}else {
    pizzasize="large"
    console.log(pizzasize)
}