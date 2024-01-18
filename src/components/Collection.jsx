import React from "react";
import ReactCardCarousel from "react-card-carousel";

const Collection = () => {
  const containerStyle = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "bg-gradient-to-t from-[#f8f6f8] to-[#c3f5dc]",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px", 
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", 
    width: "90%", 
    maxWidth: "1000px", 
  };

  const cardStyle = {
    width: "70vw", 
    maxWidth: "700px", 
    height: "400px", 
    textAlign: "center",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "0px", 
  };

  const cardImages = [
    "https://source.unsplash.com/400x600/?painting",
    "https://source.unsplash.com/400x600/?art",
    "https://source.unsplash.com/400x600/?drawing",
    "https://source.unsplash.com/400x600/?painting",
    "https://source.unsplash.com/400x600/?texture",
    "https://source.unsplash.com/400x600/?painting,art",
    "https://source.unsplash.com/400x600/?art,texture",
    "https://source.unsplash.com/400x600/?drawing,art",
    "https://source.unsplash.com/400x600/?painting,canvas",
    "https://source.unsplash.com/400x600/?texture,paints",
  ];

  return (
    <div style={containerStyle} className="bg-gradient-to-t from-[#f8f6f8] to-[#c3f5dc]">
      <div style={headingStyle}>Our Collections</div>
      <div style={cardContainerStyle}>
        <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
          {cardImages.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                backgroundImage: `url(${imageUrl})`,
              }}
            >
              {`Card ${index + 1}`}
            </div>
          ))}
        </ReactCardCarousel>
      </div>
    </div>
  );
};

export default Collection;
