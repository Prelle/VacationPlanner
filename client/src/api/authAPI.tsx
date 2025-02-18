import { UserLogin } from "../interfaces/UserLogin";  // Import the UserLogin interface for typing userInfo
import { UserSignup } from "../interfaces/UserSignup";

// Function to send a POST request to the '/auth/login' endpoint with user login information
const login = async (userInfo: UserLogin) => {
  try {
    // Send a POST request to '/auth/login' with user login information in JSON format
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`${errorData.message}`); // Throw a detailed error message    
    }

    // Parse the response body as JSON
    const data = await response.json();

    return data;  // Return the data received from the server
  } catch (err) {
    console.log('Error from user login: ', err);  // Log any errors that occur during fetch
    return Promise.reject(err);  // Return a rejected promise with an error message
  }
}

const signup = async (userInfo: UserSignup) => {
  try {
    // Send a POST request to '/auth/signup' with user signup information in JSON format
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`${errorData.message}`); // Throw a detailed error message    
    }

    // Parse the response body as JSON
    const data = await response.json();

    return data;
  } catch (err) {
    console.log('Error from user signup: ', err);  // Log any errors that occur during fetch
    return Promise.reject(err);
  }
}

export { login, signup };  // Export the functions to be used elsewhere in the application
