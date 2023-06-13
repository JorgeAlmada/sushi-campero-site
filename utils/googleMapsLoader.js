import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'AIzaSyD0QLvzh6pusIm5E0IRGxvxzQuXtmFKk4k',
    version: 'weekly',
    libraries: ['places'],
  });
  export default loader;