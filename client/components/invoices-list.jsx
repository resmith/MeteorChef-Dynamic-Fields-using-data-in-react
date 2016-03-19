InvoicesList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'invoices' );

    return {
      invoices: Invoices.find( {}, { sort: { number: 1 } } ).fetch()
    };
  },
  listInvoices() {
    let invoices = this.data.invoices;

    if ( invoices.length > 0 ) {
      return invoices.map( ( item, index ) => {
        return <a className="list-group-item" key={ item._id } href={ `/invoices/${ item._id }` }>
          { `Invoice #${ item.number }` }
        </a>;
      });
    } else {
      return <p className="alert alert-warning">No invoices yet!</p>;
    }
  },
  handleNewInvoice() {
    Meteor.call( 'newInvoice', ( error, invoiceId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/invoices/${ invoiceId }` );
      }
    });
  },
  render() {
    return <div className="invoices">
      <h4 className="page-header">Invoices</h4>
      <button type="button" className="btn btn-success" onClick={ this.handleNewInvoice }>New Invoice</button>
      <div className="list-group">
        { this.listInvoices() }
      </div>
    </div>;
  }
});