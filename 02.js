function combine(first, second, third) {
    let combineArr=[];
    let resultArr = combineArr.concat(first,second,third);
    return resultArr.join(' ');
}

let first = ['Behind','every','great','man'];
let second = ['is','a','woman'];
let third = ['rolling','her','eyes'];

console.log(combine(first,second,third));