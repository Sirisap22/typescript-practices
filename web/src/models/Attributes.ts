export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    //The second object that we pass in is going to have all of its properties taken
    //and copied over to the first
    Object.assign(this.data, update);
  }

  getAll = (): T => {
    return this.data;
  };
}
