import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className='container'>
            <div className='link-container'>
                    <h3>Start Bootstrap</h3>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <ul>
                    <li>
                    <h4 className='text'>Shop</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                    </li>
                </ul>
            </div>

            <div className='btn-container'>
            <button>Shop</button>
            </div>

    </div>
    </>
  )
}

export default Navbar