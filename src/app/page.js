"use client";

import heroImg from "../assets/hero-image.jpg";
import { useEffect, useState } from "react";
import PropertyList from "@/components/PropertyList";

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <main className="flex flex-col items-center pb-11">
      <div className="w-full relative">
        <img 
          src={ heroImg.src }
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <div className="absolute left-[140px] top-[180px] z-10">
          <p className="text-primary-dark-blue text-[4rem] font-bold w-[500px]">Peace, nature, dream</p>
          <p className="text-primary-dark-blue text-2xl font-semibold w-[500px]">Find and book a great experience.</p>
        </div>
      </div>

      <div className="max-w-[1136px] mt-12">
        <p className="text-white-font font-bold text-2xl mb-8">Over 200 stays</p>
        {
          data && <PropertyList properties={ data } />
        }
      </div>
      
    </main>
  );
};

export default Home;
