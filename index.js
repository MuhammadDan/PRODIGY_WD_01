const heading = document.querySelectorAll(".heading1,.heading2,.heading3,.btn1,.anchertag");
const navbarbutton = document.querySelector(".checkBtn");

navbarbutton.addEventListener("click", () =>{
    heading.forEach((headings)=>{
        if (headings.style.display === "none"){
            headings.style.display = "block";
        }else{
            headings.style.display = "none";
        }
    });
});