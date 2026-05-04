import Aboutus from "./Aboutus";
import { Wellcome } from "./wellcome";
import Display from "./display";
import Name from "./Name";
import Counter from "./Counter";
import UseMemo from "./UseMemo";
import Callback from "./Callback";
import Sum from "./Sum";


function App () {
   const fname = "kartik";
  return(
    /*empty fragments  are also give the div tags*/<div> 
    <h1>Welcome to the learn react!</h1>
    <h2>Welcome to the learn react!</h2>
   
       <Aboutus />
       <Wellcome/> 
       <Display name = {fname}/>
       <Name/>
       <Counter />
       <UseMemo/>
       <Callback />
       <h1>Hello World</h1>
       <Sum />
    </div>
  )
}

export default App;