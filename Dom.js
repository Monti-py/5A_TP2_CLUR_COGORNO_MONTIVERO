class UserInterface{
    getLoginDni(){
        return document.getElementById("loginDni").value
    }
    getLoginPassword(){
        return document.getElementById("loginPassword").value
    }
    getNavBarHome(){
        let nav = document.getElementsByClassName("navbar-toggler")
        return nav[0]
    }
}


const UI = new UserInterface()