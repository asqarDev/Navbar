import React, { useEffect, useState } from 'react'
import { YMaps,Map, Placemark,FullscreenControl,GeolocationControl,TrafficControl,ZoomControl,TypeSelector } from 'react-yandex-maps'
const Maps = () => {
    const [loader,setLoader] = useState(true)
    const getLoader=()=>{
        setLoader(false)
    }
    useEffect(()=>{
        getLoader()
    })
  return (
    <React.Fragment>
        {loader?<div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>: <YMaps>
           <div className='w-100'>

               <Map
                    defaultState={{
                        center: [41.282957, 69.222348],
                        zoom: 12,
                        controls: [],
                    }}
               
               >
                    <Placemark geometry={[41.282957, 69.222348]}/>
                    <FullscreenControl options={{float:"left"}}/>
                    <GeolocationControl options={{float:"right"}}/>
                    <TrafficControl options={{float:"right"}}/>
                    <ZoomControl options={{float:"left"}}/>
                    <TypeSelector options={{ float: 'right' }} />
               </Map>
           </div>
       </YMaps>}
      
    </React.Fragment>
  )
}

export default Maps