// Create a promise that resolves


//Using async / await (clean way)

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function showData() {
  const result = await getData();
  console.log(result);
}

showData();

