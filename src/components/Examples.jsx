import React from 'react'
import { useState } from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import Section from './Section'

export default function Examples (){

    const [selectedTopic, setSelectedTopic] = useState()
    function handleClick(selectedButton) {

        console.log(selectedButton)
        setSelectedTopic(selectedButton)
    
      }
  return (
    <Section title="Examples" id="examples">
    
    <menu>
      <TabButton
        isSelected={selectedTopic === 'components'}
        onSelect={() => handleClick('components')}>
        Components
      </TabButton>
      {/* identifiers which you have written in this function should be equal to the object name within 
   examples object  */}

      <TabButton
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
      </TabButton>
    </menu>

    {/* the name of the object should be stored in selectedTopic usestate */}
    {/* initially we have stored here components within selectedTopic usestate as we will click the different 
    butttons the usestate will be updated */}
    {/* {selectedTopic} */}

    {!selectedTopic ? <p>Please Select a Topic</p> :

      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>

      </div>
    }

  </Section>
  )
}
