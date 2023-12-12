function Calculate() {
    let score = Math.floor(Math.random() * 101) + "%";

    let p1 = document.querySelector("#p1").value;
    let p2 = document.querySelector("#p2").value; 

    if(p1 == "" || p2 == "") {
        alert("Viss nav aizpildīts")
    }
    else{document.querySelector("#score").style.visibility = "visible";
    document.querySelector("#score").innerText = score;}
    


    
}