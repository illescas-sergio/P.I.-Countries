const { Router } = require("express");
const { conn } = require("../db.js");
const { Country, Activity } = conn.models;
// const { Op } = require("sequelize");

const router = Router();

router.get("/countries", async (req, res, next) => {
  try {
    const name = req.query.name;
    if (name) {
      let resp = await Country.findAll({
        include: [
          {
            model: Activity,
            through: "country_activity",
          },
        ],
      });
      let filteredCountry = await resp.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );

      if (!filteredCountry.length) {
        res.send("No such country");
      } else {
        res.send(filteredCountry);
      }
    } else {
      let resp = await Country.findAll({
        attributes: ["flag", "name", "id", "continent", "population"],
      });

      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/countriesById/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let resp = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          through: "country_activity",
        },
      ],
    });
    res.send(resp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
