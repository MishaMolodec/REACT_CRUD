import React from 'react';
import {Modal} from '../components/modal'; 
import {Table} from '../components/table'; 
import {Header} from '../components/header'; 
import {CreateModal} from '../components/createModal'; 
import {UpdateModal} from '../components/updateModal';
import {DeleteModal } from '../components/deleteModal';
import {Pagenator} from '../components/pagenator';
import img from '../images/iPad-5th.png';
export class Window extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            toCreate: false,
            toUpdate: false,
            toDelete: false,
        };
       
        this.handleHide = this.handleHide.bind(this);
    }

   getData = ()=>{
       this.state.data;
   }

    handleHide() {
        this.setState({ showModal: false });
    }

    update = ()=>{
        this.setState({showModal: true})
        this.setState({toUpdate:true});
        this.setState({toCreate:false});
        this.setState({toDelete:false});

        
       

    }
    
    create = ()=>{
       
        this.setState({showModal: true});
        this.setState({toUpdate:false});
        this.setState({toCreate:true});
        this.setState({toDelete:false});
        
    }

    delete = ()=>{
     
      
       this.setState({showModal: true})
       this.setState({toUpdate:false});
       this.setState({toCreate:false});
       this.setState({toDelete:true});
    }
    switchModal = ()=>{
        switch(true){
         case this.state.toCreate:
         return(
             <CreateModal/>
           )
        case this.state.toUpdate:
        return(
            <UpdateModal />
            
        )
    case this.state.toDelete:
        return(

        <DeleteModal />
        )
        default:
            return null;


}}


    render() {

        const modal = this.state.showModal ? (<Modal data={this.getData}>
           {this.switchModal()} 
           
        </Modal>
        ) : null;


        return (<div>
            <div style={{
                height:"200vh",
                               
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                paddingTop:"285px",
                paddingBottom:"20px",
                paddingRight:"140px",
                paddingLeft:"40px",
                
            }}>
                <Header />
                <Table onAction={this.handleShow}  func={this.update} funcc={this.create} funcd={this.delete} />
                 {modal }
                <Pagenator/>
                   
                   
            </div>
            </div>
        )
    }
};