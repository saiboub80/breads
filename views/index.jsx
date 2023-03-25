const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title})  {
    return (
      <Default title = {title}>
        <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p>
        <ul>
        {
  breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a href={`/breads/${index}`}>
          {bread.name}
        </a>
      </li>
    )
  })
}
<div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>


        </ul>
      </Default>
    )
}


module.exports = Index
