import axios from "axios";
import { add, loading, remove, update } from "../store/userSlice";
import { API_URI } from "../utils/Global/main";
import { toast } from "react-hot-toast";

export const getUsers = async (dispatch) => {
    dispatch(loading(true));
    try {
        const url = API_URI + `/adminui-problem/members.json`;
        const res = await axios.get(url);

        dispatch(add(res?.data));

    } catch (err) {
        console.log(err)
    } finally {
        dispatch(loading(false));
    }
}