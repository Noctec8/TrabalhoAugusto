const {Router} = require("express")
const PostController = require("../controllers/posts-controller")
const router = Router()

const postController = new PostController()
router.get('/', postController.All)
router.post('/', postController.Create)
router.get('/:slug', postController.FindBySlug)

module.exports = router