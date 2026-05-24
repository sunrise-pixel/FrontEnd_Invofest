interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-3 sm:gap-4 group">
      <div className="relative z-1">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full border-4 sm:border-[8px] md:border-10 border-red-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>
      <div className="cursor-pointer flex flex-col items-center border-4 border-red-900 w-full p-3 sm:p-4 rounded-lg relative py-6 sm:py-8 md:py-10 shadow-xl shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40 transition-all duration-300">
        <div className="absolute bottom-0 px-3 sm:px-4 py-4 sm:py-6 rounded-lg w-full h-full flex flex-col items-center gap-2 group-hover:bg-red-200 backdrop-blur-sm transition-all duration-300"></div>
        <div className="absolute left-0 right-0 bottom-0 items-center justify-center p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl text-red-900 font-semibold text-center">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-600 text-center px-2">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
