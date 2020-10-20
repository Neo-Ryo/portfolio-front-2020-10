module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fzO5");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Layout({
  children
}) {
  return __jsx("div", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapperLayout
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Welcome on my portfolio"), __jsx("link", {
    rel: "icon",
    href: "katana.ico"
  })), __jsx("div", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, __jsx("img", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerPic,
    src: "images/moiPicturized200.png",
    alt: "schiavone marc pic"
  })), __jsx("main", null, children));
}

/***/ }),

/***/ "6Kh0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Section_main__3j1hP"
};


/***/ }),

/***/ "7T8v":
/***/ (function(module, exports) {

const url = 'http://localhost:8000';
module.exports = url;

/***/ }),

/***/ "9FCX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "TechSection_wrapper__YE5_a",
	"iconTech": "TechSection_iconTech__932lp"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./styles/Section.module.css
var Section_module = __webpack_require__("6Kh0");
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);

// CONCATENATED MODULE: ./components/Section.js

var __jsx = external_react_default.a.createElement;

function Section_Layout({
  children
}) {
  return __jsx("div", {
    className: Section_module_default.a.main
  }, children);
}
// EXTERNAL MODULE: ./styles/TechSection.module.css
var TechSection_module = __webpack_require__("9FCX");
var TechSection_module_default = /*#__PURE__*/__webpack_require__.n(TechSection_module);

// CONCATENATED MODULE: ./components/TechIcons.js

var TechIcons_jsx = external_react_default.a.createElement;

function HoneyCombImg({
  img,
  altCom,
  width
}) {
  return TechIcons_jsx("div", {
    className: TechSection_module_default.a.iconTech
  }, TechIcons_jsx("img", {
    src: img,
    alt: altCom,
    width: width
  }));
}
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/TechSection.js

var TechSection_jsx = external_react_default.a.createElement;



const techArray = [{
  name: '/images/js-icon.png',
  altCom: 'javascript icon',
  width: '100px'
}, {
  name: '/images/bootstrap_logo.svg.png',
  altCom: 'bootstrap icon',
  width: '100px'
}, {
  name: '/images/icon-css.png',
  altCom: 'css icon',
  width: '80px'
}, {
  name: '/images/html.png',
  altCom: 'html icon',
  width: '100px'
}, {
  name: '/images/node-icon-21.png',
  altCom: 'node.js icon',
  width: '200px'
}, {
  name: '/images/nextjs.png',
  altCom: 'next.js icon',
  width: '100px'
}, {
  name: '/images/semantic-ui.png',
  altCom: 'semantic-ui icon',
  width: '100px'
}, {
  name: '/images/react-icon.png',
  altCom: 'react icon',
  width: '100px'
}];
function TechSection() {
  return TechSection_jsx(external_reactstrap_["Row"], {
    style: {
      margin: '50px 0'
    }
  }, TechSection_jsx(external_reactstrap_["Col"], null), techArray.map((it, k) => TechSection_jsx(external_reactstrap_["Col"], {
    style: {
      textAlign: 'center'
    },
    key: it.name
  }, TechSection_jsx(HoneyCombImg, {
    key: k,
    img: it.name,
    altCom: it.altCom,
    width: it.width
  }))), TechSection_jsx(external_reactstrap_["Col"], null));
}
// EXTERNAL MODULE: ./styles/Splitter.module.css
var Splitter_module = __webpack_require__("mykb");
var Splitter_module_default = /*#__PURE__*/__webpack_require__.n(Splitter_module);

// CONCATENATED MODULE: ./components/Splitter.js

var Splitter_jsx = external_react_default.a.createElement;

function Splitter({
  children
}) {
  return Splitter_jsx("div", {
    className: Splitter_module_default.a.wrapper
  }, Splitter_jsx("hr", {
    className: Splitter_module_default.a.splitter
  }), Splitter_jsx("p", {
    style: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 20,
      fontWeight: 500
    }
  }, children), Splitter_jsx("hr", {
    className: Splitter_module_default.a.splitter
  }));
}
// CONCATENATED MODULE: ./components/Panels.js
var Panels_jsx = external_react_default.a.createElement;



