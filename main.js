$(document).ready( function(){
var arr = [];
var name = document.querySelector('.person_name');
var next = document.querySelector('.next')


for(var i =1; i<13 ; i++){
   arr.push(prompt("enter next name: "));
   
}
alert(arr.join( "<br/>"));

function go(){
    if(arr.length !== 0){
        name.innerHTML = '';
        name.innerHTML = arr.shift();
    }
    else{
        name.innerHTML = 'Restuarent is full'
    }
}

next.addEventListener('click',function(e){
    go();
})

});