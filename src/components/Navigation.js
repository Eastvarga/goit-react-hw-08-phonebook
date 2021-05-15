import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink to="/phonebook" exact>
      Phonebook
    </NavLink>
    <NavLink to="/" exact>
      Main page
    </NavLink>
  </div>
);

export default Navigation;
