import axios from 'axios';

const URL = 'https://booking-app-db.vercel.app';
export const fetchBestOffers = async () => {
  const response = await axios.get(`${URL}/best_offer`);
  return response.data;
};

export const fetchRecommendedHotels = async () => {
  const response = await axios.get(`${URL}/recommended_hotels`);
  return response.data;
};

export const fetchHotelDetails = async (hotelId) => {
  const response = await axios.get(`${URL}/hotels/${hotelId}`);
  return response.data;
}

export const fetchHotels = async (query = "") => {
  const response = await axios.get(`${URL}/hotels`);
  return response.data;
};