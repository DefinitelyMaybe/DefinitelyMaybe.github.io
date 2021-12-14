<svelte:head>
  <meta name="The Matrix" charset="utf-8">
  <!-- <link rel="shortcut icon" href="favicon.png" type="image/x-icon"> -->
  <title>Math IDE</title>
  <link rel="stylesheet" href="./css/mathquill.css">
  <link rel="stylesheet" type="text/css" media="screen" href="./css/main.css">
  <script src="$lib/mathsplayground/libs/math.js"></script>
  <script src="$lib/mathsplayground/libs/vue.js"></script>
  <script src="$lib/mathsplayground/libs/plotly.min.js" charset="utf-8"></script>
  <script src="$lib/mathsplayground/libs/JQuery.js"></script>
  <script src="$lib/mathsplayground/libs/mathquill.js"></script>
  <script src="$lib/mathsplayground/libs/lodash.js"></script>
  <!--script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script-->
  <script src="$lib/mathsplayground/components/mixins/moveable.js" defer></script>
  <script src="$lib/mathsplayground/components/mixins/contextmenu.js" defer></script>
  <script src="$lib/mathsplayground/components/forms/function.js" defer></script>
  <script src="$lib/mathsplayground/components/forms/variable.js" defer></script>
  <script src="$lib/mathsplayground/components/forms/graph.js" defer></script>
  <script src="$lib/mathsplayground/components/forms/table.js" defer></script>
  <script src="$lib/mathsplayground/components/forms/text.js" defer></script>
  <script src="$lib/mathsplayground/components/scene-load.js" defer></script>
  <script src="$lib/mathsplayground/components/scene-save.js" defer></script>
  <script src="$lib/mathsplayground/components/scene-reset.js" defer></script>
  <script src="$lib/mathsplayground/components/object-create.js" defer></script>
  <script src="$lib/mathsplayground/components/object-edit.js" defer></script>
  <script src="$lib/mathsplayground/components/object-text.js" defer></script>
  <script src="$lib/mathsplayground/components/object-variable.js" defer></script>
  <script src="$lib/mathsplayground/components/object-table.js" defer></script>
  <script src="$lib/mathsplayground/components/object-matrix.js" defer></script>
  <script src="$lib/mathsplayground/components/object-function.js" defer></script>
  <script src="$lib/mathsplayground/components/object-graph.js" defer></script>

  <!-- To make this simplier to start with, the following bits of data are held in scripts -->
  <!-- Hopefully, they can be turned back into .json files one day -->
  <script src="$lib/mathsplayground/data/maths/demo.js" defer></script>
  
  <script src="$lib/mathsplayground/main.js" defer></script>
</svelte:head>

<div id="VueContainer"></div>
