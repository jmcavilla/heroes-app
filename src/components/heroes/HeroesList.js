import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div>
            <div className="card-columns animate__animated animate__fadeIn">

                {

                    heroes.map(hero => (<HeroCard key={hero.id} {...hero}/>))

                }

            </div>
        </div>
    )
}

export default HeroesList
