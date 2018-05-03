/////////// NAVIGATION DROPDOWN MENU /////////////


let submenu = document.querySelector('.sub_menu');
let navbar = document.querySelector('.navbar');
let content = document.querySelector('.content');
let event = document.querySelector('#event_icon');
let volunteer = document.querySelector('#vol_icon');
let icons = document.querySelector('.icons');
let sub_linkS = document.querySelector('.sub_links');
let sub_links_event = document.querySelector('#sub_links_event');
let sub_links_vol = document.querySelector('#sub_links_vol');
let sub_links_about = document.querySelector('#sub_links_about');
let sub_links_contact = document.querySelector('#sub_links_contact');
var currentSub = -1;
let event_icon = document.querySelector("#event_icon");
let vol_icon = document.querySelector("#vol_icon");
let about_icon = document.querySelector("#about_icon");
let contact_icon = document.querySelector("#contact_icon");
//
//let main_link = document.querySelectorAll('.main_link');
//
//main_link.forEach(colorLink);
//
//function colorLink(oneLink, index) {
//    oneLink.addEventListener('click', redlink);
//}
//
//function redlink(evt) {
//    console.log('BE RED');
//
//    evt.target.style.color = "#961d27";
//    evt.target.style.fontSize = "1.2em";
//}

function closeSub() {
    navbar.classList.remove('expend');
    navbar.classList.add('hidden');
    submenu.classList.remove('expend');
    submenu.classList.add('hidden');
    content.classList.toggle('shorter');
    event_icon.style.color="white";
    event_icon.style.fontSize="1em";

    vol_icon.style.color="white";
    vol_icon.style.fontSize="1em";

    about_icon.style.color="white";
    about_icon.style.fontSize="1em";

    contact_icon.style.color="white";
    contact_icon.style.fontSize="1em";


}




function keskece(n) {

    if (submenu.classList.contains('expend') && currentSub == n) {
        console.log("event are here - close the menu");

        navbar.classList.remove('expend');
        navbar.classList.add('hidden');
        submenu.classList.remove('expend');
        submenu.classList.add('hidden');
        content.classList.toggle('shorter');
        event_icon.style.color="white";
    event_icon.style.fontSize="1em";

    vol_icon.style.color="white";
    vol_icon.style.fontSize="1em";

    about_icon.style.color="white";
    about_icon.style.fontSize="1em";

    contact_icon.style.color="white";
    contact_icon.style.fontSize="1em";

    }

    else if (submenu.classList.contains('expend') && currentSub != n) {
        console.log("event are here - show volunteer");
        currentSub = n;
        console.log("show volunteer");
        showLinks(n);

    }


    else if (submenu.classList.contains('hidden')) {


        console.log("submenu not here - open it");
        currentSub = n;

        navbar.classList.remove('hidden');
        navbar.classList.add('expend');
        submenu.classList.remove('hidden');
        submenu.classList.add('expend');
        content.classList.toggle('shorter');

        showLinks(n);

    }
}



//function whitelink(){
//    console.log('BE WHITE');
//
//    main_link.style.color="white";
//    main_link.style.fontSize="1em";
//}

/// RESTART AN ANIMATION SANS QUE CA BUBUG ////




function showLinks(n) {
    console.log(n);
    switch (n) { // I CLICK ON EVENT

        case 1:


            sub_links_event.classList.add('fadeIn');

            event_icon.style.color = "#961d27";
            event_icon.style.fontSize = "1.2em";

            vol_icon.style.color="white";
            vol_icon.style.fontSize="1em";

            about_icon.style.color="white";
            about_icon.style.fontSize="1em";

            contact_icon.style.color="white";
            contact_icon.style.fontSize="1em";



            sub_links_event.classList.add('display');
            sub_links_event.classList.remove('hide');

            sub_links_vol.classList.remove('display');
            sub_links_vol.classList.add('hide');


            sub_links_about.classList.add('hide');
            sub_links_about.classList.remove('display');

            sub_links_contact.classList.add('hide');
            sub_links_contact.classList.remove('display');


            break;

        case 2: // I CLICK ON VOLUNTEER


            sub_links_vol.classList.add('fadeIn');

            event_icon.style.color="white";
            event_icon.style.fontSize="1em";

            vol_icon.style.color="#961d27";
            vol_icon.style.fontSize="1.2em";

            about_icon.style.color="white";
            about_icon.style.fontSize="1em";

            contact_icon.style.color="white";
            contact_icon.style.fontSize="1em";


            sub_links_event.classList.add('hide');
            sub_links_event.classList.remove('display');

            sub_links_vol.classList.remove('hide');
            sub_links_vol.classList.add('display');


            sub_links_about.classList.add('hide');
            sub_links_about.classList.remove('display');

            sub_links_contact.classList.add('hide');
            sub_links_contact.classList.remove('display');

            break;

        case 3: // I CLICK ON ABOUT


            sub_links_about.classList.add('fadeIn');

            event_icon.style.color="white";
            event_icon.style.fontSize="1em";

            vol_icon.style.color="white";
            vol_icon.style.fontSize="1em";

            about_icon.style.color="#961d27";
            about_icon.style.fontSize="1.2em";

            contact_icon.style.color="white";
            contact_icon.style.fontSize="1em";


            sub_links_event.classList.add('hide');
            sub_links_event.classList.remove('display');

            sub_links_vol.classList.remove('display');
            sub_links_vol.classList.add('hide');


            sub_links_about.classList.add('display');
            sub_links_about.classList.remove('hide');

            sub_links_contact.classList.add('hide');
            sub_links_contact.classList.remove('display');

            break;

        case 4: // I CLICK ON CONTACT


            sub_links_contact.classList.add('fadeIn');

             event_icon.style.color="white";
            event_icon.style.fontSize="1em";

            vol_icon.style.color="white";
            vol_icon.style.fontSize="1em";

            about_icon.style.color="white";
            about_icon.style.fontSize="1em";

            contact_icon.style.color="#961d27";
            contact_icon.style.fontSize="1.2em";



            sub_links_contact.classList.add('display');
            sub_links_contact.classList.remove('hide');

            sub_links_event.classList.add('hide');
            sub_links_event.classList.remove('display');

            sub_links_vol.classList.remove('display');
            sub_links_vol.classList.add('hide');


            sub_links_about.classList.add('hide');
            sub_links_about.classList.remove('display');

            break;


    }

}


