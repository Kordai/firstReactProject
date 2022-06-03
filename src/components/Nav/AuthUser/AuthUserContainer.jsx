import React from 'react';
import { connect } from 'react-redux';
import PreLoader from '../../Main/Moduls/PreLoader';
import AuthUser from './AuthUser';
import {getAuthUser} from '../../../Redux/authReducer'

class AuthUserContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.state.userId)
        if (this.props.state.userId !== null) {
            console.log(this.props.state.user.id)
            if (this.props.state.user.id === null) {
                console.log("Login to server")
                this.props.getAuthUser()
            }
        } else {
            alert("Login")
        }

    }

    authUser = (dataForm) =>{
        alert("Auth to server")
    }

    render() {
        return (<>
            {this.props.state.isFetching ? <PreLoader /> : null}
            <AuthUser
                user={this.props.state.user}
                authUser={this.authUser}
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.auth
    }
};

export default connect(mapStateToProps, {getAuthUser})(AuthUserContainer);