// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  center: true,
  hash: true,
  navigationMode: 'linear',

  transition: 'none', // none/fade/slide/convex/concave/zoom
  
  /*math: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    //config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
    // pass other options into `MathJax.Hub.Config()`
    //TeX: { Macros: macros }
  },*/

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    //{ src: './math.js', async: true }
    { src: './marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: './markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } }
    //{ src: 'plugin/highlight/highlight.js', async: true },
    //{ src: 'plugin/search/search.js', async: true },
    //{ src: 'plugin/zoom-js/zoom.js', async: true },
    //{ src: 'plugin/notes/notes.js', async: true }
  ]
});