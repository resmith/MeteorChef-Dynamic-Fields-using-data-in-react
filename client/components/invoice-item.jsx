InvoiceItem = React.createClass({
  handleRemove() {
    this.props.handleRemove( this.props.id );
  },
  render() {
    return <tr className="invoice-item-row">
      <td><input type="text" className="form-control" name="itemDescription" defaultValue={ this.props.description } placeholder="e.g. Milkshake Machine Repair" /></td>
      <td><input type="text" className="form-control" name="itemQty" defaultValue={ this.props.qty } placeholder="0" /></td>
      <td><input type="text" className="form-control" name="itemPrice" defaultValue={ this.props.price } placeholder="0.00" /></td>
      <td onClick={ this.handleRemove }><i className="fa fa-remove"></i></td>
    </tr>;
  }
})