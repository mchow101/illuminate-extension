function login() {
    var button = document.getElementsByClassName("btn-danger");
    if(button.length > 0) {
        button[0].click();
    }

    var accounts = document.getElementsByClassName("vR13fe k6Zj8d SmR8");

    var continueToPortal = document.getElementsByClassName("login-link btn btn-block btn-lg");
    if(continueToPortal.length > 0) {
        continueToPortal[0].click();
    }

    var nav = document.getElementsByClassName("nav-label");
    var firstHref = $("a[href^='http']").eq(0).attr("href");
    console.log(firstHref);
    if(nav.length > 0) {
        nav[4].click();
    }
}
login();