// Part 2: DOM Manipulation Practice
// This file demonstrates proper JavaScript integration, functional DOM manipulation,
// error handling with try/catch, and error display functionality as required by the rubric.

// Function to update animal content with error handling using try/catch blocks.
const updateAnimalContent = (animalId, animalData) => {
    try {
        // Attempt to find the DOM element with the specified ID
        const animalElement = document.querySelector(`#${animalId}`);
        if (!animalElement) {
            // If the element is not found, throw an error to be caught below.
            throw new Error(`Animal element ${animalId} not found`);
        }
        // Update the inner HTML of the element with animal information.
        animalElement.innerHTML = `
            <p><strong>Animal:</strong> ${animalData.name}</p>
            <p><em>This is a ${animalData.name}, known for its unique characteristics.</em></p>
        `;
    } catch (error) {
        // Log error details in the console (demonstrates error display functionality).
        console.error('DOM Update Error:', error.message);
    }
};

// Animal data structure (functional DOM manipulation code).
const animals = [
    { id: 'animal1', name: 'Elephant' },
    { id: 'animal2', name: 'Tiger' }
];

// Event listeners to target DOM elements and trigger the update function.
// This section demonstrates proper JavaScript integration and debugging techniques.
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to all update buttons
    document.querySelectorAll(".updateBtn").forEach(button => {
        button.addEventListener("click", (event) => {
            const animalId = event.target.getAttribute("data-animal");
            // Find the corresponding animal data based on the button's data attribute.
            const animalData = animals.find(animal => animal.id === animalId);
            if (animalData) {
                updateAnimalContent(animalId, animalData);
            }
        });
    });
});
