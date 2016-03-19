Meteor.publish( 'invoice',  function ( invoiceId ) {
  check( invoiceId, String );

  return [
    Invoices.find( { _id: invoiceId } ),
    InvoiceItems.find( { invoice: invoiceId } )
  ];
});