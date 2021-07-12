import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './MoviesContext';

import './styles/global.scss'
import './styles/SideBar.scss'
import './styles/Content.scss'

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )
}