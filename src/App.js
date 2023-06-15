import Home from "./components/routes/home/home_component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
      SS
    </Routes>

  );
}

export default App;
