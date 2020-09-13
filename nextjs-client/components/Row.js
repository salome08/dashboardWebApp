import Grid from "@material-ui/core/Grid";

const Row = ({ children, ...rest }) => {
  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      spacing={3}
      alignItems="stretch"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
