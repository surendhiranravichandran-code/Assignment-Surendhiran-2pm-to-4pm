/* 

Age Checker
Input age → output Child/Adult/Senior.

*/

const ageInput = document.getElementById('age');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');
const clear=document.getElementById('clear-btn');


btn.addEventListener('click', () => {
    const ageValue = Number(ageInput.value);

    if (!Number.isFinite(ageValue) || ageValue < 0) {
        result.textContent = 'Please enter a valid non-negative age.';
        result.style.color = 'red';
        return;
    }

    if (ageValue <= 17) {
        result.textContent = 'Child';
        result.style.color = 'green';
    } else if (ageValue <= 64) {
        result.textContent = 'Adult';
        result.style.color = 'blue';
    } else {
        result.textContent = 'Senior';
        result.style.color = 'purple';
    }
});

ageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btn.click();
});

clear.addEventListener('click',function(){
    result.textContent="";
    ageInput.value="";
    return;
})
