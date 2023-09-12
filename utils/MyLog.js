function MyLog(message, ...data) {
  if (process.env.APP_ENV == "local") {
    console.log(message, data);
  }
}

export default MyLog;
