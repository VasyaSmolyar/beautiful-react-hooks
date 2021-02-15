import { useState, useEffect } from 'react';

const useAudio = (ref = null, url) => {
  const [src, setSrc] = useState(url);
  const [isPlaying, setPlaying] = useState(false);
  const cp = ref;

  useEffect(() => {
    cp.current.src = src;
  }, [ref]);

  const toggle = () => {
    if (!isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    setPlaying(!isPlaying);
  };

  const setAudio = (newUrl) => {
    cp.current.src = newUrl;
    setSrc(url);
  };

  return [src, setAudio, toggle];
};

export default useAudio;