const Panel = ({
  title,
  text
}) => {
  return Panels_jsx(external_react_default.a.Fragment, null, Panels_jsx("h3", {
    style: {
      fontSize: 28,
      fontFamily: 'Permanent Marker, cursive',
      whiteSpace: 'nowrap',
      margin: '10px 0px',
      color: '#3b5998'
    }
  }, title), Panels_jsx(external_reactstrap_["Card"], null, Panels_jsx(external_reactstrap_["CardBody"], null, Panels_jsx(external_reactstrap_["CardText"], {
    style: {
      fontSize: 20,
      letterSpacing: 2,
      lineHeight: '1.4',
      textAlign: 'left'
    }
  }, text, ' '))));
};

/* harmony default export */ var Panels = (Panel);
// EXTERNAL MODULE: ./styles/Capsule.module.css
var Capsule_module = __webpack_require__("hEUN");
var Capsule_module_default = /*#__PURE__*/__webpack_require__.n(Capsule_module);

// CONCATENATED MODULE: ./components/Capsule.js

var Capsule_jsx = external_react_default.a.createElement;

function Capsule({
  title,
  picture,
  link,
  target,
  rel,
  description
}) {
  return Capsule_jsx(external_react_default.a.Fragment, null, Capsule_jsx("a", {
    href: link,
    target: target,
    rel: rel
  }, Capsule_jsx("div", {
    className: Capsule_module_default.a.capsule
  }, Capsule_jsx("div", {
    className: Capsule_module_default.a.left
  }, Capsule_jsx("p", null, title)), Capsule_jsx("img", {
    className: Capsule_module_default.a.right,
    src: picture,
    alt: title
  }), ' ')), Capsule_jsx("p", {
    style: {
      fontSize: 20,
      color: 'black',
      marginTop: 20
    }
  }, description));
}
// CONCATENATED MODULE: ./lib/projectsData.js
const projects = [{
  title: 'Pokedex',
  picture: '/images/evoli-drksdofthmn.jpg',
  link: 'https://pokedex-ryo.netlify.app/',
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
  description: "This was my very first home made project. The challenge here for me was to be able consume an API, and for that I've chosen to make a pokedex. (For those who wouldn't know what a pokedex is, it was a machine that heros from Pokemon could use to get infos about any pokemon)"
}, {
  title: 'The Switcher',
  picture: '/images/switcher-start.gif',
  link: 'https://ryo-switcher.netlify.app/',
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
  description: 'Here is my very first game entirely made with React.js, the principle is simple, you have to turn all the switches on (or off in one level) until all of them are in    the same position, and because one switch ofen activate one or severals other ones, it can be tricky. Enjoy'
}, {
  title: 'Virus clicker',
  picture: '/images/virus-2-bckgrd.jpg',
  link: 'https://tender-golick-3302a7.netlify.app/',
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
  description: 'Virus clicker is a coockie clicker like game (idle game) in wich the main goal is to click a lot on the coockie to increment your score. For virus clicker, the challenge was to make a game that was team play oriented. I did this one with, 3 fantastic work mate during my WildCodeSchool course and it was a very good time.'
}, {
  title: 'A venir',
  picture: '/images/loading.gif',
  target: '',
  rel: 'noopener noreferrer nofollow',
  link: '/',
  description: 'My next project is cooking, see it soon...'
}];
/* harmony default export */ var projectsData = (projects);
// CONCATENATED MODULE: ./components/Projects.js

var Projects_jsx = external_react_default.a.createElement;



