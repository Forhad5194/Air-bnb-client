
import { useEffect } from "react";
import { useState } from "react";
import CardRoom from "./CardRoom";
import Container from "../Shared/Container/container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from "../Shared/Loader/Loader";


const RoomCard = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const [loading , setLoading ] = useState(false)
    const category = params.get('category')

    useEffect(() => {
        setLoading(true)
        fetch('RoomCard.json')
            .then(res => res.json())
            .then(data => {
                if(category ) {
                    const filtered = data.filter(room =>  room.category === category)
                    setRooms(filtered)
                }
                else
                    setRooms(data)



                    
                    setLoading(false)
                
            })
    }, [category])

    if(loading) return <Loader />
     return (
        <Container>

            {rooms && rooms.length >0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-12 ">
                {
                    rooms.map(room => <CardRoom key={room._id} room={room}></CardRoom>)
                }
            </div> : 
            
                <div className="flex items-center justify-center min-h-[calc(100vh-300px)] text-red-800">
                     <Heading  center={true} title={'No Room is available on this category !!!! '} subtitle='please select anther category ..' />
                </div>
            
            } 
        </Container>
    );
};

export default RoomCard;