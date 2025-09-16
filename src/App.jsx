import { createRoot } from "react-dom/client"
import "materialize-css/dist/css/materialize.min.css"

const App = () => {
  const appStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    background:
      "radial-gradient(ellipse at 0% 0%, black, #10d4a9, black), radial-gradient(ellipse at 100% 100%, black, #10d4a9, black)",
    backgroundSize: "24px 24px, 24px 24px",
    backgroundBlendMode: "screen",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'"
  }

  return <div style={appStyle}></div>
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(<App />)
