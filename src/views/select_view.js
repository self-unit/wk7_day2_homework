const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (item) {
  this.item = item;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-families-available', (event) => {
    const allFamilies = event.detail;
    this.populate(allFamilies);
  });

  this.item.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function (familiesData) {
  familiesData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.item.appendChild(option);
  })
};

module.exports = SelectView;
