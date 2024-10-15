import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCart} from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');   reject is a fn and it lets us create an error in the future.
        resolve('value');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => { 
      resolve('value1');
    });
  })

]).then((value) => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve(); //resolve lets us decide when to go to the next step.
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }); 
  
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
// if we have lots of callbacks, our code will become more and more nested. All the indents will make our code hard to work with and hence we use promise. Promises keep our code more flat.