function handleSubmit(e){
    e.preventDefault();
    const b=e.target.querySelector('.btn-cta');
    b.textContent='✓ Ти в черзі!';
    b.style.background='linear-gradient(135deg,#a8ff78,#78c850)';
    b.style.color='#1a1a1a';b.disabled=true;
  }
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}
  }),{threshold:0.08});
  document.querySelectorAll('.bc,.tc,.infog,.aud-visual,.tl-fill').forEach(el=>{
    if(!el.classList.contains('tl-fill')){
      el.style.opacity='0';el.style.transform='translateY(22px)';
      el.style.transition='opacity .5s ease,transform .5s ease';
    }
    obs.observe(el);
  });
  // animate bars on scroll
  document.querySelectorAll('.tl-fill').forEach(el=>{
    const w=el.style.width; el.style.width='0';
    const o=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){e.target.style.transition='width 1s ease';e.target.style.width=w;o.disconnect()}
    }),{threshold:0.5});
    o.observe(el);
  });
