

window.addEventListener("load",  () => {

    let overlay = document.querySelector("#overlay")
    let listingPop = document.querySelectorAll(".book-offer-popup")
    let listingCell = document.querySelectorAll(".book-offer-cell")
    let escBtn = document.querySelectorAll(".esc")

    for (let i = 0; i < listingCell.length; i++){
        listingCell[i].querySelector("button").addEventListener("click", () => {
            listingPop[i].classList.add("active");
            overlay.classList.add("active")
        })

        escBtn[i].addEventListener("click", () => {
            listingPop[i].classList.remove("active");
            overlay.classList.remove("active")
        })

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape"){
                overlay.classList.remove("active")
                listingPop[i].classList.remove("active")
            }
        })

        overlay.addEventListener("click", () => {
            overlay.classList.remove("active")
            listingPop[i].classList.remove("active")
        })

    }

})
