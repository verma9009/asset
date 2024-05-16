import React from 'react';
import './App.css';

import Dashboard from './Dashboard';
//import ContentDashboard from './Components/ContentDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content_dashboard from './Components/ContentDashboard';
import ViewEmployee from './Employee/ViewEmployee';
import EmployeeContent from './Components/EmployeeContent';
import ViewFeedback from './Feedback/ViewFeedback';
import LocationList from './Reports/LocationList';
import ViewComplain from './Feedback/ViewComplain';
import AddEmployee from './Employee/AddEmployee';
import AddLocation from './LocationDetails/AddLocation';
import ViewLocation from './LocationDetails/ViewLocation';
import AssetList from './Reports/AssetList';
import EmployeeList from './Reports/EmployeeList';
import AddAsset from './AssetDetails/AddAsset';
import ViewAsset from './AssetDetails/ViewAsset';
import AssetAssign from './AssignAsset/AssetAssign';
import Login from './Login';
import Register from './Register';
import ViewEmployees from './Manager/Pages/Employee/ViewEmployee';
import ViewAssetsManager from './Manager/Pages/AssetsDetail/ViewAssets';
import Complaints from './Manager/Pages/complaints/Complaints'
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Login/> */}
        {/* <Register/> */}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Login' element={<Login />}></Route>


          <Route path='/ViewFeedback' element={<ViewFeedback />}></Route>
          <Route path='/EmployeeContent' element={<EmployeeContent />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/ViewEmployee' element={<ViewEmployee />}></Route>
          <Route path='/LocationList' element={<LocationList />}></Route>
          <Route path='/ViewComplain' element={<ViewComplain />}></Route>
          <Route path='/AddEmployee' element={<AddEmployee />}></Route>
          <Route path='/AddLocation' element={<AddLocation />}></Route>
          <Route path='/ViewLocation' element={<ViewLocation />}></Route>
          <Route path='/AssetList' element={<AssetList />}></Route>
          <Route path='/EmployeeList' element={<EmployeeList />}></Route>
          <Route path='/AddAsset' element={<AddAsset />}></Route>
          <Route path='/ViewAsset' element={<ViewAsset />}></Route>
          <Route path='/AssetAssign' element={<AssetAssign />}></Route>
        




          {/* manager */}

          <Route path='/Manager' element={<Dashboard />} />
          {/* <Route index element={<Content_dashboard/>}></Route> */}
          <Route path='/ViewEmployee' element={<ViewEmployees />} />
          <Route path='/ViewAssets' element={<ViewAssetsManager />} />
          <Route path='/Complaints' element={<Complaints />} />



          {/* </Route> */}
        </Routes>
      </BrowserRouter>




    </>


  )

}
export default App;