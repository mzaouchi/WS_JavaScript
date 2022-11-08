// Data Types

// console.log("Hello JavaScript")

// var str = "Yassine"
// console.log(str)
// console.log(typeof(str))

// var nbr = -3.2
// console.log(typeof(nbr))

// var bool = false
// console.log(typeof(bool))


// var tab = [1,2,3,4]
// console.log(typeof(tab))

// var yassine = {nom : "G", age : 18}
// console.log(typeof(yassine)) 

// console.log(tab)
// console.log(tab[1])

// console.log(yassine)
// console.log(yassine.age)

// console.log(Object.keys(yassine))
// console.log(Object.values(yassine))
// console.log(Object.entries(yassine))


// var un
// console.log(typeof(un))

// var nl = null
// console.log(typeof(nl))

// JavaScript Operators

// var a = 5
// var b = 2

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// // a++
// // a = a + 1
// // a--
// console.log(a)

// EQUALITY OPERATORS 

// var a = 5
// var b = 2
// var c = '5'

// console.log(a==b)
// console.log(a===b)
// console.log(a==c)
// console.log(a===c)

// console.log(a!==c)

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)


// LOGICAL OPERATORS

// var a = 5
// var b = 2
// var c = '5'
// var d = 9

// console.log(true && false)
// console.log(true || false)

// console.log(a<b && a===d)
// console.log(a>b || a===c)

// JavaScript Conditionals

// var nbr = -10


// if(nbr>=0){
//   console.log('Positif')
// }

// if (nbr >= 0) {
//   console.log('Positif')
// }else{
//   console.log('Negatif')
// }


// JavaScript Conditionals

// if(age>=0 && age<=18){
//     console.log('Enfant')
//   }else if(age>18 && age<=60){
//     console.log('Adulte')
//   }else if(age>60){
//     console.log('Vieux')
//   }else{
//     console.log('Alien')
//   }

//   var age = 90
// if(age<0){
//   console.log('Alien')
// }else if( age<=18){
//   console.log('Enfant')
// }else if(age<=60){
//   console.log('Adulte')
// }else{
//   console.log('Vieux')
// }

// var a = 5

// switch (a){
//   case 1 : console.log('Un')
//           break
//   case 5 : console.log('cinq')
//           break
//   default : console.log('Yassine')
// }

// FUNCTION
// function djeja(a,b){
//     return a+b
//   }
  
//   console.log(djeja(3,5,8,6))
//   console.log(djeja(4,9))
//   console.log(typeof(djeja()))

// var tab = [1,2,3,4]

// for(var i = 0;i<tab.length;i++){
//   tab[i] = tab[i]+1
// }

// console.log(tab)
var tab = [1,2,3,4]

// for(var key in tab){
//     console.log(tab[key])
// }

// for(var yassine of tab){
//     console.log(yassine)
// }
var i =10
// while(i<tab.length){
//     console.log(tab[i])
//     i++
// }

do {
    console.log(tab[i])
        i++
} while (i<tab.length);