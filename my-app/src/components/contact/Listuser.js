import "./listuser.css";

const Listuser = (props) => {
    return (
        <div className = "lists">
            <div className = "userbox">
            <h2>{props.user.name}</h2>
            <b>{props.user.phone}</b><span>{props.user.info}</span>
            </div>
        </div>
    )
}

export default Listuser;