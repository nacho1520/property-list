"use client";

import heroImg from "../assets/hero-image.jpg";
import { useEffect, useState } from "react";
import PropertyList from "@/components/PropertyList";
import Tabs from "@/components/Tabs";
import Toggle from "@/components/Toggle";
import Dropdown from "@/components/Dropdown";

const tabs = [
  {
    id: 1,
    label: "All Stays",
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

const propertyTypes = [
  {
    id: 1,
    label: "1 bedroom",
  },
  {
    id: 2,
    label: "2 bedrooms",
  }
];

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ properties, setProperties ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ activeTab, setActiveTab ] = useState(tabs[0].id);
  const [ superhost, setSuperhost  ] = useState(false);

  const handleTabChange = (tabId) => {
    console.log('Cambio la tab');
    setActiveTab(tabId);
  };

  const handleSuperhost = () => {
    setSuperhost(prevState => !prevState);
  };

  const filterProperties = () => {
    const location = tabs.find(tab => tab.id === activeTab);
    console.log(location);
    let filteredProperties;
    if(location.label != "All Stays") {
      filteredProperties = data.filter(item => item.location == location.label );
    } else {
      filteredProperties = data;
    }
    if(superhost) {
      filteredProperties = filteredProperties.filter(item => item.superhost);
    }
    return filteredProperties;
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);



  useEffect(() => {
    let filtered = filterProperties();
    setProperties(filtered);
  }, [activeTab, superhost]);

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
          <div className="flex justify-between items-center px-10 py-8 max-w-[1136px] w-[90%] border border-card-stroke bg-super-gray/95 rounded-xl">
            <Tabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ handleTabChange } />
            <div className="inline-flex flex-wrap gap-5 items-center">
              <Toggle label="Superhost" active={ superhost } setActive={ handleSuperhost } />
              <Dropdown label="Property type" options={ propertyTypes }/>
            </div>
          </div>
        </div>
        
      </div>


      <div className="max-w-[1136px] w-[90%] mt-[99px]">
        <p className="text-white-font font-bold text-2xl mb-8">Over 200 stays</p>
        {
          properties && <PropertyList properties={ properties } />
        }
      </div>
      
    </main>
  );
};

export default Home;
