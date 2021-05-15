import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding: '20px 20px',
  },
});

const Container = props => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
