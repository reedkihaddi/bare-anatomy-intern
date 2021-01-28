import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Info from "./Components/Info/info";
import Landing from "./Components/Landing/landing";

// SASS, styled components?
// TODO: Fix class names :/
// TODO: Clean up ugly code

function App() {
  return (
    <div className="App">
      {/*
      Header contains the notification of the discount
      Landing contains main heading and the products 
      Info contains discount and about the beauty game
      Footer is just images of products to be displayed in the end
      */}
      <Header></Header>
      <Landing></Landing>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
