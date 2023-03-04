import axios from 'axios';

export default async function useHttp(path: string, data: any) {
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://localhost:7000/api/users/${path}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    const response = await axios(config);

    return response.data;
}