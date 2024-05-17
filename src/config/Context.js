
import { createContext, useState } from 'react';
import runChat from './api';



export const Context = createContext();

const ContextProvider = (props) => {

const [input, setInput] = useState("");
const [recentPrompt, setRecentPrompt] = useState("");
const [prevPrompt , setprevPrompt] = useState([]);
const [showResult, setShowResult] = useState(false);  
const [loading,setLoading] = useState(false);
const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        const response = await runChat(input);

        let responseArray = response.split("**");
        let newArry="";
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2!==1 ){
                newArry+=(responseArray[i])
            }else{
            newArry += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse = newArry.split("*").join("</br>")
        setResultData(newResponse);
        setLoading(false);
        setInput("")
    }

    

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setprevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent
    }
    return (
        <Context.Provider value={contextValue}> 
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;