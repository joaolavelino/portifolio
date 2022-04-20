import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import About from "./pages/page-about";
import Design from "./pages/page-design";
import DesignProject from "./pages/page-design-project";
import WebDev from "./pages/page-dev";
import WebDevProject from "./pages/page-dev-project";
import Error from "./pages/page-error";
import Home from "./pages/page-home";
import Music from "./pages/page-music";
import Visual from "./pages/page-visual";
import VisualGallery from "./pages/page-visual-gallery";

function App() {
  const [lang, setLang] = useState("pt");

  console.log(lang);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header lang={lang} setLang={setLang} />

        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Home lang={lang} />} key="page1" />
            <Route path="/about" element={<About lang={lang} />} key="page2" />
            <Route
              path="/webdev"
              element={<WebDev lang={lang} />}
              key="page3"
            />
            <Route
              path="/webdev/project/:id"
              element={<WebDevProject lang={lang} />}
              key="page4"
            />
            <Route
              path="/design"
              element={<Design lang={lang} />}
              key="page5"
            />
            <Route
              path="/design/project/:id"
              element={<DesignProject lang={lang} />}
              key="page6"
            />
            <Route
              path="/visual"
              element={<Visual lang={lang} />}
              key="page7"
            />
            <Route
              path="/visual/gallery/:id"
              element={<VisualGallery />}
              key="page8"
            />
            <Route path="/music" element={<Music lang={lang} />} key="page9" />
            <Route
              path="/webdev/project/:id"
              element={<WebDevProject lang={lang} />}
              key="page10"
            />
            <Route
              path="/design/project/:id"
              element={<DesignProject lang={lang} />}
              key="page11"
            />
            <Route path="*" element={<Error lang={lang} />} key="page12" />
          </Routes>
        </AnimatePresence>
        <Footer lang={lang} />
      </BrowserRouter>
    </>
  );
}

export default App;
