import React from 'react';
import Stock from './Stock';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import { getApplications } from '../../../../../../Redux/applicationsSelectors';

class StockContainer extends React.PureComponent {
  
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
    state: getApplications(state)
  }
};
 
export default connect(mapStateToProps, {})(StockContainer);