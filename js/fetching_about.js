"use strict"



let lookingForData = false;
let page = 1;


function fetchData() {
    console.log("kikou");

    lookingForData = true;
    fetch("http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/about_page").then(e => e.json()).then(showAbout);

}



function showAbout(data) {
    console.log("show About");
    console.log(data);
    lookingForData = false;
    data.forEach(showSinglePost);
}

function showSinglePost(aPost) {
    console.log("kikou le post");
    let template_about = document.querySelector("#about_template").content;
    let clone = template_about.cloneNode(true);
    clone.querySelector("h1").textContent = aPost.title.rendered;
    clone.querySelector(".descript").innerHTML = aPost.content.rendered;

    let about_postlist = document.querySelector("#about_list");
    about_postlist.appendChild(clone);
}

fetchData();
