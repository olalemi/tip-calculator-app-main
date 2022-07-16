const bill = document.querySelector('#Bill');
const selectTips = document.querySelectorAll('.primary-btn');
const custom = document.querySelector('.btn6');
const nPeople = document.querySelector('#Npeople');
const Reset = document.querySelector('.btn7');
const tipAmount = document.querySelector('.input-label2');
const total = document.querySelector('.input-label3');
const totalBill = document.querySelector('#Tamount');
const error = document.querySelector('.error');


bill.addEventListener('input', () => {
  console.log('bill');
  console.log();
});

selectTips.forEach((tips) => {
  tips.addEventListener('click', () => {
    console.log('tip');

    calculate();
   
  });
});

const calculate = () => {

  let totalBillPerPerson = (bill.value/nPeople.value)
  totalBill.value = totalBillPerPerson.toFixed(2)


}

nPeople.addEventListener('input', () => {
  console.log('nPeople');
  if (nPeople.value.toString() === '0' ){
      error.style.visibility='visible'
  }  else {
    error.style.visibility='hidden'
  }
});

custom.addEventListener('click', () => {
  console.log('custom');
});

Reset.addEventListener('click', () => {
  console.log('Reset');
});

const print = () => {
  console.log('olalemi');
};
