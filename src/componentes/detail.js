import Card from "react-bootstrap/Card";
import { BandaContext } from "./bandas";

const { useContext } = require("react");


export default function Detail() {
    const bandaState = useContext(BandaContext);


 return (
    <Card className="mb-2" style={{padding:"20px", width: "30rem"}} >
    
    <Card.Img className='center-block images'
    style={{ height: "14rem" }}
    variant="top"
    src={bandaState.banda.image}
    />
    <Card.Title>{bandaState.banda.name}
    </Card.Title>
    <Card.Body>
    <Card.Text>{bandaState.banda.description}</Card.Text>
    </Card.Body>
    </Card>

 );
}