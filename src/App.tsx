import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import "./App.css";
import { About } from "./components/About";
import { Avatar } from "./components/Avatar";
import { BulletList } from "./components/BulletList";
import { Header } from "./components/Header";

const items = [
  {
    icon: FiMail,
    text: "alvarohibide@gmail.com",
  },
  {
    icon: GrLocation,
    text: "São Paulo, Brasil",
  },
  {
    icon: IoBriefcaseOutline,
    text: "Netcracker do Brasil",
  },
];

function App() {
  return (
    <main className="w-90 md:w-lg bg-card-bg h-170 rounded-2xl relative text-primary-text flex flex-col items-center">
      <Header />
      <Avatar />
      <About />
      <BulletList items={items} />
    </main>
  );
}

export default App;
