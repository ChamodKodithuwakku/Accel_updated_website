/**
 * Extracts YouTube video ID from various URL formats.
 * Supports:
 * - https://www.youtube.com/watch?v=XXXX
 * - https://youtu.be/XXXX
 * - https://www.youtube.com/embed/XXXX
 * - https://www.youtube.com/shorts/XXXX
 * - Direct 11-char Video ID
 */
export function getYouTubeVideoId(url) {
  if (!url) return null;
  const str = url.trim();
  
  // If it's already just an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }

  // Regex for full YouTube URLs
  const regExp = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = str.match(regExp);
  return match ? match[1] : null;
}

/**
 * Returns a high-speed, privacy-friendly YouTube embed URL.
 */
export function getYouTubeEmbedUrl(url, autoplay = true) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  const autoParam = autoplay ? '1' : '0';
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoParam}&rel=0&modestbranding=1&playsinline=1`;
}

/**
 * Returns standard high-resolution YouTube video thumbnail.
 */
export function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
