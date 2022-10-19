// take body to change the content
const body = document.getElementsByTagName('body');

// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "C")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault();
        // body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
});

// stop right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});