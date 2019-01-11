
export const currencyUpdate = "currencyUpdate"; // action type



export function currencyUpdates(payload) {  // action creator
  console.log(`----payload${payload}`)
  return {
     type: currencyUpdate, // mandatory
     payload:payload   
    };
}