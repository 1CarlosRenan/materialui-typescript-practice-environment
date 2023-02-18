import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Página Inicial</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default AppRoutes;
