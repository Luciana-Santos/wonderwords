export class DictionaryException extends Error {
  public error: string | '';

  constructor(error: string) {
    super(error);
    this.error = error;
  }
}
