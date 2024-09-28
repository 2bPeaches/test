
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ListMember from './pages/ListMember';
import EditMember from './pages/EditMember';
import CreateMember  from './pages/CreateMember';
import Home from './pages/User/Home';
import Package from './pages/User/Package';
import Payment from './pages/User/Payment';
import Dashboard from './pages/Admin/Dashboard';
import ClassCreate from './pages/Admin/Class/Create';
import Class from './pages/Admin/Class';
import ClassType from './pages/Admin/Class/ClassType';
import EditClass from './pages/Admin/Class/Edit';
import Trainer from './pages/Admin/Class/Trainer';
import EquipmentCreate from './pages/Admin/Equip/Create';
import EditEquipment from './pages/Admin/Equip/Edit';
import Equipment from './pages/Admin/Equip';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listMember' element={<ListMember />} />
        <Route path='/editMember' element={<EditMember />} />
        <Route path='/createMember' element={<CreateMember />} />
        <Route path="/package" element={<Package />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/class" element={<Class />} />
        <Route path="/class/create" element={<ClassCreate />} />
        <Route path="/class/edit/:classID" element={<EditClass />} />
        <Route path="/class/classType" element={<ClassType />} />
        <Route path="/class/trainer" element={<Trainer />} />
        <Route path="/equip" element={<Equipment />} />
        <Route path="/equip/create" element={<EquipmentCreate />} />
        <Route path="/equip/edit" element={<EditEquipment />} />
      </Routes>
  );
}

export default App;