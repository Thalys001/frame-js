class negotiation {
  
  constructor(data, quantity, value){
    this.data = data;
    this.quantity = quantity;
    this.value = value;
  }

  obtemVolume() {
    return this.quantity * this.value;
  }
}