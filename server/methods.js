Meteor.methods({
  newInvoice() {
    let count     = Invoices.find().count(),
        invoiceId = Invoices.insert( { number: count + 1 } );

    InvoiceItems.insert({
      invoice: invoiceId,
      description: '',
      qty: null,
      price: null
    });

    return invoiceId;
  },
  addInvoiceItem( invoiceId ) {
    check( invoiceId, String );

    return InvoiceItems.insert({
      invoice: invoiceId,
      description: '',
      qty: null,
      price: null
    });
  },
  removeInvoiceItem( itemId ) {
    check( itemId, String );
    return InvoiceItems.remove( itemId );
  }  
});