// let h1=document.querySelector("#box")
// let btn=document.querySelector("button")
//  let a=Math.floor(Math.random()*20)

//  btn.addEventListener("click",function(){
// //     let a=Math.floor(Math.random()*256)
//     let b=Math.floor(Math.random()*256)
//      let c=Math.floor(Math.random()*256)
    
//     console.log(a);

//     box.style.backgroundColor=`rgb(${a},${b},${c}`
//  })

// let arr=["Ritesh","Raj","Harsh","Mangal"]
// let a=Math.floor(Math.random()*arr.length)
// console.log([a]);
let arr=[
    {
    team: "CSK",
    primary: "yellow",
    secondry: "blue",
    trophies: 5,
    captain:" MSD"
}, 
{
    team: "RCB",
    primary: "red",
    secondry: "black",
    trophies: 2,
    captain: "Kohli"
},
{
    team:"MI",
    primary:"blue",
    secondry:"gold",
    trophies:5,
    captain:"Rohit",
},
{
    team:"SRH",
    primary:"orange",
    secondry:"black",
    trophies:1,
    captain:"Cummins",
},
{
    team:"KKR",
    primary:"purpule",
    secondry:"silver",
    trophies:3,
    captain:"Sherayash",
},
]

let main = document.querySelector("main")
let h1 = document.querySelector("h1")
let btn = document.querySelector("button")


btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*arr.length)
    h1.innerHTML= arr[num].team
    h1.style.backgroundColor =  arr[num].secondry
    main.style.backgroundColor = arr[num].primary
    main.style.backgroundColor = arr.trophies
    main.style.backgroundColor = arr.captain
})