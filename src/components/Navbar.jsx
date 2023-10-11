import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

// STYLES
import styles from "./navbar.css"

const Navbar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
       e.preventDefault()

       if(!search) return

       navigate(`/search?q=${search}`)
       setSearch("")
    }

    return (
        <nav id="navbar">

            <h2>
                <Link to="/"> <BiCameraMovie /> Movieslib </Link>
            </h2>

            <form onSubmit={handleSubmit}>

                <input onChange={ (e) => setSearch(e.target.value)} type="text" placeholder='Busque um filme'
                value={search} />
                
                <button  type='submit'> <BiSearchAlt2 /> </button>

            </form>

        </nav>
    )
}

export default Navbar