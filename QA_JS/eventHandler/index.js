document
  .querySelector('button#textColour')
  .addEventListener('click', blueToRed);
document
  .querySelector('button#bgColour')
  .addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);

const blueParagraph = document.querySelector('#blueText');

function blueToRed() {
  blueParagraph.style.color = 'red';
  blueParagraph.textContent = blueParagraph.textContent.replace('blue', 'red');
}

const greenParagraphs = document.querySelectorAll('.greenBg');

function greenToPink() {
  for (let greenParagraph of greenParagraphs) {
    greenParagraph.className = 'hotpinkBg';
    greenParagraph.textContent = greenParagraph.textContent.replace(
      'green',
      'hotpink'
    );
  }
}

const tnrParagraph = document.querySelector('#tnrParagraph');

function tnrToArial() {
  tnrParagraph.style.fontFamily = 'arial';
  tnrParagraph.textContent = tnrParagraph.textContent.replace(
    'Times New Roman',
    'Arial'
  );
}
