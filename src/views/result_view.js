const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (familyData) {
  this.familyData = familyData;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-family-ready', (event) => {
    const familyResult = event.detail;
    this.render(familyResult);
  });
};

ResultView.prototype.Render = function (result) {

};

module.exports = ResultView;
