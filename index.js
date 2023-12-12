import { server } from "./server.js";
import { userRoute } from "./routes/user.js";
import { client } from "./db/dbConnection.js";

server.use("/api/v1/", userRoute);
