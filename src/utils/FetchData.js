export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
    params: {
      limit: '100',
      offset: '0'
    },
  };

export const exerciseOptionsAll = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {
      limit: '1000',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  
  export const fetchData =async (url, options) =>{
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
  }
  export const fetchDataAll = async () => {
    const { url, params, headers, method } = exerciseOptionsAll;
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;

    const options = {
        method,
        headers
    };

    try {
        const response = await fetch(fullUrl, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};