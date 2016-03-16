var React = require('react');
var MainNavBar = require('./MainNavBar.jsx');
var Cards = require('./Cards.jsx');
var HTTP = require('../services/httpservice');

var Universe = React.createClass({

        componentDidMount: function() {
          HTTP.get('/data')
          .then(function(data) {
              this.setState({
                cardItems: data,
                numCards:data.length
              });
          }.bind(this));
        },

        getInitialState: function() {
            return {
                cardItems: [],
                numCards: 0,
                cardFilter:''
            };
        },
        handleFilterUpdate: function(filterValue) {
          this.setState({
              cardFilter: filterValue
          });
        },

        render: function() {
          var displayedCards = this.state.cardItems.filter(function(item) {
            var match = item['message'].toLowerCase().indexOf(this.state.cardFilter.toLowerCase());
            return (match !== -1);
          }.bind(this));

          return <div className={'innerUniverse'}>
                    <MainNavBar
                         updateFilter = {this.handleFilterUpdate}
                         numCards={this.state.numCards}>
                    </MainNavBar>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <Cards cards={displayedCards} />
                 </div>
        }
});

module.exports = Universe;
