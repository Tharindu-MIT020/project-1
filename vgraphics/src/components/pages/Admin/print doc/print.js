import React from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

import  ComponentToPrint   from './printProfit';

export default class Example extends React.PureComponent {
    
  render() {
      
    return (
      <div>
            <ComponentToPrint ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button variant="success">Print</Button>;
          }}
          content={() => this.componentRef}
        />
      
      </div>
    );
  }
}