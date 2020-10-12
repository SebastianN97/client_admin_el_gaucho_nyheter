import axios from "axios";

const createForm = async (props) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

  try {
    let result = await axios.post(
      "/journalist/articles",
      {
        article: {
          title: props.title,
          lead: props.lead,
          content: props.content,
          category: props.selectedCategory,
        },
      },
      {
        headers: {
          ...headers,
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    document.getElementById("create-article").reset();

    return result.data.message;
  } catch (error) {
    return error.response.data.message;
  }
};

export { createForm };