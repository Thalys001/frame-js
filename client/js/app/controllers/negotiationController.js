class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantity = $("#quantidade");
    this._inputValue = $("#valor");
    this._negotiationsList = new NegotiationList();

    this._negotiationsView = new NegotiationsView($(`#negotiationsView`));
    this._negotiationsView.update(this._negotiationsList);
  }

  adding(event) {
    
    event.preventDefault();
    this._negotiationsList.adding(this._createdNegotiation());
    this._negotiationsView.update(this._negotiationsList);
    this._clearForm();
  }

  _createdNegotiation() {
    return new Negotiation(
      DateHelper.textForData(this._inputData.value),
      this._inputQuantity.value,
      this._inputValue.value
    );
  }

  _clearForm() {
    this._inputData.value = "";
    this._inputQuantity.value = 1;
    this._inputValue.value = 0.0;
    this._inputData.focus();
  }
}
