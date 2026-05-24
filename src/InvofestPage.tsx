import Button from "./components/ui/Button";
import { Collapse } from "./components/ui/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import { Card } from "./components/ui/Card";

interface Speaker {
  name: string;
  role: string;
  imageUrl: string;
}

interface CardItem {
  title: string;
  description: string;
}

interface CollapseItem {
  title: string;
  description: string;
}

interface InvofestPageProps {
  speakers: Speaker[];
  cardItems: CardItem[];
  collapseItems: CollapseItem[];
}

const InvofestPage: React.FC<InvofestPageProps> = ({ speakers, cardItems, collapseItems }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <section
        id="hero"
        className="py-8 sm:py-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center"
      >
        <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
          <p className="text-sm sm:text-base text-gray-600">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
            Tomorrow ".
          </p>

          <div className="flex flex-wrap gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="HubungiPanitia" variant="outline" />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
            className="w-48 sm:w-64 md:w-full max-w-xs md:max-w-sm"
          />
        </div>
      </section>

      <section id="speaker" className="py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-900 mb-8">
          Narasumber Terdahulu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>

      <section
        id="cards"
        className="py-12 sm:py-16 md:py-24 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 px-3"
      >
        {cardItems.map((item, index) => (
          <Card key={index} className="w-full">
            <h3 className="text-xl sm:text-2xl text-red-900 mb-4">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.description}</p>
            <Button
              label="Info Selengkapnya"
              variant="primary"
              className="mt-4"
            />
          </Card>
        ))}
      </section>

      <section id="collapse" className="py-12 sm:py-16 md:py-24 flex flex-col gap-2 sm:gap-4 px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center">
          Pertanyaan yang Sering Diajukan
        </h2>
        {collapseItems.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
};

export default InvofestPage;