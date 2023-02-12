import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: "chair"},
            {id: 2, name: "bed"}
        ]
        this._brands = [
            {id: 1, name: "frankof"},
            {id: 2, name: "lisma"}
        ]
        this._items = [
            {id: 1, name: "chair", price: 2000, rating: 5, img: `https://frankof.com.ua/cat-tables-and-chairs/dakato/#lg=1&slide=2`},
            {id: 2, name: "bed", price: 2000, rating: 5, img: `https://lisma.com.ua/product/bristol/#lg=1&slide=0`}
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