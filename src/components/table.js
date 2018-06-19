import React from 'react';



import {PathBase} from '../index' ;
export class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            
        };
    
    }

    componentDidMount() {
        fetch(PathBase)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    deleteEmploy = (id, ev) => {
        const delReq = PathBase + id;

        fetch(delReq, {
            method: 'delete'
        }).then(res => {
            if (res.status === 200){ 
                return res 
            }
           else throw (res);
        }).then(res => res.json())
            .then((res) => {
                console.log()
                this.setState({ data: this.state.data.filter(d => d._id!== id)})
                console.log(this.state.data);
    }).catch(e =>{ console.error('error deleting', e)})}

   
            createEmploy = ()=>{
                null;
            }

            updateEmploy = ()=>{
                null;
            }


            

    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (


                <table  >
                    <thead>
                        <tr>
                            <th>Id
                                
                            </th>
                            <th>fio</th>
                            <th>birthdata</th>
                            <th>job</th>
                            <th>salary</th>
                            <th>functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(data => (
                            <tr key={data._id}>
                                <td>
                                    {data._id} </td>
                                <td>{data.fio}</td>
                                <td>{data.birthdata}</td>
                                <td>{data.job}</td>
                                <td>{data.salary}</td>
                                <td><button onClick={this.props.func}  className="btn">update</button>
                                    <button  onClick={this.props.funcd}  className="btn">delete</button>
                                    <button  onClick={this.props.funcc} className="btn">add new +</button>
                                </td>
                            </tr>
                        ))}





                    </tbody>
                </table>






            );
        }

    }
}