import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../Components/Sidebar'
import Navbar from '../../../Components/Navbar'

const Complaints = () => {
  return (

    <div id="wrapper">
    <Sidebar/>

<br/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

      <Navbar/>


    <div class="content-body">
    <div class="container-fluid row">
<div class="col-md-12">
<div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div style={{display: "flex", gap: "10px"}}>
                            <h4 class="card-title">Assets Table


                                
                            </h4>
                            
                            <div class="input-group" style={{display: "flex", display:"contents"}} >
                                <input type="text" class="bg-light border-0 small" placeholder="Search by name.."
                                    aria-label="Search" aria-describedby="basic-addon2" style={{marginLeft:" 20pc"}}/>
                                <div class="input-group-append">
                                    <button class="btn btn-info" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        
                          

                        </div>
                        <br/>

                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>title</th>
                                        <th>discription</th>
                                        <th>Feedback</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>good</td>
                                      
                                       
                                    </tr>
                                   
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>bad</td>

                                      
                                       
                                    </tr>
                                   
                                </tbody>


                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>better</td>

                                      
                                       
                                    </tr>
                                   
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>good</td>
                                      
                                       
                                    </tr>
                                   
                                </tbody>


                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>good</td>

                                      
                                       
                                    </tr>
                                   
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>John Die</td>
                                        <td>review</td>
                                        <td>very good  ,i like it</td>
                                        <td>best</td>

                                      
                                       
                                    </tr>
                                </tbody>
                                
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>

<Outlet/>
          </div>
        </div>
      </div>

  )
}

export default Complaints
