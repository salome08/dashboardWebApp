import Grid from "@material-ui/core/Grid";

const Item = ({ children, ...rest }) => {
  return (
    <Grid container item xs={12} justify="center" alignItems="center" {...rest}>
      {children}
    </Grid>
  );
};

export default Item;
