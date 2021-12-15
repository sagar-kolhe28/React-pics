import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
          'Client-ID Q4EcU2-0UhihvoVIOqCm0PfVcmZTdUEqWAU4nioR6CU'
      }
});
