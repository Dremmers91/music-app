import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    //if (isFetching && loading) return <Loader title="Loading songs around you" />;

    if (error && country) return <Error />;

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_XERWadry6khqnEOuwO8NKmUDmwwhn`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    return (
        <div className='flex flex-col'>
            <h2 className='text-white text-3xl font-bold text-left mt-4 mb-10'>Songs around you</h2>
        </div>
    )
};

export default AroundYou;
