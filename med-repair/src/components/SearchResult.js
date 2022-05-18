import React from "react";
import StarIcon from "../assets/images/star.png";
import "./SearchResult.css";

class SearchResult extends React.Component {

  render() {
    return (
      <div className="search-result" onClick={() => this.props.onClick()}>
        <img src={this.props.image} alt="result-image" />
        <p className="result-name">{this.props.name}</p>
        <div className="result-rating">
          {Array(this.props.rating)
            .fill(0)
            .map((_, i) => (
              <img src={StarIcon} alt="star" key={i} />
            ))}
        </div>
      </div>
    );
  }
}

export default SearchResult;
