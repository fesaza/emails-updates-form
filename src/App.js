import "./App.css";
import { AppContainer, Button } from "./Components/Common/styles";
import EmailUpdatesForm from "./Components/EmailUpdates";
import useStore from "./Stores/store";

function App() {
  const { singUpResult, backToForm } = useStore((state) => ({
    singUpResult: state.result,
    backToForm: state.reset,
  }));
  return (
    <AppContainer>
      {singUpResult && !singUpResult.status && <EmailUpdatesForm />}
      {singUpResult && singUpResult.status}
      <div>{singUpResult && singUpResult.message}</div>
      {singUpResult && singUpResult.status && <Button onClick={backToForm}>Return</Button>}
    </AppContainer>
  );
}

export default App;
