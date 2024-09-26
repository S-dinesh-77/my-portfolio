// HTML & CSS progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlSpeed = 30;

let progressHtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

  if (htmlStartValue === htmlEndValue) {
    clearInterval(progressHtml);
  }
}, htmlSpeed);

// JavaScript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 70,
  jsSpeed = 30;

let progressJs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

  if (javascriptStartValue === javascriptEndValue) {
    clearInterval(progressJs);
  }
}, jsSpeed);

// jQuery progress circular bar 
let jqueryProgress = document.querySelector(".php"),
  jqueryValue = document.querySelector(".php-progress");

let jqueryStartValue = 0,
  jqueryEndValue = 75,
  jquerySpeed = 30;

let progressJquery = setInterval(() => {
  jqueryStartValue++;
  jqueryValue.textContent = `${jqueryStartValue}%`;
  jqueryProgress.style.background = `conic-gradient(#20c997 ${jqueryStartValue * 3.6}deg, #ededed 0deg)`;

  if (jqueryStartValue === jqueryEndValue) {
    clearInterval(progressJquery);
  }
}, jquerySpeed);

// ReactJS progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 60,
  reactSpeed = 30;

let progressReact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;

  if (reactStartValue === reactEndValue) {
    clearInterval(progressReact);
  }
}, reactSpeed);

// Bootstrap progress circular bar 
let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 70, // Adjust as needed
  bootstrapSpeed = 30;

let progressBootstrap = setInterval(() => {
  bootstrapStartValue++;
  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#563d7c ${bootstrapStartValue * 3.6}deg, #ededed 0deg)`;

  if (bootstrapStartValue === bootstrapEndValue) {
    clearInterval(progressBootstrap);
  }
}, bootstrapSpeed);

// GitHub progress circular bar 
let githubProgress = document.querySelector(".github"),
  githubValue = document.querySelector(".github-progress");

let githubStartValue = 0,
  githubEndValue = 60, // Adjust as needed
  githubSpeed = 30;

let progressGithub = setInterval(() => {
  githubStartValue++;
  githubValue.textContent = `${githubStartValue}%`;
  githubProgress.style.background = `conic-gradient(#24292e ${githubStartValue * 3.6}deg, #ededed 0deg)`;

  if (githubStartValue === githubEndValue) {
    clearInterval(progressGithub);
  }
}, githubSpeed);

// Add your existing jQuery and other scripts here...
