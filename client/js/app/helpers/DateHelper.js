class DateHelper {
  constructor() {
    throw new Error("This class cannot be instantiated");
  }

  static dataForText(data) {
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }
  static textForData(text) {
    if (!/\d{4}-\d{2}-\d{2}/.test(text))
      throw new Error("must be in yyyy-mm-dd format");
    return new Date(
      ...text.split("-").map((item, indice) => item - (indice % 2))
    );
  }
}
