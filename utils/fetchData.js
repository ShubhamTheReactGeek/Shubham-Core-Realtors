
import axios from "axios";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '91ea583162mshc8da3c83ace9e1bp10baf0jsn0aa3a4996840'
//   }

export const baseUrl = 'https://bayut.p.rapidapi.com'

// const fetchData = (url) => {
//     axios.get(url, {
//         headers : {
//             'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//             'X-RapidAPI-Key': '91ea583162mshc8da3c83ace9e1bp10baf0jsn0aa3a4996840'
//         }
//     }).then((data) => {
//         console.log(data)
//         return data
//     }).catch((err) => {
//         console.log(err)
//     })
// }

export async function fetchData(url){
    const {data} = await axios.get(url, {
                headers : {
                    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                    'X-RapidAPI-Key': '91ea583162mshc8da3c83ace9e1bp10baf0jsn0aa3a4996840'
                }
            })
            // console.log(data)
    return data
}

// export default fetchData