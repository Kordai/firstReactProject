import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import { mapArray, getDeliveryInfo } from '../../../../../../Redux/applicationsReducer'
import { getApplications } from '../../../../../../Redux/applicationsSelectors';

class DeliveryInfoContainer extends React.PureComponent {

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
    state: getApplications(state)
  }
};

export default connect(mapStateToProps, { mapArray, getDeliveryInfo })(DeliveryInfoContainer);