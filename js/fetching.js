////////// FETCHING DATA !!!!!!! //////////


let lookingForData = false;
let page = 1;


//// FILTER BY DATE ////
var inputDate = "";

//document.getElementById('today2').addEventListener('change', function () {
//    console.log(this.value);
//    inputDate = this.value;
//    let event = document.querySelectorAll('.event');
//    event.forEach(showEventDate);
//
//
//});
//
//function showEventDate(eventDate) {
//
//    console.log(inputDate);
//    console.log(eventDate);
//
//    if (inputDate === eventDate.querySelector(".date")) {
//        console.log("ca marche");
//
//
//    } else {
//        console.log("ca marche pas");
//    }
//}


document.getElementById('today2').addEventListener('change', fetchData);

//"http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events?_embed&per_page=2&page="


function fetchData() {


    console.log("kikou");
    console.log(this.value);
    inputDate = this.value;
    lookingForData = true;
    let urlParams = new URLSearchParams(window.location.search);

    let catid = urlParams.get("category");
    let endpoint = "http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events?_embed&per_page=4&page=" + page

    if (catid) { // DRY
        endpoint = "http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events?_embed&per_page=4&page=" + page + "&categories=" + catid
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


    //////////////////////// DATE ////////////////////////////////

    var dateString = anEvent.acf.date;
    var year = dateString.substring(0, 4); // first until fourth character
    var month = dateString.substring(4, 6);
    var day = dateString.substring(6, 8);

    var dateAcf = year + "-" + month + "-" + day;

    clone.querySelector(".date").textContent = dateAcf;
    clone.querySelector(".time").textContent = anEvent.acf.time;





    if (inputDate === dateAcf) {

        console.log(inputDate);
    console.log(dateAcf);
        console.log("ca marche");


    } else {
        console.log("ca marche pas");
    }





    ////////////////////////////////////////////////////////////////////



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






//function on() {
//    document.getElementById("overlay").style.display = "block";
//}
//
//function off() {
//    document.getElementById("overlay").style.display = "none";
//}






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


