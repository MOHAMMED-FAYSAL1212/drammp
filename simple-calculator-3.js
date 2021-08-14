// first of all select all elements...
const display1Ele = document.querySelector('.display1')
const display2Ele = document.querySelector('.display2')
const tempResultEle = document.querySelector('.temp-result')
const numberEle = document.querySelectorAll('.number')
const operationEle = document.querySelectorAll('.operation') 
const equalEle = document.querySelector('.equal')
const clearAllEle = document.querySelector('.all-clear')
const delEle = document.querySelector('.last-entity-clear')



// Take some variables...
let dis1Num = ''
let dis2Num = ''
let result = null
let lastoperation = ''
let haveDot = false


// loop for displaying number and dot



numberEle.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }

        function printOutput(num){
            display2Ele.innerText = getFormattedNumber(num);
        }
        function getFormattedNumber(num) {
            var n = Number(num)
            var value = n.toLocaleString("en")
            return value
        }

        // if(e.target.)
        dis2Num += e.target.innerText  // e function ta kaj korve jokon innertext e target korbo that means click korbo..
        display2Ele.innerText = dis2Num
    })
})


// loop for displaying various operations...
operationEle.forEach(operation => {
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) return
       haveDot = false

       const operationName = e.target.innerText
       
       if(dis1Num && !dis1Num && dis2Num && !dis2Num && lastOperation && !lastOperation){
           mathOperation()
       }
       else{
           result = parseFloat(dis2Num)
       }

       clearvar(operationName)
       lastOperation = operationName
       
    })
})


// for update display result
function clearvar(name =''){
    dis1Num += dis2Num+ ' ' + name + ' '
    display1Ele.innerText = dis1Num
    display2Ele.innerText = ''
    dis2Num = ''
    tempResultEle.innerText = result
}


// for math operation...
function mathOperation(){
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2Num)
    }

    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num)
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num)
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num)
    }
    else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num)
    }
    
}


// for equal...
equalEle.addEventListener('click', (e)=> {
    if(!dis1Num || !dis2Num) return  // || or sign..
    haveDot = false
    mathOperation()
    clearvar()
    display2Ele.innerText = result
    tempResultEle.innerText = ''
    dis2Num = result
    dis1Num = ''
})


// for all clear(AC)
clearAllEle.addEventListener('click', (e)=>{
    display1Ele.innerText = '0'
    display2Ele.innerText = '0'
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResultEle.innerText = '0'
})


// for CE
delEle.addEventListener('click', (e)=>{
    display2Ele.innerText = ''
    dis2Num = ''

   
}) 