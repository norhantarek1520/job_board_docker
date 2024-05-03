import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs'); // browser
const usersServiceApi = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});
const jobsServiceApi = axios.create({
    baseURL: 'http://localhost:5001/api', // jobs_service
});
const categoriesServiceApi = axios.create({ // categories_service
    baseURL: 'http://localhost:5000/api',
});
const applicationsServiceApi = axios.create({ // applications_service
    baseURL: 'http://localhost:5003/api',
});


//=========================================jobs=========================================
export const getAllJobs = () => jobsServiceApi.get(`/allJobs`);
export const getJob = () => jobsServiceApi.get(`/:${id}`);

export const createJob =()=> jobsServiceApi.post('/')
export const deleteJob = () => jobsServiceApi.delet(`/:${id}`);
export const updateJob = () => jobsServiceApi.put(`/:${id}`);
//=========================================categories=========================================
export const getAllCategories = () => categoriesServiceApi.get(`/allCategories`);
export const getCategory = () => categoriesServiceApi.get(`/:${id}`);

export const createCategory =()=> categoriesServiceApi.post('/')
export const deleteCategory = () => categoriesServiceApi.delet(`/:${id}`);
export const updateCategory = () => categoriesServiceApi.put(`/:${id}`);
//=========================================auth=========================================
export const login = ()=>usersServiceApi.post('/users/auth/login')
export const signup = ()=>usersServiceApi.post('/users/auth/signup')
export const getUserProfile = ()=>usersServiceApi.post('/users/profile')
//=========================================applications=========================================
export const getAllApplications = () => applicationsServiceApi.get(`/allApplications`);
export const getApplication = () => applicationsServiceApi.get(`/:${id}`);

export const createApplication =()=> applicationsServiceApi.post('/')
export const deleteApplication = () => applicationsServiceApi.delet(`/:${id}`);
export const updateApplication = () => applicationsServiceApi.put(`/:${id}`);

const apis = {
    getAllJobs,
    getJob ,
    createJob ,
    deleteJob ,
    updateJob ,
    getAllCategories ,
    getCategory ,  
    createCategory,
    deleteCategory ,
    updateCategory,
    login ,
    signup,
    getUserProfile,
    getAllApplications,
    getApplication ,
    createApplication ,
    deleteApplication ,
    updateApplication
}

export default apis;