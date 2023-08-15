import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
