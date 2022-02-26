const fetchIpData = new Promise((resolve, reject) => {
  const ajax = new XMLHttpRequest();
  if (window.location.href.includes("localhost")) {
    /**
     *  Resolve with dummydata, GET call will be rejected,
     *  since ipinfos server is configured that way
     */
    resolve({ data: { country: "DE" } });
    return;
  }
  ajax.open("GET", "https://ipinfo.io/json");
  ajax.onload = () => {
    const response = JSON.parse(ajax.responseText);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  };
  ajax.onerror = reject;
  ajax.send();
});

export default fetchIpData;

// Use this to create an account for tracking on external app
// NLog on API captures all of this so you can use that or use this up to you...
// https://ipinfo.io/developers#https-ssl