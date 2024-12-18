document.getElementById('submitQuiz').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Define correct answers
    const correctAnswers = {
        q1: 'B',
        q2: 'B',
        q3: 'C',
        q4: 'D',
        q5: 'C',
        q6: 'A',
        q7: 'B',
        q8: 'B',
        q9: 'C',
        q10: 'D'
    };
    
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    
    // Check answers
    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Store the score in localStorage
    localStorage.setItem('quizScore', score);

    // Redirect to results page
    window.location.href = 'results.html';
});
