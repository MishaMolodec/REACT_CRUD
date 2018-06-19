import React from 'react';
import {PathBase} from '../index' ;



export class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchParams : "",
            searchData: {},
            findByName: false,
            findByBirthdate: false,
            findByJob: false,
            findBySalary: false,
            isLoaded: false,
        }
        this.clickSearch = this.clickSearch.bind(this);
        this.getsearchParams = this.getsearchParams.bind(this);

    }



clickSearch =() => {
  const searchReq = PathBase +`?filter=`+ this.state.searchParams ;
   fetch(searchReq)
   .then(res => res.json())
            .then(
                (result) => {
                    
                    if(result.search.searchFio !== 0  ){
                        this.setState({
                        isLoaded: true,
                        searchData: result.search.searchFio,
                        findByName: true,
                        findByBirthdate: 0,
                        findByJob: 0,
                        findBySalary: 0,
                        
                                }
                         );
                    }
                
                   else if(result.search.searchBirthdata !== 0 ){
                        this.setState({
                        isLoaded: true,
                        searchData: result.search.searchBirthdata,
                        findByName: 0,
                        findByBirthdate: true,
                        findByJob: 0,
                        findBySalary: 0,
                                }
                         );
                    }
                
                
                 else if(result.search.searchJob !== 0 ){
                        this.setState({
                        isLoaded: true,
                        searchData: result.search.searchJob,
                        findByName: 0,
                        findByBirthdate: 0,
                        findByJob: true,
                        findBySalary: 0,
                                }
                         );
                    }
                
                
                   else if(result.search.searchSalary !== 0 ){
                        this.setState({
                        isLoaded: true,
                        searchData: result.search.searchSalary,
                        findByName: 0,
                        findByBirthdate: 0,
                        findByJob: 0,
                        findBySalary: true,
                                }
                         );
                    }
                
                
                
                },

                    
                                    
                                    (error) => {
                                        this.setState({
                                            isLoaded: true,
                                            error
                                        });
                                    }
                                )
                                 
                        }

                

getsearchParams= (event) => {
event.preventDefault();
 this.setState({
     searchParams : event.target.value,
     
 });
 console.log(this.state.searchParams);
}   


render() {
    console.log(this.state);
        return <div className="header">

            <button className="btn-1" >sign in</button>
            <input className="inpt" onChange={this.getsearchParams}></input>
            <button className="btn-1" onClick={this.clickSearch}>search</button>

        </div>;
    }
}