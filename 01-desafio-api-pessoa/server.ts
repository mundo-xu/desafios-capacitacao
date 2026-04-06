import app from "./src/infra/routes";

function main() {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
