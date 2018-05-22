function Model() {
  this.elemArguments = []
}
setTimeout(lol, 2000)

Model.prototype.addElemArgument = function addElemArgument(elem, start, end, step, shouldDelete, leftRight, topBottom, type) {
  var elemArgument

  if(type === "bezier") {
    elemArgument = new ElemArgument()
  } else if (type === "balloons") {
    elemArgument = new ElemArgument()

    elem.style.backgroundPositionY = screen.availHeight + "px"
  } else if (type === "star") {
    elemArgument = new ElemArgument()
  }

  elemArgument.type = type

  elemArgument.elem = elem

  elemArgument.leftRight = leftRight

  elemArgument.topBottom = topBottom

  elemArgument.bezier = this.getBezierCurve(new Array(start, [(end[0] - start[0]) / 3, Math.floor(Math.random() * (end[1] - start[1] + 1000) - 500 )], [(end[0] - start[0]) * 2 / 3, Math.floor(Math.random() * (end[1] - start[1] + 100) - 50 )], end), 0.01);

  elemArgument.step = step

  elemArgument.iter = 0

  elemArgument.shouldDelete = shouldDelete

  this.elemArguments.push(elemArgument)

  function addEnd() {
    elemArgument.bezier.push(end)
  }
};



// i - номер вершины, n - количество вершин, t - положение кривой (от 0 до 1)
Model.prototype.getBezierBasis = function getBezierBasis(i, n, t) {
  // Факториал
	function f(n) {
		return (n <= 1) ? 1 : n * f(n - 1);
	};

	// считаем i-й элемент полинома Берштейна
	return (f(n)/(f(i)*f(n - i)))* Math.pow(t, i)*Math.pow(1 - t, n - i);
}


// arr - массив опорных точек. Точка - двухэлементный массив, (x = arr[0], y = arr[1])
// step - шаг при расчете кривой (0 < step < 1), по умолчанию 0.01
Model.prototype.getBezierCurve = function getBezierCurve(arr, step) {
  if (step == undefined) {
    step = 0.01;
  }

  var res = new Array()

  for (var t = 0; t < 1 + step; t += step) {
    if (t > 1) {
      t = 1;
    }

    var ind = res.length;

    res[ind] = new Array(0, 0);

    for (var i = 0; i < arr.length; i++) {
      var b = this.getBezierBasis(i, arr.length - 1, t);

      res[ind][0] += arr[i][0] * b;
      res[ind][1] += arr[i][1] * b;
    }
  }

  return res;
}




function View(body) {
  this.body = body
  this.happy = body.querySelector("#happy")
  this.birthday = body.querySelector("#birthday")
  this.balloons = body.querySelector("#balloons")
}


View.prototype.drawElement = function drawElement(elemArgument) {
  if (elemArgument.type === "bezier" || elemArgument.type === "star") {
    elemArgument.elem.style[elemArgument.leftRight] = elemArgument.bezier[elemArgument.iter][1] + "px"
    elemArgument.elem.style[elemArgument.topBottom] = elemArgument.bezier[elemArgument.iter][0] + "px"
  } else if (elemArgument.type === "balloons") {
    elemArgument.step = elemArgument.step*0.99
    elemArgument.elem.style.backgroundPositionY = parseInt(elemArgument.elem.style.backgroundPositionY) - elemArgument.step + "px"
  }
};





function Controller(model, view) {
  this.model = model
  this.view = view
}


Controller.prototype.mouseClick  = function mouseClick() {
  var that = this

  function callback(event) {
    var elem = document.createElement("div")

    elem.className = "star"

    that.view.body.appendChild(elem);

    elem.style.top = event.clientY + "px"
    elem.style.left = event.clientX + "px"

    that.model.addElemArgument(elem, [event.clientY, event.clientX], [screen.availHeight*0.5, screen.availWidth*0.5], 1, true, "left", "top", "star")
  }

  window.addEventListener("click", callback);
}


Controller.prototype.start = function start() {
  this.model.addElemArgument(this.view.happy, [-300, 0], [100, screen.availWidth*0.5], 1, false, "left", "top", "bezier")
  this.model.addElemArgument(this.view.birthday, [100, screen.availWidth - 300], [100, screen.availWidth * 0.5 - 300 ], 1, false, "left", "top", "bezier")
  this.model.addElemArgument(this.view.balloons, [0, 0], [0, 0], 7, false, "", "", "balloons")


  function loop() {
    for(var element in this.model.elemArguments) {
      if (this.model.elemArguments[element].type === "bezier" || this.model.elemArguments[element].type === "star") {
        if(this.model.elemArguments[element].iter <= this.model.elemArguments[element].bezier.length - 1) {
          this.view.drawElement(this.model.elemArguments[element])


          this.model.elemArguments[element].increment();
        } else {
          if (this.model.elemArguments[element].type === "star") {
            this.model.elemArguments[element].elem.style.display = "none"
          }
        }
      } else if (this.model.elemArguments[element].type === "balloons") {
        this.view.drawElement(this.model.elemArguments[element])
      }
    }


    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
}




function ElemArgument() {}

ElemArgument.prototype.increment = function increment() {
  this.iter++;
};


function Balloons() {}

Balloons.prototype.increment = function increment() {
  this.iter++;
};




var model = new Model()
var view = new View(document.body)
var controller = new Controller(model, view)

funnction lol() {
	var lol = 0
	controller.start()
	controller.mouseClick()


	var main = document.querySelector("#main")


	main.style.width = screen.availWidth
	main.style.height = screen.availHeight
}

