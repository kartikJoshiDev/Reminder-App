import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { STORAGE_KEYS } from '../apiKeys/storage-keys-constants';

export const CONSTANT = {
  SESSION_TIME_OUT: 100000000000,
};

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storageKeys = {
    SESSION: 'medlSession',
    PERMISSION: 'permissions'
  };
  constructor(private cookieService: CookieService) {
    // Constructor body
  }
  /**
   * @method setLocalStorageData
   * @description Method to set local storage data.
   * @param key: string; key for the local storage.
   * @param value: any; value for the local storage.
   */
  setLocalStorageData(key, value): void {
    // console.log(key,value);
    const expired = new Date();
    expired.setTime(expired.getTime() + (CONSTANT.SESSION_TIME_OUT));
    this.cookieService.set(key, value, expired, '/', 'localhost', false, 'Strict');
    //this.cookieService.set(key, value, expired, '/','kartikJoshiDev.github.io',true,'Strict');
    if (value === 'null') {
      this.cookieService.delete(key);
    }
    if (key === STORAGE_KEYS.SESSION && value === 'null') {
      for (const property in this.storageKeys) {
        if (this.cookieService.getAll() &&
          this.cookieService.getAll()[this.storageKeys[property]]) {
          this.cookieService.deleteAll('/', '/');
        }
      }
    }
  }
  /**
   * @method getLocalStorageData
   * @description Method to get local storage data.
   * @param key: string; key for the local storage.
   */
  getLocalStorageData(key): any {
    return this.cookieService.getAll() && this.cookieService.getAll()[key]
      ? this.cookieService.get(key) : 'null';
  }
  /**
   * @method getAllStorageData
   * @description Method to get All local storage data.
   * @param key: string; key for the local storage.
   */
  getAllStorageData(): any {
    return this.cookieService.getAll();
  }

}

