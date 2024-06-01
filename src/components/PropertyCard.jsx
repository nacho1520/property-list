const PropertyCard = ({ title, picture, description, capacity }) => {
    return(
        <div className="w-[357px]">
            <div className="w-full relative">
                <img 
                    className="rounded-t-xl"
                    src={ picture }
                />
            </div>
            <div className="w-full">
                <p>{ title }</p>
            </div>
        </div>
    ); 
};


export default PropertyCard;