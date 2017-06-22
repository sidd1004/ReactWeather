var React = require('react');
var { Link } = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Tools Used:</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react/" target="_blank">React</a>
                </li>
                <li>
                    <a href="https://foundation.zurb.com/" target="_blank">Foundation</a>
                </li>
                <li>
                    <a href="https://webpack.js.org/" target="_blank">Webpack</a>
                </li>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a>
                </li>
            </ol>
        </div>
    );
};

module.exports = About;