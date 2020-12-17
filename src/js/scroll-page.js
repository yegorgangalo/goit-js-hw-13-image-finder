export default function scrollPage() {
  setTimeout(() => {
        const photoBlock = document.querySelector('.photo-card');
        window.scrollBy({
          top: window.innerHeight-photoBlock.clientHeight/2,
          behavior: 'smooth',
        });
      }, 250);
};