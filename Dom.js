class UserInterface {
    getLoginDni() {
        return document.getElementById("loginDni")
    }
    getLoginPassword() {
        return document.getElementById("loginPassword")
    }
    getNavBarHome() {
        let nav = document.getElementsByClassName("navbar-toggler")
        return nav[0]
    }
    getRegisterName() {
        return document.getElementById("registerName")
    }
    getRegisterLastName() {
        return document.getElementById("registerLastName")
    }
    getRegisterDni() {
        return document.getElementById("registerDni")
    }
    getRegisterEmail() {
        return document.getElementById("registerEmail")
    }
    getRegisterPassword() {
        return document.getElementById("registerPassword")
    }
    changeScreen(input) {
        switch (input) {
            case 1:
                //Logueado
                document.getElementById("user-account").style.display = "none"
                document.getElementById("bank-functions").classList.remove("d-none")
                document.getElementById("bank-functions").classList.add("d-block")
                document.getElementsByClassName("navbar-toggler")[0].classList.remove("d-none")
                document.getElementsByClassName("navbar-toggler")[0].classList.add("d-block")
                document.getElementsByClassName("offcanvas-body")[0].classList.remove("d-none")
                document.getElementsByClassName("offcanvas-body")[0].classList.add("d-block")
                document.getElementsByClassName("offcanvas-header")[0].classList.remove("d-none")
                document.getElementsByClassName("offcanvas-header")[0].classList.add("d-flex")
                document.getElementById("offcanvasMenu").classList.remove("d-none")
                document.getElementById("offcanvasMenu").classList.add("d-block")
                break
            case 2:
                //No logueado
                document.getElementById("user-account").style.display = "block";
                document.getElementById("bank-functions").classList.remove("d-block")
                document.getElementById("bank-functions").classList.add("d-none")
                document.getElementsByClassName("navbar-toggler")[0].classList.remove("d-block")
                document.getElementsByClassName("navbar-toggler")[0].classList.add("d-none")
                document.getElementsByClassName("offcanvas-body")[0].classList.remove("d-block")
                document.getElementsByClassName("offcanvas-body")[0].classList.add("d-none")
                document.getElementsByClassName("offcanvas-header")[0].classList.remove("d-flex")
                document.getElementsByClassName("offcanvas-header")[0].classList.add("d-none")
                document.getElementById("offcanvasMenu").classList.remove("d-block")
                document.getElementById("offcanvasMenu").classList.add("d-none")
                break
        }
    }
    clearLoginInputs() {
        document.getElementById("loginDni").value = ""
        document.getElementById("loginPassword").value = ""
        document.getElementById("registerName").value = ""
        document.getElementById("registerLastName").value = ""
        document.getElementById("registerDni").value = ""
        document.getElementById("registerEmail").value = ""
        document.getElementById("registerPassword").value = ""
    }
    logOutFade() {
    document.getElementsByClassName("offcanvas-backdrop fade show")[0].classList.add("d-none")
    }
}

const UI = new UserInterface()
