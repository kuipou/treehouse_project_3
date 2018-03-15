const FormController = (function () {
})();

const UIController = (function () {
  const DOMstrings = {
    inputName: "#name",
    inputMail: "#mail",
    selectTitle : "#title",
    selectSize : "#size"
  };
  return {
    getDOMstrings: function () {
      return DOMstrings;
    }
  };
})();

const controller = (function (formCtrl, UICtrl) {
  const setupEventListeners = () => {
    const DOM = UICtrl.getDOMstrings();
    // setup the onload event
    document.addEventListener("DOMContentLoaded", event => {
      document.querySelector(DOM.inputName).focus();
      console.log("Focus is set on first name " + DOM.inputName);
    });
  };
  return {
    init : () => {
      console.log('Application has started.');

      // ## Set focus on the first text field
      // * When the page loads, give focus to the first text field
      setupEventListeners();
      
    }
  };
})(FormController, UIController);


controller.init();