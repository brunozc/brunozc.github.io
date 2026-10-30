(function () {
  "use strict";

  // theme toggle: an explicit choice is stored, otherwise the OS preference is followed
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  var toggle = document.querySelector(".theme-toggle");

  function isDark() {
    return root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // storage can be blocked (private mode); the choice then lasts for this page only
      }
    });
  }

  // looping videos play only while visible; with reduced motion they keep their native controls
  var videos = document.querySelectorAll("video[data-autoplay]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!videos.length || reduceMotion || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting && !video.dataset.userPaused) {
          video.play().catch(function () {
            video.controls = true;
          });
        } else {
          video.pause();
        }
      });
    },
    { rootMargin: "100px" }
  );

  function togglePlayback(video) {
    if (video.paused) {
      delete video.dataset.userPaused;
      video.play();
    } else {
      video.dataset.userPaused = "true";
      video.pause();
    }
  }

  videos.forEach(function (video) {
    video.controls = false;
    video.tabIndex = 0;
    video.title = "Click to pause or play";
    video.addEventListener("click", function () {
      togglePlayback(video);
    });
    video.addEventListener("keydown", function (event) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        togglePlayback(video);
      }
    });
    observer.observe(video);
  });
})();
