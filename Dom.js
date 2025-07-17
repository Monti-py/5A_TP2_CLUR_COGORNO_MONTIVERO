class UserInterface{
    getLoginDni(){
        return document.getElementById("loginDni")
    }
    getLoginPassword(){
        return document.getElementById("loginPassword")
    }
    getNavBarHome(){
        let nav = document.getElementsByClassName("navbar-toggler")
        return nav[0]
    }
    getRegisterName(){
        return document.getElementById("registerName")
    }
    getRegisterLastName(){
        return document.getElementById("registerLastName")
    }
    getRegisterDni(){
        return document.getElementById("registerDni")
    }
    getRegisterEmail(){
        return document.getElementById("registerEmail")
    }
    getRegisterPassword(){
        return document.getElementById("registerPassword")
    }
    changeScreen(input){
        switch(input){
            case 1:
                document.getElementById("user-account").style.display = "none"
                document.getElementById("bank-functions").classList.remove("d-none")
                document.getElementById("bank-functions").classList.add("d-block")
                document.getElementsByClassName("navbar-toggler")[0].classList.remove("d-none")
                document.getElementsByClassName("navbar-toggler")[0].classList.add("d-block")
                break
                case 2: 
                document.getElementById("user-account").style.display = "block";
                document.getElementById("bank-functions").classList.remove("d-block")
                document.getElementById("bank-functions").classList.add("d-none")
                document.getElementsByClassName("navbar-toggler")[0].classList.remove("d-block")
                document.getElementsByClassName("navbar-toggler")[0].classList.add("d-none")
            break
        }
    }
}


const UI = new UserInterface()