import { api } from "../../api/apiConfig";
import { errorHandler } from "../../error/errorHandler";

export const fetchAllSchedules = async () => {
  try {
    const response = await api.get(`schedules`);
    return response.data;
  } catch (error) {
    errorHandler(error, "could not get the posts");
  }
};

export const getUserSchedule = async (user_id) => {
  try {
    const response = api.get(`users/${user_id}/schedules`);
    return response;
  } catch (error) {
    errorHandler(error, "could not find your schedule, sorry");
  }
};

export const createSchedule = async (user_id, scheduleData) => {
  try {
    const response = await api.post(`users/${user_id}/schedules`, {
      schedule: scheduleData,
    });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not create a schedule, sorry");
  }
};

export const updateSchedule = async (user_id, schedule_id, updateData) => {
  try {
    const response = await api.put(`user/${user_id}/schedule/${schedule_id}`, {
      schedule: updateData,
    });
    return response.data;
  } catch (error) {
    errorHandler(error, "could not update your schedule, sorry");
  }
};

export const deleteSchedule = async (user_id, schedule_id) => {
  try {
    const response = await api.delete(
      `users/${user_id}/schedules/${schedule_id}`
    );
    return response.data;
  } catch (error) {
    errorHandler(error, "could not delete your schedule, sorry");
  }
};
