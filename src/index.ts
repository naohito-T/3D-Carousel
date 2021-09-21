import './sass/style.scss';

import { carousel } from './util';
window.addEventListener('load', () => {
  const carousels = document.querySelectorAll('.carousel');
  for (var i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
  }
});
