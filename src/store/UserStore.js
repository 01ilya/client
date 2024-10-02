import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor() {
       this._isAuth = false
       this.user = {}
       makeAutoObservable(this)
    }
    setIsAuthl(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this.user
    }
}