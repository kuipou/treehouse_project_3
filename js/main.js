const FormController = (function () {
  const calculateTotal = type => {
    let sum = 0;

  };

  // we create activties by making new objects 
  // because in the end we need data on on what time and cost
  const Activity = function(id, name,cost, start, end) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.start = start;
    this.end = end;
  };

  // Data is going to store every activity
  let data = {
    allItems : [],
    total: 0
  };
  return {
    // This adds the new activity in data
    addItem : function(name, cost, start, end) {
      let newItem, ID;
      if (data.allItems.length > 0) {
        ID = data.allItems.length + 1;
      } else {ID = 0;}

      // Create our activity as a new Activity object
      newItem = new Activity(ID, name, cost, start, end);
      // Store it in our data model
      newItem = data.allItems.push(newItem);
    },
    deleteItem:() => {

    }, 
    regex: (arg) => {
      switch (arg) {
        case "email":
          return `^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$`;
          break;
        case "cc":
          return `^(?:4[0-9]{12}(?:[0-9]{3})?          # Visa
 |  (?:5[1-5][0-9]{2}                # MasterCard
     | 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}
 |  3[47][0-9]{13}                   # American Express
 |  3(?:0[0-5]|[68][0-9])[0-9]{11}   # Diners Club
 |  6(?:011|5[0-9]{2})[0-9]{12}      # Discover
 |  (?:2131|1800|35\d{3})\d{11}      # JCB
)$`;
         break;
        default:
          break;
      }
    },
    test: () => console.log(data)
    }



})();

const UIController = (function () {
  const DOMstrings = {
    inputName: "#name",
    inputMail: "#mail",
    selectTitle : "#title",
    inputJob: "#other-title",
    selectSize : "#size",
    selectDesign: "#design",
    selectColor: "#color",
    selectJSPuns: "#colors-js-puns",
    selectPayment: "#payment",
    inputCCnum: "#cc-num",
    inputZip: "#zip",
    inputCVV: "#cvv",
    selectExpM: "#exp-month",
    selectExpY: "#exp-year",
    warnPaypal: "#warn-paypal",
    warnBitcoin: "#warn-bitcoin"
    
    
  };
  return {
    getDOMstrings: () => DOMstrings,
    getClass: doms => document.querySelector(doms).classList 
  };
})();

const controller = (function (formCtrl, UICtrl) {
  const setupEventListeners = () => {
    // Get the DOM strings as they reused everywhere 
    // Get the Job class list because user without JS can see #job  
    const DOM = UICtrl.getDOMstrings();
    const job = UICtrl.getClass(DOM.inputJob);
    const jsPuns = UICtrl.getClass(DOM.selectJSPuns);
    
    // setup the onload event and here we can setup all events we need
    document.addEventListener("DOMContentLoaded", event => {
      console.log(DOM);
      // Grab the #name and use it in queryselector and make it focus
      document.querySelector(DOM.inputName).focus();
      job.toggle("is-hidden");
      jsPuns.toggle("is-hidden");
      console.log("Focus is set on first name " + DOM.inputName);
    });

    //Select the Job title
    document.querySelector(DOM.selectTitle).addEventListener("click", event => {
      // Get the target value of the click
      let value = event.target.value;
      // If the value is other show the input title
      if (value === "other") {
        console.log(`The value is ${value} `);
        job.toggle("is-hidden");
      }
      

    });
    document.querySelector(DOM.selectDesign).addEventListener("click", event => {
      // Get the target value of the click
      let value = event.target.value;
      // save the current HTML in a variable
      let html; 
      // = document.querySelector(DOM.selectColor).innerHTML;
      console.log(html);
      console.log(`The value is ${value} `);
      // Shoot the option in a new var then 
      if (value === "js puns") {
        html = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
            <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
            <option value="gold">Gold (JS Puns shirt only)</option> `;
       
       } else if (value === "heart js") {
        html = `<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
            <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
            <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> `;
        

      }
      // Replace the old html with the new options
      document.querySelector(DOM.selectColor).innerHTML = html;
      if (value === "js puns" || value === "heart js") {
        jsPuns.toggle("is-hidden");
      }
     
    });
  };
  return {
    init : () => {
      console.log('Application has started.');
      // Fire up our events
      setupEventListeners();
      
    }
  };
})(FormController, UIController);


controller.init();