import React, { Fragment, useState, useEffect } from "react";
import { random } from "lodash";
import axios from "axios";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";

//mui
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const App = () => {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json";
      try {
        const response = await axios.get(url);
        console.log(response);
        setQuotes(response.data);
        setQuote(response.data[random(0, response.data.length - 1)]);
      } catch {
        setError("Can't connect to server!");
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setQuote(quotes[random(0, quotes.length - 1)]);
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "white" }}
        >
          Quotes
        </Typography>
      </AppBar>
      {error ? (
        <Fragment>
          <Paper className="paper">
            <Typography variant="h4" align="center">
              {error}
            </Typography>
          </Paper>
        </Fragment>
      ) : (
        <Fragment>
          <Paper className="paper">
            <Typography variant="h4">{quote.quote || <Skeleton/>}</Typography>
            <Typography variant="h5" align="right">
              -{quote.author || <SkeletonTheme color="#212121" highlightColor="#212121"></SkeletonTheme><Skeleton/></SkeletonTheme>;}
            </Typography>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Link href="http://facebook.com">
                  <IconButton>
                    <TwitterIcon color="primary" />
                  </IconButton>
                </Link>
                <Link href="http://facebook.com">
                  <IconButton>
                    <FacebookIcon color="primary" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Button
                  className="button"
                  color="primary"
                  variant="contained"
                  onClick={handleClick}
                >
                  New Quote
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
