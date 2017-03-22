let  DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let  DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let  DETAIL_FRAME_SELECTOR ='[data-image-role="frame"]';
let  THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
let HIDDEN_DETAIL_CLASS = 'hidden-detail';
let TINY_EFFECT_CLASS = 'is-tiny';
let ESC_KEY = 27;

function setDetails(imageURL,titleText) { //Promenq snimkata i zaglavieto na glavnata snimka
    let detailImage=document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src',imageURL);

    let detailText = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailText.textContent = titleText;
}
function imageFromThumb(thumbnail) { //Vzima img/.. na glavnata snimka
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail) { //Vzima title-a na glavnata snimka
    return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail) { // v funkciqta setDetails vkarvame 2 funkcii za vzimane na img-to i title-a na konkretna snimka i gi pliokame za glavna snimka
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb) {
    thumb.addEventListener('click',function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}
function getThumbnailsArray() {
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailsArr = Array.from(thumbnails);
    return thumbnailsArr;
}
function hideDetails() {
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails() {
    'use strict';
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}function addKeyPressHandler() {
    document.body.addEventListener('keyup',function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode===ESC_KEY){
            hideDetails();
        }
    })
}
function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();

}
initializeEvents();
