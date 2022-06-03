import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WithAuthRedirect = (Comment) => {
    class RedirectComponent extends React.Component {
        render() {
            let navigate = useNavigate();
            if (this.props.state.userId === null) return navigate("/login")
            return <Comment {...this.props} />
        }
    }
    return RedirectComponent
}