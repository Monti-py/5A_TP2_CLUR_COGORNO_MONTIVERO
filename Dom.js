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
}


const UI = new UserInterface()