// FETCHING CONTACT

function fetchDataContact() {
    console.log("kikou");

//    lookingForData = true;
    fetch("http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/contact_page").then(e => e.json()).then(showContact);

}

function showContact (dataContact){
   console.log("show Contact");
    console.log(dataContact);
//    lookingForData =false;
   dataContact.forEach(showSinglePost);
}

function showSinglePost(contactPost){
    console.log("kikou le post");
//let template_contact = document.querySelector("#contact_template").content;
//let clone=template_contact.cloneNode(true);
   console.log(contactPost);
    document.querySelector("#contact_title").textContent=contactPost.title.rendered;
document.querySelector("#contact_descript").textContent = contactPost.content.rendered;

//     let contact_postlist = document.querySelector("#contact_list");
//    contact_postlist.appendChild(clone);
}

fetchDataContact();
