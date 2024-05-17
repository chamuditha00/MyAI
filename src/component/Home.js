import './Component.css';
import logo from '../assets/png/logo.png';
import Card from './Card';
import Para from './Para';

const Home =()=>{
    return(
        <div>
             
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        
      </header>
      <h1>Welcome to MyAI</h1>
      <Card topic="Get Started"/>
      <p>Explore MyAI and discover the possibilities</p>
      <Para text=" Welcome to your personal AI assistant, powered by Gemini by Google. I&apos;m here to revolutionize the way you navigate your digital world, combining the cutting-edge technology of Google with personalized assistance tailored to your needs.

With Gemini, I bring the power of Google&apos;s vast knowledge and intelligence directly to you. Whether you need assistance with tasks, answers to questions, or guidance on various topics, I&apos;m equipped to handle it all with efficiency and accuracy.

My integration with Gemini means I can tap into Google&apos;s powerful capabilities, from providing real-time information and updates to helping you stay organized and on top of your busy schedule. With access to Google&apos;s vast array of services, I can assist you in ways that are both seamless and intuitive.

Rest assured, your privacy and security are paramount. I operate within Google&apos;s rigorous standards to ensure the confidentiality of your data, so you can trust me with your most sensitive information.

Together, let&apos;s embark on a journey of productivity, efficiency, and innovation. With Gemini by Google as our foundation, the possibilities are endless. Let&apos;s make every interaction meaningful and every task effortless.
"/>


        </div>


    )
}

export default Home;