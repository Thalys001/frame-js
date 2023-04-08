class Negotiation {
  constructor(data, quantity, value) {
    this._data = new Date(data.getTime())
    this._quantity = quantity;
    this._value = value;
    Object.freeze(this);
  }

  get volume() {
    return this._quantity * this._value;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }
}

let h = new Date()

let n1 = new Negotiation(h, 5, 700);
// console.log(n1.data);

h.setDate(11);

// console.log(n1.data);
