let img = document.querySelector("img");

img.addEventListener("click", () => {
    let src = img.getAttribute("src");
    if(src ==  "/JavaScript/Image_Changer/IMG/business.jpg") {
        img.setAttribute("src", "/JavaScript/Image_Changer/IMG/PC.jpg")
    } else {
        img.setAttribute("src", "/JavaScript/Image_Changer/IMG/business.jpg")
    }
})