class Option {
  #val;
  #transformer;

  constructor(val, isDefined = false) {
    this.#val = () => Promise.resolve(val);
    this.isDefined = isDefined;
    this.#transformer = null;
  }

  isEmpty() {
    return !this.isDefined;
  }
  map(functor) {
    if (this.isEmpty()) {
      return new Option(undefined);
    } else {
      this.#transformer = functor;
      return this;
    }
  }
  async getOrElse(functor) {
    if (this.isEmpty()) {
      return await functor();
    }
    const value = await this.#val();
    if (this.#transformer) {
      return this.#transformer(value);
    }
    return value;

  }
}
module.exports = {
  Option,
};
