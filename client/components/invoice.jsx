Invoice = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'invoice', this.props.invoice );

    return {
      invoice: Invoices.findOne(),
      items: InvoiceItems.find().fetch()
    };
  },
  getItems() {
  let items = this.data.items;

  if ( items.length > 0 ) {
    return items.map( ( item, index ) => {
      return <InvoiceItem
        ref="invoiceItemRow"
        key={ item._id }
        id={ item._id }
        description={ item.description }
        qty={ item.qty }
        price={ item.price }
        handleRemove={ this.handleRemoveItem }
      />;
    });
  }
},
  handleAddItem() {
    Meteor.call( 'addInvoiceItem', this.props.invoice, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }
    });
  },
  handleRemoveItem( itemId ) {
    Meteor.call( 'removeInvoiceItem', itemId, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }
    });
  },  
  render() {
    let invoice = this.data.invoice ? this.data.invoice : '';

    return <div className="invoice">
      <h4 className="page-header">Invoice #{ invoice.number }</h4>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <strong>Doug Funnie</strong>
              <p>21 Jumbo Street</p>
              <p>Bluffington, XZ 12345</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <strong>Honker Burger</strong>
              <p>321 Honker Dr.</p>
              <p>Bluffington, XZ 12345</p>
            </div>
          </div>
        </div>
      </div>
      <input type="text" name="invoiceSubject" className="form-control" placeholder="Description" />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th width="60%">Item Name</th>
            <th width="15%">Qty</th>
            <th width="15%">Price</th>
            <th width="10%"></th>
          </tr>
        </thead>
        <tbody id="invoice-items">
          { this.getItems() }
        </tbody>
      </table>
      <button className="btn btn-success" onClick={ this.handleAddItem }>Add Item</button>
    </div>;
  }
});