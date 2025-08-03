import axiosClient from '@/apis/axiosClient';

const register = async body => {
    return await axiosClient.post('/register', body);
};

const signIn = async body => {
    return await axiosClient.post('/login', body);
};

const getInfo = async () => {
    return await axiosClient.get(
        '/user/info/ec5b7235-5eab-4b23-9aff-4bac267ba8a2'
    );
};
export { register, signIn, getInfo };
