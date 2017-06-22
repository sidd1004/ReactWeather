var React = require('react');

var WeatherMessage = ({ temp, location }) => {
    return (
        <div>
            <h3 className="text-center">The Weather is {temp} at {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;