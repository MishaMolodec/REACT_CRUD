import React from 'react';

export class UpdateModal extends React.Component{
    render(){
        return(

<div className="modal">
                <div className="md">
                    <div className="group">
                    <label>fio</label>
                    <span className="bar"></span>
                    <input type="text">{this.props.datas.fio}</input>
               </div>
               <div className="md">
                    <div className="group">
                    <label>birthdata</label>
                    <span className="bar"></span>
                    <input type="text">{this.props.datas.birthdata}</input>
               </div>
               <div className="md">
                    <div className="group">
                    <label>job</label>
                    <span className="bar"></span>
                    <input type="text">{this.props.datas.job}</input>
               </div>
               <div className="md">
                    <div className="group">
                    <label>salary</label>
                    <span className="bar"></span>
                    <input type="text">{this.props.datas.salary}</input>
               </div>
                </div>
               
                <button onClick={this.handleHide}>Close</button>
                <button onClick={this.UpdateEmployee}>Update</button>
                
                
                </div>
            </div>
            </div>
            </div>
        )
    }
}