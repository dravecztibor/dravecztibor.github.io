fetch("https://raw.githubusercontent.com/android/sunflower/main/app/src/main/assets/plants.json")
.then(x => x.json())
.then(y => novenyek(y));

function novenyek(y){
    console.log(y)
    var sz = ""
    y.forEach((elem, index) => {
        sz += `<div class="col-sm-4">
                ${elem.name}
                </div>
                <div class="col-sm-4">
                <img class="img-fluid img-thumbnail" style="width: 100px; cursor: pointer;" src="${elem.imageUrl}" alt=""
                onclick="showImage('${elem.imageUrl}')">
                </div>
                <div class="col-sm-4">
                <a class="link" href="${elem.imageUrl}" target="_blank">LINK</a>
                </div>`
    })
    document.getElementById("grid").innerHTML = sz
}
  
function showImage(imageUrl){
    var imageContainer = document.getElementById("image-container")
    var zoomedImage = document.getElementById("zoomed-image")
  
    zoomedImage.src = imageUrl
    imageContainer.style.display = "block"
  
    imageContainer.onclick = function(){
      imageContainer.style.display = "none"
    }
}