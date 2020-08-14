import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from './../../selectors/getHeroeById';

const HeroeScreen = ({ history }) => {

    const {heroeId} = useParams(); //Hook que obtiene los parametros de la url
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if(!hero){
        return <Redirect to="/"></Redirect>   
    }

    const {
       
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        if(history.length <= 2){
            history.push("/")
        }else{
            history.goBack()

        }
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />

            </div>

            <div className="col-8 animate__animated animate__fadeInRightBig">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"><b>First apparence: </b> {first_appearance}</li>

                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >Return</button>
            </div>
        </div>
    );
}

export default HeroeScreen
