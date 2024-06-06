import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-white-1">
        Trending Podcasts
      </h1>
      <div className="podcast_grid">
        {podcastData.map(
          ({
            id,
            title,
            description,
            imgURL,
          }) => (
            <PodcastCard
              key={id}
              podcastId={id}
              title={title}
              description={description}
              imgURL={imgURL}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
