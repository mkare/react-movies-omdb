export class LocalStorageManager {
  static setItem(key: string, value: unknown): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  static getItem(key: string): Promise<unknown> {
    return new Promise<unknown>((resolve, reject) => {
      try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
          resolve(null);
        } else {
          const parsedValue = JSON.parse(serializedValue);
          resolve(parsedValue);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateItem(key: string, newValue: unknown): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        const serializedValue = JSON.stringify(newValue);
        localStorage.setItem(key, serializedValue);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  static removeItem(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
