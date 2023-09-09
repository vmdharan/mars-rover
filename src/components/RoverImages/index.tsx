import { useEffect, useRef, useState } from "react";
import GetRoverImages from "../../services/RoverImageService";
import './index.css';
import { RoverImageType } from "../../models/RoverImageType";
import { ImageList, ImageListItem } from "@mui/material";

const RoverImages = (props: any) => {
    
    let imageDate = "2022-11-03";
    let rover = "curiosity";

    const [roverImages, setRoverImages] = useState([]);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current= true;
        GetRoverImages(imageDate, rover)
        .then(res => {
            if(isMounted.current) {
                console.log(res);
                setRoverImages(res.photos);
            }
        })
        .catch((err) => setRoverImages([]))
        return () => {
            isMounted.current = false;
        };
    }, [imageDate, rover]);

    return (
        <ImageList rowHeight={240} className="list-rover-images" cols={4}>
        { roverImages.map((i: RoverImageType) => (
            <ImageListItem key={i.id}>
                <img src={i.img_src} alt="1" />
            </ImageListItem>
        ))}
        </ImageList>
    );
}

export default RoverImages;