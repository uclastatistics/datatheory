const moveCloud = (cloud, time) => {
  cloud.css("left", `-${cloud.css("width")}`);
  cloud.animate(
    { left: "120%" },
    {
      duration: time,
      easing: "linear",
      complete: () => {
        cloud.css("left", `-${cloud.css("width")}`);
        cloud.css("top", `${45 + 8 * (Math.random() * 2 - 1)}%`);
        moveCloud(cloud, time);
      }
    }
  );
};

$(document).ready(() => {
  const clouds = $(".moving-cloud");
  for (let i = 0; i < clouds.length; i++) {
    $(clouds[i]).css("left", `-${$(clouds[i]).css("width")}`);
    $(clouds[i]).css("top", `${45 + 8 * (Math.random() * 2 - 1)}%`);
    setTimeout(() => {
      moveCloud($(clouds[i]), 50000 + Math.random() * 15000);
    }, 0);
  }
});
