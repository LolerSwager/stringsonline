import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/*  <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}
