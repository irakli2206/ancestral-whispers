import React, { useEffect, useState } from 'react'
import Map, { Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Reconstruction } from '@/types/general';
import supabase from '@/supabase';
import { MdLocationPin } from 'react-icons/md'
import ReconstructionDetails from './components/reconstruction-details';

const Reconsructions = () => {
  const [viewType, setViewType] = useState<'globe'>('globe')
  const [data, setData] = useState<Reconstruction[]>([])

  //index of selected reconstruction
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [selectedReconstruction, setSelectedReconstruction] = useState<any>()

 

  useEffect(() => {
    console.log('running?')
    const fetchReconstructions = async () => {

      let { data: reconstructions, error } = await supabase
        .from('reconstructions')
        .select('*')

      setData(reconstructions as Reconstruction[])

    }

    fetchReconstructions()
  }, [])




  const getActiveReconstruction = (reconstructionIndex: number) => {
    let activeReconstructionLocal = data[reconstructionIndex]
    setSelectedReconstruction(activeReconstructionLocal)
    setIsSheetOpen(true)
  }

  const onDrawerClose = () => {
    setIsSheetOpen(false)
    setTimeout(() => {
      setSelectedReconstruction(null)

    }, 300)

  }

  return (
    <section className='  w-full mx-auto flex flex-col gap-12 items-center relative h-[calc(100vh-89px)]'>
      <ReconstructionDetails key={selectedReconstruction ? selectedReconstruction.name : ""} isOpen={isSheetOpen} onClose={onDrawerClose} data={selectedReconstruction} size='lg' /> 
      
      <Map
        mapboxAccessToken='pk.eyJ1IjoiaXJha2xpMjIwNiIsImEiOiJjbGdnamlhcTkwY2cwM2dvNWJvdGdiamViIn0.BRQqcEzzPN_wsy6QLUY13w'
        initialViewState={{
          longitude: 40,
          latitude: 40,
          zoom: 2
        }}
        projection={{name: 'globe'}}

        style={{}}
        mapStyle='mapbox://styles/mapbox/dark-v9'
        terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
      >
        {data.map((reconstruction, index) => {
          let selected = selectedReconstruction?.id == reconstruction.id
          if (reconstruction.coords) {
            return (
              <Marker latitude={reconstruction.coords[0]} longitude={reconstruction.coords[1]} anchor="bottom"
                style={{ cursor: 'pointer' }} onClick={() => getActiveReconstruction(index)}
              >
                <MdLocationPin size={24} color={selected ? 'grey' : 'lightgray'} />
              </Marker>
            )
          }
        })}


        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />

      </Map>

    </section>
  )
}

export default Reconsructions