const https = require("https");

function getobject() {
  const url = "https://api.kanye.rest";

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let rawData = "";

      res.on("data", (chunk) => {
        rawData += chunk;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on("error", (err) => {
      reject(new Error(err));
    });
  });
}

function dog() {
  const url = "https://random.dog/woof.json";

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let rawData = "";

      res.on("data", (chunk) => {
        rawData += chunk;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on("error", (err) => {
      reject(new Error(err));
    });
  });
}

exports.handler = async (event) => {
  try {
    const result1 = await getobject();
    const result2 = await dog();
    console.log("result is: 👉️", result1, result2);
    return { quote: result1.quote, url: result2.url };
  } catch (error) {
    console.log("Error is: 👉️", error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};
