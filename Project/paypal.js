// let msg = ''
// paypal.Buttons({
//     createOrder: function (data, actions) {
//         // Set up the transaction
//         return actions.order.create({
//             purchase_units: [{
//                 amount: {
//                     value: '5.00',

//                 }
//             }]
//         });
//     },
//     onApprove: function (data, actions) {
//         // This function captures the funds from the transaction.
//         return actions.order.capture().then(function (details) {
//             // This function shows a transaction success message to your buyer.
//             alert('Transaction completed by ' + details.payer.name.given_name);
//         });
//     }
// }).render("#paypal");