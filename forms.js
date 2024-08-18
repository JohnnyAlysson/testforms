
//get the URL from the script, unless changed to mess with this
const scriptURL = "https://script.google.com/macros/s/AKfycbzozjv0K7yy1YjwzhPc0S0s_GP_cHkqia8fSNkAg2boP1nZUVZboSGlbZ-fI0M15D_v/exec";

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Form submission attempted. scriptURL:', scriptURL) // Debug log
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            console.log('Response received:', response) // Debug log
            return response
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => {
            console.error('Fetch Error:', error)
            alert('There was a problem submitting the form. Please try again.')
        })
})


document.getElementById('theme-toggle').addEventListener('click', function() {
    
    
    document.body.classList.toggle('dark');

    const elements = document.querySelectorAll('button, .container, form, h4, input[type="text"], input[type="email"], textarea, input[type="submit"], ::placeholder');
    
    elements.forEach(element => {
        element.classList.toggle('dark');
    });

    const toggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; 
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
