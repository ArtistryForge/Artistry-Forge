document.addEventListener('DOMContentLoaded', function() {
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');
    const opinion = document.getElementById('opinion');

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function() {
            let click = 0;
            ratingValue.value = idx + 1;

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });
            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star');
                    allStar[i].classList.add('active');
                } else {
                    allStar[i].style.setProperty('--i', click);
                    click++;
                }
            }
        });
    });

    const submitButton = document.querySelector('.btn.submit');

    submitButton.addEventListener('click', function() {
        const feedback = opinion.value;
        const rating = ratingValue.value;

        // Send data to the server
        fetch('/send-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback, rating }),
        }).then(response => {
            if (response.ok) {
                // Inform the user the feedback was sent
                alert('Feedback submitted successfully!');
            } else {
                // Handle errors
                alert('Failed to submit feedback. Please try again later.');
            }
        });
    });
});
