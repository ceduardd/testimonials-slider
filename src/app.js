// get elements of the DOM
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const image = document.getElementById("image");
const text = document.getElementById("text");
const name = document.getElementById("name");
const ocupation = document.getElementById("ocupation");

// change content of the slides
let changeSlider = () => {
    if (image.getAttribute("src") === "images/image-tanya.jpg") {
        text.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
        image.setAttribute("src", "images/image-john.jpg");
        name.innerHTML = `John Tarkpor`;
        ocupation.innerHTML = `Junior Front-end Developer`;
    } else {
        text.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`;
        image.setAttribute("src", "images/image-tanya.jpg");
        name.innerHTML = `Tanya Sinclair`;
        ocupation.innerHTML = `UX Engineer`;
    }
};

// add events to change slides
next.addEventListener("click", changeSlider);
prev.addEventListener("click", changeSlider);