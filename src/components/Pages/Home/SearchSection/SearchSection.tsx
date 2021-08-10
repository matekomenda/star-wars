import axios from 'axios';
import {useState} from 'react';
import {
    Container,
    Wrapper,
    StyledInput,
    SearchIcon,
    SearchBarWrapper,
} from './style';


const SearchSection = () => {
    //const[result,setResult] = useState<any[]>([]);

    const searchByName = (event: any) => {
        const query = event.currentTarget.value;
        const fetchdata = async ()  => {
            const response = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
            console.log(response.data.results);
        };
        fetchdata();
    };

    return (
        <Container>
            <Wrapper>
            <SearchBarWrapper>
                <SearchIcon/>          
                <StyledInput placeholder="Search..." onChange={searchByName} />
            </SearchBarWrapper>
            </Wrapper>
        </Container>
    )
}

export default SearchSection;
