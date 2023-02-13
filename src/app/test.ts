
let all :any  = 15;
let firstname :string ="hassan";
let lastname  : ( string | number );
lastname="hassan";
lastname=50;
let friends =["hasssan" ,"ssssss","smkmk" ,5 ,40 ,466 ,["hassasssn" ,"kjdidj"] , [true ,false]];

console.log(all ,firstname);

for (let i=0;i <friends.length;i++){

  console.log(friends[i]);
}

function details (department :string ,salary :number)  :string{
  return "hello ${department} , salary is ${salary}";
}
console.log(details("cs" ,540000));


function user (month :string ="un" ,country?:string)  :string{  // optional ?       **       default value = "un"
  return "hello ${department} , salary is ${salary}";
}
console.log(user("cs"));

function employess (...nums : number [] ) : number {
  let result =0 ;
  for (let i=0 ;i < nums.length ;i++){
    result +=nums[i];
  }

 // nums.forEach((i) => result +=i );                  //   for each

  return  result;
}
// **********************************************

// const add =function  (num1 :number ,num2 :number){
function xx (num1 :number ,num2 :number){

  return num1+num2;
}
console.log(xx(10,20));



const addview =  (num1 :number ,num2 :number) :number => num1 + num2;
console.log(addview(10,20));

// **********************************************

type buttons={
  up :string ,
  down:String;
}
function getActions(btn :buttons){

  console.log(`Acion for button up ${btn.up}`);
  console.log(`Acion for button up ${btn.down}`);
}
getActions({up:"jump" ,down :"down"});

// **********************************************
let article :readonly [number,string,boolean] = [1,"hassan" ,true];
article=[2,"smsm",false];
// article.push(50);
console.log(article);

// **************************************************************
const  Easy=10;
const Hard=5;
enum leval{
  easy=10,
  hard=5,

}

let lvl : string="Easy";

if(lvl === "Easy"){
  console.log(`you have get ${lvl} second ${leval.easy}`);
}
// ***************************************************************

//let myImage=document.getElementById("my-image") as HTMLImageElement;
let myImage=<HTMLImageElement>document.getElementById("my-image") ;
console.log(myImage);

let dd:String="1025";
console.log((dd as string).repeat(5));

// *****************************************************************

type A = {

  one:string;
  two :number;
}
type b = {

  three:string;
  four :boolean;
}

type mix =  A & b ;

function getAction(btn :mix){
  console.log(`heloo ${btn.one}`);
  console.log(`heloo ${btn.two}`);
  console.log(`heloo ${btn.three}`);
  console.log(`heloo ${btn.four}`);
}

getAction({one: "hassan" ,two :5646 ,three :"dssd" ,four: true});
// ***********************************************************************  type Annotations

let myObject : {
  readonly namemm ?: string ,   // can not update namemm value  //  ? optional if i need to remove there value
  idddd :number,
  skills : {
    one :string,
    two : string
  }
} =
{
//  namemm : "hassan",
  idddd :1,
  skills :{
    one :"html",
    two : "typescript"
  }
};

myObject.idddd=155;
//myObject.namemm="shalash";


console.log(myObject.namemm);
console.log(myObject.idddd);
console.log(myObject.skills.one);
console.log(myObject.skills.two);

// ***********************************************    interface

interface User {

  id ?:number ,
  name :string ,
  sayHello ?: () => string
}

let user8 :User ={

  id :18 ,
  name : "hasssan" ,
  sayHello : () => {
    return `welcome to ${user8.name} `;
  }
}

user8.name='name test';
console.log(user8);

function getData(data :User){
  console.log(`id is ${data.id}`);
  console.log(`name is ${data.name}`);
 // console.log(`name is ${data.sayHello()}`);

}
getData({id :52 ,name :"shalash edit" });





















