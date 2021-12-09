const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/signUp", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user = dbUserData;

      res.status(200).json(dbUserData);
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {

  // Find the user who matches the posted e-mail address
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user = dbUserData;
      console.log("worked!", req.session.cookie);

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables  
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;