import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private dbName = 'vpDatabase';
  private objectStoreName = 'vpObjectStore';

  constructor() { }

  openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, 1);

      request.onerror = () => reject('Error opening database');
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore(this.objectStoreName, { keyPath: 'id', autoIncrement: true });
      };
    });
  }

  addItem(item: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readwrite');
        const objectStore = transaction.objectStore(this.objectStoreName);

        const request = objectStore.add(item);
        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error adding item');
      }).catch(error => reject(error));
    });
  }

  getAllItems(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readonly');
        const objectStore = transaction.objectStore(this.objectStoreName);

        const request = objectStore.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Error retrieving items');
      }).catch(error => reject(error));
    });
  }

  getItem(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readonly');
        const objectStore = transaction.objectStore(this.objectStoreName);
  
        const request = objectStore.get(id);
        request.onsuccess = () => {
          if (request.result) {
            resolve(request.result);
          } else {
            reject('Item not found');
          }
        };
        request.onerror = () => reject('Error getting item');
      }).catch(error => reject(error));
    });
  }

  updateItem(item: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readwrite');
        const objectStore = transaction.objectStore(this.objectStoreName);
  
        const request = objectStore.put(item);
        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error updating item');
      }).catch(error => reject(error));
    });
  }

  deleteItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readwrite');
        const objectStore = transaction.objectStore(this.objectStoreName);
  
        const request = objectStore.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error deleting item');
      }).catch(error => reject(error));
    });
  }

  clearDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const transaction = db.transaction([this.objectStoreName], 'readwrite');
        const objectStore = transaction.objectStore(this.objectStoreName);

        const request = objectStore.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error clearing database');
      }).catch(error => reject(error));
    });
  }
}
