const axios = require("axios");
const rules = require("../config/rules");

const API_URL =
  "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

const evaluateChecklist = async (req, res) => {
  try {
    const { data } = await axios.get(API_URL);
    const results = rules.map((rule) => ({
      id: rule.id,
      name: rule.name,
      status: rule.condition(data) ? "Passed" : "Failed",
    }));
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch or evaluate data" });
  }
};

module.exports = { evaluateChecklist };
