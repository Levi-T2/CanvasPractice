<template>
  <div class="container-fluid">
    <section class="row mt-2">
      <div class="col-12 d-flex">
        <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Command List</button>
      </div>
    </section>
  </div>

  <!-- NOTE OFFCANVAS containing the @click for the JavaScript. -->
  <div class="offcanvas offcanvas-end" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Command List</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="container-fluid">
        <section class="row">
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Green Square" @click="ActivateCanvas()" class="btn btn-primary">Canvas 1</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws 2 Red Squares" @click="ActivateCanvasTwo()" class="btn btn-warning">Canvas 2</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Black Lines" @click="ActivateCanvasThree()" class="btn btn-success">Canvas 3</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Black Triangle" @click="ActivateCanvasFour()" class="btn btn-danger">Canvas 4</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Curved Triangle" @click="ActivateCanvasFive()" class="btn btn-secondary">Canvas
                5</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Shape With Two Curves" @click="ActivateCanvasSix()" class="btn btn-info">Canvas
                6</button>
            </div>
          </div>
          <div class="col-4">
            <div class="m-1">
              <button title="Draws Circle And Radius" @click="ActivateCanvasSeven()" class="btn btn-dark">Canvas
                7</button>
            </div>
          </div>
          <div class="col-8">
            <div class="m-1">
              <button title="Clear Canvas" @click="ClearCanvas()" class="btn btn-dark-outline w-100">Clear
                Canvas</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- NOTE Canvas's can be put in div's for easy placement. -->
  <div class="m-3">
    <canvas id="CanvasOne" width="350" height="250"></canvas>
  </div>
</template>

<script>
export default {
  setup() {
    // TODO Get this to work or figure out why it won't work.
    // onMounted(() => {
    //   DeclareCanvas();
    // })
    // function DeclareCanvas() {
    //   let canvas = document.getElementById("CanvasOne").getContext("2d");
    // };
    return {
      ActivateCanvas() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.fillStyle = "green";
        canvas.fillRect(10, 10, 100, 50);
      },
      ActivateCanvasTwo() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.strokeStyle = "red";
        canvas.strokeRect(5, 5, 50, 50);
        canvas.lineWidth = 5;
        canvas.strokeRect(135, 5, 50, 50)
      },
      ActivateCanvasThree() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.beginPath();
        for (let i = 10; i < 100; i += 10) {
          canvas.moveTo(10, i);
          canvas.lineTo(90, i);
        }
        canvas.stroke();
      },
      ActivateCanvasFour() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.beginPath();
        canvas.moveTo(50, 10);
        canvas.lineTo(10, 70);
        canvas.lineTo(90, 70);
        canvas.fill();
      },
      ActivateCanvasFive() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.beginPath();
        canvas.moveTo(10, 90);
        // NOTE I don't know if this control and goal is required; book just said to add it.
        // control = (60, 10) goal = (90, 90)
        canvas.quadraticCurveTo(60, 10, 90, 90);
        canvas.lineTo(60, 10);
        canvas.closePath();
        canvas.stroke();
      },
      ActivateCanvasSix() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.beginPath();
        canvas.moveTo(10, 90);
        canvas.bezierCurveTo(10, 10, 90, 10, 50, 90);
        canvas.lineTo(90, 10);
        canvas.lineTo(10, 10);
        canvas.closePath();
        canvas.stroke();
      },
      ActivateCanvasSeven() {
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        canvas.beginPath();
        canvas.arc(50, 50, 40, 0, 7);
        canvas.arc(150, 50, 40, 0, 0.5 * Math.PI);
        canvas.stroke();
      },
      ClearCanvas() {
        // FIXME this doesn't work 🥲.
        let canvas = document.getElementById("CanvasOne").getContext("2d");
        // canvas.save();
        // Use the identity matrix while clearing the canvas
        canvas.setTransform(1, 0, 0, 1, 0, 0);
        canvas.clearRect(0, 0, canvas.width, canvas.height);
        // Restore the transform
        // canvas.restore();
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
