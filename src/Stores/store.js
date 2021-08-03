import axios from "axios";
import qs from "qs";
import create from "zustand";
import { devtools } from "zustand/middleware";

const endpoint = "http://localhost:4000/api/emailupdates";

const useStore = create(
  devtools((set) => ({
    result: {
      status: null,
      message: null,
    },
    signUp: async (values) => {
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(values),
        url: endpoint,
      };
      try {
        const result = await axios(options);
        set(() => ({ result: result.data }));
      } catch (error) {
        console.log(error);
        set(() => ({ result: error.response.data }));
      }
    },
    reset: () =>
      set(() => ({
        result: {
          status: null,
          message: null,
        },
      })),
  }))
);

export default useStore;
