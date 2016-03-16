var React = require('react');
var CardContainer = require('./CardContainer.jsx');
var CardContentSectionContainer = require('./CardContentSectionContainer.jsx');
var CardAviAndDate = require('./CardAviAndDate.jsx');
var CardImageSectionContainer = require('./CardImageSectionContainer.jsx');

var SingleCard = React.createClass({
    render: function() {
      return (
          <CardContainer key = {this.props.uniqueKey}>
              <CardContentSectionContainer>
                <CardAviAndDate date = {this.props.date} />
              </CardContentSectionContainer>

              <CardImageSectionContainer>
                <img src = {this.props.image}/>
              </CardImageSectionContainer>

              <CardContentSectionContainer>
                <div className='description'>{this.props.message}</div>
              </CardContentSectionContainer>

              <CardContentSectionContainer>
                <span className='left floated'>
                  <i className='heart outline like icon'></i>
                  {this.props.numLikes}
                </span>

                <span className='right floated'>
                  <i className='comment icon'></i>
                  {this.props.numComments}
                </span>
              </CardContentSectionContainer>

          </CardContainer>
      )
    }
});

module.exports = SingleCard;
