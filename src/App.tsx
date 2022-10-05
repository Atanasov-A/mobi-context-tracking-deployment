import { ThemeProvider } from "@emotion/react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AppBarWithMainLayout } from "./components/layout/AppBarWithMainLayout";
import { theme } from "./components/theme/CustomTheme";

function App() {
  return (
    <div className="App">
      {/* <HashRouter> */}
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AppBarWithMainLayout />
        </LocalizationProvider>
      </ThemeProvider>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
