import Banda from "./banda";
import Detail from "./detail";
import NavBar from "./navbar";
import { Col, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

const { useEffect, useState, createContext } = require("react");

export const BandaContext = createContext({
    banda: {},
    setBandas: () => { }
});

function Bandas() {

    //para mostrar el detalle de la banda escogida
    const setBanda = (banda) => {
        setState({ ...state, banda: banda })
    }
    const initState = {
        banda: [],
        setBanda: setBanda
    }
    const [state, setState] = useState(initState);

    const [bandas, setBandas] = useState([]);
    const [oldestBand, setOldestBand] = useState([]);

    useEffect(() => {

        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBandas(data);
                setOldestBand(calculateOldest(data));
            });

    }, []);

    function calculateOldest(data){
        let oldest = data[0];
        const length = data.length;
        for (let i = 0; i<length; i++){
            if (oldest.foundation_year>data[i].foundation_year){
                oldest = data[i];
            }
        }
        return oldest;
    }

    return (
        <div className="container">
            <NavBar></NavBar>
            <BandaContext.Provider value={state}>
                <Row>
                    <Col>
                <table className="table"><thead className="table-dark"><tr>
                    <th scope="col">#</th>
                    <th scope="col">
                        <FormattedMessage id="Name" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="Country" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="Genre" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="Foundation" />
                    </th>
                </tr></thead>
                    <tbody>
                        {bandas.map((banda, i) => (
                            <Banda key={i} banda={banda}></Banda>
                        ))}
                    </tbody></table>
                    <span><FormattedMessage id="OldestBandIs" /> {oldestBand.name} <FormattedMessage id="OldestBandFoundation" /> {2022-oldestBand.foundation_year} <FormattedMessage id="OldestBandYear" /></span>
                    </Col>
                    <Col>
                    <Detail/>
                    </Col>
                    </Row>
            </BandaContext.Provider>
        </div>
    );
}

export default Bandas;