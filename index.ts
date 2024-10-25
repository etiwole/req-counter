import express, { Express, Request, Response } from 'express';
import { hostname } from 'os';

const app: Express = express();

let counter: number = 0;

const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
    res.json({
        counter: ++counter,
        hostname: hostname(),
    })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})