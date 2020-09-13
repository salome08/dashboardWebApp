import Link from "next/link";
import { Paper } from "@material-ui/core";

import color from "../../Utils/color";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import appsServices from "../../services/appsServices";
import Layout from "../../components/Layout";
import { Container, Row, Item } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { AppCard } from "../../components";

const GoBack = () => (
  <>
    <ArrowBackIcon style={{ color: color.primary }} />
    <Link href="/">
      <a style={{ textDecoration: "none", color: color.primary }}>&nbsp;Back</a>
    </Link>
  </>
);

const AppInfos = ({ appData, logs }) => {
  const configJson = JSON.stringify({ config: appData.config }, null, 3);

  return (
    <Layout>
      <Container>
        <Row>
          <Item>
            <h1 style={{ color: color.primary }}>{appData.appName}</h1>
          </Item>
        </Row>
        <Container>
          <Row>
            <Item xs={5}>
              <AppCard hide data={appData} />
            </Item>
            <Item xs={7}>
              <SyntaxHighlighter language="json" style={docco}>
                {configJson}
              </SyntaxHighlighter>
            </Item>
          </Row>
        </Container>

        <Container>
          <Row>
            <Item xs={4}>
              <GoBack />
            </Item>
            <Item xs={4}>
              <h1 style={{ color: color.primary }}>Logs :</h1>
            </Item>
            <Item xs={4} />
          </Row>
          <Row>
            <Item>
              <Paper style={{ padding: "1em" }}>
                <pre style={{ whiteSpace: "pre-wrap" }}>{logs.content}</pre>
              </Paper>
            </Item>
          </Row>
        </Container>
        <GoBack />
      </Container>
    </Layout>
  );
};

AppInfos.getInitialProps = async ({ query: { name } }) => {
  const appData = await appsServices.getOne(name);
  const logs = await appsServices.getLog(name);
  return {
    appData,
    logs,
  };
};

export default AppInfos;
