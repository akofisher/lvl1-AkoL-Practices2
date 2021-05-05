const container = document.querySelector('.container');
const artistImage = document.querySelector('.artist');
const media = document.querySelector('.media');
const overlay = document.querySelector('.overlay');
const searchElem = document.querySelector('#search');

const getContent = (search) => {
  const url = new URL('https://itunes.apple.com/search');
  const params = { term: search, media: 'musicVideo', }
  url.search = new URLSearchParams(params);
  fetch(url, { method: 'POST'} )
    .then(results => results.json())
    .then(data => {
      results = data.results;
      const resultsHTML = results.map(
        (result, index) => `
          <div style="background-image: url(${result.artworkUrl100});" onclick="openMedia('${result.previewUrl}', '${result.trackCensoredName}')" class="result"></div>
        `)
         .join('');
        container.innerHTML = resultsHTML;
        searchElem.blur();
        return fetch(data.results[0].artistViewUrl)
      })
      .then(data => data.text())
      .then(data => {
        const artistImgUrl = data.match(/https?:\/\/[a-zA-Z0-9:\/\.\-]+.jpg/)[0];
        artistImage.style['background-image'] = `url(${artistImgUrl})`;
      })
      .catch(() => container.innerHTML = '<h1>Problem retrieving media...</h1>');
 }

const openMedia = (url, title) => {
  if (!url) return;
  media.innerHTML = `<video controls autoplay src="${url}"></video><p>${title}</p>`;
  document.querySelectorAll('.result').forEach(e => e.classList.add('blur'));
  overlay.classList.add('blur');
  media.classList.remove('hidden');
}

const closeMedia = () => {
  media.innerHTML = '';
  toggleOverlay();
  media.classList.add('hidden');
}

const toggleOverlay = () => {
  document.querySelectorAll('.result').forEach(e => e.classList.toggle('blur'));
  overlay.classList.toggle('blur');

}

overlay.addEventListener('click', closeMedia);
searchElem.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toggleOverlay();
    getContent(event.target.value);
    searchElem.blur();
  }
});

searchElem.addEventListener('focus', toggleOverlay);