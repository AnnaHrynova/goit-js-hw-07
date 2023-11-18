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
    
};

let lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: 250,
    });

    function createMarkup(arr) {
    gallery.innerHTML = '';
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


// gallery.addEventListener("click", handleClick);

// function handleClick(event) {
//     event.preventDefault();

//     if (event.target === event.currentTarget) {
//         return;
//     }
//     const currentItem = event.target.closest(".gallery__item");
//     const original = currentItem.querySelector(".gallery__image").dataset.source;
//     const instance = basicLightbox.create(`
//         <div class="modal">
//             <img src="${original}">
//         </div>
//     `);
//     instance.show();
//     document.addEventListener("keydown", handleKeyPress);
// };

// function handleKeyPress(evt) {
//   if (evt.code === "Escape") {
//     instance.close();
//     document.removeEventListener("keydown", handleKeyPress);
//   }
// };

// function createMarkup(arr) {
//     gallery.innerHTML = '';
//     return arr.map(({ preview, original, description }) => `

//     <li class="gallery__item">
//     <a
//     class="gallery__link"
//     href="${original}"
//     >
//     <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//     />
//     </a>
//     </li>

//     `).join("");
// }