const { applyMiddleware, createStore } = Redux;
const { connect, Provider } = ReactRedux;

// GitHub API
const gitHubApi = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
                .then(({ login, avatar_url, html_url }) => ({ login, avatar_url, html_url }));
        })
        .catch(error => {
            throw error;
        })
};

// redux-thunk implementation
// source: https://github.com/gaearon/redux-thunk/blob/master/src/index.js
// Notice how terse the middle ware is but it handles most use case for async actions in your application
function thunkMiddleware(store) {
    return function (next) {
        return function (action) {
            if (typeof action === "function") {
                return action(store.dispatch, store.getState);
            } else {
                return next(action);
            }
        }
    }
}

// Action creator
const getUserSuccess = (user) => {
    return {
        type: 'LOAD_USER_SUCCESS',
        user
    }
}


// Userreducer implementation.
// Simply returns the new user object to the store.
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return action.user;
        default:
            return state;
    }
};

// fetchUserDetails thunk
// It returns a function that takes dispatch as the first argument.
// When AJAX request is successful, it dispatches getUserSuccess action with user object.
const fetchUserDetails = (username) => {
    return dispatch => {
        return gitHubApi(username)
            .then(user => {
                dispatch(getUserSuccess(user))
            })
            .catch(error => {
                throw error
            })
    }
}

// React component
class UserProfile extends React.Component {
    constructor() {
        super();
        this.handleUserDetail = this.handleUserDetail.bind(this);
    }

    // We call our thunk here. 
    // ComponentDidmount is for dynamic behavior, side effects, AJAX, etc.
    componentDidMount() {
        this.props.fetchUserDetails('mentrie');
    }

    handleUserDetail(event) {
        event.preventDefault();
        if (this.username !== null) {
            this.props.fetchUserDetails(this.username.value);
            this.username.value = '';
        }
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                {user ? <div>
                    <input
                        type="text"
                        ref={(ref) => this.username = ref}
                    />
                    <button onClick={this.handleUserDetail}>Search</button>
                    <div>
                        <h1> User Profile </h1>
                        <img src={user.avatar_url} />
                        <p><a href={user.html_url} target="_blank">{user.login}</a></p>
                    </div>
                </div> : '...loading'}
            </div>
        )
    }
}

// Setup store
const store = createStore(userReducer, applyMiddleware(thunkMiddleware));

// Wrap action creator with dispatch method
const mapStateToProps = (state) => ({ user: state });

// wrap action creator with dispatch method
const mapDispatchToProps = (dispatch) => ({ fetchUserDetails: (username) => dispatch(fetchUserDetails(username)) })

// Connect react component to redux store 
const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// Mount the component to the DOM
const element = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <UserProfilePage />
    </Provider>,
    element, 0
);