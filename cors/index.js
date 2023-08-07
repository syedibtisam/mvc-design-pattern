const cors = require("cors");

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
};

module.exports = cors(corsOptions);