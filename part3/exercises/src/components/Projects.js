import data from './../data.json';
import { useState } from 'react';

export default function MyProjects () {
    const [index, setIndex] = useState(0)
    const projectData = data
    let projectItem = projectData[index]

    console.log(projectData.length)

    const handleClick = () => {
        if (index < projectData.length -1){
            setIndex(index+1)
        } else {
            setIndex(0)
        }
        
        
    }

    return(
        <div>
          <button onClick={handleClick} >Next</button>  
          <h2>{projectItem.patternName}</h2>
          <h3>By {projectItem.designer}</h3>
          <p>{projectItem.description}</p>
          <img src={projectItem.photoURL} alt={projectItem.description}/>
        </div>
    )

   
}