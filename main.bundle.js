webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animated-icons/animated-icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    position: absolute;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0.1vw solid #a78247;\n    overflow: hidden;\n  }\n  div:before, div:after {\n    content: '';\n    display: block;\n    position: absolute;\n  }\n  .wrapper{\n      background: #303030;\n      float: left;\n  }\n  body {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: #303030;\n    overflow-x: hidden;\n  }\n  \n  .wrapper {    \n  \n  }\n  .wrapper .icon {\n    position: relative;\n    display: inline-block;\n    width: 12vw;\n    height: 12vw;\n    margin: 2.5vw 1.5vw;\n    border: 0;\n    overflow: visible;\n  }\n  .wrapper .icon .moon, .wrapper .icon .planetoid, .wrapper .icon .planet {\n    border-radius: 50%;\n    background: #303030;\n  }\n  .wrapper .icon.icon1 .moon.top {\n    top: 10%;\n    right: 5%;\n    width: 12%;\n    height: 12%;\n    animation: icon1moontop 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon1 .moon.bottom {\n    top: 75%;\n    left: 15%;\n    width: 8%;\n    height: 8%;\n    animation: icon1moonbottom 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon1 .planet {\n    top: 20%;\n    left: 20%;\n    width: 62%;\n    height: 62%;\n  }\n  .wrapper .icon.icon1 .planet .line {\n    height: 0.1vw;\n    border-color: #a78247 transparent transparent transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon1 .planet .line.line1 {\n    top: 15%;\n    left: 0;\n    width: 60%;\n  }\n  .wrapper .icon.icon1 .planet .line.line2 {\n    top: 30%;\n    left: 0;\n    width: 20%;\n  }\n  .wrapper .icon.icon1 .planet .line.line2:after {\n    top: -0.1vw;\n    left: 140%;\n    height: 0.1vw;\n    width: 60%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon1 .planet .line.line3 {\n    top: 38%;\n    right: 0;\n    width: 40%;\n  }\n  .wrapper .icon.icon1 .planet .line.line4 {\n    top: 48%;\n    right: 0;\n    width: 18%;\n  }\n  .wrapper .icon.icon1 .planet .line.line5 {\n    top: 57%;\n    left: 0;\n    width: 30%;\n  }\n  .wrapper .icon.icon1 .planet .line.line5:after {\n    top: -0.1vw;\n    left: 140%;\n    height: 0.1vw;\n    width: 40%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon1 .planet .line.line6 {\n    top: 68%;\n    left: 0;\n    width: 70%;\n  }\n  .wrapper .icon.icon1 .planet .line.line7 {\n    top: 80%;\n    right: 0;\n    width: 30%;\n  }\n  .wrapper .icon.icon1 .planet .line.line7:after {\n    top: -0.1vw;\n    left: -80%;\n    height: 0.1vw;\n    width: 40%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon2 .planetoid {\n    top: 15%;\n    right: 9%;\n    width: 10%;\n    height: 10%;\n    overflow: visible;\n    animation: icon2planetoid 5s linear 1s infinite;\n  }\n  .wrapper .icon.icon2 .planetoid:after {\n    top: -35%;\n    left: -35%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon2 .planet {\n    top: 20%;\n    left: 17%;\n    width: 63%;\n    height: 63%;\n  }\n  .wrapper .icon.icon2 .planet:after {\n    top: 10%;\n    left: 10%;\n    width: 70%;\n    height: 70%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(-50deg);\n  }\n  .wrapper .icon.icon2 .ring {\n    top: 40%;\n    left: 10%;\n    width: 77.5%;\n    height: 25%;\n    border-radius: 50%;\n    border-color: transparent #a78247 #a78247 #a78247;\n    transform: rotate(-17deg);\n    animation: icon2ring 5s linear 0s alternate infinite;\n  }\n  .wrapper .icon.icon3 .top {\n    top: -10%;\n    left: 5%;\n    width: 66%;\n    height: 66%;\n    transform: rotate(-30deg);\n    border-color: transparent transparent #a78247 transparent;\n  }\n  .wrapper .icon.icon3 .top .visor {\n    top: 44%;\n    left: 3%;\n    width: 88%;\n    height: 88%;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon3 .top .visor:after {\n    top: 10%;\n    left: 10%;\n    width: 70%;\n    height: 70%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(-50deg);\n  }\n  .wrapper .icon.icon3 .top .hood {\n    top: 35%;\n    left: 50%;\n    width: 70%;\n    height: 70%;\n    border-color: transparent transparent transparent #a78247;\n    transform-origin: left bottom;\n    animation: icon3hood 5s linear 0s alternate infinite;\n  }\n  .wrapper .icon.icon3 .top .hood:after {\n    top: 0;\n    left: -82%;\n    width: 150%;\n    padding-top: 150%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon3 .middle {\n    top: 42%;\n    left: 47.5%;\n    width: 15%;\n    height: 15%;\n    border-radius: 50%;\n    background: #303030;\n    overflow: visible;\n    transform: rotate(-30deg);\n    animation: icon3middle 15s linear 0s infinite;\n  }\n  .wrapper .icon.icon3 .middle:before {\n    top: 37%;\n    left: -55%;\n    width: 40%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon3 .bottom {\n    top: 52%;\n    left: 30%;\n    width: 66%;\n    height: 25%;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(-30deg);\n  }\n  .wrapper .icon.icon3 .bottom .neck {\n    top: -100%;\n    left: 0;\n    width: 95%;\n    height: 150%;\n    transform: rotate(12deg);\n    border-color: transparent transparent #a78247 transparent;\n  }\n  .wrapper .icon.icon3 .bottom .neck:after {\n    top: -37%;\n    left: 0;\n    width: 95%;\n    padding-top: 100%;\n    border-radius: 50%;\n    border: 0.1vw solid #a78247;\n  }\n  .wrapper .icon.icon3 .bottom .line {\n    top: 60%;\n    left: 0;\n    width: 85%;\n    height: 1%;\n    transform: rotate(12.5deg);\n    border-color: transparent transparent #a78247 transparent;\n  }\n  .wrapper .icon.icon4 .planetoid.top {\n    top: 10%;\n    left: 12%;\n    width: 8%;\n    height: 8%;\n    overflow: visible;\n    transform-origin: -50% -50%;\n    animation: icon4planet 5s linear 0s infinite;\n  }\n  .wrapper .icon.icon4 .planetoid.top:after {\n    top: 83%;\n    left: -48%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon4 .planetoid.middle {\n    top: 35%;\n    left: 54%;\n    width: 15%;\n    height: 15%;\n    overflow: visible;\n    transform-origin: -50% 100%;\n    animation: icon4planet 10s ease-out 0s infinite;\n  }\n  .wrapper .icon.icon4 .planetoid.middle:before {\n    top: -20%;\n    left: -20%;\n    width: 50%;\n    padding-top: 50%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    background: #303030;\n    transform-origin: 50% 70%;\n    animation: icon4planet 10s ease-out 0s infinite;\n  }\n  .wrapper .icon.icon4 .planetoid.bottom {\n    top: 61%;\n    left: 31%;\n    width: 9%;\n    height: 9%;\n    overflow: visible;\n    transform-origin: 150% -100%;\n    animation: icon4planet 10s ease-out 0s infinite;\n  }\n  .wrapper .icon.icon4 .planetoid.bottom:after {\n    top: -28%;\n    left: 122%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    transform-origin: 500% 500%;\n    animation: icon4planet 10s ease-out 0s infinite;\n  }\n  .wrapper .icon.icon4 .planet {\n    top: 20%;\n    left: 18%;\n    width: 65%;\n    height: 65%;\n    overflow: visible;\n    animation: icon4planet 5s linear 0s infinite;\n  }\n  .wrapper .icon.icon4 .planet:after {\n    top: 75%;\n    left: 75%;\n    width: 20%;\n    height: 20%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    background: #303030;\n  }\n  .wrapper .icon.icon5 .planet {\n    top: 15%;\n    left: 25%;\n    width: 62%;\n    height: 62%;\n    border-color: #a78247 #a78247 #a78247 transparent;\n    transform: rotate(-47deg);\n    overflow: visible;\n  }\n  .wrapper .icon.icon5 .planet:after {\n    top: -25%;\n    left: 50%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon5 .rocket {\n    top: 0;\n    left: 33%;\n    width: 40%;\n    height: 100%;\n    border-color: transparent;\n    transform: rotate(47deg);\n  }\n  .wrapper .icon.icon5 .rocket .body {\n    top: 0;\n    left: 15%;\n    width: 70%;\n    height: 90%;\n    border-color: transparent;\n    animation: icon5body 0.5s ease infinite;\n  }\n  .wrapper .icon.icon5 .rocket .body:before, .wrapper .icon.icon5 .rocket .body:after {\n    top: -10%;\n    width: 200%;\n    height: 118%;\n    border-radius: 50%;\n    border: 0.1vw solid #a78247;\n  }\n  .wrapper .icon.icon5 .rocket .body:after {\n    left: -110%;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.left, .wrapper .icon.icon5 .rocket .thruster.right {\n    top: 60%;\n    left: 7.5%;\n    width: 25%;\n    height: 25%;\n    border-color: transparent;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.left:before, .wrapper .icon.icon5 .rocket .thruster.left:after, .wrapper .icon.icon5 .rocket .thruster.right:before, .wrapper .icon.icon5 .rocket .thruster.right:after {\n    border-radius: 50%;\n    border: 0.1vw solid #a78247;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.left:before, .wrapper .icon.icon5 .rocket .thruster.right:before {\n    top: -10%;\n    width: 200%;\n    height: 120%;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.left:after, .wrapper .icon.icon5 .rocket .thruster.right:after {\n    top: 60%;\n    left: 30%;\n    width: 132%;\n    padding-top: 132%;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.right {\n    left: 64.5%;\n    transform: rotatey(180deg);\n  }\n  .wrapper .icon.icon5 .rocket .thruster.mid {\n    top: 60%;\n    left: 23%;\n    width: 51%;\n    height: 12%;\n    border-color: transparent;\n  }\n  .wrapper .icon.icon5 .rocket .thruster.mid:before {\n    top: 0;\n    left: 0;\n    width: 90%;\n    padding-top: 90%;\n    border-radius: 50%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 #a78247 transparent #a78247;\n  }\n  .wrapper .icon.icon5 .line {\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(-45deg);\n    transform-origin: top right;\n    overflow: visible;\n  }\n  .wrapper .icon.icon5 .line:before {\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon5 .line.left {\n    width: 24%;\n    top: 60%;\n    left: 4%;\n    animation: icon5line1 0.5s ease infinite reverse;\n  }\n  .wrapper .icon.icon5 .line.left:before {\n    top: -15%;\n    left: -60%;\n    width: 20%;\n  }\n  .wrapper .icon.icon5 .line.mid {\n    width: 44%;\n    top: 50%;\n    left: 5.5%;\n    animation: icon5line2 0.5s ease infinite;\n  }\n  .wrapper .icon.icon5 .line.mid:before {\n    top: -105%;\n    left: 110%;\n    width: 10%;\n  }\n  .wrapper .icon.icon5 .line.right {\n    width: 14%;\n    top: 80%;\n    left: 17%;\n    animation: icon5line3 0.5s ease 1s infinite reverse;\n  }\n  .wrapper .icon.icon5 .line.right:before {\n    width: 0;\n    border-color: transparent;\n  }\n  .wrapper .icon.icon6 .moon.top {\n    top: 15%;\n    left: 10%;\n    width: 8%;\n    height: 8%;\n    animation: icon6moontop 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon6 .moon.bottom {\n    top: 85%;\n    right: 5%;\n    width: 1%;\n    height: 1%;\n    animation: icon6moonbottom 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon6 .planet {\n    top: 25%;\n    left: 24%;\n    width: 63%;\n    height: 63%;\n  }\n  .wrapper .icon.icon6 .ring {\n    top: 45%;\n    left: 15%;\n    width: 80%;\n    height: 25%;\n    border-radius: 50%;\n    border-color: transparent #a78247 #a78247 #a78247;\n    transform: rotate(17deg);\n    animation: icon6ring 5s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon6 .ring.planet {\n    top: 62.5%;\n    left: 40%;\n    width: 8%;\n    height: 8%;\n    border-color: #a78247;\n    background: #303030;\n    z-index: 1;\n    overflow: visible;\n    animation: icon6ringplanet 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon6 .ring.planet:after {\n    top: -55%;\n    left: 80%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon6 .planetoid {\n    top: 25%;\n    left: 70%;\n    width: 20%;\n    height: 20%;\n    overflow: visible;\n    background: #303030;\n  }\n  .wrapper .icon.icon6 .planetoid:before {\n    top: -25%;\n    left: -25%;\n    width: 150%;\n    padding-top: 150%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 #a78247 transparent transparent;\n    transform: rotate(55deg);\n    background: transparent;\n  }\n  .wrapper .icon.icon6 .planetoid:after {\n    top: 100%;\n    left: 5%;\n    width: 30%;\n    padding-top: 15%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: transparent transparent #a78247 transparent;\n    transform: rotate(35deg);\n    background: transparent;\n  }\n  .wrapper .icon.icon7 .telescope {\n    top: 15%;\n    left: 10%;\n    width: 75%;\n    height: 33%;\n    transform: rotate(-17deg);\n    border-color: transparent;\n    animation: icon7telescope 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon7 .telescope:before, .wrapper .icon.icon7 .telescope:after {\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon7 .telescope:before {\n    width: 25%;\n    left: 60%;\n  }\n  .wrapper .icon.icon7 .telescope:after {\n    bottom: 15%;\n    width: 15%;\n    left: 65%;\n  }\n  .wrapper .icon.icon7 .telescope .body {\n    top: 20%;\n    left: 10%;\n    width: 75%;\n    height: 45%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon7 .telescope .body .line {\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(90deg);\n  }\n  .wrapper .icon.icon7 .telescope .body .line.line1 {\n    top: 45%;\n    left: -5%;\n    width: 40%;\n  }\n  .wrapper .icon.icon7 .telescope .body .line.line2 {\n    top: 45%;\n    left: 20%;\n    width: 28%;\n  }\n  .wrapper .icon.icon7 .telescope .body .line.line3 {\n    top: 45%;\n    left: 45%;\n    width: 28%;\n  }\n  .wrapper .icon.icon7 .telescope .body .line.line4 {\n    top: 45%;\n    left: 65%;\n    width: 28%;\n  }\n  .wrapper .icon.icon7 .telescope .lens {\n    top: 10%;\n    right: 0;\n    width: 16%;\n    height: 62%;\n  }\n  .wrapper .icon.icon7 .tripod {\n    top: 35%;\n    left: 30%;\n    width: 45%;\n    height: 45%;\n    border-color: transparent;\n  }\n  .wrapper .icon.icon7 .tripod .anchor {\n    left: 40%;\n    width: 20%;\n    height: 20%;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon7 .tripod .foot {\n    top: 20%;\n    left: 50%;\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n    transform-origin: top left;\n  }\n  .wrapper .icon.icon7 .tripod .foot.left {\n    width: 92%;\n    transform: rotate(115deg);\n  }\n  .wrapper .icon.icon7 .tripod .foot.mid {\n    width: 84%;\n    transform: rotate(90deg);\n  }\n  .wrapper .icon.icon7 .tripod .foot.right {\n    width: 92%;\n    transform: rotate(65deg);\n  }\n  .wrapper .icon.icon7 .ground {\n    top: 80%;\n    left: 30%;\n    width: 45%;\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon7 .ground:after {\n    top: -10%;\n    left: 115%;\n    width: 8%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon8 .moon.top {\n    top: 15%;\n    left: 10%;\n    width: 8%;\n    height: 8%;\n    overflow: visible;\n    animation: icon8moontop 2.5s linear 0s infinite;\n  }\n  .wrapper .icon.icon8 .moon.top:before {\n    top: 120%;\n    left: -30%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon8 .moon.bottom {\n    top: 85%;\n    right: 5%;\n    width: 1%;\n    height: 1%;\n    animation: icon8moonbottom 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon8 .planet {\n    top: 25%;\n    left: 24%;\n    width: 63%;\n    height: 63%;\n  }\n  .wrapper .icon.icon8 .ring {\n    top: 45%;\n    left: 15%;\n    width: 80%;\n    height: 25%;\n    border-radius: 50%;\n    border-color: transparent #a78247 #a78247 #a78247;\n    transform: rotate(17deg);\n    overflow: visible;\n    animation: icon8ring 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon8 .ring:after {\n    top: 80%;\n    left: 22%;\n    width: 10%;\n    padding-top: 10%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 #a78247 transparent transparent;\n    transform: rotate(45deg);\n  }\n  .wrapper .icon.icon8 .planetoid {\n    top: 25%;\n    left: 70%;\n    width: 20%;\n    height: 20%;\n    overflow: visible;\n    background: #303030;\n    animation: icon8planetoid 5s linear 0s infinite reverse;\n  }\n  .wrapper .icon.icon8 .planetoid:before {\n    top: -25%;\n    left: -25%;\n    width: 150%;\n    padding-top: 150%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 #a78247 transparent transparent;\n    transform: rotate(55deg);\n    background: transparent;\n  }\n  .wrapper .icon.icon8 .planetoid:after {\n    top: -40%;\n    left: 50%;\n    width: 20%;\n    padding-top: 20%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent #a78247;\n    transform: rotate(-35deg);\n    background: transparent;\n  }\n  .wrapper .icon.icon9 .planetoid {\n    top: 15%;\n    left: 27%;\n    width: 10%;\n    height: 10%;\n    overflow: visible;\n    animation: icon9planetoid 5s linear 0s infinite;\n  }\n  .wrapper .icon.icon9 .planetoid:before {\n    top: -50%;\n    left: 200%;\n    width: 1%;\n    padding-top: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    transform-origin: -450% -200%;\n    animation: icon9planetoid 5s ease 0s infinite reverse;\n  }\n  .wrapper .icon.icon9 .planetoid:after {\n    top: -20%;\n    left: 300%;\n    width: 15%;\n    padding-top: 15%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    transform-origin: 150% 50%;\n    animation: icon9planetoid 5s ease 2.5s infinite;\n  }\n  .wrapper .icon.icon9 .flag {\n    top: 30%;\n    left: 40%;\n    width: 40%;\n    height: 25%;\n    background: #303030;\n  }\n  .wrapper .icon.icon9 .flag .square {\n    top: -0.1vw;\n    left: -0.1vw;\n    width: 45%;\n    height: calc(50%  + 2*0.1vw);\n  }\n  .wrapper .icon.icon9 .flag .line {\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon9 .flag .line.line1 {\n    top: 25%;\n    left: 40%;\n    width: 60%;\n  }\n  .wrapper .icon.icon9 .flag .line.line2 {\n    top: 50%;\n    left: 40%;\n    width: 60%;\n  }\n  .wrapper .icon.icon9 .flag .line.line3 {\n    top: 75%;\n    left: 0;\n    width: 100%;\n  }\n  .wrapper .icon.icon9 .pole {\n    top: 54%;\n    left: 40%;\n    width: 1%;\n    height: 30%;\n    border-color: transparent transparent transparent #a78247;\n  }\n  .wrapper .icon.icon9 .ground {\n    top: 84%;\n    left: 33%;\n    width: 46%;\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon9 .ground:before {\n    top: -0.1vw;\n    left: -25%;\n    height: 10%;\n    width: 10%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon9 .ground:after {\n    top: -0.5vw;\n    left: 65%;\n    width: 0.8vw;\n    padding-top: 0.8vw;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 #a78247 transparent transparent;\n    transform: rotate(-45deg);\n  }\n  .wrapper .icon.icon10 .orbit, .wrapper .icon.icon10 .planet {\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon10 .orbit {\n    border-color: #a78247 #a78247 #a78247 transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon10 .orbit:before {\n    top: -7.5%;\n    left: 30%;\n    width: 15%;\n    height: 15%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    background: #303030;\n  }\n  .wrapper .icon.icon10 .orbit.orbit1 {\n    top: 17.5%;\n    left: 17.5%;\n    width: 65%;\n    height: 65%;\n    transform: rotate(150deg);\n    animation: icon10orbit 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon10 .orbit.orbit2 {\n    top: 30%;\n    left: 30%;\n    width: 40%;\n    height: 40%;\n    transform: rotate(50deg);\n    animation: icon10orbit 5s ease 0s infinite reverse;\n  }\n  .wrapper .icon.icon10 .planet {\n    top: 42.5%;\n    left: 42.5%;\n    width: 15%;\n    height: 15%;\n    animation: icon10planet 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon11 .planet {\n    top: 17.5%;\n    left: 17.5%;\n    width: 65%;\n    height: 65%;\n    overflow: visible;\n    animation: icon11planet 10s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon11 .planet:before {\n    top: -10%;\n    left: 73%;\n    width: 25%;\n    height: 25%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n    border-color: #a78247 #a78247 transparent #a78247;\n    transform: rotate(40deg);\n  }\n  .wrapper .icon.icon11 .planet .line {\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon11 .planet .line.line1 {\n    top: 7%;\n    right: 22%;\n    width: 25%;\n  }\n  .wrapper .icon.icon11 .planet .line.line2 {\n    top: 18%;\n    left: 10%;\n    width: 55%;\n  }\n  .wrapper .icon.icon11 .planet .line.line3 {\n    top: 30%;\n    left: 3%;\n    width: 94%;\n  }\n  .wrapper .icon.icon11 .planet .line.line4 {\n    top: 40%;\n    right: 0;\n    width: 35%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon11 .planet .line.line4:before {\n    top: -0.1vw;\n    left: -60%;\n    width: 30%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon11 .planet .line.line5 {\n    top: 50%;\n    left: 0;\n    width: 100%;\n  }\n  .wrapper .icon.icon11 .planet .line.line6 {\n    top: 58%;\n    left: 0;\n    width: 28%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon11 .planet .line.line6:before {\n    top: -0.1vw;\n    left: 130%;\n    width: 30%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon11 .planet .line.line7 {\n    top: 68%;\n    left: 3%;\n    width: 58%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon11 .planet .line.line7:before {\n    top: -0.1vw;\n    left: 120%;\n    width: 40%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon11 .planet .line.line7:after {\n    margin-top: -15%;\n    left: 100%;\n    padding: 8%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon11 .planet .line.line8 {\n    top: 80%;\n    right: 10%;\n    width: 25%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon11 .planet .line.line8:before {\n    top: -0.1vw;\n    left: -70%;\n    width: 30%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon11 .planet .line.line9 {\n    top: 93%;\n    left: 25%;\n    width: 25%;\n  }\n  .wrapper .icon.icon12 .planet {\n    top: 25%;\n    left: 10%;\n    width: 65%;\n    height: 65%;\n    animation: icon12planet 0.5s linear infinite alternate;\n  }\n  .wrapper .icon.icon12 .planet:before {\n    top: 17.5%;\n    left: 17.5%;\n    width: 65%;\n    height: 65%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon12 .line {\n    height: 1%;\n    border-color: #a78247 transparent transparent transparent;\n    transform-origin: top left;\n    transform: rotate(-45deg);\n    overflow: visible;\n  }\n  .wrapper .icon.icon12 .line.line1 {\n    top: 32%;\n    left: 22%;\n    width: 30%;\n    animation: icon12line1 0.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon12 .line.line2 {\n    top: 63%;\n    left: 25%;\n    width: 20%;\n    animation: icon12line2 0.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon12 .line.line2:before, .wrapper .icon.icon12 .line.line2:after {\n    top: -0.1vw;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon12 .line.line2:before {\n    width: 65%;\n    left: 145%;\n  }\n  .wrapper .icon.icon12 .line.line2:after {\n    width: 65%;\n    left: 250%;\n  }\n  .wrapper .icon.icon12 .line.line3 {\n    top: 63%;\n    left: 42%;\n    width: 20%;\n    animation: icon12line3 0.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon12 .line.line3:before {\n    top: -0.2vw;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n    width: 145%;\n    left: 135%;\n  }\n  .wrapper .icon.icon12 .line.line4 {\n    top: 67%;\n    left: 55%;\n    width: 50%;\n    animation: icon12line4 0.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon12 .line.line4:before {\n    top: -0.2vw;\n    left: 110%;\n    width: 10%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon12 .line.line5 {\n    top: 80%;\n    left: 65%;\n    width: 50%;\n    animation: icon12line5 0.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon13 .moon.bottom {\n    top: 75%;\n    right: 5%;\n    width: 1%;\n    height: 1%;\n    animation: icon13moonbottom 5s ease 0s infinite;\n  }\n  .wrapper .icon.icon13 .planet {\n    top: 17.5%;\n    left: 17.5%;\n    width: 65%;\n    height: 65%;\n  }\n  .wrapper .icon.icon13 .ring {\n    top: 38%;\n    left: 10%;\n    width: 80%;\n    height: 24%;\n    border-radius: 50%;\n    border-color: transparent #a78247 #a78247 #a78247;\n    transform: rotate(17deg);\n    animation: icon13ring 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon13 .planetoid {\n    top: 15%;\n    left: 60%;\n    width: 20%;\n    height: 20%;\n    background: #303030;\n  }\n  .wrapper .icon.icon13 .square {\n    top: 12%;\n    left: 45%;\n    width: 40%;\n    height: 26%;\n    border-radius: 0;\n    background: transparent !important;\n    overflow: visible;\n  }\n  .wrapper .icon.icon13 .square:before {\n    top: -10%;\n    left: 0;\n    width: 20%;\n    height: 5%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 #a78247 transparent transparent;\n    animation: icon13click 2.5s ease infinite alternate;\n  }\n  .wrapper .icon.icon14 .top {\n    top: 12.5%;\n    left: 10%;\n    width: 80%;\n    height: 10%;\n    border-color: transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .top .line {\n    top: 49%;\n    height: 2%;\n    width: 36%;\n    border-color: #a78247 transparent transparent transparent;\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .top .line:before {\n    margin-top: -25%;\n    padding: 18%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon14 .top .line.left {\n    left: 15%;\n    transform-origin: 100% 50%;\n    animation: icon14lineleft 5s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon14 .top .line.left:before {\n    margin-left: -50%;\n  }\n  .wrapper .icon.icon14 .top .line.right {\n    right: 15%;\n    transform-origin: 0% 50%;\n    animation: icon14lineright 5s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon14 .top .line.right:before {\n    margin-left: 100%;\n  }\n  .wrapper .icon.icon14 .top .square {\n    top: -0.1vw;\n    left: calc(45% - 0.1vw);\n    padding: 6%;\n    background: #303030;\n    z-index: 1;\n  }\n  .wrapper .icon.icon14 .planet {\n    top: 17.5%;\n    left: 17.5%;\n    width: 65%;\n    height: 65%;\n    border-color: #a78247 #a78247 transparent #a78247;\n    transform: rotate(15deg);\n    overflow: visible;\n    animation: icon14planet 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon14 .planet:after {\n    top: 75%;\n    width: 15%;\n    padding-top: 15%;\n    border: 0.1vw solid #a78247;\n    transform: rotate(-15deg);\n    background: #303030;\n  }\n  .wrapper .icon.icon14 .ring {\n    top: 37.5%;\n    left: 10%;\n    width: 80%;\n    height: 25%;\n    border-radius: 50%;\n    border-color: transparent #a78247 #a78247 #a78247;\n    transform: rotate(17deg);\n    animation: icon14ring 5s ease 0s infinite alternate;\n  }\n  .wrapper .icon.icon14 .moon {\n    top: 90%;\n    left: 10%;\n    width: 12%;\n    height: 12%;\n    animation: icon14moon 5s ease-in-out 0s infinite alternate;\n  }\n  .wrapper .icon.icon14 .pen {\n    top: 22%;\n    left: 30%;\n    width: 40%;\n    height: 65%;\n    border: 0;\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .pen .head.left {\n    top: 0;\n    left: 38%;\n    height: 65%;\n    width: 1%;\n    border-color: transparent transparent transparent #a78247;\n    transform-origin: top left;\n    transform: rotate(20deg);\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .pen .head.left:before {\n    top: 100%;\n    left: -0.15vw;\n    height: 40%;\n    width: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: transparent transparent transparent #a78247;\n    transform-origin: top center;\n    transform: rotate(-60deg);\n  }\n  .wrapper .icon.icon14 .pen .head.right {\n    top: 0;\n    left: 60%;\n    height: 65%;\n    width: 1%;\n    border-color: transparent transparent transparent #a78247;\n    transform-origin: top center;\n    transform: rotate(-20deg);\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .pen .head.right:before {\n    top: 100%;\n    right: -0.15vw;\n    height: 40%;\n    width: 1%;\n    border: 0.1vw solid #a78247;\n    border-color: transparent transparent transparent #a78247;\n    transform-origin: top center;\n    transform: rotate(60deg);\n  }\n  .wrapper .icon.icon14 .pen .line {\n    top: 0;\n    left: 50%;\n    width: 1%;\n    height: 45%;\n    border-color: transparent transparent transparent #a78247;\n    overflow: visible;\n  }\n  .wrapper .icon.icon14 .pen .line:after {\n    top: 100%;\n    left: -0.2vw;\n    width: 0.2vw;\n    padding-top: 0.2vw;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon14 .pen .bottom {\n    top: 80%;\n    left: 18%;\n    width: 64%;\n    height: 15%;\n  }\n  .wrapper .icon.icon15 .planetoid {\n    top: 10%;\n    left: 20%;\n    width: 10%;\n    height: 10%;\n    overflow: visible;\n    animation: icon15planetoid 5s linear 0s infinite;\n  }\n  .wrapper .icon.icon15 .planetoid:before {\n    top: 110%;\n    left: -60%;\n    width: 1%;\n    height: 1%;\n    border: 0.1vw solid #a78247;\n    border-radius: 50%;\n  }\n  .wrapper .icon.icon15 .sattelite {\n    top: 20%;\n    left: 10%;\n    width: 100%;\n    height: 70%;\n    transform: rotate(-45deg);\n    border: 0;\n    animation: icon15sattelite 5s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon15 .sattelite .solarpanel {\n    top: 15%;\n    width: 30%;\n    height: 30%;\n    overflow: visible;\n    animation: icon15solarpanel 10s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon15 .sattelite .solarpanel:after {\n    top: 50%;\n    height: 1%;\n    width: 125%;\n    border: 0.1vw solid #a78247;\n    border-color: #a78247 transparent transparent transparent;\n  }\n  .wrapper .icon.icon15 .sattelite .solarpanel.left {\n    left: 0;\n  }\n  .wrapper .icon.icon15 .sattelite .solarpanel.right {\n    right: 0;\n  }\n  .wrapper .icon.icon15 .sattelite .solarpanel.right:after {\n    left: -30%;\n  }\n  .wrapper .icon.icon15 .sattelite .body {\n    top: 0;\n    left: 38%;\n    width: 25%;\n    height: 60%;\n    overflow: visible;\n  }\n  .wrapper .icon.icon15 .sattelite .body:after {\n    top: 70%;\n    left: -0.1vw;\n    width: 100%;\n    padding-top: 100%;\n    border: 0.1vw solid #a78247;\n    border-color: transparent #a78247 #a78247 transparent;\n    border-radius: 50%;\n    transform: rotate(45deg);\n  }\n  .wrapper .icon.icon15 .sattelite .dish {\n    top: 76%;\n    left: 40%;\n    width: 20%;\n    padding-top: 20%;\n    border-color: #a78247 #a78247 transparent transparent;\n    border-radius: 50%;\n    transform: rotate(-45deg);\n    overflow: visible;\n    animation: icon15dish 5s linear 0s infinite alternate;\n  }\n  .wrapper .icon.icon15 .sattelite .dish:before, .wrapper .icon.icon15 .sattelite .dish:after {\n    transform-origin: top left;\n    border: 0.1vw solid #a78247;\n  }\n  .wrapper .icon.icon15 .sattelite .dish:before {\n    left: 10%;\n    top: 10%;\n    width: 110%;\n    height: 0;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(45deg);\n  }\n  .wrapper .icon.icon15 .sattelite .dish:after {\n    left: 50%;\n    top: 50%;\n    width: 20%;\n    height: 0;\n    border-color: #a78247 transparent transparent transparent;\n    transform: rotate(135deg);\n  }\n  \n  .mosthearted {\n    position: fixed;\n    bottom: 1em;\n    right: 1em;\n    border: 0;\n  }\n  .mosthearted svg {\n    width: 15vw;\n    height: auto;\n  }\n  \n  @keyframes icon1moontop {\n    0% {\n      top: 10%;\n      right: 5%;\n      z-index: 0;\n    }\n    49% {\n      top: 60%;\n      right: 95%;\n      z-index: 0;\n    }\n    50% {\n      top: 60%;\n      right: 95%;\n      z-index: 1;\n    }\n    99% {\n      top: 10%;\n      right: 5%;\n      z-index: 1;\n    }\n    100% {\n      top: 10%;\n      right: 5%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon1moonbottom {\n    0% {\n      top: 75%;\n      left: 15%;\n      z-index: 0;\n    }\n    49% {\n      top: 40%;\n      left: 95%;\n      z-index: 0;\n    }\n    50% {\n      top: 40%;\n      left: 95%;\n      z-index: -1;\n    }\n    99% {\n      top: 75%;\n      left: 15%;\n      z-index: -1;\n    }\n    100% {\n      top: 75%;\n      left: 15%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon2planetoid {\n    0% {\n      top: 15%;\n      left: 90%;\n      transform: rotate(0deg);\n      z-index: 0;\n    }\n    49% {\n      top: 80%;\n      left: 5%;\n      transform: rotate(720deg);\n      z-index: 0;\n    }\n    50% {\n      top: 80%;\n      left: 5%;\n      transform: rotate(720deg);\n      z-index: 1;\n    }\n    99% {\n      top: 15%;\n      left: 90%;\n      transform: rotate(1440deg);\n      z-index: 1;\n    }\n    100% {\n      top: 15%;\n      left: 90%;\n      transform: rotate(1440deg);\n      z-index: 0;\n    }\n  }\n  @keyframes icon2ring {\n    0% {\n      transform: rotate(-10deg);\n    }\n    100% {\n      transform: rotate(-30deg);\n    }\n  }\n  @keyframes icon3hood {\n    0% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(-10deg);\n    }\n  }\n  @keyframes icon3middle {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n  }\n  @keyframes icon4planet {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon5body {\n    0% {\n      top: 0%;\n      left: 15%;\n    }\n    100% {\n      top: 0.5%;\n      left: 15.5%;\n    }\n  }\n  @keyframes icon5line1 {\n    0% {\n      top: 60%;\n      left: 4%;\n    }\n    100% {\n      top: 60.5%;\n      left: 4.5%;\n    }\n  }\n  @keyframes icon5line2 {\n    0% {\n      top: 50%;\n      left: 5.5%;\n    }\n    100% {\n      top: 50.5%;\n      left: 6%;\n    }\n  }\n  @keyframes icon5line3 {\n    0% {\n      top: 80%;\n      left: 17%;\n    }\n    100% {\n      top: 80.5%;\n      left: 17.5%;\n    }\n  }\n  @keyframes icon6moontop {\n    0% {\n      top: 15%;\n      left: 10%;\n      z-index: 0;\n    }\n    49% {\n      top: 60%;\n      left: 95%;\n      z-index: 0;\n    }\n    50% {\n      top: 60%;\n      left: 95%;\n      z-index: 1;\n    }\n    99% {\n      top: 15%;\n      left: 10%;\n      z-index: 1;\n    }\n    100% {\n      top: 15%;\n      left: 10%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon6moonbottom {\n    0% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n    49% {\n      top: 40%;\n      left: 5%;\n      z-index: 0;\n    }\n    50% {\n      top: 40%;\n      left: 5%;\n      z-index: -1;\n    }\n    99% {\n      top: 85%;\n      left: 95%;\n      z-index: -1;\n    }\n    100% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon6ring {\n    0% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(30deg);\n    }\n  }\n  @keyframes icon6ringplanet {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon7telescope {\n    0% {\n      transform: rotate(-10deg);\n    }\n    100% {\n      transform: rotate(-30deg);\n    }\n  }\n  @keyframes icon8moontop {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon8moonbottom {\n    0% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n    49% {\n      top: 40%;\n      left: 5%;\n      z-index: 0;\n    }\n    50% {\n      top: 40%;\n      left: 5%;\n      z-index: -1;\n    }\n    99% {\n      top: 85%;\n      left: 95%;\n      z-index: -1;\n    }\n    100% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon8ring {\n    0% {\n      transform: rotate(30deg);\n    }\n    100% {\n      transform: rotate(10deg);\n    }\n  }\n  @keyframes icon8planetoid {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon9planetoid {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon10orbit {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon10planet {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(1.25);\n    }\n  }\n  @keyframes icon11planet {\n    0% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(-10deg);\n    }\n  }\n  @keyframes icon12planet {\n    0% {\n      top: 25%;\n      left: 10%;\n    }\n    100% {\n      top: 25.5%;\n      left: 10.5%;\n    }\n  }\n  @keyframes icon12line1 {\n    0% {\n      top: 32%;\n      left: 22%;\n    }\n    100% {\n      top: 32.5%;\n      left: 22.5%;\n    }\n  }\n  @keyframes icon12line2 {\n    0% {\n      top: 63%;\n      left: 25%;\n    }\n    100% {\n      top: 63.5%;\n      left: 25.5%;\n    }\n  }\n  @keyframes icon12line3 {\n    0% {\n      top: 63%;\n      left: 42%;\n    }\n    100% {\n      top: 63.5%;\n      left: 42.5%;\n    }\n  }\n  @keyframes icon12line4 {\n    0% {\n      top: 67%;\n      left: 55%;\n    }\n    100% {\n      top: 67.5%;\n      left: 55.5%;\n    }\n  }\n  @keyframes icon12line5 {\n    0% {\n      top: 80%;\n      left: 65%;\n    }\n    100% {\n      top: 81%;\n      left: 66%;\n    }\n  }\n  @keyframes icon13moonbottom {\n    0% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n    49% {\n      top: 10%;\n      left: 5%;\n      z-index: 0;\n    }\n    50% {\n      top: 10%;\n      left: 5%;\n      z-index: -1;\n    }\n    99% {\n      top: 85%;\n      left: 95%;\n      z-index: -1;\n    }\n    100% {\n      top: 85%;\n      left: 95%;\n      z-index: 0;\n    }\n  }\n  @keyframes icon13ring {\n    0% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(30deg);\n    }\n  }\n  @keyframes icon13click {\n    0% {\n      transform: scaley(1);\n    }\n    100% {\n      transform: scaley(0);\n    }\n  }\n  @keyframes icon14lineleft {\n    0% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(5deg);\n    }\n  }\n  @keyframes icon14lineright {\n    0% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(5deg);\n    }\n  }\n  @keyframes icon14planet {\n    0% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(20deg);\n    }\n  }\n  @keyframes icon14ring {\n    0% {\n      transform: rotate(30deg);\n    }\n    100% {\n      transform: rotate(10deg);\n    }\n  }\n  @keyframes icon14moon {\n    0% {\n      left: 5%;\n    }\n    100% {\n      left: 95%;\n    }\n  }\n  @keyframes icon15sattelite {\n    0% {\n      transform: rotate(-40deg);\n    }\n    100% {\n      transform: rotate(-50deg);\n    }\n  }\n  @keyframes icon15planetoid {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes icon15solarpanel {\n    0% {\n      transform: scaley(1);\n    }\n    100% {\n      transform: scaley(0.75);\n    }\n  }\n  @keyframes icon15dish {\n    0% {\n      transform: rotate(-60deg);\n    }\n    100% {\n      transform: rotate(-30deg);\n    }\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/animated-icons/animated-icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"icon icon1\">\n    <div class=\"moon top\"></div>\n    <div class=\"planet\">\n      <div class=\"line line1\"></div>\n      <div class=\"line line2\"></div>\n      <div class=\"line line3\"></div>\n      <div class=\"line line4\"></div>\n      <div class=\"line line5\"></div>\n      <div class=\"line line6\"></div>\n      <div class=\"line line7\"></div>\n    </div>\n    <div class=\"moon bottom\"></div>\n  </div>\n  <div class=\"icon icon2\">\n    <div class=\"planetoid\"></div>\n    <div class=\"planet\"></div>\n    <div class=\"ring\"></div>\n  </div>\n  <div class=\"icon icon3\">\n    <div class=\"top\">\n      <div class=\"visor\"></div>\n      <div class=\"hood\"></div>\n    </div>\n    <div class=\"bottom\">\n      <div class=\"neck\"></div>\n      <div class=\"line\"></div>\n    </div>\n    <div class=\"middle\"></div>\n  </div>\n  <div class=\"icon icon4\">\n    <div class=\"planet\"></div>\n    <div class=\"planetoid top\"></div>\n    <div class=\"planetoid middle\"></div>\n    <div class=\"planetoid bottom\"></div>\n  </div>\n  <div class=\"icon icon5\">\n    <div class=\"planet\"></div>\n    <div class=\"rocket\">\n      <div class=\"body\"></div>\n      <div class=\"thruster left\"></div>\n      <div class=\"thruster mid\"></div>\n      <div class=\"thruster right\"></div>\n    </div>\n    <div class=\"line left\"></div>\n    <div class=\"line mid\"></div>\n    <div class=\"line right\"></div>\n  </div>\n  <div class=\"icon icon6\">\n    <div class=\"moon top\"></div>\n    <div class=\"planet\"></div>\n    <div class=\"ring\"></div>\n    <div class=\"ring planet\"></div>\n    <div class=\"planetoid\"></div>\n    <div class=\"moon bottom\"></div>\n  </div>\n  <div class=\"icon icon7\">\n    <div class=\"telescope\">\n      <div class=\"body\">\n        <div class=\"line line1\"></div>\n        <div class=\"line line2\"></div>\n        <div class=\"line line3\"></div>\n        <div class=\"line line4\"></div>\n      </div>\n      <div class=\"lens\"></div>\n    </div>\n    <div class=\"tripod\">\n      <div class=\"anchor\"></div>\n      <div class=\"foot left\"></div>\n      <div class=\"foot mid\"></div>\n      <div class=\"foot right\"></div>\n    </div>\n    <div class=\"ground\"></div>\n  </div>\n  <div class=\"icon icon8\">\n    <div class=\"moon top\"></div>\n    <div class=\"planet\"></div>\n    <div class=\"ring\"></div>\n    <div class=\"planetoid\"></div>\n    <div class=\"moon bottom\"></div>\n  </div>\n  <div class=\"icon icon9\">\n    <div class=\"planetoid\"></div>\n    <div class=\"planetoid moon\"></div>\n    <div class=\"flag\">\n      <div class=\"square\"></div>\n      <div class=\"line line1\"></div>\n      <div class=\"line line2\"></div>\n      <div class=\"line line3\"></div>\n    </div>\n    <div class=\"pole\"></div>\n    <div class=\"ground\"></div>\n  </div>\n  <div class=\"icon icon10\">\n    <div class=\"orbit orbit1\"></div>\n    <div class=\"orbit orbit2\"></div>\n    <div class=\"planet\"></div>\n  </div>\n  <div class=\"icon icon11\">\n    <div class=\"planet\">\n      <div class=\"line line1\"></div>\n      <div class=\"line line2\"></div>\n      <div class=\"line line3\"></div>\n      <div class=\"line line4\"></div>\n      <div class=\"line line5\"></div>\n      <div class=\"line line6\"></div>\n      <div class=\"line line7\"></div>\n      <div class=\"line line8\"></div>\n      <div class=\"line line9\"></div>\n    </div>\n  </div>\n  <div class=\"icon icon12\">\n    <div class=\"planet\"></div>\n    <div class=\"line line1\"></div>\n    <div class=\"line line2\"></div>\n    <div class=\"line line3\"></div>\n    <div class=\"line line4\"></div>\n    <div class=\"line line5\"></div>\n  </div>\n  <div class=\"icon icon13\">\n    <div class=\"planet\"></div>\n    <div class=\"ring\"></div>\n    <div class=\"planetoid\"></div>\n    <div class=\"square\"></div>\n    <div class=\"moon bottom\"></div>\n  </div>\n  <div class=\"icon icon14\">\n    <div class=\"planet\"></div>\n    <div class=\"ring\"></div>\n    <div class=\"moon\"></div>\n    <div class=\"top\">\n      <div class=\"line left\"></div>\n      <div class=\"square\"></div>\n      <div class=\"line right\"></div>\n    </div>\n    <div class=\"pen\">\n      <div class=\"head left\"></div>\n      <div class=\"head right\"></div>\n      <div class=\"line\"></div>\n      <div class=\"bottom\"></div>\n    </div>\n  </div>\n  <div class=\"icon icon15\">\n    <div class=\"planetoid\"></div>\n    <div class=\"sattelite\">\n      <div class=\"solarpanel left\"></div>\n      <div class=\"body\"></div>\n      <div class=\"solarpanel right\"></div>\n      <div class=\"dish\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/animated-icons/animated-icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimatedIconsComponent = (function () {
    function AnimatedIconsComponent() {
    }
    AnimatedIconsComponent.prototype.ngOnInit = function () {
    };
    AnimatedIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-animated-icons',
            template: __webpack_require__("../../../../../src/app/animated-icons/animated-icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/animated-icons/animated-icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimatedIconsComponent);
    return AnimatedIconsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-layout/app-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animation-list h1 {\n  text-align: center;\n  margin-top: 3em;\n  padding-top: 25px;\n}\n.animation-list li {\n  padding: 36px 38px 0px 17px;\n  cursor: pointer;\n}\n.animation-list ul {\n  width: 50%;\n  margin: 0 auto;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: white;\n  padding-bottom: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-layout/app-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"animation-list\">\n\n  <ul>\n    <h1>\n      CSS Animations\n    </h1>\n    <li routerLink=\"list\">\n      Listing Data\n    </li>\n    <li routerLink=\"animatedIcon\">\n      Animated Icons\n    </li>\n    <li routerLink=\"pageNotFound\">\n      404 Page\n    </li>\n    <li routerLink=\"emailUnsubscription\">\n      Email Unsubscription\n    </li>\n    <li routerLink=\"hoverEffect\">\n      Hover Effects\n    </li>\n    <li routerLink=\"menuAnimation\">\n      Menu Animations\n    </li>\n    <li routerLink=\"validation\">\n      Validation Effects\n    </li>\n    <li routerLink=\"buttonAnimation\">\n      Button Click\n    </li>\n    <li routerLink=\"inputAnimation\">\n      Input field Validation\n    </li>\n    <br>\n  </ul>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app-layout/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLayoutComponent = (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-layout',
            template: __webpack_require__("../../../../../src/app/app-layout/app-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-layout/app-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animated_icons_animated_icons_component__ = __webpack_require__("../../../../../src/app/animated-icons/animated-icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_component__ = __webpack_require__("../../../../../src/app/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_unsubscription_email_unsubscription_component__ = __webpack_require__("../../../../../src/app/email-unsubscription/email-unsubscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hover_effects_hover_effects_component__ = __webpack_require__("../../../../../src/app/hover-effects/hover-effects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_animation_input_animation_component__ = __webpack_require__("../../../../../src/app/input-animation/input-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listing_data_listing_data_component__ = __webpack_require__("../../../../../src/app/listing-data/listing-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_animations_menu_animations_component__ = __webpack_require__("../../../../../src/app/menu-animations/menu-animations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validation_effects_validation_effects_component__ = __webpack_require__("../../../../../src/app/validation-effects/validation-effects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/app-layout/app-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__app_layout_app_layout_component__["a" /* AppLayoutComponent */]
    },
    {
        path: 'animatedIcon',
        component: __WEBPACK_IMPORTED_MODULE_2__animated_icons_animated_icons_component__["a" /* AnimatedIconsComponent */]
    },
    {
        path: 'validation',
        component: __WEBPACK_IMPORTED_MODULE_10__validation_effects_validation_effects_component__["a" /* ValidationEffectsComponent */]
    },
    {
        path: 'pageNotFound',
        component: __WEBPACK_IMPORTED_MODULE_9__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
    },
    {
        path: 'menuAnimation',
        component: __WEBPACK_IMPORTED_MODULE_8__menu_animations_menu_animations_component__["a" /* MenuAnimationsComponent */]
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_7__listing_data_listing_data_component__["a" /* ListingDataComponent */]
    },
    {
        path: 'inputAnimation',
        component: __WEBPACK_IMPORTED_MODULE_6__input_animation_input_animation_component__["a" /* InputAnimationComponent */]
    },
    {
        path: 'hoverEffect',
        component: __WEBPACK_IMPORTED_MODULE_5__hover_effects_hover_effects_component__["a" /* HoverEffectsComponent */]
    },
    {
        path: 'emailUnsubscription',
        component: __WEBPACK_IMPORTED_MODULE_4__email_unsubscription_email_unsubscription_component__["a" /* EmailUnsubscriptionComponent */]
    },
    {
        path: 'buttonAnimation',
        component: __WEBPACK_IMPORTED_MODULE_3__button_button_component__["a" /* ButtonComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_animation_input_animation_component__ = __webpack_require__("../../../../../src/app/input-animation/input-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button_component__ = __webpack_require__("../../../../../src/app/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation_effects_validation_effects_component__ = __webpack_require__("../../../../../src/app/validation-effects/validation-effects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_animations_menu_animations_component__ = __webpack_require__("../../../../../src/app/menu-animations/menu-animations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hover_effects_hover_effects_component__ = __webpack_require__("../../../../../src/app/hover-effects/hover-effects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_unsubscription_email_unsubscription_component__ = __webpack_require__("../../../../../src/app/email-unsubscription/email-unsubscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listing_data_listing_data_component__ = __webpack_require__("../../../../../src/app/listing-data/listing-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__animated_icons_animated_icons_component__ = __webpack_require__("../../../../../src/app/animated-icons/animated-icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/app-layout/app-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__listing_data_listing_data_component__["a" /* ListingDataComponent */],
                __WEBPACK_IMPORTED_MODULE_10__animated_icons_animated_icons_component__["a" /* AnimatedIconsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__email_unsubscription_email_unsubscription_component__["a" /* EmailUnsubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hover_effects_hover_effects_component__["a" /* HoverEffectsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__menu_animations_menu_animations_component__["a" /* MenuAnimationsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__validation_effects_validation_effects_component__["a" /* ValidationEffectsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_1__input_animation_input_animation_component__["a" /* InputAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__app_layout_app_layout_component__["a" /* AppLayoutComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/button/button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,300);", ""]);

// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\ninput[type='checkbox'] {\n  display: none;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\nbody .swanky {\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nbody {\n  height: 100vh;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  background: linear-gradient(135deg, #8254EA 0%, #E86DEC 100%);\n  -webkit-font-smoothing: antialiased;\n  font-size: 12px;\n}\nbody .swanky {\n  perspective: 600px;\n  width: 700px;\n  position: absolute;\n  margin: auto;\n  height: 360px;\n}\nbody .swanky_title {\n  float: right;\n  text-align: left;\n  width: 400px;\n  color: white;\n  position: relative;\n  top: 70px;\n}\nbody .swanky_title__social a {\n  position: relative;\n  overflow: hidden;\n  width: 140px;\n  margin-right: 15px;\n  text-decoration: none;\n  padding: 0px 0px 5px 0px;\n  height: 40px;\n  border: 2px solid white;\n  float: left;\n  color: white;\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 20px;\n}\nbody .swanky_title__social a .slide {\n  height: 45px;\n  width: 100px;\n  float: left;\n  position: absolute;\n  transform: skew(20deg);\n  left: -120px;\n  transition-property: left;\n  transition-duration: .2s;\n  background: white;\n}\nbody .swanky_title__social a .slide .arrow {\n  position: absolute;\n  right: 31px;\n  top: 24px;\n  opacity: 0;\n  transform: skew(-20deg);\n}\nbody .swanky_title__social a .slide .arrow .stem {\n  width: 10px;\n  height: 2px;\n  background: #858490;\n}\nbody .swanky_title__social a .slide .arrow .point {\n  width: 6px;\n  height: 6px;\n  border-right: 2px solid #858490;\n  top: -3px;\n  right: 1px;\n  position: absolute;\n  transform: rotate(45deg);\n  border-top: 2px solid #858490;\n}\nbody .swanky_title__social a img {\n  width: 16px;\n  margin-left: 10px;\n  position: relative;\n  margin-right: 8px;\n  transition-property: margin-left;\n  transition-duration: .1s;\n  margin-top: 10px;\n  top: 4px;\n}\nbody .swanky_title__social a:hover > .slide {\n  left: -70px;\n  transition-property: left;\n  transition-duration: .1s;\n}\nbody .swanky_title__social a:hover > img {\n  margin-left: 40px;\n  transition-property: margin-left;\n  transition-duration: .1s;\n}\nbody .swanky_title__social a:hover > .slide .arrow {\n  right: 11px;\n  opacity: 1;\n  transition-property: right,opacity;\n  transition-delay: .07s;\n  transition-duration: .2s;\n}\nbody .swanky .intro {\n  float: right;\n  color: white;\n  width: 370px;\n  top: 50px;\n  position: relative;\n}\nbody .swanky .intro h1 {\n  text-shadow: 0px 2px rgba(0, 0, 0, 0.26);\n}\nbody .swanky .intro p {\n  line-height: 20px;\n  text-shadow: 0px 1px rgba(0, 0, 0, 0.26);\n}\nbody .swanky_wrapper {\n  width: 225px;\n  height: auto;\n  overflow: hidden;\n  border-radius: 4px;\n  background: #2a394f;\n}\nbody .swanky_wrapper label {\n  padding: 25px;\n  float: left;\n  height: 72px;\n  border-bottom: 1px solid #293649;\n  position: relative;\n  width: 100%;\n  color: #eff4fa;\n  transition: text-indent .15s, height .3s;\n  box-sizing: border-box;\n}\nbody .swanky_wrapper label img {\n  margin-right: 10px;\n  position: relative;\n  top: 2px;\n  width: 16px;\n}\nbody .swanky_wrapper label span {\n  position: relative;\n  top: -3px;\n}\nbody .swanky_wrapper label:hover {\n  background: #212e41;\n  border-bottom: 1px solid #2A394F;\n  text-indent: 4px;\n}\nbody .swanky_wrapper label:hover .bar {\n  width: 100%;\n}\nbody .swanky_wrapper label .bar {\n  width: 0px;\n  transition: width .15s;\n  height: 2px;\n  position: absolute;\n  display: block;\n  background: #355789;\n  bottom: 0;\n  left: 0;\n}\nbody .swanky_wrapper label .lil_arrow {\n  width: 5px;\n  height: 5px;\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-top: 2px solid white;\n  border-right: 2px solid white;\n  float: right;\n  position: relative;\n  top: 6px;\n  right: 2px;\n  transform: rotate(45deg);\n}\nbody .swanky_wrapper__content {\n  position: absolute;\n  display: none;\n  overflow: hidden;\n  left: 0;\n  width: 100%;\n}\nbody .swanky_wrapper__content li {\n  width: 100%;\n  opacity: 0;\n  left: -100%;\n  background: #15a4fa;\n  padding: 25px 0px;\n  text-indent: 25px;\n  box-shadow: 0px 0px #126CA1  inset;\n  transition: box-shadow .3s,text-indent .3s;\n  position: relative;\n}\nbody .swanky_wrapper__content li:hover {\n  background: #0c93e4;\n  box-shadow: 3px 0px #126CA1  inset;\n  transition: box-shadow .3s linear,text-indent .3s linear;\n  text-indent: 31px;\n}\nbody .swanky_wrapper__content .clear {\n  clear: both;\n}\n\ninput[type='checkbox']:checked + label .swanky_wrapper__content {\n  display: block;\n  top: 68px;\n  border-bottom: 1px solid #212e41;\n}\n\ninput[type=\"checkbox\"]:checked + label > .lil_arrow {\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(135deg);\n  border-top: 2px solid #14a3f9;\n  border-right: 2px solid #14a3f9;\n}\n\ninput[type='checkbox']:checked + label {\n  height: 325px;\n  background: #212e41;\n  text-indent: 4px;\n  transition-property: height;\n  transition-duration: .6s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\ninput[type='checkbox']:checked + label .bar {\n  width: 0;\n}\n\ninput[type='checkbox']:checked + label li:nth-of-type(1) {\n  animation: in 0.15s 0.575s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.575s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(2) {\n  animation: in 0.15s 0.7s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.7s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(3) {\n  animation: in 0.15s 0.825s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.825s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(4) {\n  animation: in 0.15s 0.95s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.95s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n@keyframes in {\n  from {\n    left: -100%;\n    opacity: 0;\n  }\n  to {\n    left: 0;\n    opacity: 1;\n  }\n}\n.love {\n  position: absolute;\n  right: 20px;\n  bottom: 0px;\n  font-size: 11px;\n  font-weight: normal;\n}\n.love p {\n  color: white;\n  font-weight: normal;\n  font-family: 'Open Sans', sans-serif;\n}\n.love a {\n  color: white;\n  font-weight: 700;\n  text-decoration: none;\n}\n.love img {\n  position: relative;\n  top: 3px;\n  margin: 0px 4px;\n  width: 10px;\n}\n\n.brand {\n  position: absolute;\n  left: 20px;\n  bottom: 14px;\n}\n.brand img {\n  width: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n\n  <!-- / My brand -->\n  <div class='brand'>\n    <a href='https://www.jamiecoulter.co.uk' target='_blank'>\n      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png'>\n    </a>\n    </div>\n    <!-- / Begin Body -->\n    <div class='swanky'>\n    <!-- / Introduction Block -->\n    <div class='swanky_title'>\n  \n      <div class='swanky_title__social'>\n      <a href='https://www.twitter.com/jamiecoulter89' target='_blank'>\n        <div class='slide'>\n        <div class='arrow'>\n          <div class='stem'></div>\n          <div class='point'></div>\n        </div>\n        </div>\n        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tw.png'>\n        Twitter\n      </a>\n      </div>\n      <div class='swanky_title__social'>\n      <a href='https://www.codepen.io/jcoulterdesign/' target='_blank'>\n        <div class='slide'>\n        <div class='arrow'>\n          <div class='stem'></div>\n          <div class='point'></div>\n        </div>\n        </div>\n        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cp.png'>\n        Codepen\n      </a>\n      </div>\n    </div>\n  \n  \n    </div>\n   \n    \n  </body>\n  "

/***/ }),

/***/ "../../../../../src/app/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-button',
            template: __webpack_require__("../../../../../src/app/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/button/button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/email-unsubscription/email-unsubscription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-unsubscription/email-unsubscription.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/unsubscribe_site.svg\">\n"

/***/ }),

/***/ "../../../../../src/app/email-unsubscription/email-unsubscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUnsubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailUnsubscriptionComponent = (function () {
    function EmailUnsubscriptionComponent() {
    }
    EmailUnsubscriptionComponent.prototype.ngOnInit = function () {
    };
    EmailUnsubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email-unsubscription',
            template: __webpack_require__("../../../../../src/app/email-unsubscription/email-unsubscription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-unsubscription/email-unsubscription.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailUnsubscriptionComponent);
    return EmailUnsubscriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hover-effects/hover-effects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kreon:300, 700);", ""]);

// module
exports.push([module.i, ".body {\n  margin: 0;\n  padding: 0;\n  background-color: #d0d0d0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: center;\n  justify-content: center;\n  perspective: 1000px;\n}\n\n.render {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  transition: all 0.3s ease;\n  transform: rotateX(50deg) rotateZ(1deg);\n  font-family: 'Kreon', serif;\n  font-weight: 700;\n  font-size: 12em;\n  color: #f5f5f5;\n  text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,\n    #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,\n    #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,\n    #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,\n    #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,\n    rgba(16, 16, 16, 0.4) 1px 18px 6px, rgba(16, 16, 16, 0.2) 1px 22px 10px,\n    rgba(16, 16, 16, 0.2) 1px 26px 35px, rgba(16, 16, 16, 0.4) 1px 30px 65px,\n    white -0.15em -0.1em 100px;\n}\n.render:hover {\n  margin-top: -20px;\n  text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,\n    #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,\n    #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,\n    #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,\n    #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,\n    rgba(16, 16, 16, 0.4) 1px 38px 26px, rgba(16, 16, 16, 0.2) 1px 42px 30px,\n    rgba(16, 16, 16, 0.2) 1px 46px 65px, rgba(16, 16, 16, 0.4) 1px 50px 95px,\n    white -0.15em -0.1em 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hover-effects/hover-effects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <span class=\"render\">Hover</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hover-effects/hover-effects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoverEffectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoverEffectsComponent = (function () {
    function HoverEffectsComponent() {
    }
    HoverEffectsComponent.prototype.ngOnInit = function () {
    };
    HoverEffectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hover-effects',
            template: __webpack_require__("../../../../../src/app/hover-effects/hover-effects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hover-effects/hover-effects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HoverEffectsComponent);
    return HoverEffectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/input-animation/input-animation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #000000;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 40px;\n  color: #ffffff;\n}\n\n#hiddenInput {\n  font-size: 40px;\n  font-family: 'Roboto Condensed', sans-serif;\n  background-color: #808080;\n  position: absolute;\n  opacity: 0.4;\n  margin-top: -22px;\n  margin-left: -125px;\n  opacity: 0;\n  filter: alpha(opacity = 0);\n}\n\n#container {\n  position: absolute;\n  top: 80px;\n  left: 50%;\n}\n\n#input {\n  position: absolute;\n  margin-top: -20px;\n  margin-left: -120px;\n  display: -ms-flexbox;\n  display: flex;\n  color: red;\n  font-size: 30px;\n}\n\n.letterContainer {\n  display: inline;\n  white-space: nowrap;\n  float: left;\n}\n\n.letterStatic {\n  display: inline;\n}\n\n.letterAnimTop {\n  display: inline;\n  position: absolute;\n  -webkit-animation: dropTop 0.1s ease;\n  -moz-animation: dropTop 0.1s ease;\n}\n\n.letterAnimBottom {\n  display: inline;\n  position: absolute;\n  -webkit-animation: dropBottom 0.1s ease;\n  -moz-animation: dropBottom 0.1s ease;\n}\n\n.blink {\n  position: static;\n  top: -5px;\n  -webkit-animation: blink 0.3s ease 0 infinite alternate;\n  -moz-animation: blink 0.3s ease 0 infinite alternate;\n}\n\n/* second text field */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-animation/input-animation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"input\"></div>\n  <input type=\"text\" id=\"hiddenInput\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/input-animation/input-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputAnimationComponent = (function () {
    function InputAnimationComponent() {
        window.onload = function () {
            var input;
            var cursor;
            var hiddenInput;
            var content = [];
            var lastContent = '';
            var targetContent = '';
            var inputLock = false;
            var autoWriteTimer;
            var isMobile;
            var isIE;
            isMobile = navigator && navigator.platform && navigator.platform.match(/^(iPad|iPod|iPhone)$/);
            isIE = navigator.appName === 'Microsoft Internet Explorer';
            input = document.getElementById('input');
            hiddenInput = document.getElementById('hiddenInput');
            hiddenInput.focus();
            cursor = document.createElement('cursor');
            cursor.setAttribute('class', 'blink');
            cursor.innerHTML = '|';
            // tslint:disable-next-line:curly
            if (!isMobile && !isIE)
                input.appendChild(cursor);
            function refresh() {
                inputLock = true;
                // tslint:disable-next-line:curly
                if (targetContent.length - lastContent.length === 0)
                    return;
                // tslint:disable-next-line:prefer-const
                var v = targetContent.substring(0, lastContent.length + 1);
                content = [];
                var blinkPadding = false;
                for (var i = 0; i < v.length; i++) {
                    var l = v.charAt(i);
                    var d = document.createElement('div');
                    d.setAttribute('class', 'letterContainer');
                    var d2 = document.createElement('div');
                    var animClass = i % 2 === 0 ? 'letterAnimTop' : 'letterAnimBottom';
                    var letterClass = lastContent.charAt(i) === l ? 'letterStatic' : animClass;
                    // tslint:disable-next-line:curly
                    if (letterClass !== 'letterStatic')
                        blinkPadding = true;
                    d2.setAttribute('class', letterClass);
                    d.appendChild(d2);
                    d2.innerHTML = l;
                    content.push(d);
                }
                input.innerHTML = '';
                for (var i = 0; i < content.length; i++) {
                    input.appendChild(content[i]);
                }
                cursor.style.paddingLeft = blinkPadding ? '22px' : '0';
                // tslint:disable-next-line:curly
                if (!isMobile && !isIE)
                    input.appendChild(cursor);
                // tslint:disable-next-line:curly
                if (targetContent.length - lastContent.length > 1)
                    setTimeout(refresh, 150);
                else
                    // tslint:disable-next-line:curly
                    inputLock = false;
                lastContent = v;
            }
            if (document.addEventListener) {
                document.addEventListener('touchstart', function (e) {
                    clearInterval(autoWriteTimer);
                    targetContent = lastContent;
                }, false);
                document.addEventListener('click', function (e) {
                    clearInterval(autoWriteTimer);
                    targetContent = lastContent;
                    hiddenInput.focus();
                }, false);
                if (!isIE) {
                    hiddenInput.addEventListener('input', function (e) {
                        e.preventDefault();
                        targetContent = hiddenInput.value;
                        // tslint:disable-next-line:curly
                        if (!inputLock)
                            refresh();
                    }, false);
                }
                else {
                    setInterval(function () {
                        targetContent = hiddenInput.value;
                        // tslint:disable-next-line:curly
                        if (targetContent !== lastContent && !inputLock)
                            refresh();
                    }, 100);
                }
            }
            hiddenInput.value = '';
            autoWriteTimer = setTimeout(function () {
                // tslint:disable-next-line:curly
                if (lastContent !== '')
                    return;
                targetContent = 'type something...';
                refresh();
            }, 2000);
        };
    }
    InputAnimationComponent.prototype.ngOnInit = function () { };
    InputAnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-animation',
            template: __webpack_require__("../../../../../src/app/input-animation/input-animation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/input-animation/input-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputAnimationComponent);
    return InputAnimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/listing-data/listing-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card1 {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  height: 65px;\n  margin-bottom: 24px;\n  line-height: 4;\n  padding-left: 20px;\n  background: #1058f845;\n}\n\n.w3-animate-top {\n  position: relative;\n  animation: animatetop 3s;\n}\n\n.w3-animate-top1 {\n  position: relative;\n  animation: animatetop 2.5s;\n}\n\n.w3-animate-top2 {\n  position: relative;\n  animation: animatetop 2s;\n}\n.w3-animate-top3 {\n  position: relative;\n  animation: animatetop 2s;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing-data/listing-data.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"margin-top: 9em;\">\n  <div class=\"card1 w3-animate-top\">\n    card1\n  </div>\n  <div class=\"card1 w3-animate-top1\">\n    card1\n  </div>\n  <div class=\"card1 w3-animate-top2\">\n    card1\n  </div>\n  <div class=\"card1 w3-animate-top3\">\n    card1\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/listing-data/listing-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingDataComponent = (function () {
    function ListingDataComponent() {
    }
    ListingDataComponent.prototype.ngOnInit = function () {
    };
    ListingDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listing-data',
            template: __webpack_require__("../../../../../src/app/listing-data/listing-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listing-data/listing-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingDataComponent);
    return ListingDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu-animations/menu-animations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,300);", ""]);

// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\ninput[type='checkbox'] {\n  display: none;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\nbody .swanky {\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nbody {\n  height: 100vh;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  background: linear-gradient(135deg, #8254EA 0%, #E86DEC 100%);\n  -webkit-font-smoothing: antialiased;\n  font-size: 12px;\n}\nbody .swanky {\n  perspective: 600px;\n  width: 700px;\n  position: absolute;\n  margin: auto;\n  height: 360px;\n}\nbody .swanky_title {\n  float: right;\n  text-align: left;\n  width: 400px;\n  color: white;\n  position: relative;\n  top: 70px;\n}\nbody .swanky_title__social a {\n  position: relative;\n  overflow: hidden;\n  width: 140px;\n  margin-right: 15px;\n  text-decoration: none;\n  padding: 0px 0px 5px 0px;\n  height: 40px;\n  border: 2px solid white;\n  float: left;\n  color: white;\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 20px;\n}\nbody .swanky_title__social a .slide {\n  height: 45px;\n  width: 100px;\n  float: left;\n  position: absolute;\n  transform: skew(20deg);\n  left: -120px;\n  transition-property: left;\n  transition-duration: .2s;\n  background: white;\n}\nbody .swanky_title__social a .slide .arrow {\n  position: absolute;\n  right: 31px;\n  top: 24px;\n  opacity: 0;\n  transform: skew(-20deg);\n}\nbody .swanky_title__social a .slide .arrow .stem {\n  width: 10px;\n  height: 2px;\n  background: #858490;\n}\nbody .swanky_title__social a .slide .arrow .point {\n  width: 6px;\n  height: 6px;\n  border-right: 2px solid #858490;\n  top: -3px;\n  right: 1px;\n  position: absolute;\n  transform: rotate(45deg);\n  border-top: 2px solid #858490;\n}\nbody .swanky_title__social a img {\n  width: 16px;\n  margin-left: 10px;\n  position: relative;\n  margin-right: 8px;\n  transition-property: margin-left;\n  transition-duration: .1s;\n  margin-top: 10px;\n  top: 4px;\n}\nbody .swanky_title__social a:hover > .slide {\n  left: -70px;\n  transition-property: left;\n  transition-duration: .1s;\n}\nbody .swanky_title__social a:hover > img {\n  margin-left: 40px;\n  transition-property: margin-left;\n  transition-duration: .1s;\n}\nbody .swanky_title__social a:hover > .slide .arrow {\n  right: 11px;\n  opacity: 1;\n  transition-property: right,opacity;\n  transition-delay: .07s;\n  transition-duration: .2s;\n}\nbody .swanky .intro {\n  float: right;\n  color: white;\n  width: 370px;\n  top: 50px;\n  position: relative;\n}\nbody .swanky .intro h1 {\n  text-shadow: 0px 2px rgba(0, 0, 0, 0.26);\n}\nbody .swanky .intro p {\n  line-height: 20px;\n  text-shadow: 0px 1px rgba(0, 0, 0, 0.26);\n}\nbody .swanky_wrapper {\n  width: 225px;\n  height: auto;\n  overflow: hidden;\n  border-radius: 4px;\n  background: #2a394f;\n}\nbody .swanky_wrapper label {\n  padding: 25px;\n  float: left;\n  height: 72px;\n  border-bottom: 1px solid #293649;\n  position: relative;\n  width: 100%;\n  color: #eff4fa;\n  transition: text-indent .15s, height .3s;\n  box-sizing: border-box;\n}\nbody .swanky_wrapper label img {\n  margin-right: 10px;\n  position: relative;\n  top: 2px;\n  width: 16px;\n}\nbody .swanky_wrapper label span {\n  position: relative;\n  top: -3px;\n}\nbody .swanky_wrapper label:hover {\n  background: #212e41;\n  border-bottom: 1px solid #2A394F;\n  text-indent: 4px;\n}\nbody .swanky_wrapper label:hover .bar {\n  width: 100%;\n}\nbody .swanky_wrapper label .bar {\n  width: 0px;\n  transition: width .15s;\n  height: 2px;\n  position: absolute;\n  display: block;\n  background: #355789;\n  bottom: 0;\n  left: 0;\n}\nbody .swanky_wrapper label .lil_arrow {\n  width: 5px;\n  height: 5px;\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-top: 2px solid white;\n  border-right: 2px solid white;\n  float: right;\n  position: relative;\n  top: 6px;\n  right: 2px;\n  transform: rotate(45deg);\n}\nbody .swanky_wrapper__content {\n  position: absolute;\n  display: none;\n  overflow: hidden;\n  left: 0;\n  width: 100%;\n}\nbody .swanky_wrapper__content li {\n  width: 100%;\n  opacity: 0;\n  left: -100%;\n  background: #15a4fa;\n  padding: 25px 0px;\n  text-indent: 25px;\n  box-shadow: 0px 0px #126CA1  inset;\n  transition: box-shadow .3s,text-indent .3s;\n  position: relative;\n}\nbody .swanky_wrapper__content li:hover {\n  background: #0c93e4;\n  box-shadow: 3px 0px #126CA1  inset;\n  transition: box-shadow .3s linear,text-indent .3s linear;\n  text-indent: 31px;\n}\nbody .swanky_wrapper__content .clear {\n  clear: both;\n}\n\ninput[type='checkbox']:checked + label .swanky_wrapper__content {\n  display: block;\n  top: 68px;\n  border-bottom: 1px solid #212e41;\n}\n\ninput[type=\"checkbox\"]:checked + label > .lil_arrow {\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(135deg);\n  border-top: 2px solid #14a3f9;\n  border-right: 2px solid #14a3f9;\n}\n\ninput[type='checkbox']:checked + label {\n  height: 325px;\n  background: #212e41;\n  text-indent: 4px;\n  transition-property: height;\n  transition-duration: .6s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\ninput[type='checkbox']:checked + label .bar {\n  width: 0;\n}\n\ninput[type='checkbox']:checked + label li:nth-of-type(1) {\n  animation: in 0.15s 0.575s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.575s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(2) {\n  animation: in 0.15s 0.7s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.7s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(3) {\n  animation: in 0.15s 0.825s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.825s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\ninput[type='checkbox']:checked + label li:nth-of-type(4) {\n  animation: in 0.15s 0.95s forwards;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -moz-animation: in 0.15s 0.95s forwards;\n  -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n@keyframes in {\n  from {\n    left: -100%;\n    opacity: 0;\n  }\n  to {\n    left: 0;\n    opacity: 1;\n  }\n}\n.love {\n  position: absolute;\n  right: 20px;\n  bottom: 0px;\n  font-size: 11px;\n  font-weight: normal;\n}\n.love p {\n  color: white;\n  font-weight: normal;\n  font-family: 'Open Sans', sans-serif;\n}\n.love a {\n  color: white;\n  font-weight: 700;\n  text-decoration: none;\n}\n.love img {\n  position: relative;\n  top: 3px;\n  margin: 0px 4px;\n  width: 10px;\n}\n\n.brand {\n  position: absolute;\n  left: 20px;\n  bottom: 14px;\n}\n.brand img {\n  width: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-animations/menu-animations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n\n<!-- / My brand -->\n<div class='brand'>\n\t<a href='https://www.jamiecoulter.co.uk' target='_blank'>\n\t  <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png'>\n\t</a>\n  </div>\n  <!-- / Begin Body -->\n  <div class='swanky'>\n\n\t<!-- /////////// Begin Dropdown //////////// -->\n\t<div class='swanky_wrapper'>\n\t  <input id='Dashboard' name='checkbox' type='checkbox'>\n\t  <label for='Dashboard'>\n\t\t<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/dash.png'>\n\t\t<span>Dashboard</span>\n\t\t<div class='lil_arrow'></div>\n\t\t<div class='bar'></div>\n\t\t<div class='swanky_wrapper__content'>\n\t\t  <ul>\n\t\t\t<li>Tools</li>\n\t\t\t<li>Reports</li>\n\t\t\t<li>Analytics</li>\n\t\t\t<li>Code Blocks</li>\n\t\t  </ul>\n\t\t</div>\n\t  </label>\n\t  <input id='Sales' name='checkbox' type='checkbox'>\n\t  <label for='Sales'>\n\t\t<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/del.png'>\n\t\t<span>Sales</span>\n\t\t<div class='lil_arrow'></div>\n\t\t<div class='bar'></div>\n\t\t<div class='swanky_wrapper__content'>\n\t\t  <ul>\n\t\t\t<li>New Sales</li>\n\t\t\t<li>Expired Sales</li>\n\t\t\t<li>Sales Reports</li>\n\t\t\t<li>Deliveries</li>\n\t\t  </ul>\n\t\t</div>\n\t  </label>\n\t  <input id='Messages' name='checkbox' type='checkbox'>\n\t  <label for='Messages'>\n\t\t<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mess.png'>\n\t\t<span>Messages</span>\n\t\t<div class='lil_arrow'></div>\n\t\t<div class='bar'></div>\n\t\t<div class='swanky_wrapper__content'>\n\t\t  <ul>\n\t\t\t<li>Inbox</li>\n\t\t\t<li>Outbox</li>\n\t\t\t<li>Sent</li>\n\t\t\t<li>Archived</li>\n\t\t  </ul>\n\t\t</div>\n\t  </label>\n\t  <input id='Users' name='checkbox' type='checkbox'>\n\t  <label for='Users'>\n\t\t<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/users.png'>\n\t\t<span>Users</span>\n\t\t<div class='lil_arrow'></div>\n\t\t<div class='bar'></div>\n\t\t<div class='swanky_wrapper__content'>\n\t\t  <ul>\n\t\t\t<li>New User</li>\n\t\t\t<li>User Groups</li>\n\t\t\t<li>Permissions</li>\n\t\t\t<li>Passwords</li>\n\t\t  </ul>\n\t\t</div>\n\t  </label>\n\t  \n\t</div>\n\n  </div>\n \n  \n</body>\n"

/***/ }),

/***/ "../../../../../src/app/menu-animations/menu-animations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuAnimationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuAnimationsComponent = (function () {
    function MenuAnimationsComponent() {
    }
    MenuAnimationsComponent.prototype.ngOnInit = function () {
    };
    MenuAnimationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-animations',
            template: __webpack_require__("../../../../../src/app/menu-animations/menu-animations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu-animations/menu-animations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuAnimationsComponent);
    return MenuAnimationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kreon:300, 700);", ""]);

// module
exports.push([module.i, ".body {\n  margin: 0;\n  padding: 0;\n  background-color: #d0d0d0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: center;\n  justify-content: center;\n  perspective: 1000px;\n}\n\n.render {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  transition: all 0.3s ease;\n  transform: rotateX(50deg) rotateZ(1deg);\n  font-family: 'Kreon', serif;\n  font-weight: 700;\n  font-size: 12em;\n  color: #f5f5f5;\n  text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,\n    #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,\n    #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,\n    #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,\n    #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,\n    rgba(16, 16, 16, 0.4) 1px 18px 6px, rgba(16, 16, 16, 0.2) 1px 22px 10px,\n    rgba(16, 16, 16, 0.2) 1px 26px 35px, rgba(16, 16, 16, 0.4) 1px 30px 65px,\n    white -0.15em -0.1em 100px;\n}\n.render:hover {\n  margin-top: -20px;\n  text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,\n    #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,\n    #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,\n    #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,\n    #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,\n    rgba(16, 16, 16, 0.4) 1px 38px 26px, rgba(16, 16, 16, 0.2) 1px 42px 30px,\n    rgba(16, 16, 16, 0.2) 1px 46px 65px, rgba(16, 16, 16, 0.4) 1px 50px 95px,\n    white -0.15em -0.1em 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <span class=\"render\">404</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/validation-effects/validation-effects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-transparent {\n  background-color: transparent !important;\n}\n\n.bg-red {\n  background-color: #e74c3c !important;\n}\n\n.bg-orange {\n  background-color: #e67e22 !important;\n}\n\n.bg-green {\n  background-color: #2ecc71 !important;\n}\n\n.password-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main {\n  height: 100vh;\n  background-color: #3498db;\n}\n.password-wrapper {\n  width: 80%;\n  background-color: #fff;\n  max-width: 320px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.password-wrapper .input {\n  border: none;\n  /* padding: 10px 15px; */\n  font: small-caption;\n  font-size: 18px;\n  font-size: 1.8rem;\n  width: calc(100% - 50px);\n  color: #34495e;\n  outline: none;\n  line-height: 1.5;\n}\n.password-wrapper .icon-wrapper {\n  position: relative;\n  display: inline;\n  float: right;\n  width: 50px;\n  height: 50px;\n  background-color: #34495e;\n  transition: background-color 0.25s ease-out;\n  cursor: pointer;\n}\n.password-wrapper .icon-wrapper .ion-eye,\n.password-wrapper .icon-wrapper .ion-more {\n  font-size: 26px;\n  font-size: 2.6rem;\n  position: absolute;\n  top: 11px;\n  right: 12px;\n  color: #ccc;\n  transition: color 0.25s ease-out;\n}\n.password-wrapper .icon-wrapper .ion-more {\n  right: 14px;\n}\n.password-wrapper .icon-wrapper:hover {\n  transition: background-color 0.25s ease-out;\n  background-color: #2c3e50;\n}\n.password-wrapper .icon-wrapper:hover .ion-eye,\n.password-wrapper .icon-wrapper:hover .ion-more {\n  color: #3498db;\n  transition: color 0.25s ease-in;\n}\n.password-wrapper .strength-lines {\n  position: absolute;\n  bottom: 2px;\n  left: 0;\n  right: 0;\n  width: calc(100% - 50px);\n  height: 6px;\n  z-index: 3;\n}\n.password-wrapper .strength-lines .line {\n  position: absolute;\n  background-color: transparent;\n  height: 6px;\n  border-radius: 2px;\n  transition: background-color 0.25s ease-in;\n}\n\n.password-wrapper .strength-lines .line:not(:first-of-type):not(:last-of-type) {\n  left: 33%;\n  right: 33%;\n}\n.password-wrapper .strength-lines .line:first-of-type {\n  left: 4px;\n  right: 68%;\n}\n.password-wrapper .strength-lines .line:last-of-type {\n  left: 68%;\n  right: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/validation-effects/validation-effects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"password-wrapper\">\n    <input id=\"password-field\" type=\"password\" class=\"input\" name=\"password\">\n    <div class=\"icon-wrapper\">\n      <span toggle=\"#password-field\" class=\"ion ion-eye field-icon toggle-password\"></span>\n    </div>\n\n    <div class=\"strength-lines\">\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/validation-effects/validation-effects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationEffectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationEffectsComponent = (function () {
    function ValidationEffectsComponent() {
    }
    ValidationEffectsComponent.prototype.ngOnInit = function () {
    };
    ValidationEffectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-validation-effects',
            template: __webpack_require__("../../../../../src/app/validation-effects/validation-effects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/validation-effects/validation-effects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationEffectsComponent);
    return ValidationEffectsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map