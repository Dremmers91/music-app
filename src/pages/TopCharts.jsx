import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartQuery();

    if (isFetching) return <Loader title="Loading songs around you" />;

    if (error && country) return <Error />;

    return (
        <div className='flex flex-col'>
            <h2 className='text-white text-3xl font-bold text-left mt-4 mb-10'>Discover Top Charts</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
};

export default TopCharts;
