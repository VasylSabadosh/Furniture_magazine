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
            {id: 1, name: "chair", price: 1000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`},

            {id: 2, name: "bed", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2023/01/brie_1-scaled.jpg?fit=2560%2C1920&ssl=1`},

            {id: 3, name: "sofa", price: 3000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2022/07/dortmund_11-scaled.jpg?fit=2560%2C1457&ssl=1`},

            {id: 4, name: "table", price: 4000, rating: 5, img: `http://www.arbre.com.ua/images/stol-georg-stoloviy/4.jpg?h=123`},

            {id: 5, name: "banket", price: 5000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/09/koti_00.jpg?fit=1920%2C1080&ssl=1`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}


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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    getBrands() {
        return this._brands
    }
    get Types() {
        return this._types
    }
    get Items() {
        return this._items
    }
    get SelectedType() {
        return this._selectedType
    }
    get SelectedBrand() {
        return this._selectedBrand
    }
}