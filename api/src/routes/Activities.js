const { Router } = require("express");
const { conn } = require("../db.js");
const { Activity, Country } = conn.models;

const router = Router();

// router.post("/activity", async (req, res, next) => {
//   const { name, difficulty, duration, season, countryId } = req.body;
//   let newActivity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season,
//   });

//   let resp = await newActivity;

//   res.json(resp);
// });

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post("/activity", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    const country = await Country.findByPk(countryId);
    // newActivity.addCountry(country);
    country.addActivity(newActivity);

    res.status(201).send(newActivity);
  } catch (error) {
    next(error);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const newActivity = await Activity.findAll();
//     res.send(newActivity);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { name, difficulty, duration, season, countryId } = req.body;
//     const newActivity = await Activity.create({
//       name,
//       difficulty,
//       duration,
//       season,
//     });
//     if (countryId) await newActivity.addCountry(countryId);
//     res.status(201).send(newActivity);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
