// 1. 实现 URLSearchParams 所有方法 https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams
class MyURLSearchParams {
  constructor(init) {
    const match = init.replace(/^.*\?/, "");
    this.list = match.split("&").map((param) => param.split("=")) ?? [];
    this.map = new Map();
    for (const [key, value] of this.list) {
      this.append(key, value);
    }
  }
  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if (this.map.has(name)) {
      const values = this.map.get(name) || [];
      values.push(String(value));
    } else {
      this.set(name, value);
    }
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.map.delete(name);
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for (const [key, values] of this.paramMap) {
      for (const value of values) {
        yield [key, value]
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (const [key, values] of this.map) {
      for (const value of values) {
        callback(value, key);
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    const values = this.map.get(name.replace(/^.*\?/, ""));
    if (values && values.length) {
      return values[0];
    }
    return undefined;
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.map.get(name) || [];
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.map.has(name);
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.map.keys();
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.map.set(name, [String(value)]);
  }

  // sor all key/value pairs based on the keys
  sort() {
    // [ 'a', [ '1', '2' ] ] [ 'b', [ '2' ] ]
    const sortedEntries = [...this.map].sort((a, b) => (a[0] < b[0] ? -1 : 1));
    this.map = new Map(sortedEntries);
  }

  /**
   * @return {string}
   */
  toString() {
    return [...this.map]
      .flatMap(
        ([key, values]) => values.map((value) => `${key}=${value}`) // Return a nested array but `flatMap` flattens it by one level
      )
      .join("&");
  }

  /**
   * @return {Iterator} values
   */
  values() {
    const entries = this.entries()
    let value;
    while (value = entries.next().value) {
      yield value[1]
    }
  }
}

const params = new MyURLSearchParams("?a=1&a=2&b=2");
params.sort();
// params.get("a"); // '1'
// params.getAll("a"); // ['1', '2']
// params.get("b"); // '2'
// params.getAll("b"); // ['2']

// params.append("a", 3);
// params.set("b", "3");
// params.toString(); // 'a=1&a=2&b=3&a=3'