function Projects() {
  return Projects_jsx(external_reactstrap_["Row"], {
    style: {
      margin: 0
    }
  }, projectsData.map((it, k) => Projects_jsx(external_reactstrap_["Col"], {
    style: {
      textAlign: 'center'
    },
    key: k
  }, Projects_jsx(Capsule, {
    picture: it.picture,
    title: it.title,
    key: it.title,
    link: it.link,
    target: it.target,
    rel: it.rel,
    description: it.description
  }))));
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./lib/url.js
var url = __webpack_require__("7T8v");
var url_default = /*#__PURE__*/__webpack_require__.n(url);

// CONCATENATED MODULE: ./components/Alert.js

var Alert_jsx = external_react_default.a.createElement;

function Alerting({
  color,
  message
}) {
  return Alert_jsx(external_reactstrap_["Alert"], {
    color: color
  }, message);
}
// CONCATENATED MODULE: ./components/Contact.js
var Contact_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Contact(props) {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])({
    name: '',
    text: ''
  });
  const {
    0: isDisabled,
    1: setIsDisabled
  } = Object(external_react_["useState"])(false);
  const {
    0: emailSent,
    1: setEmailSent
  } = Object(external_react_["useState"])(false);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleMails = async e => {
    const {
      name,
      text
    } = email;

    if (emailIsValid(name)) {
      e.preventDefault();
      await external_axios_default.a.post(`${url_default.a}/email`, {
        emailFrom: name,
        subject: `Email Portfolio de la part de: ${name}`,
        message: text
      });
      setEmailSent(true);
    } else {
      e.preventDefault();
      setIsDisabled(true);
    }
  };

  const handleName = e => {
    setEmail(_objectSpread(_objectSpread({}, email), {}, {
      name: e.target.value
    }));
    setIsDisabled(false);
  };

  const handleText = e => {
    setEmail(_objectSpread(_objectSpread({}, email), {}, {
      text: e.target.value
    }));
  };

  return Contact_jsx(external_react_default.a.Fragment, null, Contact_jsx(external_reactstrap_["Row"], {
    style: {
      margin: '20px 0'
    }
  }, Contact_jsx(external_reactstrap_["Col"], null), Contact_jsx(external_reactstrap_["Col"], {
    sm: 10,
    md: 8,
    lg: 6,
    style: {
      textAlign: 'center'
    }
  }, Contact_jsx(external_reactstrap_["Form"], {
    onSubmit: e => handleMails(e)
  }, Contact_jsx(external_reactstrap_["FormGroup"], null, Contact_jsx(external_reactstrap_["Label"], {
    style: {
      color: '#3b5998',
      fontSize: 18
    },
    for: "email"
  }, Contact_jsx("b", null, "Email adress")), Contact_jsx(external_reactstrap_["Input"], {
    style: {
      fontSize: 20,
      fontWeight: 700
    },
    type: "text",
    name: "name",
    id: "name",
    placeholder: "name@email.com",
    onChange: e => handleName(e)
  }), isDisabled ? Contact_jsx(Alerting, {
    color: "danger",
    message: "email invalid"
  }) : ''), Contact_jsx(external_reactstrap_["FormGroup"], null, Contact_jsx(external_reactstrap_["Label"], {
    style: {
      color: '#3b5998',
      fontSize: 18
    },
    for: "comment"
  }, Contact_jsx("b", null, "Message")), Contact_jsx(external_reactstrap_["Input"], {
    style: {
      fontSize: 20,
      fontWeight: 700,
      height: '20vh'
    },
    placeholder: "your message",
    type: "textarea",
    name: "comment",
    id: "comment",
    onChange: e => handleText(e)
  })), Contact_jsx(external_reactstrap_["Button"], {
    disabled: isDisabled,
    color: "primary"
  }, "Submit"))), Contact_jsx(external_reactstrap_["Col"], null)), emailSent ? Contact_jsx(external_reactstrap_["Row"], null, Contact_jsx(external_reactstrap_["Col"], {
    sm: {
      size: 4,
      offset: 4
    },
    md: {
      size: 4,
      offset: 4
    },
    lg: {
      size: 4,
      offset: 4
    }
  }, Contact_jsx(Alerting, {
    color: "success",
    message: "eMail sent!"
  }))) : '');
}
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;





