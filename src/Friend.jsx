export default function Friend ({friend}) {
    console.log(friend);
    const {name, email, phone} = friend;
    
    return (
        <div className="card">
            {/* <h3>name : {friend.name}</h3> */}
            <h3>name : {name}</h3>
            <h4>name : {email}</h4>
            <p>phone : {phone}</p>
        </div>  
    )
}