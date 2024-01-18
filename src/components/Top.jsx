import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import khushi from"../assets/khushi.jpg";
import kanishka from"../assets/kanishka.jpg";
import team from "../assets/team.jpg"

const TopHome = () => {
  const [photos] = useState([
    "https://th.bing.com/th/id/OIP.KL9sUKbjNB4-fRD7aaSZgwHaDr?rs=1&pid=ImgDetMain",
    "https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?size=626&ext=jpg&ga=GA1.2.1157295257.1695267253&semt=sph",
    "https://wallpaperset.com/w/full/f/d/f/51681.jpg",
    "https://th.bing.com/th/id/OIP.Xf04nzbVigYyJaa8dV7frAHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://i.pinimg.com/originals/f9/38/44/f938447d10dfc9b23b98ce2e0794e4ef.jpg",
    "https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Best-Girl-Friends-Watercolor-Painting-Graphics-59961253-1.jpg",
    "https://th.bing.com/th/id/OIP.a9ratyGZ6avcRXyfSe7OFwHaEn?w=295&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.jBATus5q_8y9Qsi-ufjOeQHaEg?rs=1&pid=ImgDetMain",
    "https://media.licdn.com/dms/image/C4D12AQE990Rikn9-Pg/article-cover_image-shrink_720_1280/0/1593506720435?e=2147483647&v=beta&t=0qQ9KbOrcebnc9QahQlT1SZI1_3qHmpiKlcHMMSLwzw",
  ]);
  const [currPhoto, setCurrPhoto] = useState(0);

  const handleInc = () => {
    if (currPhoto === photos.length - 1) {
      setCurrPhoto(0);
    } else {
      setCurrPhoto(currPhoto + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleInc();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currPhoto]);

  return (
    <div className="bg-gradient-to-t from-[#f8f6f8] to-[#c3f5dc]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-10 lg:py-10">
        <div className="w-full lg:w-1/2 h-96 lg:h-auto relative overflow-hidden">
          <img
            src={photos[currPhoto]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
              {[...Array(photos.length)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  value={index}
                  name="photo"
                  checked={currPhoto === index}
                  onChange={(e) => setCurrPhoto(+e.target.value)}
                  className="hidden"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10">
          <h1 className="font-semibold text-4xl lg:text-5xl text-gray-800 mb-4">
            Break The  <span className="text-pink-500">Limit</span>
          </h1>
          <p className="text-2xl text-black-600 mb-4">
            Being creative is not a hobby, it is a way of life for every artist.
            The best things to pursue Your Dreams💗💗
          </p>
          <button className="bg-purple-300 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-500 mb-6">
            Know More
          </button>
          <div className="flex items-center justify-center lg:justify-start mb-8">
            <img
              src={kanishka}
              alt=""
              className="w-12 h-12 object-cover rounded-full border-white border-2"
            />
            <img
              src={khushi}
              alt=""
              className="w-12 h-12 object-cover rounded-full border-white border-2 -ml-2"
            />
            <img
              src={team}
              alt=""
              className="w-12 h-12 object-cover rounded-full border-white border-2 -ml-2"
            />
            <div className="w-12 h-12 bg-blue-500 rounded-full border-white border-2 -ml-2 flex items-center justify-center">
              <BsArrowUpRight className="text-white w-6 h-6" />
            </div>
          </div>
          <p className="text-2xl text-black-600">Meet Our  Artist</p>
        </div>
      </div>
    </div>
  );
};

export default TopHome;
