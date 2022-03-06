import { Dimensions } from "react-native";

export const SHeight = (percentage) => { return Math.round((percentage * Dimensions.get("screen").height) / 100) }
export const SWidth = (percentage) => { return Math.round((percentage * Dimensions.get("screen").width) / 100) }


// export const setData = async (key, val) => {
//     try {
//         let tempval = JSON.stringify(val);
//         await AsyncStorage.setItem(key, tempval);
//     } catch (error) {
//         console.error(error, "AsyncStorage")
//     }
// }

// export const getData = async (key) => {
//     try {
//         let keys = await AsyncStorage.getAllKeys()
//         console.log("keys===>",keys);
//         if (keys.length !== 0) {
//             let value = await AsyncStorage.getItem(key);
//             if (value) {
//                 let newvalue = JSON.parse(value);

//                 return newvalue;
//             } else {
//                 console.log("value not found");
//                 return null
//             }
//         } else {
//             return {}
//         }
//     } catch (error) {
//         console.error(error, "AsyncStorage")
//         return null
//     }
// }

// export const clearAll = async () => {
//     try {
//         // let keys = await AsyncStorage.getAllKeys()
//         // console.log("keys===>", keys);
//         // keys.forEach(async (key) => {
//         //     key !== discardKey && await AsyncStorage.removeItem(key)
//         // })
//         await AsyncStorage.clear();
//         return true;
//     }
//     catch (exception) {
//         console.log("clearAll", exception);
//         return false;
//     }
// }