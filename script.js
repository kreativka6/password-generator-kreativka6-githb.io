

const PwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const numberEl = document.getElementById('number');

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqsrtuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
};

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
};

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
};

function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
};

function generatePassword(){
    const len  = lenEl.value;
    let password = "";
    for(let i =0; i<len; i++){
        const x = generateX();
        password += x;
    }
PwEl.innerText = password;
}

function generateX(){
    constmy = [];
    if(upperEl.checked){
        my.push(getUpperCase());
    }
    if(lowerEl.checked){
        my.push(getLowerCase());
    }
    if(numberEl.checked){
        my.push(getNumber());
    }
    if(symbolEl.checked){
        my.push(getSymbol());
    }
    if(my.length === 0) return "";
    return my[Math.floor(Math.random()*my.length)];
}


generateEl.addEventListener('click',generatePassword);

copyEl.addEventListener('click', ()=> {
    const textarea= document.createElement("textarea");
    const password = PwEl.innerText;
    if(!password){
        return
    };
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.exeCommand("copy");
    textarea.remove();
});