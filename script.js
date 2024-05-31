document.addEventListener('DOMContentLoaded', () => {
  const data = [
    [0.333, null, null, null, null, null, 1],
    [1, null, null, null, null, null, 1.04],
    [1.333, null, null, null, null, null, 1.13],
    [1.666, null, null, null, null, null, 1.23],
    [2, null, null, null, null, null, 1.34],
    [2.333, null, null, null, null, null, 1.42],
    [2.666, null, null, null, null, null, 1.5],
    [3, null, null, null, null, null, 1.56],
    [3.333, null, null, null, null, null, 1.61],
    [5, null, null, null, null, null, 1.78],
    [6.666, null, null, null, null, null, 1.87],
    [10, null, 2.2, 2.49, 2.41, null, 1.98],
    [13.333, null, null, null, null, null, 2.06],
    [15, null, 2.3, 2.54, 2.47, null, 2.1],
    [16.666, null, null, null, null, null, 2.14],
    [20, null, 2.4, 2.59, 2.53, null, 2.21],
    [25, null, 2.45, 2.64, 2.59, null, 2.3],
    [30, null, 2.5, 2.69, 2.67, null, 2.4],
    [35, null, 2.55, 2.74, 2.76, null, null],
    [40, null, 2.6, 2.78, 2.82, null, null],
    [45, null, 2.62, 2.82, 2.9, null, null],
    [50, null, 2.65, 2.85, 2.98, null, null],
    [55, null, 2.67, 2.88, 3.07, null, null],
    [60, null, 2.7, 2.91, 3.15, null, null],
    [65, null, 2.72, 2.92, 3.17, null, null],
    [70, null, 2.73, 2.93, 3.19, null, null],
    [75, null, 2.74, 2.95, 3.22, null, null],
    [80, null, 2.75, 2.96, 3.24, null, null],
    [85, null, 2.77, 2.97, 3.23, null, null],
    [90, null, 2.78, 2.99, 3.23, null, null],
    [95, null, 2.79, 3.01, 3.23, null, null],
    [100, 2.92, 2.8, 3.02, 3.23, 3.8, null],
    [105, 2.93, 2.81, 3.03, 3.23, 3.8, null],
    [110, 2.95, 2.83, 3.04, 3.22, 3.8, null],
    [115, 2.97, 2.84, 3.06, 3.21, 3.8, null],
    [120, 2.99, 2.85, 3.08, 3.21, 3.78, null],
    [125, 2.99, 2.86, 3.09, 3.21, 3.78, null],
    [130, 2.97, 2.88, 3.11, 3.21, 3.78, null],
    [135, 2.97, 2.9, 3.13, 3.22, 3.78, null],
    [140, 2.97, 2.91, 3.15, 3.22, 3.8, null],
    [145, 2.97, 2.93, 3.17, 3.23, 3.8, null],
    [150, 2.99, 2.95, 3.19, 3.25, 3.8, null],
    [155, 2.99, 2.97, 3.21, 3.26, 3.8, null],
    [160, 2.99, 2.98, 3.23, 3.28, 3.81, null],
    [165, 3.01, 3.0, 3.25, 3.3, 3.81, null],
    [170, 3.02, 3.03, 3.27, 3.33, 3.81, null],
    [175, 3.04, 3.06, 3.29, 3.36, 3.81, null],
    [180, 3.05, 3.08, 3.31, 3.4, 3.82, null],
    [185, 3.07, 3.11, 3.34, 3.43, 3.83, null],
    [190, 3.09, 3.13, 3.37, 3.47, 3.84, null],
    [195, 3.11, 3.16, 3.4, 3.51, 3.86, null],
    [200, 3.12, 3.19, 3.42, 3.55, 3.87, null],
    [210, 3.14, 3.26, 3.48, 3.62, 3.89, null],
    [220, 3.17, 3.32, 3.53, 3.7, 3.92, null],
    [230, 3.21, 3.39, 3.8, 3.77, 3.95, null],
    [240, 3.25, 3.45, 3.64, 3.84, 3.97, null],
    [250, 3.35, 3.52, 3.69, 3.88, 4.0, null],
    [260, 3.45, 3.58, 3.74, 3.93, 4.03, null],
    [270, 3.55, 3.63, 3.78, 3.96, 4.07, null],
    [280, 3.65, 3.69, 3.83, 4.0, 4.1, null],
    [290, 3.68, 3.74, 3.87, 4.02, 4.15, null],
    [300, 3.71, 3.78, 3.9, 4.04, 4.2, null],
    [320, 3.79, 3.84, 3.95, 4.12, 4.31, null],
    [340, 3.86, 3.88, 4.02, 4.26, 4.44, null],
    [360, 3.92, 3.95, 4.11, 4.41, 4.56, null],
    [380, 3.96, 4.03, 4.21, 4.55, 4.66, null],
    [400, 3.99, 4.11, 4.3, 4.69, 4.75, null],
    [420, 4.02, 4.15, 4.34, 4.73, 4.79, null],
    [440, 4.08, 4.2, 4.39, 4.78, 4.84, null],
    [460, 4.17, 4.29, 4.48, 4.87, 4.93, null],
    [480, 4.28, 4.4, 4.59, 4.98, 5.04, null],
    [500, 4.41, 4.53, 4.72, 5.11, 5.17, null],
    [520, 4.54, 4.85, 4.85, 5.24, 5.3, null],
    [540, 4.65, 4.97, 4.97, 5.36, 5.42, null],
    [560, 4.74, 5.05, 5.05, 5.44, 5.5, null],
    [580, 4.79, 5.1, 5.1, 5.49, 5.55, null],
    [600, 4.82, 5.13, 5.13, 5.52, 5.58, null],
  ];

  let holeCount = 1;

  function generateInputs(numOfShots, hole) {
    const container = document.getElementById(`inputContainer${hole}`);
    container.innerHTML = '';
    
    for (let i = 1; i <= numOfShots; i++) {
      const distanceInput = document.createElement('input');
      distanceInput.type = 'number';
      distanceInput.classList.add('form-control', 'mb-2');
      distanceInput.id = `distance${hole}-${i}`;
      distanceInput.placeholder = `Shot ${i} Distance (yards)`;
      
      const surfaceSelect = document.createElement('select');
      surfaceSelect.classList.add('form-control', 'mb-2');
      surfaceSelect.id = `surface${hole}-${i}`;
      
      ['tee', 'fairway', 'rough', 'sand', 'recovery', 'green'].forEach(surface => {
        const option = document.createElement('option');
        option.value = surface;
        option.text = surface.charAt(0).toUpperCase() + surface.slice(1);
        surfaceSelect.appendChild(option);
      });
      
      container.appendChild(distanceInput);
      container.appendChild(surfaceSelect);
    }
  }

  function calculateSG() {
    let totalSG = 0;
    let sgOffTheTee = 0;
    let sgApproachTheGreen = 0;
    let sgAroundTheGreen = 0;
    let sgPutting = 0;

    for (let hole = 1; hole <= holeCount; hole++) {
      const numOfShots = parseInt(document.getElementById(`numOfShots${hole}`).value);
      const holePar = parseInt(document.getElementById(`holePar${hole}`).value);
      if (isNaN(numOfShots) || isNaN(holePar)) continue; // Skip this hole if numOfShots or holePar is not a valid number

      let holeSG = 0;

      for (let i = 1; i <= numOfShots; i++) {
        const distanceBefore = parseFloat(document.getElementById(`distance${hole}-${i}`).value);
        const surfaceBefore = document.getElementById(`surface${hole}-${i}`).value;
        const distanceAfter = (i < numOfShots) ? parseFloat(document.getElementById(`distance${hole}-${i + 1}`).value) : 0;
        const surfaceAfter = (i < numOfShots) ? document.getElementById(`surface${hole}-${i + 1}`).value : 'green';

        const sgBefore = getSGValue(distanceBefore, surfaceBefore);
        const sgAfter = getSGValue(distanceAfter, surfaceAfter);

        const strokeGain = (sgBefore - sgAfter - 1);
        holeSG += strokeGain;

        // Categorize strokes gained
        if (surfaceBefore === 'tee' && (holePar === 4 || holePar === 5)) {
          sgOffTheTee += strokeGain;
        } else if (surfaceBefore !== 'green' && distanceBefore > 30) {
          sgApproachTheGreen += strokeGain;
        } else if (distanceBefore <= 30 && surfaceBefore !== 'green') {
          sgAroundTheGreen += strokeGain;
        } else if (surfaceBefore === 'green') {
          sgPutting += strokeGain;
        }
      }

      totalSG += holeSG;
    }

    const sgTeeToGreen = sgOffTheTee + sgApproachTheGreen + sgAroundTheGreen;

    document.getElementById('result').innerHTML = `
      <p>Total Strokes Gained: ${totalSG.toFixed(2)}</p>
      <p>Strokes Gained: Off-The-Tee: ${sgOffTheTee.toFixed(2)}</p>
      <p>Strokes Gained: Approach-The-Green: ${sgApproachTheGreen.toFixed(2)}</p>
      <p>Strokes Gained: Around-The-Green: ${sgAroundTheGreen.toFixed(2)}</p>
      <p>Strokes Gained: Putting: ${sgPutting.toFixed(2)}</p>
      <p>Strokes Gained: Tee-To-Green: ${sgTeeToGreen.toFixed(2)}</p>
    `;
  }

  function getSGValue(distance, surface) {
    if (isNaN(distance) || distance <= 0) return 0;

    const row = data.find(row => row[0] >= distance);
    if (!row) return 0;

    const surfaceIndex = {
      'tee': 1,
      'fairway': 2,
      'rough': 3,
      'sand': 4,
      'recovery': 5,
      'green': 6
    };

    return row[surfaceIndex[surface]];
  }

  document.getElementById('calculateButton').addEventListener('click', calculateSG);

  function addHole() {
    holeCount++;
    const holesContainer = document.getElementById('holesContainer');

    const holeDiv = document.createElement('div');
    holeDiv.classList.add('hole');
    holeDiv.id = `hole${holeCount}`;

    holeDiv.innerHTML = `
      <h3>Hole ${holeCount}</h3>
      <div class="form-group">
        <label for="holePar${holeCount}">Par:</label>
        <input type="number" class="form-control holePar" id="holePar${holeCount}" min="3" max="5" data-hole="${holeCount}">
      </div>
      <div class="form-group">
        <label for="numOfShots${holeCount}">Number of Shots:</label>
        <input type="number" class="form-control numOfShots" id="numOfShots${holeCount}" min="1" max="10" data-hole="${holeCount}">
      </div>
      <div id="inputContainer${holeCount}"></div>
      <button class="btn btn-danger removeHoleButton" data-hole="${holeCount}">Remove Hole</button>
    `;

    holesContainer.appendChild(holeDiv);

    document.getElementById(`numOfShots${holeCount}`).addEventListener('input', (e) => {
      const hole = e.target.getAttribute('data-hole');
      const numOfShots = parseInt(e.target.value);
      generateInputs(numOfShots, hole);
    });

    document.querySelector(`#hole${holeCount} .removeHoleButton`).addEventListener('click', (e) => {
      const hole = e.target.getAttribute('data-hole');
      removeHole(hole);
    });
  }

  function removeHole(hole) {
    const holeDiv = document.getElementById(`hole${hole}`);
    if (holeDiv) {
      holeDiv.remove();
    }
  }

  document.getElementById('addHoleButton').addEventListener('click', addHole);

  document.getElementById('numOfShots1').addEventListener('input', (e) => {
    const hole = e.target.getAttribute('data-hole');
    const numOfShots = parseInt(e.target.value);
    generateInputs(numOfShots, hole);
  });

  generateInputs(1, 1); // Initialize the first hole with 1 input field
});
