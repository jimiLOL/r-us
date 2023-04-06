// const url = "http://localhost:5005";
const url = "https://node.zpd45.ru";

const shopApi = {
  getProduct: async (
    category: string,
    offset: number,
    limit: number,
    type: string,
    sort: string
  ) =>
    await fetch(
      `${url}/products?category=${category}&start=${offset}&limit=${limit}&type_shop=${type}&sort=${sort}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        console.log(e);
      }),
  newBidForСalculator: async (UserProduct: any) =>
    await fetch(`${url}/newrequest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UserProduct),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        console.log(e);
      }),
  login: async (data: any) => {
    return await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
  sendText: async (data: any) => {
    return await fetch(`${url}/send_text`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
  getCategory: async (data: any) => {
    console.log(data);

    return await fetch(
      `${url}/get_category?category_en=${data.category_en}&direction=${
        data.direction
      }&offset=${data.offset}&limit=${data?.limit ? data.limit : 10}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  },
  getPost: async (data: any) => {
    return await fetch(`${url}/get_post?title_en=${data.title_en}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        return { message: e.message, status: e.status, code: e.code };
      });
  },
  sendFormCall: async (data: any) => {
    return await fetch(`${url}/send_form_call`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => {
        return { message: e.message, status: e.status, code: e.code };
      });
  },
};

export default shopApi;
