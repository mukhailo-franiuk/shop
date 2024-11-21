import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./components/pages/home/HomePage";
import { SingUpPage } from "./components/pages/sing-up/SingUpPage";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./option/env/env";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  getAllUsers
} from './store/users/UsersSlice';
import { useEffect, useState } from "react";
import { User } from "./components/user-panel/User";
import { Admin } from "./components/admin-panel/Admin";
function App() {
  const [status_01, setStatus_01] = useState('block');
  const [status_02, setStatus_02] = useState('hidden');

  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);
  const db = getDatabase(app);
  useEffect(() => {
    onValue(ref(db, 'users/'), (snapshot) => {
      dispatch(getAll(snapshot.val()));
    })
  },[]);
  useEffect(() => {
    Object.keys(users).map(item => {
      if (users[item]['codeUnice'] === window.localStorage.getItem('userCodeID')) {
        setStatus_01('hidden');
        setStatus_02('block');
      }
    })
})
  return (
    <div className="w-full">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header status_01={status_01} status_02={status_02} />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="sing-up" element={<SingUpPage />} />
          <Route path="admin/:login" element={<Admin />} />
          <Route path="user/:name" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
