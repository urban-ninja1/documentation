"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[669],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5383:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"How it works",hide_table_of_contents:!1},c="How it works",l={unversionedId:"how_it_works",id:"how_it_works",title:"How it works",description:"The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called discrete near-infrared (NIR) spectroscopy. Sounds like scientific gibberish? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some scientific abracadabra with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner.",source:"@site/docs/how_it_works.md",sourceDirName:".",slug:"/how_it_works",permalink:"/how_it_works",editUrl:"https://github.com/Plastic-Scanner/docs/how_it_works.md",tags:[],version:"current",frontMatter:{title:"How it works",hide_table_of_contents:!1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"PCB's",permalink:"/development_boards"}},p=[{value:"Discrete NIR spectroscopy",id:"discrete-nir-spectroscopy",children:[],level:2},{value:"Technology",id:"technology",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called ",(0,a.kt)("strong",{parentName:"p"},"discrete near-infrared (NIR) spectroscopy"),". Sounds like scientific gibberish? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some scientific abracadabra with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"plastic scanner explaination",src:n(8258).Z}))),(0,a.kt)("h2",{id:"discrete-nir-spectroscopy"},"Discrete NIR spectroscopy"),(0,a.kt)("p",null,"Let's go slightly deeping into this technology the Plastic Scanner is using. Lets break it down word by word: Discrete - NIR - spectroscopy, and go from back to front."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spectroscopy")," ",(0,a.kt)("em",{parentName:"p"},"is a collective term for scientific techniques that allow one to examine substances according to their electromagnetic spectrum ",(0,a.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Spectroscopy"},"wikipedia"),".")," By shining light to a surface (e.g. a plastic sample), some of it will be absorbed and some of it will be reflected. The amount of reflected light, depends on material's structure and light's wavelength. Measuring the ",(0,a.kt)("em",{parentName:"p"},"reflectance")," at various wavelengths gives a ",(0,a.kt)("em",{parentName:"p"},"spectrum")," which provides all sorts of useful information about the measured object. And this is, brutaly simplified, the essence of spectroscopy."),(0,a.kt)("p",null,"To give an example: if you shine white light(mixed electromagnetic spectrum) on a bottlecap, most of the white light gets absorbed, but some of the light gets reflected in your eye. Depending on which wavelength gets the reflected the rods and cones in your eye are sensitive to this, giving you the information that the bottlecap is red."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NIR")," stands for Near InfraRed. Visible light is only a small part of the electromagnetic spectrum, beyond red there is infrared it contains the electromagnetic (EM) wavelengths between 780 nm to 2500 nm, it is not visable to the eye, but it is definitly there!"),(0,a.kt)("p",null,"If you want to capture a NIR spectrum, there are two possibilities, continuous or ",(0,a.kt)("strong",{parentName:"p"},"discrete"),". Continous caputures the complete spectrum, discrete only measures at certain wavelengths. The plastic scanner does this by shining led's with a specific wavelength on a product. This method is a lot simpler since you do not need to break mixed infrared light like in prism."),(0,a.kt)("h2",{id:"technology"},"Technology"),(0,a.kt)("p",null,"This is implemented on a custom PCB which, at its core, contains a ",(0,a.kt)("strong",{parentName:"p"},"photodiode")," and ",(0,a.kt)("strong",{parentName:"p"},"8 LEDs")," emmiting specific wavelengths of near-infrared light (see DB2.0 for details). By flashing each LED individually onto a plastic sample and measuring it's reflectance with the photodiode, we obtain its (discrete) reflectance spectra, as shown in image below. "),(0,a.kt)("p",null,"Each family of plastic resins has a typical reflectance spectrum, shown below, which is used for comparison and identification of the measured plastic sample."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"Typical reflectance spectra of different plastic polymers",src:"/img/typical_reflectance_spectras.png",width:"400px"})),(0,a.kt)("p",null,"Industrial devices that can measure a sample's spectrum across all wavelengths are expensive and hard to produce. What we're doing is jst measuring the refelctance at 8 specific points (that's why it is called ",(0,a.kt)("strong",{parentName:"p"},"discrete")," NIR ). Then we compare the ratios between these points, since only the shape of the curve matters and absolute values are dependent upon distance between the sample and sensor, ambient light, plastic color, etc."),(0,a.kt)("p",null,"Since there are many factors affecting the readings we focus on the shape of the curve and not it's absolute values. Measuring a sample from a greater distance or at different lighting conditions or of a different color would produce different results. That is why we take specific wavelengths and compare their ratios."))}u.isMDXComponent=!0},8258:function(e,t,n){t.Z=n.p+"assets/images/plasticscannerexplain-5c6739f7ced3b33e6aa163b40399e1ac.gif"}}]);