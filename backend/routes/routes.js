var appRouter = function (app) {
  app.get('/', function (req, res) {
    res.status(200).send('Welcome to our restful API' + req.params.name);
  });
};

module.exports = appRouter;
