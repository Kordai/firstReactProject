import React from 'react';

export const WithAuthRedirect = (Comment) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.userId === null) return this.props.navigation("/login")
            return <Comment {...this.props} />
        }
    }
    return RedirectComponent
}