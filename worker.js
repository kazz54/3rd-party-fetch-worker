const url = 'https://jsonplaceholder.typicode.com/photos'

self.addEventListener('message', async (e) => {
  console.log(`Worker started...`, e.data)
  let eventData = e.data
  if(eventData === 'fetch!'){
    try{
      const res = await fetch(url);
      const data = await res.json();
      const dataArr = [...data];
      self.postMessage(dataArr)
    } catch(e) {
      console.error(e)
    }
  }
})