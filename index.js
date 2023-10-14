const buttons = document.querySelectorAll(".btn")

const bodys = document.querySelector("body")

buttons.forEach( function (butt) {

    console.log(butt)

    butt.addEventListener("click", function(e) {

        console.log(e)
        console.log(e.target)
        if (e.target.id === "grey") {

            bodys.style.backgroundColor = e.target.id
            
        }

        if (e.target.id === "white") {

            bodys.style.backgroundColor = e.target.id
            
        }

        if (e.target.id === "blue") {

            bodys.style.backgroundColor = e.target.id
            
        }

        if (e.target.id === "yellow") {

            bodys.style.backgroundColor = e.target.id
            
        }

        if (e.target.id === "lime") {

            bodys.style.backgroundColor = e.target.id
            
        }

        if (e.target.id === "brown") {

            bodys.style.backgroundColor = e.target.id
            
        }

    } )
    
} )