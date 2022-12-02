import Container from "react-bootstrap/Container";
import { FormattedMessage } from 'react-intl';

function NavBar() {
 return (
       <Container style={{padding: "50px", textAlign:"center", fontSize:"2em",  backgroundColor:"light-blue"}}>
        <span style={{color: "black"}}>
        <FormattedMessage id="Banner" />
        </span>
       </Container>
 );
}

export default NavBar;