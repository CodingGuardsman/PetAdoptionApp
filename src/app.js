/* scripts/app.js */

// Function to handle form submission for pet search
function handleSearch(event) {
    event.preventDefault();
    
    // Get the search query from the form input
    const searchQuery = document.querySelector('input[name="search"]').value;
    
    // Perform search functionality (replace this with your actual search logic)
    console.log('Searching for:', searchQuery);
}

// Attach event listener to the search form
const searchForm = document.querySelector('#search form');
searchForm.addEventListener('submit', handleSearch);
