////////// FETCHING DATA !!!!!!! //////////


let lookingForData = false;
let page = 1;



function fetchData() {
    console.log("kikou");
    lookingForData = true;
    let urlParams = new URLSearchParams(window.location.search);

    let catid = urlParams.get("category");
    let endpoint = "http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events?_embed&per_page=2&page=" + page

    if (catid) { // DRY
        endpoint = "http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events?_embed&per_page=2&page=" + page + "&categories=" + catid
    }
    fetch(endpoint)
        .then(e => e.json())
        .then(showEvents)

}

function showEvents(data) {
    console.log("kikou data");
    lookingForData = false;
    data.forEach(showSingleEvent);

}


function showSingleEvent(anEvent) {

    console.log("kikou an event");
    let template_event = document.querySelector("#event_template").content;
    let imageEvent = document.querySelector('.image');

    let clone = template_event.cloneNode(true);


    clone.querySelector("h1").textContent = anEvent.title.rendered; // come from the JSON
    //    clone.querySelector(".descript").innerHTML = anEvent.content.rendered;


    clone.querySelector(".date").textContent = anEvent.acf.date;
    clone.querySelector(".time").textContent = anEvent.acf.time;
    clone.querySelector(".location").textContent = anEvent.acf.location;
    clone.querySelector(".small-descript").textContent = anEvent.acf["small-des"]; // [] cause "-"
    clone.querySelector(".genre").textContent = anEvent.acf.genre;
    console.log("kikou tout le monde");
    clone.querySelector('.readmore').href = "subpage.html?id=" + anEvent.id;

    if (anEvent._embedded) { //images ._embedded to grab all the data we got

        console.log(anEvent._embedded["wp:featuredmedia"]);
        clone.querySelector("img").setAttribute("src", anEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);

    } else { // no images

        clone.querySelector("img").remove()
    }

    ///////// PRICE ////////

    let price_number = anEvent.acf.price;
    if (price_number == 0) {
        clone.querySelector(".price").textContent = "Free";
    } else {
        clone.querySelector(".price").textContent = price_number + " kr";
    }

    ////////////////////////

//    imageEvent.addEventListener("click", on);

    let event_list = document.querySelector("#event_list");
    event_list.appendChild(clone);

    console.log("kikou les images");





}





fetchData();

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

/////// LOADING MORE EVENTS ///////

setInterval(function () {

    if (bottomVisible() && lookingForData === false) {
        page++;
        fetchData();
    }
}, 100) // 0.1sec

// && = and - we want both things true
// || = or

function bottomVisible() {
    const scrollY = window.scrollY;
    const visible = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visible + scrollY >= pageHeight;
    return bottomOfPage || pageHeight < visible;
}
