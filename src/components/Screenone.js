import React, { Component } from 'react';
import Populate from './Populate'

class Screenone extends Component {
  render() {
    return (
      <div>
        <Populate colone="A" coltwo="B" data={[
    {
        label: 'Name',
        input: 'input'
    },

    {
        label: 'Id',
        input: 'input'
    },

    {
        label: 'DOB',
        input: 'input'
    }
]} defaultvalues={['val1','val2','val3']}/>
      </div>
  
    );
  }
}

export default Screenone;
