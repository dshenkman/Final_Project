import React from 'react'
import './game3.css';
import superheroes from './superheroes.json';
import Hero from './Hero'
import Nav from './Nav'

class Game3 extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      Score: 0,
      top_Score: 0
    }
  }
  componentDidMount() {
    this.setState({heroes:superheroes.superheroes})
  }

  handleClick = (id) => {
    let {heroes, Score, top_Score} = this.state;
    const hero = heroes.find(item => {
      return item.id === id
    })
    if(hero.clicked === true) {
      if(Score>top_Score) {
        this.setState({
          top_Score: Score
        })


      }
      this.setState({
        Score:0,
        heroes: this.reset([...heroes])
      })

    } else {
      hero.clicked = true;
      this.setState({
        Score: ++Score,
        heroes: this.shuffle([...heroes])
      })
    }

  }

  reset = (array) => {
    for (let i = array.length-1; i > 0; i--) {
      array[i].clicked = false
    }
    return array
  }

  shuffle = (array) => {
    for (var i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() *(i + 1));
      // let t = array[i];
      // array[i] = array[j];
      // array[j] = t;
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;

  }

  render() {
    const {heroes, Score, top_Score} = this.state;
    return (
      <>
      <Nav {...this.state} />

      <div className='heroList'>
      {
        heroes.map((item,i) => {
          return <Hero hero={item} handleClick={this.handleClick} key={i} />
        })
      }
      </div>
      </>
    )
  }
}

export default Game3;
