"use strict"

let lookingForData = false;
let page = 1;


function fetchData() {
    console.log("kikou");
    lookingForData = true;
    fetch("http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/general_info").then(e => e.json()).then(showInfos);

}



function showInfos (data){
   console.log("show Infos");
    lookingForData =false;
   data.forEach(showSinglePost);
}

function showSinglePost(aPost){
    console.log("kikou le post");
let template_infos = document.querySelector("#info_template").content;
let clone=template_infos.cloneNode(true);
   clone.querySelector("h1").textContent=aPost.title.rendered;
clone.querySelector(".descript").innerHTML = aPost.content.rendered;

     let info_postlist = document.querySelector("#info_list");
    info_postlist.appendChild(clone);
}

fetchData();
