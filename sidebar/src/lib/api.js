import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://101.101.210.76:8000';

// buckets
export const getBuckets = () => axios.get('/api/buckets');

export const createBucket = (title, description, details, ref) =>
  axios.post('/api/buckets', {
    title,
    description,
    details,
    ref,
  });

export const getPresets = (keyword) => axios.get(`/api/buckets/presets?keyword=${keyword}`);

export const updateBucketStatus = ({ no, status }) =>
  axios.patch(`/api/buckets/${no}`, {
    status,
  });

export const updateBucketInfo = ({ no, title, description }) =>
  axios.patch(`/api/buckets/${no}`, {
    title,
    description,
  });

// details
export const getDetails = (bucketNo) => axios.get(`/api/details/${bucketNo}`);

export const updateDetailStatus = ({ no, status }) =>
  axios.patch(`/api/details/${no}`, {
    status,
  });

export const updateDetailInfo = ({ no, title, dueDate }) =>
  axios.patch(`/api/details/${no}`, {
    title,
    dueDate,
  });

export const deleteDetail = ({ no }) => axios.delete(`/api/details/${no}`);

export const createDetail = ({ bucketNo, title, dueDate }) =>
  axios.post(`/api/details`, {
    bucketNo,
    title,
    dueDate,
  });

// achieves
export const setAchieves = ({ bucketNo, description }) =>
  axios.post('/api/achieves', {
    bucketNo,
    description,
  });

export const updateAchieves = ({ achieveNo, description }) =>
  axios.put(`/api/achieves/${achieveNo}`, {
    description,
  });

export const setObjectStorage = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const config = {
    header: { 'content-type': 'multipart/form-data' },
  };
  return axios.post(`/api/objects/`, formData, config);
};