function newStyle() {
    let newImage = '';
    let x = Math.floor(Math.random()*4); 
    switch (x){
      case 0:
        newImage = './media/profile pictures/user.png';
        break;
      case 1: 
        newImage = './media/profile pictures/attach.png';
        break;
      case 2:
        newImage = './media/profile pictures/paper-plane.png';
        break;
      case 3:
        newImage = './media/profile pictures/startup.png';
      break;
    }
    let elem = document.getElementById('profile-picture');
    elem.src = newImage;
  }