import { createServer } from "http";
import Server from "ws/lib/websocket-server";

const server = createServer();
const socketServer = new Server({ server });

socketServer.on("connection", () => {
  console.log("connection");
});

server.listen(8080, () => {
  console.log("server listening on 8080");
});
