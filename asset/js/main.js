let transform = parseInt(enter_speed);

function ButtonStart() {
    $('#meter-body').addClass('start-animation');
    $('#speed-needle').addClass('needle-animation');
    $('#boost-needle').addClass('boost-animation');
    $('#meter-body').css("opacity", "100%");
    $('.fuel .needle').addClass('fuel-animation');
    $('.km .needle').addClass('km-animation');
    $('.fuel .needle').delay(8000).addClass('fuel-transform');
    $('.car_360 img').show();
};

function speed_btn() {
    let speed = parseInt(document.getElementById('enter-speed').value);
    let boost = parseInt(document.getElementById('enter-speed').value);

    const maxSpeed = 260;
    const maxRotation = 260;

    if (speed >= 0 && speed <= 260) {
        if (speed >= 0 && speed <= 20) {
            const rotation = (speed / maxSpeed) * maxRotation;
            let input_rotate_speed = document.getElementById('input_rotate_speed');
            let input_rotate_boost = document.getElementById('input_rotate_boost');
            input_rotate_speed.style.transform = `rotate(${rotation}deg)`;
            input_rotate_boost.style.transform = `rotate(${rotation}deg)`;
        }

        else if (speed >= 20 && speed <= 60) {
            const rotation = (speed / maxSpeed) * maxRotation - 5;
            let input_rotate_speed = document.getElementById('input_rotate_speed');
            let input_rotate_boost = document.getElementById('input_rotate_boost');
            input_rotate_speed.style.transform = `rotate(${rotation}deg)`;
            input_rotate_boost.style.transform = `rotate(${rotation}deg)`;
        }

        else if (speed >= 150 && speed <= 220) {
            const rotation = (speed / maxSpeed) * maxRotation - 14;
            let input_rotate_speed = document.getElementById('input_rotate_speed');
            let input_rotate_boost = document.getElementById('input_rotate_boost');
            input_rotate_speed.style.transform = `rotate(${rotation}deg)`;
            input_rotate_boost.style.transform = `rotate(${rotation}deg)`;
        }

        else if (speed >= 220 && speed <= 260) {
            const rotation = (speed / maxSpeed) * maxRotation - 20;
            let input_rotate_speed = document.getElementById('input_rotate_speed');
            let input_rotate_boost = document.getElementById('input_rotate_boost');
            input_rotate_speed.style.transform = `rotate(${rotation}deg)`;
            input_rotate_boost.style.transform = `rotate(${rotation}deg)`;
        }

        else {
            const rotation = (speed / maxSpeed) * maxRotation - 10;
            let input_rotate_speed = document.getElementById('input_rotate_speed');
            let input_rotate_boost = document.getElementById('input_rotate_boost');
            input_rotate_speed.style.transform = `rotate(${rotation}deg)`;
            input_rotate_boost.style.transform = `rotate(${rotation}deg)`;
        }
    } else {
        alert('You are exceeding the maximum speed 0 to 260!!!');
        return;
    }

}