const router = require("express").Router();
const {
    catchErrors
} = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomcontroller");

const auth = require("../middlewares/auth");

router.post("/", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;