const buttonTheme = document.querySelectorAll('.buttonTheme');
const icon = document.querySelectorAll('.themeIcon');
const menu = document.querySelector('.fa-bars')
const body = document.body

const menuUl = document.querySelectorAll('#menu-mobile')

  menu.addEventListener('click',(e)=>{    
    e.stopPropagation()
    menuUl.forEach(ul =>{
      ul.classList.toggle('active-menu')
    })
  })


  body.addEventListener('click', ()=>{
    menuUl.forEach(ul =>{
      ul.classList.remove('active-menu')
    })
})


let myTheme = localStorage.getItem('theme') || 'light';
applyTheme(myTheme);

function applyTheme(theme){

  icon.forEach(icons=>{
    if(theme === 'light'){
      icons.classList.remove('fa-moon');
      icons.classList.add('fa-sun');
    }else{
      icons.classList.remove('fa-sun');
      icons.classList.add('fa-moon');
    }

    
      icons.classList.add('rotate');
      setTimeout(() => {
        icons.classList.remove('rotate');
      }, 500);
    });


  if(theme === 'light'){
    document.documentElement.style.setProperty('--background', '#fff');
    document.documentElement.style.setProperty('--background-2', '#f8f8f8');
    document.documentElement.style.setProperty('--lilas1', '#d48edf');
    document.documentElement.style.setProperty('--lilas2', '#993fb4');
    document.documentElement.style.setProperty('--defaultText', '#737373');
    document.documentElement.style.setProperty('--defaultText2', '#4d4d4d');
    document.documentElement.style.setProperty('--textlilas1', '#d48edf');
    document.documentElement.style.setProperty('--textlilas2', '#993fb4');
    document.documentElement.style.setProperty('--h1Colorido', '#5e548e');
    document.documentElement.style.setProperty('--borderlight', '#f8d7ff');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--black', '#000');
    document.documentElement.style.setProperty('--accordion1', '#e7e7e7');
    document.documentElement.style.setProperty('--accordion2', '#f0f0f0');

  } else {
    document.documentElement.style.setProperty('--background', '#25272c');
    document.documentElement.style.setProperty('--background-2', '#28292E');
    document.documentElement.style.setProperty('--lilas1', '#b48ed6');
    document.documentElement.style.setProperty('--lilas2', '#9d4edd');
    document.documentElement.style.setProperty('--defaultText', '#fff');
    document.documentElement.style.setProperty('--defaultText2', '#F0F0F0');
    document.documentElement.style.setProperty('--textlilas1', '#d48edf');
    document.documentElement.style.setProperty('--textlilas2', '#993fb4');
    document.documentElement.style.setProperty('--h1Colorido', '#7e49a1');
    document.documentElement.style.setProperty('--borderlight', '#f8d7ff');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--black', '#fff');
    document.documentElement.style.setProperty('--accordion1', '#616161');
    document.documentElement.style.setProperty('--accordion2', '#6b6b6b');

  }

};

function changeTheme(){
  myTheme = (myTheme === 'light') ? 'dark' : 'light';
  applyTheme(myTheme);
  localStorage.setItem('theme', myTheme); 
}

buttonTheme.forEach(button =>{
  button.addEventListener('click', ()=>{
    console.log('oi')
    changeTheme();
  })
})


const menuMobile = document.querySelectorAll('#menu-mobile li');

menuMobile.forEach(li => {
  li.addEventListener('click', () => {
    const link = li.querySelector('a').getAttribute('href');
    menuUl.forEach(ul =>{
      ul.classList.toggle('active-menu')
    })

    window.location.href = link;

  });
});
