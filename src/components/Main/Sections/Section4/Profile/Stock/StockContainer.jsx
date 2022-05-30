import React from 'react';
import Stock from './Stock';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';

class StockContainer extends React.Component {
  
  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <Stock 
      state={this.props.state.data}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {})(StockContainer);