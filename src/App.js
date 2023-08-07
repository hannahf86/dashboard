import { ColorModeContext, useMode } from "./Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import TopBar from "./Global/TopBar"
import SideBar from './Global/SideBar';

import Dashboard from './Scenes/Dashboard';
import Team from './Scenes/Team';
import Invoices from './Scenes/Invoices';
import Contacts from './Scenes/Contacts';
// import Bar from './Scenes/Bar';
import Form from './Scenes/Form';
// import Line from './Scenes/Line';
// import Pie from './Scenes/Pie';
import FAQ from './Scenes/FAQ';
// import Geography from './Scenes/Geography';
import Calendar from './Scenes/Calendar';


function App() {
  const [theme, colorMode] = useMode();

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<Calendar />} />
            </Routes>


          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
