import "./Info.scss";

export default function Info() {
  return (
    <section className="Info">
      <div className="Info__wrapper">
        <h2 className="Info__title">Embark on a space journey</h2>
        <p className="Info__description">
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <input id="toggle" type="checkbox" className="checkbox" hidden />
        <label htmlFor="toggle" className="Info__expand">
          Read mode
        </label>
        <p className="Info__description Info__description_hidden">
          <br /> Travelling into space is one of the most exciting and
          unforgettable adventures that can change your life forever. And if you
          have ever dreamed of exploring stars, planets and galaxies, then our
          company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all
          the secrets of the universe. We guarantee that every moment in space
          will be filled with incredible impressions, excitement and new
          discoveries. Our team of professionals takes care of your safety and
          comfort so that you can fully enjoy your adventure in space. We offer
          various options for space excursions.
          <br />
          <br />
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
      </div>
    </section>
  );
}
