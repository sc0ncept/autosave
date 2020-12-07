let storagePrefix = 'from-autosave_';

const getId = function (input) {
  if (input.id.length > 0) {
    return input.id;
  }

  if (input.name.length > 0) {
    return input.name;
  }

  return null;
}

const loadData = function () {
  const inputs = document.querySelectorAll('#save-me input, #save-me textarea');

  Array.prototype.slice.call(inputs).forEach(function (input) {

    const id = getId(input);
    if (!id) return;

    const saved = localStorage.getItem(storagePrefix + id);
    if (!saved) return;

    input.value = saved;

    console.log(input.value);
  })
}

const inputHandler = function (event) {
  if (!event.target.closest('#save-me')) return;

  const id = getId(event.target);

  if (!id) return;

  localStorage.setItem(storagePrefix + id, event.target.value);
};

loadData();

document.addEventListener('input', inputHandler, false);