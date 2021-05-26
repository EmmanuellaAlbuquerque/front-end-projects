/* model elements */
var modal = document.getElementById('pure-modal');
var closeBtn = document.getElementsByClassName('close-btn')[0];
var modalTitle = document.getElementById('modal-title');
var modalText = document.getElementById('modal-text');

/* buttons */
var modalBtn1 = document.getElementById('modal-btn-1');
var modalBtn2 = document.getElementById('modal-btn-2');

/* modal listeners */
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside)

/* buttons listeners */
modalBtn1.addEventListener('click', () => openModal('Modal 1', 'Modal 1 Description'));
modalBtn2.addEventListener('click', () => openModal('Modal 2', 'Modal 2 Description'));

/* modal functions */
function openModal(title, description) {
  modal.style.display = 'block';
  modalTitle.innerHTML = title;
  modalText.innerHTML = description;
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}