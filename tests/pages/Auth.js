const I = actor();

module.exports = {
  // setting locators
  fields: {
    email: "#form-email",
    password: "#form-password"
  },
  submitButton: { css: "form button[type=submit]" },

  // introducing methods
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
  // insert your locators and methods here
};
