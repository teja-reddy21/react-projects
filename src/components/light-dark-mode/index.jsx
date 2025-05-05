import './theme.css'
import useLocalStroage from "./useLocalStroage"

export default function LightDarkMode(){
const [theme,setTheme]=useLocalStroage("theme","dark");


function handelToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
}
console.log(theme)
    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World !</p>
          <button onClick={handelToggleTheme}>Change Theme</button>
        </div>
    </div>
}