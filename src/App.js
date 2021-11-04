import { Route, Routes } from "react-router";
import "./App.css";
import { AppContainer } from "./Components/Common/styles";
import { UpdateResult } from "./Components/Common/UpdateResult";
import EmailUpdatesForm from "./Components/EmailUpdates";

function App() {
  
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<EmailUpdatesForm />} />
        <Route path="/result" element={<UpdateResult />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
