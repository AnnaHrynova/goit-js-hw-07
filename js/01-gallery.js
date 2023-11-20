import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    }
    const currentItem = event.target.closest(".gallery__item");
    const original = currentItem.querySelector(".gallery__image").dataset.source;
    const instance = basicLightbox.create(`
            <img src="${original}">
    `, {
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {document.addEventListener("keydown", handleKeyPress);},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {document.removeEventListener("keydown", handleKeyPress);}
});
    instance.show();
    
    function handleKeyPress(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    };
};

function createMarkup(arr) {
    
    return arr.map(({ preview, original, description }) => `

    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>

    `).join("");
}


console.log(galleryItems);
