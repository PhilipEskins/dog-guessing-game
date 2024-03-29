import React, { Component } from 'react';
import './scss/App.scss';
import DogPic from './components/DogPic';
import DogSelect from './components/DogSelect';
import Score from './components/Score';
import { connect } from 'react-redux';
import { receiveScore, updatePic, getPlayerKey } from './actions/index'
import { watchFirebaseHighscoreRef, checkPlayerKey } from './actions/firebase'
import HighScores from './components/HighScores';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      list: [],
      breed: '',
      showFail: false,
      userGuess: '',
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.compareGuess = this.compareGuess.bind(this);
  }

  componentWillMount(){
    let retrievedState;
    try {
      retrievedState = localStorage.getItem('playerKey');
      if (retrievedState === null) {
        retrievedState = '';
      } else {
        this.props.dispatch(getPlayerKey(retrievedState));
        this.props.dispatch(checkPlayerKey(retrievedState));
      }
    } catch (err) {
      retrievedState = '';
    }
    this.props.dispatch(watchFirebaseHighscoreRef());
    this.getNewPicture();
    fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(
      (json) => {
        let test = json.message;
        let dropDownArr = [];
        Object.keys(test).forEach((element) => {
        if(test[element].length > 0) {
          let dogSub = test[element];
          dogSub.forEach(function(element2) {
            let join = element + " " + element2;
            dropDownArr.push(join);
        }); }
        else {
          dropDownArr.push(element);
          }
        });
        this.setState({list: dropDownArr});
      }
    )
  }

  getNewPicture(){
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url).then(response => response.json()).then(
      (json) => {
        console.log(json.message);
        this.props.dispatch(updatePic(json.message))
        let picString = json.message;
        let breaked = picString.split('/');
        let dogTest = breaked[4].replace('-', ' ');

        this.setState({breed: dogTest})
        this.setState({showFail: false})
      }
    )
  };

  compareGuess(yourGuess){
    this.setState({userGuess: yourGuess});
    if(yourGuess === this.state.breed){
      let scoreAdd = this.props.score + 1;
      this.getNewPicture();
      this.props.dispatch(receiveScore(scoreAdd))


    } else {
      this.setState({showFail: true})

    }
  }

  render(){
    return (
      <div id='container' className="App">
        <div className="border">
          <div className="gameArea">
            <div className='headerGrid'>
              <div className='rightTriangle'></div>
              <h1 className='header'>What breed of dog is this?</h1>
              <div className='leftTriangle'></div>
            </div>
            <div className="dogPhoto">
              <DogPic className='dogShot'/>
            </div>
            <div className="dogScore">
              <Score />
            </div>
            <div className='dogSelect'>
              <DogSelect dogList = {this.state.list} compareGuess = {this.compareGuess} showFail={this.state.showFail} userGuess={this.state.userGuess}/>
            </div>
          </div>
        </div>
        <div className="scoreArea">
          <HighScores />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    score: state.playerInfo.score
  }
}

export default connect(mapStateToProps)(App);
