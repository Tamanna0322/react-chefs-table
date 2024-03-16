
import { FaRegUserCircle } from "react-icons/fa";
import banner from '../../assets/images/cooking.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="max-w-7xl mx-auto mt-4">
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost lg:text-3xl text-xl font-bold">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex">
                        <div className="hidden lg:flex form-control">
                            <label className="input input-bordered rounded-2xl bg-gray-200 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            
                        </div>
                        <button className=" bg-green-400 p-2 rounded-full text-2xl font-extralight ml-4"><FaRegUserCircle></FaRegUserCircle></button>
                    </div>
                </div>
            </nav>

            <div className="lg:mt-10 mt-5 mx-3 flex justify-center items-center text-center bg-center bg-no-repeat lg:w-full lg:h-[600px] h-[400px] rounded-3xl bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
               <div className="lg:w-[70%] w-[93%] mx-auto lg:space-y-8 space-y-4">
                <h2 className="lg:text-5xl text-xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h2>
                <p className="text-white">Embark on an exclusive culinary adventure with a personalized cooking class. Explore diverse cuisines and refine your skills under expert guidance. Unleash your inner chef today!</p>
                <div className="lg:space-x-6 space-x-3">
                    <button className="btn bg-green-500 border-none lg:px-6 px-3 py-3 rounded-3xl font-bold">Explore Now</button>
                    <button className="btn bg-inherit border lg:px-6 px-3 py-3 rounded-3xl text-white">Our Feedback</button>
                </div>
               </div>
            </div>



        </header>
    );
};

export default Header;