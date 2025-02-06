import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import compression from "compression";
import { isPrime, isPerfect, getProperties, digitSum } from "./utils";

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

app.get("/api/classify-number", async (req: Request, res: Response) => {
  const numberStr = req.query.number;

  if (!numberStr || isNaN(Number(numberStr))) {
    res.status(400).json({
      number: "alphabet",
      error: true,
    });
    return;
  }

  const number = parseInt(numberStr as string);

  try {
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${number}/math`
    );

    const response: NumberResponse = {
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number),
      digit_sum: digitSum(number),
      fun_fact: funFactResponse.data,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      number: numberStr,
      error: true,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

interface NumberResponse {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact: string;
}
