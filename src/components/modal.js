import React from 'react';
import ReactDOM from 'react-dom'
import {modalRoot} from '../index' ;
import { UpdateModal } from './updateModal';


export class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }


     

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }


    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
  
    render() {
        <UpdateModal datas = {this.props.data} />
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }

}