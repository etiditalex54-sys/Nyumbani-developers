/* Simple client-side listing data and rendering */
(function(){
  const formatKsh = (n) => `KSh ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  const properties = [
    {id:'nyali-villa', title:'3‑Bed Modern Villa', location:'Nyali', price:9500000, bedrooms:3, type:'sale', img:'assets/img/exterior1.jpg', tour:{type:'video', src:'https://www.youtube.com/embed/l5s1eQJQ9VQ'}},
    {id:'shanzu-apartment', title:'2‑Bed Apartment', location:'Shanzu', price:5500000, bedrooms:2, type:'sale', img:'assets/img/exterior2.jpg', tour:{type:'video', src:'https://www.youtube.com/embed/l5s1eQJQ9VQ'}},
    {id:'kilifi-bungalow', title:'Kilifi Bungalow', location:'Kilifi', price:4200000, bedrooms:3, type:'sale', img:'assets/img/exterior3.jpg', tour:{type:'video', src:'https://www.youtube.com/embed/l5s1eQJQ9VQ'}},
    {id:'mtwapa-rental', title:'1‑Bed Studio', location:'Mtwapa', price:50000, bedrooms:1, type:'rent', img:'assets/img/interior2.jpg', tour:{type:'video', src:'https://www.youtube.com/embed/l5s1eQJQ9VQ'}},
    {id:'vipingo-rental', title:'2‑Bed Townhouse', location:'Vipingo', price:120000, bedrooms:2, type:'rent', img:'assets/img/interior3.jpg', tour:{type:'video', src:'https://www.youtube.com/embed/l5s1eQJQ9VQ'}},
    {id:'nyali-land', title:'Serviced Plot 1/8 Acre', location:'Nyali', price:3500000, bedrooms:0, type:'sale', img:'assets/img/aerial2.jpg'},
  ];

  function renderCard(p){
    return `
      <article class="card">
        <img src="${p.img}" alt="${p.title}">
        <div class="card-body">
          <div class="stack" style="justify-content:space-between">
            <span class="badge">${p.location}</span>
            <strong class="price">${formatKsh(p.price)}${p.type==='rent'?' / mo':''}</strong>
          </div>
          <h3>${p.title}</h3>
          <p class="muted">${p.bedrooms>0?`${p.bedrooms} bedrooms`:'Land'} • ${p.type==='sale'?'For Sale':'For Rent'}</p>
          <div class="stack">
            ${p.tour?`<button class="btn btn-outline" data-open-tour data-tour-type="${p.tour.type}" data-tour-src="${p.tour.src}">Virtual tour</button>`:''}
            <button class="btn btn-accent" data-open-booking>Book</button>
          </div>
        </div>
      </article>`;
  }

  // Featured grid on home
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid){
    featuredGrid.innerHTML = properties.slice(0,3).map(renderCard).join('');
  }

  // Listings on sale/rent pages
  const listingsGrid = document.getElementById('listingsGrid');
  if (listingsGrid){
    const page = document.body.getAttribute('data-page');
    const filtersForm = document.getElementById('filters');

    function applyFilters(){
      const formData = new FormData(filtersForm);
      const loc = (formData.get('location')||'').toString();
      const beds = (formData.get('bedrooms')||'').toString();
      const max = Number(formData.get('max')) || Infinity;
      const filtered = properties.filter(p => {
        if (page==='sale' && p.type!=='sale') return false;
        if (page==='rent' && p.type!=='rent') return false;
        if (loc && p.location!==loc) return false;
        if (beds && String(p.bedrooms)!==beds) return false;
        if (p.price>max) return false;
        return true;
      });
      listingsGrid.innerHTML = filtered.map(renderCard).join('') || '<p>No results match your filters.</p>';
    }

    filtersForm.addEventListener('submit', (e)=>{e.preventDefault();applyFilters();});
    applyFilters();
  }

  // Developments
  const devGrid = document.getElementById('developmentsGrid');
  if (devGrid){
    const developments = [
      {title:'Vipingo Ridge Villas', location:'Vipingo', price:7500000, img:'assets/img/exterior2.jpg'},
      {title:'Kilifi Creek Homes', location:'Kilifi', price:6200000, img:'assets/img/exterior3.jpg'},
      {title:'Nyali Beach Apartments', location:'Nyali', price:9800000, img:'assets/img/exterior1.jpg'}
    ];
    devGrid.innerHTML = developments.map(d=>`
      <article class="card">
        <img src="${d.img}" alt="${d.title}">
        <div class="card-body">
          <div class="stack" style="justify-content:space-between">
            <span class="badge">${d.location}</span>
            <strong class="price">from ${formatKsh(d.price)}</strong>
          </div>
          <h3>${d.title}</h3>
          <div class="stack">
            <button class="btn btn-outline" data-open-tour data-tour-type="video" data-tour-src="https://www.youtube.com/embed/l5s1eQJQ9VQ">Virtual tour</button>
            <button class="btn btn-accent" data-open-booking>Book</button>
          </div>
        </div>
      </article>`).join('');
  }
})();

