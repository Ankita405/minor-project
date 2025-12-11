const accessKey = "h2npLu9C6Vq3jFm1g_WIegKJ9xQxkrHe-qWI3OFOCtc";  // <-- ADD YOUR UNSPLASH API KEY HERE

async function searchImage() {
    const query = document.getElementById("searchInput").value;

    if (query === "") {
        alert("Please enter a search term!");
        return;
    }

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const imageResults = document.getElementById("imageResults");
    imageResults.innerHTML = "";

    data.results.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.small;
        imageResults.appendChild(img);
    });
}
// Image Preview Feature
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("photo")) {
        document.getElementById("previewImg").src = e.target.src;
        document.getElementById("previewBox").style.display = "flex";
    }
});

// Close preview
document.getElementById("closePreview").addEventListener("click", function () {
    document.getElementById("previewBox").style.display = "none";
});
// Open preview + set download link
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("photo")) {
        const imgSrc = e.target.src;

        // show preview
        document.getElementById("previewImg").src = imgSrc;
        document.getElementById("previewBox").style.display = "flex";

        // set download link
        document.getElementById("downloadBtn").href = imgSrc;
        document.getElementById("downloadBtn").setAttribute("download", "image.jpg");
    }
});
// Close preview
document.getElementById("closePreview").addEventListener("click", function () {
    document.getElementById("previewBox").style.display = "none";
});