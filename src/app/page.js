"use client";

import heroImg from "../assets/hero-image.jpg";
import { useEffect, useState } from "react";
import PropertyList from "@/components/PropertyList";
import Tabs from "@/components/Tabs";
import Toggle from "@/components/Toggle";

const tabs = [
  {
    id: 1,
    label: "All Stays"
  },
  {
    id: 2,
    label: "Norway",
  },
  {
    id: 3,
    label: "Finland",
  },
  {
    id: 4,
    label: "Sweden",
  },
  {
    id: 5,
    label: "Switzerland",
  },
];

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ activeTab, setActiveTab ] = useState(tabs[0].id);
  const [ superhost, setSuperhost  ] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSuperhost = () => {
    setSuperhost(prevState => !prevState);
  };

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
          <p className="text-primary-dark-blue text-[4rem] font-extrabold w-[550px] mb-2">Peace, nature, dream</p>
          <p className="text-primary-dark-blue text-2xl font-semibold w-[500px]">Find and book a great experience.</p>
        </div>

        <div className="absolute bottom-[-51px] w-full flex justify-center">
          <div className="flex justify-between items-center px-10 py-8 max-w-[1136px] border border-card-stroke bg-super-gray/95 rounded-xl">
            <Tabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ handleTabChange } />
            <div>
              <Toggle label="Superhost" active={ superhost } setActive={ handleSuperhost } />
            </div>
          </div>
        </div>
        
      </div>


      <div className="max-w-[1136px] mt-[99px]">
        <p className="text-white-font font-bold text-2xl mb-8">Over 200 stays</p>
        {
          data && <PropertyList properties={ data } />
        }
      </div>
      
    </main>
  );
};

export default Home;
