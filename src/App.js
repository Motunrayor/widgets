import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Example from './components/Accordion/search/button';
import Search from './components/Accordion/search/search';
// import "./reset.css"

const items = [
   {
      title: "What is react",
      content: "React is a javascript library framework",
   },
   {
      title: "Why react",
      content: "It is my best favourite js library",
   },
   {
      title: "How do you use react",
      content: "You use react by creating components",
   }
];

class App extends React.Component {
   render() {
      return (
         <div>
            <Accordion items={items}/>
            <Search/>
            <Example/>
         </div>
      )
   }
}

export default App;
