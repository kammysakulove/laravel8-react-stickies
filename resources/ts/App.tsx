import AppProvider from "./providers/app";
import AppRouter from "./routes";

const App = () => {
  console.log("app render");

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
