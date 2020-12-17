import imageHandleBar from '../template/image-template.hbs'
/* ------------------------------------------------------ */
import * as basicLightbox from 'basiclightbox';
/* ------------------------------------------------------ */

export default {
    refs: {
        ul: document.querySelector('.gallery'),
    },

    updateMarkupImages(dataObj) {
        const markUp = imageHandleBar(dataObj);
        this.refs.ul.insertAdjacentHTML('beforeend', markUp);
        /* ------------------------------------------------------ */
        const ArrayPhoto = document.querySelectorAll('.photo-card img');
        ArrayPhoto.forEach(photo => photo.addEventListener('click', openBigImage));
        function openBigImage() {
            console.log('time');
            const srcBigImg = this.dataset.fullSize;
            const lightBox = basicLightbox.create(`
        		<img width="1400" height="900" src="${srcBigImg}">
            `);
            lightBox.show();
        };
        /* ------------------------------------------------------ */
    },

    clearMarkupImages() {
        this.refs.ul.textContent = '';
    }
};


/* ------------------------------------------------------ */
// const photoBlock = document.querySelector('.photo-card image');
// photoBlock.addEventListener('click', openBigImage);

// function openBigImage() {
//     basicLightbox.create(`
// 		<img width="1400" height="900" src="${this.data-full-size}">
// 	`).show();
// };
/* ------------------------------------------------------ */
// document.querySelector('button.image').onclick = () => {

//   basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// };