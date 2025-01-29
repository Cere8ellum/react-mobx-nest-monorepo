import AuthStore from "./AuthStore";
import RequestProcessStore from "./RequestProcessStore";

export const requestProcessStore = new RequestProcessStore();
export const authStore = new AuthStore();

export default { requestProcessStore, authStore };
