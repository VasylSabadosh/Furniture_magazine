const uuid = require('uuid')
const path = require('path')
const {Furniture} = require('../models/models')
const ApiError = require('../error/ApiError')

class FurnitureController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const furniture = await Furniture.create({name, price, typeId, brandId, img: fileName})

            return res.json(furniture)
        } catch (e) {
            next(ApiError.bedRequest(e.message))
        }

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

}

module.exports = new FurnitureController()