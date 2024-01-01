import { ArtistCard, Loader, Error } from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartQuery();

    if (isFetching) return <Loader title="Loading songs around you" />;

    if (error && country) return <Error />;

    return (
        <div className='flex flex-col'>
            <h2 className='text-white text-3xl font-bold text-left mt-4 mb-10'>Top Artists</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track) => (
                    <ArtistCard key={track.key} track={track} />
                ))}
            </div>
        </div>
    )
};

export default TopArtists;
