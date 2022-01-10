import { styled, globalCss } from './global/stitches.config';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home';
import { Games } from './views/Games';
import { Emulators } from './views/Emulators';

const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});


function App() {
    
    globalStyles();
    
    const AppContainer = styled('div', {
        height: '100vh',
        backgroundColor: '$blue1',
        color: '$red11',
        fontFamily: 'Arial'
    })
    
    return (        
        <BrowserRouter>
            <AppContainer>
                <Header />
                <Routes>

                    <Route path="/" element={<Home />}/>
                    <Route path="/jogos" element={<Games />}/>
                    <Route path="/emuladores" element={<Emulators />}/>

                </Routes>
            </AppContainer>
                
        </BrowserRouter>
    )
}
    
    export default App
    