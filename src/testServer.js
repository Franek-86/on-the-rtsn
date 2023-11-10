import axios from "axios";

export const test = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/questions?category=geography"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
