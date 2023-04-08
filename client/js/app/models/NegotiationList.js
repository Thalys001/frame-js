class NegotiationList {
  constructor() {
    this._negotiations = [];
  }
  adding(negotiation) {
    this._negotiations.push(negotiation);
  }
  get negotiations() {
    return [].concat(this._negotiations);
  }
}
