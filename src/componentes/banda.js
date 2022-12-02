import React from "react";
import { Link } from "react-router-dom";
import { BandaContext } from "./bandas";

const { useContext } = require("react");

const Banda = (props) => {
    const bandaState = useContext(BandaContext);

    function update() {
        bandaState.setBanda(props.banda);
    }

    return (
        <tr>
            <th scope="row">{props.banda.id}</th>

            <td><Link onClick={update}>{props.banda.name}</Link></td>

            <td>{props.banda.country}</td>
            <td>{props.banda.genre}</td>
            <td>{props.banda.foundation_year}</td>
        </tr>
    );
};

export default Banda;