import React from "react";

interface styleSelectProp {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

const videoStyles = [
  { name: "Realistic", image: "/styles/realistic.jpg" },
  { name: "Anime", image: "/styles/anime.jpg" },
  { name: "Cartoon", image: "/styles/cartoon.jpg" },
  { name: "Abstract", image: "/styles/abstract.jpg" },
];

const StyleSelect: React.FC<styleSelectProp> = ({
  selectedStyle,
  onStyleChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {videoStyles.map((style) => (
        <div
          key={style.name}
          className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
            selectedStyle === style.name ? "border-primary" : "border-gray-200"
          }`}
          onClick={() => onStyleChange(style.name)}
        >
          <img
            src={style.image}
            alt={style.name}
            className="w-full h-24 object-cover"
          />
          <p className="text-center py-2 bg-gray-100">{style.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StyleSelect;
