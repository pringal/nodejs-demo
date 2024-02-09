// Importing necessary modules
const axios = require('axios');

// Function to fetch a TODO by index
async function fetchTodo(index) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`);
  return response.data;
}

// Function to fetch even numbered TODOs based on the specified count
async function fetchEvenNumberedTodos(count) {
  const evenNumberedTodos = [];
  let index = 2; // Starting from index 2 (first even number)
  
  while (evenNumberedTodos.length < count) {
    const todo = await fetchTodo(index);
    
    if (todo.id % 2 === 0) {
      evenNumberedTodos.push(todo);
    }
    
    index += 2; // Move to the next even index
  }

  return evenNumberedTodos;
}

// Function to print TODO details
function printTodoDetails(todo) {
  console.log(`Title: ${todo.title}`);
  console.log(`Completed: ${todo.completed}`);
  console.log('------------------------');
}

// Main function to execute the command-line tool
async function main() {
  try {
    // Get the count of even numbered TODOs from the CLI argument (default to 20)
    const count = parseInt(process.argv[2]) || 20;
    
    const evenNumberedTodos = await fetchEvenNumberedTodos(count);
    
    // Print details for each TODO
    evenNumberedTodos.forEach(printTodoDetails);
  } catch (error) {
    console.error('Error fetching TODOs:', error.message);
  }
}

// Run the main function
main();
