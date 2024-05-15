//morgen function for handel the statistics
const morganFunction = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "--",
    tokens["response-time"](req, res),
  ].join(" ");
};
module.exports = morganFunction;
