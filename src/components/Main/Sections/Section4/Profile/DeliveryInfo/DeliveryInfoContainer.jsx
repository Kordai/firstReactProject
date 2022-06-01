import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import { setDeliveryInfo, getApplications } from '../../../../../../Redux/applicationsReducer'

class DeliveryInfoContainer extends React.Component {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplications();
      setTimeout(() => {
        let deliveryInfo = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ].map((val, index) => this.mapArray(this.props.state.data.filter((f) => { return parseInt(f.month) === index + 1 }), val))
        this.props.setDeliveryInfo(deliveryInfo)
        console.log(deliveryInfo)
      }, 500)
    } else {
      let deliveryInfo = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ].map((val, index) => this.mapArray(this.props.state.data.filter((f) => { return parseInt(f.month) === index + 1 }), val))
      this.props.setDeliveryInfo(deliveryInfo)
      console.log(deliveryInfo)
    }
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
      obj.Cups += parseInt(val.caps350) / 100
      obj.Sugar += parseFloat(val.sugar)
      return val
    })

    return obj
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader /> : null}
      <DeliveryInfo
        state={this.props.state.data}
        deliveryInfo={this.props.state.deliveryInfo}
        mapArray={this.mapArray} />
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};

export default connect(mapStateToProps, { setDeliveryInfo, getApplications })(DeliveryInfoContainer);