const correctAnswers =['B','B','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const card = document.querySelector('.card');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25;
        }
    });

    scrollTo(0,0);

    //show result on page
    result.querySelector('span').textContent = `${score}%`;

    //remove the "hiding" d-none
    result.classList.remove('d-none');

    //animated counter
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 75);
    
    card.classList.remove('d-none');

    //when you press submit, if you didn't select choices, alert pops up
});

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    const button = document.querySelector('.btn-primary');

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        location.reload(); // Reloads the current page
    });
});