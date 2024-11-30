// Dynamic news feed
const newsList = [
  { title: "Football World Cup: The Final Countdown!", link: "https://news.example.com" },
  { title: "Basketball Finals: The Road to Victory", link: "https://news.example.com" },
  { title: "Tennis Grand Slam Highlights: Top Moments", link: "https://news.example.com" },
  { title: "New Football League Launches in Europe", link: "https://news.example.com" }
];

const newsListContainer = document.getElementById('newsList');

// Load dynamic sports news
newsList.forEach(newsItem => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${newsItem.link}" target="_blank">${newsItem.title}</a>`;
  newsListContainer.appendChild(li);
});

// Scroll-to-section functionality for CTA button
document.getElementById('ctaButton').addEventListener('click', () => {
  window.location.href = "#sports";
});
