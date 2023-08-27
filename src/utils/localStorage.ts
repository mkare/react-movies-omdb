export class LocalStorageManager {
  static setItem(key: string, value: unknown): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error setting local storage item:", error);
    }
  }

  static getItem(key: string): unknown {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      } else {
        const parsedValue = JSON.parse(serializedValue);
        return parsedValue;
      }
    } catch (error) {
      console.error("Error getting local storage item:", error);
      return null;
    }
  }

  static updateItem(key: string, newValue: unknown): void {
    try {
      const serializedValue = JSON.stringify(newValue);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error updating local storage item:", error);
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing local storage item:", error);
    }
  }
}
