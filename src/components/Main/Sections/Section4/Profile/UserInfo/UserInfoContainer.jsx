import React from 'react';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import UserInfo from './UserInfo';

class UserInfoContainer extends React.Component {

    componentDidMount() {
        
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

    render() {
        return (<>
            {this.props.state.isFetching ? <PreLoader /> : null}
            <UserInfo
                userAttributes={this.userAttributes}
                userID={this.props.userID}
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.users
    }
};

export default connect(mapStateToProps, {})(UserInfoContainer);