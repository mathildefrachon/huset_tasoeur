let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);


fetch("http://wordpress-huset.mathildefrachon.com/wp-json/wp/v2/events/"+id)
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){
  console.log(aPost);
  document.querySelector("#onePost h1").textContent=aPost.title.rendered;
     document.querySelector(".descript").innerHTML = aPost.content.rendered;
    document.querySelector(".date").textContent = aPost.acf.date;
    document.querySelector(".time").textContent = aPost.acf.time;
    document.querySelector(".location").textContent = aPost.acf.location;
    document.querySelector(".small-descript").textContent = aPost.acf["small-des"]; // [] cause "-"
    document.querySelector(".genre").textContent = aPost.acf.genre;
    console.log("kikou le post quon veut");



     ///////// PRICE ////////

    let price_number = aPost.acf.price;
    if (price_number == 0){
        document.querySelector(".price").textContent="Free";
    }
    else {
        document.querySelector(".price").textContent = price_number + " kr";
    }


    // IMAGES

    if (aPost._embedded) { //images ._embedded to grab all the data we got

        console.log(aPost._embedded["wp:featuredmedia"]);
        document.querySelector("img").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    } else { // no images

        document.querySelector("img").remove()
    }


  console.log(aPost._embedded["wp:featuredmedia"]);

}
