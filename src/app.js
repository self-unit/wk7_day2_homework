const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const selectItem = document.querySelector('select#instrument-families');
  const instrumentMenu = new SelectView(selectItem);
  instrumentMenu.bindEvents();
  // console.log(instrumentMenu);

  const familyDiv = document.querySelector('div#family-info');
  const showFamilyDetails = new ResultView(familyDiv);
  showFamilyDetails.bindEvents();
  // console.log(showFamilyDetails);

  const instrumentDataArray = new InstrumentFamilies();
  instrumentDataArray.bindEvents();
  // console.log(instrumentDataArray);

});
