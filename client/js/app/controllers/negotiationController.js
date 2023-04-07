class negotiationController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantity = $("#quantidade");
    this._inputValue = $("#valor");
  }

  adding(event) {
    event.preventDefault();
    
    let data = new Date(this._inputData.value.split('-'))
    console.log(data);
  }
}
