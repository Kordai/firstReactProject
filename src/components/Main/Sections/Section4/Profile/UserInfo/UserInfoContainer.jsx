import React from 'react';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import UserInfo from './UserInfo';
import {getUserProfileInfo, deleteUser, toggleBeForm, updateUser} from '../../../../../../Redux/usersReducer';
import { getUsers } from '../../../../../../Redux/usersSelectors';

class UserInfoContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileInfo(this.props.userID)
      
    }

    userAttributes =
        [
            "First name",
            "Last name",
            "Address",
            "City",
            "Namber phone",
            "E-mail"
        ]    
        
        deleteUser = () => {
            this.props.deleteUser(this.props.userID)                 
        }

    render() {
        return (<>
            {this.props.state.isFetching ? <PreLoader /> : null}
            <UserInfo
                userAttributes={this.userAttributes}
                user={this.props.state.userProfileInfo}
                deleteUser={this.deleteUser}
                toggleBeForm = {this.props.toggleBeForm}
                state = {this.props.state}
                updateUser = {this.props.updateUser}
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        state: getUsers(state)
    }
};

export default connect(mapStateToProps, {getUserProfileInfo, deleteUser, toggleBeForm, updateUser})(UserInfoContainer);