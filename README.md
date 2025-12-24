# Ex.07 Design of Interactive Image Gallery
## Date: 24-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:

```

image.html


<html>
<head>
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>

    <header>
        <h1>Interactive Image Gallery</h1>
    </header>
<body>


    <div class="gallery-container">
        <img id="galleryImage" src="images/25.jpg" alt="Gallery Image">
        <p id="caption">Samsung S25 Ultra</p>

        <div class="buttons">
            <button onclick="prevImage()">Previous</button>
            <button onclick="nextImage()">Next</button>
        </div>
    </div>

    <footer>
        Designed & Developed by GANANANTH H - (25010984) &copy 2025
    </footer>

    <script src="script.js"></script>
</body>
</html>




style.css


body {
    margin: 0;
    background-color: cyan;
    text-align: center;
}

header {
    background-color:yellow;
    color: black;
    padding: 5px;
    font-size: 15px;
}
.gallery-container {
    width: 450px;
    margin: 40px auto;
    background: gold;
    padding: 20px;
    border-radius: 15px;
    border: 5px solid red;

}

.gallery-container img {
    width: 100%;
    height: 300px;
    object-fit: fit;
    border-radius: 22px;
    border: 5px solid blue;
}

#caption {
    margin: 12px 0;
    font-weight: bold;
    font-size: 30px;
    
}

.buttons {
    margin-top: 5px;
}

button {
    padding: 8px 20px;
    margin: 10px;
    border:8px solid gold;
    background-color:blue;
    color: white;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #4338ca;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color:pink;
    color:black;
    padding: 10px;
    font-size: 25px;
}



script.js



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


```

## OUTPUT:

![alt text](<Screenshot (53).png>)

![alt text](<Screenshot (54).png>)

![alt text](<Screenshot (55).png>)

![alt text](<Screenshot (56).png>)

![alt text](<Screenshot (57).png>)



## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
