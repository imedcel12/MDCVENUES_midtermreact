import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/Sidebar.jsx";
import SpecificVenue from "./components/SpecificVenue";
import VenuesList from "./components/VenuesList";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import Exam from "./pages/Exam";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/library" element={<Library />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/venueslist" element={<VenuesList />} />
            <Route path="/api/venues/:id" element={<SpecificVenue />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