function Footer({
  views,
  likes
}) {
  const {
    0: liked,
    1: setLiked
  } = Object(external_react_["useState"])(false);

  const handleLikes = e => {
    e.preventDefault();
    external_axios_default.a.put(`${url_default.a}/api/counts/likes`);
    setLiked(true);
  };

  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx(external_reactstrap_["Row"], {
    style: {
      margin: 0,
      height: '20vh',
      background: 'rgb(23,23,23)',
      background: 'linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(74,73,73,1) 70%, rgba(98,97,97,0.7861345221682423) 100%)'
    }
  }, Footer_jsx(external_reactstrap_["Col"], {
    style: {
      textAlign: 'center',
      marginTop: '8vh'
    }
  }, Footer_jsx(external_reactstrap_["Button"], {
    color: "primary",
    outline: true
  }, "Site visited ", Footer_jsx(external_reactstrap_["Badge"], {
    color: "secondary"
  }, views))), Footer_jsx(external_reactstrap_["Col"], {
    style: {
      textAlign: 'center',
      marginTop: '8vh'
    }
  }, Footer_jsx("p", {
    style: {
      color: '#ffc107',
      fontSize: 22
    }
  }, "This website is made with love and Next.js by Marc S.")), Footer_jsx(external_reactstrap_["Col"], {
    style: {
      textAlign: 'center',
      marginTop: '8vh'
    }
  }, Footer_jsx(external_reactstrap_["Button"], {
    color: "danger",
    outline: true,
    disabled: liked,
    onClick: e => handleLikes(e)
  }, "Like ", Footer_jsx("img", {
    src: "/images/heart20px.png",
    alt: "like icon"
  }), Footer_jsx(external_reactstrap_["Badge"], {
    color: "secondary",
    style: {
      marginLeft: 10
    }
  }, liked ? likes + 1 : likes)), liked ? Footer_jsx(Alerting, {
    color: "danger",
    message: "Thank you!!!"
  }) : '')));
}
// EXTERNAL MODULE: ./styles/AboutMe.module.css
var AboutMe_module = __webpack_require__("qoKW");
var AboutMe_module_default = /*#__PURE__*/__webpack_require__.n(AboutMe_module);

// CONCATENATED MODULE: ./components/AboutMe.js

var AboutMe_jsx = external_react_default.a.createElement;


