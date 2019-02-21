import Modal from './js/Modal';
import Rates from './js/Rates';
import Tabs from './js/Tabs';

import './styles/index.scss';

function ready(fn) {
  if (document.readyState !== 'loading'){
      fn();
  } else {
      document.addEventListener('DOMContentLoaded', fn);
  }
}

// Add Event Listeners


function init() {
  console.log('init');
  Modal();
  Rates();
  Tabs();
};

ready(init());

