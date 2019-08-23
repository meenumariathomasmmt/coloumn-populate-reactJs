import React, { Component } from 'react';
import Input from './Input';

class Populate extends Component {
    constructor(props){
        super(props);
        this.state={
            nextdata: [],
            populateddata: []
        }
    }

    updateValue(i,event){
        this.props.defaultvalues[i] = event.target.value;
        
        this.setState({
            nextdata:this.props.defaultvalues,
            populateddata: []
        }, (previousState) => {
            //console.log(this.state.nextdata);        
        })    
    }
    
    handleSubmit(event){
        event.preventDefault();
        if(this.state.populateddata.length === 0){
            this.setState({
                populateddata:this.props.defaultvalues
            }, (previousState) => {
                //console.log(this.state.populateddata);        
            }) 
        }
        else{
        this.setState({
            populateddata:this.state.nextdata
        }, (previousState) => {
            //console.log(this.state.populateddata);        
        }) 
        }
    }
    
    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    
            <div className="col-sm-6">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <table className="table">
                    <thead>
                        <th>{this.props.colone}</th>
                        <th>{this.props.coltwo}</th>
                    </thead>
                    
                    { this.props.data.map((data, i) => {
                            
                    return <tr>
                                <td>
                                    <label>{data.label}</label>
                                    <Input value={this.props.defaultvalues[i]} updateval={this.updateValue.bind(this,i)} type={data.input}/>
                                </td>
                                <td id={i}>{this.state.populateddata[i]}</td>
                            </tr>
                        }
                    )
                    }
                </table>
                <button type="submit" className="btn btn-success">Populate</button>
            </form>
            </div>
            <div className="col-sm-6"></div>
         </div>
    </div>
        )
    }
}


export default Populate;