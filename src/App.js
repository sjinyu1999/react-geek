import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由 path 和 组件对应关系 */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
