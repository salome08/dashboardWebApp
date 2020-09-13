import react from "react";

import appsServices from "../services/appsServices";
import Home from "./Home";
import Layout from "../components/Layout";

const App = ({ allApps }) => {
  const [apps, setApps] = react.useState(allApps);

  return (
    <Layout>
      <Home allApps={apps} setApps={setApps} />
    </Layout>
  );
};

App.getInitialProps = async () => {
  const allApps = await appsServices.getAll();
  return {
    allApps,
  };
};

export default App;
