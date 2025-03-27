import React, { useState } from "react";

const Form = () => {

  const [SaveForm,SaveSetForm] = useState({
    description: "",
    price: "",
    category: "Rent",
  });

  const [SubmiteForm, setSubmiteForm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
  SaveSetForm({ ...SaveForm, [name]: value });
  };

  const handleSubmit = (e) => {

   setSubmiteForm(SaveForm);
  };

  return (
    <>
    <div>
     
    </div>
    <div className="flex items-center justify-center ">
    
        <form className="max-w-sm mx-auto">
        <h2 className="text-center font-bold text-2xl mb-5">Entre your expenses</h2>
          <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea name="description"  type="text" value={SaveForm.description} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Description" required />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input type="number" min={0} value={SaveForm.price} onChange={handleChange} name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required />
          </div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the expense category</label>
          <select  value={SaveForm.category} onChange={handleChange} name="category"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-30 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option>Rent</option>
                <option>Shopping</option>
                <option>Trip</option>
                <option>Donation</option>
          </select>
          <div className="flex items-center justify-center" >
          <button type="button" onClick={handleSubmit} className="text-white cursor-pointer mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-15 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>

        {SubmiteForm && (
        <div className="">
          <h3 className="text-center font-bold text-2xl mt-5 mb-5">The expenses seized</h3>
          <p className="block mb-2 text-lg font-medium text-center text-gray-900 dark:text-white mb-5"> Description: {SubmiteForm.description}</p>
          <p className="block mb-2 text-lg font-medium text-center text-gray-900 dark:text-white mb-5">Price: {SubmiteForm.price}</p>
          <p className="block mb-2 text-lg font-medium text-center text-gray-900 dark:text-white mb-5">Category:{SubmiteForm.category}</p>
        </div>
      )}
    
        </form>

    </div>


    </>
  );
};

export default Form; 