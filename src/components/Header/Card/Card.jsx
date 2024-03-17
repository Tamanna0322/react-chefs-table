import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiTwotoneFire } from "react-icons/ai";

const Card = ({ card, handleWantToCook }) => {
    //  console.log(card);
     const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = card

    return (
        <div className='border-2 p-5 rounded-xl space-y-4'>
            <img className='w-[350px] h-[200px] rounded-2xl object-cover' src={recipe_image} alt="" />
            <h3 className='text-xl font-bold'>{recipe_name}</h3>
            <p>{short_description}</p>
            <hr />
            <h3 className='text-xl font-bold'>Ingradients: {ingredients.length}</h3>
            {
                ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
            }
            <hr />
            <div className='flex space-x-8'>
                <h3 className='flex items-center space-x-2'>
                    <IoTimeOutline></IoTimeOutline> <span>{preparing_time}</span> minutes
                </h3>
                <h3 className='flex items-center space-x-2'>
                   <AiTwotoneFire></AiTwotoneFire> <span>{calories}</span>calories
                </h3>
            </div>
            <button onClick={() => handleWantToCook(card)} className="btn bg-green-500 border-none lg:px-6 px-3 py-2 rounded-3xl font-bold">Want to Cook</button>

        </div>

    );
};


Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Card;