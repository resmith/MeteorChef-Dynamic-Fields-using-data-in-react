InvoiceItems = new Mongo.Collection( 'invoice-items' );

InvoiceItems.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

InvoiceItems.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});