import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
    return(
        <div className="grid grid-cols-3 gap-x-8 gap-y-[72px]">
            {
                properties.map((property) => (
                    <PropertyCard 
                        key={ property.id }
                        title={ property.title }
                        picture={ property.image }
                        description={ property.description }
                        superHost={ property.superhost }
                    />
                ))
            }
        </div>
    );
};

export default PropertyList;