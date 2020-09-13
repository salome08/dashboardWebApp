import Link from "next/link";
import * as moment from "moment";
import "moment-duration-format";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  Container,
} from "@material-ui/core";
import { Row, Item } from "./";
import color from "../Utils/color";

const AppCard = ({ data, hide, handleDelete }) => {
  const {
    appName,
    status,
    config: {
      executor: { instances },
    },
  } = data;
  const {
    lastSubmissionAttemptTime,
    terminationTime,
    applicationState: { state: statusApp },
  } = status;
  const seconds = terminationTime
    ? moment(terminationTime).diff(moment(lastSubmissionAttemptTime), "s")
    : null;
  const duration = moment.duration(seconds, "seconds").format("h:mm:ss");

  return (
    <Card key={appName} style={{ width: "20em", margin: "3em" }}>
      {!hide && (
        <CardHeader
          title={appName}
          style={{ backgroundColor: color.primary, color: color.white }}
          titleTypographyProps={{
            style: {
              fontWeight: "lighter",
              fontSize: "0.8rem",
              textAlign: "center",
            },
          }}
        />
      )}
      <CardContent>
        <Container>
          <Row>
            <Item justify="flex-start">
              <Typography>
                Status:
                <Typography
                  style={{
                    color:
                      statusApp === "COMPLETED"
                        ? "green"
                        : statusApp === "RUNNING"
                        ? "orange"
                        : "red",
                    display: "inline",
                  }}
                >
                  &nbsp;{statusApp}
                </Typography>
              </Typography>
            </Item>
          </Row>
          <Row>
            <Item justify="flex-start">
              <Typography>
                Start: &nbsp;
                {moment(lastSubmissionAttemptTime).format(
                  "YYYY-MM-DD hh:mm:ss"
                )}
              </Typography>
            </Item>
          </Row>
          <Row>
            <Item justify="flex-start">
              <Typography>
                End: &nbsp;
                {terminationTime
                  ? moment(terminationTime).format("YYYY-MM-DD hh:mm:ss")
                  : "-"}
              </Typography>
            </Item>
          </Row>
          <Row>
            <Item justify="flex-start">
              <Typography>
                Duration: &nbsp;
                {terminationTime ? `${duration}s` : "-"}
              </Typography>
            </Item>
          </Row>
          <Row>
            <Item justify="flex-start">
              <Typography>
                Executors: &nbsp;
                {instances}
              </Typography>
            </Item>
          </Row>
        </Container>
        <Row>
          {!hide && (
            <Item xs={6}>
              <Button
                color="secondary"
                onClick={() => handleDelete(appName)}
                startIcon={<DeleteIcon />}
              >
                DELETE
              </Button>
            </Item>
          )}
          {!hide && (
            <Item xs={6}>
              <Button fullWidth={true} variant="contained" color="primary">
                <Link href={`/apps/?name=${appName}`} as={`/apps/${appName}`}>
                  <a style={{ textDecoration: "none", color: color.white }}>
                    See more
                  </a>
                </Link>
              </Button>
            </Item>
          )}
        </Row>
      </CardContent>
    </Card>
  );
};

export default AppCard;
