import React from 'react'
import './student.css'
class Student extends React.Component {
  //============Constructor
  constructor() {
    super()
    this.state = {
      score: 0,
      success: false,
    }
  }
  //==========DidMount
  componentDidMount() {
    this.setState({
      score: this.props.score,
    })
  }
  //=========addScore Function
  addScore() {
    this.setState(
      {
        score: this.state.score + 1,
      },
      () => {
        if (this.state.score >= 33) {
          this.setState({ success: true })
        }
      }
    )
  }
  minusScore() {
    this.setState(
      {
        score: this.state.score - 1,
      },
      () => {
        if (this.state.score <= 32) {
          this.setState({ success: false })
        }
      }
    )
  }

  render() {
    const isSuccess = this.state.success
    let text
    if (isSuccess) {
      text = <span className='success'>Pass</span>
    } else {
      text = <span className='failure'>Fail</span>
    }

    return (
      <div className='student'>
        <div className='left'>
          <h2 className='studentName'>
            {this.props.name}
            <button className='addScorebtn' onClick={() => this.addScore()}>
              +
            </button>
            <button className='addScorebtn' onClick={() => this.minusScore()}>
              -
            </button>
          </h2>
          <p className='uniName'>
            {this.props.university}
            {text}
          </p>
        </div>

        <div className='right'>
          <p className='score'>{this.state.score}</p>
        </div>
      </div>
    )
  }
}
export default Student
