import React from 'react';

const Nav = () => {
  return (
    <div>

      <nav className="bg-white border-gray-200">
        <div className ="flex flex-row">
          <img src = "public/image/Futura_bank.png" className='h-25' />

          <ul className="font-bold text-xl text-center flex gap-8 mt-10 ml-8">
            <li><a href="#">Home</a></li>
            <li><a href ="#">Depense</a></li>
            <li><a href="#">Categorie</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default Nav;