const invoiceRoutes = FlowRouter.group({
  name: 'invoices'
});


// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log("Yeah! We are on the post:", params.postId);
//     }
// });

invoiceRoutes.route( '/', {
  name: 'invoices2',
  action: function(params, queryParams) {
    ReactLayout.render( App, { yield: <InvoicesList /> } );
  }
});

invoiceRoutes.route( '/invoices', {
  name: 'invoices',
  action: function(params, queryParams) {
    ReactLayout.render( App, { yield: <InvoicesList /> } );
  }
});

invoiceRoutes.route( '/invoices/:_id', {
  name: 'invoice',
  action: function(params, queryParams) {
    ReactLayout.render( App, { yield: <Invoice invoice={ params._id } /> } );
  }
});