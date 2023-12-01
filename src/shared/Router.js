import { BrowserRouter, Route, Routes } from "react-router-dom";

import Post from "../pages/Post";
import Main from "../pages/Main";

const Router = () => {
  // 라우터의 기능을 담은 코드
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
