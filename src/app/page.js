"use client";

import heroImg from "../assets/hero.svg";
import { useEffect, useState } from "react";
import PropertyList from "@/components/PropertyList";
import Tabs from "@/components/Tabs";
import Toggle from "@/components/Toggle";
import Dropdown from "@/components/Dropdown";
import Skeleton from "@/components/Skeleton";

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
    value: 1,
  },
  {
    id: 2,
    label: "2 bedrooms",
    value: 2,
  }
];

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ properties, setProperties ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ activeTab, setActiveTab ] = useState([]);
  const [ superhost, setSuperhost  ] = useState(false);
  const [ propertyType, setPropertyType ] = useState({});

  const handleTabChange = (tabId) => {
    let tab = tabs.find(item => item.id == tabId);
    if(tab.id == 1 ) {
      setActiveTab([]);
    }
    else if(activeTab.find(item => item.id == tabId)) {
      setActiveTab(list => list.filter(item => item.id != tabId));
    } else {
      setActiveTab(oldArray => [...oldArray, tab]);
    }
  };

  const handleSuperhost = () => {
    setSuperhost(prevState => !prevState);
  };

  const handlePropertyChange = (typeId) => {
    if(Object.keys(propertyType) != 0 && propertyType.id == typeId) {
      setPropertyType({});
    } else {
      let type = propertyTypes.find(item => item.id === typeId);
      setPropertyType(type);
    }
  };

  const filterProperties = () => {
    const selectedLocations = activeTab.map(item => item.label);
    let filteredProperties;
    if(selectedLocations.length > 0) {
      filteredProperties = data.filter(item => selectedLocations.includes(item.location));
    } else {
      filteredProperties = data;
    }
    if(superhost) {
      filteredProperties = filteredProperties.filter(item => item.superhost);
    }
    if(Object.keys(propertyType) != 0) {
      filteredProperties = filteredProperties.filter(item => item.capacity.bedroom == propertyType.value);
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
  }, [activeTab, superhost, propertyType]);

  return (
    <main className="flex flex-col items-center pb-11">
      <div className="w-full h-[620px] relative">
        <img 
          src={ heroImg.src }
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="absolute left-[64px] lg:left-[140px] xl:left-[112px] top-[180px] z-10">
          <p className="text-primary-dark-blue text-[4rem] font-extrabold w-[550px] mb-2">Peace, nature, dream</p>
          <p className="text-primary-dark-blue text-2xl font-semibold w-[500px]">Find and book a great experience.</p>
        </div>

        <div className="absolute bottom-[-51px] w-full flex justify-center">
          <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-8 max-w-[1136px] w-[90%] border border-card-stroke bg-super-gray/95 rounded-xl">
            <Tabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ handleTabChange } />
            <div className="inline-flex flex-wrap gap-5 items-center mt-5 lg:mt-0">
              <Toggle label="Superhost" active={ superhost } setActive={ handleSuperhost } />
              <Dropdown label="Property type" options={ propertyTypes } activeType={ propertyType } setType={ handlePropertyChange }/>
            </div>
          </div>
        </div>
        
      </div>

      <div className="max-w-[1136px] xl:w-[90%] mt-[99px]">
        <p className="text-white-font font-bold text-2xl mb-8">Over 200 stays</p>
        {
          loading && 
          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2 xl:grid-cols-3">
            {
              [1,2,3,4,5,6].map(index => (
                <Skeleton key={ index } />
              ))
            }
          </div>
        }
        {
          properties && <PropertyList properties={ properties } />
        }
      </div>
      
    </main>
  );
};

export default Home;
