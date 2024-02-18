import Navbar from './component/Navbar'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {

  const theme = createTheme({
    palette:{
      primary: {
        main: '#D7D7D7'}
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
      </ThemeProvider>
    </>
  )
}

export default App
