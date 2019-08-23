import React, { Component } from 'react';
import Populate from './Populate'

class Screentwo extends Component {
  render() {
    return (
      <div>
        <Populate colone="C" coltwo="D" data={[
    {
        label: 'company id',
        input: 'input'
    },

    {
        label: 'company name',
        input: 'input'
    },

    {
        label: 'comment',
        input: 'textarea'
    },

    {
        label: 'rating',
        input: 'dropdown'
    }
]} defaultvalues={['data1','data2','data3','data4']}/>
      </div>
  
    );
  }
}

export default Screentwo;