const {
getThougths,
getThougthById,
createThougth,
updateThought,
deleteThought,
addReaction,
removeReaction
} = require("../controllers/thoughtController")
const router = require("express").Router()

router.route("/")
.get(getThougths)
.post(createThougth)

router.route("/:thoughtId")
.get(getThougthById)
.put(updateThought)
.delete(deleteThought)

router.route("/:thoughtId/reactions")
.post(addReaction)
.delete(removeReaction)

module.exports = router
