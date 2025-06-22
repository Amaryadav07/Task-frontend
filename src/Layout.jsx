
import {Outlet} from 'react-router-dom'
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';

const Layout = () => {
  return(
  <>
  <TopNav/>
  <div id='layout'>
<Outlet/>
  </div>
  
  <Footer/>
  </>
  );
}
export default Layout;