import { app } from "./app";

const port = app.get("port");

app.listen(port, () => {
  console.log(
    `🐝🐝🐝 [SERVER_START]: Server is running at http://localhost:${port}`
  );
});
