import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: "chair"},
            {id: 2, name: "bed"},
            {id: 3, name: "table"},
            {id: 4, name: "sofa"},
            {id: 5, name: "armchair"}

        ]
        this._brands = [
            {id: 1, name: "frankof"},
            {id: 2, name: "lisma"}
        ]
        this._items = [
            {id: 1, name: "chair", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},

            {id: 2, name: "bed", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},

            {id: 1, name: "chair", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},

            {id: 1, name: "chair", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},

            {id: 1, name: "chair", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},
        ]
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setTypes(types) {
        this._types = types
    }
    setItems(items) {
        this._items = items
    }

    getBrands() {
        return this._brands
    }
    getTypes() {
        return this._types
    }
    getItems() {
        return this._items
    }
}