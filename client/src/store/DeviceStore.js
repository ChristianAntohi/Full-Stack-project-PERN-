import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Electronics"},
            {id: 2, name: "Smartphones"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            
            
        ]
        this._devices = [
            {id: 1, name: "15 pro max", price: 10000, rating: 5, img: 'https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png'},
            {id: 2, name: "16 pro max", price: 10000, rating: 5, img: 'https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png'},
            {id: 3, name: "17 pro max", price: 10000, rating: 5, img: 'https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png'},
            {id: 4, name: "18 pro max", price: 10000, rating: 5, img: 'https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png'},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}