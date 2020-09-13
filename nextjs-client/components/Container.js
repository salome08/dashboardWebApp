import Grid from "@material-ui/core/Grid";

const Container = ({ children, ...rest }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Container;
