import express, { Request, Response } from "express";

const PORT = 5001;
const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log({ req, res });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
