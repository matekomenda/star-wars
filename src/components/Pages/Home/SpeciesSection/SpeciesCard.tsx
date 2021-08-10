import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
//import { SpeciesData } from './SpeciesData';

import logo10 from "../../../../images/10sullustan.jpg";

const SpeciesCard = (specie: any) => {
    const history = useHistory();

    const redirectHandle = () => {
        console.log(specie.people);
        /*history.push({
            pathname: '/asd',
            state: {specie: specie}
        });*/
    }
    return (
        <Fragment>
            <Card key={specie.key} style={{ width: '18rem', margin: '1rem' }}>
                <Card.Img style={{ height: '175px' }} variant="top" src={logo10} />
                <Card.Body>
                    <Card.Title>{specie.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={redirectHandle}>Check: {specie.name}</Button>
                </Card.Body>
            </Card>

        </Fragment>
    )
};

export default SpeciesCard;

