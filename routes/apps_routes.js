const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const App = require("../model/apps_model");

// Creating app

router.post("/apps", async (req, res) => {
  const myApp = new App(req.body);
  try {
    await myApp.save();
    res.status(201).send(myApp);
  } catch (error) {
    res.status(400).send(error);
  }
});

//apps?by=name
//apps?by=id
//apps?start=1
//apps?end=(>max)
//apps?max<=50
//apps?by=name&start=1&end=10&max=50

//getting apps
router.get("/apps", async (req, res) => {
  let max = req.query.max;
  let end = req.query.end;
  let start = req.query.start;

  //Default:
  if (start === undefined) {
    start = 1;
  }
  if (max === undefined) {
    max = 50;
  }
  if (end === undefined || end > max) {
    end = max;
  }

  try {
    if (req.query.by === "name") {
      let sortName = { name: 1 };
      const apps = await App.find(req.apps).sort(sortName);

      const startIndex = (start - 1) * end;
      const endIndex = start * end;
      const resultApps = apps.slice(startIndex, endIndex);

      res.send(resultApps);
    }
    if (req.query.by === "id") {
      let sortId = { id: 1 };
      const apps = await App.find(req.apps).sort(sortId);

      const startIndex = (start - 1) * end;
      const endIndex = start * end;
      const resultApps = apps.slice(startIndex, endIndex);

      res.send(resultApps);
    }
    if (req.query.by === undefined) {
      res.send("Please define name or id as a param");
    }
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
