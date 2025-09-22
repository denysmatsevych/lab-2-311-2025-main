import "./App.css";
import reactLogo from "./assets/react.svg";
import Card from "./components/Card";
import CountButton from "./components/CountButton";
import Image from "./components/Image";
import Link from "./components/Link";
import Typography from "./components/Typography";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Typography variant="div">
        <Link href="https://react.dev" target="_blank" className="logo-link">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </Link>
        <Link href="https://vite.dev" target="_blank">
          <Image src={viteLogo} className="logo vite" alt="Vite logo" />
        </Link>
      </Typography>
      <Typography variant="h1" title="Vite + React" />
      <CountButton />
      <Card></Card>
      <Typography variant="p">
        Edit <code>src/App.jsx</code> and save to test HMR
      </Typography>
      <Typography
        variant="p"
        title="Click on the Vite and React logos to learn more"
        className="read-the-docs"
      />
    </>
  );
}

export default App;
