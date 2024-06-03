import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-[72px]">
            {
                properties.map((property) => (
                    <PropertyCard 
                        key={ property.id }
                        title={ property.title }
                        picture={ property.image }
                        description={ property.description }
                        capacity={ property.capacity }
                        superHost={ property.superhost }
                        price={ property.price }
                        rating={ property.rating }
                    />
                ))
            }
        </div>
    );
};

export default PropertyList;