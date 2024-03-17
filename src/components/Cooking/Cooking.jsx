import PropTypes from "prop-types";


const Cooking = ({cooking, idx, handlePreparing}) => {
    // console.log(cooking, idx);
    return (
        <div className="flex justify-between items-center text-black my-4 bg-slate-100 rounded-2xl py-4 px-2">
            <p>{idx+1}</p>
            <h3>{cooking.recipe_name}</h3>
            <h3>{cooking.preparing_time}minutes</h3>
            <h3>{cooking.calories}calories</h3>
            <button onClick={() => handlePreparing(cooking.id)} className=" bg-green-400 border-none px-3 py-1 rounded-3xl font-semibold">Preparing</button>

        </div>
    );
};

Cooking.propTypes ={
    cooking: PropTypes.object,
    idx: PropTypes.number,
    handlePreparing: PropTypes.func
}

export default Cooking;