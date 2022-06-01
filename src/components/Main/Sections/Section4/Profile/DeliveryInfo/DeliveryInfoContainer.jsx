import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import { getApplications, mapArray, getDeliveryInfo } from '../../../../../../Redux/applicationsReducer'

class DeliveryInfoContainer extends React.Component {

  componentDidMount() {
    this.props.getDeliveryInfo();
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader /> : null}
      <DeliveryInfo
        state={this.props.state.data}
        deliveryInfo={this.props.state.deliveryInfo}
        mapArray={this.props.mapArray} />
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};

export default connect(mapStateToProps, { getApplications, mapArray, getDeliveryInfo })(DeliveryInfoContainer);