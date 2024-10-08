// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear the Loading Message
        dataContainer.innerHTML = ''; // Clear existing content

        // Create and Append User List
        const userList = document.createElement('ul'); // Create a <ul> element
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set text content to user's name
            userList.appendChild(listItem); // Append the <li> to userList
        });
        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Indicate an error occurred
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
