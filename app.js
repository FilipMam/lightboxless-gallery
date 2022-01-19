const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_IMG = POPUP.querySelector("img");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_AMOUNT = document.querySelector(".popup__amount");
const POPUP_CURRENT = document.querySelector(".popup__current");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

const updatePopup = () => {
    POPUP_IMG.src = THUMBNAILS[currentIndex].src;
    POPUP_CURRENT.innerText = currentIndex + 1;
};

const showNextImage = () => {
    currentIndex =
        currentIndex !== THUMBNAILS.length - 1 ? currentIndex + 1 : 0;
    updatePopup();
};

const showPreviousImage = () => {
    currentIndex =
        currentIndex !== 0 ? currentIndex - 1 : THUMBNAILS.length - 1;
    updatePopup();
};

const closePopup = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
        POPUP_IMG.src = "";
    }, 200);
};

let currentIndex;

POPUP_AMOUNT.innerText = THUMBNAILS.length;

THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        currentIndex = index;
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        POPUP_CURRENT.innerText = currentIndex + 1;
    });
    thumbnail.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            currentIndex = index;
            POPUP.classList.remove("hidden");
            POPUP_IMG.src = e.target.src;
            POPUP_CURRENT.innerText = currentIndex + 1;
        }
    });
});

POPUP_CLOSE.addEventListener("click", closePopup);
ARROW_RIGHT.addEventListener("click", showNextImage);
ARROW_LEFT.addEventListener("click", showPreviousImage);
POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopup();
    }
});

document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")) {
        if (e.key === "ArrowLeft") {
            showPreviousImage();
        }
        if (e.key === "ArrowRight") {
            showNextImage();
        }

        if (e.key === "Escape") {
            closePopup();
        }
    }
});

// box shadow na zdj
// tlo
// napis
// focus
