class negotiation {
  constructor(data, quantity, value) {
    this._data = data;
    this._quantity = quantity;
    this._value = value;
    Object.freeze(this);
  }

  get volume() {
    return this._quantity * this._value;
  }

  get data() {
    return this._data;
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }
}

var n1 = new negotiation(new Date(), 5, 700);
console.log(n1.data);

n1.data.setDate(11);

console.log(n1.data);