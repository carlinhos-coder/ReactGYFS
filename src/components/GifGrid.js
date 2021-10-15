import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    /*  const [images, setImages] = useState([])
      useEffect(() => {
          getGifs(category)
          .then(setImages);
      }, [category])*/
    const { data: images, loading } = useFetchGifs(category);
    //console.log(state);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando Gifts</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }

            </div>
        </>
    )
}
