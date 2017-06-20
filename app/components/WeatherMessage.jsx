var React = require('react');

var WeatherMessage = ({ temp, location }) => {
    return (
        <div>
            <p>The Weather is {temp} at {location}</p>
        </div>
    );
};

module.exports = WeatherMessage;