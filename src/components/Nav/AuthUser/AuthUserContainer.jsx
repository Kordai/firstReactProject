import React from 'react';
import { connect } from 'react-redux';
import PreLoader from '../../Main/Moduls/PreLoader';
import AuthUser from './AuthUser';
import {getAuthUser, authUser, logoutUser} from '../../../Redux/authReducer'
import { getAuthState } from '../../../Redux/authSelectors';

class AuthUserContainer extends React.PureComponent {

    componentDidMount() {
        if (this.props.state.userId !== null) {
            if (this.props.state.user.id === null) {
                this.props.getAuthUser(this.props.state.userId)
            }
        } 
    }

    authUser = (dataForm) =>{
       this.props.authUser(dataForm)
    }

    render() {
        return (<>
            {this.props.state.isFetching ? <PreLoader /> : null}
            <AuthUser
                user={this.props.state.user}
                authUser={this.authUser}
                logoutUser={this.props.logoutUser}
                errorAuth={this.props.state.errorAuth}
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        state: getAuthState(state)
    }
};

export default connect(mapStateToProps, {getAuthUser, authUser, logoutUser})(AuthUserContainer);