import { use } from "react"
import Employee from "./Employee";

export default function Employees ({employeePromise}) {
    const employees = use (employeePromise);
    console.log(employees);
    
    return (
        <div className="card4">
            <h3>Employees: {employees.length}</h3>
            {
                employees.map (employee => <Employee key={employee.id} employee = {employee}></Employee>)
            }
        </div>
    )
}