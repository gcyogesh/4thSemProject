import { createUser } from "../controllers/userController.js";

export const userRoutes = (req, res) => {
  if (req.url === '/register' && req.method === 'POST') {
    createUser(req, res); // Call the controller to insert the user
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};
