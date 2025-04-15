import "./App.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./HomePage.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <HomePage />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
