const User = (props) => {
    return (
        <div className="user-card">
            <h1>Name: {props.name }</h1>
            <h2>Location: {props.location}</h2>
            <h3>Contact</h3>
        </div>
    )
}

export default User;