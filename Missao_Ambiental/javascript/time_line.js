function changeActive(index) {
    const contentSections = document.querySelectorAll('.section_content');
    const progressSteps = document.querySelectorAll('.step');
  
    contentSections.forEach(section => {
      section.classList.remove('active');
      section.style.display = 'none'; // Oculta todos os elementos
    });
  
    progressSteps.forEach(step => {
      step.classList.remove('active');
    });
  
    contentSections[index].classList.add('active');
    progressSteps[index].classList.add('active');
  
    contentSections[index].style.display = 'block';
  }