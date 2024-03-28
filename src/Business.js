import React from "react";
import './BusinessList.css';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="business">
        <div className="businessImage" style={{ backgroundImage: "url(" + this.props.business.image_url + ")" }}>&nbsp;</div>
        <h2><a href={this.props.business.url} target="_blank">{this.props.business.name}</a></h2>
        <div className="details">
          <div>
            <p>
              {this.props.business.location.address1}
              <br />
              {this.props.business.location.city}
              <br />
              {this.props.business.location.state} {this.props.business.location.zip_code}
            </p>
          </div>
          <div>
            <p>
              <span className="category">{this.props.business.categories[0].title ? this.props.business.categories[0].title : ''}</span>
              <br />
              <span className="rating">{this.props.business.rating} stars</span>
              <br />
              {this.props.business.review_count} reviews
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

function BusinessList({searchResult}) {
  if(isIterable(searchResult)){
    const listContent = searchResult.map((business, i) => (
      <div key={i}>
        <Business business={business} />
      </div>
    ));
    return <div className='businessList'>{listContent}</div>;
  } else {
    return <div className='businessList'></div>;
  } 
}

export default BusinessList;
