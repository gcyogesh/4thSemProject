import { insertUserInDB } from "../models/userModels.js";

// Handle the request to insert a new user
export const createUser = async (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const { name, email, password } = JSON.parse(body); // Parse the body data
      const newUser = await insertUserInDB(name, email, password); // Insert user
      res.statusCode = 201;
      res.end(JSON.stringify(newUser)); // Respond with the inserted user
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: 'Server error: ' + error.message }));
    }
  });
};
