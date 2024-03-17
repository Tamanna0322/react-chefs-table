import PropTypes from "prop-types";


const Preparing = ({preparing, idx}) => {
    
    return (
        <div className="flex justify-between items-center text-black my-4 bg-slate-100 rounded-2xl py-4 px-2">
            <p>{idx+1}</p>
            <h3>{preparing.recipe_name}</h3>
            <h3>{preparing.preparing_time}minutes</h3>
            <h3>{preparing.calories}calories</h3>
           
        </div>
    );
};

Preparing.propTypes ={
    preparing: PropTypes.object,
    idx: PropTypes.number,
   
    
}

export default Preparing;