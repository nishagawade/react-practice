import Header from "./components/Header";
import ComponentsImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import configImg from './assets/config.png'
import stateManageMent from './assets/state-mgmt.png'
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
import  CoreConcepts  from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


// making reusable function and using it as a component passing props into it 
// function CoreConcept(props){
//   return(
//    <li>
//       <img src={props.img} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.desc}</p>
//    </li>  
//   )
// }


//making reusable component using object destructuring from object CORE_CONCEPTS from data.js
// function CoreConcept({image , title , description}){
//   return(
//    <li>
//       <img src={image} alt="" />
//       <h3>{title}</h3>
//       <p>{description}</p>
//    </li>  
//   )
// }



function App() {

  //without useState the function will get executed but there will be no changes in ui because it is already 
  //executed once because of usestate the component gets re-executed and we see changes in ui

  // const [selectedTopic, setSelectedTopic] = useState()

  //name of what we write in usestate should be equal to the object name if we are accessing object from another 
  // file 

  // function handleClick(selectedButton) {

  //   console.log(selectedButton)
  //   setSelectedTopic(selectedButton)

  // }

  return (
    <>
      <Header />

      <main>
        {/* <section id='core-concepts'>
          <h2>Core concepts</h2> */}
          {/* <ul> */}
            {/* these are custom components which I have made and props are written within it */}
            {/* <CoreConcept 
           title = "React"
           img = {ComponentsImg}
           desc = 'Welcome to react app'
          />
          <CoreConcept
           title = 'Prop'
           img = {jsxImg}
           desc = 'Props are used to pass data within components'
          />
          <CoreConcept
          title = 'Hooks'
          img = {configImg}
          desc = 'Hooks in react are used for state management'
          />
          <CoreConcept
          title = 'Webapp'
          img = {stateManageMent}
          desc = 'Webapps are more faster than websites '
          /> */}

            {/* Alternative syntax of props if we need to extract data from another file */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* we can render an array of objects into jsx using map method , here we are taking data from 
            CORE_CONCEPTS array from data.js */}

            {/* {
              CORE_CONCEPTS.map((conceptItem) => {
                return(
                 <CoreConcept key = {conceptItem.title} {...conceptItem}/>
                 //here we are calling CoreConcept Component and passing props from CORE_CONCEPTS array from data.js . we have used map method because we can render an array of objects in jsx using map method
                 
                )
              })
            } */}

          {/* </ul>
        </section> */}
        <CoreConcepts/>
        {/* <section id="examples"> */}
          {/* <h2>Examples</h2> */}
          {/* <menu> */}
            {/* <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleClick('components')}>
              Components
            </TabButton> */}
            {/* identifiers which you have written in this function should be equal to the object name within 
         examples object  */}

            {/* <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleClick('jsx')}>
              JSX
              </TabButton>

            <TabButton 
            isSelected={selectedTopic === 'props'}
             onSelect={() => handleClick('props')}>
              Props
            </TabButton>

            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleClick('state')}>
            State
            </TabButton> */}
          {/* </menu> */}

          {/* the name of the object should be stored in selectedTopic usestate */}
          {/* initially we have stored here components within selectedTopic usestate as we will click the different 
          butttons the usestate will be updated */}
          {/* {selectedTopic} */}

          {/* {!selectedTopic ? <p>Please Select a Topic</p> :

            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>

            </div>
          } */}

        {/* </section> */}
      
      <Examples/>
      
      </main>

    </>
  );
}

export default App;
