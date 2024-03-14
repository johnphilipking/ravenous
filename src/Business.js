import React from "react";
import './BusinessList.css';

const testData = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "Burger Hut",
    address: "600 E 6th St",
    city: "Austin",
    state: "TX",
    zipCode: "78756",
    category: "Burgers",
    rating: 3.5,
    reviewCount: 69,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "Wok Surprise",
    address: "40 River St",
    city: "Austin",
    state: "TX",
    zipCode: "78756",
    category: "Asian",
    rating: 5.0,
    reviewCount: 167,
  },
];



class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="business">
        <div class="businessImage" style={{ backgroundImage: "url(" + this.props.business.imageSrc + ")" }}>&nbsp;</div>
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

function BusinessList() {
  const arr = testData;
  const listContent = arr.map((business, i) => (
    <div key={i}>
      <Business business={business} />
    </div>
  ));
  return <div className='businessList'>{listContent}</div>;
}

export default BusinessList;
