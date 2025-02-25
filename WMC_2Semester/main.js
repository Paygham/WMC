import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// serve index.html
app.get("/", serveStatic({ path: "./WMC_2Semester/isPrime.html" }));

// serve json
const arr = [1, 2, 3, 4, 5];
const obj = { name: "John", age: 30, city: "New York" };
app.get("/obj", (c) => c.json(obj));
app.get("/arr", (c) => c.json(arr));
app.get("rnd", (c) => c.json(Math.round(Math.random() * 50)));
app.get(
  "rnda",
  (c) =>
    c.json(
      new Array(10).fill().map((_) => Math.round(Math.random() * 50))
        .toSorted(),
    ),
);

// serve all other static files
app.get("*", serveStatic({ root: "./WMC_2Semester" }));

Deno.serve(app.fetch);
