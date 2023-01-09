const Router = require('express')
const router = new Router()
const furnitureController = require('../controllers/furnitureController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), furnitureController.create)
router.get('/', furnitureController.getAll)
router.get('/:id', furnitureController.getOne)


module.exports = router