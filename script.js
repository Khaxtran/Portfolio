    
    const timeContainer = document.getElementById("time-container");
    const oneDay = 24*60*60*1000;
    const DAY_STARTED = "12-07-2020";
    const STARTED_DATE = new Date(DAY_STARTED);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - STARTED_DATE.getTime()) / oneDay);

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
