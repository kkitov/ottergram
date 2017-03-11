let  DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let  DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let  THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageURL,titleText) {

     let detailIMage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailIMage.src= imageURL;
    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent= titleText;
}

function titleFromThumb(thumbnail) {
    return thumbnail.getAttribute('data-image-url')
}
function setDetailsFromThumb(thumbnail) {
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}
