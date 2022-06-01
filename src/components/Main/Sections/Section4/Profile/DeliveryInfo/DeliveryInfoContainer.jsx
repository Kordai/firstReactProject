import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';

class DeliveryInfoContainer extends React.Component {

  componentDidMount() {
    
  }
  
  mapArray = (array, name) => {
    let obj = {
        name,
        Coffee: 0,
        Milk: 0,
        Cups: 0,
        Sugar: 0
    }
    array.map(val => {
        obj.Coffee += parseFloat(val.coffee)
        obj.Milk += parseFloat(val.milk)
        obj.Cups += parseInt(val.caps350)
        obj.Sugar += parseFloat(val.sugar)
        return val
    })

    return obj
}

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <DeliveryInfo 
      state={this.props.state.data}
      deliveryInfo={this.props.state.deliveryInfo}
      mapArray = {this.mapArray}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {})(DeliveryInfoContainer);