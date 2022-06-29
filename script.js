const blogForm = document.querySelector('#blog-form');
const contactForm = document.querySelector('#blog-form')

// function that takes care of form submission
const submitBlogForm = (event) => {
    
    // prevents default behaviour for form
    event.preventDefault();

    // storing form inputs into variables
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const commentInput = document.querySelector('#comment');

    // storing input values in variables
    const formNameValue = nameInput.value;
    const formEmailValue = emailInput.value;
    const formCommentValue = commentInput.value;

    // error handling - checks to see if inputs are not empty
    if (formCommentValue && formEmailValue && formCommentValue) {
        const currentDate = new Date();

        // storing different parts of the date into variables
        const dayOfTheWeek = currentDate.toLocaleString('default', { weekday: 'long' });
        const date = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();

        // storing the date stamp in a format that will be displayed in the comments
        const commentDateString = `${dayOfTheWeek} ${month} ${date}th, ${year}`;
        const commentDateAuthorString = `${commentDateString} by ${formNameValue}`;

        // clearing out the input values from the form as they've been already stored
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        /* logic for manipulating DOM to add comments to webpage */

        const postedComments = document.querySelector('#blog-posted-comments');

        // logic for creating a comments container div
        const commentsBoxDiv = document.createElement('div');
        commentsBoxDiv.classList.add('comments-box');
        postedComments.appendChild(commentsBoxDiv);

        // logic for creating an image container div
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        commentsBoxDiv.appendChild(imgContainer);
        
        // logic for creating an image element and displaying a placeholder img
        const imgElement = document.createElement('img');
        imgContainer.appendChild(imgElement);
        imgElement.src = 'https://placekitten.com/500/500';

        // logic for creating a text container div
        const txtContainer = document.createElement('div');
        txtContainer.classList.add('txt-container');
        commentsBoxDiv.appendChild(txtContainer);

        // logic for creating a paragraph element and show date/author
        const dateAuthorParagraph = document.createElement('p');
        txtContainer.appendChild(dateAuthorParagraph);
        dateAuthorParagraph.textContent = commentDateAuthorString;

        // logic for creating a paragraph element and showing comments
        const commentParagraph = document.createElement('p');
        txtContainer.appendChild(commentParagraph);
        commentParagraph.textContent = formCommentValue;
    }
}

// event listener for when the form is submitted
if (document.querySelector('.blog-header')) {
    blogForm.addEventListener('submit', submitBlogForm);
}

