import React from 'react'
import { Table } from 'react-bootstrap';

function oderdetails() {
    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>User Id</th>
                <th>Item</th>
                <th>Quntity</th>
                <th>Discription</th>
                <th>File</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default oderdetails
