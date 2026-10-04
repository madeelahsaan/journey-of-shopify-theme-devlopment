const filterButtons = document.querySelectorAll('.filter-btn');
const activityCards = document.querySelectorAll('.activity-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    activityCards.forEach((card) => {
      const matches =
        selectedFilter === 'all' || card.dataset.category.includes(selectedFilter);

      card.classList.toggle('hidden', !matches);
    });
  });
});

const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button');
  const input = newsletterForm.querySelector('input');

  if (input.value.trim()) {
    button.textContent = 'Subscribed';
    button.disabled = true;
    input.value = '';
  }
});
