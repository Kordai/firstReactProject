import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';

class DeliveryInfoContainer extends React.Component {
  
  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <DeliveryInfo 
      state={this.props.state.data}
      deliveryInfo={this.props.state.deliveryInfo}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {})(DeliveryInfoContainer);