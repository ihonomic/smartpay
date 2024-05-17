import axios from "axios";
import { BASEURL } from "../constants";

export const sendEmailCodeAPI = async (email: any) => {
  const url = `${BASEURL}/auth/email`;
  const form = { email: email };
  try {
    const response = await axios.post(url, form);
    // console.log("Server Response:", response.data);
    return {
      status: "success",
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    if (error.response) {
      //   console.error("Error:", error.response.data);

      if (error.response.status === 400) {
        return {
          status: "error",
          message: "Bad Request",
          data: null,
        };
      } else if (error.response.status === 422) {
        return {
          status: "error",
          message: "form invalid",
          data: error.response.data.errors,
        };
      } else {
        return {
          status: "error",
          message: "Server Error",
          data: null,
        };
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error:", error.request);
      return {
        status: "error",
        message: "No response from server",
        data: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
      return {
        status: "error",
        message: "Request failed",
        data: null,
      };
    }
  }
};

export const verifyEmailCodeAPI = async (form: any) => {
  const url = `${BASEURL}/auth/email/verify`;
  try {
    const response = await axios.post(url, form);
    // console.log("Server Response:", response.data);
    return {
      status: "success",
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.data);

      if (error.response.status === 400) {
        return {
          status: "error",
          message: "Bad Request",
          data: null,
        };
      } else if (error.response.status === 422) {
        return {
          status: "error",
          message: "Token is invalid or expired.",
          data: error.response.data.errors,
        };
      } else {
        return {
          status: "error",
          message: "Server Error",
          data: null,
        };
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error:", error.request);
      return {
        status: "error",
        message: "No response from server",
        data: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
      return {
        status: "error",
        message: "Request failed",
        data: null,
      };
    }
  }
};

export const registerUserAPI = async (form: any) => {
  const url = `${BASEURL}/auth/register`;
  try {
    const response = await axios.post(url, form);
    // console.log("Server Response:", response.data);
    return {
      status: "success",
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.data);

      if (error.response.status === 400) {
        return {
          status: "error",
          message: "Bad Request",
          data: null,
        };
      } else if (error.response.status === 422) {
        return {
          status: "error",
          message: error.response.data.message,
          data: error.response.data.errors,
        };
      } else {
        return {
          status: "error",
          message: "Server Error",
          data: null,
        };
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error:", error.request);
      return {
        status: "error",
        message: "No response from server",
        data: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
      return {
        status: "error",
        message: "Request failed",
        data: null,
      };
    }
  }
};

export const loginUserAPI = async (form: any) => {
  const url = `${BASEURL}/auth/login`;
  try {
    const response = await axios.post(url, form);
    // console.log("Server Response:", response.data);
    return {
      status: "success",
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.data);

      if (error.response.status === 400) {
        return {
          status: "error",
          message: "Bad Request",
          data: null,
        };
      } else if (error.response.status === 422) {
        return {
          status: "error",
          message: error.response.data.message,
          data: error.response.data.errors,
        };
      } else {
        return {
          status: "error",
          message: "Server Error",
          data: null,
        };
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error:", error.request);
      return {
        status: "error",
        message: "No response from server",
        data: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
      return {
        status: "error",
        message: "Request failed",
        data: null,
      };
    }
  }
};

export const userDashboardAPI = async (token: string) => {
  const url = `${BASEURL}/dashboard`;
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios.get(url, { headers });
    // console.log("Server Response:", response.data);
    return {
      status: "success",
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.data);

      if (error.response.status === 400) {
        return {
          status: "error",
          message: "Bad Request",
          data: null,
        };
      } else if (error.response.status === 422) {
        return {
          status: "error",
          message: error.response.data.message,
          data: error.response.data.errors,
        };
      } else {
        return {
          status: "error",
          message: "Server Error",
          data: null,
        };
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error:", error.request);
      return {
        status: "error",
        message: "No response from server",
        data: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
      return {
        status: "error",
        message: "Request failed",
        data: null,
      };
    }
  }
};
