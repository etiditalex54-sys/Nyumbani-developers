(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu){
    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.hasAttribute('hidden');
      if (isOpen){
        mobileMenu.setAttribute('hidden','');
        hamburger.setAttribute('aria-expanded','false');
      } else {
        mobileMenu.removeAttribute('hidden');
        hamburger.setAttribute('aria-expanded','true');
      }
    });
  }

  // Booking modal
  function ensureBookingModal(){
    let modal = document.getElementById('bookingModal');
    if (!modal){
      modal = document.createElement('dialog');
      modal.id = 'bookingModal';
      modal.className = 'modal';
      modal.innerHTML = `
        <form method="dialog" class="modal-body" id="bookingForm">
          <header>
            <h3>Book a Viewing</h3>
            <button class="icon-btn" value="cancel" aria-label="Close">✕</button>
          </header>
          <div class="grid">
            <label><span>Full name</span><input required name="name" type="text" placeholder="Your name"></label>
            <label><span>Phone</span><input required name="phone" type="tel" placeholder="07xx xxx xxx"></label>
            <label><span>Email</span><input name="email" type="email" placeholder="you@example.com"></label>
            <label><span>Preferred date</span><input name="date" type="date"></label>
            <label class="col-2"><span>Message</span><textarea name="message" rows="3" placeholder="Property of interest"></textarea></label>
          </div>
          <menu>
            <button class="btn" value="cancel">Cancel</button>
            <button class="btn btn-accent" value="submit">Submit</button>
          </menu>
          <div class="after-submit" hidden>
            <p class="success">Thank you! We have received your request. We will call you shortly.</p>
            <div class="stack">
              <a class="btn btn-outline" href="https://wa.me/254740000000?text=Hi%2C%20I%20submitted%20a%20viewing%20request%20on%20your%20website." target="_blank" rel="noopener">Follow up on WhatsApp</a>
            </div>
          </div>`;
      document.body.appendChild(modal);
    }
    return modal;
  }

  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = ensureBookingModal();
      modal.showModal();
      const form = modal.querySelector('#bookingForm');
      if (form){
        form.onsubmit = (event) => {
          event.preventDefault();
          form.querySelector('.after-submit').removeAttribute('hidden');
          form.querySelector('menu').style.display = 'none';
          setTimeout(()=>modal.close(), 2400);
        };
      }
    });
  });

  // Virtual tour modal from buttons
  const tourModal = document.getElementById('tourModal');
  function openTour(src, type){
    if (!tourModal) return;
    const frame = tourModal.querySelector('.tour-frame');
    if (!frame) return;
    let html = '';
    if (type === 'video'){
      html = `<iframe src="${src}" allowfullscreen loading="lazy"></iframe>`;
    } else if (type === 'image360'){
      html = `<iframe src="${src}" loading="lazy"></iframe>`;
    }
    frame.innerHTML = html;
    tourModal.showModal();
  }
  document.querySelectorAll('[data-open-tour]').forEach(btn => {
    btn.addEventListener('click', () => openTour(btn.getAttribute('data-tour-src'), btn.getAttribute('data-tour-type')));
  });
})();

