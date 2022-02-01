/**
 * get tab variable
 */
const link = document.querySelectorAll('.link')
const tab = document.querySelectorAll('.tab')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

/**
 * tabbuttonLoop
 */
for (let i = 0; i < link.length; i++) {
    link[0].setAttribute('onclick', 'tabFunction(event,one)')
    link[1].setAttribute('onclick', 'tabFunction(event,two)')
    link[2].setAttribute('onclick', 'tabFunction(event,three)')
    link[3].setAttribute('onclick', 'tabFunction(event,four)')

}
/**
 * tabcontroll
 * @param {*} evt 
 * @param {*} idd 
 */
function tabFunction(e, idd) {

    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = 'none'

    }
    for (let i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace('active', '')
    }
    idd.style.display = "block";
    e.currentTarget.className += ' active'
}

/**
 *get analog Clock variable
 */
 const hr = document.querySelector('.hr')
 const min = document.querySelector('.min')
 const sec = document.querySelector('.sec')
/**
 * Analog Clock
 * 
 */
setInterval(function(){
    sec.style.transform = `rotate(${degval(60, new Date().getSeconds())}deg)`;
    min.style.transform = `rotate(${degval(60, new Date().getMinutes())}deg)`; 
    hr.style.transform = `rotate(${degval(12, new Date().getHours())}deg)`;
},1000)
/**
 * degree calculate
 * @param {*} tm 
 * @param {*} crntime 
 * @returns 
 */
 function degval(tm, crntime){
   return (360 * crntime) / tm

 }

 /**
  * calculater
  */
 const monitorTop = document.querySelector('.top')
 const monitorBottom = document.querySelector('.bottom')

 monitorTop.innerHTML = 0
 monitorBottom.innerHTML = 0

 let allval = []


/**
 * 
 * @param {*} val 
 */
function valget(val){
    allval.push(val)
    monitorTop.innerHTML = allval.join('')
    monitorBottom.innerHTML = '= '+ 0
}
/**
 * equalFunction
 */
function equaSet(){
    if(allval == ''){
        monitorBottom.innerHTML = 'Error Syntax!' 
    }else{
        monitorBottom.innerHTML = '= '+ eval(allval.join(''))  
    }
}

/**
 * Single Clear Function
 */
 function clearSingle(){
    allval.pop()
    monitorTop.innerHTML = allval.join('')
}

/**
 * Calculation Clear All
 */
function clearAll(){
    allval = [] 
    monitorTop.innerHTML = 0
    monitorBottom.innerHTML = 0

};

/**
 * Instant Value Get
 */
const inPut = document.querySelectorAll('input')
const valOut = document.querySelector('.valOut')

/** 
 * checkbox loop
*/
inPut.forEach( data => {
    data.addEventListener('change',function(){
         let chk = document.querySelectorAll('input:checked')
         let chkArr = []
         chk.forEach( d => {
            chkArr.push(d.value)  
         })
         
         let item = ''
         chkArr.map( md => {
            item += `<li>${md}</li>`
           
         })

         valOut.innerHTML = item;

    })
})

const rad = document.querySelectorAll('input[type="radio"]')

rad.forEach( d => {
    d.addEventListener('change',function(){
         let r = document.querySelectorAll('input[type="radio"]:checked')
        rar = []
        r.forEach( v => {
            rar.push(v.value)
        });
        
        let oo = ''
        rar.map( ou => {
            oo += `<li>${ou}</li>` 
        })

        valOut.innerHTML = oo
    })
})