import React from 'react';


export class DeleteModal extends React.Component{
    render(){
        return(
        <div className="modal">
            
            <label>Are you sure ?</label>          
       <button onClick={this.delete}>Yes</button>
        <button onClick={this.handleHide}>No</button>
        

    </div>

      )
    }
 

}
//this.deleteEmploy.bind(this,data._id)