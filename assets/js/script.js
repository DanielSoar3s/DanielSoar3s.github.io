const form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', handleSubmit);


function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputValue(id) {
  return Number(document.getElementById(id).value);
}

function calculateTmb(gender, weight, height, age) {
  if(gender === 'female') {
    return Math.round(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
  } else {
    return Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
  }
}

function converterInHtml(result, maintenance, loseWeight, gainWeight) {
  const layout = `
  <h2>Aqui está o resultado:</h2>

  <div class="result-content">
    <ul>
      <li>
        Seu metabolismo basal é de <strong>${result} calorias</strong>.
      </li>
      <li>
        Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
      </li>
      <li>
        Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
      </li>
      <li>
        Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
      </li>
    </ul>
  </div>
  `;

  const joinHtml = document.getElementById('result');
  joinHtml.innerHTML = layout;
}


function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputValue('age');
  const weight = getInputValue('weight');
  const height = getInputValue('height');
  const activityLevel = getSelectedValue('activity_level');

  const result = calculateTmb(gender, weight, height, age);

  const maintenance = Math.round(result * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  converterInHtml(result, maintenance,loseWeight, gainWeight);
}


