function goPage(index) {
    for(var i=1;i<=5;i++){
        var p=document.getElementById("content"+i);
        p.style.display="none";
        if(i==index){
            p.style.display="block";
        } 
    }
}