// Convert promise to async/await


//Promise version (before)
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

getData()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });


//Converted to async / await (after)

async function showData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

showData();
