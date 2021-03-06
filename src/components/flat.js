import React from "react";
import "./flat.css";

// const flat = { name: "Great flat", price: 100, }
// <Flat flat={flat} />

class Flat extends React.Component {
  handleClick = () => {
    // Calling the parent method selectFlat
    this.props.selectFlat(this.props.flat)
  }

  render() {

    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;

    const style = {
      // Template literals ES6
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flats" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title"></div>
        {title}
      </div>
    );
  }
}

export default Flat;
