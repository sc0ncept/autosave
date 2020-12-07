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

const inputHandle = function (event) {
  if (!event.target.closest('#save-me')) return;

  const id = getId(event.target);

  if (!id) return;

  localStorage.setItem(storagePrefix + id, event.target.value);
};

document.addEventListener('input', inputHandle, false);