// // let heading = document.querySelectorAll('h1');



// // let paragraph = document.querySelector('.para');

// // let link=document.querySelector('#link')

// // console.log(heading);
// // console.log(paragraph);
// // console.log(link);

// // let  parent = document.querySelector(".container")
// // console.log(parent)

// // console.log(parent.children);

// // let paragraph = document.querySelector('.para')

// // console.log(paragraph.previousElementSibling)

// // let heading = document.querySelector('h1');

// // heading.innerHTML = "This is the changed content in heading tag"

// // console.log(heading)

// // let paragraph = document.querySelector('.para')

// // paragraph.innerHTML =" tejaswini Jakkoju"


// // let heading2 = document.createElement('h2');

// // heading2.innerHTML = "This is additional heading";


// // let parent = document.getElementsByTagName('div');

// // parent[0].appendChild(heading2);

// // let paragraph = document.querySelector('.para');

// // paragraph.classList.remove('para')

// // paragraph.classList.add("newParagraph-class");

// // let items =[50,74,23,90,14];

// // let sum=0;

// // function addAll(items){

// // for(let i=0; i<items.length;i++){
// //     sum+=items[i];
// // }
// //  return sum;
// // }

// // console.log(addAll([12,35,67,89]));

// // console.log(addAll([10,15,11,23,45]));

// // function demo(){
// //     let obj ={
// //         name:"tejaswini",
// //         age:20,
// //         contact : 800876

// //     };
// //     // let b=40;sss
// //     console.log(obj.age);
// // }

// // demo ();

// // function main1(a,b){
// //     // let a=20;
// //     // let b=90;
// //     console.log(this.a);
// // }

// // main1("tejaswini",90);

// let arr=["Pavan","Aditya","Praveen","Tejaswini","Monika","shiromani"];
// let lengtharr=[];

// for(let i=0;i<arr.length;i++){
//     let names = arr[i];
//     let str=""
//     let measure =0;
//     for(let j=names.length-1 ;j>=0;j--){
//         str +=names[j];
        
//     }
//     lengtharr[i] = str.length;
//     arr[i]=str;
// }
// console.log("Array of length of array "+lengtharr);
// console.log(arr);
// console.log("Array of length of array in reverse order "+lengtharr.sort());


// for (let i=1 ; i<=3 ;i++){
//     for(let j=1 ; j<=3 ; j++)
//     {
//         for (k=1;k<=3;k++)
//         console.log(i,j,k);
//     }
// }

// let variable1 = null;
// let result1 = variable1 ?? "Default Value";
// console.log(result1);

// let variable1 = "Hello";
// let variable2 = null;

// // Using ??= to assign a value only if the variable is null or undefined
// variable1 ??= "Default Value";
// variable2 ??= "Default Value";

// console.log(variable1); // Output: "Hello" (variable1 was already defined)
// console.log(variable2);

// console.log(undefined || "Hello" || 0);


// let heading = document.querySelector('.heading');
// let button = document.querySelector(".button");
// let heading1 = document.querySelector(".hello");

// button.addEventListener("click",()=>{
//     button.innerHTML="Changed content";
//     button.classList.toggle("button");
//     heading.innerHTML="Tejaswini Jakkoju"
// })

// heading1.style.color ="green";
// heading1.style.textTransform ="upperCase"

// heading1.style.cssText = "color:green; background-color:red ; text-transform:upperCase"

// button.addEventListener("mouseover",()=>{
//     button.innerHTML="Changed content";
//     heading.innerHTML="name : Tejaswini Jakkoju"
//     button.classList.remove("button")
//     heading.style.cssText = "color:red"
// })

// button.addEventListener("mouseout",()=>{
//     button.innerHTML="Click Me!";
//     heading.innerHTML="Tejaswini";
//     button.classList.add("button");
//     heading.style.cssText = "color:darkblue"
// })

var a=true +true+true *3;
console.log(a);