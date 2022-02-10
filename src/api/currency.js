const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
