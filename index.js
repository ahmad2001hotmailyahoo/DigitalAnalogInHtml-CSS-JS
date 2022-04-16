setInterval(() =>{
        date = new Date();
        getSeconed = date.getSeconds();
        getMinute = date.getMinutes();
        getHour =  date.getHours();

        hourRotation = (getHour*30) + (getMinute/2)+(getSeconed/120);
        minuteRotation = (getMinute*6) + (getSeconed/10);
        seconedRotation = (getSeconed*6);

        hour.style.transform = `rotate(${hourRotation}deg)`;
        minute.style.transform = `rotate(${minuteRotation}deg)`;
        seconed.style.transform = `rotate(${seconedRotation}deg)`;

},100);