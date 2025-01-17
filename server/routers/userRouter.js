const express = require('express');

const userController = require('../controllers/UserController');
const recipeController = require('../controllers/RecipeController');
const sessionController = require('../controllers/SessionController');

const router = express.Router();

//router.post
router.post('/signup', userController.createUser, sessionController.startSession, (req, res) => {
  const { username, firstName, darkModePref } = res.locals.userData;
  const user = {
    loggedIn: true, 
    username: username,
    firstName: firstName,
    darkModePref: darkModePref
  };
  return res.status(200).json(user);
});

//router/login/post
router.post('/login', userController.verifyUser, sessionController.startSession, (req, res) => {
  const { username, firstName, darkModePref } = res.locals.userData;
  const user = {
    loggedIn: true, 
    username: username,
    firstName: firstName,
    darkModePref: darkModePref
  };
  return res.status(200).json(user);
});

// //router.put
// router.put('/', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.updatedUser);
// });

// //router.delete
// router.delete('/', userController.deleteUser, (req, res) => {
//   return res.status(200).json(res.locals.deletedUser);
// });

router.get('/logout', (req, res) => {
  res.clearCookie('wobbeuser').redirect('/')
});




module.exports = router;