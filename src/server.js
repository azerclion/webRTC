import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + `/views`);
app.use("/public", express.static(__dirname + `/public`));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () =>
  console.log(`✅ server start on http://localhost:3000`);

const server = http.createServer(app);
const io = new Server(server);
server.listen(3000, handleListen);