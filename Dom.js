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
}


const UI = new UserInterface()