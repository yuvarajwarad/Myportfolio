import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import WorkExperience from "./components/WorkExperiance";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar></Navbar>
     <div className='container mt-24 mx-auto px-12 py-4'>
      <HeroSection></HeroSection>
      <Achievement></Achievement>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
      <WorkExperience></WorkExperience>
      <EmailSection></EmailSection>     
      </div>
      <Footer></Footer>
    </main>
  );
}
