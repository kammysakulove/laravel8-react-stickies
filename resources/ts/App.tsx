import AppProvider from "./providers/app.tsx";
import AppRouter from "./routes";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
