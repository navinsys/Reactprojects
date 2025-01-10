const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li href="/menu" >Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button className="nav-links">login</button>
      </nav>
    );
  };
  
  export default Navigation;