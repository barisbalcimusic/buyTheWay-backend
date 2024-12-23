import { pool } from "../../utils/config/DBconfig.js";
import fs from "fs";

export const getSearchResults = async (req, res, next) => {
  try {
    const { inputValue } = req.query;

    if (!inputValue) {
      res.status(400).json({ message: "Missing input value" });
    }

    const query = fs.readFileSync("src/queries/searchResults.sql", "utf-8");

    // WILDCARD
    const searchValue = `%${inputValue}%`;

    const [data] = await pool.query(query, [
      searchValue,
      searchValue,
      searchValue,
      searchValue,
      searchValue,
    ]);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
