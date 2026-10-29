import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "./components/app/SiteShell";
import Home from "./pages/Home";
const Companies = lazy(() => import("./pages/Companies"));
const Group = lazy(() => import("./pages/Group"));
const Model = lazy(() => import("./pages/Model"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const titles: Record<string, string> = {
  "/": "Um grupo. Novas possibilidades.",
  "/grupo": "O grupo",
  "/empresas": "Nossas empresas",
  "/modelo": "Como crescemos",
  "/contato": "Vamos conversar",
  "/privacidade": "Privacidade",
};
function LegacyRedirect({ path }: { path: string }) {
  const location = useLocation();
  return <Navigate to={`${path}${location.search}${location.hash}`} replace />;
}
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `Logica — ${titles[pathname] || "Página não encontrada"}`;
  }, [pathname]);
  return (
    <SiteShell>
      <Suspense
        fallback={
          <div className="container loading-state" role="status">
            Carregando página…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupo" element={<Group />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/modelo" element={<Model />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<Privacy />} />
          {[
            ["index", "/"],
            ["grupo", "/grupo"],
            ["empresas", "/empresas"],
            ["modelo", "/modelo"],
            ["contato", "/contato"],
            ["privacidade", "/privacidade"],
          ].map(([old, path]) => (
            <Route
              key={old}
              path={`/${old}.html`}
              element={<LegacyRedirect path={path} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </SiteShell>
  );
}
