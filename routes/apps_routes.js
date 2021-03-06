const express = require("express");
const router = new express.Router();
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
    const order = req.query.order === "desc" ? -1 : 1;
    if (req.query.by === "name") {
      let sortName = { name: order };

      const apps = await App.find(req.apps).sort(sortName);

      const startIndex = (start - 1) * end;
      const endIndex = start * end;
      const resultApps = apps.slice(startIndex, endIndex);

      res.send(resultApps);
    }
    if (req.query.by === "id") {
      let sortId = { _id: order };
      const apps = await App.find(req.apps).sort(sortId);

      const startIndex = (start - 1) * end;
      const endIndex = start * end;
      const resultApps = apps.slice(startIndex, endIndex);

      res.send(resultApps);
    }
    if (req.query.by === undefined) {
      res.send("Error. Please define 'by' as a param.");
    }
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
