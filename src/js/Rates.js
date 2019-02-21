import path from 'path';
import data from '../data/code-test.json';

const Rates = () => {
  const ratesTable = $('.Rates-table');
  
  data.sort((a, b) => {
    return a.earnings < b.earnings ? 1 : b.earnings < a.earnings ? -1 : 0;
  });

  $.each(data, function(i, v) {
    const row = [
      '<div class="Row">',
      '<div class="name">',
      v.name,
      '</div>',
      '<div class="yield">',
      v.apy,
      ' %</div>',
      '<div class="earnings">$',
      v.earnings.toFixed(2),
      '</div>',
      '</div>'
    ];

    $('.Rates-table .Row-dynamic').append(row.join(''));
  });

}

export default Rates;