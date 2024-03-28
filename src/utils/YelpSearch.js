
/* 
This code assume that you have set your Yelp API Key as an environmental variable, so that it does not
get exposed in the module source code.
*/
const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY; 

/* to get around CORS issue during dev:
In your own browser,visit https://cors-anywhere.herokuapp.com/corsdemo and click 
“Request temporary access to the demo server” and then prepend the baseYelpUrl value with
https://cors-anywhere.herokuapp.com/
*/

const YelpSearch = async (term, location, sort) => {


    const baseYelpUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
    const queryParams = '?location=' + location + '&term=' + term + '&sort_by=' + sort;
    const endpoint = baseYelpUrl + queryParams;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: { 
                'authorization': 'Bearer ' + YELP_API_KEY,
                'accept': 'application/json',                
            }
    });
        if(response.ok){
            //console.log(response);
            const responseJSON = await response.json(); 
            console.log(responseJSON);
            return responseJSON.businesses;
        }
    }
    catch(e) {
        console.log("error: ", e);
        return(e);
    }   

};

export default YelpSearch;