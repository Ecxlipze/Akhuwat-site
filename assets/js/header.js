
  // Set mega top equal to header height
  const headerEl = document.querySelector(".header");
  function setMegaTop(){
    const h = headerEl.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--megaTop", `${h}px`);
  }
  setMegaTop();
  window.addEventListener("resize", setMegaTop);

  // Desktop: panel data (same as your logic)
  const panelData = {
    about_founder: { title:"Dr. Muhammad Amjad Saqib (SI, HI)", desc:"Founder & Chairman", img:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" },
    about_board:   { title:"Board of Directors", desc:"Governance & leadership team", img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
    about_chapters:{ title:"International Chapters", desc:"Our presence across regions", img:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop" },
    about_reports: { title:"Akhuwat Reports", desc:"Impact, annual reports & publications", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" },

    prog_micro:    { title:"Microfinance", desc:"Interest-free microfinance for families", img:"https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" },
    prog_education:{ title:"Education", desc:"Fee-free education initiatives", img:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" },
    prog_health:   { title:"Health", desc:"Health support and community care", img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" },
    prog_skills:   { title:"Skills & Livelihood", desc:"Training for sustainable income", img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" },

    news_updates:      { title:"Latest Updates", desc:"Announcements and latest news", img:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop" },
    news_stories:      { title:"Impact Stories", desc:"Stories from the field", img:"https://images.unsplash.com/photo-1520975682031-a99d3f3a6f5a?q=80&w=1200&auto=format&fit=crop" },
    news_publications: { title:"Publications", desc:"Research, reports & publications", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" },
    news_media:        { title:"Media Kit", desc:"Brand assets and media resources", img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },

    join_volunteer:{ title:"Volunteer", desc:"Join as a volunteer", img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
    join_careers:  { title:"Careers", desc:"Work with the mission", img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" },
    join_partners: { title:"Partners", desc:"Partner with Akhuwat", img:"https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop" },
    join_contact:  { title:"Contact", desc:"Get in touch with us", img:"https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop" },

    flood_relief:  { title:"Relief Work", desc:"Immediate relief and support", img:"https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1200&auto=format&fit=crop" },
    flood_partners:{ title:"Partners", desc:"Partners in relief efforts", img:"https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop" },
    flood_gallery: { title:"Gallery", desc:"Images and moments", img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
    flood_reports: { title:"Reports", desc:"Response reports and documentation", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" }
  };

  function setPanel(menuName, key){
    const imgEl = document.querySelector(`[data-panel-img="${menuName}"]`);
    const titleEl = document.querySelector(`[data-panel-title="${menuName}"]`);
    const descEl = document.querySelector(`[data-panel-desc="${menuName}"]`);
    const data = panelData[key];
    if(!data || !imgEl || !titleEl || !descEl) return;
    imgEl.style.backgroundImage = `url('${data.img}')`;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
  }

  document.querySelectorAll(".menu-list[data-links]").forEach(list => {
    const menuName = list.getAttribute("data-links");
    const first = list.querySelector("a[data-key]");
    if(first) setPanel(menuName, first.dataset.key);

    list.querySelectorAll("a[data-key]").forEach(a => {
      a.addEventListener("mouseenter", () => {
        list.querySelectorAll("a").forEach(x => x.classList.remove("active"));
        a.classList.add("active");
        setPanel(menuName, a.dataset.key);
      });
      a.addEventListener("click", (e) => e.preventDefault());
    });
  });

  // Desktop search toggle
  const searchBtn = document.getElementById("searchBtn");
  const searchRow = document.getElementById("searchRow");
  const searchInput = document.getElementById("searchInput");
  searchBtn.addEventListener("click", () => {
    searchRow.classList.toggle("open");
    setMegaTop();
    if(searchRow.classList.contains("open")) searchInput.focus();
  });

  // Donate demo
  document.getElementById("donateBtn").addEventListener("click", () => {
    alert("Donate button clicked (connect your donate link here).");
  });

  // Desktop hover mega show/hide (your logic)
  const megaItems = document.querySelectorAll(".nav > li.has-mega");
  const HIDE_DELAY = 1000;
  let hideTimers = new Map();

  function closeAllExcept(exceptItem){
    megaItems.forEach(li => {
      if(li !== exceptItem){
        const mega = li.querySelector(".mega");
        mega.classList.remove("show");
        if(hideTimers.has(li)){
          clearTimeout(hideTimers.get(li));
          hideTimers.delete(li);
        }
      }
    });
  }

  megaItems.forEach(item => {
    const mega = item.querySelector(".mega");
    const cancelTimer = () => {
      if(hideTimers.has(item)){
        clearTimeout(hideTimers.get(item));
        hideTimers.delete(item);
      }
    };
    const startHideTimer = () => {
      cancelTimer();
      const t = setTimeout(() => {
        mega.classList.remove("show");
        hideTimers.delete(item);
      }, HIDE_DELAY);
      hideTimers.set(item, t);
    };

    item.addEventListener("mouseenter", () => {
      // prevent desktop hover behavior on mobile widths
      if(window.matchMedia("(max-width: 860px)").matches) return;
      cancelTimer();
      closeAllExcept(item);
      mega.classList.add("show");
    });

    item.addEventListener("mouseleave", () => {
      if(window.matchMedia("(max-width: 860px)").matches) return;
      startHideTimer();
    });

    mega.addEventListener("mouseenter", cancelTimer);
    mega.addEventListener("mouseleave", startHideTimer);
  });

  // MOBILE DRAWER open/close
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("drawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const closeDrawer = document.getElementById("closeDrawer");

  function openDrawer(){
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function hideDrawer(){
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if(menuBtn){
    menuBtn.addEventListener("click", openDrawer);
  }
  closeDrawer.addEventListener("click", hideDrawer);
  backdrop.addEventListener("click", hideDrawer);

  // Mobile accordion
  document.querySelectorAll(".acc-item").forEach(item => {
    const btn = item.querySelector(".acc-btn");
    const sign = btn.querySelector("span");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // close others (optional)
      document.querySelectorAll(".acc-item.open").forEach(x => {
        if(x !== item){
          x.classList.remove("open");
          const s = x.querySelector(".acc-btn span");
          if(s) s.textContent = "+";
        }
      });

      item.classList.toggle("open");
      sign.textContent = (!isOpen) ? "−" : "+";
    });
  });

  // ESC to close drawer
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") hideDrawer();
  });