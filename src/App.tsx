import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Card, CardDescription, CardTitle } from "./components/ui/card";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ModeToggle />
        <Card>
          <CardTitle>Hello</CardTitle>
          <CardDescription>dsaddasd</CardDescription>
          <Button>zdadadsada</Button>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default App;
