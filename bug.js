const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      //No error handling, this will cause a server crash if the database query fails
      res.status(500).send('Server error');
    } else if (!user) {
      //Missing 404 error handling, sends a 200 OK with an empty object
      res.json({});
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));