function AboutMe() {
  return AboutMe_jsx(external_reactstrap_["Row"], {
    className: AboutMe_module_default.a.rowWrap
  }, AboutMe_jsx(external_reactstrap_["Col"], {
    sm: {
      size: 12
    },
    md: {
      size: 12
    },
    lg: {
      size: 4
    },
    className: AboutMe_module_default.a.linkAbout
  }, AboutMe_jsx("a", {
    href: "https://github.com/Neo-Ryo",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, "Github profile")), AboutMe_jsx(external_reactstrap_["Col"], {
    sm: {
      size: 12
    },
    md: {
      size: 12
    },
    lg: {
      size: 4
    },
    className: AboutMe_module_default.a.linkAbout
  }, AboutMe_jsx("a", {
    href: "/my-cv"
  }, "resume")), AboutMe_jsx(external_reactstrap_["Col"], {
    sm: {
      size: 12
    },
    md: {
      size: 12
    },
    lg: {
      size: 4
    },
    className: AboutMe_module_default.a.linkAbout
  }, AboutMe_jsx("a", {
    href: "https://www.linkedin.com/in/marc-schiavone/",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, "Linkedin profile")));
}
// CONCATENATED MODULE: ./lib/panelTexts.js
const panelTexts = [{
  title: 'My personnal background',
  text: "I grew up in one of the many suburbs of Lyon. For my studies, everything started in a technichal College where I've learned Electricity, and even though I love learning and I'm passionate about many things, I wasn't really a school person."
}, {
  title: 'What I love',
  text: 'I had the chance to do many thing in my life and I enjoyed most of them, but if I had to keep only what I really like, there would be Music, Martial Arts, Surfing, Video Games and of course programming!'
}, {
  title: 'My working skills ',
  text: "So as my resume says, I attended a course about web development mid 2020, and I'v learned most of my skills as a React.js developper back then. I can say that I'm a Javascript developper because it is my first real langage (I've started with Python wich I like but I only used it in simple algorythm exercises). After that I was in internship in a company for 2 months were I improve my knowledge and my way of coding and since then I'm on my own, working on a project that I intend to finish and I keep learning and improving myself every day. I made this portfolio with Next.js just to challenge myself. Thanks for reading"
}];
/* harmony default export */ var lib_panelTexts = (panelTexts);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















async function getServerSideProps() {
  const res = await external_axios_default.a.get(`${url_default.a}/api/counts`);
  const {
    views,
    likes
  } = res.data;
  return {
    props: {
      views,
      likes
    }
  };
}
function Home({
  views,
  likes
}) {
  Object(external_react_["useEffect"])(() => {
    const user = sessionStorage.getItem('uuidCheckingPortfolio');

    if (!user) {
      const uuid = Object(external_uuid_["v4"])();
      sessionStorage.setItem('uuidCheckingPortfolio', uuid);
      external_axios_default.a.put(`${url_default.a}/api/counts/views`);
    }
  }, []);
  return pages_jsx(Layout["a" /* default */], null, pages_jsx(head_default.a, null, pages_jsx("title", null, "SCHIAVONE Marc portfolio "), pages_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Raleway:ital,wght@0,300;1,500&display=swap",
    rel: "stylesheet"
  })), pages_jsx(Section_Layout, null, pages_jsx("p", {
    style: {
      margin: '100px'
    }
  }, "Hi, I'm Marc and I'm a fullstack developper who loves to create usefull apps to improve people's life. Even though I'm quite at the beginnig of my journey, I feel like I can accomplish anything with my skills and the things I learn every days.")), pages_jsx(TechSection, null), pages_jsx(Splitter, null, "Description"), pages_jsx(external_reactstrap_["Row"], {
    style: {
      margin: 0
    }
  }, lib_panelTexts.map((item, k) => pages_jsx(external_reactstrap_["Col"], {
    sm: 12,
    md: 6,
    lg: 4,
    key: k,
    style: {
      textAlign: 'center'
    }
  }, pages_jsx(Panels, _extends({}, item, {
    key: k
  }))))), pages_jsx(Splitter, null, "My projects"), pages_jsx(Projects, null), pages_jsx(Splitter, null, "Links"), pages_jsx(AboutMe, null), pages_jsx(Splitter, null, "Contact me"), pages_jsx(Contact, null), pages_jsx(Footer, {
    views: views,
    likes: likes
  }));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fzO5":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapperLayout": "Header_wrapperLayout__XO9oq",
	"header": "Header_header__182Qc",
	"headerPic": "Header_headerPic__3RAaS"
};


/***/ }),

/***/ "hEUN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"capsule": "Capsule_capsule__2FRAQ",
	"float": "Capsule_float__3tgJY",
	"left": "Capsule_left__2u_9b",
	"right": "Capsule_right__dXTUw",
	"picture": "Capsule_picture__IgWn_",
	"shake": "Capsule_shake__18uFW"
};


/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "mykb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Splitter_wrapper__1kcqH",
	"splitter": "Splitter_splitter__2LOGf"
};


/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qoKW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"rowWrap": "AboutMe_rowWrap__JkIF1",
	"linkAbout": "AboutMe_linkAbout__PY3_o"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });