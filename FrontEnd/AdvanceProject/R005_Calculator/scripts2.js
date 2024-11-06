let input = document.querySelector("#input");
let item = document.querySelector("Item");
let str = "";
let flag = true;
function ac() {
    str = ""
    input.innerText = "0";
    console.log(str)
}
function b1() {
    str = str + "1"
    input.innerText = `${str}`;
    console.log(str)
}
function b2() {
    str = str + "2"
    input.innerText = `${str}`;
    console.log(str)
}
function b3() {
    str = str + "3"
    input.innerText = `${str}`;
    console.log(str)
}
function b4() {
    str = str + "4"
    input.innerText = `${str}`;
    console.log(str)
}
function b5() {
    str = str + "5"
    input.innerText = `${str}`;
    console.log(str)
}
function b6() {
    str = str + "6"
    input.innerText = `${str}`;
    console.log(str)
}
function b7() {
    str = str + "7"
    input.innerText = `${str}`;
    console.log(str)
}
function b8() {
    str = str + "8"
    input.innerText = `${str}`;
    console.log(str)
}
function b9() {
    str = str + "9"
    input.innerText = `${str}`;
    console.log(str)
}
function b0() {
    str = str + "0"
    input.innerText = `${str}`;
    console.log(str)
}
function dot() {
    let ind = str.includes(".")
    if(ind){
        input.innerText = `${str}`;
    }
    else{
        str=str+".";
        input.innerText = `${str}`;
    }
}
function add() {
    str = str + "+"
    check(str);
}
function minus() {
    str = str + "-"
    check(str);
}
function mul() {
    str = str + "*"
    check(str);
}
function divide() {
    str = str + "/"
    check(str);
}

function mod() {
    str = str + "%"
    check(str);
}


function addminus(){
    str = eval(str);
    if(str[0]=="-"){
        str=str.replace("-","+");
        input.innerText = `${str}`;
    }
    else{
        str="-"+str
        input.innerText = `${str}`;
    }
}
function del() {
    str = str.slice(0, str.length - 1);
    if (str.length == 0) {
        input.innerText = "0";
    }
    else {
        input.innerText = `${str}`;
    }
    console.log(str)
}

function check(st) {
    let last = st.length - 1;
    console.log(last)
    let temp = str[last];
    let slast = st.length - 2;
    console.log(slast)
    if (((str[slast] == "+") || (str[slast]=="/") ||(str[slast]=="*") ||(str[slast]=="%")||(str[slast]=="-"))) {
        str = str.slice(0, str.length - 2);
        str=`${str}${temp}`
        input.innerText = `${str}`;
    }
    else {
        input.innerText = `${str}`;
    }
}

function equial() {
    let tem=str.length-1
    if((str[tem]=="/")||(str[tem]=="-")||(str[tem]=="+")||(str[tem]=="*")||(str[tem]=="%")){
        str = str.slice(0, tem);
    }
    try {
        
        str = eval(str);
        input.innerText = `${str}`;
        console.log(str)

    } catch (error) {
        input.innerText = "Error";
        str ="0"
        flag=true;
    }
}