import React from "react";
import HomeLayout from "./HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <div className="flex h-[100vh] w-full items-center justify-center bg-black">
                            <p className="text-5xl text-gray-700">404 | Page Not Found</p>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
