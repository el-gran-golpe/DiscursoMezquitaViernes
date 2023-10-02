import NavbarCSS from "./Navbar.module.css";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from "./Logo.png";



function Navbar(){
    return (
    <nav className={NavbarCSS.nav}>
        <Link to = "/" className={NavbarCSS.siteTitle}> 
        <FontAwesomeIcon icon={faHome} className={NavbarCSS.iconSpace}/>
        <img src={logo} alt="FilmAffinity Logo" className={NavbarCSS.logo} />
        </Link>
        <TheGoodSearchBar/>
        <ul>
            <CustomLink to = "/pricing" text = "Pricing" />
            <CustomLink to = "/about" text = "About" />
        </ul>    
    </nav>
    );
}

function CustomLink({to, text}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
  
    return (
        <li className = {isActive ? "active" : ""}>
            <Link to = {to}>
                {text}
            </Link>
        </li>
    )
}

// function SearchBar(){
    
//     const [items, setItems] = useState([]);
//     const [query, setQuery] = useState("");
//     const inputRef = useRef();
    
//     const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase())); 
  
//      function SubmitHandler(e){ 
//          e.preventDefault();
//          const value = inputRef.current.value;
//          if (value !== "")
//          {
//             return setItems(prev => ([...prev, value])); 
//          }
//          inputRef.current.value = "";
//     }
//     return(
//         <>
//         Search: <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
//         <br />
//         <br />
//         <form onSubmit={SubmitHandler}>   {/*Form sends information to a server */}
//             New Item: <input ref={inputRef} type="text" />
//             <button type="submit">Add</button>
//         </form>
//         <h3>Items:</h3>
//         {filteredItems.map(item => (<div key={item}>{item}</div>))} {/*This map displays the items one by one */}
//         </>
//     );
//   }

  function TheGoodSearchBar(){

    // const [query, setQuery] = useState("");
    return(
        <>
        {/* <input className = {NavbarCSS.inputbtn} value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search"/> */}
        <div className="flex items-center justify-center m-auto w-full flex-1">
            <form method="GET" className="w-full">
                <div className="relative text-gray-600 focus-within:text-gray-400 w-4/5 m-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center pl-1">
                        <button type="submit" className="p-1 py-2 mt-1 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:text-blue-500">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
                        </button>
                    </span>
                    <input type="search" name="q" className="w-full py-2 text-sm text-white bg-white rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                </div>
            </form>
        </div>
        </>
    );
  }

export default Navbar;