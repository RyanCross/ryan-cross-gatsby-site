import axios from "axios";

export async function getGameInfoForPlayer(steamId) {
  let url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=F7650FCCC5C05E79BF796FDFC6DC27A1&steamid=${steamId}&format=json`;

  //76561197988224572

  let data;
  try {
    const requestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    };
    let response = await axios.get(url, requestConfig);
    data = await response.json();
  } catch (error) {
    console.log("hi");
  }

  return data;
}
