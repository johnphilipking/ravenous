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
        <div className="businessImage" style={{ backgroundImage: "url(" + this.props.business.imageSrc + ")" }}>&nbsp;</div>
        <h2>{this.props.business.name}</h2>
        <div className="details">
          <div>
            <p>
              {this.props.business.address}
              <br />
              {this.props.business.city}
              <br />
              {this.props.business.state} {this.props.business.zipCode}
            </p>
          </div>
          <div>
            <p>
              <span className="category">{this.props.business.category}</span>
              <br />
              <span className="rating">{this.props.business.rating} stars</span>
              <br />
              {this.props.business.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function BusinessList(props) {
  const listContent = props.dataSet.mockData.map((business, i) => (
    <div key={i}>
      <Business business={business} />
    </div>
  ));
  return <div className='businessList'>{listContent}</div>;
}

export default BusinessList;
