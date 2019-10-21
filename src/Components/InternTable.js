import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import AvailabilityChart from './AvailabilityChart';

 class InternTable extends Component {
     constructor(){
        super() 
        this.state ={
            isLoading:true,
            interns: [],
            error: null
           
        }
        this.getRowsData =  this.getRowsData.bind(this)
        this.getKeys =  this.getKeys.bind(this)
        this.getDate = this.getDate.bind(this)
    }

    componentDidMount() {
        this.fetchUsers();
      }
      
      
      getKeys = function(){
        return Object.keys(this.state.interns);
    }

    getDate = function(date){
        var parts = date.split('/')
         var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        
         var mydate = parts[0]+"/"+months[parts[1]-1];

         return mydate
        

    }
      getRowsData = function(){
            
        var items = this.state.interns;
        console.log(items)
        

        var keys = this.getKeys();
        console.log(keys)
        return items.map((items)=>{
                 return <tr class="text-left" key={keys}>
                         <td><span style= {{padding:"20px", color: "grey"}}>{items.id-1}</span></td>
                         <td >
                           <i style={{color: "white", border: "solid 1.5px grey", borderRadius: "3px"}} class="fa fa-square"></i>
                           </td>
                             <td> <i class="fa fa-user"style ={{padding:"10px"}}></i> </td>
                             
                         <td>{items.name}</td>
                         <td >{this.getDate(items.start)}</td>
                         <td >{this.getDate(items.end)}</td>
                 </tr>
    })
}
    fetchUsers() {
        
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://totalcloud-static.s3.amazonaws.com/intern.json";
        fetch(proxyurl + url)
          .then(response => response.json())
          .then(data =>
            this.setState({
              interns: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));

          
      }

    render() {
        return (
            <div class="container">
                   
                    <div class="card text-center" style={{ marginLeft:'120px', marginBottom:'50px', marginRight:'120px',marginTop:'50px'}}>
                    <div class="card-title"><h1 class="display-3">Intern Table</h1></div>
          
                    <div class="card-body ">
                              
                              <div>
                                          <table class="table ">
                                             <thead>
                                               <th scope="col" ></th>
                                               <th scope="col"></th>
                                               <th scope="col"></th>
                                               <th scope="col" class ="col col-sm-8 font-weight-bold text-align-left " style={{textAlign:"left"}} >intern-assignment </th>
                                               <th scope="col" class ="col col-sm-2 text-primary font-weight-normal font-smaller">Start Date</th>
                                               <th scope="col" class ="col col-sm-2 text-primary font-weight-normal font-smaller">Due Date</th>

                                             </thead>
                                          <tbody>
                                            {this.getRowsData()}
                                          </tbody>
                                        </table>
                                            
                                      

                              </div>
                              
                                  
                      </div>
                    </div>     
                
                <div >
                      <AvailabilityChart interns={this.state.interns}/>
                </div>
                  
            </div>
        )
    }
}

export default InternTable