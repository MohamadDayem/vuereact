import PropTypes from "prop-types";

function PokeCard({pokemon}) {
    return (
        <div>
            <figure>
                {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
            </figure>
            <figcaption> {pokemon.name ? pokemon.name : <p>???</p>}</figcaption>
        </div>
    );
}

PokeCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    }).isRequired
};

export default PokeCard;
