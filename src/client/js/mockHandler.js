import axios from 'axios';

export async function doGetMockRequest() {
    const response = await axios.get('http://localhost:8081/test', {responseType: "json"});
    const responseData = response.data;

    console.log(`Mock Handler: ${responseData[0].status}`);

    return responseData;   
}


