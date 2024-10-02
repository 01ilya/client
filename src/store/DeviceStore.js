import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфон'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'}
        ]
        this._device = [
               {
                    "id": 1,
                    "name": "mac",
                    "price": 2000,
                    "raiting": 0,
                    "img": "31c0cfd0-9cae-45ea-9059-74c3a79ca770.png"
                },
                {
                    "id": 2,
                    "name": "Проверка",
                    "price": 32323,
                    "raiting": 0,
                    "img": "9f6ac39f-cb56-4775-89b6-207370f56d6b.png"
                },
                {
                    "id": 8,
                    "name": "Проверка1",
                    "price": 32323,
                    "raiting": 0,
                    "img": "7d821276-8844-404c-b878-a8b86d5aba9d.png"
                }
            ]
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

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}