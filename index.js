const express = require("express");
const cors = require("cors");

const { PORT } = process.env;
const app = express();

app.use(cors());

const profiles = [
  {
    id: 1, firstname: "Jolly",
    birthdate: new Date(
      "1990-10-10"
    )
  }
];

app.get(
  "/test", (req, res) => {
    res.send("Hollariiiitüüüü!");
  }
);

app.get(
  "/profile", (req, res) => {
    res.json({ profile: { name: "Igor" } });
    console.log("REQUEST", req.query);
    const userId = parseInt(req.query.userId);
    const userProfile = profiles.find((item) => item.Id === userId);
  }
);

app.get('/user', (req, res) => {
  const user = {
    firstName: 'Igor',
    lastName: 'Geheimmann',
    address: 'Beispielstraße 1, 12345 Musterstadt',
    hobbies: ['Springen', 'Tanzen', 'Klatschen']
  };
  res.json(user);
});

app.get('/todos', (req, res) => {
  const todos = [
    {
      id: 1,
      task: 'Einkaufen gehen',
      completed: false
    },
    {
      id: 2,
      task: 'Füße waschen',
      completed: true
    }
  ];
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
