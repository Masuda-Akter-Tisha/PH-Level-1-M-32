export default function Employee ({employee}) {
   const {name, company : {name : companyName}, address : {city}} = employee; 
    return (
        <div style={{borderBottom : '2px solid white'}}>
            <h3>employee name : {name}</h3>
            <p>company name : {companyName}</p>
            <p>Address : {city}</p>
        </div>
    )
}