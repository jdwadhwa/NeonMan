
import react,{useEffect,useState} from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

import useStyles from "./styles";

import Newscards from "./components/newscards/newscards";

import wordstonumbers from "words-to-numbers";


const alankey ="9a50f9d9d2b2637c0767d1ca0d97f1782e956eca572e1d8b807a3e2338fdd0dc/stage";

function App ()
{
    const classes = useStyles();

    const [allarticles,setarticles] = useState([]);

    const[hightlightarticel,sethighlightarticle] = useState(-1);
    
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand : ({command,number,articles})=>{

                if (command === 'newHeadlines') {
                  setarticles(articles);
                  sethighlightarticle(-1);
                }
                else if(command==="highlighted_article")
                {
                  sethighlightarticle((prevstate)=>prevstate+1);
                }
                else if(command==="open")
                {
                  var no;
                  if(number.length>=2)
                  {
                      no = wordstonumbers(number,{fuzzy:true})
                  }
                  else{
                    no = number
                  }

                    if(no>20)
                    {
                      alanBtn().playText("Please tell a valid number");
                    }
                    else
                    {
                      window.open(articles[no-1].url, "_blank");
                      alanBtn().playText("opening....");
                    }
                  console.log(number);
                  console.log(articles);
                  
                }
                else if(command == "tell_a_joke")
                {
                  fetch("https://icanhazdadjoke.com/",{
                    headers:{
                      "Accept": "application/json",
                    }
                  })
                    .then(function (response) {
                      
                      return response.json();
                    })
                    .then(function (data) {
                      // `data` 
                      console.log(data.joke); 
                      alanBtn().playText(data.joke);
                    });
                }

            }
        })
    },[]  )


    return (
      <div className = "jai">
        <div className={classes.logoContainer}>
          <img
            src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
            className="adjust"
          ></img>
        </div>
        <Newscards articles={allarticles} hightlightarticel={hightlightarticel}></Newscards>
      </div>
    );
}



export default App;