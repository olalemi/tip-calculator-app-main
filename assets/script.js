const bill = document.querySelector("#Bill");
const selectTips = document.querySelectorAll(".primary-btn");
const custom = document.querySelector("#Custom");
const nPeople = document.querySelector("#Npeople");
const reset = document.querySelector(".btn7");
// const tipAmount = document.querySelector('.input-label2');
const total = document.querySelector("#Total");
const tipAmount = document.querySelector("#Tamount");
const error = document.querySelector(".error");

const customInput = custom.value / 100;


tipAmount.value = "£0.00";
total.value = "£0.00";

bill.addEventListener("input", () => {
  // console.log(bill.value);
});

function primaryBtn() {
  
  let tipAmountPerPerson = (bill.value * customInput) / nPeople.value;
  tipAmount.value = `£${tipAmountPerPerson.toFixed(2)}`;
  totalPerPerson = bill.value / nPeople.value + tipAmountPerPerson;
  total.value = `£${totalPerPerson.toFixed(2)}`;
}

function customBtn() {
  selectTips.forEach((tips) => {
    tips.addEventListener("click", () => {
      percent = tips.innerHTML.replace("%", "") / 100;
      let tipAmountPerPerson = (bill.value * percent) / nPeople.value;
      tipAmount.value = `£${tipAmountPerPerson.toFixed(2)}`;
      totalPerPerson = bill.value / nPeople.value + tipAmountPerPerson;
      total.value = `£${totalPerPerson.toFixed(2)}`;
    });
  });
}

function calculateTipAmount() {

  custom.addEventListener("input", () => {
    primaryBtn();
  });

  if (customInput == "" || customInput == null) {
    customBtn();
  } else {
    return;
  }
}

// Calculating Tip amount end

calculateTipAmount();

// error message pop-up start

nPeople.addEventListener("input", () => {
  // console.log('nPeople');
  if (nPeople.value.toString() === "0" || nPeople.value.toString() === "") {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
});

// error message show pop-up end

// reset button

// reset button end




// reset.addEventListener("click", (resetAll) => {
//   custom.innerHTML = "";
//   console.log("boy");
//   bill.value = "0.00";
//   nPeople.value = "3";
//   tipAmount.value = "$0.00";
//   total.value = "$0.00";
// });
  


