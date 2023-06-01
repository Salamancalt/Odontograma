var toothStatus = {};

function changeToothStatus(toothId) {
  var tooth = document.getElementById(toothId);
  var currentStatus = toothStatus[toothId];

  if (!currentStatus) {
    toothStatus[toothId] = 'carious';
    tooth.style.backgroundColor = 'red';
  } else if (currentStatus === 'carious') {
    toothStatus[toothId] = 'missing';
    tooth.style.backgroundColor = 'gray';
  } else if (currentStatus === 'missing') {
    toothStatus[toothId] = 'healthy';
    tooth.style.backgroundColor = 'green';
  } else {
    delete toothStatus[toothId];
    tooth.style.backgroundColor = '';
  }
}