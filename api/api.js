const dogsRouter = require("./dogs/dogsRoutes");
const adoptersRouter = require("./adopters/adoptersRoutes");
const apiRouter = require("express").Router();

apiRouter.use("/dogs",dogsRouter);
apiRouter.use("/adopters",adoptersRouter);
module.exports = apiRouter;