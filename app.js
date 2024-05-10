// buy
let dec = document.querySelector('.dec');
let result = document.querySelector('.result');
let inc = document.querySelector('.inc');
 
inc.addEventListener('click', function(){
    
    if(result.value < 5 ){
         result.value = Number(result.value) + 1;     
}
else{
    inc.style.cursor = 'not-allowed';
}
})

dec.addEventListener('click', function(){
    
    if(result.value > 1 ){
        result.value = Number(result.value) - 1;
        
  }
  else{
  dec.style.cursor = 'not-allowed';
  }
})
// buy


// up-down

let range = document.querySelector('.range');
let contain = document.querySelector('.contain');

range.addEventListener('input', function(){
   
    let relt = Number(range.value)
    contain.innerHTML = relt    ;
})

// up-down
let button = document.querySelector('.button');
let hover = document.querySelector('.hover');

button.addEventListener('click',function(){
   hover.classList.toggle('test')
})


