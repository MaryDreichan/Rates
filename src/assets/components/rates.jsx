function Rates (props) {
    return (
      <div className="rates-card">
        <div className="rates-name">{props.name}</div>
        <div className="rates-price">{props.price}</div>
        <div className="rates-speed">{props.speed}</div>
        <div className="rates-volume">{props.volume}</div>
      </div>
    );
  }
  
  export default Rates;