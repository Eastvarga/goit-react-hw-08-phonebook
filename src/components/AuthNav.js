import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    marginRight: '20px',
    padding: '4px 6px',
  },
  activeLink: {
    color: 'blue',
    border: '1px solid blue',
    borderRadius: '4px',
  },
});

const AuthNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavLink
        to="/register"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
};

export default AuthNav;
