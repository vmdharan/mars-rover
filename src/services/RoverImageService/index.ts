const api_key = "";
const api_nasa_default_page = "1";
const api_nasa_default_date = "2021-08-01";
const api_nasa_rover = "curiosity"; //curiosity, opportunity, spirit

const api_nasa_key = "&api_key=" + api_key;
const api_nasa_page = "&page=" + api_nasa_default_page;
const api_nasa_earth_date = "earth_date=" + api_nasa_default_date;

const api_nasa_rover_images = "https://api.nasa.gov/mars-photos/api/v1/rovers/" 
    + api_nasa_rover + "/photos?" + api_nasa_earth_date + api_nasa_page + api_nasa_key;

const GetNASARoverImageAPI = (imageDate: string, rover: string) => {
    return "https://api.nasa.gov/mars-photos/api/v1/rovers/" 
    + rover + "/photos?earth_date=" + imageDate + api_nasa_page + api_nasa_key;
}

const GetRoverImages = async (imageDate: string, rover: string) => {
    let nasaRoverAPI_URI = api_nasa_rover_images;
    if(imageDate !== "" && rover !== "") {
        nasaRoverAPI_URI = GetNASARoverImageAPI(imageDate, rover);
    }
    console.log(nasaRoverAPI_URI);
    const response = await fetch(nasaRoverAPI_URI);
    return response.json();
}

export default GetRoverImages;