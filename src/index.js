
const style = {
  backgroundColor: '#222',
  color: '#ddd',
  fontFamily: 'sans-serif',
  border: "3px solid #555",
  textAlign: "center"
}


// const title = React.createElement(
//   'h1',
//   { id: 'title', className: 'header', style: style },
//   'Hello World'
// );

ReactDOM.render(
  <h1 id='title'
      className='header'
      style={style}>
  Hello there!!!
  </h1>,
  document.getElementById('react-container'));
