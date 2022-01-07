import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images ,loading } = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {loading && <p>Loading</p>}
                {
                    images.map((img) => {
                        return (
                            <GifGridItem
                                key={img.id}
                                {...img} />
                        )
                    })
                }
            </div>
        </>

    )
}

export default GifGrid
