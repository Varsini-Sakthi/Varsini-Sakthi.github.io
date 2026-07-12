(function () {
  var container = document.getElementById("field");
  if (!container) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var canvas = document.createElement("canvas");
  container.appendChild(canvas);
  var ctx = canvas.getContext("2d");

  var colors = ["#2d3142", "#4a9eef", "#6d6f7c"];

  // Three loose "clusters" of points, echoing a UMAP embedding of cell
  // states — the actual visual language of this person's work.
  var clusters = [
    { x: 0.22, y: 0.32, r: 0.16, color: colors[0] },
    { x: 0.62, y: 0.22, r: 0.14, color: colors[1] },
    { x: 0.78, y: 0.62, r: 0.15, color: colors[2] }
  ];

  var points = [];
  var COUNT = 140;

  function seed(w, h) {
    points = [];
    for (var i = 0; i < COUNT; i++) {
      var c = clusters[i % clusters.length];
      var angle = Math.random() * Math.PI * 2;
      var radius = Math.random() * c.r * Math.min(w, h);
      var cx = c.x * w + Math.cos(angle) * radius;
      var cy = c.y * h + Math.sin(angle) * radius;
      points.push({
        x: cx,
        y: cy,
        baseX: cx,
        baseY: cy,
        r: 1.1 + Math.random() * 1.6,
        color: c.color,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.25
      });
    }
  }

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    seed(w, h);
  }

  function draw(t) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var drift = reduceMotion ? 0 : Math.sin(t * 0.0002 * p.speed + p.phase) * 6;
      var x = p.baseX + drift;
      var y = p.baseY + Math.cos(t * 0.00015 * p.speed + p.phase) * (reduceMotion ? 0 : 6);

      ctx.beginPath();
      ctx.arc(x, y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.32;
      ctx.fill();
    }
  }

  function loop(t) {
    draw(t || 0);
    if (!reduceMotion) requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  resize();

  if (reduceMotion) {
    draw(0);
  } else {
    requestAnimationFrame(loop);
  }
})();
