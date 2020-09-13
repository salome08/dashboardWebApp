import appsServices from "../services/appsServices";
import AppCard from "../components/AppCard";
import { Container } from "../components";

const Home = ({ allApps, setApps }) => {
  const handleDelete = async (name) => {
    await appsServices.delete(name);
    const index = allApps.indexOf(
      allApps.find((elem) => elem.appName === name)
    );
    if (index > -1) {
      allApps.splice(index, 1);
    }
    setApps([...allApps]);
  };

  return (
    <Container>
      {allApps &&
        allApps.map((app) => (
          <AppCard key={app.appName} data={app} handleDelete={handleDelete} />
        ))}
    </Container>
  );
};

export default Home;
