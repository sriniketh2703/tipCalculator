'use strict';

//TODO: Starters

const submitButton = document.querySelector('.submit');

//TODO: Functions itself
submitButton.addEventListener('click', calculation);

function calculation() {
    let billAmount = document.getElementById('bill-amount').value;

    let tip = document.getElementById('tip').value;

    let noOfPersons = document.getElementById('noofpersons').value;

    let tipAmount = document.getElementById('tip-amount').value = Math.trunc((billAmount * (tip / 100)) / noOfPersons);

    let totalAmount = document.getElementById('total-amount').value = Math.trunc((billAmount * (parseFloat('1.0') + tip / 100)) / noOfPersons);

    if (billAmount && tip && noOfPersons) {
        let hiddenText = document.querySelector('.text');
        hiddenText.classList.remove('hidden');
        hiddenText.textContent = 'The Calculation is completed!';
    }
}
