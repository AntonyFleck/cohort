import { useState} from "react";

// export default function App(){
//   return <CardWrapper InnerComponent={TextComponent}/>
// }

// function TextComponent(){
//     return <div>
//         hi there
//     </div>
// }


// function CardWrapper({InnerComponent}){
//     return <div style={{border:"2px solid black"}}>
//         <InnerComponent/>
//     </div>
// }

//cleaner way 

export default function App(){
    return <>
    <CardWrapper>
        <TextComponent/>
    </CardWrapper>
    <CardWrapper>
        hi there
    </CardWrapper>
    </>
  }
  
  function TextComponent(){
      return <div>
          <h3>hi there</h3>
      </div>
  }
  
  
  function CardWrapper({children}){
      return<>
        {/* <div style={{border:"2px solid black"}}>
          {children.CardWrapper}
        </div>
        <div style={{border:"2px solid black"}}>
          {children.TextComponent}
        </div> */}
        <div style={{border:"2px solid black"}}>
          {children}
        </div>
      
      </> 
  }
