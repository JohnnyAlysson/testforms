// let scriptURL = null; // Define the variable to store the data

// async function fetchJSONData() {
//     try {
//         const response = await fetch("./url.json");
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return await response.json(); // Return the fetched data
//     } catch (error) {
//         console.error("Unable to fetch data:", error);
//         throw error; // Re-throw error if needed
//     }
// }

// // Function to initialize and set the variable
// async function initializeData() {
//     try {
//         scriptURL = await fetchJSONData();
//     } catch (error) {
//         console.error("Error initializing data:", error);
//     }
// }

// // Call the initialization function
// initializeData().then(() => {
//     // Use the `scriptURL` variable here, after it has been initialized
//     console.log("Script URL available for use:", scriptURL);
// });


// const form = document.forms["contact-form"];

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     fetch(scriptURL,{method: 'POST', body: new FormData(form)});
//     .then(response =>alert("Thank you! your form is submitted sucessfully."));
//     .then(()=>{window.location.reload();})
//     .catch(error=> console.error('error.message'))
// })

// Define the variable to store the script URL
let scriptURL = null;

// Function to fetch the JSON data and initialize the scriptURL
async function initializeData() {
    try {
        const response = await fetch("./url.json"); // Adjust the path as needed
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        scriptURL = data.urltest; // Extract the value associated with 'urltest'
        console.log("Script URL initialized");
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}

// Function to handle form submission
function handleFormSubmission() {
    const form = document.forms["contact-form"];
    
    form.addEventListener('submit', async e => {
        e.preventDefault();
        
        // Check if scriptURL has been initialized
        if (!scriptURL) {
            console.error("Script URL is not initialized.");
            return;
        }
        
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            alert("Thank you! Your form has been submitted successfully.");
            window.location.reload();
        } catch (error) {
            console.error('Error:', error.message);
        }
    });
}

// Initialize data and set up form handler
initializeData().then(() => {
    handleFormSubmission();
});




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
