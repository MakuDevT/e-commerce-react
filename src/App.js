import Home from "./components/routes/home/home_component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
      SS
    </Routes>

  );
}

export default App;
