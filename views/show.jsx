const React = require('react');
const Default = require('./layouts/Default');

function Show({ bread }) {
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <img src={bread.image} alt={bread.name} />
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>} have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li><a href="/breads">Go home</a></li>
    </Default>
  );
}

module.exports = Show;

