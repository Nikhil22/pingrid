var React = require('react');
var SingleCard = require('./SingleCard.jsx');
var CardsWrapper = require('./CardsWrapper.jsx');

var Cards = React.createClass({

      render: function() {
        var content = []
          if (this.props.cards.length > 0) {
              content = this.props.cards.map(function(card, index) {
                    return (
                        <SingleCard
                            uniqueKey = {card['id']}
                            date = {card['date']}
                            image = {card['image']}
                            message = {card['message']}
                            numLikes = {card['numLikes']}
                            numComments = {card['numComments']}>
                        </SingleCard>
                    )
              });

          } else {
              content = <p>No cards matching this filter</p>;
          }
        return (
            <CardsWrapper>
              {content}
            </CardsWrapper>
          )
      }
});

module.exports = Cards;
