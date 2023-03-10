import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  private localStorage;
  constructor() {
    this.localStorage = localStorage;
  }

  public getValue(value: string) {
    try {
      const result = localStorage.getItem(value);
      return JSON.parse(result as string);
    } catch(error) {
      console.error(error);
    }
  }

  public setValue(key: string, value: unknown) {
    try {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    } catch(error) {
      console.error(error);
    }
  }

  public removeValue(key: string) {
    try {
      localStorage.removeItem(key);
    } catch(error) {
      console.error(error);
    }
  }
}
