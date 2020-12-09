document.getElementById('btn').addEventListener('click',proveri);

function proveri(){
    var a=document.getElementById('beleska').value;
    var n=a.length;
    var g=0;
    
    for(var i=0;i<n;i++){
        var b=a.substring(i,i+1);
        if(b==='a'||b==='o'||b==='e'||b==='i'||b==='u')
            g++;
    }
    alert('There are '+g+' vowels!');
}