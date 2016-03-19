Invoices = new Mongo.Collection( 'invoices' );

Invoices.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Invoices.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});