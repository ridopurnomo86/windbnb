import React from "react";
import AppBar from "./components/Appbar";
import { FilterProvider } from "./context/FilterContext";
import ApartmentList from "./components/data-display/ApartmentList";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => (
  <FilterProvider>
    <main className="container">
      <AppBar />
      <ApartmentList />
    </main>
    <div className="container">
      <Footer />
    </div>
  </FilterProvider>
);

export default App;
