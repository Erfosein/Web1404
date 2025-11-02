let fs = require('fs');
let inputs = process.argv.slice(3);
let command = process.argv[2];


console.log("command is:", command);
console.log("inputs are:", inputs);
console.log("------------------------");

if (command == "sum") {
    console.log(Number(inputs[0]) + Number(inputs[1]));
}
else if (command == "minus") {
    console.log(Number(inputs[0]) - Number(inputs[1]));
}
else if (command == "print") {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        age: inputs[2]
    }

    // let obj = {};
    // obj['name'] = inputs[0];
    // obj['family'] = inputs[1];
    // obj['age'] = inputs[2];

    console.log("your object is:", obj);

}
else if (command == "print2") {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        age: inputs[2]
    }

    for (let key in obj) {
        console.log('key:', key);
        console.log('value:', obj[key]);
    }
}
else if (command == "print3") {
    let text = 'salam';
    xxx(text);
}
else if (command == "print4") {
    let text = 'salam ';
       console.log(yyy(text)) ;
}
else if (command === "write"){
    let body = yyy('salam');
    body = JSON.stringify(body);
    fs.writeFile('./data.text',body,function(){
        console.log('file saved.')
    })
    
}
else {
    console.log("command not found.")
}


function xxx(sepehr) {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        age: inputs[2]
    }

    for (let key in obj) {
        console.log(sepehr, obj[key]);
    }
}
function yyy(sepehr) {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        age: inputs[2]
    }
    let newobj={};
    for (let key in obj) {
        newobj[key]= sepehr + '' + obj[key]
    }
    return newobj;
}

