import { Outlet } from "react-router-dom";
import Container from "../componetns/Container";
import Navbar from "../componetns/Navbar";
import ParticleBackground from "../componetns/ParticleBackground";

function Support() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
      <div>
        <ParticleBackground />
      </div>
      <Navbar />
      <div className="container mx-auto px-8 pt-24 lg:pt-40">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
export default Support;
