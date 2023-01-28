import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Modal, Navbar, ScrollTop } from "./components";
import { ContactPage, Home, Portfolio, Price, Group } from "./pages";
import { AppContextProvider } from "./context/appContext";
function App() {
  return (
    <Router>
      <AppContextProvider>
        <Navbar />
        <Modal />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/group" element={<Group />} />
        </Routes>
        <Footer />
      </AppContextProvider>
    </Router>
  );
}

export default App;
