import React from 'react';
import { Components, withCurrentUser, registerComponent } from 'meteor/vulcan:core';
import { Transition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'

class CanvasPop extends React.Component {
  constructor() {
    super();

    this.state ={
      data: [1,2,3,4,5]
    };
  }

  add() {
    this.setState({
      ...this.state,
      data: this.state.data.concat([ this.state.data.length + 1])
    })
  }

  remove() {
    this.setState({
      ...this.state,
      data: this.state.data.slice(0,-1)
    })
  }

  render() {
    return (
    <div className="app-container">
      <div className="buttons">
        <button onClick={ this.add.bind(this) }>Add One</button>
        <button onClick={ this.remove.bind(this) }>Remove One</button>
      </div>

      <TransitionGroup component="ul" className="list">
        {this.state.data.map(num => 
          <Transition key={num} timeout={500} appear={true} mountOnEnter unmountOnExit>
            { (status) => {
              return <li className="list-item">Hey, I am a item numnber {num}</li>
            }}
          </Transition>
          )}
      </TransitionGroup>
    </div>
    )
  }
}

registerComponent({ name: 'CanvasPop', component: CanvasPop });