var React = require('react');

var CardAviAndDate = React.createClass({
      render: function() {
        return (
          <div>
            <div className='right floated meta'>{this.props.date}</div>
            <img className='ui avatar image' src='img/earth.jpg' data-pin-nopin="true"/>
          </div>
        )
      }
});

module.exports = CardAviAndDate;
