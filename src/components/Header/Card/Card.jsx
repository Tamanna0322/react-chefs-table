import PropTypes from 'prop-types';

const Card = ({ card }) => {
     console.log(card);
    return (
        <div className='border-2 p-5 rounded-xl space-y-4'>
            <img className='w-[350px] rounded-2xl' src="https://i.ibb.co/h9Vh047/spaghetti-seafood-with-tomato-sauce-decorated-with-beautiful-ingredients.jpg" alt="" />
            <h3 className='text-xl font-bold'>Sphagetti Pasta</h3>
            <p>Creamy and flavorful seafood risotto, perfect for cozy dinners. A vegetarian delight!</p>
            <hr />
            <h3 className='text-xl font-bold'>Ingradients:</h3>
            <hr />
            <div className='flex'>
                <h3>preparing_time: </h3>
                <h3>Calories: </h3>
            </div>
            <button className="btn bg-green-500 border-none lg:px-6 px-3 py-2 rounded-3xl font-bold">Want to Cook</button>

        </div>

    );
};


Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;