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
  this.container.innerHTML = '';
  const familyTitle = document.createElement('h2');
  familyTitle.textContent = `${result.name}`;
  this.container.appendChild(familyTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.setAttribute('style', 'white-space: pre-line;');
  infoParagraph.textContent = `${result.description}`;
  this.container.appendChild(infoParagraph);

  const listTitle = document.createElement('h3');
  listTitle.textContent = 'Instruments include:';
  this.container.appendChild(listTitle);

  const instrumentList = document.createElement('ul');
  this.container.appendChild(instrumentList);
  result.instruments.forEach(function(instrument) {
    const instrumentItem = document.createElement('li');
    instrumentItem.textContent = `${instrument}`;
    instrumentList.appendChild(instrumentItem);
  });

};

module.exports = ResultView;
