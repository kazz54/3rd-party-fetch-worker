const url = 'https://jsonplaceholder.typicode.com/photos'

// Standard fetch approach
export const fetchDataAsync = async () => {
  const res = await fetch(url)
  const data = await res.json()
  const dataArr = await [...data]
  await dataArr.forEach(i => {
    const img = document.createElement('img')
    img.setAttribute('referrerpolicy', 'no-referrer')
    img.src = i.thumbnailUrl
    img.title = i.title
    document.body.appendChild(img)
  })
}

// Fetch fron Web Worker
export const fetchWithWorker = async () => {
  const worker = new Worker('./worker.js')
  worker.addEventListener('message', useWorkerData)
  worker.postMessage('fetch!')
}

const useWorkerData = async ({ data }) => {
  await data.forEach(i => {
    const img = document.createElement('img')
    img.setAttribute('referrerpolicy', 'no-referrer')
    img.src = i.thumbnailUrl
    img.title = i.title
    document.body.appendChild(img)
  })
}