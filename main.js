const levelDropdown = document.getElementById("levelDropdown")



levelDropdown.addEventListener('change', function handleChange(event){
   if (event.target.value === "major-league"){
    console.log("this worked")
   } else if (event.target.value === "triple-a"){
    console.log("you genius")
   } else if (event.target.value === "double-a"){
    console.log("dubbaA")
   } else if (event.target.value === "high-a"){
    console.log("highsingledingle")
   } else if (event.target.value === "single-a"){
    console.log("regularsingledingle")
    } else {
    console.log("hmmmm")
    }
})



