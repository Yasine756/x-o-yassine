let turn='X'
 let array=[] 
 function gagner(a,b,c){
    document.getElementById('item'+a).style.background='red'
    document.getElementById('item'+b).style.background='red'
    document.getElementById('item'+c).style.background='red'
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.pointerEvents = 'none';
    });
    document.getElementById('titre').innerHTML = '⭐ Bien joué';

     document.getElementById('titre').style.color="#fff"
     document.getElementById('titre').style.fontSize="50px"
 }
function winner(){
    for(let i=0;i<10;i++){
    array[i] = document.getElementById('item'+i);
    
 }
 if (
    array[1].innerHTML === array[2].innerHTML &&
    array[2].innerHTML === array[3].innerHTML &&
    array[3].innerHTML !== '') 
    {
    gagner(1,2,3)

    }
 if (
    array[4].innerHTML === array[5].innerHTML &&
    array[5].innerHTML === array[6].innerHTML &&
    array[6].innerHTML !== '') 
    {
    gagner(4,5,6)
    }
 if (
    array[7].innerHTML === array[8].innerHTML &&
    array[8].innerHTML === array[9].innerHTML &&
    array[9].innerHTML !== '') 
    {
    gagner(7,8,9)
    }
 if (
    array[1].innerHTML === array[4].innerHTML &&
    array[4].innerHTML === array[7].innerHTML &&
    array[7].innerHTML !== '') 
    {
    gagner(1,4,7)
    }
 
 if (
    array[1].innerHTML === array[5].innerHTML &&
    array[5].innerHTML === array[9].innerHTML &&
    array[9].innerHTML !== '') 
    {
    gagner(1,5,9)
    }
 if (
    array[3].innerHTML === array[6].innerHTML &&
    array[6].innerHTML === array[9].innerHTML &&
    array[9].innerHTML !== '') 
    {
    gagner(3,6,9)
    }
 if (
    array[2].innerHTML === array[5].innerHTML &&
    array[5].innerHTML === array[8].innerHTML &&
    array[8].innerHTML !== '') 
    {
    gagner(2,5,8)
    }
 if (
    array[3].innerHTML === array[5].innerHTML &&
    array[5].innerHTML === array[7].innerHTML &&
    array[7].innerHTML !== '') 
    {
    gagner(3,5,7)
    }
 
 
    
 if (
    array[1].innerHTML === array[2].innerHTML &&
    array[2].innerHTML === array[3].innerHTML &&
    array[3].innerHTML !== '') 
    {
    gagner(1,2,3)
    }
 if (
    array[1].innerHTML === array[2].innerHTML &&
    array[2].innerHTML === array[3].innerHTML &&
    array[3].innerHTML !== '') 
    {
    gagner(1,2,3)
    }
 if (
    array[1].innerHTML === array[2].innerHTML &&
    array[2].innerHTML === array[3].innerHTML &&
    array[3].innerHTML !== '') 
    {
    gagner(1,2,3)
    }
}
function jeu(id){
let element=document.getElementById(id)
 if(turn==='X'&& element.innerHTML==''){
    element.innerHTML='X'
    turn='O'
    document.getElementById('titre').innerHTML='le rôle de O'
 }else if(turn==='O'&& element.innerHTML==''){
   element.innerHTML='O'
    turn='X'
    document.getElementById('titre').innerHTML='le rôle de X'
 }
 winner()
}

   