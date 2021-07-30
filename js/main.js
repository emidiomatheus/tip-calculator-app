const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const customTip = document.getElementById("custom");
const form = document.querySelector("#calculate");
const reset = document.querySelector("#reset");

const DOM = {
  tipValueDisplay: document.querySelector("#total table tbody"),

  updateValue(tip, total) {
    DOM.tipValueDisplay.innerHTML = DOM.innerHTMLTipValueDisplay(tip, total);
  },

  innerHTMLTipValueDisplay(tip, total) {
    const html = `
        <tr>
            <td>Tip amount<small>/ person</small></td>
            <td><span id="tip-amount">$${tip.toFixed(2)}</span></td>
        </tr>
        <tr>
            <td>Total <small>/ person</small></td>
            <td><span id="total">$${total.toFixed(2)}</span></td>
        </tr>
        `;

    return html;
  },

  clearValues() {
    DOM.tipValueDisplay.innerHTML = "";
  },
};

const Form = {
  submit(event) {
    event.preventDefault();
  },
};

const Utils = {
  percentage: document.querySelectorAll("input.percentage"),

  formatPercentage(tip) {
    const tipPercentage = tip / 100;

    return Number(tipPercentage);
  },

  calculateTipAmount(tip) {
    bill.value = bill.value;
    people.value = people.value;

    let tipAmount = (bill.value / people.value) * Utils.formatPercentage(tip);

    if (
      isNaN(tipAmount) ||
      tipAmount === undefined ||
      tipAmount === Infinity ||
      tipAmount === ""
    ) {
      tipAmount = 0;
    }

    return Number(tipAmount.toFixed(2));
  },

  calculateTotal(tip) {
    let total = bill.value / people.value + Utils.calculateTipAmount(tip);

    if (
      isNaN(total) ||
      total === undefined ||
      total === Infinity ||
      total === ""
    ) {
      total = 0;
    }

    return Number(total.toFixed(2));
  },
};

const App = {
  init(tip) {
    DOM.updateValue(Utils.calculateTipAmount(tip), Utils.calculateTotal(tip));
  },

  reload(tip) {
    DOM.clearValues();
    App.init(tip);
  },
};

customTip.addEventListener("keyup", (event) => {
  let tip = event.target.value;
  App.reload(tip);

  bill.addEventListener("input", () => {
    App.reload(tip);
  });

  people.addEventListener("input", () => {
    App.reload(tip);
  });
});

Utils.percentage.forEach((tip) => {
  tip.addEventListener("click", (event) => {
    let tipValue = event.target.value;
    App.reload(tipValue);

    bill.addEventListener("input", () => {
      App.reload(tipValue);
    });

    people.addEventListener("input", () => {
      App.reload(tipValue);
    });
  });
});

reset.addEventListener("click", () => {
  DOM.updateValue(0, 0);
});

App.init();
