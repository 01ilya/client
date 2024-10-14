import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Camere de supraveghere'},
            {id:3, name: 'Căsti'},
            {id:4, name: 'Smart watch '},
            {id:5, name: 'Încărcătoare'},
            {id:6, name: 'Auto'},
            {id:7, name: 'Cartele de memorie '},
            {id:8, name: 'Baterii externe'},
            {id:9, name: 'Accesoare telefoane'},
            {id:10, name: 'Protecție smartphone'},
            {id:11, name: 'Boxe'},
            {id:12, name: 'Tehnică de uz casnic'},
            {id:13, name: 'Iluminare'},
            {id:14, name: 'Accesorii PC'}
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