// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsList: this.props, count: 0}

  rightClick = () => {
    const {reviewsList, count} = this.state
    if (reviewsList.reviewsList.length - 1 > count) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  leftClick = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
      console.log(count)
    }
  }

  render() {
    const {reviewsList, count} = this.state
    const data = reviewsList.reviewsList[count]
    const {imgUrl, username, companyName, description} = data
    console.log(count)

    return (
      <div className="topBgcont">
        <div>
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.leftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
        </div>
        <div className="card">
          <h1 className="textwhite">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <p className="textwhite">{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>

        <div>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.rightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
