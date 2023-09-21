// let arr = [1, 2, 3];

// // arr.push(4);
// // arr.concat(4);
// let newArr = arr.concat(4);

// console.log(newArr);

// // async function request(){
// //     const data = await api;
// //     console.log(data)
// // }

// // try {
// //   const a = 5;
// //   a = 10;
// // } catch (error) {
// //   console.log("Error Occured");
// // }

// // console.log("Hello");

const data = {
  "-user1": {
    name: "Waqas",
  },
  "-user2": {
    name: "Ali",
  },
  "-user3": {
    name: "Kuch bhi",
  },
};

const keyArray = Object.keys(data);

const dataArray = keyArray.map((key) => ({
  id: key,
  ...data[key],
}));

console.log(dataArray);
