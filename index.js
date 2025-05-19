// //function getSumOfNumbers(number, type = 'odd') {
//   //  let sum = 0;
//   //
//   //  for (let i = 0; i <= number; i++) {
//   //    if (type === 'odd' && i % 2 !== 0) {
//   //      sum += i;
//    //   }
//    //   else if (type === 'even' && i % 2 === 0) {
//    //     sum += i;
//    //   }
//    //   else if (type === '') {
//    //     sum += i;
//   //    }
//   //  }
//  // 
//   //  return sum ;
//  // }
// //console.log(getSumOfNumbers(10, 'odd'));  // 25 (1 + 3 + 5 + 7 + 9)
// //console.log(getSumOfNumbers(10, 'even')); // 30 (0 + 2 + 4 + 6 + 8 + 10)
// //console.log(getSumOfNumbers(10, ''));     // 55 (0 + 1 + 2 + ... + 10)
// //console.log(getSumOfNumbers(10));         // 25 (по умолчанию type = 

// //const salary = [200,300,400,500]

// //findindex = salary.findIndex((zarplata,index) =>{
//     //return zarplata === 500
// //})
// //console.log(findindex)

// let peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария',
//     'Светлана', 'Артем', 'Глеб'];

// let giveParcel = (i) => {
//     alert('Выдана поссылка ' + peopleWaiting[i])
//     peopleWaiting.splice(i,0)
// }

// let leaveQueueWithoutParcel = (i) =>{
//     alert('Ушли из очереди ' + peopleWaiting)
//     peopleWaiting.splice(i,peopleWaiting.length)
// }

// for(let i = 0; i < peopleWaiting.length;i ++){
// if(peopleWaiting[i] === 'Кирилл'){
// giveParcel(i)
// leaveQueueWithoutParcel(i)
// }else{
// giveParcel(i)
// }

// }


let getSumOfSequence = (number) => {
    const massiv = []

    for ( let i = 1; i <= number; i ++) {
        massiv.push(i)
    }
    return massiv[0] + massiv[massiv.length - 1]
}
console.log (getSumOfSequence(7))

