import "./App.css";
import { Avatar } from "./components/Avatar";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="w-90 md:w-lg bg-card-bg h-170 rounded-2xl relative">
      <Header />
      <Avatar />
    </main>
  );
}

export default App;
