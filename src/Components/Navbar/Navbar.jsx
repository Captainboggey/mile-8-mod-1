

const Navbar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "Profile" },
      ];
    return (
        <nav>
           <ul className="md:flex justify-center ">
           {
                routes.map(route=><li className="mr-6" key={route.id}><a href={route.path}>{route.name}</a></li>)
            }
           </ul>
            
        </nav>
    );
};

export default Navbar;