import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout.tsx';
import SignUpPage  from './pages/SignUpPage.tsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/welcome' element={<WelcomePage/>} />
        <Route path='/log-in' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>}/>

        <Route path='*' element={<Navigate to="/welcome" replace />} />
      </Routes>
    </Layout>
  );
}


export default App
