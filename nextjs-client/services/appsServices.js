import axios from "axios";

module.exports = {
  getAll: async () => {
    const res = await axios.get("http://localhost:3000/api/apps");
    const apps = res.data;
    return apps;
  },
  getOne: async (name) => {
    const res = await axios.get(`http://localhost:3000/api/apps/${name}`);
    const appInfos = res.data;
    return appInfos;
  },
  getLog: async (name) => {
    const res = await axios.get(`http://localhost:3000/api/apps/${name}/log`);
    const logs = res.data;
    return logs;
  },
  delete: async (name) => {
    const res = await axios.delete(`http://localhost:3000/api/apps/${name}`);
    const deleted = res.data;
    return deleted;
  },
};
