class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelectorAll(mobileMenu);
        this.navList = document.querySelectorAll(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleclick = this.handleclick.bind(this);
    }

    animateLink() {}
}