let _items = document.querySelectorAll('.cards');
let _itemsList = document.querySelector('.cards-wrapper-mobile');
let _transform = 0;
let _itemTransform = 0;

function eventsAdder() {
    document.documentElement.addEventListener('click', key);
}

function key(event) {
    let _direction;
    if (event.target.classList.contains('control-left')) {
        event.preventDefault();
        _direction = 'left';
    }
    if (event.target.classList.contains('control-right')) {
        event.preventDefault();
        _direction = 'right';
    }
    slider(_direction);
}

function slider(_direction) {
    if (_direction == 'right') {
        _transform = _transform - 100;
    }
    if (_direction == 'left') {
        _transform = _transform + 100;
        if (_transform > _itemTransform) {
            _itemTransform = _itemTransform + 300;
            _items.forEach(function(current) {
                current.style.transform = 'translateX(' + -(_itemTransform) + '%)';
            })    
        }
    }
    _itemsList.style.transform = 'translateX(' + _transform + '%)';
    if (_transform % 300 == 0) {
        _itemTransform = _transform;
        _items.forEach(function(current) {
            current.style.transform = 'translateX(' + -(_itemTransform) + '%)';
        })
    }
}

eventsAdder();
