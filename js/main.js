var swiper = new Swiper(".slide-characteres", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
  });

  const loading = document.querySelector('.pre_loading')

  function preLoading(){

    loading.style.opacity = '0'

    setTimeout(() => {
      loading.style.display = 'none'
    }, 500)
  }