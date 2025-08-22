import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Header />

      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Blog />
                <Contact />
              </>
            }
          />

          {/* Blog Post Page */}
          <Route path="/blog/:slug" element={<BlogPage />} />

          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm bg-gray-dark space-y-5">
        <p>&copy; {new Date().getFullYear()} Ege Olgun. All rights reserved.</p>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
