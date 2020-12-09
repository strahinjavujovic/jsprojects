document.getElementById('prvi').addEventListener('click',dodajPosao);

function dodajPosao(){


    
    var div=document.createElement('div');
    document.getElementById('lista').appendChild(div);
    

    var b= document.createElement('li');
    b.textContent=document.getElementById('uneto').value;
    
    div.appendChild(b);

    var c=document.createElement('button');
    c.innerHTML='X';
    div.appendChild(c);

    var d=document.createElement('button');
    d.innerHTML='Done';
    
    div.appendChild(d);
    c.addEventListener('click',obrisi);
        
    function obrisi(){
        div.remove();
        document.getElementById('uneto').focus();
    }
    d.addEventListener('click',gotovo);
    function gotovo(){
        div.style.backgroundColor='green';
        document.getElementById('uneto').focus();
    }
    document.getElementById('uneto').value='';
    document.getElementById('uneto').focus();
    
  
  
}
document.getElementById('drugi').addEventListener('click',obrisiSve);

function obrisiSve(){
   
    var e = document.getElementById("lista"); 
        var first = e.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = e.firstElementChild; 
        } 
}