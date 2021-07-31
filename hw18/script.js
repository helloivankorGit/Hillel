
let canvas = document.querySelector('#canvas')
    ctx = canvas.getContext('2d');
    ballRadius = 5;
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    paddleHeight = 4;
    paddleWidth = 75;
    paddleX = (canvas.width-paddleWidth)/2;
    rightPressed = false;
    leftPressed = false;
    brickRowCount = 5;
    brickColumnCount = 3;
    brickWidth = 75;
    brickHeight = 10;
    brickPadding = 10;
    brickOffsetTop = 30;
    brickOffsetLeft = 30;
    score = 0;
    lives = 3;
    
    let bricks = [];
    for(let c= 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    
    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    
    function mouseMoveHandler(e) {
      let relativeX = e.clientX - canvas.offsetLeft;
      if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
      }
    }

    function collisionDetection() {
      for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if(b.status == 1) {
            if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy;
              b.status = 0;
              score++;
              if(score == brickRowCount*brickColumnCount) {
                alert("YOU WIN, CONGRATULATIONS!");
                document.location.reload();
              }
            }
          }
        }
      }
    }
    
    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }
    function drawBricks() {
      for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {
            let brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }
    function drawScore() {
      ctx.font = "12px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+score, 8, 20);
    }
    function drawLives() {
      ctx.font = "12px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }
    
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      drawLives();
      collisionDetection();
    
      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if(y + dy < ballRadius) {
        dy = -dy;
      }
      else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        }
        else {
          lives--;
          if(!lives) {
            alert("GAME OVER");
            document.location.reload();
          }
          else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
          }
        }
      }
    
      if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
      }
      else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
      }
    
      x += dx;
      y += dy;
      requestAnimationFrame(draw);
    }
    
    draw();