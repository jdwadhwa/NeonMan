import react from "react";

import Newscard from "../newscard/newscard";

import useStyles from "./styles";

import { Grid, Grow, Typography } from "@material-ui/core";

function Newscards(props) {

    const classes  =useStyles();

  const infoCards = [
    { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
    {
      color: "#1565c0",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me some Technology news",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What is with PlayStation 5",
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from BBC NEWS",
    },
  ];


  if(props.articles.length===0)
  {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {
            infoCards.map( (ele)=>(
              <Grid item xs={12} sm={6} md={4} lg={3} className = {classes.infocard}>
                <div className={classes.card} style = {{backgroundColor:ele.color}}>
                  <Typography variant="h5">{ele.title}</Typography>
                {ele.info?<Typography variant = "h6">
                  <strong>
                  {ele.title.split(' ')[2]}
                  </strong> 
                  <br></br>
                  {ele.info}
                  </Typography> :null }
               <Typography variant = "h6">Try saying : <br></br><i>{ele.text}</i></Typography>
               
                </div>

              </Grid>
            ))
          }
        </Grid>
      </Grow>
    );
    
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {props.articles.map((ele, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <Newscard
              article={ele}
              activearticle={props.hightlightarticel}
              i={i}
            ></Newscard>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}

export default Newscards;
