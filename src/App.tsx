import { useUserStore } from "./store"

function App() {

  const userStore = useUserStore();
  console.log(userStore)
  return (
    <>
    <p>{userStore.username}</p>
    </>
  )
}

export default App
