const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-family-ready', (event) => {
    const familyResult = event.detail;
    this.render(familyResult);
  });
};

ResultView.prototype.render = function (result) {
  const title = document.createElement('h2');
  title.textContent = `${result.name}`;
  this.container.appendChild(title);

  const infoParagraph = document.createElement('p');
  infoParagraph.setAttribute('style', 'white-space: pre-line;');
  infoParagraph.textContent = `${result.description}`;
  this.container.appendChild(infoParagraph);

  
};

module.exports = ResultView;
