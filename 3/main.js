window.addEventListener('load',prazan);
let i=1;

function prazan(){
    var tekst=document.createElement('span');

    document.getElementById('notes').appendChild(tekst);
    tekst.textContent='No notes added yet!'
}
document.getElementById('btn').addEventListener('click',dodaj);

function dodaj(){
    var a=[];
    if(i==1){
    var text=document.getElementById('notes').firstElementChild;
    text.remove();
    }
    if(i<=2){   
    var div=document.createElement('div');
    document.getElementById('notes').appendChild(div);
    var naslov=document.createElement('p');
    var unos=document.createElement('p');
    var dugme=document.createElement('button');
    div.appendChild(naslov);
    div.appendChild(unos);
    div.appendChild(dugme);
    naslov.textContent='Notes '+i;
    dugme.innerHTML='View Detail';

    if(document.getElementById('beleska').value.length>50){
       unos.textContent= document.getElementById('beleska').value.substr(0,40)+'...';
       a[0]=document.getElementById('beleska').value;
       
    }
    else{
        unos.textContent= document.getElementById('beleska').value;
        dugme.disabled=true;
    }
    }
    dugme.addEventListener('click',prikazi);

    function prikazi(){
        var prikaz= document.createElement('div');
        document.getElementById('sve').appendChild(prikaz);
        prikaz.setAttribute('id','prikaz');
        var m=document.createElement('span');  
        m.textContent=a[0];
        var dg=document.createElement('button');
        dg.innerHTML='X';
        prikaz.appendChild(dg);
        prikaz.appendChild(m);
        dg.addEventListener('click',zatvr);
        document.getElementById('sve').style.backgroundColor='rgba(136,136,136,0.8)';
        document.getElementById('beleska').style.backgroundColor='rgba(136,136,136,0.8)';
        prikaz.style.backgroundColor='white';

        function zatvr(){
            prikaz.remove();
            document.getElementById('sve').style.backgroundColor='white';
            document.getElementById('beleska').style.backgroundColor='white';
        }
       prikaz.addEventListener('mouseover',over);
       prikaz.addEventListener('mouseleave',leave)
       
       function over(){
           dg.style.color='black';    
       }
       function leave(){
        dg.style.color='grey';
       }
    }
    document.getElementById('beleska').value="";
    
    i++;

}