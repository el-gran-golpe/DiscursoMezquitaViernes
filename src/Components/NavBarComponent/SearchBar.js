import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(current => !current);
    };

    const searchBarClass = `transition-all ease-in-out duration-300 ${isExpanded ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible'} flex items-center py-2 pl-5 pr-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;

    const iconClass = 'text-gray-500 transition-opacity duration-300 hover:opacity-75 ease-in-out cursor-pointer z-20 p-2';

    return (
        <div className="flex items-center justify-end w-full">
            <input 
                type="search" 
                name="q" 
                className={searchBarClass}
                placeholder="Search..." 
                autoComplete="off"
                aria-expanded={isExpanded}
            />
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                onClick={handleToggle}
                className={iconClass}
                size="lg" 
                aria-label="Toggle search"
            />
        </div>
    );
}








// function SearchBar() {
//     return (
//         <div className="flex items-center justify-center w-full">
//             <form className="w-full max-w-lg relative">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                     <button type="submit" className="p-2 text-gray-500 hover:text-blue-600 focus:text-blue-600 transition duration-150 ease-in-out">
//                         <FontAwesomeIcon icon={faMagnifyingGlass} />
//                     </button>
//                 </span>
//                 <input 
//                     type="search" 
//                     name="q" 
//                     className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out" 
//                     placeholder="Search..." 
//                     autoComplete="off"
//                 />
//             </form>
//         </div>
//     );
// }

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