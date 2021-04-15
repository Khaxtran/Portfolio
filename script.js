<<<<<<< HEAD
    
    const timeContainer = document.getElementById("time-container");
    const oneDay = 24*60*60*1000;
    const DAY_STARTED = "12-07-2020";
    const STARTED_DATE = new Date(DAY_STARTED);
=======
    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "12-07-2020";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
>>>>>>> changes-2
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
<<<<<<< HEAD
        (now.getTime() - STARTED_DATE.getTime()) / oneDay);

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
=======
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
  
>>>>>>> changes-2
