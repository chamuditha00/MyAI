import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Context } from '../config/Context';
import './Prompt.css';
const Prompt=()=>{


    const {onSent,setInput,input,recentPrompt,resultData ,loading, showResult} = useContext(Context);
    return(
    <div>
            <Routes>
                <Route path="/prompt/*" element={<Prompt/>}></Route>
            </Routes>
        



        <div>
            <>
                {!showResult
                ?<>
                <div>
                <input class="c-checkbox" type="checkbox" id="checkbox"/>
                <div class="c-formContainer">
  <form class="c-form" action="">
    <input class="c-form__input" placeholder="Enter Your Problem?" onChange={(e)=>{
        setInput(e.target.value);
    } } value={input} type="text" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" />
    <label class="c-form__buttonLabel" for="checkbox">
      <button class="c-form__button" type="button" onClick={()=>{
        onSent()
    }}>Send</button>
    </label>
    <label class="c-form__toggle" for="checkbox" data-title="solve your problem"></label>
  </form>
</div>
                </div>


                </>
                :<div>
                    <p className="user">
                        User:{recentPrompt}
                    </p>
                    <div>
                        {loading?<div>
                            <h1>Loading...</h1>
                        </div>:<div>
                        <p className="bot">Bot:</p>
                        <p className="result" dangerouslySetInnerHTML={{__html:resultData}}></p>
                        
                        <Link to="/prompt" className="button-19">Ask Another Question</Link>
                        </div> }
                    </div>
                </div>


                    }
            </>
        </div>
    </div>
    )
}

export default Prompt;