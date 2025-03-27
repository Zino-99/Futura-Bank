
import Nav from "./component/nav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      
    <div className="pt-24 pb-16 sm:pt-16 sm:pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl space-x-4 sm:text-5xl md:text-6xl font-extrabold text-gray-900 ">
        The banking experience {" "}
        <span className="text-blue-600 "> that moves you forward. </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
        Manage your finances easily, track your expenses in real-time, view their categories, wherever you are.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
      <a className='inline-flex items-center px-6 py-4 border border-transparent text-xl font-medium rounded-md text-white bg-blue-600/90 hover:bg-blue-700'>
      <Link to="/expense"> Get started</Link>    
                <i className='fas fa-arrow-right ml-2 '/>
            </a>
            </div> 
    </div>
  </div>
  </>
  );
};

export default Dashboard;