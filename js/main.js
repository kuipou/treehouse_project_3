const FormController = (function () {
})();

const UIController = (function () {
  const DOMStrings = {
    
  };
  return {
    getDOMStrings: () => DOMstrings
  };
})();

const controller = (function (formCtrl, UICtrl) {
  return {
    init : () => {
      console.log('Application has started.');

      // ## Set focus on the first text field
      // * When the page loads, give focus to the first text field

      document.addEventListener("DOMContentLoaded", event => {

      })
    }
  };
})(FormController, UIController);


controller.init();