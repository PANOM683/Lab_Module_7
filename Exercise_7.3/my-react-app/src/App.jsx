import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <EmojiProvider>
      <Emoji />
      <BitcoinRates />
    </EmojiProvider>
  );
}

export default App;
