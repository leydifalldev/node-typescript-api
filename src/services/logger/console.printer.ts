export const Alert = {
  info: (msg) => {
    console.log("⚠🔵 ======> ", msg);
  },
  warning: (msg) => {
    console.log("🟡 ======> ", msg);
  },
  error: ({ status, module, msg }) => {
    console.log(`🔴 ${status + " - " +module} ============================`);
    console.log(msg);
  },
  success: (msg) => {
    console.log("🟢 ======> ", msg);
  },
  searchResult: (msg) => {
    console.log("🔎 ======= ");
    console.log(msg);
  }
}