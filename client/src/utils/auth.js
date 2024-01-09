import Cookies from "js-cookie";

const getToken = () => {
    return Cookies.get('jwt');
};

export default getToken;