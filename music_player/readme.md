# 🎧 BTS Discography Explorer

A modern, interactive **BTS music explorer** powered by a clean dataset, **Spotify API**, and **YouTube embeds** — built for real-world, production-level applications.

---

## 🌟 Overview

This project is a complete **discography explorer** for BTS, combining:

* 📀 Structured dataset (Group + Solo albums)
* 🎵 Spotify API (metadata + previews)
* ▶️ YouTube embeds (playback support)

Designed for developers who want to build a **legal, scalable, and professional music app**.

---

## 🚀 Features

✨ Complete BTS discography (Group + Solo)
✨ Clean and consistent data structure
✨ Track-level details with duration
✨ Dynamic UI support (colors + emojis)

### 🔥 Music Integration

* 🎧 Spotify API for:

  * Song search
  * Album metadata
  * 30-sec previews
* ▶️ YouTube Embed for:

  * Full song playback (legal)

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript / React
* **Backend (optional):** Node.js
* **APIs Used:**

  * Spotify Web API
  * YouTube Embed

---

## 📁 Data Structure

### 📀 Group Albums

```javascript
{
  id: "g1",
  name: "Album Name",
  year: 2013,
  type: "Mini Album",
  color: "#HEX",
  emoji: "🎤",
  tracks: [
    { title: "Track Name", duration: "3:45" }
  ]
}
```

---

### 🎤 Solo Albums

```javascript
{
  id: "s1",
  name: "Album Name",
  artist: "Member Name",
  year: 2023,
  type: "Studio Album",
  color: "#HEX",
  emoji: "🎨",
  tracks: [
    { title: "Track Name", duration: "3:30" }
  ]
}
```

---

## 🎵 How Music Playback Works

### ▶️ YouTube Embed (Full Songs)

* Songs are played using embedded YouTube players
* No audio is hosted locally
* Ensures **100% copyright-safe playback**

```html
<iframe 
  src="https://www.youtube.com/embed/{VIDEO_ID}"
  allow="autoplay; encrypted-media"
></iframe>
```

---

### 🎧 Spotify API (Metadata + Preview)

Used for:

* Fetching song data
* Album images
* Artist info
* 30-second previews

```javascript
fetch("https://api.spotify.com/v1/search?q=DNA&type=track", {
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN"
  }
});
```

---

## 🔄 App Flow

1. User selects an album
2. Tracks are displayed from dataset
3. On "Play":

   * 🎧 Spotify API fetches track data
   * ▶️ YouTube embed plays the song

---

## 🧠 Use Cases

* 🎶 Music Player UI
* 🔍 Song Search Engine
* 💜 Fan Projects
* 📊 Music Data Visualization
* 📱 Mobile Apps
* 💼 Developer Portfolio

---

## 🔐 Legal & Copyright Compliance

This project follows best practices:

✅ No music files are hosted
✅ Playback via official platforms only
✅ Uses Spotify API within policy
✅ Uses YouTube embed for streaming

> All rights belong to original owners.

---

## 🎨 UI Ideas

* 🌈 Dynamic album themes using `color`
* 😀 Emoji-based album cards
* 🔍 Search & filter system
* 🎧 Play buttons with embedded players
* 📱 Fully responsive layout

---

## 🔥 Future Enhancements

* ❤️ Favorites / playlist system
* 🔊 Audio preview player (Spotify)
* 🔎 Smart search with suggestions
* 🌍 Multi-language support
* 🧠 AI recommendations

---

## 🤝 Contributing

Want to improve this project?

* Add missing tracks
* Improve UI/UX
* Optimize API usage
* Add new features

Fork it and build something amazing 🚀

---

## 📜 License

For **educational and personal use only**.
Music content belongs to respective copyright holders.

---

## 💜 Acknowledgment

Inspired by BTS and built for ARMY & developers.

---

## ⭐ Support

If you like this project:

* Give it a ⭐
* Share it
* Build your own version

---

> *"Music transcends boundaries."* 🎶
