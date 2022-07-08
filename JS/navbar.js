
let loggedIn = false;

    let homeBtn = document.getElementById("site-logo");
    let filterBtn = document.getElementById("filter-btn")
    let dropdownContainer =  document.querySelector(".drop-down-container")
    let resetBtn = document.getElementById("filter-reset");
    let applyBtn = document.getElementById("filter-apply");
    let filterItemsList = document.querySelectorAll(".ck-box")
    let filterLabelList = document.querySelectorAll(".ck-label")
    let loginBtn = document.getElementById("login")
    let overlay = document.getElementById("overlay")
    let loginPrompt = document.getElementById("login-prompt")
    let loginPopupContainer = document.querySelector(".login-popup");
    let loginSubmit = document.getElementById("loginSubmit")
    let alerts = document.querySelectorAll('[role="alert"]');
    let emailField = document.getElementById("loginEmailInput");
    let passField = document.getElementById("loginPassInput");
    let alertLabel = document.querySelector(".email-login-success");

    homeBtn.addEventListener("click", () => {
        window.location = "index.html"
    })


    filterBtn.addEventListener("click", () => {
        if (dropdownContainer.classList.contains("active")){
            dropdownContainer.classList.remove("active")
        } else {
            dropdownContainer.classList.add("active");
        }
    })

    applyBtn.addEventListener("click", () => {
        checkedBoxes = [];
        for (let index = 0; index < filterItemsList.length; index++){
            if (filterItemsList[index].checked){
                checkedBoxes.push(filterLabelList[index].textContent)
            }
        }
        dropdownContainer.classList.remove("active")

        if (checkedBoxes.length > 0){
            alert(checkedBoxes)
        }
    })

    resetBtn.addEventListener("click", () => {
        for (let i = 0; i < filterItemsList.length; i++) {
            filterItemsList[i].checked = false;
        }

    })

    loginBtn.addEventListener("click", () => {
        loginSubmit.disabled = emailField.value.length < 1 && passField.value.length < 1;
        overlay.classList.add("active")
        loginPrompt.classList.add("active")
    })

    loginPopupContainer.addEventListener("input", () => {
        loginSubmit.disabled = !(passField.value.length > 2 && emailField.value.length > 6);
    })

    loginSubmit.addEventListener("click", (e) => {
        //call data from server
        let correctEmail = true;
        let correctPassword = true;

        if (correctPassword && correctEmail){
            overlay.classList.remove("active");
            loginPrompt.classList.remove("active");
            if (!loggedIn){
                if (alertLabel.classList.contains("hide")){
                    alertLabel.classList.remove("hide");
                }
                setTimeout(function() {
                    if (!alertLabel.classList.contains("hide")){
                        alertLabel.classList.add("hide");
                    }
                }, 1500);


                //change icon when logged in
                loggedIn = true;
                if (loggedIn){
                    loginBtn.classList.remove("bi-box-arrow-in-right")
                    loginBtn.classList.add("bi-person-circle")
                }


            }

        } else {
            if (!correctEmail && !alerts[0].classList.contains("active")){
                alerts[0].classList.add("active");
            } else if (!correctPassword && !alerts[1].classList.contains("active")){
                alerts[1].classList.add("active");
            }
        }

        function resetLoginError(){

            if (alerts[0].classList.contains("active")){
                alerts[0].classList.remove("active")
            }
            if (alerts[1].classList.contains("active")){
                alerts[1].classList.remove("active")
            }
            loginPopupContainer.removeEventListener("input", resetLoginError);
        }

        loginPopupContainer.addEventListener("input", resetLoginError);
        e.preventDefault();

    })

    //switch to icons then try again
    // loginBtn.addEventListener("click", () => {
    //     console.log(loggedIn)
    //     if (loggedIn){
    //         if (loginBtn.classList.contains(".bi-box-arrow-in-right")){
    //             loginBtn.classList.remove(".bi-box-arrow-in-right")
    //         } else {
    //             loginBtn.classList.remove(".bi-alarm")
    //             loginBtn.classList.add(".bi-box-arrow-in-right")
    //         }
    //     }
    // })


    window.addEventListener("keydown", (e) => {
        // console.log(e);
        if (e.key === "Escape"){
            overlay.classList.remove("active")
            loginPrompt.classList.remove("active")
        }
    })

    overlay.addEventListener("click", () => {
        overlay.classList.remove("active")
        loginPrompt.classList.remove("active")
    })




