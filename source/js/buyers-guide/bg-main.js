import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import primaryNav from './components/primary-nav/primary-nav.js';
import CreepVote from './components/creep-vote/creep-vote.jsx';
import Creepometer from './components/creepometer/creepometer.jsx';
import Criterion from './components/criterion/criterion.jsx';

import HomepageSlider from './homepage-c-slider.js';
import ProductGA from './product-analytics.js';

let main = {
  init() {
    let _dntStatus = navigator.doNotTrack || navigator.msDoNotTrack,
        fxMatch = navigator.userAgent.match(/Firefox\/(\d+)/),
        ie10Match = navigator.userAgent.match(/MSIE 10/i),
        w8Match = navigator.appVersion.match(/Windows NT 6.2/);

    if (fxMatch && Number(fxMatch[1]) < 32) {
      _dntStatus = `Unspecified`;
    } else if (ie10Match && w8Match) {
      _dntStatus = `Unspecified`;
    } else {
      _dntStatus = { '0': `Disabled`, '1': `Enabled` }[_dntStatus] || `Unspecified`;
    }

    let allowTracking = (_dntStatus !== `Enabled`);

    if (allowTracking) {
      ReactGA.initialize(`UA-87658599-6`);
      ReactGA.pageview(window.location.pathname);
    }

    this.enableCopyLinks(allowTracking);
    this.injectReactComponents();

    primaryNav.init();

    if (document.getElementById(`pni-home`)) {
      HomepageSlider.init();
    }

    if (document.getElementById(`pni-product-page`)) {
      if (allowTracking) {
        ProductGA.init();
      }
    }
  },

  enableCopyLinks(allowAnalytics) {
    if (document.querySelectorAll(`.copy-link`)) {
      Array.from(document.querySelectorAll(`.copy-link`)).forEach(element => {
        element.addEventListener(`click`, (event) => {
          event.preventDefault();

          if (allowAnalytics) {
            let productBox = document.querySelector(`.product-detail .h1-heading`);
            let productTitle = productBox ? productBox.textContent : `unknown product`;

            ReactGA.event({
              category: `product`,
              action: `copy link tap`,
              label: `copy link ${productTitle}`
            });
          }

          let textArea = document.createElement(`textarea`);

          //
          // *** This styling is an extra step which is likely not required. ***
          //
          // Why is it here? To ensure:
          // 1. the element is able to have focus and selection.
          // 2. if element was to flash render it has minimal visual impact.
          // 3. less flakyness with selection and copying which **might** occur if
          //    the textarea element is not visible.
          //
          // The likelihood is the element won't even render, not even a flash,
          // so some of these are just precautions. However in IE the element
          // is visible whilst the popup box asking the user for permission for
          // the web page to copy to the clipboard.
          //

          // Place in top-left corner of screen regardless of scroll position.
          textArea.style.position = `fixed`;
          textArea.style.top = 0;
          textArea.style.left = 0;

          // Ensure it has a small width and height. Setting to 1px / 1em
          // doesn't work as this gives a negative w/h on some browsers.
          textArea.style.width = `2em`;
          textArea.style.height = `2em`;

          // We don't need padding, reducing the size if it does flash render.
          textArea.style.padding = 0;

          // Clean up any borders.
          textArea.style.border = `none`;
          textArea.style.outline = `none`;
          textArea.style.boxShadow = `none`;

          // Avoid flash of white box if rendered for any reason.
          textArea.style.background = `transparent`;

          textArea.value = window.location.href;
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand(`copy`);
          } catch (err) {
            console.error(`Copy failed.`);
          }

          document.body.removeChild(textArea);
        });
      });
    }
  },

  // Embed various React components based on the existence of containers within the current page
  injectReactComponents() {
    let creepVoteTargets = document.querySelectorAll(`.creep-vote-target`);

    if (creepVoteTargets.length > 0) {
      Array.from(creepVoteTargets).forEach(element => {
        let csrf = element.querySelector(`input[name=csrfmiddlewaretoken]`);
        let productName = element.dataset.productName;
        let productID = element.querySelector(`input[name=productID]`).value;
        let votes = element.querySelector(`input[name=votes]`).value;

        try {
          votes = JSON.parse(votes.replace(/'/g,`"`));
        } catch (e) {
          votes = {
            creepiness: {
              average: 50,
              'vote_breakdown': {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0}
            },
            confidence: {'0': 0, '1': 0}
          };
        }

        ReactDOM.render(<CreepVote csrf={csrf.value} productName={productName} productID={parseInt(productID,10)} votes={votes}/>, element);
      });
    }

    let creepometerTargets = document.querySelectorAll(`.creepometer-target`);

    if (creepometerTargets.length > 0) {
      Array.from(creepometerTargets).forEach(element => {
        let initialValue = element.dataset.initialValue;

        ReactDOM.render(<Creepometer initialValue={initialValue} />, element);
      });
    }

    let criterionTargets = document.querySelectorAll(`.criterion-target`);

    if (criterionTargets.length > 0) {
      Array.from(criterionTargets).forEach(element => {
        let meta = {};

        try {
          meta = JSON.parse(element.dataset.meta);
        } catch (e) {
          if (!element.dataset) {
            console.warn(`element did not have a dataset:`, element);
          } else if (!element.dataset.meta) {
            console.warn(`element did not have a data-meta attribute:`, element);
          } else {
            console.warn(`could not parse JSON`, element, element.dataset.meta);
          }
        }

        ReactDOM.render(<Criterion meta={meta}></Criterion>, element);
      });
    }
  }
};

main.init();
