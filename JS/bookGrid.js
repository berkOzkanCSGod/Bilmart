

window.addEventListener("load", () => {

    let bookCard = document.querySelectorAll(".book-card");

    for(let i = 0; i < bookCard.length; i++){
        bookCard[i].addEventListener("click", () => {
            window.location = "bookListing.html"
        })
    }

})