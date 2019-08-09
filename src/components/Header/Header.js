import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="Header">
        <a href="http://localhost:3000"><img href="http://localhost:3000/" src="https://media.licdn.com/dms/image/C560BAQFpHyXYcc3i7Q/company-logo_400_400/0?e=1573084800&v=beta&t=KMzBaPXXqK9lCp7WJU9xIW8z3SN5qLoPzFYcl7H7_Hc" alt="Smiley Face" height="100" width="100" align-text="left"></img></a>
        <div className="MenuBotton">
          <select className="MultipleButtons">
            <option value="Hello, jessjelly!">Hello, jessjelly!</option>
            <option value="My Profile">My Profile</option>
            <option value="My Articles">My Articles</option>
            <option value="Settings">Settings</option>
            <option value="Log Out">Log Out</option>
          </select>

        </div>
      </header>
    </div>
  );
};

export default Header;