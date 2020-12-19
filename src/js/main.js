import debounce from 'lodash.debounce';
import { alert, notice, info, success, error } from '@pnotify/core';
import apiService from './apiService.js';
import updateMarkup from './update-markup-images.js';
import infinityScroll from './components/infinity-scroll.js';
// import buttonQueryClass from './components/button-query.js';
// import scrollPage from './scroll-page.js';
/* ------------------------------------------------------ */

// const buttonQuery = new buttonQueryClass({selector: '.js-load-btn', hidden: true})
// const { refs:{button} } = buttonQuery;
const input = document.querySelector('input[name="query"]');
/* ------------------------------------------------------ */

const notifyOptions = {
  delay: 3000,
  width: '300px',
  text: 'There is no image with such tag! Try another.'
};
/* ------------------------------------------------------ */

input.addEventListener('focus', ({target}) => target.value='');
input.addEventListener('input', debounce(findImages, 500));
// button.addEventListener('click', findImagesMore);
/* ------------------------------------------------------ */

function findImages({ target }) {
  updateMarkup.clearMarkupImages();
  // buttonQuery.hide();
  const searchQuery = target.value;
  if (!searchQuery) {
    return;
  };
  apiService.fetchFirst(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        error(notifyOptions);
        return;
      };
      if (hits.length < apiService.perPage) {
        updateMarkup.updateMarkupImages(hits);
        // buttonQuery.hide();
        return;
      };
      updateMarkup.updateMarkupImages(hits);
      // buttonQuery.show();
    });
};
/* ------------------------------------------------------ */

function findImagesMore(inputRef) {
  return () => {
    const searchQuery = inputRef.value;
    if (!searchQuery) {
      return;
    };
    // buttonQuery.disable();
    apiService.fetchMore()
      .then(({ hits }) => {
        // buttonQuery.enable();
        if (hits.length < apiService.perPage) {
          // buttonQuery.hide();
          return;
        };
        updateMarkup.updateMarkupImages(hits);
        // scrollPage();
      });
  }
};
/* ------------------------------------------------------ */
/* -----------------infinity Scroll------------------------------- */
const {ioCallback, Refs:{target}} = new infinityScroll(findImagesMore(input));
new IntersectionObserver(ioCallback).observe(target);
/* -----------------infinity Scroll end------------------------------- */