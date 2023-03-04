"use strict";

const remoteData = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const changeAdviceBtn = document.querySelector(".dice-container");

function generateRandomAdvice() {
  fetch(remoteData)
    .then((data) => data.json())
    .then((res) => {
      adviceId.textContent = `Advice #${res.slip.id}`;
      advice.textContent = res.slip.advice;
    });
}

changeAdviceBtn.addEventListener("click", generateRandomAdvice);
