import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import Benefits from "../components/home/benefits";
import Brands from "../components/home/brands";
import { Engage } from "../components/home/engage";
import Footer from "../components/home/footer";
import Hero from "../components/home/hero";
import Testimonials from "../components/home/testimonial";
import Layout from "../components/layout";

export default function Home() {
  const testimonies = [
    {
      text: "Working remotely has allowed me to have a better work-life balance. I'm able to take care of my family while still being able to work and advance my career",
      author: "Arianna Huffington",
      company: "Co-Founder of Huffington Post",
      image: "0720_pale-removebg-preview.png",
    },
    {
      text: "I believe the future of work is remote.",
      author: "Tim Ferriss",
      company: "Author and Podcast Host",
      image: "UU_TimFerriss_Viridian_Dark-1024x1024-removebg-preview.png",
    },
    {
      text: "The future of work is remote and distributed. It's here, it's happening, and it's the best thing that ever happened to the workforce.",
      author: "Jason Fried",
      company: " Co-Founder of Basecamp",
      image: "03Corner-superJumbo-v2-removebg-preview.png",
    },
    {
      text: "Remote work is the future of work, and it's happening now.",
      author: "Jack Ma",
      company: "Founder of Alibaba Group",
      image: "licensed-image-removebg-preview.png",
    },
  ];

  return (
    <Layout home>
      <Hero />
      <Benefits />
      <Brands />
      {/* <Engage /> */}
      <Testimonials testimonies={testimonies} />
      <Footer />
    </Layout>
  );
}
