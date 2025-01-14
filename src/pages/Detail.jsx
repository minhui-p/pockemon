import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div
      className="bg-white flex flex-col justify-center items-center border
      py-[30px] px-[60px] border-b-[8px] border-r-[8px] border-r-[]5px border-black rounded-[10px]"
    >
      <div className="text-[28px]">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
