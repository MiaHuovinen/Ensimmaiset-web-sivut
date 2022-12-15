let hamppari = document.getElementById("hamppari");
let topnav = document.getElementById("topnav");

hamppari.addEventListener("click", function (){
    navinAvaus();
});

function navinSulkeminen(){
    topnav.style.display = "none";
};

function navinAvaus(){
    if (topnav.style.display === "inline" ){
        topnav.style.display = "none";
    } else {
        topnav.style.display = "inline";
        topnav.addEventListener("mouseleave", function (){
            navinSulkeminen();
        });
    }
};
