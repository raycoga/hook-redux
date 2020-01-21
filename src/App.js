import React, { Fragment } from 'react';
import './App.css';
import Data from './components/data'
/* Redux */
import { connect } from 'react-redux'

function App({ contador, addmore, reduceIt }) {

  return (
    <Fragment>

      <div className="App" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center' }}>
          <h1>React redux contador</h1>
          <span style={{ fontWeight: '600', fontSize: '50px' }}>{contador}</span>
          <div>
            <button onClick={() => addmore()}>+</button>
            <button onClick={() => reduceIt()}>-</button>
          </div>
        </div>
      </div>
      <Data />
    </Fragment>
  );
}

/* Redux */
const mapStateToProps = state => ({
  contador: state.contador
})

const mapDispatchToProps = dispatch => ({
  addmore() {
    dispatch({
      type: 'ADD_MORE',
    })
  },

  reduceIt() {
    dispatch({
      type: 'REDUCE_IT'
    })
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
