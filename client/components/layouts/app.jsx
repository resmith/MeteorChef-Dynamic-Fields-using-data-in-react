App = React.createClass({
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          { this.props.yield }
        </div>
      </div>
    </div>;
  }
});