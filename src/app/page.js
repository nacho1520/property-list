import heroImg from "../assets/hero-image.jpg";

const Home = () => {
  return (
    <main className="">
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
      
    </main>
  );
};

export default Home;
