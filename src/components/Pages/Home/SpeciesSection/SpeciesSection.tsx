import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Container,
    Wrapper,
    Grid,
    Paginator,
    PreviousBtn,
    NextBtn,
} from './style';
import SpeciesCard  from './SpeciesCard';




const SpeciesSection = () => {
    const [species, setSpecies] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    //const [disableClass,SetDisableClass] = useState(false);

    const forwardHandle = () => {
        if(pageNumber === 4){
            console.log("disabled");
        } else {
            console.log(pageNumber);
            setPageNumber(prevSatate => prevSatate + 1);
        }
    };
        
    const backwardHandle = () =>{
        if(pageNumber === 1){
            console.log("disabled");
        } else {
            console.log(pageNumber);
            setPageNumber(prevSatate => prevSatate - 1);
        }
    }; 
        
    useEffect(() => {
        const fetchSpecies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://swapi.dev/api/species/?page=${pageNumber}`);
                //const sp = await response.json()
                setSpecies(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                //setSpecies([]);
                console.log(error);
            }
            setLoading(false);
        };
        fetchSpecies();
    }, [pageNumber]);

    if (loading) {
        return (
            <p>LOADING.....</p>
        )
    }

    return (
        <Container>
            <Wrapper>
                <Grid>
                    {species.map((specie, key) => {
                        return (
                            <SpeciesCard {...specie} />
                        )
                    })}
                </Grid>
                <Paginator>
                    <PreviousBtn onClick={backwardHandle} >Previous</PreviousBtn>
                    <NextBtn onClick={forwardHandle} >Next</NextBtn>
                </Paginator>
            </Wrapper>
        </Container>
    )
}

export default SpeciesSection;

/*
<Wrapper>
                <Grid>
                  { species.map((item,key) => {
                        return <Card key={key} style={{ width: '18rem' }}>

                        <Card.Img style={{ height: '175px' }} variant="top" src={""} />
                        <Card.Body>
                            <Card.Title>{}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Check: {}</Button>
                        </Card.Body>
                    </Card>
                  })}
                </Grid>
                <PaginationContainer>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={4}
                    nextLinkClassName={"nextBtnn"}
                    containerClassName={"paginationBttns"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                </PaginationContainer>
            </Wrapper>

*/
