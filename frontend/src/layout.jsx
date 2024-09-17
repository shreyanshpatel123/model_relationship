import {Link,Outlet} from "react-router-dom"
import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
    <>
        
 <Navbar bg="primary" data-bs-theme="dark">
         <Container>
           <Nav className="me-auto">
             <Nav.Link as={Link} to="home">Home</Nav.Link>
             <Nav.Link as={Link} to="insert">Insert</Nav.Link>
             <Nav.Link as={Link} to="display">Display</Nav.Link>
           </Nav>
         </Container>
    </Navbar> 

    <Outlet/>
    </>)
}

export default Layout 




