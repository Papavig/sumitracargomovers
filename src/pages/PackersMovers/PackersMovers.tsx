interface PackersMoversProps {
    title: string;
    locations: string[];
  }
  
  const PackersMovers: React.FC<PackersMoversProps> = ({ title, locations }) => {
    return (
      <div className="flex-1 p-4 mt-12">
        <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
        <div className="bg-white shadow-md rounded-lg p-8 h-full">
          {locations.map((location, index) => (
            <p
              key={index}
              className="text-sm text-center py-1 hover:text-destructive cursor-pointer transition"
            >
              {location}
            </p>
          ))}
        </div>
      </div>
    );
  };
  
  export default PackersMovers;
  