// FETCHING CATEGORIES



fetch("http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/categories?per_page=40")
    .then(e => e.json())
    .then(buildMenu);

function buildMenu(data) {

    console.log(data);
    let musicList = [];
    let movieList = [];
    let artList = [];
    let otherList = [];
    let price = [];
    let spokenword = [];
    let venues = [];


    data.forEach(item => {
        if (item.parent === 3) { // ART STAGE
            artList.push(item);
        } else if (item.parent === 4) { // FILM
            movieList.push(item);
        } else if (item.parent === 6) { // MUSIC
            musicList.push(item);
        } else if (item.parent === 8) { // OTHER
            otherList.push(item);
        } else if (item.parent === 11) { // PRICE
            price.push(item);
        } else if (item.parent === 14) { // SPOKEN WORD
            spokenword.push(item);
        } else if (item.parent === 20) { // VENUES
            venues.push(item);
        }

    })

    artList.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('art');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.artList').appendChild(a);
    });

    movieList.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('film');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.filmList').appendChild(a);
    });

    musicList.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('music');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.musicList').appendChild(a);
    });

    otherList.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('other');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.otherList').appendChild(a);
    });


    price.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('price');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.priceList').appendChild(a);
    });

    spokenword.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('spoken');
        a.href = "index.html?category=" + item.id;

        sub_links_event.querySelector('.spokenList').appendChild(a);
    });

    venues.forEach(item => {
        console.log(item);
        let a = document.createElement("a");
        a.textContent = item.name;
        a.id = item.name;
        a.classList.add('venues');
        a.href = "index.html?category=" + item.id;

        sub_links_about.querySelector('.venuesList').appendChild(a);
    });


}




function reStartFadeIn(n) {

    // retrieve the element
    //element = document.getElementById("logo");

    // reset the transition by...
    let main_link = document.querySelector('.main_link');

    main_link.addEventListener("click", function (e) {
        e.preventDefault;

        // -> removing the class
        sub_links_event.classList.remove("fadeIn");
        sub_links_vol.classList.remove("fadeIn");
        sub_links_about.classList.remove("fadeIn");
        sub_links_contact.classList.remove("fadeIn");


        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        // Oops! This won't work in strict mode. Thanks Felis Phasma!
        // element.offsetWidth = element.offsetWidth;
        // Do this instead:
        void sub_links_event.offsetWidth;
        void sub_links_vol.offsetWidth;
        void sub_links_about.offsetWidth;
        void sub_links_contact.offsetWidth;

        // -> and re-adding the class
        sub_links_event.classList.add("fadeIn");
        sub_links_vol.classList.add("fadeIn");
        sub_links_about.classList.add("fadeIn");
        sub_links_contact.classList.add("fadeIn");
    }, false);

}

function reStartFadeOut(n) {

    // retrieve the element
    //element = document.getElementById("logo");

    // reset the transition by...
    let main_link = document.querySelector('.main_link');

    main_link.addEventListener("click", function (e) {
        e.preventDefault;

        // -> removing the class
        sub_links_event.classList.remove("fadeOut");
        sub_links_vol.classList.remove("fadeOut");
        sub_links_about.classList.remove("fadeOut");
        sub_links_contact.classList.remove("fadeOut");


        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        // Oops! This won't work in strict mode. Thanks Felis Phasma!
        // element.offsetWidth = element.offsetWidth;
        // Do this instead:
        void sub_links_event.offsetWidth;
        void sub_links_vol.offsetWidth;
        void sub_links_about.offsetWidth;
        void sub_links_contact.offsetWidth;

        // -> and re-adding the class
        sub_links_event.classList.add("fadeOut");
        sub_links_vol.classList.add("fadeOut");
        sub_links_about.classList.add("fadeOut");
        sub_links_contact.classList.add("fadeOut");
    }, false);

}

// CALENDAR //

//let today = new Date().toISOString().substr(0, 10);
//document.querySelector("#today").value = today;

document.querySelector("#today2").valueAsDate = new Date();


function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(55.676583, 12.574972),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


//MENU FOR MOBILE



if (window.innerWidth < 480) {




    function openMenu() {
        console.log("open Menu");

        document.getElementById("menutop").style.display = "block";


        document.getElementById("burger").style.display = "none";
        document.getElementById("cross").style.display = "block";
    }

    function closeMenu() {

        console.log("close menu");
        document.getElementById("menutop").style.display = "none";

        document.getElementById("burger").style.display = "block";
        document.getElementById("cross").style.display = "none";

    }
}

