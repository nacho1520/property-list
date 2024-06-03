import homeImg from "../assets/Home_duotone.svg";
import userImg from "../assets/User_alt_duotone.svg";
import star from "../assets/Starfill.svg";

const PropertyCard = ({ title, picture, description, capacity, superHost, price, rating }) => {
    return(
        <div className="w-[357px] border border-card-stroke rounded-xl pb-4">
            <div className="w-full h-[200px] relative mb-5">
                <img 
                    className="rounded-t-xl"
                    src={ picture }
                />
                {
                    superHost && 
                    <span className="absolute top-[8px] left-[8px] px-3 py-1 rounded-xl bg-super-gray text-[0.625rem] font-semibold text-white-font">
                        Superhost ⭐️  
                    </span>
                }
            </div>
            <div className="w-full px-5">
                <p className="text-white-font font-bold text-base mb-4">{ title }</p>
                <p className="font-medium text-sm text-gray-font min-h-[100px]" >{ description }</p>
                <div className="inline-flex flex-wrap gap-4 mt-4">
                    <div className="inline-flex flex-wrap gap-1 items-center">
                        <img 
                            src={ homeImg.src }
                            width={ 24 }
                            height={ 24 }
                        />
                        <p className="text-gray-font font-normal text-xs">{ capacity.bedroom + " " }bedroom</p>
                    </div>
                    <div className="inline-flex flex-wrap gap-1 items-center">
                        <img 
                            src={ userImg.src }
                            width={ 24 }
                            height={ 24 }
                        />
                        <p className="text-gray-font font-normal text-xs">{ capacity.people + " " }guests</p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-t border-t-card-stroke pt-5 mt-4">
                    <p className="text-white-font text-xl font-bold">${ price }<span className="text-gray-font text-sm font-normal">/night</span></p>
                    <div className="inline-flex flex-wrap gap-1 items-center">
                        <img 
                            src={ star.src }
                            width={ 24 }
                            height={ 24 }
                        />
                        <p className="text-white-font font-bold text-sm">{ rating }</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
};


export default PropertyCard;