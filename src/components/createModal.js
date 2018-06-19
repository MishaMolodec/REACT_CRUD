import React from 'react';


export class CreateModal extends React.Component{
    render(){
        return(
        <div className="modal">
        <div className="md">
            <div className="group">
            <label>fio</label>
            <span className="bar"></span>
            <input type="text"></input>
       </div>
       <div className="md">
            <div className="group">
            <label>birthdata</label>
            <span className="bar"></span>
            <input type="text"></input>
       </div>
       <div className="md">
            <div className="group">
            <label>job</label>
            <span className="bar"></span>
            <input type="text"></input>
       </div>
       <div className="md">
            <div className="group">
            <label>salary</label>
            <span className="bar"></span>
            <input type="text"></input>
       </div>
        </div>
       
        <button onClick={this.handleHide}>Close</button>
        
        <button onClick={this.CreateEmployee}>Create</button>
        
        </div>
      </div>
      </div>
      </div>
      )
    }
 

}