import React from 'react';
import { connect } from 'react-redux';
import PreLoader from '../../Main/Moduls/PreLoader';
import AuthUser from './AuthUser';

class AuthUserContainer extends React.Component {

    componentDidMount() {
        
      
    }

    render() {
        return (<>
            {this.props.state.isFetching ? <PreLoader /> : null}
            <AuthUser 
            user={this.props.state.user}               
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.auth
    }
};

export default connect(mapStateToProps, {})(AuthUserContainer);