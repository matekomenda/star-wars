import React from 'react' ;
import SearchSection from './SearchSection/SearchSection';
import SpeciesSection from './SpeciesSection/SpeciesSection';



const Home = () => {
    return (
        <React.Fragment>
              <SearchSection />
              <SpeciesSection />
        </React.Fragment>
    );
};

export default Home;
