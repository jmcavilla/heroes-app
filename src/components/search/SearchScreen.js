import React, { useMemo } from 'react'
import queryString from 'query-string'
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search )
    console.log(q)
    const [{searchText}, handleInputChange] = useForm({
        searchText: q
    });

    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) =>{
        e.preventDefault();    
        history.push(`?q=${searchText}`)
        
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Find your hero..."
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            className="btn mt-3 btn-block btn-outline-primary"
                            type="submit"
                        
                        >Search...</button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>
                    {
                        (q === '') && <div className="alert alert-info">Search a hero</div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">Hero {q} does not exist</div>
                    }

                    {
                        heroesFiltered.map(hero => 
                            <HeroCard key={hero.id} {...hero}></HeroCard>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
