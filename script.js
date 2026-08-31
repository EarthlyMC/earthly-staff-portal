/* =========================
   EARTHLY STAFF PORTAL
   Navigation Script
========================= */


const pages = [
    "home",
    "tickets",
    "roles",
    "punishments",
    "guidelines",
    "commands"
];


const topbar =
    document.querySelector(".topbar");


const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================
   SHOW PAGE
========================= */

function showPage(page) {

    /*
        If someone enters an invalid
        page into the URL, send them home.
    */

    if (!pages.includes(page)) {

        page = "home";

    }


    /*
        Hide every page.
    */

    document
        .querySelectorAll(".page")
        .forEach(element => {

            element.classList.remove(
                "active-page"
            );

        });


    /*
        Show selected page.
    */

    const target =
        document.getElementById(page);


    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    /*
        Update navigation.
    */

    document
        .querySelectorAll(".desktop-nav a")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.dataset.page === page
            );

        });


    /*
        Close mobile navigation.
    */

    topbar.classList.remove(
        "mobile-open"
    );


    /*
        Return to top.
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   ROUTING
========================= */

function route() {

    const page =
        location.hash.replace(
            "#",
            ""
        ) || "home";


    showPage(page);

}


/* =========================
   PAGE LINKS
========================= */

document.addEventListener(
    "click",
    function(event) {

        const link =
            event.target.closest(
                "[data-page]"
            );


        if (!link) {

            return;

        }


        event.preventDefault();


        const page =
            link.dataset.page;


        /*
            Change the URL.
        */

        history.pushState(
            null,
            "",
            "#" + page
        );


        showPage(page);

    }
);


/* =========================
   MOBILE MENU
========================= */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function() {

            topbar.classList.toggle(
                "mobile-open"
            );

        }
    );

}


/* =========================
   BROWSER NAVIGATION
========================= */

window.addEventListener(
    "hashchange",
    route
);


window.addEventListener(
    "popstate",
    route
);


/* =========================
   START WEBSITE
========================= */

route();