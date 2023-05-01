const cat = document.querySelector
("#cat_box");
const btn = document.querySelector
("#cat_img");

btn.addEventListener("click", getCat);
function getCat(){
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then( data => {
   
        cat.innerHTML = ` <img src=${data.message} alt="">`
        console.log(data);
    })

}