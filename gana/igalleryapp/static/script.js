let images = [
    {
        src: "images/25.jpg",
        caption: "Samsung S25 Ultra"
    },
    {
        src: "images/16.jpg",
        caption: "Iphone 16 pro"
    },
    {
        src: "images/15.jpg",
        caption: "Oneplus 15"
    },
    {
        src: "images/300.jpg",
        caption: "Vivo X300 Pro"
    },
    {
        src: "images/10.png",
        caption: "Rog 8"
    },
];

let Index = 0;

function showImage() {
    document.getElementById("galleryImage").src = images[Index].src;
    document.getElementById("caption").innerText = images[Index].caption;
}

function nextImage() {
    Index++;
    if (Index >= images.length) {
        Index = 0;
    }
    showImage();
}

function prevImage() {
    Index--;
    if (Index < 0) {
        Index = images.length - 1;
    }
    showImage();
}
