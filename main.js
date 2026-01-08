// Initialize Fancybox for all galleries
Fancybox.bind("[data-fancybox]", {
  Toolbar: {
    display: [
      "zoomIn",
      "zoomOut",
      "fullscreen",
      "close"
    ]
  },
  Image: {
    zoom: true,
    wheel: "zoom"
  }
});
