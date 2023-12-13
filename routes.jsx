import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Index from "./pages/Index"
import Post from "./pages/Post"

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/painel" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/postagem/:slug" element={<Post />} />
    </Routes>
  )
}

export default MainRoutes