import { useUserStore } from "./store"
import TopBar from "./components/TopBar";
import FormElement from "./components/Form";

function App() {

  // const {username , email ,setUsername , setEmail} = useUserStore();
  
  return (
    <>

    <TopBar/>
    <FormElement/>
    </>
  )
}

export default App
