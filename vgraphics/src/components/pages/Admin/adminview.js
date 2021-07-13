import React from 'react'
import { Dropdown, ButtonGroup, Button, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sideview.css'

function adminview() {
    return (
        <div className="sideview">
         <ButtonGroup vertical className="mb-2" size="lg">
            <Button>Notification</Button>
            <Button>Chat</Button> 

             <DropdownButton as={ButtonGroup} title="Add Design" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1"><Link to = "./adddigital">Digital</Link></Dropdown.Item>
            <Dropdown.Item eventKey="2">Vcard</Dropdown.Item>
            <Dropdown.Item eventKey="3">Offcet</Dropdown.Item>
            </DropdownButton>

            <Button>Button</Button>
            <Button>Button</Button>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
        </div>
    )
}

export default adminview
